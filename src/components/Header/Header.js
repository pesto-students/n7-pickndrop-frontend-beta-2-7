import React from "react";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FormControl, MenuItem, Modal, Select } from "@material-ui/core";
import { Login } from "../../Pages/Login/Login";
import { Link } from "react-router-dom";
import { useStyles } from "./headerStyle";


function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

export default function Header(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const [location, setLocation] = React.useState("");
	const [modalStyle] = React.useState(getModalStyle);
	const { title } = props;

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
			<Toolbar className={classes.toolbar}>
				<Typography component="h2" variant="h5" color="inherit" align="left" noWrap className={classes.toolbarTitle}>
					{title}
				</Typography>
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
				<Button className={classes.button} variant="contained" size="small" color="primary">
					<Link to="/deliveryPartnerHomepage" className={classes.link}>
						For Delivery Partner
					</Link>
				</Button>
				<Button className={classes.button} variant="outlined" size="small" onClick={handleOpen}>
					Sign in
				</Button>
			</Toolbar>
			<Modal open={open} onClose={handleClose} aria-labelledby="login-title" aria-describedby="login-description">
				{login}
			</Modal>
		</React.Fragment>
	);
}

Header.propTypes = {
	title: PropTypes.string,
};
