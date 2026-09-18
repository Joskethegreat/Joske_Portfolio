import { profile } from '../data/portfolio'

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold text-text">Contact</h2>
      <p className="mt-4 max-w-xl text-text-muted">
        Want to work together or just say hi? Reach out.
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-light"
        >
          {profile.email}
        </a>
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text transition hover:border-accent-light"
          >
            {social.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Contact
