import React, { useEffect, useState } from "react";
import { fetchCurrentLocationCity, fetchWeatherByCity } from "../api";
import Navbar from "../Components/Navbar";
import {
    Container,
    VStack,
    useBreakpointValue,
    HStack,
    Spinner,
    useColorMode,
} from "@chakra-ui/react";
import Forecast from "../Components/Forecast";
import Location from "../Components/Location";
import Current from "../Components/Current";
import Today from "../Components/Today";

const WeatherPage = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { colorMode, toggleColorMode } = useColorMode();

    const cityName = async () => {
        try {
            const result = await fetchCurrentLocationCity();
            setCity(result.city);
        } catch (error) {
            setError(error.response.data.errorMsg);
        }
    };
    useEffect(() => {
        cityName();
    }, []);

    useEffect(() => {
        if (city === "") return;
        const fetchWeatherData = async () => {
            try {
                const response = await fetchWeatherByCity(city);
                setWeatherData(response);
                setLoading(false);
            } catch (error) {
                setError(error.response.data.errorMsg);
                setLoading(true);
            }
        };
        setLoading(true);
        fetchWeatherData();
    }, [city]);

    const { location, current, forecast, alerts } = weatherData ?? {};
    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <VStack minH="100vh" align="stretch">
            <Container maxW="6xl" p={4} flex={1}>
                <Navbar
                    city={city}
                    setCity={setCity}
                    setWeatherData={setWeatherData}
                    alerts={alerts}
                    cityName={cityName}
                />
                {loading ? (
                    <VStack pb={isMobile ? 30 : 1}>
                        <Spinner
                            thickness="6px"
                            speed="0.65s"
                            color={
                                colorMode === "light" ? "#5B86E5" : "#7928CA"
                            }
                            size="xl"
                            mt="20%"
                        />
                    </VStack>
                ) : (
                    <VStack align="stretch" spacing={3}>
                        <Location
                            location={location}
                            current={current}
                            isMobile={isMobile}
                        />
                        <HStack
                            direction={isMobile ? "column" : "row"}
                            spacing={isMobile ? 4 : 4}
                            alignItems={isMobile ? "stretch" : "flex-start"}
                        >
                            <Current
                                current={current}
                                astro={forecast.forecastday[0].astro}
                                isMobile={isMobile}
                            />
                            {!isMobile && (
                                <Today hour={forecast.forecastday[0].hour} />
                            )}
                        </HStack>
                        {isMobile && (
                            <Today hour={forecast.forecastday[0].hour} />
                        )}
                        <Forecast forecast={forecast} />
                    </VStack>
                )}
            </Container>
        </VStack>
    );
};

export default WeatherPage;
