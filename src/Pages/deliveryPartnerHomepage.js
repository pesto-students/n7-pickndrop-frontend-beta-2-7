import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { userActions } from "../actions";

const useStyles = makeStyles((theme) => ({
	root: {
		height: "100vh",
	},
	image: {
		backgroundImage: "url(https://source.unsplash.com/random)",
		backgroundRepeat: "no-repeat",
		backgroundColor: theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
		backgroundSize: "cover",
		backgroundPosition: "center",
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function DeliveryPartnerHomepage() {
	const classes = useStyles();
	const [inputs, setInputs] = useState({
		email: "",
		phone: "",
	});
	const [submitted, setSubmitted] = useState(false);
	const { email, phone } = inputs;
	const dispatch = useDispatch();

	function handleChange(e) {
		const { name, value } = e.target;
		setInputs((inputs) => ({ ...inputs, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();

		setSubmitted(true);
		if (email && phone) {
			// get return url from location state or default to home page
			dispatch(userActions.deliveryPartnerLogin(email, phone));
		}
	}

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}></Avatar>
					<Typography component="h1" variant="h5">
						Sign in / Sign up
					</Typography>
					<form className={classes.form} noValidate autoComplete="off" name="form" onSubmit={handleSubmit}>
						<TextField
							error={submitted && !email ? true : false}
							onChange={handleChange}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							helperText={submitted && !email ? "Email is required" : ""}
							autoFocus
						/>
						<TextField
							error={submitted && !phone ? true : false}
							onChange={handleChange}
							variant="outlined"
							margin="normal"
							required
							fullWidth
							name="phone"
							label="Phone"
							type="phone"
							helperText={submitted && !phone ? "Phone number is required" : ""}
							id="phone"
							autoComplete="current-phone"
						/>
						<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
							Send OTP
						</Button>
						<Box mt={5}></Box>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}

export { DeliveryPartnerHomepage };
