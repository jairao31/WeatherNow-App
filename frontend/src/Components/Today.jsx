import React from "react";
import { Box, Text, VStack, Flex, Image, HStack } from "@chakra-ui/react";
import {
    WiTime11,
    WiThermometer,
    WiStrongWind,
    WiHumidity,
} from "react-icons/wi";
import { MdAccessTime } from "react-icons/md";

const Today = ({ hour }) => {
    return (
        <Box borderWidth={1} borderRadius="md" shadow="md" rounded="xl" p={3}>
            <Text fontSize="md" fontWeight="bold" p={3}>
                Hourly Forecast
            </Text>
            <VStack
                align="stretch"
                maxHeight="312px"
                overflowY="scroll"
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
                    >
                        <Text
                            alignItems={"end"}
                            fontSize={"xs"}
                            fontWeight="bold"
                        >
                            {data.condition.text}
                        </Text>
                        <HStack>
                            <HStack
                                width={"100%"}
                                justifyContent={"space-between"}
                                px={5}
                            >
                                <Flex alignItems="center">
                                    <MdAccessTime />
                                    <Text ml={2}>
                                        {new Date(data.time).toLocaleTimeString(
                                            "en-US",
                                            {
                                                hour: "numeric",
                                                minute: "numeric",
                                                hour12: true,
                                            }
                                        )}
                                    </Text>
                                </Flex>
                                <Flex alignItems="center">
                                    <WiThermometer />
                                    <Text ml={2}>{data.temp_c}°C</Text>
                                </Flex>
                                <Flex alignItems="center">
                                    <WiStrongWind />
                                    <Text ml={2}>{data.wind_kph} km/h</Text>
                                </Flex>
                                <Flex alignItems="center">
                                    <WiHumidity />
                                    <Text ml={2}>{data.humidity}%</Text>
                                </Flex>
                            </HStack>
                            <Box align="stretch" justifyContent={"end"}>
                                <Image
                                    src={data.condition.icon}
                                    alt={data.condition.text}
                                />
                            </Box>
                        </HStack>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

export default Today;
