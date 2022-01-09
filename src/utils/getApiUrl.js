export const getApiUrl = (endpoint) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  return `${baseUrl}${endpoint}`;
};
