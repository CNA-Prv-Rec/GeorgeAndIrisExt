import ProductListDropdown from "../atoms/ProductListDropdown";
import DistanceDropdown from "../atoms/DistanceDropdown";
import PageButton from "../atoms/PageButton";
import BuySearchResults from "../organisms/BuySearchResults"

const Buy = (props) => (
    <div>
        <span className="paddedSpan">Product: <ProductListDropdown ProductList={props.ProductList} /></span>
        <span className="paddedSpan">Max Distance: <DistanceDropdown /></span>
        <span className="paddedSpan"><PageButton Title="Search" onclick="" className="actionButton" /></span>
    
<BuySearchResults />
</div>

)

export default Buy;