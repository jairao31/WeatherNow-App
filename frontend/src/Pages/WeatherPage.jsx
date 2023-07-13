import React, { useEffect, useState } from "react";
import { fetchWeatherByCity } from "../api";
import Navbar from "../Components/Navbar";
import { Container, Flex, Box, VStack } from "@chakra-ui/react";
import Alerts from "../Components/Alerts";
import Forecast from "../Components/Forecast";
import Location from "../Components/Location";
import Current from "../Components/Current";
import Today from "../Components/Today";

const WeatherPage = () => {
    const [city, setCity] = useState("Jersey City");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (city === "") return;
        const fetchWeatherData = async () => {
            try {
                const response = await fetchWeatherByCity(city);
                setWeatherData(response);
            } catch (error) {
                setError(error.response.data.errorMsg);
            }
        };
        fetchWeatherData();
    }, [city]);

    const { location, current, forecast, alerts } = weatherData ?? {};

    return (
        <VStack height={"100%"} align="stretch" flex={1}>
            <Navbar
                city={city}
                setCity={setCity}
                setWeatherData={setWeatherData}
                alerts={alerts}
            />
            <Container
                maxW="8xl"
                // py={2} px={10}
                height="100%"
            >
                {weatherData && (
                    <VStack align="stretch" spacing={5}>
                        <Flex gap={5}>
                            <VStack align="stretch" w="40%" gap={5}>
                                <Box>
                                    <Location location={location} />
                                </Box>
                                <Box>
                                    <Today
                                        hour={forecast.forecastday[0].hour}
                                    />
                                </Box>
                            </VStack>

                            <VStack align="stretch" spacing={5}>
                                <Current current={current} />
                                {forecast && <Forecast forecast={forecast} />}
                            </VStack>
                        </Flex>
                    </VStack>
                )}
            </Container>
        </VStack>
    );
};

export default WeatherPage;
