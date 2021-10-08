import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    marginBottom: "40px",
    marginTop: "8px",
  },
  heading: {
    marginBottom: "0",
  },
  profile: {
    marginLeft: "10px",
  },
  subHeading: {
    marginTop: "0",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    top: "-8px",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  toolbarTitle: {
    flex: 1,
    cursor: "pointer",
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  button: {
    margin: "0 0 0 10px",
    backgroundColor: "#d65a50",
    color: "#fff",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
