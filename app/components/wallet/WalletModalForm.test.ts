import { mountSuspended } from "@nuxt/test-utils/runtime";
import { describe, expect, it } from "vitest";
import WalletModalForm from "./WalletModalForm.vue";

describe("WalletModalForm", () => {
  it("Send button should be disable initially", async () => {
    const wrapper = await mountSuspended(WalletModalForm);
    expect(
      wrapper
        .find("[data-testid='wallet-modal-send-button']")
        .attributes("disabled")
    ).toBe("");
  });
  it("Should show error when a input name contain only blank spaces", async () => {
    const wrapper = await mountSuspended(WalletModalForm);
    const inputName = wrapper.find("[data-testid='wallet-modal-input-name']");
    await inputName.setValue("       ");
    await inputName.trigger("blur");
    expect(inputName.classes()).toContain("ring-error");
  });
  it("Should show error when a input balance contain only blank spaces", async () => {
    const wrapper = await mountSuspended(WalletModalForm);
    const inputName = wrapper.find("[data-testid='wallet-modal-input-name']");
    await inputName.setValue("       ");
    await inputName.trigger("blur");
    expect(inputName.classes()).toContain("ring-error");
  });
});
