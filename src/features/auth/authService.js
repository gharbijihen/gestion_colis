import axios from "axios";
import axiosData from "../../configAxios";

const API_URL = `${process.env.REACT_APP_API_BASE_URL}/auth`;

// Register user
const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (err) {
    let message = err.response.data?.message || "Probleme connexion";
    throw message;
  }
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "/login", userData);
  return response.data;
};


// Logout user

const authService = {
  register,
  login,
};

export default authService;
