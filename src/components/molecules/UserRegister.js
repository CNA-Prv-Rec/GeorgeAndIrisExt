
const UserRegister = (props) => (
    <div>
        <form method="POST" action="">
            <div>
                First Name<span className="redColor">*</span>: 
            </div>    
            <div>
                <input type="text" name="FirstName" id="FirstName" alt="First Name"  size="50" maxLength="100" required="true"></input>
            </div>
            <br />

            <div>
                Last Name<span className="redColor">*</span>: 
            </div>    
            <div>
                <input type="text" name="LastName" id="LastName" alt="Last Name"  size="50" maxLength="100" required="true"></input>
            </div>
            <br />

            <div>
                Email<span className="redColor">*</span>: 
            </div>    
            <div>
                <input type="text" name="Email" id="Email" alt="Email"  size="100" maxLength="100" required="true"></input>
            </div>
            <br />

            <div>
                Mobile<span className="redColor">*</span>: 
            </div>    
            <div>
                <input type="text" name="Mobile" id="Mobile" alt="Mobile"  size="100" maxLength="100" required="true"></input>
            </div>
            <br />

            <div>
                Irritation Preferences: 
            </div>    
            <div>
                <input type="checkbox" name="NotifySwaps" id="NotifySwaps" alt="Notify me about local swap adverts" checked="checked"></input>&nbsp;Notify me about local swap adverts
            </div>
            <div>
                <input type="checkbox" name="NotifySells" id="NotifySpecials" alt="Notify me about local sell adverts" checked="checked"></input>
            </div>
            <div>
                <input type="checkbox" name="NotifySpecials" id="NotifySpecials" alt="Sign me up for the newsletter"></input>
            </div>
            <br />
        </form>
    </div>
 
)

export default UserRegister;

