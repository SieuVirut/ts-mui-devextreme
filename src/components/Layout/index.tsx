import React, { useState } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { MenuLeft } from "../MenuLeft";
import { Grid } from "@mui/material";
import { useStylesLayout } from "../../styles/useStyles";
export interface ILayoutConsumer {
  expand?: boolean;
  onChangeExpand?: () => void;
}
export const LayoutContext = React.createContext({
  expand: false,
  onChangeExpand: () => {},
});

const LayoutProvider = (props) => {
  const [isExpand, setIsExpand] = useState(false);
  const classes = useStylesLayout({ collapse: isExpand });

  const value = {
    expand: isExpand,
    onChangeExpand: () => setIsExpand(!isExpand),
  };

  return (
    <LayoutContext.Provider value={value}>
      <Grid container direction="row" wrap="nowrap">
        <Grid item>
          <MenuLeft />
        </Grid>
        <Grid container direction="column" classes={classes.wrapMain}>
          <Header />
          <Grid container className={classes.mainContent}>
            {props.children}
          </Grid>
          <Footer />
        </Grid>
      </Grid>
    </LayoutContext.Provider>
  );
};

const LayoutConsumer = LayoutContext.Consumer;

export { LayoutProvider, LayoutConsumer };
