import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  ordersContainer: {
    minWidth: "60%",
  },
  ordersListContainer: {
    margin: 15,
    padding: 15,
    border: "1px solid black",
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
    color: "green",
    backgroundColor: "#e5e5e5",
  },
  priceButton: {
    color: "white",
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 5,
    boxShadow:
      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
    cursor: "pointer",
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
}));
