const intial_state = {
  contacts: [],
  user: null,
  popup: false,
};

function AppReducer(state = intial_state, action) {
  switch (action.type) {
    case "SET_CONTACTS":
      return { ...state, contacts: action.contacts };
    case "SET_USER":
      return { ...state, user: action.user };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact._id !== action.id),
      };

    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.contact],
      };

    case "SET_POPUP":
      return { ...state, popup: action.popup };

    default:
      return state;
  }
}

export default AppReducer;
