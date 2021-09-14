
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    mapContainer:{
        flexWrap:'wrap',
						display:'flex',
						flexDirection:'row',
						justifyContent:'space-between',
						width:"100%",
						height:"100%",
						position:'relative'
    },
    inputContainer:{
        display:'flex',
							width:'100%',
							flexDirection:'row',
							justifyContent:'space-between',
							position:'absolute',
							top:5,
							padding:5
    }
}));