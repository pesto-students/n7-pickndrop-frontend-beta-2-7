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
import { Mail } from "@material-ui/icons";

const Profile = () => {
	const classes = useStyles();
	const [data, setData] = useState([]);
	const [current, setCurrent] = useState(-1);
	const [orderList, setOrderList] = useState([
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
	]);

	const handleMenuChange = (id) => {
		for (var key in orderList) {
			orderList[key]["selected"] = false;
		}
		orderList[id].selected = true;
		let order = [...orderList];
		setOrderList(order);
	};

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
								<ListItemText onClick={() => handleMenuChange(index)} primary={item.name} />
							</ListItem>
						))}
					</List>
					<main className={classes.ordersContainer}>
						{orderList.map((item, index) => {
							if (item.selected) {
								switch (index) {
									case 0:
										return (
											<div>
												{data.map((item, index) => {
													const {
														sender,
														receiver,
														description,
														title,
														price,
														paymentMethod,
														isActive,
														isDelieverd,
														isCancelled,
														isPickedUp,
													} = item;
													const { address: senderPlace } = sender;
													const { address: receiverPlace } = receiver;
													return (
														<div className={classes.ordersListContainer} key={index}>
															<div className={classes.ordersListHeader}>
																<span className={classes.headerText}>
																	<b>{title}</b> - {description}
																</span>
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
															<div style={{ marginTop: "10px" }}>
																{paymentMethod ? (
																	isActive ? (
																		<>
																			{isPickedUp ? (
																				<>
																					{isDelieverd ? (
																						<Alert severity="success">
																							Your order has been delivered successfully.
																						</Alert>
																					) : (
																						<Alert severity="info">
																							Your order has been picked up and delivery partner is on
																							the way to deliver your order.
																						</Alert>
																					)}
																				</>
																			) : (
																				<Alert severity="info">
																					Your order has been accepeted and delivery partner is on the way
																					to pick up your order.
																				</Alert>
																			)}
																		</>
																	) : (
																		<>
																			{isCancelled ? (
																				<Alert severity="error">This order has been cancelled.</Alert>
																			) : (
																				<Alert severity="warning">
																					Please wait, we're assigning your order to nearby delivery
																					partner.
																				</Alert>
																			)}
																		</>
																	)
																) : null}
															</div>
														</div>
													);
												})}
											</div>
										);
									case 1:
										return (
											<div style={{ margin: "20px" }}>
												<Alert severity="warning">This feature will be enable in Beta phase 2</Alert>
											</div>
										);
									case 2:
										return (
											<div style={{ margin: "20px" }}>
												<Alert severity="warning">This feature will be enable in Beta phase 2</Alert>
											</div>
										);
									case 3:
										return (
											<div style={{ textAlign: 'left', margin: "20px" }}>
												<p>Please write to us at pickndrop.support@gmail.com if you have any queries. <Mail style={{ top: "7px", position: "relative" }} /></p>
                        <p>We will reach out to you shortly and will resolve the issue. </p>
											</div>
										);
									case 4:
										return (
											<div className={classes.about}>
												<p>Living in the city, we never have enough time to do all the things we want to do.</p>
												<p>
													PicknDrop can change the way you move things, how you shop and lets you access your city like
													never before. We’re an app that connects you to the nearest delivery partner who can make
													purchases, pick up items from any store or restaurant in the city and bring them to you.
												</p>
												<p>
													It’s never easy to make purchases or drop off packages when you get busy with work, get stuck in
													traffic, or you might even end up forgetting about it completely.
												</p>
												<p>
													All you need to do is, Tell us where to go, what needs to be done and when. What happens next? Sit
													back, and let us worry about your task-at-hand. You could say that we are always on the move for
													you.
												</p>
											</div>
										);
									default:
										return null;
								}
							}
							return null;
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
