import "./PageButton.css";

const PageButton = props => (
       <input type="button" className="pageButton {props.className}" value={props.Title} onClick={props.onclick}/>

)

export default PageButton;