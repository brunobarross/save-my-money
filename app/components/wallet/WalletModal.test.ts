import { mountSuspended, renderSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it, vi } from "vitest";
import WalletModal from "./WalletModal.vue";

const closeModal = vi.fn();

describe("WalletModal", () => {
  it("Send button should be disable if some input is null", async () => {
    const component = await mountSuspended(WalletModal, {
      props: {
        onSave: closeModal,
        type: "add"
      },
    });
    console.log(
      component
        .findComponent('[data-testid="wallet-modal-send-button"]')
        .attributes()
    );
    expect(
      component
        .findComponent('[data-testid="wallet-modal-send-button"]')
        .attributes().disabled
    ).toBe(true);
  });
});
