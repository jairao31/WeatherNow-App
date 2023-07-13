import React from "react";
import {
    Box,
    Text,
    HStack,
    VStack,
    Image,
    Table,
    Tbody,
    Tr,
    Td,
} from "@chakra-ui/react";
import {
    WiThermometer,
    WiStrongWind,
    WiHumidity,
    WiBarometer,
    WiDaySunny,
    WiDayCloudy,
    WiRain,
    WiFog,
    WiCloudy,
} from "react-icons/wi";

import { MdOutlineWindPower, MdOutlineVisibility } from "react-icons/md";

const Current = ({ current }) => {
    const {
        temp_c,
        temp_f,
        condition,
        wind_kph,
        humidity,
        feelslike_c,
        vis_km,
    } = current;

    const getWeatherIcon = (iconCode) => {
        const iconMap = {
            1000: <WiDaySunny size={48} />,
            1003: <WiDayCloudy size={48} />,
            1063: <WiRain size={48} />,
            1135: <WiFog size={48} />,
            1147: <WiFog size={48} />,
        };

        return iconMap[iconCode] || <WiCloudy size={48} />;
    };

    return (
        <Box>
            <HStack
                align="stretch"
                p={3}
                borderWidth={1}
                borderRadius="md"
                shadow="md"
                rounded="xl"
            >
                <VStack align="stretch" flex={1}>
                    <Text fontSize="lg" mb={4}>
                        Current Weather
                    </Text>
                    <VStack
                        gap={5}
                        align="stretch"
                        justifyContent="flex-start"
                        pl={5}
                    >
                        <Box align="stretch" justifyContent="flex-start">
                            {getWeatherIcon(condition.code)} {condition.text}{" "}
                        </Box>
                        <Text fontSize="3xl" fontWeight="bold">
                            {temp_c}°C
                        </Text>
                        <Text fontSize="3xl" fontWeight="bold">
                            {temp_f}°F
                        </Text>
                    </VStack>
                </VStack>
                <VStack align="stretch" flex={1}>
                    <Table variant="unstyled" gap={0}>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <MdOutlineWindPower size={32} />
                                    {/* <Text fontSize="3xl">💨</Text> */}
                                </Td>
                                <Td>Wind</Td>
                                <Td>{wind_kph} km/h</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <WiHumidity size={32} />
                                    {/* <Text fontSize="3xl">🌦️</Text> */}
                                </Td>
                                <Td>Humidity</Td>
                                <Td>{humidity}%</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <WiThermometer size={32} />
                                    {/* <Text fontSize="3xl">🌡️</Text> */}
                                </Td>
                                <Td>Feels Like</Td>
                                <Td>{feelslike_c}°C</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <MdOutlineVisibility size={32} />
                                    {/* <Text fontSize="3xl">👀</Text> */}
                                </Td>
                                <Td>Visibility</Td>
                                <Td>{vis_km} km</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </VStack>
            </HStack>
        </Box>
    );
};

export default Current;
