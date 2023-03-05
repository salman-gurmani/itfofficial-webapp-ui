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
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ArrowForwardIcon,
} from '@chakra-ui/icons'

import { css } from '@emotion/react'
import Image from 'next/image'
import { HomeImages } from '../Images'
import { PrimaryButton } from '../uikit'
import { LanguageSelect } from '../LangaugeSelect'
import { useTranslation } from 'next-i18next'
const NavigationBar = () => {
  const { isOpen, onToggle } = useDisclosure()
  const { t } = useTranslation()

  const boxStyle = css`
    width: 100%;
    z-index: 2;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.7);

    @media screen and (min-width: 1248px) {
      position: absolute;

      width: 75%;
      top: 6%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  `

  return (
    <Box css={boxStyle}>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
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
            style={{ maxWidth: 200, maxHeight: 80 }}
            alt="Logo"
          />

          <Flex
            display={{ base: 'none', md: 'flex' }}
            alignItems="center"
            ml={2}
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
        >
          <LanguageSelect />
          <PrimaryButton fontFamily="kanit" rightIcon={<ArrowForwardIcon />}>
            {t('login')}
          </PrimaryButton>
          <Button colorScheme="red" fontFamily="kanit" variant="outline">
            {t('createAnAccount')}
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
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
                fontFamily="kanit"
                fontWeight={600}
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
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{
        bg: useColorModeValue('white', 'gray.900'),
        textDecoration: 'none',
      }}
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'red.400' }}
            fontFamily="kanit"
            fontSize="xs"
            fontWeight={600}
          >
            {label}
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

export { NavigationBar }
