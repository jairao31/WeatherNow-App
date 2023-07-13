import React, { useEffect, useState } from "react";
import {
    Box,
    Flex,
    Button,
    Stack,
    useColorMode,
    InputGroup,
    Input,
    InputLeftElement,
    InputRightElement,
    CloseButton,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    HStack,
} from "@chakra-ui/react";
import { MoonIcon, SearchIcon, SunIcon } from "@chakra-ui/icons";
import { MdLocationOn, MdOutlineMyLocation } from "react-icons/md";
import { fetchCityList } from "../api";

const Navbar = ({ city, setCity, setWeatherData }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const [cityList, setCityList] = useState([]);
    const [cityInput, setCityInput] = useState("");
    const [error, setError] = useState(null);

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

    const handleClearInput = () => {
        setCityInput("");
        setCityList([]);
    };

    return (
        <VStack align="stretch" justifyContent="flex-start" px={10} pt={8}>
            <Box
                // bg={useColorModeValue("gray.100", "gray.900")}
                zIndex="1"
            >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                    <Box>
                        <Text fontSize="xl">Weather Now ⛅️</Text>
                    </Box>
                    <InputGroup width={"30%"}>
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
                        {cityInput !== "" && (
                            <InputRightElement>
                                <CloseButton
                                    size="sm"
                                    onClick={handleClearInput}
                                />
                            </InputRightElement>
                        )}
                        {cityList.length > 0 && (
                            <Box
                                position="absolute"
                                top="100%"
                                left="0"
                                width="100%"
                                mt={1}
                                p={2}
                                borderWidth={1}
                                borderRadius="md"
                                boxShadow="md"
                                bg="white"
                            >
                                <Stack spacing={1}>
                                    {cityList.map((city) => (
                                        <Button
                                            size={"xs"}
                                            key={city.id}
                                            leftIcon={
                                                <MdLocationOn color="teal" />
                                            }
                                            variant="ghost"
                                            textAlign="left"
                                            justifyContent="flex-start"
                                            pl={3}
                                            onClick={() =>
                                                handleCityClick(city)
                                            }
                                        >
                                            {city.name}, {city.region},{" "}
                                            {city.country}
                                        </Button>
                                    ))}
                                </Stack>
                            </Box>
                        )}
                    </InputGroup>

                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={2}>
                            <Button
                                variant={"outline"}
                                borderWidth={1}
                                borderRadius="md"
                                shadow="md"
                                rounded="xl"
                            >
                                <MdOutlineMyLocation />
                            </Button>

                            <Button
                                onClick={toggleColorMode}
                                variant={"outline"}
                                borderWidth={1}
                                borderRadius="md"
                                shadow="md"
                                rounded="xl"
                            >
                                {colorMode === "light" ? (
                                    <MoonIcon />
                                ) : (
                                    <SunIcon />
                                )}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
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
        </VStack>
    );
};

export default Navbar;
