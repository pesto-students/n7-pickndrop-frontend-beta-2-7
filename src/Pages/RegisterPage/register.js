import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionActions from "@material-ui/core/AccordionActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { useStyles } from "./registerStyle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { TextField } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { userActions } from "../../actions";

function Register() {
	const classes = useStyles();

	const [submitted, setSubmitted] = useState(false);
	const [inputs, setInputs] = useState({
		firstName: "",
		lastName: "",
		fatherName: "",
		city: "",
		completeAddress: "",
		language: "",
		date: "",
		emergencyContact: "",
		workExperience: "",
		vehicleDetails: "",
		panCard: "",
		aadharCard: "",
		drivingLicense: "",
	});

	const {
		firstName,
		lastName,
		fatherName,
		city,
		completeAddress,
		language,
		date,
		emergencyContact,
		workExperience,
		vehicleDetails,
		panCard,
		aadharCard,
		drivingLicense,
	} = inputs;
	function handleChange(e) {
		const { name, value } = e.target;
		setInputs((inputs) => ({ ...inputs, [name]: value }));
	}

	const dispatch = useDispatch();

	function handleSubmit(e) {
		e.preventDefault();

		setSubmitted(true);
		dispatch(
			userActions.register(
				firstName,
				lastName,
				fatherName,
				city,
				completeAddress,
				language,
				date,
				emergencyContact,
				workExperience,
				vehicleDetails,
				panCard,
				aadharCard,
				drivingLicense
			)
		);
	}

	return (
		<div>
			<Header />
			<h2>Become a delivery Partner by simple registration</h2>
			<form noValidate autoComplete="off" name="registerForm" onSubmit={handleSubmit}>
				<Accordion defaultExpanded>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content" id="panel1c-header">
						<div className={classes.column}>
							<Typography className={classes.heading}>Personal Info</Typography>
						</div>
					</AccordionSummary>
					<AccordionDetails className={classes.details}>
						<TextField
							error={submitted && !firstName ? true : false}
							onChange={handleChange}
							name="name"
							value={firstName}
							id="firstName"
							label="First Name"
							variant="outlined"
							helperText={submitted && !firstName ? "First Name is required" : ""}
						/>
						<TextField
							error={submitted && !lastName ? true : false}
							onChange={handleChange}
							name="name"
							value={lastName}
							id="lastName"
							label="Last Name"
							variant="outlined"
							helperText={submitted && !lastName ? "Last Name is required" : ""}
						/>
						<TextField
							error={submitted && !fatherName ? true : false}
							onChange={handleChange}
							name="name"
							value={fatherName}
							id="fatherName"
							label="Father's Name"
							variant="outlined"
							helperText={submitted && !fatherName ? "Father's Name is required" : ""}
						/>
						<TextField
							error={submitted && !city ? true : false}
							onChange={handleChange}
							name="city"
							value={city}
							id="city"
							label="City"
							variant="outlined"
							helperText={submitted && !city ? "City is required" : ""}
						/>
						<TextField
							error={submitted && !completeAddress ? true : false}
							onChange={handleChange}
							name="completeAddress"
							value={completeAddress}
							id="completeAddress"
							label="Complete Address"
							variant="outlined"
							helperText={submitted && !completeAddress ? "Address is required" : ""}
						/>
						<TextField
							error={submitted && !language ? true : false}
							onChange={handleChange}
							name="language"
							value={language}
							id="language"
							label="Languages you know"
							variant="outlined"
							helperText={submitted && !language ? "Language is required" : ""}
						/>
					</AccordionDetails>
					<Divider />
					<AccordionActions className={classes.action}>
						<Button size="small">Cancel</Button>
						<Button size="small" color="primary">
							Save
						</Button>
					</AccordionActions>
				</Accordion>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content" id="panel1c-header">
						<div className={classes.column}>
							<Typography className={classes.heading}>Date of Birth </Typography>
						</div>
					</AccordionSummary>
					<AccordionDetails className={classes.details}>
						<TextField
							error={submitted && !date ? true : false}
							onChange={handleChange}
							name="date"
							value={date}
							id="date"
							label="Date of Birth"
							type="date"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							helperText={submitted && !date ? "Date of Birth is required" : ""}
						/>
					</AccordionDetails>
					<Divider />
					<AccordionActions className={classes.action}>
						<Button size="small">Cancel</Button>
						<Button size="small" color="primary">
							Save
						</Button>
					</AccordionActions>
				</Accordion>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content" id="panel1c-header">
						<div className={classes.column}>
							<Typography className={classes.heading}>Upload Image </Typography>
						</div>
					</AccordionSummary>
					<AccordionDetails className={classes.details}>
						<input accept="image/*" className={classes.input} id="contained-button-file" multiple type="file" />
						<label className={classes.photoLabel} htmlFor="contained-button-file">
							<Button variant="contained" color="primary" component="span">
								<PhotoCamera className={classes.photo} />
								Upload Image
							</Button>
						</label>
					</AccordionDetails>
					<Divider />
					<AccordionActions className={classes.action}>
						<Button size="small">Cancel</Button>
						<Button size="small" color="primary">
							Save
						</Button>
					</AccordionActions>
				</Accordion>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content" id="panel1c-header">
						<div className={classes.column}>
							<Typography className={classes.heading}>Emergency contact</Typography>
						</div>
					</AccordionSummary>
					<AccordionDetails className={classes.details}>
						<TextField
							error={submitted && !emergencyContact ? true : false}
							onChange={handleChange}
							name="emergencyContact"
							value={emergencyContact}
							id="emergencyContact"
							label="Emegency Contact"
							variant="outlined"
							helperText={submitted && !emergencyContact ? "Emergency Conatact is required" : ""}
						/>
					</AccordionDetails>
					<Divider />
					<AccordionActions className={classes.action}>
						<Button size="small">Cancel</Button>
						<Button size="small" color="primary">
							Save
						</Button>
					</AccordionActions>
				</Accordion>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content" id="panel1c-header">
						<div className={classes.column}>
							<Typography className={classes.heading}>Work Preferences</Typography>
						</div>
					</AccordionSummary>
					<AccordionDetails className={classes.details}>
						<TextField
							error={submitted && !workExperience ? true : false}
							onChange={handleChange}
							name="workExperience"
							type="number"
							value={workExperience}
							id="workExperience"
							label="Previous work experience in years"
							variant="outlined"
							helperText={submitted && !workExperience ? "Work Experience is required" : ""}
						/>
					</AccordionDetails>
					<Divider />
					<AccordionActions className={classes.action}>
						<Button size="small">Cancel</Button>
						<Button size="small" color="primary">
							Save
						</Button>
					</AccordionActions>
				</Accordion>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content" id="panel1c-header">
						<div className={classes.column}>
							<Typography className={classes.heading}>Vehicle details</Typography>
						</div>
					</AccordionSummary>
					<AccordionDetails className={classes.details}>
						<TextField
							error={submitted && !vehicleDetails ? true : false}
							onChange={handleChange}
							name="vehicleDetails"
							type="text"
							value={vehicleDetails}
							id="vehicleDetails"
							label="Provide your vehicle number"
							variant="outlined"
							helperText={submitted && !vehicleDetails ? "Vehicle Details is required" : ""}
						/>
					</AccordionDetails>
					<Divider />
					<AccordionActions className={classes.action}>
						<Button size="small">Cancel</Button>
						<Button size="small" color="primary">
							Save
						</Button>
					</AccordionActions>
				</Accordion>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1c-content" id="panel1c-header">
						<div className={classes.column}>
							<Typography className={classes.heading}>Personal Document</Typography>
						</div>
					</AccordionSummary>
					<AccordionDetails className={classes.details}>
						<TextField
							error={submitted && !panCard ? true : false}
							onChange={handleChange}
							name="panCard"
							type="text"
							value={panCard}
							id="panCard"
							label="Pan Card"
							variant="outlined"
							helperText={submitted && !panCard ? "Pan Card is required" : ""}
						/>
						<TextField
							error={submitted && !aadharCard ? true : false}
							onChange={handleChange}
							name="aadharCard"
							type="number"
							value={aadharCard}
							id="aadharCard"
							label="Aadhar Card"
							variant="outlined"
							helperText={submitted && !aadharCard ? "Aadhar Card detail is required" : ""}
						/>
						<TextField
							error={submitted && !drivingLicense ? true : false}
							onChange={handleChange}
							name="drivingLicense"
							type="text"
							value={drivingLicense}
							id="drivingLicense"
							label="Driving License"
							variant="outlined"
							helperText={submitted && !drivingLicense ? "Driving License number is required" : ""}
						/>
					</AccordionDetails>
					<Divider />
					<AccordionActions className={classes.action}>
						<Button size="small">Cancel</Button>
						<Button size="small" color="primary">
							Save
						</Button>
					</AccordionActions>
				</Accordion>
				<div className={classes.submit}>
					<Button variant="contained" color="secondary" className={classes.button}>
						Cancel
					</Button>
					<Button type="submit" variant="contained" color="primary" className={classes.button}>
						Submit
					</Button>
				</div>
			</form>
			<Footer />
		</div>
	);
}

export { Register };