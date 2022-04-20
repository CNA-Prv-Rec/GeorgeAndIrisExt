import IncludedFeature from "../molecules/IncludedFeature";

const FeatureList = () => (
<table className="fullBorderedTable">
    <tr><th className="leftAlign">Feature</th><th>Standard</th><th>Premium</th><th>Enterprise</th><th>Developer</th></tr>
    <tr><td className="leftAlign">Price per user</td><td>$10 monthly</td><td>$8 monthly</td><td>$6 monthly</td><td>$300 monthly</td></tr>
    <tr><td className="leftAlign">Min Users</td><td>5</td><td>21</td><td>101</td><td>1</td></tr>
    <tr><td className="leftAlign">Max Users</td><td>20</td><td>100</td><td>Unlimited</td><td>n/a</td></tr>
    <tr><td className="leftAlign">Max shards</td><td>20</td><td>100</td><td>Unlimited</td><td>n/a</td></tr>
    <IncludedFeature featureName="eCompete Engine" Standard={true} Premium={true} Enterprise={true} Developer={true} />
    <IncludedFeature featureName="Security Administration" Standard={true} Premium={true} Enterprise={true} Developer={true} />
    <IncludedFeature featureName="Application Designer" Standard={false} Premium={false} Enterprise={false} Developer={true} />
    
</table>

)

export default FeatureList;