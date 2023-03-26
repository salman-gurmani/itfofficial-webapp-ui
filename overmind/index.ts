import {
  createStateHook,
  createActionsHook,
  createEffectsHook,
} from 'overmind-react'
import * as actions from './actions'
import * as effects from './effects'
import { state } from './state'
import { onInitialize } from './onInitialize'
import { IContext } from 'overmind'
export const config = { state, actions, onInitialize, effects }

export type Context = IContext<typeof config>
export const useAppState = createStateHook<Context>()
export const useActions = createActionsHook<Context>()
export const useEffects = createEffectsHook<Context>()
