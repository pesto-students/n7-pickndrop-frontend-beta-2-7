import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import { useSelector } from "react-redux";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import { useStyles } from "./homepageStyle";
import { Link } from "react-router-dom";
import delivery from "../../../assets/delivery_partner.jpeg";
import customer from "../../../assets/happy_customer.jpeg";
import packages from "../../../assets/package.jpeg";
import orange from "../../../assets/orange-gradient.jpeg";

const mainFeaturedPost = {
	title: "Welcome to PickNDrop",
	description: "The one stop online solution to deliver your package within a city without any hussle and fair price.",
	image: orange,
	imgText: "main image description",
};

const cards = [
	{
		id: 1,
		title: "50 Delivery Partner per city",
		description: "On time pick up and drop service available 24/7.",
		img: delivery
	},
	{
		id: 2,
		title: "1450 Happy customers",
		description: "A satisfied customer is the best business stategy of all.",
		img: customer
	},
	{
		id: 3,
		title: "4564 packages delivered",
		description: "We have been delivered thousands of packages till now and many more in progress.",
		img: packages
	},
];

function Homepage() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<Header />
				<main>
					<Banner post={mainFeaturedPost} />
					<Container maxWidth="lg">
						<Grid container spacing={4}>
							{cards.map((card) => (
								<Grid item key={card.id} xs={12} sm={6} md={4}>
									<Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
										<CardMedia height="300px" component="img" image={card.img} alt="random" />
										<CardContent sx={{ flexGrow: 1 }}>
											<Typography gutterBottom variant="h5" component="h2">
												{card.title}
											</Typography>
											<Typography>{card.description}</Typography>
										</CardContent>
									</Card>
								</Grid>
							))}
						</Grid>
						<Container style={{ margin: "50px auto" }} maxWidth="sm">
							<Typography component="h2" variant="h3" align="center" color="text.primary" gutterBottom>
								Send Packages
							</Typography>
							<Typography variant="h5" align="center" color="text.secondary" paragraph>
								Go ahead and create a task by putting sender's and receiver's address and a short description about the product.
							</Typography>
							<Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
								<Button color="primary" variant="contained">
									<Link to="/" className={classes.link}>
										Create Task
									</Link>
								</Button>
							</Stack>
						</Container>
					</Container>
				</main>
			</Container>
			<Footer description="Something here to give the footer a purpose!" />
		</React.Fragment>
	);
}

export { Homepage };
