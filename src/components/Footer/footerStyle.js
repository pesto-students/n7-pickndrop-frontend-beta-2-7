
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	footer: {
		backgroundColor: theme.palette.background.paper,
		// marginTop: theme.spacing(8),
		padding: theme.spacing(6, 0),
	},
}));