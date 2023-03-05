import { IconButton } from '@chakra-ui/react'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { Box } from '@chakra-ui/react'

const SocialMedia = ({ ...rest }) => {
  return (
    <Box {...rest} display="flex" width="48px">
      <IconButton
        aria-label="Facebook"
        icon={<FaFacebookF color="white" />}
        fill="white"
        minH="48px"
        background="rgba(0,0,0,0)"
        borderRadius="50%"
        _hover={{ bg: 'facebook.600' }}
      />
      <IconButton
        aria-label="Twitter"
        icon={<FaTwitter />}
        color="white"
        minH="48px"
        background="rgba(0,0,0,0)"
        borderRadius="50%"
        _hover={{ bg: 'twitter.600' }}
      />
      <IconButton
        aria-label="YouTube"
        icon={<FaYoutube />}
        color="white"
        minH="48px"
        background="rgba(0,0,0,0)"
        borderRadius="50%"
        _hover={{ bg: '#c30000' }}
      />
      <IconButton
        aria-label="Instagram"
        icon={<FaInstagram />}
        color="white"
        minH="48px"
        background="rgba(0,0,0,0)"
        borderRadius="50%"
        _hover={{
          bgGradient:
            'linear(to-br, #fa7e1e, #d62976, #962fbf, #4f5bd5, #feda75)',
        }}
      />
    </Box>
  )
}

export { SocialMedia }
