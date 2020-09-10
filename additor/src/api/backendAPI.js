import axios from 'axios';

//set APIs for backend

const baseurl = 'http://localhost:5000';
const config = {
  headers: { 'Access-Control-Allow-Origin': '*' },
};
const backendAPI = axios.create({
  baseURL: baseurl,
});

export const postLogin = (params) =>
  backendAPI.post('/login', params.loginData, config);

export const postContent = (params) =>
  backendAPI.post('/update', params.updateData, config);
