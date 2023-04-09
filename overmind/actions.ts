import { User as FirebaseUser } from 'firebase/auth'
import { getAuth } from 'firebase/auth'
import { ProfileType, SignInFormTypes, SignUpFormTypes } from './types'
import { Context } from '.'
import { rehydrate } from 'overmind'

export const onInitializeOvermind = async ({ effects, actions }: Context) => {
  effects.apiEffects.initialize()
  actions.fetchUser()
}
export const changePage = async ({ state, actions }, mutations) => {
  rehydrate(state, mutations || [])

  switch (state.page) {
    case 'Index':
      // Do some additional logic
      break
    case 'singlemembership':
      actions.fetchUser(mutations)
      break
    default:
      break
  }
}
export const resetAllModals = ({ state }) => {
  state.isSignInModal = false
  state.isSignUpModalOpen = false
  state.isForgotModalOpen = false
}
export const activeSignInModal = ({ state, actions }, value: boolean) => {
  actions.resetAllModals()
  state.isSignInModal = value
}
export const activeSignUpModal = ({ state, actions }, value: boolean) => {
  actions.resetAllModals()
  state.isSignUpModalOpen = value
}
export const activeForgotModal = ({ state, actions }, value: boolean) => {
  actions.resetAllModals()
  state.isForgotModalOpen = value
}
export const signUp = async (
  { effects, state, actions }: Context,
  data: SignUpFormTypes
) => {
  try {
    const user = await effects.apiEffects.signUp(data)
    const displayName = data.firstName + ' ' + data.lastName
    state.user = user

    if (user) {
      await actions.updateProfile({ user, displayName })
      await effects.apiEffects.sendVerificationEmail({ user })
    }

    return user
  } catch (error) {
    return null
  }
}
export const signIn = async (
  { state, effects }: Context,
  data: SignInFormTypes
) => {
  try {
    const response = await effects.apiEffects.signIn(data)
    state.user = response
    return response
  } catch (error) {
    return null
  }
}
export const updateProfile = async (
  { effects }: Context,
  data: ProfileType
) => {
  return await effects.apiEffects.updateProfile(data)
}
export const resetPassword = async ({ effects }: Context, { email }) => {
  try {
    return await effects.apiEffects.forgotPassword({ email })
  } catch (error) {
    throw new Error(error)
  }
}
export const signOut = ({ effects }: Context) => {
  return effects.apiEffects.logout()
}
export const fetchUser = async ({ state }: Context): Promise<FirebaseUser> => {
  return new Promise((resolve) => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      state.user = user
      state.isLoading = false
      unsubscribe()

      resolve(state.user)
    })
  })
}
