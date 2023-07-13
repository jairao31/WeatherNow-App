import React from "react";
import {
    Box,
    Card,
    CardHeader,
    Divider,
    VStack,
    HStack,
    Text,
} from "@chakra-ui/react";
import { MdPlace, MdAccessTime } from "react-icons/md";

const Location = ({ location }) => {
    const { name, region, country, lat, lon, localtime } = location;

    return (
        <Box flex={1}>
            <VStack align="stretch" spacing={2}>
                <Card
                    variant={"outline"}
                    borderWidth={1}
                    borderRadius="md"
                    shadow="md"
                    rounded="xl"
                >
                    <CardHeader p={3}>
                        <VStack align="start" spacing={1}>
                            <HStack align="center">
                                <MdPlace size={20} />
                                <Text fontSize="4xl">{name}</Text>
                            </HStack>
                            <Text fontSize="sm">{region}</Text>
                            <Text fontSize="sm">{country}</Text>
                            <Divider />
                            <HStack align="center">
                                <MdAccessTime size={20} />
                                <Text fontSize="sm">
                                    Local Time:{" "}
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
                            <Text fontSize="sm">
                                Latitude λ : {lat} | Longitude φ : {lon}
                            </Text>
                        </VStack>
                    </CardHeader>
                </Card>
            </VStack>
        </Box>
    );
};

export default Location;
