import React from "react";
import {
    Box,
    Text,
    HStack,
    VStack,
    Table,
    Tbody,
    Tr,
    Td,
    useBreakpointValue,
    Image,
} from "@chakra-ui/react";
import { WiSunrise, WiSunset, WiStrongWind } from "react-icons/wi";
import { PiSmileyXEyesLight } from "react-icons/pi";
import { LuPersonStanding } from "react-icons/lu";
import { RiWaterPercentLine } from "react-icons/ri";

const Current = ({ current, astro }) => {
    const { wind_kph, humidity, feelslike_c, vis_km } = current;
    const { text, icon } = current.condition;
    const { sunrise, sunset } = astro;

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <Box
            borderWidth={1}
            borderRadius="md"
            shadow="md"
            rounded="xl"
            width={"100%"}
            pb={2}
            minHeight={isMobile ? "auto" : "350px"}
        >
            <Text fontSize="md" fontWeight="bold" p={3}>
                Current Weather
            </Text>
            <HStack>
                <VStack>
                    <Box
                        pl={5}
                        display="flex"
                        alignItems="flex-start"
                        flexDirection="column"
                        textAlign="left"
                    >
                        <Image
                            src={icon}
                            alt={text}
                            width={isMobile ? 30 : 50}
                        />
                        <Text fontSize={isMobile ? "sm" : "2xl"}>{text}</Text>
                    </Box>
                </VStack>
                <VStack align="stretch" flex={1}>
                    <Table variant="unstyled" size={"sm"}>
                        <Tbody>
                            <Tr>
                                <Td>
                                    <WiStrongWind size={isMobile ? 24 : 32} />
                                </Td>
                                <Td>Wind</Td>
                                <Td>{wind_kph} km/h</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <RiWaterPercentLine
                                        size={isMobile ? 24 : 32}
                                    />
                                </Td>
                                <Td>Humidity</Td>
                                <Td>{humidity}%</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <LuPersonStanding
                                        size={isMobile ? 24 : 32}
                                    />
                                </Td>
                                <Td>Feels Like</Td>
                                <Td>{feelslike_c} °C</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <PiSmileyXEyesLight
                                        size={isMobile ? 24 : 32}
                                    />
                                </Td>
                                <Td>Visibility</Td>
                                <Td>{vis_km} km</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <WiSunrise size={isMobile ? 24 : 32} />
                                </Td>
                                <Td>Sunrise</Td>
                                <Td>{sunrise}</Td>
                            </Tr>
                            <Tr>
                                <Td>
                                    <WiSunset size={isMobile ? 24 : 32} />
                                </Td>
                                <Td>Sunset</Td>
                                <Td>{sunset}</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </VStack>
            </HStack>
        </Box>
    );
};

export default Current;
