import "./Contact.css"

const Contact = () => (
    <div>
      <h2>Contact Us</h2>

      <div className="CenterContainer">
    
       <form method="POST" action="" className="ContactForm">
            <div>
              <div>
                Name: 
              </div>    
              <div>
                <input type="text" name="Name" id="Name" alt="Name" required="true" size="50" maxLength="100"></input>
              </div>
            </div>
            <br />
           
            <div>
              <div>
                Email:
              </div>    
              <div>
                <input type="text" name="Email" id="Email" alt="Email" required="true" size="50" maxLength="100"></input>
              </div>
            </div>
            <br />

            <div>
              <div>
                Phone: 
              </div>    
              <div>
                <input type="text" name="Phone" id="Phone" alt="Phone"  size="50" maxLength="100"></input>
              </div>
            </div>   
            <br />

            <div>
              <div>
                Your question / feedback: 
              </div>  
              <div>
                <textarea name="Feedback" id="feedback" alt="Feedback" rows="10" cols="70" required="true"></textarea>
              </div>
            </div>



              <div class="align-right">
                  <button type="submit">Submit</button>
              </div>
          
      </form>
      </div>

    </div>

)

export default Contact;