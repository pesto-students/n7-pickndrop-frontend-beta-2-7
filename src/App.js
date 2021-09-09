import { Route } from "react-router-dom";
import "./App.css";
import { UserHomepage } from "./Pages/Homepage/User/userHomepage";
import { DeliveryPartnerHomepage } from "./Pages/Homepage/DeliveryPartner/deliveryPartnerHomepage";

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={UserHomepage} />
			<Route path="/deliveryPartnerHomepage" component={DeliveryPartnerHomepage} />
		</div>
	);
}

export default App;
