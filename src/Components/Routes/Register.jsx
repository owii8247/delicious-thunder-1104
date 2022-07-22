import { Container, Image, Button, Box, Text, Input, Checkbox, useToast } from "@chakra-ui/react"
import React from "react"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import {NavLink } from "react-router-dom"
import { Form } from "react-bootstrap"




function Register() {
    const toast = useToast()
    function handleSubmit(e){
        e.preventDefault()
        alert("Registration Succesfull")
    }

    return (
        <>

            <Container display="flex" justifyContent="space-around" padding="15px" maxW="100%" backgroundColor="#f8f6ff">
                <Button colorScheme="white"><NavLink to="/"><Image width="74px" height="40px" src="https://www.shine.com/next/static/images/shine-logo.png" /></NavLink></Button>
                <Button fontWeight="bold" colorScheme="purple" color="white"><NavLink to="/login">Log In</NavLink></Button>
            </Container>
            <hr />
            <br /><br />
            <Container border="1px solid gray" display="flex" justifyContent="space-between" maxW="70%" padding="40px" backgroundColor="#f8f6ff">
                <Box>
                    <Image width="400px" height="150px" src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fc%2Fs1%2Fimages%2Fcandidate%2Fbanner%2Fwinter_d_home.png&w=1920&q=75" />
                    <br /><br />
                    <Text fontWeight="bold" fontSize="xl">Register With Resume</Text><br />
                    <Text>We will autofill your details</Text><br />
                    <Button fontWeight="bold" colorScheme="purple" color="white">Upload Resume</Button>
                    <br /><br />
                    <Text fontSize="xs" maxW="60%" margin="auto" >Supported formats- pdf, doc, docx, csv, rtf, txt files File size should not exceed 5 MB</Text>
                </Box>

                <Box maxW="50%" padding="10px">
                    <Text fontWeight="bold" fontSize="xl" textAlign="start">Let’s get started, tell us about yourself.</Text>
                    <Text fontSize="xs" textAlign="start">It only takes a couple of minutes to get started</Text>
                    <br />
                    <Form onSubmit={handleSubmit}>
                    <Input placeholder="Name" type="text" />
                    <br /><br />
                    <Input placeholder="Email" type="email"/>
                    <br /><br />
                    <Input placeholder=" Mobile Number" type="number" />
                    <Text fontSize="xs" textAlign="start">Your details will be visible only to genuine recruiters</Text>
                    <br />
                    <Input placeholder="Password" type="password"/>
                    <Checkbox><Text fontSize="xs" > By registering, you agree to our terms & conditions & privacy policy</Text></Checkbox>
                    <br /><br />
                    
                    <Button 
                      onClick={() =>
                        toast({
                          title: 'Account created.',
                          description: "We've created your account for you. Enter Login Credentials",
                          status: 'success',
                          duration: 5000,
                          isClosable: true,
                        })
                      }
                    rightIcon={<ArrowForwardIcon />} fontWeight="bold" colorScheme="purple" color="white" width="100%" type="submit" ><NavLink to="/login">Continue</NavLink></Button>
                    </Form>
                    <br /><br />
                    <Text color="gray" fontSize="md" fontWeight="bold">Or Register With</Text>
                    <br />
                    <Box display="flex" justifyContent="space-around">
                    <Button color="gray"  ><Image width="15px" height="15px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" />Google</Button>
                    <Button color="gray"><Image width="15px" height="15px" src="https://img.icons8.com/color/344/linkedin-circled--v1.png" />LinkedIn</Button>
                    <Button color="gray"><Image width="15px" height="15px" src="https://img.icons8.com/fluency/344/facebook-new.png" />Facebook</Button>
                    </Box>
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
export default Register