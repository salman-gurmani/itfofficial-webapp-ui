import { useState } from 'react'
import { Box } from '@chakra-ui/react'

function HoverCard({ children, setOnHover }) {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
    setOnHover(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setOnHover(false)
  }

  return (
    <Box
      w={{ base: '350px' }}
      h="350px"
      borderRadius="sm"
      p={0.2}
      backgroundColor="gray.200"
      position="relative"
      boxShadow={isHovering ? '2xl' : 'md'}
      transform={isHovering ? 'translateY(-5px)' : 'none'}
      transition="all 0.3s ease-in-out"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        bg="white"
        width="100%"
        height="100%"
        borderRadius="sm"
        justifyContent="center"
        display="flex"
      >
        {children}
      </Box>
    </Box>
  )
}

export { HoverCard }
