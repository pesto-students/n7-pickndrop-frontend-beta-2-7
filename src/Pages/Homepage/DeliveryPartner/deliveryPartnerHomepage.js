import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useDispatch } from "react-redux";
import { userActions } from "../../../actions";
import { useStyles } from "./style";
import { Link } from "react-router-dom";

function DeliveryPartnerHomepage() {
	const classes = useStyles();
	const [inputs, setInputs] = useState({
		email: "",
		phone: "",
	});
	const [driverOtp, setOTP] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [submitWithDetails, setSubmitWithDetails] = useState(false);
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
			dispatch(userActions.deliveryPartnerLogin(email, phone));
			setSubmitWithDetails(true);
		}
	}

	function handleOTPChange(e) {
		setOTP(e.target.value);
	}

	function handleVerifyOTP(e) {
		e.preventDefault();

		if (driverOtp) {
			dispatch(userActions.driverOtpVerification(driverOtp));
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
					{submitWithDetails ? (
						<form className={classes.root} noValidate autoComplete="off" name="otpform" onSubmit={handleVerifyOTP}>
							<TextField
								className={classes.otpButton}
								error={submitted && !driverOtp ? true : false}
								onChange={handleOTPChange}
								name="phone"
								value={driverOtp}
								id="otp"
								type="number"
								label="OTP"
								variant="outlined"
								helperText={submitted && !driverOtp ? "OTP is required" : ""}
							/>
							<Button type="submit" variant="contained" color="primary" className={classes.button}>
								<Link to="/register" className={classes.link}>
									Verify OTP
								</Link>
							</Button>
						</form>
					) : (
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
								type="number"
								label="Phone"
								helperText={submitted && !phone ? "Phone number is required" : ""}
								id="phone"
								autoComplete="current-phone"
							/>
							<Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
								Send OTP
							</Button>
							<Box mt={5}></Box>
						</form>
					)}
				</div>
			</Grid>
		</Grid>
	);
}

export { DeliveryPartnerHomepage };
