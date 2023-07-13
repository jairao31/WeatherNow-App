import React from "react";
import { Box, Text, VStack, Image } from "@chakra-ui/react";
import { BiError } from "react-icons/bi";

const Alerts = ({ alerts }) => {
    return (
        <Box mt={10}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
                Alerts
            </Text>
            <VStack
                align="stretch"
                p={4}
                borderWidth={1}
                borderRadius="md"
                shadow="md"
                rounded="xl"
            >
                {alerts.map((alert, index) => (
                    <Box key={index} p={4} borderWidth={1} borderRadius="md">
                        <Text fontSize="lg" fontWeight="bold" mb={2}>
                            {alert.event}
                        </Text>
                        <Box mb={2}>
                            <Image
                                src={alert.image}
                                alt={alert.event}
                                height={150}
                            />
                        </Box>
                        <Text>{alert.description}</Text>
                    </Box>
                ))}
                {alerts.length === 0 && (
                    <Box p={4}>
                        <Text fontSize="md">No alerts found.</Text>
                    </Box>
                )}
            </VStack>
        </Box>
    );
};

export default Alerts;
