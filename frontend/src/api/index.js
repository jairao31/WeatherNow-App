import Axios from "axios";
import { getBaseUrl } from "../baseUrl";

const baseURL = getBaseUrl();

const axios = Axios.create({
    baseURL,
});

/**
 *
 * @param {string} endpoint to which the API request is to be made
 * @param {object} params query parameters
 * @returns response data or error response
 */
export const GET = async (endpoint, params = {}, headers = {}) => {
    const { data } = await axios.get(endpoint, { params, headers });
    return data;
};

/**
 *
 * @param {string} endpoint to which the API request is to be made
 * @param {object} body request body
 * @param {object} params query parameters
 * @returns
 */
export const POST = async (endpoint, body = {}, params = {}, headers = {}) => {
    const { data } = await axios.post(endpoint, body, {
        params,
        headers,
    });
    return data;
};

export const requestTypes = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE",
    PATCH: "PATCH",
};

Object.freeze(requestTypes);

export const fetchCityList = async (query) => {
    try {
        const endpoint = `cities/${query}`;
        const response = await GET(endpoint);
        return response;
    } catch (error) {
        throw new Error(error.response.data.errorMsg);
    }
};

export const fetchWeatherByCity = async (city) => {
    try {
        const endpoint = `weather/${city}`;
        const response = await GET(endpoint);
        return response;
    } catch (error) {
        throw new Error(error.response.data.errorMsg);
    }
};
