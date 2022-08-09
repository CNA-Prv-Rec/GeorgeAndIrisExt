function CheckboxWithText(props) {
   
    if (props.checked) {
        <div>
        <input type="checkbox" checked name = {props.name} value={props.title} onChange={props.onChange} />{props.Title}
        </div>
    }
    else
    {
        <div>
            <input type="checkbox" name = {props.name} value={props.title} />{props.title}
        </div>
    }
}

export default CheckboxWithText;