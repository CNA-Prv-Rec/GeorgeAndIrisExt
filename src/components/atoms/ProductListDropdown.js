const ProductListDropdown = props => (
        <select name="Product">
                {
                    props.ProductList.map(function (object) {
                        return (
                            <option  key={object.ProductID} value={object.ProductName}>{object.ProductName}</option>
                        );
                    })
                }

        </select>
)

export default ProductListDropdown;