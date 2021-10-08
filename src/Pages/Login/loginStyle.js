import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: '8px 0',
			width: "43ch",
		},
	},
}));