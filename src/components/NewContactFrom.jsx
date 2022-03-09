import React from "react";
import "./NewContactFrom.css";
import add_contact from "../utils/add_contact";
import { connect } from "react-redux";
function Field({ type, placeholder, value, setValue, popup }) {
  return (
    <div className="form-field">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
function NewContactFrom({ popup, addContact, setPopUp }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const empty_fields = () => {
    setName("");
    setEmail("");
    setPhone("");
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("Please fill the form");
    } else {
      if (phone.length < 10 || phone.length > 10) {
        alert("Phone number must be 10 digits");
      } else {
        add_contact(name, email, phone)
          .then((contact) => {
            console.log(contact);
            if (contact) {
              addContact(contact);
              setPopUp(false);
              empty_fields();
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  };

  const handleClose = (e) => {
    const class_name = e.target.classList;
    if (class_name.contains("new-contact-popup")) {
      setPopUp(false);
      empty_fields();
    }
  };

  return (
    <div
      className={`new-contact-popup ${popup && "popup-enable"}`}
      onClick={handleClose}
    >
      <div className="new-contact-modal">
        <form onSubmit={handleSave}>
          <Field
            type="text"
            placeholder="Name"
            value={name}
            setValue={setName}
          />
          <Field
            type="text"
            placeholder="Email"
            value={email}
            setValue={setEmail}
          />
          <Field
            type="text"
            placeholder="Phone"
            value={phone}
            setValue={setPhone}
          />
          <input type="submit" value="Save" />
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addContact: (contact) => dispatch({ type: "ADD_CONTACT", contact }),
});
export default connect(null, mapDispatchToProps)(NewContactFrom);
