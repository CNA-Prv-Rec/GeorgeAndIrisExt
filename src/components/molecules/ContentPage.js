//import "./PageButton.css";

const ContentPage = (props) => (
       <div>
           <props.Destination ProductList={props.ProductList} onPageChange={props.onPageChange} userToken={props.userToken} />
       </div>

)

export default ContentPage;