//import "./PageButton.css";

const ContentPage = (props) => (
       <div>
           <props.Destination ProductList={props.ProductList} onPageChange={props.onPageChange} />
       </div>

)

export default ContentPage;