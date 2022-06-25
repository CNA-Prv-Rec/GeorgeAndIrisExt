import AppLogo from "../atoms/AppLogo";
import Login from "./Login";
//import Logout from "./Logout";

const AppHeading = (props) => (
    <div className="App-Header">
        <AppLogo />
        
        <Login  onLoginSuccessful={props.onLoginSuccessful} onLoginFailed={props.onLoginFailed} isLoggedIn={props.isLoggedIn}/>
        
        <span className="App-Title">
         {props.Title}
         </span>

    </div>

)

export default AppHeading;