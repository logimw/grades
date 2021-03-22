import React from "react";
import { Wrapper } from "components/organisms/UserList/UserList.styles";
import FormField from "components/molecules/FormField/FormField";
import { Button } from "components/atoms/Button/Button";

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleAddUser}>
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
    </>
  );
};

export default Form;
