import React,{useState} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Banner from "../components/Banner/Banner";
import Featured from "../components/Featured/Featured";
import { Grid } from "@material-ui/core";
import {Map} from "../../../components/Map/Map"
import {AutoComplete} from "../../../components/Autocomplete/AutoComplete"
import {useSelector} from "react-redux";
import {useStyles} from './userHomePageStyle'
const mainFeaturedPost = {
	title: "Title of a longer featured blog post",
	description: "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
	image: "https://source.unsplash.com/random",
	imgText: "main image description",
	linkText: "Continue reading…",
};

const featured = [
    {
      title: 'Featured post',
      date: 'Nov 12',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
    {
      title: 'Post title',
      date: 'Nov 11',
      description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random',
      imageText: 'Image Text',
    },
  ];

function UserHomepage() {
	const classes = useStyles();
	const [sender,setSender]=useState();
	const [receiver,setReceiver]=useState();
	const loggingIn = useSelector((state) => state.userOtpAuthentication.loggedIn);
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg">
				<Header />
				<main>
					{loggingIn?
					<div className={classes.mapContainer}>
						<Map markers={[sender,receiver].filter(item=>!!item)}/>
						<div className={classes.inputContainer}>
							<AutoComplete inputProps={{
								placeholder:"Sender's Address",
							}} onSelect={data=>setSender(data)}/>
							<AutoComplete inputProps={{
								placeholder:"Receiver's Address"
							}} onSelect={data=>setReceiver(data)}/>
							</div>
						</div>:<><Banner post={mainFeaturedPost} />
					<Grid container spacing={4}>
						{featured.map((post) => (
							<Featured key={post.title} post={post} />
						))}
					</Grid></>}
				</main>
			</Container>
			<Footer description="Something here to give the footer a purpose!" />
		</React.Fragment>
	);
}

export { UserHomepage };
