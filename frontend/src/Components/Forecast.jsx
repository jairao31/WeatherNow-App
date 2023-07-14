import React from "react";
import {
    Box,
    Text,
    HStack,
    VStack,
    Image,
    Flex,
    useBreakpointValue,
} from "@chakra-ui/react";
import { TbTemperaturePlus } from "react-icons/tb";
import { WiStrongWind } from "react-icons/wi";

const Forecast = ({ forecast }) => {
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box
            pb={3}
            mb={isMobile ? "1" : "1"}
            borderWidth={1}
            borderRadius="md"
            shadow="md"
            rounded="xl"
        >
            <Text fontSize="md" fontWeight="bold" p={3}>
                10-Day Forecast
            </Text>
            <HStack
                px={3}
                pb={1}
                spacing={4}
                overflowX={{ base: "scroll" }}
                justifyContent={{ base: "flex-start", md: "space-between" }}
                css={{ "&::-webkit-scrollbar": { display: "none" } }}
            >
                {forecast.forecastday?.map((f, index) => (
                    <Box
                        key={index}
                        borderWidth={1}
                        borderRadius="md"
                        shadow="md"
                        rounded="xl"
                        p={3}
                        h={"250px"}
                        minWidth={"150px"}
                    >
                        <VStack
                            alignItems={"center"}
                            justifyContent={"space-between"}
                            width={"100%"}
                            height={"100%"}
                        >
                            <Text fontSize="sm">
                                {new Date(
                                    f.date + "T00:00:00Z"
                                ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "numeric",
                                    day: "numeric",
                                    timeZone: "UTC",
                                })}
                            </Text>
                            <Image
                                src={f.day.condition.icon}
                                alt={f.day.condition.text}
                            />
                            <Text textAlign={"center"}>
                                {f.day.condition.text}
                            </Text>
                            <Flex justifyContent="center">
                                <WiStrongWind />
                                <Text ml={2} fontSize={isMobile ? "xs" : "md"}>
                                    {f.day.maxwind_kph} km/h
                                </Text>
                            </Flex>
                            <Flex justifyContent="center">
                                <TbTemperaturePlus />
                                <Text ml={2} fontSize={isMobile ? "xs" : "md"}>
                                    {f.day.maxtemp_f} °F
                                </Text>
                            </Flex>
                        </VStack>
                    </Box>
                ))}
            </HStack>
        </Box>
    );
};

export default Forecast;
