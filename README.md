# WeatherNow 🌦️

This is a web application that provides weather information for cities, including hourly and 10-day forecasts. It is built using React, Node.js, WeatherAPI, and Chakra UI.

## Features

-   Current weather conditions, including temperature, humidity, wind speed, and more.
-   Hourly forecast for the next 24 hours, showing temperature, weather description, and icons.
-   10-day forecast with daily weather summaries, including temperature ranges and weather icons.
-   Search functionality to find weather information for any city.
-   Responsive design for optimal viewing on different devices.

## Installation

-   Clone the repository:

    ```bash
    git clone https://github.com/your-username/weather-forecast.git
    ```

-   Install dependencies for the server and client:

    ```bash
    cd ../backend
    npm install

    cd ../frontend
    npm install
    ```

-   Set up WeatherAPI credentials:

-   Register for a free API key at [WeatherAPI](https://www.weatherapi.com/).
-   Create a `.env` file in the `server` directory and add your API key:

    ```
    WEATHER_API_KEY=your-api-key
    ```

-   Start the server and client:

    ```bash
    cd ../backend
    npm install

    cd ../frontend
    npm install
    ```

-   Open the application in your browser at [http://localhost:3000](http://localhost:3000).

## Usage

-   Enter the name of a city in the search bar and click the search button.
-   The current weather information, hourly forecast, and 10-day forecast will be displayed.
-   Use the navigation tabs to switch between different sections.
-   Explore the weather details and plan accordingly!

## Technologies Used

-   React
-   Node.js
-   Express
-   Chakra UI
-   Axios
-   WeatherAPI

## Credits

-   This project utilizes the [WeatherAPI](https://www.weatherapi.com/) for weather data.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
