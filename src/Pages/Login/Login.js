import { Button, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
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
	const error = useSelector(state => state.userOtpAuthentication.error);
	const dispatch = useDispatch();
	const history = useHistory();

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
			dispatch(userActions.login(email, phone));
			setSubmitWithDetails(true);
		}
	}

	function handleOTPChange(e) {
		setOTP(e.target.value);
	}

	function handleVerifyOTP(e) {
		e.preventDefault();

		if (otp && email && phone) {
			dispatch(userActions.userOtpVerification(otp, email, phone));
			history.push('/')
		}
	}

	return submitWithDetails ? (
		<div>
			<form className={classes.root} noValidate autoComplete="off" name="otpform" onSubmit={handleVerifyOTP}>
				<TextField
					error={error ? true : false}
					onChange={handleOTPChange}
					name="phone"
					value={otp}
					type="number"
					id="otp"
					label="OTP"
					variant="outlined"
					helperText={error ? "Authentication failed with wrong OTP" : ""}
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
					type="email"
					id="email"
					label="Email"
					variant="outlined"
					helperText={submitted && !email ? "Email is required" : ""}
				/>
				<TextField
					error={submitted && !phone ? true : false}
					onChange={handleChange}
					name="phone"
					type="number"
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
