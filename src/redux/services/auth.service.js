import Axios from "axios";
import { BASE_API_URL } from "./constant";
// const header = {
//   "Content-Type":
//     "application/x-www-form-urlencoded; charset=UTF-8;application/json",
// };
const api = Axios.create({
  baseURL: BASE_API_URL,
});

// Intercepteur de requêtes
api.interceptors.request.use((config) => {
  // Récupérer le token d'authentification depuis localStorage
  const token = localStorage.getItem("token");

  // Ajouter le token à l'en-tête de la requête
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

class AuthService {
  // async login(data) {
  //   try {
  //     const response = await api.post(`${BASE_API_URL}/enseignant/login`, data);
  //     console.log("debut");
  //     console.log(response);
  //     console.log("fin response");
  //     console.log(response.data);
  //     console.log("fin user");
  //     return response.data;
  //   } catch (error) {
  //     console.log(error);
  //     throw error;
  //   }
  // }
  async login(data) {
    try {
      // Tentative d'authentification en tant qu'enseignant
      const enseignantResponse = await api.post(
        `${BASE_API_URL}/enseignant/login`,
        data
      );
      console.log(data);
      console.log("login as enseignant");
      console.log(enseignantResponse);
      return enseignantResponse.data;
    } catch (enseignantError) {
      try {
        // Tentative d'authentification en tant qu'apprenant
        const apprenantResponse = await api.post(
          `${BASE_API_URL}/apprenant/login`,
          data
        );
        console.log(data);
        console.log("login as apprenant");
        console.log(apprenantResponse);
        return apprenantResponse.data;
      } catch (apprenantError) {
        console.log(apprenantError);
        throw apprenantError;
      }
    }
  }
  async signup(data) {
    try {
      const response = await api.post(
        `${BASE_API_URL}/enseignant/sign-up`,
        data
      );
      console.log(data);
      console.log("signup");
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async signupStudent(data) {
    try {
      const response = await api.post(
        `${BASE_API_URL}/apprenant/sign-up`,
        data
      );
      console.log(data);
      console.log("signup");
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export default AuthService;
