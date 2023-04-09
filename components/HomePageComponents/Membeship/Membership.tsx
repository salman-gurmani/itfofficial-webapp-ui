import {
  Box,
  Heading,
  Grid,
  GridItem,
  VStack,
  Center,
  Stack,
  useColorModeValue,
  Text,
  Button,
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
const MembershipContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',

  backgroundColor: 'white',
})

const GroupMembership = () => {
  return (
    <Center py={6} px={2}>
      <Box
        maxW={'400px'}
        h="450px"
        maxH="500px"
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="md"
        rounded={'md'}
        overflow={'hidden'}
        position="relative"
      >
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}
        >
          <Heading
            fontSize={'xl'}
            fontFamily="kanit"
            fontWeight={700}
            p={2}
            px={3}
            rounded={'full'}
          >
            Group Membership
          </Heading>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'md'} fontWeight={300} fontFamily="kanit">
              Group affiliation is the top priority at ITF HQ Korea. With our
              group membership program, we provide practical advice as well as
              many benefits to the group members regardless of their age.
            </Text>
          </Stack>
        </Stack>

        <Box
          bg={useColorModeValue('gray.50', 'gray.900')}
          px={6}
          py={10}
          position="absolute"
          bottom={0}
          left={0}
          right={0}
        >
          <Button
            mt={10}
            w={'full'}
            colorScheme="twitter"
            color={'white'}
            rounded={'md'}
            boxShadow={'0 5px 20px 0px #1DA1F2'}
          >
            Get Group Membership
          </Button>
        </Box>
      </Box>
    </Center>
  )
}
const SingleMembership = () => {
  const router = useRouter()
  return (
    <Center py={6} px={2}>
      <Box
        maxW={'400px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="md"
        rounded={'md'}
        overflow={'hidden'}
      >
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}
        >
          <Heading
            fontSize={'xl'}
            fontFamily="kanit"
            fontWeight={700}
            p={2}
            px={3}
            rounded={'full'}
          >
            Single Membership
          </Heading>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'md'} fontWeight={300} fontFamily="kanit">
              Individual membership is available for anyone (practitioners,
              parents, guardians, supporters, family members etc.) interested in
              Taekwon-Do and who want to be a part of the International
              Taekwon-Do Federation Headquarters Korea.
            </Text>
          </Stack>
        </Stack>

        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <Button
            mt={10}
            w={'full'}
            color={'white'}
            rounded={'md'}
            colorScheme="twitter"
            boxShadow={'0 5px 20px 0px #1DA1F2'}
            onClick={() => router.push('singlemembership')}
          >
            Get Single Membership
          </Button>
        </Box>
      </Box>
    </Center>
  )
}

const Membership = () => {
  return (
    <MembershipContainer>
      <VStack spacing={8}>
        <Heading fontFamily="lato" fontWeight={700}>
          A perfect fit for everyone
        </Heading>
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(2,1fr)',
          }}
          gap={{ base: 12, sm: 18, md: 24, xl: 32 }}
        >
          <GridItem>
            <GroupMembership />
          </GridItem>
          <GridItem>
            <SingleMembership />
          </GridItem>
        </Grid>
      </VStack>
    </MembershipContainer>
  )
}

export { Membership }
