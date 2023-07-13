import React, { useEffect, useState } from "react";
import { fetchWeatherByCity } from "../api";
import Navbar from "../Components/Navbar";
import { Container, Flex, Grid } from "@chakra-ui/react";
import Alerts from "../Components/Alerts";
import Forecast from "../Components/Forecast";
import Location from "../Components/Location";
import Current from "../Components/Current";

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
        <>
            <Navbar
                city={city}
                setCity={setCity}
                setWeatherData={setWeatherData}
            />
            <Container maxW="8xl" py={2} px={10}>
                {weatherData && (
                    <Flex gap={5}>
                        <Location location={location} />
                        <Current current={current} />
                    </Flex>

                    // <Flex>
                    //     <Location location={location} />
                    //     <Current current={current} />
                    //     <Forecast forecast={forecast} />
                    //     <Alerts alerts={alerts.alert} />
                    // </Flex>
                    // <Grid
                    //     templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                    //     gap={10}
                    // >
                    //     <Flex>
                    //         <Location location={location} />
                    //         <Current current={current} />
                    //     </Flex>
                    //     <Flex>
                    //         {alerts && <Alerts alerts={alerts.alert} />}
                    //         {forecast && <Forecast forecast={forecast} />}
                    //     </Flex>
                    // </Grid>
                )}
            </Container>
        </>
    );
};

export default WeatherPage;
