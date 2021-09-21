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
