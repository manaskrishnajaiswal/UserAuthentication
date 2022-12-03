import axios from "axios";
const API_KEY = "AIzaSyC3z9f2QkhwHX572TKtXfce_CFCl49S6ok";
export async function createUser(email, password) {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
