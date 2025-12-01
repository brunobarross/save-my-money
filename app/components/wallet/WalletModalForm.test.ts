import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it, vi } from 'vitest'
import WalletModalForm from './WalletModalForm.vue'

const onSave = vi.fn()

describe('WalletModalForm', () => {
  it('Send button should be disable initially', async () => {
    const wrapper = await mountSuspended(WalletModalForm)
    expect(wrapper.find("[data-testid='wallet-modal-send-button']").attributes('disabled')).toBe('')
  })
  it('Should show error when a input name contain only blank spaces', async () => {
    const wrapper = await mountSuspended(WalletModalForm)
    const inputName =wrapper.find("[data-testid='wallet-modal-input-name']")
    inputName.setValue('         ')
    expect(inputName.text()).toBe('         ')

    expect(wrapper.find("[data-testid='wallet-modal-input-name']").text()).toMatchFileSnapshot()
  })
})
