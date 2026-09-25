import githubIcon from '../assets/github.png'
import gmailIcon from '../assets/gmail.png'
import linkedinIcon from '../assets/linkedin.png'
import { profile } from '../data/portfolio'

const socialIcons: Record<string, string> = {
  GitHub: githubIcon,
  LinkedIn: linkedinIcon,
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold text-text">Contact</h2>
      <p className="mt-4 max-w-xl text-text-muted">
        So you're interested in working together? Great, here's how you can get in touch with me.
      </p>
      <div className="mt-6 flex flex-wrap gap-6">
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="group flex w-16 flex-col items-center"
        >
          <img
            src={gmailIcon}
            alt="Email"
            className="h-16 w-16 object-contain transition duration-200 group-hover:-translate-y-1"
          />
          <span className="mt-1 text-xs text-text-muted opacity-0 transition duration-200 group-hover:opacity-100">
            Email
          </span>
        </a>
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            className="group flex w-16 flex-col items-center"
          >
            <img
              src={socialIcons[social.label]}
              alt={social.label}
              className="h-16 w-16 object-contain transition duration-200 group-hover:-translate-y-1"
            />
            <span className="mt-1 text-xs text-text-muted opacity-0 transition duration-200 group-hover:opacity-100">
              {social.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
