import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;
export const SendPost = async (page: string, data: any, token: string | undefined = undefined) => {
    let headers: any = { 'Content-Type': 'application/json' };
    if (token)
        headers =  { 'Content-Type': 'application/json', 'x-auth-token': token };
    
    try {
        const response = await axios({
            method: 'post',
            headers: headers,
            url: apiUrl + page,
            data: data,
        });
        return { data: response.data, headers: response.headers, status: response.status };
    } catch (error: any) {
        return { status: 404 };
    }
};

export const SendGet = async (page: string, token: string | undefined = undefined) => {
    let headers: any = { 'Content-Type': 'application/json' };
    if (token)
        headers =  { 'Content-Type': 'application/json', 'x-auth-token': token };
    try {
        const response = await axios({
            method: 'get',
            headers: headers,
            url: apiUrl + page,
        });
        return { data: response.data, headers: response.headers, status: response.status };
    } catch (error: any) {
        return { status: 404 };
    }
};
export const SendPut = async (page: string, data: any, token: string | undefined = undefined) => {
    let headers: any = { 'Content-Type': 'application/json' };
    if (token)
        headers =  { 'Content-Type': 'application/json', 'x-auth-token': token };
    try {
        const response = await axios({
            method: 'put',
            headers: headers,
            url: apiUrl + page,
            data: data,
        });
        return { data: response.data, headers: response.headers, status: response.status };
    } catch (error: any) {
        return { status: 404 };
    }
};

export const SendDelete = async (page: string, data: any, token: string | undefined = undefined) => {
    let headers: any = { 'Content-Type': 'application/json' };
    if (token)
        headers =  { 'Content-Type': 'application/json', 'x-auth-token': token };
    try {
        const response = await axios({
            method: 'delete',
            headers: headers,
            url: apiUrl + page,
            data: data,
        });
        return { data: response.data, headers: response.headers, status: response.status };
    } catch (error: any) {
        return { status: 404 };
    }
};
