import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  ModalOverlay,
  Modal,
  ModalContent,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react'
import { useActions, useAppState } from '../../overmind'

function SignIn() {
  const actions = useActions()
  const state = useAppState()

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().required('Required'),
  })

  return (
    <Modal
      isCentered
      isOpen={state.isSignInModal}
      onClose={() => actions.activeSignInModal(false)}
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) drop-shadow(4px 4px 10px blue)"
      />
      <ModalContent bg={useColorModeValue('gray.50', 'gray.800')}>
        <ModalCloseButton />
        <ModalBody>
          <Flex
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
          >
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={async (values, { setFieldError }) => {
                const response = await actions.signIn({
                  username: values.email,
                  password: values.password,
                })

                if (response) {
                  actions.activeSignInModal(false)
                } else setFieldError('email', 'Email or password is invalid')
              }}
            >
              {(props) => (
                <Form>
                  <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                      <Heading
                        justifyContent="center"
                        textAlign="center"
                        fontSize={'4xl'}
                      >
                        Sign in to your account
                      </Heading>
                      <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool{' '}
                        <Link color={'blue.400'}>features</Link> ✌️
                      </Text>
                    </Stack>
                    <Box rounded={'lg'} boxShadow={'lg'} p={4}>
                      <Stack spacing={4}>
                        <Field name="email">
                          {({ field, form }) => (
                            <FormControl
                              id="email"
                              isInvalid={
                                form.errors.email && form.touched.email
                              }
                            >
                              <FormLabel>Email address</FormLabel>
                              <Input type="email" {...field} />
                              <Text mt={1} color={'red.500'} fontSize={'sm'}>
                                {form.touched.email && form.errors.email}
                              </Text>
                            </FormControl>
                          )}
                        </Field>
                        <Field name="password">
                          {({ field, form }) => (
                            <FormControl
                              id="password"
                              isInvalid={
                                form.errors.password && form.touched.password
                              }
                            >
                              <FormLabel>Password</FormLabel>
                              <Input type="password" {...field} />
                              <Text mt={1} color={'red.500'} fontSize={'sm'}>
                                {form.touched.password && form.errors.password}
                              </Text>
                            </FormControl>
                          )}
                        </Field>
                        <Stack spacing={10}>
                          <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}
                          >
                            <Field name="rememberMe">
                              {({ field }) => (
                                <Checkbox {...field}>Remember me</Checkbox>
                              )}
                            </Field>
                            <Link
                              color={'blue.400'}
                              onClick={() => {
                                actions.activeForgotModal(true)
                              }}
                            >
                              Forgot password?
                            </Link>
                          </Stack>
                          <Button
                            type="submit"
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                              bg: 'blue.500',
                            }}
                            isLoading={props.isSubmitting}
                          >
                            Sign in
                          </Button>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
export { SignIn }
