import React from "react";
import {
    Box,
    VStack,
    HStack,
    Text,
    Divider,
    useBreakpointValue,
} from "@chakra-ui/react";
import { MdPlace, MdAccessTime } from "react-icons/md";

import morning from "../assets/morning.png";
import afternoon from "../assets/afternoon.png";
import evening from "../assets/evening.png";
import night from "../assets/night.png";

const Location = ({ location, current }) => {
    const { name, region, country, lat, lon, localtime } = location;
    const { temp_c, temp_f } = current;

    const isMobile = useBreakpointValue({ base: true, md: false });

    let timeOfDay;
    const hour = new Date(localtime).getHours();
    if (hour >= 3 && hour < 7) {
        timeOfDay = morning;
    } else if (hour >= 7 && hour < 16) {
        timeOfDay = afternoon;
    } else if (hour >= 16 && hour < 20) {
        timeOfDay = evening;
    } else {
        timeOfDay = night;
    }

    return (
        <Box flex={1}>
            <VStack align="stretch" spacing={2}>
                <Box
                    borderWidth={1}
                    borderRadius="md"
                    shadow="md"
                    rounded="xl"
                    p={isMobile ? 2 : 4}
                    variant="outline"
                    backgroundImage={`linear-gradient(to right, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.5) 20%, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0) 60%, rgba(255, 255, 255, 0.5) 80%, rgba(255, 255, 255, 0.8) 100%), url(${timeOfDay})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                >
                    <HStack justifyContent="space-between">
                        <VStack
                            align={isMobile ? "center" : "start"}
                            spacing={isMobile ? 0 : 1}
                        >
                            <HStack align="center">
                                <MdPlace
                                    size={isMobile ? 16 : 20}
                                    color={"black"}
                                />
                                <Text
                                    color={"black"}
                                    fontSize={isMobile ? "2xl" : "4xl"}
                                    fontWeight={"bold"}
                                >
                                    {name}
                                </Text>
                            </HStack>
                            {!isMobile && (
                                <Text fontSize="md" color={"black"}>
                                    {region}, {country}
                                </Text>
                            )}
                            <Divider />
                            <HStack align="center" width={"100%"}>
                                <MdAccessTime
                                    size={isMobile ? 16 : 20}
                                    color={"black"}
                                />
                                <Text fontSize="md" color={"black"}>
                                    {" "}
                                    {new Date(localtime).toLocaleTimeString(
                                        "en-US",
                                        {
                                            hour: "numeric",
                                            minute: "numeric",
                                            hour12: true,
                                        }
                                    )}
                                </Text>
                            </HStack>
                            {!isMobile && (
                                <Text fontSize="md" color={"black"}>
                                    Latitude λ: {lat} | Longitude φ: {lon}
                                </Text>
                            )}
                        </VStack>
                        <VStack alignItems="flex-end">
                            <Text
                                fontSize={isMobile ? "3xl" : "5xl"}
                                color={"#34495E"}
                                fontWeight={"bold"}
                            >
                                {temp_c} °C
                            </Text>
                            <Text
                                fontSize={isMobile ? "3xl" : "5xl"}
                                color={"#34495E"}
                                fontWeight={"bold"}
                            >
                                {temp_f} °F
                            </Text>
                        </VStack>
                    </HStack>
                </Box>
            </VStack>
        </Box>
    );
};

export default Location;
