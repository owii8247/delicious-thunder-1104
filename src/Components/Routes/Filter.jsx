import { Box, Container, Text, Image, Select, Stack, Checkbox } from '@chakra-ui/react'
import { NavLink } from "react-router-dom"
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    Radio, RadioGroup
} from "@chakra-ui/react"

export const Filter = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value, setValue] = React.useState('1')
    return (
        <>
            <Container display="flex" justifyContent="space-around" maxW="100%">
                <Box display="flex" gap="20px">
                    <Text fontWeight="bold">22438 Jobs</Text>
                    <Image width="20px" height="20px" src="https://cdn-icons-png.flaticon.com/512/1250/1250615.png" />
                    <Image width="20px" height="20px" src="https://cdn-icons.flaticon.com/png/512/5662/premium/5662990.png?token=exp=1658559110~hmac=03f81f01f8cf3d874e4aa0e82c614a0d" />
                </Box>
                <Box display="flex" gap="20px">
                    <Text fontSize="md" color="gray">Filter by</Text>
                    <Box>
                        <Button onClick={onOpen} variant="outline">Location</Button>

                        <Modal isOpen={isOpen} onClose={onClose} >
                            <ModalOverlay />
                            <ModalContent >
                                <ModalHeader>Sort and Filters</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>

                                </ModalBody>
                                <RadioGroup onChange={setValue} value={value} backgroundColor="#f8f6ff" padding="10px" >
                                    <Stack direction='row' gap="50px">
                                        <Text>Sort By</Text>
                                        <Radio value='1'>Relevence</Radio>
                                        <Radio value='2'>Freshness</Radio>

                                    </Stack>
                                </RadioGroup>
                                <br /><br />
                                <Container display="flex" gap="30px">
                                    <Box>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Location </Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Experience</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Salary</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Department</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Industry</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Company</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Interview Type</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Job Type</Text>
                                    </Box>
                                    <Box >
                                        <Input placeholder='Search Location' />
                                        <br /><br />
                                        <Box maxW="60%">
                                            <Checkbox><Text>Banglore (8666)</Text></Checkbox>
                                            <Checkbox><Text>Hyderabad (6566)</Text></Checkbox>
                                            <Checkbox><Text>Mumbai (9656)</Text></Checkbox>
                                            <Checkbox><Text>Kolkata (8004)</Text></Checkbox>
                                            <Checkbox><Text>Pune (566)</Text></Checkbox>
                                            <Checkbox><Text>Chennai (306)</Text></Checkbox>
                                            <Checkbox><Text>Noida (2366)</Text></Checkbox>
                                            <Checkbox><Text>Delhi (5066)</Text></Checkbox>
                                        </Box>
                                    </Box>
                                </Container>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Reset
                                    </Button>
                                    <Button variant='ghost'>Show Results</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
                    <Box>
                        <Button onClick={onOpen} variant="outline">Experience</Button>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Sort and Filters</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>

                                </ModalBody>
                                <RadioGroup onChange={setValue} value={value} backgroundColor="#f8f6ff" padding="10px" >
                                    <Stack direction='row' gap="50px">
                                        <Text>Sort By</Text>
                                        <Radio value='1'>Relevence</Radio>
                                        <Radio value='2'>Freshness</Radio>

                                    </Stack>
                                </RadioGroup>
                                <br /><br />
                                <Container display="flex" gap="30px">
                                    <Box>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Location </Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Experience</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Salary</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Department</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Industry</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Company</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Interview Type</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Job Type</Text>
                                    </Box>
                                    <Box >
                                        <Input placeholder='Search Location' />
                                        <br /><br />
                                        <Box maxW="80%">
                                            <Checkbox><Text>Less than 1 Year (866)</Text></Checkbox>
                                            <Checkbox><Text>1 to 2 Years (656)</Text></Checkbox>
                                            <Checkbox><Text>3 to 5 Years (966)</Text></Checkbox>
                                            <Checkbox><Text>6 to 8 Years (804)</Text></Checkbox>
                                            <Checkbox><Text>9 to 10 Years (566)</Text></Checkbox>
                                            <Checkbox><Text>11 to 15 Years (306)</Text></Checkbox>
                                            <Checkbox><Text>15 to 17 Years (66)</Text></Checkbox>
                                            <Checkbox><Text>More than 17 Years (506)</Text></Checkbox>
                                        </Box>
                                    </Box>
                                </Container>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Reset
                                    </Button>
                                    <Button variant='ghost'>Show Results</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Box>
                    <Box>
                        <Button onClick={onOpen} variant="outline">Salary</Button>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Sort and Filters</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>

                                </ModalBody>
                                <RadioGroup onChange={setValue} value={value} backgroundColor="#f8f6ff" padding="10px" >
                                    <Stack direction='row' gap="50px">
                                        <Text>Sort By</Text>
                                        <Radio value='1'>Relevence</Radio>
                                        <Radio value='2'>Freshness</Radio>

                                    </Stack>
                                </RadioGroup>
                                <br /><br />
                                <Container display="flex" gap="30px">
                                    <Box>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Location </Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Experience</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Salary</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Department</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Industry</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Company</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Interview Type</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Job Type</Text>
                                    </Box>
                                    <Box >
                                        <Input placeholder='Search Location' />
                                        <br /><br />
                                        <Box maxW="80%">
                                            <Checkbox><Text>Less than 1 Year (866)</Text></Checkbox>
                                            <Checkbox><Text>1 to 2 Years (656)</Text></Checkbox>
                                            <Checkbox><Text>3 to 5 Years (966)</Text></Checkbox>
                                            <Checkbox><Text>6 to 8 Years (804)</Text></Checkbox>
                                            <Checkbox><Text>9 to 10 Years (566)</Text></Checkbox>
                                            <Checkbox><Text>11 to 15 Years (306)</Text></Checkbox>
                                            <Checkbox><Text>15 to 17 Years (66)</Text></Checkbox>
                                            <Checkbox><Text>More than 17 Years (506)</Text></Checkbox>
                                        </Box>

                                    </Box>
                                </Container>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Reset
                                    </Button>
                                    <Button variant='ghost'>Show Results</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

                    </Box>
                    <Box>
                        <Button onClick={onOpen} variant="outline" fontSize="xs" color="blue" >More Filters</Button>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>Sort and Filters</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>

                                </ModalBody>
                                <RadioGroup onChange={setValue} value={value} backgroundColor="#f8f6ff" padding="10px" >
                                    <Stack direction='row' gap="50px">
                                        <Text>Sort By</Text>
                                        <Radio value='1'>Relevence</Radio>
                                        <Radio value='2'>Freshness</Radio>

                                    </Stack>
                                </RadioGroup>
                                <br /><br />
                                <Container display="flex" gap="30px">
                                    <Box>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Location </Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Experience</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Salary</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Department</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Industry</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Company</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Interview Type</Text>
                                        <Text cursor="pointer" _hover={{ fontWeight: "bold" }}>Job Type</Text>
                                    </Box>
                                    <Box >
                                        <Input placeholder='Search Location' />
                                        <br /><br />
                                        <Box maxW="80%">
                                            <Checkbox><Text>Less than 1 Year (866)</Text></Checkbox>
                                            <Checkbox><Text>1 to 2 Years (656)</Text></Checkbox>
                                            <Checkbox><Text>3 to 5 Years (966)</Text></Checkbox>
                                            <Checkbox><Text>6 to 8 Years (804)</Text></Checkbox>
                                            <Checkbox><Text>9 to 10 Years (566)</Text></Checkbox>
                                            <Checkbox><Text>11 to 15 Years (306)</Text></Checkbox>
                                            <Checkbox><Text>15 to 17 Years (66)</Text></Checkbox>
                                            <Checkbox><Text>More than 17 Years (506)</Text></Checkbox>
                                        </Box>

                                    </Box>
                                </Container>

                                <ModalFooter>
                                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Reset
                                    </Button>
                                    <Button variant='ghost'>Show Results</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

                    </Box>

                </Box>
            </Container>
            <br />
            <hr />
            <Container display="flex" gap="30px" maxW="80%" padding="10px" backgroundColor="#f8f6ff">
                <Text>Select Company</Text>
                <Button variant="outline">Accenture</Button>
                <Button variant="outline">Genpact</Button>
                <Button variant="outline">MasteCard</Button>
                <Button variant="outline">Amazon</Button>
                <Button variant="outline">Capgemini</Button>
                <Button variant="outline">Infosys</Button>
                <Button variant="outline">Mahindra</Button>
                <Button variant="outline">Thermax</Button>


            </Container>
            <br />
        </>
    )
}

export default Filter

