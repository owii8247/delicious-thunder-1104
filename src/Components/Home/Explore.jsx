import { Container, Heading, Button, Image, Box, Text, color } from "@chakra-ui/react"
import { PhoneIcon } from "@chakra-ui/icons"
import { NavLink, useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";






function Explore() {
  
    return (
        <>
            <Container display="flex" justifyContent="center" gap="30px" backgroundColor="#f2f3f8" maxW="100%" padding="50px">
                <Container maxW="720px">
                    <br /><br /><br /><br />
                    <Heading>Explore Dream Career of Your Choice</Heading>
                    <br />
                    <Button backgroundColor="#fba504" fontWeight="bold" color="white" _hover={{ backgroundColor: "green" }}>Career Planner</Button>
                </Container>
                <Image src="https://www.shine.com/next/static/images/explore-dream-career.png" />
            </Container>
            <br /><br />
            <Heading>Explore Our Premium Services</Heading>
            <br />
            
            <Container display="flex" justifyContent="space-evenly" gap="50px" padding="10px" maxW='1080px'>
            <Swiper
                    spaceBetween={40}
                    slidesPerView={3}
                    className="external-buttons"
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>
            
                <Box border="0.1px solid lightgray" padding="10px" width="100%" _hover={{ border: "0.1px solid darkgray" }}>
                    <Image src="https://static1.shine.com/l/m/product_image/images_all/1640935815_1767.png" /><br />
                    <Text fontWeight="bold" fontSize="2xl" display="flex" justifyContent="start" >Application Highliter</Text>

                    <Text >With this service, you get higher views on your job applications at Shine. All of your job applications would be highlighted so as to go for better view in row...</Text>
                    <br />
                    <Text fontWeight="bold" fontSize="xl" display="flex" justifyContent="start"> ₹ 1699</Text>
                    <br /><br />
                    <Box display="flex" justifyContent="space-between" gap="20px">
                        <Button colorScheme="white" color="blue">Explore</Button>
                        <Button colorScheme="blue" color="white" > <PhoneIcon />  Talk To Expert</Button>
                    </Box>
                </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box border="0.1px solid lightgray" padding="10px" width="100%" _hover={{ border: "0.1px solid darkgray" }}>
                    <Image src="https://static1.shine.com/l/m/product_image/images_all/1640925161_7427.png" /><br />
                    <Text fontWeight="bold" fontSize="2xl" display="flex" justifyContent="start" >Featured Profile : 90 Days</Text>

                    <Text >With this service you can get your profile highlighted for 90 days in recruiter’s search and be among the first ones to be seen by recruiters.</Text>
                    <br />
                    <Text fontWeight="bold" fontSize="xl" display="flex" justifyContent="start"> ₹ 1999</Text>
                    <br /><br />
                    <Box display="flex" justifyContent="space-between" gap="20px">
                        <Button colorScheme="white" color="blue">Explore</Button>
                        <Button colorScheme="blue" color="white" > <PhoneIcon />  Talk To Expert</Button>
                    </Box>
                </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box border="0.1px solid lightgray" padding="10px" width="100%" _hover={{ border: "0.1px solid darkgray" }}>
                    <Image src="https://static1.shine.com/l/m/product_image/images_all/1640940094_8952.png" /><br />
                    <Text fontWeight="bold" fontSize="2xl" display="flex" justifyContent="start" >Application Booster</Text>

                    <Text >Priority Applicant service will make it easier in highlighting and circulate your profile to the recruiter of your choice. All of your job applications would...</Text>
                    <br />
                    <Text fontWeight="bold" fontSize="xl" display="flex" justifyContent="start"> ₹ 3099</Text>
                    <br /><br />
                    <Box display="flex" justifyContent="space-between" gap="20px">
                        <Button colorScheme="white" color="blue">Explore</Button>
                        <Button colorScheme="blue" color="white" > <PhoneIcon />  Talk To Expert</Button>
                    </Box>
                </Box>
                </SwiperSlide>
                </Swiper>
               
               
                
                  
            </Container>
            
            
            <Button colorScheme="white" color="blue" _hover={{ fontSize: "large" }}><NavLink to="/details">View All</NavLink></Button>
            <br /><br />
            <Heading>Popular Courses</Heading>
            <br />
            <Container display="flex" maxW="1080px" gap="20px" cursor="pointer">
                <Text _hover={{ textDecoration: "underline", color: "blue", fontWeight: "bold" }} >All</Text>
                <Text _hover={{ textDecoration: "underline", color: "blue", fontWeight: "bold" }}>Sales and Marketing</Text>
                <Text _hover={{ textDecoration: "underline", color: "blue", fontWeight: "bold" }}>Banking Finance</Text>
                <Text _hover={{ textDecoration: "underline", color: "blue", fontWeight: "bold" }}>Personal Development</Text>
                <Text _hover={{ textDecoration: "underline", color: "blue", fontWeight: "bold" }}>IT - Information Technology</Text>
                <Text _hover={{ textDecoration: "underline", color: "blue", fontWeight: "bold" }}>HR - Human Resource</Text>
                <Text _hover={{ textDecoration: "underline", color: "blue", fontWeight: "bold" }}>Management</Text>

            </Container>

            <Container display="flex" justifyContent="center" gap="30px" maxW="100%" padding="50px">
            <Swiper
                    spaceBetween={40}
                    slidesPerView={3}
                    className="external-buttons"
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>
                <Box border="0.1px solid lightgray" padding="10px" width="100%" _hover={{ border: "0.1px solid darkgray" }}>
                    <Text display="flex" justifyContent="start">Course</Text>
                    <Box display="flex" justifyContent="space-around">
                        <Image width="55px" height="55px" borderRadius="100%" src="https://static1.shine.com/l/m/product_image/images_all/1640851375_8085.png" />
                        <Text fontSize="2xl" fontWeight="bold" >Backend Developer In Java Backend </Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text fontSize="md" fontWeight="bold">4.5</Text>
                        <Box>
                            <Text display="flex" justifyContent="start">Test Prep Training</Text>
                            <Text display="flex" justifyContent="start">Duration : 51 Hours | Mode : Online</Text>
                            <Text display="flex" justifyContent="start" fontSize="xl" fontWeight="bold"> ₹ 12999</Text>
                        </Box>
                    </Box>
                    <br />
                    <hr />
                    <br />
                    <Box display="flex" justifyContent="space-between" gap="20px">
                        <Button colorScheme="white" color="blue">Explore</Button>
                        <Button colorScheme="blue" color="white" >Buy Now</Button>
                    </Box>
                </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box border="0.1px solid lightgray" padding="10px" width="100%" _hover={{ border: "0.1px solid darkgray" }}>
                    <Text display="flex" justifyContent="start">Course</Text>
                    <Box display="flex" justifyContent="space-around">
                        <Image width="55px" height="55px" borderRadius="100%" src="https://static1.shine.com/l/m/product_image/images_all/1652954044_279.png" />
                        <Text fontSize="2xl" fontWeight="bold" >Frontend Developer In React.js</Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text fontSize="md" fontWeight="bold">4.6</Text>
                        <Box>
                            <Text display="flex" justifyContent="start">Test Prep Training</Text>
                            <Text display="flex" justifyContent="start">Duration : 30 Hours | Mode : Online</Text>
                            <Text display="flex" justifyContent="start" fontSize="xl" fontWeight="bold"> ₹ 15999</Text>
                        </Box>
                    </Box>
                    <br />
                    <hr />
                    <br />
                    <Box display="flex" justifyContent="space-between" gap="20px">
                        <Button colorScheme="white" color="blue">Explore</Button>
                        <Button colorScheme="blue" color="white" >Buy Now</Button>
                    </Box>
                </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box border="0.1px solid lightgray" padding="10px" width="100%" _hover={{ border: "0.1px solid darkgray" }}>
                    <Text display="flex" justifyContent="start">Course</Text>
                    <Box display="flex" justifyContent="space-around">
                        <Image width="55px" height="55px" borderRadius="100%" src="https://static1.shine.com/l/m/product_image/images_all/1652953799_9984.png" />
                        <Text fontSize="2xl" fontWeight="bold" >Backend Developer In Node.js</Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text fontSize="md" fontWeight="bold">4.2</Text>
                        <Box>
                            <Text display="flex" justifyContent="start">Test Prep Training</Text>
                            <Text display="flex" justifyContent="start">Duration : 20 Hours | Mode : Online</Text>
                            <Text display="flex" justifyContent="start" fontSize="xl" fontWeight="bold"> ₹ 10999</Text>
                        </Box>
                    </Box>
                    <br />
                    <hr />
                    <br />
                    <Box display="flex" justifyContent="space-between" gap="20px">
                        <Button colorScheme="white" color="blue">Explore</Button>
                        <Button colorScheme="blue" color="white" >Buy Now</Button>
                    </Box>
                </Box>
                </SwiperSlide>
                </Swiper>
            </Container>
            <Button colorScheme="white" color="blue" _hover={{ fontSize: "large" }}><NavLink to="/details">View All</NavLink></Button>
            <br /><br />
            <Heading backgroundColor="#f2f3f8" maxW="100%" padding="20px">Latest From Blog</Heading>
            <Container display="flex" justifyContent="center" gap="30px" backgroundColor="#f2f3f8" maxW="100%" padding="50px" cursor="pointer">
            <Swiper
                    spaceBetween={40}
                    slidesPerView={3}
                    className="external-buttons"
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>

                <Box border="0.1px solid lightgray" padding="10px" width="100%" _hover={{ border: "0.1px solid darkgray" }}>
                    <Image src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fblog%2Fjobs.png&w=1920&q=75" />
                    <br />
                    <Text display="flex" justifyContent="start" fontSize="xl" fontWeight="bold">Mint + Shine Talent Insights</Text>
                    <br /><br />
                    <Box display="flex" justifyContent="space-between" fontSize="xs" _hover={{ fontSize: "sm" }}>
                        <Text>Shine Talent Insights</Text>
                        <Box display="flex" gap="20px" fontSize="xs" _hover={{ fontSize: "sm" }}>
                            <Box> 👁️ 13337670</Box>
                            <Box> ⤴ 105</Box>
                        </Box>
                    </Box>
                </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box border="0.1px solid lightgray" padding="10px" width="100%" _hover={{ border: "0.1px solid darkgray" }}>
                    <Image src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fblog%2Fwhite-collar-jobs.jpg&w=1920&q=75" />
                    <br />
                    <Text display="flex" justifyContent="start" fontSize="xl" fontWeight="bold">What are "White Collar" Jobs ?</Text>
                    <br /><br />
                    <Box display="flex" justifyContent="space-between" fontSize="xs" _hover={{ fontSize: "sm" }}>
                        <Text>Career Help</Text>
                        <Box display="flex" gap="20px" fontSize="xs" _hover={{ fontSize: "sm" }}>
                            <Box> 👁️ 235733</Box>
                            <Box> ⤴ 35</Box>
                        </Box>
                    </Box>
                </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box border="0.1px solid lightgray" padding="10px" width="100%" _hover={{ border: "0.1px solid darkgray" }}>
                    <Image src="https://www.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fblog%2Fonline-form-filling-jobs.png&w=1920&q=75" />
                    <br />
                    <Text display="flex" justifyContent="start" fontSize="xl" fontWeight="bold">Online Form Filling Jobs</Text>
                    <br /><br />
                    <Box display="flex" justifyContent="space-between" fontSize="xs" _hover={{ fontSize: "sm" }}>
                        <Text>Career Help Jobs</Text>
                        <Box display="flex" gap="20px" fontSize="xs" _hover={{ fontSize: "sm" }}>
                            <Box> 👁️ 544</Box>
                            <Box> ⤴ 95</Box>
                        </Box>
                    </Box>
                </Box>
                </SwiperSlide>
                </Swiper>
            </Container>
            <Button colorScheme="white" color="blue" _hover={{ fontSize: "large" }}><NavLink to="/details">View All</NavLink></Button>
            <br /><br />




        </>
    )
}
export default Explore