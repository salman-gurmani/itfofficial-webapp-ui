import { Box, Flex, Link, useColorMode } from '@chakra-ui/react'
import { css } from '@emotion/react'

const Footer = () => {
  const { colorMode } = useColorMode()

  return (
    <Box
      as="footer"
      bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
      color={colorMode === 'light' ? 'gray.900' : 'gray.50'}
      marginTop="4rem"
      padding="1.5rem"
      textAlign="center"
    >
      <Flex justifyContent="center">
        <Link
          href="https://example.com"
          css={css`
            &:hover {
              text-decoration: underline;
            }
          `}
        >
          My App
        </Link>
        {' - '}
        <Link
          href="https://example.com/about"
          css={css`
            &:hover {
              text-decoration: underline;
            }
          `}
        >
          About
        </Link>
      </Flex>
      <Box marginTop="1rem" fontSize="sm">
        © {new Date().getFullYear()} My App. All rights reserved.
      </Box>
    </Box>
  )
}

export { Footer }
