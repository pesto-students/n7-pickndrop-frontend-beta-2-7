import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { useStyles } from "./bannerStyle";


export default function Banner(props) {
	const classes = useStyles();
	const { post } = props;

	return (
		<Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
			{/* Increase the priority of the hero background image */}
			{<img style={{ display: "none" }} src={post.image} alt={post.imageText} />}
			<div className={classes.overlay} />
			<Grid container>
				<Grid item md={6}>
					<div className={classes.mainFeaturedPostContent}>
						<Typography component="h1" variant="h3" color="inherit" gutterBottom>
							{post.title}
						</Typography>
						<Typography variant="h5" color="inherit" paragraph>
							{post.description}
						</Typography>
						<Link variant="subtitle1" href="#">
							{post.linkText}
						</Link>
					</div>
				</Grid>
			</Grid>
		</Paper>
	);
}

Banner.propTypes = {
	post: PropTypes.object,
};
