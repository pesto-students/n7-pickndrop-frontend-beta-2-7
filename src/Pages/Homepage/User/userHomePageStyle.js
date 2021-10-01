import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mapContainer: {
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 0.8 * window.innerWidth,
    height: window.innerHeight,
    position: "relative",
  },
  inputContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 5,
    padding: 5,
  },
  input: {
    lineHeight: 2,
    border: "2px solid black",
    width: window.innerWidth * 0.3,
  },
  modalInput: {
    lineHeight: 2,
    padding: 10,
  },
  button: {
    margin: "20px 0",
  },
}));
