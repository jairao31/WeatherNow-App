import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import WeatherPage from "./Pages/WeatherPage";

function App() {
    return (
        <ChakraProvider>
            <WeatherPage />
        </ChakraProvider>
    );
}

export default App;
