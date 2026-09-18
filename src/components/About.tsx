import { about } from '../data/portfolio'

function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold text-text">About</h2>
      <p className="mt-4 max-w-2xl text-text-muted">{about.summary}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {about.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-text-muted"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About
