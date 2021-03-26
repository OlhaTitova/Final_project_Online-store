import { setShowModal, setHideModal } from './actionCreator'

export const showModal = () => (dispatch) => dispatch(setShowModal())
export const hideModal = () => (dispatch) => dispatch(setHideModal())
