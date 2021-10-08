import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useStyles } from "./footerStyle";

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{"Copyright © "}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
}

export default function Footer(props) {
	const classes = useStyles();
	const { description } = props;

	return (
		<footer className={classes.footer}>
			<Container maxWidth="lg">
				<Typography variant="h6" align="center" gutterBottom>
					PickNDrop
				</Typography>
				<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
					{description}
				</Typography>
				<Copyright />
			</Container>
		</footer>
	);
}

Footer.propTypes = {
	description: PropTypes.string,
};
