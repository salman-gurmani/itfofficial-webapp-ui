import { User as FirebaseUser } from 'firebase/auth'

export interface State {
  page?: string
  isSignInModal: boolean
  isSignUpModalOpen: boolean
  isForgotModalOpen: boolean
  user: FirebaseUser | null
  isLoading: boolean
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
