import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	box: {
		textAlign: "left",
	},
	orderDetails: {
		fontSize: "14px",
		fontWeight: "600",
	},
	invoice: {
		fontSize: "14px",
		fontWeight: "600",
		textAlign: "left",
		padding: "0 0 10px 0",
        marginBottom: '15px',
		borderBottom: "1px solid #c2cbd4",
	},
    paid: {
        textAlign: 'left',
        margin: '0',
        fontSize: '12px',
    },
    rate: {
        textAlign: 'right',
        margin: '0',
        fontSize: '12px',
    },
	date: {
		fontSize: "12px",
		color: "#47525d",
		padding: "0 2px",
	},
	address: {
		padding: "10px 0",
	},
	sender: {
		display: "flex",
	},
	receiver: {
		display: "flex",
	},
	senderName: {
		fontSize: "13px",
		fontWeight: "600",
		marginLeft: "10px",
	},
	senderAddress: {
		fontSize: "11px",
		padding: "2px",
		marginLeft: "10px",
	},
	receiverName: {
		fontSize: "13px",
		fontWeight: "600",
		marginLeft: "10px",
	},
	receiverAddress: {
		fontSize: "11px",
		padding: "2px",
		marginLeft: "10px",
	},
	senderRecieverContact: {
		fontSize: "11px",
		marginLeft: "30px",
		display: "flex",
		marginBottom: "20px",
	},
	contact: {
		padding: "5px",
	},
}));
