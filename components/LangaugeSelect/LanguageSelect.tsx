import * as React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  HStack,
  Text,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { FlagIcon } from 'react-flag-kit'
import { useRouter } from 'next/router'
import { FlagIconCode } from 'react-flag-kit'

function LanguageSelect() {
  const router = useRouter()

  const flag: FlagIconCode = router.locale === 'en' ? 'US' : 'ES'

  const [selectedLanguage, setSelectedLanguage] = React.useState({
    label: 'English',
    flag: <FlagIcon code={flag} />,
  })

  return (
    <Box zIndex={2} mt={1}>
      <Menu>
        <MenuButton>
          <HStack>
            {' '}
            {selectedLanguage.flag} {selectedLanguage.label}{' '}
            <ChevronDownIcon color="black" />{' '}
          </HStack>
        </MenuButton>
        <MenuList minWidth="80px" padding={1} borderRadius="lg">
          <MenuItem
            borderRadius="md"
            color="black"
            width="160px"
            _hover={{ bg: 'gray.800', color: 'white' }}
            onClick={() => {
              router.push('/', '/', { locale: 'en' })
              setSelectedLanguage({
                label: 'English',
                flag: <FlagIcon code="US" />,
              })
            }}
          >
            <HStack>
              <FlagIcon code="US" /> <Text>English</Text>
            </HStack>
          </MenuItem>
          <MenuItem
            borderRadius="md"
            fontFamily="kanit"
            fontWeight={400}
            color="black"
            _hover={{ bg: 'gray.800', color: 'white' }}
            onClick={() => {
              router.push('/', '/', { locale: 'es' })
              setSelectedLanguage({
                label: 'French',
                flag: <FlagIcon code="ES" />,
              })
            }}
          >
            <HStack>
              <FlagIcon code="ES" /> <Text>Español</Text>
            </HStack>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}
export { LanguageSelect }
