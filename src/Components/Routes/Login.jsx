import React, { useContext, useState } from 'react'
import { Container, Image, Button, Box, Text, Input, Checkbox } from "@chakra-ui/react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { NavLink,useNavigate } from "react-router-dom"
import { Form } from "react-bootstrap"
import { PinInput, PinInputField, HStack, useToast } from '@chakra-ui/react'
import { AuthContext } from '../../Context/AuthContext'

const Login = () => {
    const toast = useToast()
    const [formState, setFormState] = useState({
        email: "",
        password: ""
    })
    const auth = useContext(AuthContext)
    const navigate = useNavigate()
    function handleChange(e) {
        const{name, value} = e.target 
        setFormState({
            ...formState,
        [name]:value
    })

    }
    function handleSubmit(e) {
        e.preventDefault()
        fetch("https://reqres.in/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formState)
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Successfully Loged In");
        console.log(res);
        auth.handleLogin(res.token);
        navigate("/");
      })
      .catch((err) => {});
        
        
    }
    return (
        <>
            <Container display="flex" justifyContent="space-around" padding="15px" maxW="100%" backgroundColor="#f8f6ff">
                <Button colorScheme="white"><NavLink to="/"><Image width="74px" height="40px" src="https://www.shine.com/next/static/images/shine-logo.png" /></NavLink></Button>
                <Button fontWeight="bold" colorScheme="purple" color="white"><NavLink to="/register">Register</NavLink></Button>
            </Container>
            <hr />
            <br /><br />
            <Container display="flex" justifyContent="space-between" maxW="70%" padding="40px" gap="20px" backgroundColor="#f8f6ff">


                <Box maxW="50%" padding="30px" border="1px solid gray">
                    <Text fontWeight="bold" fontSize="xl" textAlign="start">Log In</Text>
                    <br />
                    <Form onSubmit={handleSubmit}>

                        <Input placeholder="Email"
                            value={formState.email}
                            onChange={handleChange}
                            name="email"
                            type="email" />
                        <br /><br />
                        <Input placeholder="Password" type="password" />
                        <Box display="flex" justifyContent="space-between">
                            <Checkbox><Text fontSize="xs" >Keep me Signed In</Text></Checkbox>
                            <Text fontSize="xs" color="blue">Forgot Password</Text>
                        </Box>
                        <br /><br />

                        <Button
                         onClick={() =>
                            toast({
                              title: 'Account Loged In.',
                              description: "We've Loged Into your account.",
                              status: 'success',
                              duration: 5000,
                              isClosable: true,
                            })
                          }
                        rightIcon={<ArrowForwardIcon />} fontWeight="bold" colorScheme="purple" color="white" width="100%" type="submit" >Log In</Button>
                        <Text color="gray" fontSize="md" fontWeight="bold">Or</Text>
                        <Button rightIcon={<ArrowForwardIcon />} fontWeight="bold" colorScheme="white" color="purple" variant="outline" width="100%" type="submit" ><NavLink to="/login">Log In With OTP</NavLink></Button>
                        <br /><br />
                        <HStack>
                            <PinInput>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                        <br />
                        <Button
                              onClick={() =>
                                toast({
                                  title: 'Account Loged In.',
                                  description: "We've Loged Into your account.",
                                  status: 'success',
                                  duration: 5000,
                                  isClosable: true,
                                })
                              }
                        rightIcon={<ArrowForwardIcon />} fontWeight="bold" colorScheme="purple" color="white" width="100%" type="submit" >Submit</Button>   
                    </Form>
                    <br />
                    <Text color="gray" fontSize="md" fontWeight="bold">Or</Text>
                    <br />
                    <Box display="flex" justifyContent="space-around">
                        <Button color="gray"  ><Image width="15px" height="15px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" />Google</Button>
                        <Button color="gray"><Image width="15px" height="15px" src="https://img.icons8.com/color/344/linkedin-circled--v1.png" />LinkedIn</Button>
                        <Button color="gray"><Image width="15px" height="15px" src="https://img.icons8.com/fluency/344/facebook-new.png" />Facebook</Button>
                    </Box>
                    <Text fontSize="xs">By syncing your social media account, you agree to shine terms and conditions</Text>
                    <br />
                    <Box backgroundColor="#f8f6ff">Don't have Shine account? <Text fontWeight="bold" color="blue"><NavLink to="/register">Register Now</NavLink></Text> </Box>
                </Box>

                <Box>
                    <Image width="400px" height="150px" src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fblog%2Fjobs.png&w=1920&q=75" />
                    <br /><br />
                    <Text fontWeight="bold" fontSize="md">300,000 jobs from 15,000 companies</Text><br />
                    <Text>We will autofill your details</Text><br />
                    <Button fontWeight="bold" colorScheme="purple" color="white">Upload Resume</Button>
                    <br /><br />
                    <Text fontSize="xs" maxW="60%" margin="auto" >Supported formats- pdf, doc, docx, csv, rtf, txt files File size should not exceed 5 MB</Text>
                    <br /><br />
                    <Text fontSize="xs" maxW="60%" margin="auto" >Create your account and receive matching jobs automatically</Text>
                    <br />
                    <Text fontSize="xs" maxW="60%" margin="auto" >Fill in your profile details and let our unique matching technology.</Text>
                    <br />
                    <Text fontSize="xs" maxW="60%" margin="auto" >You choose which recruiters see your personal and contact detail</Text>          
                    <br />
                    <Text fontSize="xs" maxW="60%" margin="auto" >Research industries and employ our career services to be better</Text>          
                </Box>

            </Container>
            <br /><br />
            <Container padding="15px" maxW="65%" fontSize="xs"
                border="0.1px solid gray" backgroundColor="#f8f6ff">You hereby authorize Shine.com and/or its representatives to call you, e-mail you, or SMS you. This consent will supersede any registration for any Do Not Call (DNC) / National Do Not Call (NDNC).</Container>
            <br /><br />
            <Container maxW="100%" backgroundColor="#f8f6ff" >
                <Container display="flex" justifyContent="space-between" maxW="90%" gap="10px" backgroundColor="#f8f6ff" fontSize="xs" cursor="pointer">
                    <Box display="flex" maxW="100%" gap="10px" fontSize="xs" cursor="pointer">
                        <Text>Feedback |</Text>
                        <Text>FAQ |</Text>
                        <Text>About Us |</Text>
                        <Text>Contact Us |</Text>
                        <Text>Privacy Policy |</Text>
                        <Text>Cookie Policy |</Text>
                        <Text>Fraud Alert |</Text>
                        <Text>Buisness News |</Text>
                        <Text>English News |</Text>
                        <Text>Term & Conditions |</Text>
                        <Text>Disclaimer |</Text>
                    </Box>
                    <Box>© 2022 HT Media Limited</Box>
                </Container>
                <Text fontSize="xs" textAlign="start" padding="15px" marginLeft="5%" cursor="pointer" >Report a Job Posting</Text>
            </Container>
        </>
    )
}

export default Login