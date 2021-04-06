import { setShowModal, setHideModal } from './actionCreator'
import { getCustomer } from '../customer/middleware'

export const showSubscribeModal = () => async (dispatch, getState) => {
  const {auth: { isLogin }} = getState()
  let customerEmail = ''

  if (isLogin) {
    const { data, status } = await getCustomer()
    if (status === 200) customerEmail = data.email
  }
  dispatch(setShowModal(customerEmail))
}
export const hideSubscribeModal = () => (dispatch) => dispatch(setHideModal())
