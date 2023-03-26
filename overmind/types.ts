import { User as FirebaseUser } from 'firebase/auth'
export type Page = 'Index'

export interface State {
  page?: Page
  isSignInModal: boolean
  isSignUpModalOpen: boolean
  isForgotModalOpen: boolean
  user: FirebaseUser | null
  isLoading: boolean
  items: []
}

export interface SignUpFormTypes {
  username: string
  password: string
  firstName: string
  lastName: string
}
export interface SignInFormTypes {
  username: string
  password: string
}
export interface ProfileType {
  user: FirebaseUser
  displayName?: string
  photoUrl?: string
}
