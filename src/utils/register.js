import axios from "axios";

const register = async (email, password) => {
  try {
    const r = await axios.post(
      "https://contactappserver.herokuapp.com/api/auth/register",
      {
        email,
        password,
      }
    );
    return r.data;
  } catch (err) {
    return err;
  }
};

export default register;
