
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
		"& > *": {
			width: "43ch",
		},
	},
    button: {
        margin: '20px 0',
    },
    otpButton: {
        marginTop: '20px',
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
    },
	image: {
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
		width: "100%",
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));