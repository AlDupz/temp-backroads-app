import { pageLinks, socialLinks } from '../data'
import { PageLink } from './PageLink'
import { SocialLink } from './SocialLink'

function Footer() {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {pageLinks.map((link) => (
          <PageLink key={link.id} {...link} itemClass="footer-link" />
        ))}
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => (
          <SocialLink key={link.id} {...link} itemClass="footer-icon" />
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
