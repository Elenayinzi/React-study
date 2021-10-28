const devBaseUrl = "https://httpbin.org"
const proBaseUrl = "https://httpbin.org/"

export const baseUrl = process.env.NODE_ENV === 'development'?devBaseUrl:proBaseUrl;

export const TIMEOUT = 5000;
