import { profile } from '../data/portfolio'

function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-28">
      <p className="text-sm font-medium text-accent-light">{profile.location}</p>
      <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
        Hi, I'm {profile.name} — {profile.role}.
      </h1>
      <p className="max-w-xl text-lg text-text-muted">{profile.tagline}</p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-light"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text transition hover:border-accent-light"
        >
          Get in touch
        </a>
      </div>
    </section>
  )
}

export default Hero
