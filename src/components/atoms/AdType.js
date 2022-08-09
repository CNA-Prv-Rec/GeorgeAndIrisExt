const AdType = props => (
    <select name="AdTYpe" onChange={props.onChangeAdType}>
            <option key="Swap_Give" value="Swap_give">Swap (give)</option>
            <option key="Swap_Get" value="Swap_Get">Swap (get)</option>
            <option key="Sell" value="Sell">Sell</option>
    </select>
)


export default AdType;