import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  User as FirebaseUser,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { firebaseConfig } from '../config/firebaseConfig'
import { SignInFormTypes, SignUpFormTypes } from './types'

export const apiEffects = (() => {
  let auth
  return {
    initialize() {
      initializeApp(firebaseConfig)
      auth = getAuth()
    },
    async signUp({
      username,
      password,
    }: SignUpFormTypes): Promise<FirebaseUser | null> {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          username,
          password
        )
        return userCredential.user
      } catch (error) {
        throw new Error(error)
      }
    },
    async signIn({
      username,
      password,
    }: SignInFormTypes): Promise<FirebaseUser | null> {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          username,
          password
        )
        return userCredential.user
      } catch (error) {
        throw new Error(error)
      }
    },
    async logout() {
      return await signOut(auth)
    },
    async updateProfile({
      user,
      displayName,
      photoURL,
    }: {
      user: FirebaseUser
      displayName?: string
      photoURL?: string
    }): Promise<boolean> {
      try {
        await updateProfile(user, { displayName, photoURL })
        return true
      } catch (error) {
        console.error(error)
        return false
      }
    },
    async sendVerificationEmail({ user }: { user: FirebaseUser }) {
      try {
        return await sendEmailVerification(user)
      } catch (error) {
        throw new Error(error)
      }
    },
    async forgotPassword({ email }: { email: string }) {
      try {
        return await sendPasswordResetEmail(auth, email)
      } catch (error) {
        throw new Error(error)
      }
    },
    async autoLogin() {
      const auth1 = await getAuth()
      return auth1
    },
  }
})()
