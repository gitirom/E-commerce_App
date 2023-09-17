import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Zjc2NjQxNWMwZmJkNDE0ZWY3MGQ1MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NDg3Njc3MiwiZXhwIjoxNjk1NDgxNTcyfQ.YlIglK6ixbuNmv9qsl-phYQ1EMo5pI1EgEqQQezYGaI";

export const publicRequest = axios.create({  //this method to avoid create axios.....
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});

