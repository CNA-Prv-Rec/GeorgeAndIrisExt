//import "./PageButton.css";
import { React,Component } from "react";
import FeatureList from "./FeatureList";
import ContentMain from "./ContentMain";
import PagerControl from "../molecules/PagerControl";
import ContentPage from "../molecules/ContentPage";

class PagerHorizontal extends Component {

    state={"currentPage":"Main",
    "destination":FeatureList,
    };

    handlePageChange = (e) => {
        this.setState({"currentPage":e.target.value,});
        switch(e.target.value)
        {
            case "Main":
                this.setState({"destination": ContentMain });
                break;
            case "FeatureList":
                this.setState({"destination": FeatureList});
                break;
            default:
                this.setState({"destination": ContentMain} )
        }
    }



    render() {
        return (
            <div>
                <PagerControl />
                <br />
            <ContentPage Destination={this.state.destination} />
            </div>

        );
    }
}

export default PagerHorizontal;