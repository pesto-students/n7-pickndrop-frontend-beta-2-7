import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  ordersContainer: {
    minWidth: "60%",
  },
  ordersListContainer: {
    margin: '8px 15px',
    padding: 15,
    background: '#f7f1ec',
    borderRadius: '15px',
  },
  ordersListHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "black",
  },
  priceText: {
    color: "white",
    padding: '5px 10px',
    marginBottom: '10px',
    borderRadius: 10,
    backgroundColor: "#663535",
  },
  priceButton: {
    color: "white",
    backgroundColor: "#406c52",
    borderRadius: 20,
    padding: '5px 10px',
    boxShadow:
      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
    cursor: "pointer",
    marginBottom: '10px',
  },
  ordersListAddressContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  ordersListAddress: {
    display: "flex",
    alignItems: "flex-start",
  },
  icon: {
    margin: "0 5px",
  },
  ordersListDescription: {
    display: "flex",
    alignItems: "flex-start",
    margin: 5,
  },
  about: {
    maxWidth: '700px',
    margin: '20px',
    "& p": {
			margin: "20px 0",
      textAlign: 'left'
		},
  }
}));
