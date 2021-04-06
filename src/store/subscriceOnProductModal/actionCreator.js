import { SHOW_MODAL, HIDE_MODAL } from './actionType'

export const setShowModal = (payload) => ({ type: SHOW_MODAL, payload })
export const setHideModal = () => ({ type: HIDE_MODAL })