import { Box, Container, Text, Button, Heading, Image } from "@chakra-ui/react"
import { ArrowLeftIcon } from "@chakra-ui/icons"
import { NavLink, useNavigate } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";






function Early() {


    return (
        <>
            <Container display="flex" justifyContent="space-evenly" gap="50px">
                <Button backgroundColor="white" border="2px solid blue" borderRadius="20px" color="blue" _hover={{ color: "black", backgroundColor: "gray" }}>COOL PLACES TO WORK</Button>
                <Button backgroundColor="white" border="2px solid blue" borderRadius="20px" color="blue" _hover={{ color: "black", backgroundColor: "gray" }}>TOP COMPANIES HIRING</Button>
            </Container>

            <br />
            <Container display="flex" justifyContent="space-around" gap="20px" maxW="1080px">
                <Box>
                    <Box><Image src="https://static2.shine.com/r/m/images/employerbranding/c250bee50f5b490aac4b63fe281ab79e.png" /></Box>
                    <Box><Image src="https://static2.shine.com/r/m/images/employerbranding/4ba34994bc414de7984c38c9cee86ebe.png" /></Box>
                </Box>
                <Box>
                    <Box><Image src="https://static2.shine.com/r/m/images/employerbranding/d98a014b326648178fbb08eef46ac70e.png" /></Box>
                    <Box><Image src="https://static2.shine.com/r/m/images/employerbranding/6c23dfb3c9224480870c900b8dddf299.png" /></Box>
                </Box>
                <Box>
                    <Box><Image src="https://static2.shine.com/r/m/images/employerbranding/608a7830f65e4ac4a70869e145c55c25.png" /></Box>
                    <Box><Image src="https://static2.shine.com/r/m/images/employerbranding/449660b6ea5c4aada2e211f4831cc945.png" /></Box>
                </Box>
                <Box>
                    <Box><Image src="https://static2.shine.com/r/m/images/employerbranding/7a22c70f27904e2e81d7ebd1066d55e1.png" /></Box>
                    <Box><Image src="https://static2.shine.com/r/m/images/employerbranding/17e4d7d8d2bf419eb023429afacb5154.png" /></Box>
                </Box>
                <Box>
                    <Box><Image src="https://static2.shine.com/r/m/images/employerbranding/26c83ce6d9df4733a9bbc06d2e3b8f0e.png" /></Box>
                    <Box><Image src="https://static2.shine.com/r/m/images/employerbranding/19b43e6c9ee345faa75540f998db7441.png" /></Box>
                </Box>

            </Container>

            <br />
            <Heading>Be An Early Applicant</Heading>
            <br />

            <Container display="flex" justifyContent="space-evenly" gap="50px" padding="10px" maxW='1080px' >
                <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    className="external-buttons"
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>
                        <Box border="0.1px solid lightgray" padding="5px" width="70%" _hover={{ border: "1px solid blue" }}>
                        <Box display="flex" justifyContent="space-between">
                            <Text>Premium</Text>
                            <Text>1 day ago</Text>
                        </Box>
                        <Box><Text fontSize="xl" fontWeight="bold">Looking for Process- Developer - OTC</Text></Box>
                        <Text display="flex" justifyContent="start">- Genpact India Pvt Ltd</Text>
                        <Box display="flex" justifyContent="start" gap="20px">
                            <Box>📍 Noida</Box>
                            <Box>🧰2 to 4 Yrs</Box>
                        </Box>
                        <Box textAlign="start">
                            <Box>▣ Be an Early Applicant</Box>
                            <Box>▣ Regular</Box>
                        </Box>
                        <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" ><NavLink to="/details">Apply</NavLink></Button></Box>

                    </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box border="0.1px solid lightgray" padding="5px" width="70%" _hover={{ border: "1px solid blue" }}>
                            <Box display="flex" justifyContent="space-between">
                                <Text>Hot</Text>
                                <Text>1 day ago</Text>
                            </Box>
                            <Box><Text fontSize="xl" fontWeight="bold">Wanted Fresher Candidate for Data Entry</Text></Box>
                            <Text display="flex" justifyContent="start">- Fondstaff Private Limited</Text>
                            <Box display="flex" justifyContent="start" gap="20px">
                                <Box>📍 Vadodra</Box>
                                <Box>🧰 0 Yrs</Box>
                            </Box>
                            <Box textAlign="start">
                                <Box>▣ Be an Early Applicant</Box>
                                <Box>▣ Regular</Box>
                            </Box>
                            <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" ><NavLink to="/details">Apply</NavLink></Button></Box>

                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box border="0.1px solid lightgray" padding="5px" width="70%" _hover={{ border: "1px solid blue" }}>
                            <Box display="flex" justifyContent="space-between">
                                <Text>Premium</Text>
                                <Text>1 day ago</Text>
                            </Box>
                            <Box><Text fontSize="xl" fontWeight="bold">Looking for Process- Engineer - OTC</Text></Box>
                            <Text display="flex" justifyContent="start">- Accenture Pvt Ltd</Text>
                            <Box display="flex" justifyContent="start" gap="20px">
                                <Box>📍 Banglore</Box>
                                <Box>🧰2 to 4 Yrs</Box>
                            </Box>
                            <Box textAlign="start">
                                <Box>▣ Be an Early Applicant</Box>
                                <Box>▣ Regular</Box>
                            </Box>
                            <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" ><NavLink to="/details">Apply</NavLink></Button></Box>

                        </Box>
                    </SwiperSlide>
                    <SwiperSlide><Box border="0.1px solid lightgray" padding="5px" width="70%" _hover={{ border: "1px solid blue" }}>
                        <Box display="flex" justifyContent="space-between">
                            <Text>Premium</Text>
                            <Text>1 day ago</Text>
                        </Box>
                        <Box><Text fontSize="xl" fontWeight="bold">Looking for Process- Developer - OTC</Text></Box>
                        <Text display="flex" justifyContent="start">- Genpact India Pvt Ltd</Text>
                        <Box display="flex" justifyContent="start" gap="20px">
                            <Box>📍 Noida</Box>
                            <Box>🧰2 to 4 Yrs</Box>
                        </Box>
                        <Box textAlign="start">
                            <Box>▣ Be an Early Applicant</Box>
                            <Box>▣ Regular</Box>
                        </Box>
                        <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" ><NavLink to="/details">Apply</NavLink></Button></Box>

                    </Box>
                    </SwiperSlide>
                    <SwiperSlide><Box border="0.1px solid lightgray" padding="5px" width="70%" _hover={{ border: "1px solid blue" }}>
                        <Box display="flex" justifyContent="space-between">
                            <Text>Premium</Text>
                            <Text>1 day ago</Text>
                        </Box>
                        <Box><Text fontSize="xl" fontWeight="bold">Looking for Process- Developer - OTC</Text></Box>
                        <Text display="flex" justifyContent="start">- Genpact India Pvt Ltd</Text>
                        <Box display="flex" justifyContent="start" gap="20px">
                            <Box>📍 Noida</Box>
                            <Box>🧰2 to 4 Yrs</Box>
                        </Box>
                        <Box textAlign="start">
                            <Box>▣ Be an Early Applicant</Box>
                            <Box>▣ Regular</Box>
                        </Box>
                        <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" ><NavLink to="/details">Apply</NavLink></Button></Box>

                    </Box>
                    </SwiperSlide>
                    <SwiperSlide><Box border="0.1px solid lightgray" padding="5px" width="70%" _hover={{ border: "1px solid blue" }}>
                        <Box display="flex" justifyContent="space-between">
                            <Text>Premium</Text>
                            <Text>1 day ago</Text>
                        </Box>
                        <Box><Text fontSize="xl" fontWeight="bold">Looking for Process- Developer - OTC</Text></Box>
                        <Text display="flex" justifyContent="start">- Genpact India Pvt Ltd</Text>
                        <Box display="flex" justifyContent="start" gap="20px">
                            <Box>📍 Noida</Box>
                            <Box>🧰2 to 4 Yrs</Box>
                        </Box>
                        <Box textAlign="start">
                            <Box>▣ Be an Early Applicant</Box>
                            <Box>▣ Regular</Box>
                        </Box>
                        <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" ><NavLink to="/details">Apply</NavLink></Button></Box>

                    </Box>
                    </SwiperSlide>
                </Swiper>
            </Container>
            <Button colorScheme="white" color="blue" _hover={{ fontSize: "large" }}><NavLink to="/details">View All</NavLink></Button>
            <br />

            <br />
            <Heading>Remote Jobs</Heading>
            <br />
            <Container display="flex" justifyContent="space-evenly" gap="50px" padding="10px" maxW='1080px' >
            <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    className="external-buttons"
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>

                <Box border="0.1px solid lightgray" padding="5px" width="70%" _hover={{ border: "1px solid blue" }}>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Hot</Text>
                        <Text>1 day ago</Text>
                    </Box>
                    <Box><Text fontSize="xl" fontWeight="bold">Relationship Officer - Demat & Trading </Text></Box>
                    <Text display="flex" justifyContent="start">- SBI Capital Securities Ltd - Hyd</Text>
                    <Box display="flex" justifyContent="start" gap="20px">
                        <Box>📍 Noida</Box>
                        <Box>🧰 2 to 4 Yrs</Box>
                    </Box>
                    <Box textAlign="start">
                        <Box>▣ Be an Early Applicant</Box>
                        <Box>▣ Regular</Box>
                    </Box>
                    <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" ><NavLink to="/details">Apply</NavLink></Button></Box>

                </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box border="0.1px solid lightgray" padding="5px" width="70%" _hover={{ border: "1px solid blue" }}>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Hot</Text>
                        <Text>1 day ago</Text>
                    </Box>
                    <Box><Text fontSize="xl" fontWeight="bold">Lead Vice SW Engineer - Stage - I</Text></Box>
                    <Text display="flex" justifyContent="start">- MasterCard</Text>
                    <Box display="flex" justifyContent="start" gap="20px">
                        <Box>📍 Hyderabad</Box>
                        <Box>🧰 5 to 7 Yrs</Box>
                    </Box>
                    <Box textAlign="start">
                        <Box>▣ Be an Early Applicant</Box>
                        <Box>▣ Regular</Box>
                    </Box>
                    <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" ><NavLink to="/details">Apply</NavLink></Button></Box>

                </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box border="0.1px solid lightgray" padding="5px" width="70%" _hover={{ border: "1px solid blue" }}>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Latest</Text>
                        <Text>1 day ago</Text>
                    </Box>
                    <Box><Text fontSize="xl" fontWeight="bold">Looking for Process- Engineer - OTC</Text></Box>
                    <Text display="flex" justifyContent="start">- Accenture Pvt Ltd</Text>
                    <Box display="flex" justifyContent="start" gap="20px">
                        <Box>📍 Banglore</Box>
                        <Box>🧰 2 to 4 Yrs</Box>
                    </Box>
                    <Box textAlign="start">
                        <Box>▣ Be an Early Applicant</Box>
                        <Box>▣ Regular</Box>
                    </Box>
                    <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" ><NavLink to="/details">Apply</NavLink></Button></Box>

                </Box>
                </SwiperSlide>
                </Swiper>
            </Container>

            <Button colorScheme="white" color="blue" _hover={{ fontSize: "large" }}><NavLink to="/details">View All</NavLink></Button>
            <br />

            <br />
            <Heading>Walkin Jobs</Heading>
            <br />
            <Container display="flex" justifyContent="space-evenly" gap="50px" padding="10px" maxW='1080px' >
            <Swiper
                    spaceBetween={0}
                    slidesPerView={3}
                    className="external-buttons"
                    loop={true}
                    loopFillGroupWithBlank={true}
                    navigation={true}
                    modules={[Navigation]}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    <SwiperSlide>

                <Box border="0.1px solid lightgray" padding="5px" width="70%" _hover={{ border: "1px solid blue" }}>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Latest</Text>
                        <Text>1 day ago</Text>
                    </Box>
                    <Box><Text fontSize="xl" fontWeight="bold">Full Stack Front End Web Developer</Text></Box>
                    <Text display="flex" justifyContent="start">- Genpact India Pvt Ltd</Text>
                    <Box display="flex" justifyContent="start" gap="20px">
                        <Box>📍 Noida</Box>
                        <Box>🧰 0 Yrs</Box>
                    </Box>
                    <Box textAlign="start">
                        <Box>▣ Be an Early Applicant</Box>
                        <Box>▣ Regular</Box>
                    </Box>
                    <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" ><NavLink to="/details">Apply</NavLink></Button></Box>

                </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box border="0.1px solid lightgray" padding="5px" width="70%" _hover={{ border: "1px solid blue" }}>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Hot</Text>
                        <Text>1 day ago</Text>
                    </Box>
                    <Box><Text fontSize="xl" fontWeight="bold">Lead Vice SW Engineer - Stage - I</Text></Box>
                    <Text display="flex" justifyContent="start">- MasterCard</Text>
                    <Box display="flex" justifyContent="start" gap="20px">
                        <Box>📍 Hyderabad</Box>
                        <Box>🧰 1 to 2 Yrs</Box>
                    </Box>
                    <Box textAlign="start">
                        <Box>▣ Be an Early Applicant</Box>
                        <Box>▣ Regular</Box>
                    </Box>
                    <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" ><NavLink to="/details">Apply</NavLink></Button></Box>

                </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box border="0.1px solid lightgray" padding="5px" width="70%" _hover={{ border: "1px solid blue" }}>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Premium</Text>
                        <Text>1 day ago</Text>
                    </Box>
                    <Box><Text fontSize="xl" fontWeight="bold">Looking for Process- Engineer - OTC</Text></Box>
                    <Text display="flex" justifyContent="start">- Accenture Pvt Ltd</Text>
                    <Box display="flex" justifyContent="start" gap="20px">
                        <Box>📍 Chennai</Box>
                        <Box>🧰 2 to 4 Yrs</Box>
                    </Box>
                    <Box textAlign="start">
                        <Box>▣ Be an Early Applicant</Box>
                        <Box>▣ Regular</Box>
                    </Box>
                    <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" ><NavLink to="/details">Apply</NavLink></Button></Box>

                </Box>
                </SwiperSlide>
                <SwiperSlide>

                <Box border="0.1px solid lightgray" padding="5px" width="70%" _hover={{ border: "1px solid blue" }}>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Latest</Text>
                        <Text>1 day ago</Text>
                    </Box>
                    <Box><Text fontSize="xl" fontWeight="bold">Full Stack Front End Web Developer</Text></Box>
                    <Text display="flex" justifyContent="start">- Genpact India Pvt Ltd</Text>
                    <Box display="flex" justifyContent="start" gap="20px">
                        <Box>📍 Noida</Box>
                        <Box>🧰 0 Yrs</Box>
                    </Box>
                    <Box textAlign="start">
                        <Box>▣ Be an Early Applicant</Box>
                        <Box>▣ Regular</Box>
                    </Box>
                    <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" ><NavLink to="/details">Apply</NavLink></Button></Box>

                </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box border="0.1px solid lightgray" padding="5px" width="70%" _hover={{ border: "1px solid blue" }}>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Hot</Text>
                        <Text>1 day ago</Text>
                    </Box>
                    <Box><Text fontSize="xl" fontWeight="bold">Lead Vice SW Engineer - Stage - I</Text></Box>
                    <Text display="flex" justifyContent="start">- MasterCard</Text>
                    <Box display="flex" justifyContent="start" gap="20px">
                        <Box>📍 Hyderabad</Box>
                        <Box>🧰 1 to 2 Yrs</Box>
                    </Box>
                    <Box textAlign="start">
                        <Box>▣ Be an Early Applicant</Box>
                        <Box>▣ Regular</Box>
                    </Box>
                    <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" ><NavLink to="/details">Apply</NavLink></Button></Box>

                </Box>
                </SwiperSlide>
                <SwiperSlide>
                <Box border="0.1px solid lightgray" padding="5px" width="70%" _hover={{ border: "1px solid blue" }}>
                    <Box display="flex" justifyContent="space-between">
                        <Text>Premium</Text>
                        <Text>1 day ago</Text>
                    </Box>
                    <Box><Text fontSize="xl" fontWeight="bold">Looking for Process- Engineer - OTC</Text></Box>
                    <Text display="flex" justifyContent="start">- Accenture Pvt Ltd</Text>
                    <Box display="flex" justifyContent="start" gap="20px">
                        <Box>📍 Chennai</Box>
                        <Box>🧰 2 to 4 Yrs</Box>
                    </Box>
                    <Box textAlign="start">
                        <Box>▣ Be an Early Applicant</Box>
                        <Box>▣ Regular</Box>
                    </Box>
                    <Box display="flex" justifyContent="end"><Button color="blue" colorScheme="white" ><NavLink to="/details">Apply</NavLink></Button></Box>

                </Box>
                </SwiperSlide>
                </Swiper>
            </Container>
            <Button colorScheme="white" color="blue" _hover={{ fontSize: "large" }}><NavLink to="/details">View All</NavLink></Button>


        </>
    )
}
export default Early


