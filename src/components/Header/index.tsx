import { Grid } from "@mui/material";
import { ILayoutConsumer, LayoutContext } from "components/Layout";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useStylesLayout } from "styles/useStyles";

export const Header = () => {
  const layOutContext: ILayoutConsumer = useContext(LayoutContext)
  const classes = useStylesLayout({ collapse: layOutContext.expand });

  return (
    <Grid className="header">
      <Link to="/">Go Home</Link>
      <Link to="/login">Go Login</Link>
    </Grid>
  );
};
