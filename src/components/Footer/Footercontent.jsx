import "./Footercontent.css";

function Footercontent() {
  return (
    <div className="App">
      <footer className="footercontent">
      <div className="footer-container">
        

        {/* Grid Layout */}
        <div className="footer-grid">
          {/* Newsletter */}
          <div className="footer-newsletter">
            <h2>Get the latest news!</h2>
            <p>Stay ahead in the crypto market with real-time updates, price alerts, and the latest blockchain news.
              </p>
          </div>

          <div className="footer-subscribe">
            <form>
              <label htmlFor="UserEmail" className="sr-only">Email</label>
              <div className="subscribe-box">
                <input
                  type="email"
                  id="UserEmail"
                  placeholder="john@rhcp.com"
                />
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>

          {/* Services */}

          
          <div className="footer-sectionx">
            <p>Services</p>
            <ul>
              <li><a href="#">Company Review</a></li>
              <li><a href="#">Accounts Review</a></li>
              <li><a href="#">HR Consulting</a></li>
              <li><a href="#">SEO Optimisation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-sectionx">
            <p>Company</p>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Meet the Team</a></li>
              <li><a href="#">Accounts Review</a></li>
            </ul>
          </div>

          {/* Helpful Links */}
          <div className="footer-sectionx">
            <p>Helpful Links</p>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Live Chat</a></li>
            </ul>
          </div>



          {/* Legal */}
          <div className="footer-section">
            <p>Legal</p>
            <ul>
              <li><a href="#">Accessibility</a></li>
              <li><a href="#">Returns Policy</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Hiring-3 Statistics</a></li>
            </ul>
          </div>

          {/* Downloads */}
          <div className="footer-section">
            <p>Downloads</p>
            <ul>
              <li><a href="#">Marketing Calendar</a></li>
              <li><a href="#">SEO Infographics</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <ul className="footer-socials">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Dribbble</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2022. Company Name. All rights reserved.</p>
        <ul>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookies</a></li>
        </ul>
      </div>
    </footer>
    </div>
  );
}
export default Footercontent;