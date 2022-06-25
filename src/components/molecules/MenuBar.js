import PageButton from "../atoms/PageButton";

const MenuBar = props => (
    <div>
    <PageButton Title="Buy" onclick={props.onclick} className="pageButton" />
    <PageButton Title="Sell" onclick={props.onclick} className="pageButton" />
    <PageButton Title="Swap" onclick={props.onclick} className="pageButton" />
    <PageButton Title="My Ads" onclick={props.onclick} className="pageButton" />
    <PageButton Title="Help" onclick={props.onclick} className="pageButton" />
    <PageButton Title="About" onclick={props.onclick} className="pageButton" />
    <PageButton Title="Contact Us" onclick={props.onclick} className="pageButton" />
    </div>

)

export default MenuBar;

