const ProductListDropdown = props => (
    <select name="Product" onChange={props.onChangeProduct}>
            {
                props.ProductList.map(function (object) {
                    return (
                        <option  key={object.ProductID} value={object.ProductName} >{object.ProductName} </option>
                    );
                },this)
            }

    </select>
)


export default ProductListDropdown;

