import React, { useState } from "react";
import Button from "devextreme-react/button";
import { Grid, TextField } from "@mui/material";
import Form, { SimpleItem, GroupItem, Label } from "devextreme-react/form";
export const Login = (props) => {
  const [data] = useState({
    email: "smdc02",
    password: "1234",
  });
  console.log(data);
  const onLogin = (e) => {
    console.log("Onlogin", data);
  };
  return (
    <Grid>
      <Form
        colCount={1}
        formData={data}
        items={[{ dataField: "email" }, { dataField: "password" }]}
      />

      <Button onClick={onLogin} text="Login"></Button>
    </Grid>
  );
};
