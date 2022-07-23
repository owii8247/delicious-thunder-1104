import React from 'react'
import { Box, Container, Text, Button, Heading } from '@chakra-ui/react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import Footer from '../Home/Footer'


const Body = () => {
    
    return (
        <>
            <Container display="flex" gap="30px" maxW="90%" padding="10px" backgroundColor="#f8f6ff">
                <Box>
                
                    <Box border="0.1px solid lightgray" padding="5px" width="100%" _hover={{ border: "1px solid blue" }}>
                        <Box display="flex" justifyContent="space-between">
                            <Text>Premium</Text>
                            <Text>0 day ago</Text>
                        </Box>
                        <Box><Text fontSize="xl" fontWeight="bold" textAlign="start">Sr. Applications Analyst</Text></Box>
                        <Text display="flex" justifyContent="start">- Genpact India Pvt Ltd</Text>
                        <Box display="flex" justifyContent="start" gap="20px">
                            <Box>📍 Noida</Box>
                            <Box>🧰 0 Yrs</Box>
                        </Box>
                        <Box textAlign="start">
                            <Box>▣ Be an Early Applicant</Box>
                            <Box>▣ Regular</Box>
                        </Box>
                        <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" >Apply</Button></Box>

                    </Box>
                    <Box border="0.1px solid lightgray" padding="5px" width="100%" _hover={{ border: "1px solid blue" }}>
                        <Box display="flex" justifyContent="space-between">
                            <Text>Hot</Text>
                            <Text>1 day ago</Text>
                        </Box>
                        <Box><Text fontSize="xl" fontWeight="bold" textAlign="start">Relationship Officer - Demat & Trading </Text></Box>
                        <Text display="flex" justifyContent="start">- SBI Capital Securities Ltd</Text>
                        <Box display="flex" justifyContent="start" gap="20px">
                            <Box>📍 Noida</Box>
                            <Box>🧰 2 to 4 Yrs</Box>
                        </Box>
                        <Box textAlign="start">
                            <Box>▣ Be an Early Applicant</Box>
                            <Box>▣ Regular</Box>
                        </Box>
                        <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" >Apply</Button></Box>

                    </Box>
       
                    <Box border="0.1px solid lightgray" padding="5px" width="100%" _hover={{ border: "1px solid blue" }}>
                        <Box display="flex" justifyContent="space-between">
                            <Text>Hot</Text>
                            <Text>0 day ago</Text>
                        </Box>
                        <Box><Text fontSize="xl" fontWeight="bold" textAlign="start">Looking for Full Stack</Text></Box>
                        <Text display="flex" justifyContent="start">- Genpact India Pvt Ltd</Text>
                        <Box display="flex" justifyContent="start" gap="20px">
                            <Box>📍 Noida</Box>
                            <Box>🧰 1 to 2 Yrs</Box>
                        </Box>
                        <Box textAlign="start">
                            <Box>▣ Be an Early Applicant</Box>
                            <Box>▣ Regular</Box>
                        </Box>
                        <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" >Apply</Button></Box>

                    </Box>
          

                </Box>
                <Box>
                    <Box border="0.1px solid lightgray" padding="5px" width="100%" backgroundColor="#f3fbfd" _hover={{ border: "1px solid blue" }}>
                        <Box display="flex" justifyContent="space-between">
                            <Text>Premium</Text>
                            <Text>0 day ago</Text>
                        </Box>
                        <Box><Text fontSize="xl" fontWeight="bold" textAlign="start">Sr. Applications Analyst</Text></Box>
                        <Text display="flex" justifyContent="start">- Genpact India Pvt Ltd</Text>
                        <Box display="flex" justifyContent="start" gap="20px">
                            <Box>📍 Noida</Box>
                            <Box>🧰 0 Yrs</Box>
                        </Box>
                        <Box display="flex" justifyContent="start" gap="20px">
                            <Box>▣ Be an Early Applicant</Box>
                            <Box>▣ Regular</Box>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Button color="blue" colorScheme="white" >Apply</Button>
                            <Box>
                                <Button color="white" colorScheme="blue">Share</Button>
                                <Button color="blue" colorScheme="white">Similar Jobs</Button>
                            </Box>
                        </Box>

                    </Box>
                    <br />
                    <Container display="flex" maxW="100%" gap="20px" cursor="pointer" fontWeight="bold">
                        <Text _hover={{ textDecoration: "underline", color: "blue", fontWeight: "bold" }} >Job Details</Text>
                        <Text _hover={{ textDecoration: "underline", color: "blue", fontWeight: "bold" }}>Key Skills</Text>
                        <Text _hover={{ textDecoration: "underline", color: "blue", fontWeight: "bold" }}>Recruiter Details</Text>
                        <Text _hover={{ textDecoration: "underline", color: "blue", fontWeight: "bold" }}>Company Details</Text>
                        <Text _hover={{ textDecoration: "underline", color: "blue", fontWeight: "bold" }}>Other Details</Text>
                    </Container>
                    <br />
                    <Container border="0.1px solid lightgray" maxW="100%" lineHeight="40px" backgroundColor="#f3fbfd"  _hover={{ border: "1px solid blue" }}>
                        <Heading fontSize="xl" textAlign="start" textDecoration="underline">Job Details</Heading>
                        <Text textAlign="start" fontWeight="bold"> What you are stoked about:  Essential Functions </Text>
                        <UnorderedList textAlign="start">
                            <ListItem>Serves as a subject matter expert associated with content, processes, and procedures associated with SAP S4 Hana FICO, Tax, and Group Reporting </ListItem>
                            <ListItem>Skilled in all SAP FICO, Tax configuration objects (including but not limited to GL, AP, AA, month end processing, financial reporting & Tax); experience in integration with MM and external systems </ListItem>
                            <ListItem>Support the identification of opportunities to standardize processes and system configuration globally</ListItem>
                            <ListItem>After the implementation, lead and support project initiatives to expand the usage of the SAP solution to improve and expand SAP processes across the enterprise. </ListItem>
                            <ListItem>Expert in all aspects of SAP Implementation process: Business process analysis, System configuration, Testing, Documentation, End-user training, and Production support. </ListItem>
                            <ListItem>Understanding the role and importance of new SAP technologies for improving user experience </ListItem>
                            <ListItem>Experienced in complex implementations that include custom solutions around SAP (user exits, enhancements, customer programs)</ListItem>
                            <ListItem>Conduct knowledge transfer and training of end-users, including sharing best practices</ListItem>
                            <ListItem>Open to learn and stays up to date on next generation applications in SAP ecosystem </ListItem>
                            <ListItem>Perform other duties and responsibilities as needed.</ListItem>
                        </UnorderedList>
                        <Text textAlign="start" fontWeight="bold">Your background highlights:  </Text>
                        <UnorderedList textAlign="start">
                            <ListItem>Bachelor s Degree in CS, MIS, Engineering or equivalent experience</ListItem>
                            <ListItem>3 years of experience in Windows 2008/2012 Server required</ListItem>
                            <ListItem>Knowledge of computer software, including financial accounting software, cloud based CRM applications, SQL language and reporting.</ListItem>
                            <ListItem>Production support experience including working from a support queue, managing SLAs and working with global end users</ListItem>
        
                            <ListItem>Perform other duties and responsibilities as needed.</ListItem>
                        </UnorderedList>
                    </Container>
                    <br />
                    <Container border="0.1px solid lightgray" maxW="100%" lineHeight="40px" gap="10px" backgroundColor="#f3fbfd" _hover={{ border: "1px solid blue" }}>
                    <Heading fontSize="xl" textAlign="start" textDecoration="underline">Key Skills</Heading>
                    <br />
                    
                    <Button variant="outline" colorScheme="#f3fbfd">sap fico</Button>
                    <Button variant="outline" colorScheme="#f3fbfd">work under minimal supervision</Button>
                    <Button variant="outline" colorScheme="#f3fbfd">sql queries</Button>
                    <Button variant="outline" colorScheme="#f3fbfd">system configuration</Button>
                    <Button variant="outline" colorScheme="#f3fbfd">buisness process analysis</Button>
                    <Button variant="outline" colorScheme="#f3fbfd">compliance reporting</Button>
                    <br />
                    <br />
                    </Container>
                    <br />
                    <Container border="0.1px solid lightgray" maxW="100%" lineHeight="40px" gap="10px" backgroundColor="#f3fbfd" _hover={{ border: "1px solid blue" }}>
                        
                    <Heading fontSize="xl" textAlign="start" textDecoration="underline">Recruiter Details</Heading>
                    
                    <Text fontSize="md" textAlign="start" fontWeight="bold">Genpact India Pvt Ltd</Text>
                    <Text fontSize="md" textAlign="start" fontWeight="medium" fontStyle="italic">Noida</Text>
                    <Text fontSize="md" textAlign="start" fontWeight="medium" fontStyle="italic">genpact.hr@genpact.com</Text>
                    <Text fontSize="md" textAlign="start" fontWeight="medium" fontStyle="italic">120-2225558</Text>
                    <Text color="blue" colorScheme="white" textAlign="end" fontWeight="bold" cursor="pointer">Show all Jobs by Recruiter</Text>
                    
                    </Container>
                    <br />
                    <Container border="0.1px solid lightgray" maxW="100%" lineHeight="40px" backgroundColor="#f3fbfd" _hover={{ border: "1px solid blue" }}>
                    
                    <Heading fontSize="xl" textAlign="start" textDecoration="underline">Company Details</Heading>
                    <UnorderedList textAlign="start">
                            <ListItem>Genpactt has 2,500+ employees worldwide with our headquarters based in Austin, Texas.</ListItem>
                            <ListItem> We have a strong global footprint – with over 50 offices in 43 countries.</ListItem>
                            <ListItem>Our products are proven at leading companies (both commercial and governments) spanning 155+ countries across the Americas, Europe, the Middle East, and Asia Pacific.</ListItem>
                            <ListItem>We are not only protecting companies, we also protect various governments & agencies across the globe.</ListItem>
                        </UnorderedList>
                    </Container>
                    <br />
                   
                    



                </Box>

            </Container>
            <Box><Footer /></Box>
        </>
    )
}

export default Body