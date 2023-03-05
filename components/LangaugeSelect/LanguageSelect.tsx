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
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { FlagIconCode } from 'react-flag-kit'

function LanguageSelect() {
  const { i18n } = useTranslation()
  const router = useRouter()

  const flag: FlagIconCode = router.locale === 'en' ? 'US' : 'ES'

  const [selectedLanguage, setSelectedLanguage] = React.useState({
    label: 'English',
    flag: <FlagIcon code={flag} />,
  })

  return (
    <Box zIndex={2}>
      <Menu>
        <MenuButton>
          <HStack>
            {' '}
            {selectedLanguage.flag} {selectedLanguage.label} <ChevronDownIcon />{' '}
          </HStack>
        </MenuButton>
        <MenuList maxW="50px">
          <MenuItem
            onClick={() => {
              i18n.changeLanguage('en')
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
            onClick={() => {
              i18n.changeLanguage('es')
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
