import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Fab, FormControl, MenuItem, Modal, Select } from "@material-ui/core";
import { Login } from "../../Pages/Login/Login";
import { Link } from "react-router-dom";
import { useStyles } from "./headerStyle";
import { useSelector } from "react-redux";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

export default function Header() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const [location, setLocation] = React.useState("");
	const [modalStyle] = React.useState(getModalStyle);

	const loggingIn = useSelector((state) => state.userOtpAuthentication.loggedIn);
	const deliveryPartnerLoggedIn = useSelector((state) => state.driverOtpAuthentication.driverLoggedIn);

	const handleChange = (event) => {
		setLocation(event.target.value);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const login = (
		<div style={modalStyle} className={classes.paper}>
			<h2 className={classes.heading} id="login-title">
				Login / Sign up
			</h2>
			<p className={classes.subHeading} id="login-description">
				Get started with PickNDrop
			</p>
			<Login />
		</div>
	);

	return (
		<React.Fragment>
			{console.log(loggingIn + "driver" + deliveryPartnerLoggedIn)}
			<Toolbar className={classes.toolbar}>
				<Typography component="h2" variant="h5" color="inherit" align="left" noWrap className={classes.toolbarTitle}>
					PickNDrop
				</Typography>
				{!deliveryPartnerLoggedIn && (
					<FormControl className={classes.formControl}>
						<Select
							value={location}
							onChange={handleChange}
							displayEmpty
							className={classes.selectEmpty}
							inputProps={{ "aria-label": "Without label" }}
						>
							<MenuItem value="">
								<em>Location</em>
							</MenuItem>
							<MenuItem value={10}>Bangalore</MenuItem>
							<MenuItem value={20}>Pune</MenuItem>
							<MenuItem value={30}>New Delhi</MenuItem>
						</Select>
					</FormControl>
				)}
				{!deliveryPartnerLoggedIn && (
					<Button className={classes.button} variant="contained" size="small" color="primary">
						<Link to="/deliveryPartnerHomepage" className={classes.link}>
							For Delivery Partner
						</Link>
					</Button>
				)}
				{loggingIn || deliveryPartnerLoggedIn ? (
					<Fab color="primary" variant="extended" className={classes.profile}>
						<AccountCircleIcon className={classes.extendedIcon} />
						Profile
					</Fab>
				) : (
					<Button className={classes.button} variant="contained" size="small" color="primary" onClick={handleOpen}>
						Sign in
					</Button>
				)}
			</Toolbar>
			{!loggingIn && <Modal open={open} onClose={handleClose} aria-labelledby="login-title" aria-describedby="login-description">
				{login}
			</Modal>}
		</React.Fragment>
	);
}

