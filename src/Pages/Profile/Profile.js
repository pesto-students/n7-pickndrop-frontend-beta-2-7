import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useStyles } from "./profileStyle";
import { getTasks } from "../../services/taskService";
import { Alert } from "@mui/material";

const Profile = () => {
	const classes = useStyles();
	const [data, setData] = useState([]);
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
						{["Orders List", "Addresses", "Manage Payments", "Support", "About"].map((text, index) => (
							<ListItem key={index} button>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
					<main className={classes.ordersContainer}>
						{data.map((item, index) => {
							const { sender, receiver, description, title, price, isActive, isDelieverd, isCancelled, isPickedUp } = item;
							const { address: senderPlace } = sender;
							const { address: receiverPlace } = receiver;
							return (
								<div className={classes.ordersListContainer} key={index}>
									<div className={classes.ordersListHeader}>
										<span className={classes.headerText}>{title}</span>
										<span className={classes.priceText}>Paid: Rs.{price}</span>
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
									<div>
										{isActive ? (
											<>
												{isPickedUp ? (
													<>
														{isDelieverd ? (
															<Alert severity="success">Your order has been delivered successfully.</Alert>
														) : (
															<Alert severity="info">
																Your order has been picked up and delivery partner is on the way to deliver your
																order.
															</Alert>
														)}
													</>
												) : (
													<Alert severity="info">
														Your order has been accepeted and delivery partner is on the way to pick up your order.
													</Alert>
												)}
											</>
										) : (
											<>
												{isCancelled ? (
													<Alert severity="error">
														This order has been cancelled.
													</Alert>
												) : (
													<Alert severity="warning">
														Please wait, we're assigning your order to nearby delivery partner.
													</Alert>
												)}
											</>
										)}
									</div>
								</div>
							);
						})}
					</main>
				</div>
				<Footer />
			</Container>
		</>
	);
};
export { Profile };
