import axios, { AxiosError } from "axios";

export function handleAxiosError(error: AxiosError | any) {
    if (axios.isAxiosError(error)) {
        // Axios error (network, timeout, etc.)
        return new Error('Network error');
    } else if (error.response) {
        // API error (4xx or 5xx status code)
        const { data } = error.response;
        if (data && data.error) {
            return new Error(data.error);
        } else {
            return new Error('API error');
        }
    } else {
        // Other error (e.g. request cancellation)
        return 'an error occurred';
    }
}