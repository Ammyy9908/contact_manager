import React from "react";
import { connect } from "react-redux";
import AddButton from "../components/AddButton";
import Header from "../components/Header";
import Cookies from "js-cookie";
import deletecontact from "../utils/delete_contact";
import { useHistory } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import "./Home.css";
import NewContactFrom from "../components/NewContactFrom";

function ContactList({ email, name, phone, deleteContact, id }) {
  const handleDelete = () => {
    deletecontact(id).then((feedback) => {
      const { message } = feedback;
      if (message) {
        deleteContact(id);
      }
    });
  };
  return (
    <div className="contact-list">
      <span className="contact-name-box">
        <div
          className="contact-avatar"
          style={{
            backgroundImage: `url(https://avatars.dicebear.com/api/adventurer/${email}.svg)`,
          }}
        ></div>
        <span>{name}</span>
      </span>
      <span className="contact-email">{email}</span>
      <span className="contact-phone">{phone}</span>
      <span className="contact-actions">
        <button onClick={handleDelete}>
          <AiOutlineDelete />
        </button>
      </span>
    </div>
  );
}
function Home({ user, contacts, deleteContact, popup, setPopUp }) {
  const history = useHistory();

  React.useEffect(() => {
    if (!Cookies.get("AUTH_TOKEN")) {
      history.push("/auth/login");
    }
  }, []);

  console.log(contacts);
  const empty_illustration =
    "https://ssl.gstatic.com/social/contactsui/images/nocontactsicon_1x.png";
  return (
    <div>
      <Header user={user} />
      <NewContactFrom popup={popup} setPopUp={setPopUp} />
      <div className="app_body">
        {!contacts.length > 0 ? (
          <div className="empty_contact_box">
            <img src={empty_illustration} alt="" />
            <p>No Contact Yet!</p>
            <p>Create a one by clicng below plus button</p>
          </div>
        ) : (
          <div className="contact-table">
            <div className="table-header">
              <span>Name</span>

              <span>Phone</span>
              <span>Email</span>
              <span></span>
            </div>
            <div className="contact-lists">
              {contacts.map((contact, i) => {
                return (
                  <ContactList
                    key={i}
                    email={contact.email}
                    name={contact.name}
                    phone={contact.phone}
                    deleteContact={deleteContact}
                    id={contact._id}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
      <AddButton setPopUp={setPopUp} popup={popup} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.appReducer.user,
  contacts: state.appReducer.contacts,
  popup: state.appReducer.popup,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch({ type: "DELETE_CONTACT", id }),
  setPopUp: (popup) => dispatch({ type: "SET_POPUP", popup }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
