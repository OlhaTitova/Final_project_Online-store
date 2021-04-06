import { SHOW_MODAL, HIDE_MODAL } from './actionType'

export const MODULE_NAME = 'subscribeModal'
export const selectIsOpenModal = (state) => state[MODULE_NAME].isOpen
export const selectCustomerEmail = (state) => state[MODULE_NAME].customerEmail

const initialState = {
  isOpen: false,
  customerEmail: ''
}

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_MODAL:
      return {
        ...state,
        isOpen: true,
        customerEmail: payload
      }
    case HIDE_MODAL:
      return {
        ...state,
        isOpen: false,
        customerEmail: ''
      }
    default:
      return {
        ...state
      }
  }
}