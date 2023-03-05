import { PrimaryLayout } from '../../components/Layout/Layout'
import { Text, Box, HStack, Button } from '@chakra-ui/react'
import { Carousel } from '../../components/Swiper'
import styled from '@emotion/styled'
import { HoverCard } from '../../components/uikit'
import Image from 'next/image'
import { HomeImages } from '../../components/Images'
import React from 'react'
import { SocialMedia } from '../../components/SocialMedia'
import { useTranslation } from 'next-i18next'
const MembershipContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  marginBottom: 20,

  backgroundColor: 'white',
})

const Home = () => {
  const [groupMemberHover, setGroupMemberHover] = React.useState(false)
  const [singleMemberHover, setSingleMemberHover] = React.useState(false)
  const [danFormHover, setDanFormHover] = React.useState(false)
  const { t } = useTranslation()
  return (
    <PrimaryLayout>
      <Carousel />
      <Box position="absolute" top={240} right={2} zIndex={2}>
        <SocialMedia flexDirection="column" />
      </Box>
      <MembershipContainer>
        <HStack spacing={4} position="absolute" zIndex={2}>
          <HoverCard setOnHover={setGroupMemberHover}>
            <Box
              width={330}
              height="40px"
              p={2}
              background="rgba(0,0,0,0.6)"
              alignItems="center"
              display="flex"
              position="absolute"
              left={2}
              top={2}
            >
              <Text color="white" size="md">
                {t('groupMembership')}
              </Text>
            </Box>
            <Image
              {...HomeImages.groupMembership}
              width={330}
              height={330}
              style={{ objectFit: 'contain' }}
              alt="Group Membership"
            />
            {groupMemberHover && (
              <Box
                width={330}
                height="330px"
                p={2}
                background="rgba(0,0,0,0.6)"
                alignItems="center"
                justifyContent="center"
                display="flex"
                position="absolute"
                left={2}
                top={2}
              >
                <Button colorScheme="whatsapp" size="sm">
                  {' '}
                  {t('applyNow')}
                </Button>
              </Box>
            )}
          </HoverCard>

          <HoverCard setOnHover={setSingleMemberHover}>
            <Box
              width={330}
              height="40px"
              p={2}
              background="rgba(0,0,0,0.6)"
              alignItems="center"
              display="flex"
              position="absolute"
              left={2}
              top={2}
            >
              <Text color="white" size="md">
                {t('individualMembership')}
              </Text>
            </Box>
            <Image
              {...HomeImages.singleMembership}
              width={330}
              height={330}
              style={{ objectFit: 'contain' }}
              alt="single membership"
            />
            {singleMemberHover && (
              <Box
                width={330}
                height="330px"
                p={2}
                background="rgba(0,0,0,0.6)"
                alignItems="center"
                justifyContent="center"
                display="flex"
                position="absolute"
                left={2}
                top={2}
              >
                <Button colorScheme="whatsapp" size="sm">
                  {' '}
                  {t('applyNow')}
                </Button>
              </Box>
            )}
          </HoverCard>

          <HoverCard setOnHover={setDanFormHover}>
            <Box
              width={330}
              height="40px"
              p={2}
              background="rgba(0,0,0,0.6)"
              alignItems="center"
              display="flex"
              position="absolute"
              left={2}
              top={2}
            >
              <Text color="white" size="md">
                {t('danRecognisationForm')}
              </Text>
            </Box>
            <Image
              {...HomeImages.danFormImage}
              width={330}
              height={330}
              style={{ objectFit: 'contain' }}
              alt="Dan Recognisation Form"
            />
            {danFormHover && (
              <Box
                width={330}
                height="330px"
                p={2}
                background="rgba(0,0,0,0.6)"
                alignItems="center"
                justifyContent="center"
                display="flex"
                position="absolute"
                left={2}
                top={2}
              >
                <Button colorScheme="whatsapp" size="sm">
                  {' '}
                  {t('applyNow')}
                </Button>
              </Box>
            )}
          </HoverCard>
        </HStack>
      </MembershipContainer>
    </PrimaryLayout>
  )
}

export { Home }
