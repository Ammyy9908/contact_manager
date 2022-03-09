import axios from "axios";
import Cookies from "js-cookie";
const add_contact = async (name, phone, email) => {
  try {
    const r = await axios.post(
      `https://contactappserver.herokuapp.com/api/contact/new`,
      {
        name,
        phone,
        email,
      },
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

export default add_contact;
