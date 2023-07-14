import React from "react";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";

const Alerts = ({ alerts }) => {
    return (
        <Box>
            <VStack align="stretch">
                {alerts.alert?.map((alert, index) => (
                    <HStack
                        p={2}
                        justifyContent={"space-between"}
                        key={index}
                        borderWidth={1}
                        borderRadius="md"
                        shadow="md"
                        rounded="xl"
                    >
                        <VStack align="stretch" flex={1}>
                            <Text fontSize="md">{alert.event}</Text>
                            <Text fontSize="xs" color="gray.500">
                                {alert.headline}
                            </Text>
                            <Text fontSize="xs" color="gray.500">
                                Severity: {alert.severity}
                            </Text>
                            <Text fontSize="xs" color="gray.500">
                                Effective:{" "}
                                {new Date(alert.effective).toLocaleDateString(
                                    "en-US",
                                    {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour: "numeric",
                                        minute: "numeric",
                                        hour12: true,
                                    }
                                )}
                            </Text>
                            <Text fontSize="xs" color="gray.500">
                                Expires:{" "}
                                {new Date(alert.expires).toLocaleDateString(
                                    "en-US",
                                    {
                                        weekday: "long",
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                        hour: "numeric",
                                        minute: "numeric",
                                        hour12: true,
                                    }
                                )}
                            </Text>
                            <Text fontSize="xs">{alert.desc}</Text>
                        </VStack>
                    </HStack>
                ))}
                {(!alerts.alert || alerts.alert.length === 0) && (
                    <Box py={4}>
                        <Text fontSize="md">No alerts found.</Text>
                    </Box>
                )}
            </VStack>
        </Box>
    );
};

export default Alerts;
