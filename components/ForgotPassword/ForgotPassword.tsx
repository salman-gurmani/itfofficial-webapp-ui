import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  FormErrorMessage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { useActions, useAppState } from '../../overmind'

function ForgotPasswordModal(): JSX.Element {
  const [emailStatus, setEmailStatus] = useState(false)
  const actions = useActions()
  const state = useAppState()
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
  })

  return (
    <Modal
      isCentered
      isOpen={state.isForgotModalOpen}
      onClose={() => actions.activeForgotModal(false)}
      size="md"
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) drop-shadow(4px 4px 10px blue)"
      />
      <ModalContent
        bg={useColorModeValue('gray.50', 'gray.800')}
        overflowY="hidden"
      >
        <ModalCloseButton />
        <ModalBody>
          <Flex
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
          >
            {emailStatus && <EmailSendMessage />}{' '}
            {!emailStatus && (
              <Formik
                initialValues={{ email: '' }}
                validationSchema={validationSchema}
                onSubmit={async ({ email }, { setFieldError }) => {
                  try {
                    await actions.resetPassword({ email })
                    setEmailStatus(true)
                  } catch (error) {
                    setFieldError(
                      'email',
                      'error while sending email!, try again'
                    )
                  }
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Stack
                      spacing={4}
                      w={'full'}
                      maxW={'md'}
                      rounded={'xl'}
                      boxShadow={'lg'}
                      p={6}
                      my={12}
                    >
                      <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '2xl', md: '3xl' }}
                      >
                        Forgot your password?
                      </Heading>
                      <Text
                        fontSize={{ base: 'sm', sm: 'md' }}
                        color={'gray.800'}
                      >
                        You&apos;ll get an email with a reset link
                      </Text>
                      <FormControl
                        id="email"
                        isInvalid={errors.email && touched.email}
                      >
                        <Input
                          as={Field}
                          name="email"
                          placeholder="your-email@example.com"
                          _placeholder={{ color: 'gray.500' }}
                          type="email"
                        />
                        {errors.email && touched.email && (
                          <FormErrorMessage>{errors.email}</FormErrorMessage>
                        )}
                      </FormControl>
                      <Stack spacing={6}>
                        <Button
                          type="submit"
                          bg={'blue.400'}
                          color={'white'}
                          _hover={{
                            bg: 'blue.500',
                          }}
                        >
                          Request Reset
                        </Button>
                      </Stack>
                    </Stack>
                  </Form>
                )}
              </Formik>
            )}
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
export const EmailSendMessage = () => {
  return (
    <Stack alignItems="center">
      <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
        Reset Password
      </Heading>
      <Flex
        background="green.300"
        borderRadius={4}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        height="auto"
        padding={2}
        wrap="wrap"
      >
        <Text color="green.900">Instruction has been sent via email.</Text>
      </Flex>
    </Stack>
  )
}
export { ForgotPasswordModal }
