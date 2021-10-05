import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  mapContainer: {
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: '100%',
    height: 'auto',
    position: "relative",
	marginBottom: '50px',
  },
  inputContainer: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: '59px',
    padding: 5,
  },
  input: {
    lineHeight: 2,
    border: "2px solid #eee",
    width: window.innerWidth * 0.3,
	borderRadius: '5px',
	padding: '10px',
  },
  modalInput: {
    lineHeight: 2,
    padding: 10,
  },
  button: {
    margin: "20px 0",
  },
}));
