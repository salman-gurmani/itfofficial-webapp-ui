import { State } from './types'

export const state: State = {
  // NextJS:
  page: undefined,
  isSignInModal: false,
  isSignUpModalOpen: false,
  isForgotModalOpen: false,
  isLoading: true,
  user: null,
  items: [],
}
