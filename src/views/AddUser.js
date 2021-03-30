import React, { useState, useContext } from "react";
import { Wrapper } from "../components/organisms/UserList/UserList.styles";
import FormField from "../components/molecules/FormField/FormField";
import { Button } from "../components/atoms/Button/Button";
import { UsersContext } from "providers/UsersProvider";

const initialFormState = {
  name: "",
  avg: "",
  attendance: "",
};
const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddUser } = useContext(UsersContext);
  const handleInputChange = (e) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValues(initialFormState);
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
      <Button>Add</Button>
    </Wrapper>
  );
};

export default AddUser;
