import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Fab, Modal } from "@material-ui/core";
import { Login } from "../../Pages/Login/Login";
import { Link } from "react-router-dom";
import { useStyles } from "./headerStyle";
import { useSelector, useDispatch } from "react-redux";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { userConstants } from "../../constants/userConstants";

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
	const dispatch = useDispatch();
	const [open, setOpen] = React.useState(false);

	const [modalStyle] = React.useState(getModalStyle);

	const loggingIn = useSelector((state) => state.userOtpAuthentication.loggedIn);
	const deliveryPartnerLoggedIn = useSelector((state) => state.driverOtpAuthentication.driverLoggedIn);

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
			<Toolbar className={classes.toolbar}>
				<Typography component="h2" variant="h5" color="inherit" align="left" noWrap className={classes.toolbarTitle}>
					<Link style={{ textDecoration: "none" }} to={loggingIn ? "/homepage" : "/"}>
						PickNDrop
					</Link>
				</Typography>
				{!deliveryPartnerLoggedIn && (
					<Button className={classes.button} variant="contained" size="small" color="primary">
						<Link to="/deliveryPartnerHomepage" className={classes.link}>
							For Delivery Partner
						</Link>
					</Button>
				)}
				{loggingIn && (
					<Link style={{ textDecoration: "none" }} to="/profile">
						<Fab color="primary" variant="extended" className={classes.profile}>
							<AccountCircleIcon className={classes.extendedIcon} />
							Profile
						</Fab>
					</Link>
				)}
				{loggingIn || deliveryPartnerLoggedIn ? (
					<>
						<Link style={{ textDecoration: "none" }} to="/">
							<Fab
								onClick={() => {
									dispatch({
										type: userConstants.LOGOUT,
									});
								}}
								color="primary"
								variant="extended"
								className={classes.profile}
							>
								<AccountCircleIcon className={classes.extendedIcon} />
								Logout
							</Fab>
						</Link>
					</>
				) : (
					<Button className={classes.button} variant="contained" size="small" color="primary" onClick={handleOpen}>
						Sign in
					</Button>
				)}
			</Toolbar>
			{!loggingIn && (
				<Modal open={open} onClose={handleClose} aria-labelledby="login-title" aria-describedby="login-description">
					{login}
				</Modal>
			)}
		</React.Fragment>
	);
}
