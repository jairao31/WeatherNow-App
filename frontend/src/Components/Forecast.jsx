import React from "react";
import { Box, Text, HStack, VStack, Image } from "@chakra-ui/react";

const Forecast = ({ forecast }) => {
    return (
        <Box mt={10}>
            <Text fontSize="lg" fontWeight="bold" mb={4}>
                7-Day Forecast
            </Text>
            <HStack spacing={4} justify="center">
                {forecast.forecastday.map((day, index) => (
                    <VStack
                        key={index}
                        align="stretch"
                        p={4}
                        borderWidth={1}
                        borderRadius="md"
                        shadow="md"
                        rounded="xl"
                    >
                        <Text fontSize="lg" fontWeight="bold" mb={2}>
                            {day.date}
                        </Text>
                        <Box mb={2}>
                            <Image
                                src={day.icon}
                                alt={day.condition}
                                height={80}
                            />
                        </Box>
                        <Text fontSize="md" fontWeight="bold">
                            {day.condition}
                        </Text>
                        <Text fontSize="md">
                            {day.minTemp}°C - {day.maxTemp}°C
                        </Text>
                    </VStack>
                ))}
            </HStack>
        </Box>
    );
};

export default Forecast;
