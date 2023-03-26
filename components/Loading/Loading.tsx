import { Spinner, Box } from '@chakra-ui/react'
import { useAppState } from '../../overmind'

function Loading() {
  const state = useAppState()
  if (state.isLoading)
    return (
      <Box
        position="absolute"
        top={0}
        bottom={0}
        left={0}
        right={0}
        backgroundColor="rgba(0, 0, 0, 0.85)"
        zIndex="overlay"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Box ml={3} fontSize="xl" fontWeight="bold" color="white">
          Loading...
        </Box>
      </Box>
    )
  else return null
}
export { Loading }
