import { Route, Redirect } from "react-router-dom";
import "./App.css";
import { UserHomepage } from "./Pages/Homepage/User/userHomepage";
import { DeliveryPartnerHomepage } from "./Pages/Homepage/DeliveryPartner/deliveryPartnerHomepage";
import { Register } from "./Pages/RegisterPage/register";
import { TaskAssigned } from "./Pages/LandingPage/taskAssigned";

import { Profile } from "./Pages/Profile/Profile";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";

const publicKey =
  "pk_test_51JddslSAjlEV7TUa9n6qlp5fNdcHx3Lj8MS7sSM7bLIkTlkZYXzgmu0zhXZ93OJ6GIt0skAkxfgFbUMIcJnVJqW100TQ7L9y5f";
function App() {
  const userLoggedIn = useSelector(
    (state) => state.userOtpAuthentication.loggedIn
  );
  const driverLoggedIn = useSelector(
    (state) => state.driverOtpAuthentication.driverLoggedIn
  );
  const loggedIn = userLoggedIn || driverLoggedIn;
  return (
    <Elements
      stripe={loadStripe(publicKey)}
      options={{
        fonts: [
          {
            cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
          },
        ],
      }}
    >
      <div className="App">
        <Route exact path="/" component={UserHomepage} />
        <Route
          path="/deliveryPartnerHomepage"
          component={DeliveryPartnerHomepage}
        />
        <Route path="/register" component={Register} />
        <Route path="/taskAssigned" component={TaskAssigned} />
        {loggedIn && <Route path="/profile" component={Profile} />}
        {/* <Route path="*" render={() => <Redirect to="/" />} /> */}
      </div>
    </Elements>
  );
}

export default App;
