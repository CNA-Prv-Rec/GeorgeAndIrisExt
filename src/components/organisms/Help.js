import Accordion from '../molecules/Accordion';
import PageButton from '../atoms/PageButton';

const Help = (props) => (
  <div >
  <h2>Frequently Asked Questions</h2>

  <p className='leftAlign'>Do you have a question not in the list below? <PageButton Title="Contact Us" onclick={props.onPageChange} className="buttonhyperlink" /></p>
  <Accordion>
    <div label='Does it cost anything to use this site?'>
      <p>
        We have made the site free to use for individual gardeners and allotment holders. Given that there is currently a war in Ukraine and lots of worries about world food security, we want to encourage everybody to get growing safe in the knowledge there's somewhere for their extra crops to go if they grow more than they need.
      </p>
      <p> 
        The site exists solely on donations. It does cost some money to run so if you feel like supporting us please donate.
      </p>
    </div>
    <div label='Why are there no online payment options?'>
      <p>
       Whilst it is possible to set up payment providers, what would you do if you got there to pick up your strawberries and they turned out to be mushy? Also it's kind of important that the aubergines actually exist. So for any buy/sell transactions we think cash on pickup is probably the best bet.
      </p>
    </div>
    <div label='How will you keep my data safe?'>
      <p>
          All your data is stored in a cloud-hosted database which is secured by ip address and by strong passwords with two-factor authentication enabled. It is accesssible only to administrators here at Design with Wisdom and to the website itself. We do not sell any data to third parties. It's up to you what data you put on your adverts here. If you're relaly private you can communicate totally through the app. Or you might yourself choose to move to phonecalls at which point you will be giving your own data independently of the site. But we will not give anything out on your behalf without consent.
      </p>
      <p>
        We don't collect any credit card data so the chances of you having your credit card details stolen from here as a result of our systems being deficient is zero. If by some remote chance you do something really daft like give your credit card details out in chat, it's your responsibility if it all goes horribly wrong (sorry) but we will still help the police to find any perpetrators if this happens. We recommend cash on pickup in a publicly visible location, you might want to follow that advice.
      </p>
    </div>
    <div label='What will you do with my data?'>
      <p>
          Since we&apos;re all in GDPR land, we're going to tell you all the ways we might use your data, so here goes:
      </p>
      <ul>
        <li>As a basic anti-fraud method we kind of need to know who you are so we will be verifying that you are who you say your are</li>
        <li>We will be running analysis on how much you are selling in order to identify sellers who might need proper big-agriculture verification.</li>
        <li>If someone reports a seller (or buyer) as a chain gang operator or fraudster we will be co-operating with the police to ensure the matter is handled correctly, and may share data with them for the purposes of law enforcement.</li>
        <li>Who might occasionally send you emails e.g. at start or near end of growing season to ask if you want to post an ad or something similar.</li>
      </ul>
    </div>
    <div label='Agriculture sometimes has issues around chain gangs and slavery. How do you make sure your sellers aren&apos;t exploiting people?'>
      <p>
          Whilst this is a site primarily for individual gardeners and allotment holders, there is a remote possibility that a large scale agricultural provider might appear here. We have the ability to run queries to find people selling large amounts, and they will be subject to some extra verification. There is also a Report button so if you turn up and see people whom you consider to be mistreated you can report it either to us via the Report button or to the police directly. 
      </p>
    </div>
  </Accordion>
</div>

)

export default Help;