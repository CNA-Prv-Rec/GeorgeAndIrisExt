import AppHeading from '../molecules/appHeading';
import '../../App.css';

const Privacy = () => (
    <div className="App" >
        <AppHeading Title="George & Iris's Crop Swap"/>

        <h3>Privacy Statement</h3>
        <div height="100%" className="leftAlign">
            

            <h5>What data might be used here and how it will be used</h5>
            <p>When you visit this site you will be asked to register your email address, this is so we can mail you notifications about who might want to buy/swap with you, and also to verify that you really exist.
            </p>
            <p>
            In order to provide you with the ability to search for other crop-swappers/vendors in your local area, we need to get either a partial postcode or a location from your device. We use this only for searching nearby facilities.
            </p>
            <p>
            We normally don't need to collect any other data from you. But if you sell *a lot* of stuff here, then you would be acting as a vendor and so that might require us to do a bit more due diligence on you, which might involve more data, e.g. an address, website etc. We'd also have to check you are complying with anti-slavery legislation, anti-everything legislation etc etc. But for most local growers this will all be totally unnecessary.
            </p>
            <p>
            All your data is stored securely in a cloud database accessible only to our staff, with the usual paraphernalia of two factor authentication, ip address restrictions, api keys etc. 
            </p>
            <h5>Your rights</h5>
            <p>
            We have a legal duty to keep records of buying and selling for 7 years, swaps can be deleted. You have the right to request deletion of your data within these regulations, just email us if you need this. ALso you have the right to request to see all data we hold for you.
            </p>
        </div>
    </div>
)

export default Privacy