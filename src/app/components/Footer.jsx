"use client";
import { useState } from "react";
import { GrInstagram } from "react-icons/gr";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import "../styles/footer.css";

const Footer = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="subscribe-section">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettā muse.</p>
            <form className="subscribe-form">
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className="email-input"
              />
              <button type="submit" className="subscribe-button">
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className="contact-section">
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>

            <div className="currency-section">
              <h3>CURRENCY</h3>
              <div className="currency-selector">
                <img src="/america.png" alt="" />
                .USA
              </div>
              <p className="currency-note">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-section collapsible">
            <div
              className="section-header"
              onClick={() => toggleSection("brand")}
            >
              <h2>mettā muse</h2>
              <span
                className={`arrow ${
                  expandedSection === "brand" ? "expanded" : ""
                }`}
              >
                ▼
              </span>
            </div>
            <ul
              className={`footer-links ${
                expandedSection === "brand" ? "expanded" : ""
              }`}
            >
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Stories</Link>
              </li>
              <li>
                <Link href="#">Artisans</Link>
              </li>
              <li>
                <Link href="#">Boutiques</Link>
              </li>
              <li>
                <Link href="#">Contact Us</Link>
              </li>
              <li>
                <Link href="#">EU Compliances Docs</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section collapsible">
            <div
              className="section-header"
              onClick={() => toggleSection("quickLinks")}
            >
              <h3>QUICK LINKS</h3>
              <span
                className={`arrow ${
                  expandedSection === "quickLinks" ? "expanded" : ""
                }`}
              >
                ▼
              </span>
            </div>
            <ul
              className={`footer-links ${
                expandedSection === "quickLinks" ? "expanded" : ""
              }`}
            >
              <li>
                <Link href="#">Orders & Shipping</Link>
              </li>
              <li>
                <Link href="#">Join/Login as a Seller</Link>
              </li>
              <li>
                <Link href="#">Payment & Pricing</Link>
              </li>
              <li>
                <Link href="#">Return & Refunds</Link>
              </li>
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Social and payment */}
          <div className="footer-social">
            <div className="footer-section collapsible">
              <div
                className="section-header"
                onClick={() => toggleSection("social")}
              >
                <h3>FOLLOW US</h3>
                <span
                  className={`arrow ${
                    expandedSection === "social" ? "expanded" : ""
                  }`}
                >
                  ▼
                </span>
              </div>
              <div
                className={`social-icons ${
                  expandedSection === "social" ? "expanded" : ""
                }`}
              >
                <a className="social-icon">
                  <GrInstagram />
                </a>
                <a className="social-icon">
                  <AiFillLinkedin />
                </a>
              </div>
            </div>

            <div className="payment-section">
              <h3>mettā muse ACCEPTS</h3>
              <div className="payment-icons">
                <span className="payment-icon">Google Pay</span>
                <span className="payment-icon">Mastercard</span>
                <span className="payment-icon">PayPal</span>
                <span className="payment-icon">Amex</span>
                <span className="payment-icon">Apple Pay</span>
                <span className="payment-icon">Shop Pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
