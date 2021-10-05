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
import StripeModal from "../../components/StripeModal/StripeModal";
import { useStyles } from "./profileStyle";
import { getTasks, paymentTask } from "../../services/taskService";
import { Alert } from "@mui/material";

const Profile = () => {
	const classes = useStyles();
	const [data, setData] = useState([]);
	const [current, setCurrent] = useState(-1);

	const orderList = [
		{
			name: "Orders List",
			selected: true,
		},
		{
			name: "Addresses",
			selected: false,
		},
		{
			name: "Manage Payments",
			selected: false,
		},
		{
			name: "Support",
			selected: false,
		},
		{
			name: "About",
			selected: false,
		},
	];
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
			<Container>
				<Header />
				<div
					style={{
						display: "flex",
						flexDirection: "row",
					}}
				>
					<List>
						{orderList.map((item, index) => (
							<ListItem selected={item.selected} key={index} button>
								<ListItemText primary={item.name} />
							</ListItem>
						))}
					</List>
					<main className={classes.ordersContainer}>
						{data.map((item, index) => {
							const { sender, receiver, description, title, price, paymentMethod, isActive, isDelieverd, isCancelled, isPickedUp } =
								item;
							const { address: senderPlace } = sender;
							const { address: receiverPlace } = receiver;
							return (
								<div className={classes.ordersListContainer} key={index}>
									<div className={classes.ordersListHeader}>
										<span className={classes.headerText}><b>{title}</b> - {description}</span>
										<span
											onClick={() => {
												if (!paymentMethod) {
													setCurrent(index);
												}
											}}
											className={paymentMethod ? classes.priceText : classes.priceButton}
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
									<div style={{marginTop: '10px'}}>
										{paymentMethod ? (
											isActive ? (
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
														<Alert severity="error">This order has been cancelled.</Alert>
													) : (
														<Alert severity="warning">
															Please wait, we're assigning your order to nearby delivery partner.
														</Alert>
													)}
												</>
											)
										) : null}
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
								const { data: newData } = await getTasks();
								setData(newData);
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
