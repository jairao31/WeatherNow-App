import React from "react";
import {
    Box,
    Text,
    VStack,
    Image,
    Table,
    Tbody,
    Tr,
    Td,
    Divider,
    HStack,
} from "@chakra-ui/react";
import { MdOutlineWindPower } from "react-icons/md";
import { BiWind } from "react-icons/bi";
import { TbTemperaturePlus } from "react-icons/tb";

const Forecast = ({ forecast }) => {
    return (
        <Box p={4} borderWidth={1} borderRadius="md" shadow="md" rounded="xl">
            <Text fontSize="md" fontWeight="bold" mb={1}>
                7-Day Forecast
            </Text>
            <Table variant="unstyled" size={"sm"}>
                <Box
                    // borderWidth={1}
                    borderRadius="md"
                    shadow="md"
                    rounded="xl"
                    p={1}
                >
                    <Tr>
                        {forecast.forecastday?.map((f, index) => (
                            <Td key={index}>
                                <Tr textAlign="center">
                                    <Text fontSize="sm">
                                        {new Date(
                                            f.date + "T00:00:00Z"
                                        ).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "numeric",
                                            day: "numeric",
                                            timeZone: "UTC", // Set the desired time zone here
                                        })}
                                    </Text>
                                </Tr>
                                <Tr>
                                    <Image
                                        src={f.day.condition.icon}
                                        alt={f.day.condition.text}
                                        width={"100%"}
                                    />
                                </Tr>
                                <Tr h={10}>
                                    <Text
                                        fontSize="xs"
                                        textAlign="center"
                                        w={20}
                                    >
                                        {f.day.condition.text}
                                    </Text>
                                </Tr>
                                <Tr>
                                    <HStack justifyContent={"center"}>
                                        <MdOutlineWindPower size={15} />
                                        <Text fontSize="xs">
                                            {f.day.maxwind_kph}
                                        </Text>
                                    </HStack>
                                </Tr>
                                <Tr>
                                    <HStack justifyContent={"center"}>
                                        <TbTemperaturePlus size={15} />
                                        <Text fontSize="xs">
                                            {f.day.maxtemp_f}
                                        </Text>
                                    </HStack>
                                </Tr>
                            </Td>
                        ))}
                    </Tr>
                </Box>
            </Table>
        </Box>
    );
};

export default Forecast;
