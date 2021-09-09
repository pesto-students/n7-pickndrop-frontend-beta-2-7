import { Button, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../actions/userActions";

import { useStyles } from "./loginStyle";

function Login() {
	const classes = useStyles();
	const [inputs, setInputs] = useState({
		email: "",
		phone: "",
	});
	const [otp, setOTP] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [submitWithDetails, setSubmitWithDetails] = useState(false);
	const { email, phone } = inputs;
	const dispatch = useDispatch();

	// reset login status
	useEffect(() => {
		dispatch(userActions.logout());
	}, []);

	function handleChange(e) {
		const { name, value } = e.target;
		setInputs((inputs) => ({ ...inputs, [name]: value }));
	}

	function handleSubmit(e) {
		e.preventDefault();

		setSubmitted(true);
		if (email && phone) {
			// get return url from location state or default to home page
			dispatch(userActions.login(email, phone));
			setSubmitWithDetails(true);
		}
	}

	function handleOTPChange(e) {
		setOTP(e.target.value);
	}

	function handleVerifyOTP(e) {
		e.preventDefault();

		if (otp) {
			dispatch(userActions.otpVerification(otp));
		}
	}

	return submitWithDetails ? (
		<div>
			<form className={classes.root} noValidate autoComplete="off" name="otpform" onSubmit={handleVerifyOTP}>
				<TextField
					error={submitted && !otp ? true : false}
					onChange={handleOTPChange}
					name="phone"
					value={otp}
					id="otp"
					label="OTP"
					variant="outlined"
					helperText={submitted && !otp ? "Phone number is required" : ""}
				/>
				<Button type="submit" variant="contained" color="primary" className={classes.button}>
					Verify OTP
				</Button>
			</form>
		</div>
	) : (
		<div>
			<form className={classes.root} noValidate autoComplete="off" name="loginform" onSubmit={handleSubmit}>
				<TextField
					error={submitted && !email ? true : false}
					onChange={handleChange}
					name="email"
					value={email}
					id="email"
					label="Email"
					variant="outlined"
					helperText={submitted && !email ? "Email is required" : ""}
				/>
				<TextField
					error={submitted && !phone ? true : false}
					onChange={handleChange}
					name="phone"
					value={phone}
					id="phone"
					label="Phone"
					variant="outlined"
					helperText={submitted && !phone ? "Phone number is required" : ""}
				/>
				<Button type="submit" variant="contained" color="primary" className={classes.button}>
					Send OTP
				</Button>
			</form>
		</div>
	);
}

export { Login };
