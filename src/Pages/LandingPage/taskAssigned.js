import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Box } from "@material-ui/core";
import { useStyles } from "./taskStyle.js";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";

function TaskAssigned() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<Header />
				<Container maxWidth="lg">
					<h2 style={{ textAlign: "left" }}>Hello Driver!</h2>
					<h3 style={{ textAlign: "left" }}>2 task assigned</h3>
					<Box sx={{ bgcolor: "#eee", height: "auto", marginBottom: "40px", padding: "10px" }}>
						<div className={classes.box}>
							<div>
								<span className={classes.orderDetails}>Order Details</span>
							</div>
							<span className={classes.date}>25-Oct-2021</span>
							<div className={classes.address}>
								<div className={classes.sender}>
									<ArrowUpwardIcon />
									<div className={classes.senderName}>
										<span>Akash</span>
									</div>
									<div className={classes.senderAddress}>
										<span>505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067</span>
									</div>
								</div>
								<div className={classes.senderRecieverContact}>
									<PermIdentityOutlinedIcon fontSize="small" />
									<div className={classes.contact}>
										<span>Akash:  </span>
										<span>+91-9035819242</span>
									</div>
								</div>
								<div className={classes.receiver}>
									<ArrowDownwardIcon />
									<div className={classes.receiverName}>
										<span>Piyush</span>
									</div>
									<div className={classes.receiverAddress}>
										<span>505, Mahaveer Konark Apartment, JP Nagar 5th Phase, Bengaluru - 560067</span>
									</div>
								</div>

								<div className={classes.senderRecieverContact}>
									<PermIdentityOutlinedIcon fontSize="small" />
									<div className={classes.contact}>
										<span>Akash:  </span>
										<span>+91-9035819242</span>
									</div>
								</div>
							</div>
						</div>
					</Box>
					<Box sx={{ bgcolor: "#eee", height: "auto", marginBottom: "40px" }}></Box>
				</Container>
			</Container>
			<Footer description="Something here to give the footer a purpose!" />
		</React.Fragment>
	);
}

export { TaskAssigned };
