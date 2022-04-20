import InclusionCircle from "../atoms/InclusionCircle";

const IncludedFeature = (props) => (

    <tr>
    <td className="leftAlign">{props.featureName}</td>
    <td><InclusionCircle Included={props.Standard} /></td>
    <td><InclusionCircle Included={props.Premium} /></td>
    <td><InclusionCircle Included={props.Enterprise} /></td>
    <td><InclusionCircle Included={props.Developer} /></td>
    </tr>

)

export default IncludedFeature;