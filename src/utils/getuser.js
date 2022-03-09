import axios from "axios";
import Cookies from "js-cookie";
const getUser = async () => {
  try {
    const r = await axios.get(
      "https://contactappserver.herokuapp.com/api/auth/user",
      {
        headers: {
          Authorization: `${Cookies.get("AUTH_TOKEN")}`,
        },
      }
    );
    return r.data;
  } catch (err) {
    return err;
  }
};

export default getUser;
