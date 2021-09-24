import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Input from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Featured from "../components/Featured/Featured";
import { Map } from "../../../components/Map/Map";
import { AutoComplete } from "../../../components/Autocomplete/AutoComplete";
import { useSelector } from "react-redux";
import { useStyles } from "./userHomePageStyle";
import { createTask } from "../../../services/taskService";
const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imgText: "main image description",
  linkText: "Continue reading…",
};
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const featured = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];

function UserHomepage() {
  const classes = useStyles();
  const [sender, setSender] = useState();
  const [receiver, setReceiver] = useState();
  const [values, setValues] = useState({
    title: "",
    description: "",
    senderPhoneNo: "",
    receiverPhoneNo: "",
  });
  const [current, setCurrent] = useState("");
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    senderPhoneNo: "",
    receiverPhoneNo: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
    if (value) {
      setErrors((errors) => ({
        ...errors,
        [name]: false,
      }));
    }
  };
  const handleError = (name) => {
    setErrors((errors) => ({
      ...errors,
      [name]: true,
    }));
  };
  const loggingIn = useSelector(
    (state) => state.userOtpAuthentication.loggedIn
  );
  const addTask = async () => {
    if (!values.title) {
      return handleError("title");
    }
    if (!values.description) {
      return handleError("description");
    }
    if (!values.senderPhoneNo) {
      return handleError("senderPhoneNo");
    }
    if (!values.receiverPhoneNo) {
      return handleError("receiverPhoneNo");
    }
    const obj = {
      sender: {
        phoneNo: values.senderPhoneNo,
        address: sender.address,
        latitude: sender.lat,
        longitude: sender.lng,
      },
      receiver: {
        phoneNo: values.receiverPhoneNo,
        address: receiver.address,
        latitude: receiver.lat,
        longitude: receiver.lng,
      },
      title: values.title,
      description: values.description,
    };
    try {
      await createTask(obj);
      setCurrent("");
      setValues({
        title: "",
        description: "",
        senderPhoneNo: "",
        receiverPhoneNo: "",
      });
      setErrors({
        title: "",
        description: "",
        senderPhoneNo: "",
        receiverPhoneNo: "",
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>
          {loggingIn ? (
            <div className={classes.mapContainer}>
              <Map markers={[sender, receiver].filter((item) => !!item)} />
              <div className={classes.inputContainer}>
                <AutoComplete
                  inputProps={{
                    placeholder: "Sender's Address",
                  }}
                  onSelect={(data) => {
                    if (data && receiver) {
                      setCurrent("add");
                    }
                    setSender(data);
                  }}
                />
                <AutoComplete
                  inputProps={{
                    placeholder: "Receiver's Address",
                  }}
                  onSelect={(data) => {
                    if (data && sender) {
                      setCurrent("add");
                    }
                    setReceiver(data);
                  }}
                />
              </div>
              <Modal open={current === "add"}>
                <Box sx={style}>
                  <Typography
                    style={{ textAlign: "center" }}
                    fullWidth
                    variant="h6"
                    component="h2"
                  >
                    Enter Additional Information
                  </Typography>
                  <Input
                    fullWidth
                    error={errors.title}
                    value={values.title}
                    name="title"
                    onChange={handleChange}
                    placeholder="Title of Material to be sent"
                  />
                  <Input
                    fullWidth
                    error={errors.description}
                    value={values.description}
                    name="description"
                    onChange={handleChange}
                    placeholder="Description of Material to be sent"
                  />
                  <Input
                    fullWidth
                    error={errors.senderPhoneNo}
                    value={values.senderPhoneNo}
                    name="senderPhoneNo"
                    onChange={handleChange}
                    type="number"
                    placeholder="Sender's Phone Number"
                  />
                  <Input
                    fullWidth
                    error={errors.receiverPhoneNo}
                    value={values.receiverPhoneNo}
                    name="receiverPhoneNo"
                    onChange={handleChange}
                    type="number"
                    placeholder="Receiver's Phone Number"
                  />
                  <Button
                    style={{
                      background: "#3f51b5",
                      color: "white",
                    }}
                    onClick={addTask}
                    type="primary"
                    fullWidth
                  >
                    Add Task
                  </Button>
                </Box>
              </Modal>
            </div>
          ) : (
            <>
              <Banner post={mainFeaturedPost} />
              <Grid container spacing={4}>
                {featured.map((post) => (
                  <Featured key={post.title} post={post} />
                ))}
              </Grid>
            </>
          )}
        </main>
      </Container>
      <Footer description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}

export { UserHomepage };
