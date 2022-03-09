import axios from "axios";

const login = async (email, password) => {
  try {
    const r = await axios.post(
      "https://contactappserver.herokuapp.com/api/auth/login",
      {
        email,
        password,
      }
    );
    return r.data;
  } catch (err) {
    return false;
  }
};

export default login;
