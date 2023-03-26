export const onInitialize = async ({ effects }) => {
  console.log('onInitialized called')
  effects.api.initialize()
}
