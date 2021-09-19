import { Route, Redirect } from "react-router-dom";
import "./App.css";
import { UserHomepage } from "./Pages/Homepage/User/userHomepage";
import { DeliveryPartnerHomepage } from "./Pages/Homepage/DeliveryPartner/deliveryPartnerHomepage";
import { Register } from "./Pages/RegisterPage/register";
import {Profile} from './Pages/Profile/Profile'
import {useSelector} from 'react-redux';
function App() {
	const userLoggedIn=useSelector(state=>state.userOtpAuthentication.loggedIn);
	const driverLoggedIn=useSelector(state=>state.driverOtpAuthentication.driverLoggedIn)
	const loggedIn=userLoggedIn||driverLoggedIn;
	return (
		<div className="App">
			<Route exact path="/" component={UserHomepage} />
			<Route path="/deliveryPartnerHomepage" component={DeliveryPartnerHomepage} />
			<Route path="/register" component={Register} />
			{
				loggedIn&&<Route path="/profile" component={Profile} />
			}
			<Route path="*" render={()=><Redirect to='/'/>}/>
		</div>
	);
}

export default App;
