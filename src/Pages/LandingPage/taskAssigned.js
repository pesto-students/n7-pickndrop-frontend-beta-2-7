import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Box, Grid } from "@material-ui/core";
import { useStyles } from "./taskStyle.js";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import { Alert, Button, Stack } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import { getTasks } from "../../services/taskService";
import { CheckCircleOutlined } from "@material-ui/icons";
import { Map } from "../../components/Map/Map";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import CircleTwoToneIcon from "@mui/icons-material/CircleTwoTone";
import MoreVertTwoToneIcon from "@mui/icons-material/MoreVertTwoTone";
import { useDispatch } from "react-redux";
import { userActions } from "../../actions/userActions";
import SendIcon from "@mui/icons-material/Send";

function TaskAssigned() {
	const [items, setItems] = useState([]);
	const [hasMore, setHasMore] = useState(true);
	const dispatch = useDispatch();

	const handleOrderAcceptance = (orderID) => {
		if (orderID) {
			dispatch(userActions.acceptOrder(orderID));
			setTimeout(fetchOrderList, 500);
		}
	};

	const handleOrderPickedUp = (orderID) => {
		if (orderID) {
			dispatch(userActions.pickedUpOrder(orderID));
			setTimeout(fetchOrderList, 500);
		}
	};

	const handleOrderCancellation = (orderID) => {
		if (orderID) {
			dispatch(userActions.cancelOrder(orderID));
			setTimeout(fetchOrderList, 500);
		}
	};

	const handleOrderDelivered = (orderID) => {
		if (orderID) {
			dispatch(userActions.deliveredOrder(orderID));
			setTimeout(fetchOrderList, 500);
		}
	};

	const fetchOrderList = async () => {
		try {
			const { data } = await getTasks();
			setItems(data);
			setHasMore(false);
		} catch (e) {
			console.log(e);
		}
	};

	const classes = useStyles();

	useEffect(() => {
		fetchOrderList();
	}, []);

	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<Header />
				<Container maxWidth="lg">
					<h2 style={{ textAlign: "left" }}>Hello Driver!</h2>
					<h3 style={{ textAlign: "left" }}>{items.length} task assigned</h3>
					<InfiniteScroll
						dataLength={items.length}
						next={fetchOrderList}
						hasMore={hasMore}
						loader={<p>Load more...</p>}
						endMessage={
							<p style={{ textAlign: "center" }}>
								<b>Yay! You have seen it all</b>
							</p>
						}
					>
						{items.map((order, index) => {
							const { sender, receiver, description, title, price, orderId, isActive, isPickedUp, isCancelled, isDelieverd } = order;
							const {
								address: senderPlace,
								phoneNo: senderContact,
								name: senderName,
								latitude: senderLat,
								longitude: senderLng,
							} = sender;
							const {
								address: receiverPlace,
								phoneNo: receiverContact,
								name: receiverName,
								latitude: receiverLat,
								longitude: receiverLng,
							} = receiver;
							const getZoom = () => {
								if (senderLat && senderLng && receiverLat && receiverLng) {
									const latDistance = Math.floor(senderLat - receiverLat);
									const lngDistance = Math.floor(senderLng - receiverLng);
									const distance = Math.sqrt(latDistance * latDistance + lngDistance * lngDistance);
									return Math.floor(distance * 7.5);
								}
								return 8;
							};
							return (
								<Box key={index} sx={{ bgcolor: "#eee", height: "auto", marginBottom: "40px", padding: "20px" }}>
									<Grid container spacing={2}>
										<Grid item xs={12} md={9}>
											<div style={{ height: "300px" }}>
												<Map
													markers={[
														{ lat: senderLat, lng: senderLng, address: senderPlace },
														{ lat: receiverLat, lng: receiverLng, address: receiverPlace },
													].filter((item) => !!item)}
													zoom={getZoom()}
												/>
											</div>
										</Grid>
										<Grid item xs={12} md={3}>
											<div className={classes.invoice}>
												<span>Task Status</span>
											</div>
											{isCancelled ? (
												<>
													<Alert severity="error">Cancelled</Alert>
												</>
											) : (
												<>
													<div className={classes.taskStatus}>
														<span className={classes.taskIcon}>
															<CheckCircleTwoToneIcon fontSize="small" />
														</span>
														<span> Task received</span>
													</div>
													<div className={classes.dot}>
														<MoreVertTwoToneIcon />
													</div>
													<div className={classes.taskStatus}>
														<span className={classes.taskIcon}>
															{isActive ? (
																<CheckCircleTwoToneIcon fontSize="small" />
															) : (
																<CircleTwoToneIcon fontSize="small" />
															)}
														</span>
														<span> Order Accepted</span>
													</div>
													<div className={classes.dot}>
														<MoreVertTwoToneIcon />
													</div>
													<div className={classes.taskStatus}>
														<span className={classes.taskIcon}>
															{isPickedUp ? (
																<CheckCircleTwoToneIcon fontSize="small" />
															) : (
																<CircleTwoToneIcon fontSize="small" />
															)}
														</span>
														<span> Order Picked up</span>
													</div>
													<div className={classes.dot}>
														<MoreVertTwoToneIcon />
													</div>
													<div className={classes.taskStatus}>
														<span className={classes.taskIcon}>
															{isDelieverd ? (
																<CheckCircleTwoToneIcon fontSize="small" />
															) : (
																<CircleTwoToneIcon fontSize="small" />
															)}
														</span>
														<span> Order Delivered</span>
													</div>
												</>
											)}
										</Grid>
										<Grid item xs={12} md={9}>
											<div className={classes.box}>
												<div style={{ paddingTop: "5px" }}>
													<span className={classes.orderDetails}>Order Details</span>
												</div>
												<span className={classes.date}>
													{title} - {description}
												</span>
												<div className={classes.address}>
													<div className={classes.sender}>
														<ArrowUpwardIcon />
														<div className={classes.senderName}>
															<span>{senderName}</span>
														</div>
														<div className={classes.senderAddress}>
															<span>{senderPlace}</span>
														</div>
													</div>
													<div className={classes.senderRecieverContact}>
														<LocalPhoneIcon fontSize="small" />
														<div className={classes.contact}>
															<span>{senderContact}</span>
														</div>
													</div>
													<div className={classes.receiver}>
														<ArrowDownwardIcon />
														<div className={classes.receiverName}>
															<span>{receiverName}</span>
														</div>
														<div className={classes.receiverAddress}>
															<span>{receiverPlace}</span>
														</div>
													</div>
													<div className={classes.senderRecieverContact}>
														<LocalPhoneIcon fontSize="small" />
														<div className={classes.contact}>
															<span>{receiverContact}</span>
														</div>
													</div>
												</div>
											</div>
										</Grid>
										<Grid item xs={12} md={3}>
											<div className={classes.invoice}>
												<span>Invoice</span>
											</div>
											<Grid container spacing={2}>
												<Grid item xs={9}>
													<p className={classes.paid}>Partner delivery fee</p>
													<p className={classes.paid}>
														Paid {""}
														<span style={{ position: "relative", top: "5px", left: "3px" }}>
															<CheckCircleOutlined fontSize="small" />
														</span>
													</p>
												</Grid>
												<Grid item xs={3}>
													<p className={classes.rate}>{price}</p>
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12}>
											{isActive ? (
												<div style={{ textAlign: "left" }}>
													{isPickedUp ? (
														<>
															{isDelieverd ? (
																<>
																	<Alert severity="success">
																		Congrats! You've delivered the order and completed your task.
																	</Alert>
																</>
															) : (
																<>
																	<div>
																		<Alert severity="info">
																			Please go ahead and click below once you deliver the order.
																		</Alert>
																	</div>
																	<div style={{ marginTop: "20px" }}>
																		<Button
																			onClick={() => handleOrderDelivered(orderId)}
																			variant="contained"
																			color="success"
																		>
																			Order Delivered
																		</Button>
																	</div>
																</>
															)}
														</>
													) : (
														<>
															<div>
																<Alert severity="info">
																	Please go ahead and click below once you pick up the order.
																</Alert>
															</div>
															<div style={{ marginTop: "20px" }}>
																<Button
																	onClick={() => handleOrderPickedUp(orderId)}
																	variant="contained"
																	endIcon={<SendIcon />}
																>
																	Order Picked up
																</Button>
															</div>
														</>
													)}
												</div>
											) : (
												<>
													{isCancelled ? (
														<div>
															<Alert severity="error">This order has been cancelled</Alert>
														</div>
													) : (
														<Stack direction="row" spacing={2}>
															<Button
																onClick={() => handleOrderAcceptance(orderId)}
																variant="contained"
																color="success"
															>
																Accept
															</Button>
															<Button
																onClick={() => handleOrderCancellation(orderId)}
																variant="contained"
																color="error"
															>
																Decline
															</Button>
														</Stack>
													)}
												</>
											)}
										</Grid>
									</Grid>
								</Box>
							);
						})}
					</InfiniteScroll>
				</Container>
			</Container>
			<Footer description="Something here to give the footer a purpose!" />
		</React.Fragment>
	);
}

export { TaskAssigned };
