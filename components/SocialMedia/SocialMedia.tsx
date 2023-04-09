import { IconButton } from '@chakra-ui/react'
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'
import { Box } from '@chakra-ui/react'

const SocialMedia = ({ ...rest }) => {
  return (
    <Box
      {...rest}
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <IconButton
        aria-label="Facebook"
        icon={<FaFacebookF color="white" size={22} />}
        fill="white"
        width="42px"
        height="42px"
        minH="32px"
        background="rgba(0,0,0,0)"
        borderRadius="100%"
        _hover={{ bg: 'facebook.600' }}
      />
      <IconButton
        aria-label="Twitter"
        icon={<FaTwitter size={22} />}
        color="white"
        width="42px"
        height="42px"
        background="rgba(0,0,0,0)"
        borderRadius="50%"
        _hover={{ bg: 'twitter.600' }}
      />
      <IconButton
        aria-label="YouTube"
        icon={<FaYoutube size={22} />}
        color="white"
        width="42px"
        height="42px"
        background="rgba(0,0,0,0)"
        borderRadius="50%"
        _hover={{ bg: '#c30000' }}
      />
      <IconButton
        aria-label="Instagram"
        icon={<FaInstagram size={22} />}
        color="white"
        width="42px"
        height="42px"
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
