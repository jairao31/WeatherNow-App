import React, { useState } from "react";
import {
    Box,
    Flex,
    Button,
    Stack,
    useColorMode,
    InputGroup,
    Input,
    InputLeftElement,
    Text,
    VStack,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    useBreakpointValue,
    List,
    ListItem,
    ListIcon,
} from "@chakra-ui/react";
import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import { MdLocationOn, MdOutlineMyLocation } from "react-icons/md";
import { fetchCityList } from "../api";
import { AiFillAlert } from "react-icons/ai";
import Alerts from "./Alerts";

const Navbar = ({ setCity, alerts, cityName }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [cityList, setCityList] = useState([]);
    const [cityInput, setCityInput] = useState("");
    const [error, setError] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleInputChange = async (e) => {
        setCityInput(e.target.value);
        if (e.target.value === "") {
            setCityList([]);
            setError(null);
            return;
        }
        try {
            const response = await fetchCityList(e.target.value);
            setCityList(response);
            setError(null);
        } catch (error) {
            setError(error.response.data.errorMsg);
        }
    };

    const handleCityClick = (city) => {
        setCity(city.name);
        setCityList([]);
        setCityInput(city.name);
    };

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <VStack align="stretch" justifyContent="flex-start" pb={3}>
            <Box zIndex="1">
                <Flex
                    alignItems={isMobile ? "flex-start" : "center"}
                    justifyContent={"space-between"}
                    flexDir={isMobile ? "column" : "row"}
                >
                    <Box>
                        <Text
                            fontSize={isMobile ? "lg" : "4xl"}
                            pb={isMobile ? "1" : "0"}
                            bgGradient={
                                colorMode === "light"
                                    ? "linear(to-l, #36D1DC, #5B86E5)"
                                    : "linear(to-l, #7928CA, #FF0080)"
                            }
                            bgClip="text"
                            fontWeight="extrabold"
                        >
                            WeatherNow🌦️
                        </Text>
                        {!isMobile && (
                            <Text fontSize="sm">
                                {new Date().toLocaleDateString("en-US", {
                                    weekday: "long",
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}{" "}
                                |{" "}
                                {new Date().toLocaleTimeString("en-US", {
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true,
                                })}
                            </Text>
                        )}
                    </Box>
                    <InputGroup
                        width={isMobile ? "100%" : "50%"}
                        alignSelf={isMobile ? "stretch" : "center"}
                        size={isMobile ? "sm" : "md"}
                        zIndex={"999"}
                    >
                        <InputLeftElement pointerEvents="none">
                            <SearchIcon color="gray.500" />
                        </InputLeftElement>
                        <Input
                            placeholder="Search City"
                            borderWidth={1}
                            borderRadius="md"
                            shadow="md"
                            rounded="xl"
                            onChange={handleInputChange}
                            value={cityInput}
                        />
                        {cityList.length > 0 && (
                            <Box
                                position="absolute"
                                top="100%"
                                left="0"
                                width="100%"
                                mt={1}
                                p={2}
                                borderBottomRadius="md"
                                bg={
                                    colorMode === "light"
                                        ? "whiteAlpha.900"
                                        : "#1A202C"
                                }
                            >
                                <List spacing={1}>
                                    {cityList.map((city, idx) => (
                                        <ListItem
                                            key={idx}
                                            fontSize={"sm"}
                                            _hover={{
                                                color:
                                                    colorMode === "light"
                                                        ? "telegram.500"
                                                        : "purple.500",
                                                cursor: "pointer",
                                            }}
                                            onClick={() =>
                                                handleCityClick(city)
                                            }
                                        >
                                            <ListIcon
                                                as={MdLocationOn}
                                                color={
                                                    colorMode === "light"
                                                        ? "telegram.500"
                                                        : "purple.500"
                                                }
                                            />
                                            {city.name}, {city.region},{" "}
                                            {city.country}
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        )}
                    </InputGroup>
                </Flex>
                <Flex
                    w={"100%"}
                    justifyContent={"flex-end"}
                    alignItems={"center"}
                    pt={isMobile ? "2" : "0"}
                    zIndex={"0"}
                >
                    <Stack direction={"row"} spacing={2}>
                        <Button
                            size={isMobile ? "sm" : "md"}
                            variant="outline"
                            borderWidth={1}
                            borderRadius="md"
                            shadow="md"
                            rounded="xl"
                            onClick={() => setIsDrawerOpen(true)}
                            bg={colorMode === "light" ? "white" : "#1A202C"}
                        >
                            <AiFillAlert />
                        </Button>

                        <Button
                            size={isMobile ? "sm" : "md"}
                            variant="outline"
                            borderWidth={1}
                            borderRadius="md"
                            shadow="md"
                            rounded="xl"
                            onClick={cityName}
                            bg={colorMode === "light" ? "white" : "#1A202C"}
                        >
                            <MdOutlineMyLocation />
                        </Button>

                        <Button
                            size={isMobile ? "sm" : "md"}
                            onClick={toggleColorMode}
                            variant="outline"
                            borderWidth={1}
                            borderRadius="md"
                            shadow="md"
                            rounded="xl"
                            bg={colorMode === "light" ? "white" : "#1A202C"}
                        >
                            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Stack>
                </Flex>
            </Box>
            <Drawer
                isOpen={isDrawerOpen}
                placement="right"
                onClose={() => setIsDrawerOpen(false)}
                size={isMobile ? "xs" : "md"}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader pb={0}>Alerts</DrawerHeader>
                    <DrawerBody overflowY="auto">
                        <Alerts alerts={alerts} />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </VStack>
    );
};

export default Navbar;
