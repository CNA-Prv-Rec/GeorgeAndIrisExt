const QuantityDropdown = props => (
    <select name="Quantity" onChange={props.onChangeQuantity}>
            <option key="Small Amount" value="Small Amount">Small Amount</option>
            <option key="A fair bit" value="A fair bit">A fair bit</option>
            <option key="Oodles of it" value="Oodles of it">Oodles of it</option>
    </select>
)


export default QuantityDropdown;