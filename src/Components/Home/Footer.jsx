import { Container, Text, Box, Button, Image, Tooltip } from "@chakra-ui/react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input, useDisclosure
} from '@chakra-ui/react'

import React from "react"


function Footer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <>
            <Container display="flex" justifyContent="space-evenly" maxW="100%">
                <Box textAlign="start">
                    <Image width="74px" height="40px" src="https://www.shine.com/next/static/images/shine-logo.png" />
                    <Text>Great career starts here!</Text><br />
                    <Text fontSize="xl" fontWeight="bold">Download Shine App</Text>
                    <Button colorScheme="white"><Image width="30px" height="30px" src="https://img.icons8.com/doodle/344/google-play.png" /></Button>
                    <Button colorScheme="white"><Image width="30px" height="30px" src="https://img.icons8.com/material-rounded/344/mac-os.png" /></Button>
                </Box>
                <Box textAlign="start" lineHeight="35px">
                    <Text fontWeight="bold" cursor="pointer" _hover={{ fontStyle: "italic" }} >JOB SEEKERS</Text>
                    <Box color="blue" cursor="pointer"  >
                        <Text>Register / Log In</Text>
                        <Text>Browse Job</Text>
                        <Text>Create Free Job Alert</Text>
                        <Text>Job Assistance Service</Text>
                        <Text>Courses</Text>
                    </Box>
                </Box>
                <Box textAlign="start" lineHeight="35px" >
                    <Text fontWeight="bold" cursor="pointer" _hover={{ fontStyle: "italic" }}>EMPLOYERS</Text>
                    <Box color="blue" cursor="pointer" >
                        <Text>Recuter India</Text>
                        <Text>Post Job</Text>

                    </Box>
                </Box>
                <Box textAlign="start" lineHeight="35px">
                    <Text fontWeight="bold" cursor="pointer" _hover={{ fontStyle: "italic" }}>PARTNER SITES</Text>
                    <Box color="blue" cursor="pointer">
                        <Text>English Mate</Text>
                        <Text>Study Mate</Text>
                        <Text>Hindustantimes.com</Text>
                        <Text>Livemint.com</Text>
                        <Text>Livehindustan.com</Text>
                        <Text>OTTplay.com</Text>
                    </Box>
                </Box>
                <Box textAlign="start" lineHeight="35px">
                    <Text fontWeight="bold" cursor="pointer" _hover={{ fontStyle: "italic" }}>CONTACT US</Text>
                    <Box color="blue" cursor="pointer">
                        <Text>080-1006 2222</Text>
                        <Text>contactus@shine.com</Text>
                        <Box display="flex">
                            <Button colorScheme="white"><Image width="30px" height="30px" src="https://img.icons8.com/color/344/twitter-squared.png" /></Button>
                            <Button colorScheme="white"><Image width="30px" height="30px" src="https://img.icons8.com/color/344/linkedin-circled--v1.png" /></Button>
                            <Button colorScheme="white"><Image width="30px" height="30px" src="https://img.icons8.com/fluency/344/facebook-new.png" /></Button>


                        </Box>
                        <Box>
                            <Button borderRadius="100%" colorScheme="red" ref={btnRef}  onClick={onOpen}>
                            <Image width="20px" height="20px" src="https://cdn-icons-png.flaticon.com/512/724/724715.png" />
                            </Button>
                            <Drawer
                                isOpen={isOpen}
                                placement='right'
                                onClose={onClose}
                                finalFocusRef={btnRef}
                            >
                                <DrawerOverlay />
                                <DrawerContent>
                                
                                    <Button><Tooltip label="Close Conversation"><DrawerCloseButton /></Tooltip></Button>
                                    <DrawerHeader>Get Hired Faster with Shine!</DrawerHeader>

                                    <DrawerBody>
                                        <Input placeholder='Type your message here...' />
                                    </DrawerBody>

                                    <DrawerFooter>
                                    <Input placeholder='Type your message here...' />
                                        <Button colorScheme='gray'>📎</Button>
                                    </DrawerFooter>
                                </DrawerContent>
                            </Drawer>
                        </Box>
                    </Box>
                </Box>


            </Container>
            <br />
            <hr />
            <br /><br />
            <Container display="flex" justifyContent="space-between" maxW="90%" gap="10px" fontSize="xs" cursor="pointer">
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
        </>

    )
}
export default Footer