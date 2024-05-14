import axios, { AxiosResponse } from "axios";

const API_URL = 'http://localhost:8080/MyAcademy'

export default class ApiService {

    async getData(endpoint: string): Promise<any> {
        const url = `${API_URL}/${endpoint}`;

        try {
            const response: AxiosResponse = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error('Error al obtener data: ', error);
        }
    }

    async postData(endpoint: string, data: any): Promise<any> {
        const url = `${API_URL}/${endpoint}`;
        try {
            const response: AxiosResponse = await axios.post(url, data);
            return response.data;
        } catch (error) {
            console.error('Error al registrar data:', error)
        }
    }

    async putData(endpoint: string, data: any): Promise<any> {
        const url = `${API_URL}/${endpoint}`;
        try {
            const response: AxiosResponse = await axios.put(url, data);
            return response.data;
        } catch (error) {
            console.error('Error al actualizar data:', error)
        }
    }

    async postBulkData(endpoint: string, data: any[]): Promise<any> {
        const url = `${API_URL}/${endpoint}`;
        try {
            const response: AxiosResponse = await axios.post(url, data);
            return response.data;
        } catch (error) {
            console.error('Error al registrar data:', error)
        }
    }
}