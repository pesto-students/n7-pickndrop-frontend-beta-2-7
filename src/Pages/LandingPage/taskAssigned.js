import React, { useEffect, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Box, Grid } from "@material-ui/core";
import { useStyles } from "./taskStyle.js";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import { Button, Stack } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

const data = [
	{
		user: "Akash",
		data: "25-OCT-2021",
		sendersName: "Akash",
		sendersAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		sendersContact: 919035819242,
		sendersContactName: "Akash",
		receiversName: "Piyush",
		receiversAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		receiversContact: 919035819242,
		receiversContactName: "Piyush",
		amountStatus: "Paid",
		amountPaid: 35,
	},
	{
		user: "Akash",
		data: "25-OCT-2021",
		sendersName: "Akash",
		sendersAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		sendersContact: 919035819242,
		sendersContactName: "Akash",
		receiversName: "Piyush",
		receiversAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		receiversContact: 919035819242,
		receiversContactName: "Piyush",
		amountStatus: "Paid",
		amountPaid: 35,
	},
	{
		user: "Akash",
		data: "25-OCT-2021",
		sendersName: "Akash",
		sendersAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		sendersContact: 919035819242,
		sendersContactName: "Akash",
		receiversName: "Piyush",
		receiversAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		receiversContact: 919035819242,
		receiversContactName: "Piyush",
		amountStatus: "Paid",
		amountPaid: 35,
	},
	{
		user: "Akash",
		data: "25-OCT-2021",
		sendersName: "Akash",
		sendersAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		sendersContact: 919035819242,
		sendersContactName: "Akash",
		receiversName: "Piyush",
		receiversAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		receiversContact: 919035819242,
		receiversContactName: "Piyush",
		amountStatus: "Paid",
		amountPaid: 35,
	},
	{
		user: "Akash",
		data: "25-OCT-2021",
		sendersName: "Akash",
		sendersAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		sendersContact: 919035819242,
		sendersContactName: "Akash",
		receiversName: "Piyush",
		receiversAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		receiversContact: 919035819242,
		receiversContactName: "Piyush",
		amountStatus: "Paid",
		amountPaid: 35,
	},
	{
		user: "Akash",
		data: "25-OCT-2021",
		sendersName: "Akash",
		sendersAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		sendersContact: 919035819242,
		sendersContactName: "Akash",
		receiversName: "Piyush",
		receiversAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		receiversContact: 919035819242,
		receiversContactName: "Piyush",
		amountStatus: "Paid",
		amountPaid: 35,
	},
	{
		user: "Akash",
		data: "25-OCT-2021",
		sendersName: "Akash",
		sendersAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		sendersContact: 919035819242,
		sendersContactName: "Akash",
		receiversName: "Piyush",
		receiversAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		receiversContact: 919035819242,
		receiversContactName: "Piyush",
		amountStatus: "Paid",
		amountPaid: 35,
	},
	{
		user: "Akash",
		data: "25-OCT-2021",
		sendersName: "Akash",
		sendersAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		sendersContact: 919035819242,
		sendersContactName: "Akash",
		receiversName: "Piyush",
		receiversAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		receiversContact: 919035819242,
		receiversContactName: "Piyush",
		amountStatus: "Paid",
		amountPaid: 35,
	},
	{
		user: "Akash",
		data: "25-OCT-2021",
		sendersName: "Akash",
		sendersAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		sendersContact: 919035819242,
		sendersContactName: "Akash",
		receiversName: "Piyush",
		receiversAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		receiversContact: 919035819242,
		receiversContactName: "Piyush",
		amountStatus: "Paid",
		amountPaid: 35,
	},
	{
		user: "Akash",
		data: "25-OCT-2021",
		sendersName: "Akash",
		sendersAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		sendersContact: 919035819242,
		sendersContactName: "Akash",
		receiversName: "Piyush",
		receiversAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		receiversContact: 919035819242,
		receiversContactName: "Piyush",
		amountStatus: "Paid",
		amountPaid: 35,
	},
	{
		user: "Akash",
		data: "25-OCT-2021",
		sendersName: "Akash",
		sendersAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		sendersContact: 919035819242,
		sendersContactName: "Akash",
		receiversName: "Piyush",
		receiversAddress: "505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067",
		receiversContact: 919035819242,
		receiversContactName: "Piyush",
		amountStatus: "Paid",
		amountPaid: 35,
	},
];

function TaskAssigned() {
	const [items, setItems] = useState([]);
	const [hasMore, setHasMore] = useState(true);

	const fetchOrderList = () => {
		setItems([...data]);
	};

	useEffect(() => {
		fetchOrderList();
	});

	const classes = useStyles();
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
						{items.map((order) => {
							return (
								<Box sx={{ bgcolor: "#eee", height: "auto", marginBottom: "40px", padding: "20px" }}>
									<Grid container spacing={2}>
										<Grid item xs={12} md={9}>
											<div className={classes.box}>
												<div>
													<span className={classes.orderDetails}>Order Details</span>
												</div>
												<span className={classes.date}>{order.date}</span>
												<div className={classes.address}>
													<div className={classes.sender}>
														<ArrowUpwardIcon />
														<div className={classes.senderName}>
															<span>{order.sendersName}</span>
														</div>
														<div className={classes.senderAddress}>
															<span>{order.sendersAddress}</span>
														</div>
													</div>
													<div className={classes.senderRecieverContact}>
														<PermIdentityOutlinedIcon fontSize="small" />
														<div className={classes.contact}>
															<span>{order.sendersContactName}: </span>
															<span>{order.sendersContact}</span>
														</div>
													</div>
													<div className={classes.receiver}>
														<ArrowDownwardIcon />
														<div className={classes.receiverName}>
															<span>{order.receiversName}</span>
														</div>
														<div className={classes.receiverAddress}>
															<span>{order.receiversAddress}</span>
														</div>
													</div>
													<div className={classes.senderRecieverContact}>
														<PermIdentityOutlinedIcon fontSize="small" />
														<div className={classes.contact}>
															<span>{order.receiversContactName}: </span>
															<span>{order.receiversContact}</span>
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
														{order.amountStatus}
														<span style={{ position: "relative", top: "5px", left: "3px" }}>
															<CheckCircleOutlineIcon fontSize="small" />
														</span>
													</p>
												</Grid>
												<Grid item xs={3}>
													<p className={classes.rate}>{order.amountPaid}</p>
												</Grid>
											</Grid>
										</Grid>
										<Grid item xs={12}>
											<Stack direction="row" spacing={2}>
												<Button variant="contained" color="success">
													Accept
												</Button>
												<Button variant="outlined" color="error">
													Decline
												</Button>
											</Stack>
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
