import { Button } from "@mui/material";
import { ILayoutConsumer, LayoutContext } from "components/Layout";
import React, { useContext } from "react";
import { useStylesLayout   } from '../../styles/useStyles'

export const MenuLeft = () => {
  const layOutContext: ILayoutConsumer = useContext(LayoutContext)
  const classes = useStylesLayout({ collapse: layOutContext.expand });

  return (
    <div className={classes.menuLeft}>
      <Button onClick={()=> layOutContext?.onChangeExpand()}> Toogle </Button>
      
    </div>
  )
};
