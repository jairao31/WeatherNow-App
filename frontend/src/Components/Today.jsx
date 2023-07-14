import React from "react";
import {
    Box,
    Text,
    VStack,
    Flex,
    Image,
    HStack,
    useBreakpointValue,
} from "@chakra-ui/react";
import { WiThermometer, WiStrongWind } from "react-icons/wi";
import { RiWaterPercentLine } from "react-icons/ri";

const Today = ({ hour }) => {
    const isMobile = useBreakpointValue({ base: true, md: false });
    return (
        <Box
            borderWidth={1}
            borderRadius="md"
            shadow="md"
            rounded="xl"
            width={"100%"}
        >
            <Text fontSize="md" fontWeight="bold" p={3}>
                Hourly Forecast
            </Text>
            <VStack
                align="stretch"
                px={1}
                pb={2}
                maxHeight="300px"
                overflowY={{ base: "scroll" }}
                css={{ "&::-webkit-scrollbar": { display: "none" } }}
            >
                {hour.map((data, index) => (
                    <Box
                        key={index}
                        minWidth="200px"
                        flex="1 0 auto"
                        borderWidth={1}
                        borderRadius="md"
                        shadow="md"
                        rounded="xl"
                        p={3}
                        mx={2}
                        mb={2}
                    >
                        <Text
                            alignItems={"end"}
                            fontSize={isMobile ? "xs" : "md"}
                        >
                            {data.condition.text}
                        </Text>
                        <HStack>
                            <HStack
                                width={"100%"}
                                justifyContent={"space-between"}
                            >
                                <Text ml={2} fontSize={"xs"}>
                                    {new Date(data.time).toLocaleTimeString(
                                        "en-US",
                                        {
                                            hour: "numeric",
                                            minute: "numeric",
                                            hour12: true,
                                        }
                                    )}
                                </Text>
                                <Flex alignItems="center" p={2}>
                                    <WiThermometer size={isMobile ? 18 : 32} />
                                    <Text ml={2} fontSize={"xs"}>
                                        {data.temp_f} °F
                                    </Text>
                                </Flex>
                                <Flex alignItems="center" p={2}>
                                    <WiStrongWind size={isMobile ? 18 : 32} />
                                    <Text ml={2} fontSize={"xs"}>
                                        {data.wind_kph} km/h
                                    </Text>
                                </Flex>
                                <Flex alignItems="center" p={2}>
                                    <RiWaterPercentLine
                                        size={isMobile ? 15 : 22}
                                    />
                                    <Text ml={2} fontSize={"xs"}>
                                        {data.humidity} %
                                    </Text>
                                </Flex>
                                <Flex alignItems="center">
                                    <Image
                                        width={"100%"}
                                        src={data.condition.icon}
                                        alt={data.condition.text}
                                    />
                                </Flex>
                            </HStack>
                        </HStack>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

export default Today;
