import { ModalLayout, PrimaryLayout } from '../../components/Layout/Layout'
import {
  Text,
  Box,
  HStack,
  Button,
  Heading,
  Flex,
  VStack,
} from '@chakra-ui/react'

import styled from '@emotion/styled'
import { HoverCard } from '../../components/uikit'
import Image from 'next/image'
import { HomeImages } from '../../components/Images'
import React from 'react'

import { useTranslation } from 'next-i18next'
import { Loading } from '../../components/Loading'

import { SlickCarousel } from '../../components/SlickCarousel'
import { Membership } from '../../components/HomePageComponents/Membeship'

const MembershipContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  backgroundColor: 'white',
})

const Home = () => {
  const [groupMemberHover, setGroupMemberHover] = React.useState(false)
  const [singleMemberHover, setSingleMemberHover] = React.useState(false)
  const [danFormHover, setDanFormHover] = React.useState(false)

  const { t } = useTranslation()
  return (
    <PrimaryLayout>
      <Loading />
      <ModalLayout />

      <VStack spacing={8}>
        <Flex
          marginTop={16}
          justifyContent="center"
          direction="column"
          alignItems="center"
        >
          <Heading fontFamily="lato" fontWeight={700}>
            Want to push your limits in martial arts?
          </Heading>
          <Text
            fontFamily="kanit"
            fontSize="xl"
            color="gray.600"
            mt="20px"
            mb="20px"
          >
            Join ITF Taekwondo today and design your path to success in martial
            arts.
          </Text>
          <Button
            colorScheme="twitter"
            fontFamily="kanit"
            fontWeight={400}
            size="md"
            borderRadius="4px"
            height="40px"
          >
            Become a member
          </Button>
        </Flex>
        <SlickCarousel />
        <Membership />
        <MembershipContainer>
          <HStack spacing={4} zIndex={2}>
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
      </VStack>
    </PrimaryLayout>
  )
}

export default Home
