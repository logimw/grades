import React, { useReducer, useContext } from "react";
import { Wrapper } from "../components/organisms/UserList/UserList.styles";
import FormField from "../components/molecules/FormField/FormField";
import { Button } from "../components/atoms/Button/Button";
import { UsersContext } from "providers/UsersProvider";

const initialFormState = {
  name: "",
  avg: "",
  attendance: "",
  consent: "",
  error: "",
};

const actionTypes = {
  inputChange: "INPUT CHANGE",
  clearValues: "CLEAR VALUES",
  consentToggle: "CONSENT TOGGLE",
  throwError: "THROW ERROR",
};
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.clearValues:
      return initialFormState;
    case actionTypes.consentToggle:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.throwError:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};
const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const { handleAddUser } = useContext(UsersContext);
  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };
  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      dispatch({ type: actionTypes.clearValues });
    } else {
      dispatch({
        type: actionTypes.throwError,
        errorValue: "Consent must be checked!",
      });
    }
  };
  return (
    <Wrapper as="form" onSubmit={handleSubmitUser}>
      <h1>Add new student</h1>
      <FormField
        id="name"
        name="name"
        label="Name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        id="attendance"
        name="attendance"
        label="Attendance"
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField
        id="avg"
        name="avg"
        label="avg"
        value={formValues.avg}
        onChange={handleInputChange}
      />
      <FormField
        id="consent"
        name="consent"
        label="Consent"
        type="checkbox"
        onChange={() => dispatch({ type: actionTypes.consentToggle })}
      />
      <Button>Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </Wrapper>
  );
};

export default AddUser;
