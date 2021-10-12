import { makeStyles } from "@mui/styles";
import { themeDefault } from "../theme";
import { WIDTH_SIDEBAR_COLLAPSE, WIDTH_SIDEBAR_EXPAND } from "../../constants";

export const useStylesLayout = makeStyles((theme: typeof themeDefault) => ({
  menuLeft: {
    width: (props: any) =>
      props.collapse ? WIDTH_SIDEBAR_COLLAPSE : WIDTH_SIDEBAR_EXPAND,
    height: "100vh",
    transition: "width 0.5s ease",
    background: theme.menuThemBG,
  },
  wrapMain: {
    width: (props: any) =>
      props.collapse
        ? `calc(100% - ${WIDTH_SIDEBAR_COLLAPSE})`
        : `calc(100% - ${WIDTH_SIDEBAR_EXPAND})`,
    left: (props: any) =>
      props.collapse ? `${WIDTH_SIDEBAR_COLLAPSE}` : `${WIDTH_SIDEBAR_EXPAND}`,
    margin: 0,
    justifyContent: "space-between",
    transition: "width 0.5s ease",
  },
  mainContent: {
    flex: 1,
    width: "auto",
  },
}));
