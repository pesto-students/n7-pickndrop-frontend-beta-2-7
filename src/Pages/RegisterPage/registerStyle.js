import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	details: {
		"& > *": {
			margin: "8px 0",
			width: "43ch",
		},
		display: "grid",
	},
	submit: {
		padding: "20px 50px",
		textAlign: "right",
		borderBottom: "1px solid #bbacac",
	},
	button: {
		marginLeft: "20px",
		width: "200px",
		backgroundColor: "#d65a50",
	},
	root: {
		width: "100%",
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		textAlign: "start",
		background: "#291817",
		padding: "10px",
		color: "#fff",
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
	icon: {
		verticalAlign: "bottom",
		height: 20,
		width: 20,
	},
	column: {
		flexBasis: "100%",
	},
  action: {
    padding: '8px 40px',
  },
  input: {
    display: 'none',
  },
  photoLabel: {
    textAlign: 'left',
  },
  photo: {
    marginRight: '10px'
  },
	helper: {
		borderLeft: `2px solid ${theme.palette.divider}`,
		padding: theme.spacing(1, 2),
	},
	link: {
		color: theme.palette.primary.main,
		textDecoration: "none",
		"&:hover": {
			textDecoration: "underline",
		},
	},
}));
