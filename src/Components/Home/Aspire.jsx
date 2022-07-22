import { Box, Container, Stack, Button, IconButton, border, Heading,Text } from "@chakra-ui/react"
import { EmailIcon, ArrowForwardIcon, SearchIcon } from "@chakra-ui/icons"

function Aspire() {
    return (
        <>
            <br /><br />
            <Container>
                <Stack direction='row' spacing={4} >
                    <Button _hover={{color:"blue", border:"1px solid blue"}} padding="50px"  variant="outline"><IconButton aria-label='Search database' icon={<SearchIcon />} />
                        Search Your Dream Career
                    </Button>
                    <Button rightIcon={<ArrowForwardIcon />} _hover={{color:"blue", border:"1px solid blue"}} padding="50px"   variant="outline">👤 Create Your Profile
                        
                    </Button>
                </Stack>
            </Container>
            <br />

            <Container display="flex" justifyContent="center" gap="30px" backgroundColor="#f2f3f8" maxW="100%" padding="50px">
                <Heading>Are You An Employer ?</Heading>
                <Button backgroundColor="#fba504" fontWeight="bold" color="white" _hover={{backgroundColor:"green"}}>Search Your Hire</Button>
                <Button backgroundColor="blue" fontWeight="bold" color="white" _hover={{backgroundColor:"b#8652ff"}}>Post a Job</Button>
                
            </Container>
            <br />
            <Heading>Aspire to Senior Roles in Career</Heading>
            <br />
            <Container maxW="1080px" padding="40px" marginLeft="20%">
                <Stack direction='row' spacing={100}  >
                    <Button rightIcon={<ArrowForwardIcon />} _hover={{color:"blue", border:"1px solid blue"}} padding="50px"  variant="outline">
                        Chief Technology Officer
                    </Button>
                    <Button rightIcon={<ArrowForwardIcon />} _hover={{color:"blue", border:"1px solid blue"}} padding="50px"   variant="outline">
                        Data Science Head
                    </Button>
                    </Stack>
                    <br />
                    <Stack direction='row' spacing={100} >
                    <Button rightIcon={<ArrowForwardIcon />} _hover={{color:"blue", border:"1px solid blue"}} padding="50px"  variant="outline">
                    Chief Marketing Officer
                    </Button>
                    <Button rightIcon={<ArrowForwardIcon />} _hover={{color:"blue", border:"1px solid blue"}} padding="50px"   variant="outline">
                    Chief Product Officer
                    </Button>
                </Stack>
                

            </Container>
            <Button colorScheme="white" color="blue" _hover={{ fontSize:"large" }}>View All</Button>
            <br />
            <Text fontSize="2xl" fontWeight="semibold" color="darkgray">-- OR --</Text>
            <br />

        </>
    )
}
export default Aspire