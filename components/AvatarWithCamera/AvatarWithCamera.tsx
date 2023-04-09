import React, { useState, useRef } from 'react'
import { Avatar, AvatarBadge, Box, Icon, Input, VStack } from '@chakra-ui/react'
import { FaCamera } from 'react-icons/fa'

interface AvatarProps {
  name: string
}

const AvatarWithCamera: React.FC<AvatarProps> = ({ name }) => {
  const [hover, setHover] = useState(false)
  const [, setImage] = useState('')

  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleImageUpload = () => {
    const file = inputRef.current?.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        setImage(reader.result as string)
      }
    }
  }

  const handleAvatarClick = () => {
    inputRef.current?.click()
  }

  return (
    <VStack spacing={2} alignItems="center">
      <Avatar
        name={name}
        boxSize="60px"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleAvatarClick}
        cursor="pointer"
      >
        {hover && (
          <Box
            position="absolute"
            background="blackAlpha.600"
            width="60px"
            height="60px"
            display="flex"
            justifyContent="center"
            alignContent="center"
            alignItems="center"
            borderRadius="50%"
          >
            <Icon as={FaCamera} color="white" boxSize="22px" />
          </Box>
        )}
        <AvatarBadge boxSize={25} bg="green.500" cursor="pointer"></AvatarBadge>
      </Avatar>
      <Input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleImageUpload}
        ref={inputRef}
        style={{ display: 'none' }}
      />
    </VStack>
  )
}

export { AvatarWithCamera }
