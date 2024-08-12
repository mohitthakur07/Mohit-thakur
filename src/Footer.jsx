import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>This is only a beta version. The website is not completed yet.</p>
        <p>
          &copy; {new Date().getFullYear()} Mohit Thakur. All rights reserved.
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/mohit-kumar-thakur-b8b4572b1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mohitthakur07"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:mohitkumart19@example.com">Contact</a>
        </div>
      </div>
    </footer>
  );
}
