//import "./PageButton.css";

const ContentPage = (props) => (
       <div>
           <props.Destination ProductList={props.ProductList} onPageChange={props.onPageChange} userToken={props.userToken} userDBID = {props.userDBID} isLoggedIn={props.isLoggedIn} />
       </div>

)

export default ContentPage;