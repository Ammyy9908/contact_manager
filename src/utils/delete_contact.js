import axios from "axios";
import Cookies from "js-cookie";
const deletecontact = async (id) => {
  try {
    const r = await axios.delete(
      `https://contactappserver.herokuapp.com/api/contact/delete/${id}`,
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

export default deletecontact;
