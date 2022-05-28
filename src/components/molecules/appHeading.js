import AppLogo from "../atoms/AppLogo";

const AppHeading = (props) => (
    <div className="App-Header">
        <AppLogo />
        <span className="App-Title">
         {props.Title}
         </span>
    </div>

)

export default AppHeading;