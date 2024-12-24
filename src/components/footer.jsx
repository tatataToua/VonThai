const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Von Thai. All Rights Reserved.</p>
          <a 
            href="https://www.google.com/maps?q=16716+15+Mile+Rd+Fraser,+Fraser,+MI,+United+States,+Michigan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="location">
            16716 15 Mile Rd, Fraser, MI, United States, Michigan
        </a>
        <div className="social-links">
            <a href="https://www.instagram.com/govonthai?igsh=djBmbWVnamNwdnk5" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/share/15ep2M3c6w/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  