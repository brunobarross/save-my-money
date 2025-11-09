// @noErrors
import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";
import {
  mockNuxtImport,
  mountSuspended,
  renderSuspended,
} from "@nuxt/test-utils/runtime";
import { WalletCard } from "#components";
import type { Wallet } from "~/components/wallet/wallet.types";
import { fireEvent, screen } from "@testing-library/vue";

const mockWallet: Wallet = {
  id: 1,
  name: "Test Wallet",
  balance: "100.00",
};

const mockOpenDeleteModal = vi.fn();
const mockModalClose = vi.fn();
const mockOverlayCreate = vi.fn(() => ({
  open: mockOpenDeleteModal,
  close: mockModalClose,
}));

const mockToast = vi.fn();

const mockMutateAsync = vi.fn();
const mockInvalidateQueries = vi.fn();

const mockMutationValues = {
  isSucces: false,
  isError: false,
};

mockNuxtImport("useOverlay", () => {
  return () => {
    return { create: mockOverlayCreate };
  };
});

vi.mock("@/components/wallet/wallet.queries", () => ({
  removeWallet: () => ({
    mutateAsync: mockMutateAsync,
    isSuccess: { value: mockMutationValues.isSucces },
    isError: { value: mockMutationValues.isError },
  }),
}));

vi.mock("@tanstack/vue-query", () => ({
  useQueryClient: () => ({
    invalidateQueries: mockInvalidateQueries,
  }),
}));

describe("WalletCard", () => {
  beforeAll(()=>{
    vi.clearAllMocks()
    mockMutationValues.isError = false
    mockMutationValues.isSucces = false
  })
  it("should show the name and balance correctly", async () => {
    const component = await mountSuspended(WalletCard, {
      props: {
        canDelete: true,
        wallet: mockWallet,
      },
    });
    expect(component.get('[data-testid="wallet-card-name"]').text()).toEqual(
      mockWallet.name
    );
    expect(component.get('[data-testid="wallet-card-balance"]').text()).toEqual(
      mockWallet.balance
    );
  });

  it("should exist delete button if canDelete is true", async () => {
    mockMutationValues.isSucces = false;
    mockMutationValues.isError = true;
    const component = await mountSuspended(WalletCard, {
      props: {
        canDelete: false,
        wallet: mockWallet,
      },
    });
    expect(component.find('[data-testid="wallet-card-delete"]').exists()).toBe(
      false
    );
  });

  it("should exist delete button if canDelete is true", async () => {
    const component = await mountSuspended(WalletCard, {
      props: {
        canDelete: true,
        wallet: mockWallet,
      },
    });
    expect(component.find('[data-testid="wallet-card-delete"]').exists()).toBe(
      true
    );
  });

  it("should open the modal delete on click delete button", async () => {
    const component = await renderSuspended(WalletCard, {
      props: {
        canDelete: true,
        wallet: mockWallet,
      },
    });
    const deleteBtn = screen.getByTestId("wallet-card-delete");
    await fireEvent.click(deleteBtn);
    expect(mockOpenDeleteModal).toHaveBeenCalledTimes(1);
    expect(mockOpenDeleteModal).toHaveBeenCalledWith({
      title: `Deseja remover a carteira "${mockWallet.name}" ?`,
    });
  });

  it("should show error toast on failed", async () => {
    mockMutationValues.isSucces = false;
    mockMutationValues.isError = true;
    mockMutateAsync.mockResolvedValueOnce({});
    const mockCallback = mockOverlayCreate?.mock.calls[0][1].props.onAccept;
    await mockCallback();
    expect(mockMutateAsync).toHaveBeenCalledWith(mockWallet.id);
    expect(mockToast).toHaveBeenCalledWith({
      color: "error",
      title: "Ocorreu um erro ao deletar esta carteira!",
    });
  });

  it("should called delete, invalidate queries and close modal on sucess", async () => {
    mockMutationValues.isSucces = true;
    mockMutationValues.isError = false;
    mockMutateAsync.mockResolvedValueOnce({});
    const mockCallback = mockOverlayCreate?.mock.calls[0][1].props.onAccept;
    await mockCallback();
    expect(mockMutateAsync).toHaveBeenCalledWith(mockWallet.id);
    expect(mockInvalidateQueries).toHaveBeenCalledTimes(1);
    expect(mockModalClose).toHaveBeenCalledTimes(1);
  });
});
