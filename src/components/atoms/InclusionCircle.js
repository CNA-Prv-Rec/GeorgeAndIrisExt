import "./InclusionCircle.css";

const InclusionCircle = props => (
       
        <div className={props.Included ? 'feature featureIncluded' : 'feature featureExcluded'}></div>

)

export default InclusionCircle;