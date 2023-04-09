import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  Avatar,
  MenuList,
  MenuDivider,
  HStack,
  Divider,
  VStack,
  Spinner,
} from '@chakra-ui/react'
import { MdOutlineLogout } from 'react-icons/md'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'

import { css } from '@emotion/react'
import Image from 'next/image'
import { HomeImages } from '../Images'
import { LanguageSelect } from '../LangaugeSelect'
import { useTranslation } from 'next-i18next'
import { useActions, useAppState } from '../../overmind'
import { AvatarWithCamera } from '../AvatarWithCamera'

const NavigationBar = () => {
  const state = useAppState()

  const { user, isLoading } = state

  const { isOpen, onToggle } = useDisclosure()

  const boxStyle = css`
    width: 100%;
    z-index: 2;
    padding: 0px 32px;
    background: white;
    height: 72px;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 4px -1px rgba(57, 76, 96, 0.15);
  `

  return (
    <Box css={boxStyle}>
      <Flex
        color={useColorModeValue('white', 'white')}
        minH={'30px'}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Image
            {...HomeImages.logo}
            style={{ maxWidth: 150, maxHeight: 40 }}
            alt="Logo"
          />

          <Flex
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
            ml="24px"
          >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          alignItems="center"
          direction={'row'}
          spacing={2}
          position="absolute"
          right={user ? '0px' : '32px'}
        >
          {isLoading && <Spinner />}

          <LanguageSelect />

          {user && !isLoading && <UserProfile />}
          {!user && !isLoading && <SignOutUser />}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}
const SignOutUser = () => {
  const actions = useActions()
  const { t } = useTranslation()
  return (
    <Box>
      <HStack spacing={4}>
        <Button
          fontFamily="kanit"
          onClick={() => actions.activeSignInModal(true)}
          fontWeight={400}
          bg="rgba(64,87,109,.07)"
          color="blackAlpha.900"
          size="md"
          borderRadius="4px"
          height="40px"
          width="90px"
          _hover={{ bg: 'gray.200' }}
          fontSize={17}
        >
          {t('login')}
        </Button>
        <Button
          colorScheme="red"
          onClick={() => actions.activeSignUpModal(true)}
          fontFamily="kanit"
          fontWeight={400}
          size="md"
          borderRadius="4px"
          height="40px"
          width="90px"
        >
          {t('createAnAccount')}
        </Button>
      </HStack>
    </Box>
  )
}
const DesktopNav = () => {
  const linkColor = useColorModeValue('black', 'black')
  const linkHoverColor = useColorModeValue('red', 'white')

  const { t } = useTranslation()
  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                href={navItem.href ?? '#'}
                fontSize={{ base: 'xs', sm: 'xs', md: 'xs', xl: 'sm' }}
                fontFamily="roboto"
                fontWeight={500}
                color={linkColor}
                outline="none"
                position="relative"
                transition="all 0.3s ease-in-out"
                transform="scale(1)"
                _after={{
                  bottom: '-2px',
                  content: "''",
                  height: '2px',
                  left: 0,
                  position: 'absolute',
                  width: 0,
                  backgroundColor: linkHoverColor,
                  transition: 'width 0.3s ease-in-out',
                }}
                _hover={{
                  textDecoration: 'none',
                  transform: 'scale(0.95)',
                  color: linkHoverColor,
                  '&::after': {
                    width: '100%',
                  },
                }}
              >
                {t(navItem.label)}
                {navItem.children && <ChevronDownIcon />}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={1}
                maxWidth={200}
                bg="#FAF9F6"
                p={2}
                rounded={'xl'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  const { t } = useTranslation()

  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{
        bg: useColorModeValue('gray.900', 'gray.900'),
        textDecoration: 'none',
      }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            color="black"
            _groupHover={{ color: 'red.400' }}
            fontFamily="kanit"
            fontSize="xs"
            fontWeight={600}
          >
            {t(label)}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'red.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'home',
  },

  {
    label: 'membership',
    children: [
      { label: 'groupMembership', href: '#' },
      { label: 'individualMembership', href: '#' },
      { label: 'danRecognisationForm', href: '#' },
      { label: 'umpireQuizes', href: '#' },
    ],
  },
  {
    label: 'certificates',
    children: [
      { label: 'blackBeltCertificate', href: '#' },
      { label: 'blackBeltRecognition', href: '#' },
      { label: 'colorBeltCertificate', href: '#' },
      { label: 'additionalCertification', href: '#' },
    ],
  },
  {
    label: 'inMemoriam',
    href: '#',
  },
  {
    label: 'about',
    children: [
      {
        label: 'organisationalStructure',
        href: '#',
      },
      {
        label: 'ourProgram',
        href: '#',
      },
      {
        label: 'ourTeam',
        href: '#',
      },
      {
        label: 'governance',
        children: [
          { label: 'trademark', href: '#' },
          { label: 'administrativeFunctions', href: '#' },
        ],
      },
      {
        label: 'documents',
        href: '#',
      },
      {
        label: 'umpireAndCompetition',
        href: '#',
      },
    ],
  },
]
const UserProfile = () => {
  const actions = useActions()
  const state = useAppState()
  return (
    <Flex alignItems={'center'} padding={4} margin={8}>
      <Menu>
        <MenuButton
          as={Button}
          rounded={'full'}
          variant={'link'}
          cursor={'pointer'}
          minW={0}
        >
          <Avatar width="45px" height="45px" name={state.user.displayName} />
        </MenuButton>
        <MenuList padding={2}>
          <HStack>
            <AvatarWithCamera name={state.user.displayName} />
            <VStack spacing={0}>
              <Text color="black" fontSize="md" fontFamily="kanit">
                {state.user.displayName}
              </Text>
              <Text color="black">{state.user.email}</Text>
            </VStack>
          </HStack>

          <Divider color="black" mb={2} h="4px" />
          <MenuItem
            color="black"
            _hover={{ bg: 'gray.800', color: 'white' }}
            borderRadius="md"
            fontFamily="kanit"
            fontWeight="light"
          >
            Account settings
          </MenuItem>
          <MenuItem
            color="black"
            _hover={{ bg: 'gray.800', color: 'white' }}
            borderRadius="md"
            fontFamily="kanit"
            fontWeight="light"
          >
            Membership
          </MenuItem>
          <MenuDivider />
          <MenuItem
            onClick={() => actions.signOut()}
            color="black"
            _hover={{ bg: 'gray.800', color: 'white' }}
            borderRadius="md"
            fontFamily="kanit"
            fontWeight="light"
          >
            <HStack>
              <Icon as={MdOutlineLogout} />
              <Text>Sign out</Text>
            </HStack>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}

export { NavigationBar }
