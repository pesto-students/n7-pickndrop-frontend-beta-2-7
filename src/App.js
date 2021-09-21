import { Route } from "react-router-dom";
import "./App.css";
import { UserHomepage } from "./Pages/Homepage/User/userHomepage";
import { DeliveryPartnerHomepage } from "./Pages/Homepage/DeliveryPartner/deliveryPartnerHomepage";
import { Register } from "./Pages/RegisterPage/register";
import { TaskAssigned } from "./Pages/LandingPage/taskAssigned";

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={UserHomepage} />
			<Route path="/deliveryPartnerHomepage" component={DeliveryPartnerHomepage} />
			<Route path="/register" component={Register} />
			<Route path="/taskAssigned" component={TaskAssigned} />
		</div>
	);
}

export default App;
