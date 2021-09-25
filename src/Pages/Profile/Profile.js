import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Header from "../../components/Header/Header";
import Modal from "@material-ui/core/Modal";
import Footer from "../../components/Footer/Footer";
import { useStyles } from "./profileStyle";
import { getTasks, paymentTask } from "../../services/taskService";
import StripeModal from "../../components/StripeModal/StripeModal.js";
const Profile = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(-1);
  const getData = async () => {
    try {
      const { data } = await getTasks();
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <List>
            {[
              "Orders List",
              "Addresses",
              "Manage Payments",
              "Support",
              "About",
            ].map((text, index) => (
              <ListItem key={index} button selected={index === 0}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <main className={classes.ordersContainer}>
            {data.map((item, index) => {
              const {
                sender,
                receiver,
                description,
                paymentMethod,
                title,
                price,
              } = item;
              const { address: senderPlace } = sender;
              const { address: receiverPlace } = receiver;
              return (
                <div className={classes.ordersListContainer} key={index}>
                  <div className={classes.ordersListHeader}>
                    <span className={classes.headerText}>{title}</span>
                    <span
                      onClick={() => {
                        if (!paymentMethod) {
                          setCurrent(index);
                        }
                      }}
                      className={classes.priceText}
                    >
                      {paymentMethod ? "Paid: Rs." : "Pay Now Rs."}
                      {price}
                    </span>
                  </div>
                  <div className={classes.ordersListAddressContainer}>
                    <div className={classes.ordersListAddress}>
                      <LocationOnIcon className={classes.icon} />
                      <span>{senderPlace}</span>
                    </div>
                    <div className={classes.ordersListAddress}>
                      <LocationOnIcon className={classes.icon} />
                      <span>{receiverPlace}</span>
                    </div>
                  </div>
                  <div className={classes.ordersListDescription}>
                    <span>{description}</span>
                  </div>
                </div>
              );
            })}
          </main>
        </div>
        <Modal open={current !== -1}>
          <StripeModal
            onSubmit={async (paymentMethod) => {
              try {
                await paymentTask(data[current]._id, paymentMethod);
                await getTasks();
                setCurrent(-1);
              } catch (e) {
                console.log(e);
              }
            }}
            price={data[current]?.price}
          />
        </Modal>
        <Footer />
      </Container>
    </>
  );
};
export { Profile };
