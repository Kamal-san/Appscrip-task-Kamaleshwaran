export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <div className="newsletter">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>

          <div className="newsletter-input">
            <input type="email" placeholder="Enter your e-mail..." />
            <button className="sub-btn">SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact-info">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h3 className="currency-title">CURRENCY</h3>
          <div className="currency">
            <img src="/images/usa.png" alt="country" /> USD
          </div>
          <p className="currency-note">
            Transactions will be completed in Euros and <br></br> a currency reference is available on hover.
          </p>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-links">

        <div>
          <h4>mettā muse</h4>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <img src="/images/insta.png" alt="instagram" />
            <img src="/images/linkedin.png" alt="linkedin" />
          </div>

          <h4>mettā muse ACCEPTS</h4>
          <div className="payment-icons">
            <img src="/images/gpay.png" alt="gpay" />
            <img src="/images/mastercard.png" alt="mastercard" />
            <img src="/images/paypal.png" alt="paypal" />
            <img src="/images/amex.png" alt="amex" />
            <img src="/images/applepay.png" alt="apple pay" />
          </div>
        </div>

      </div>

      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>

    </footer>
  );
}
