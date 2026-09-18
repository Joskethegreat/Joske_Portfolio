import { projects } from '../data/portfolio'

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-2xl font-semibold text-text">Projects</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-lg border border-border bg-surface p-6 transition hover:border-accent-light"
          >
            <h3 className="font-medium text-text">{project.title}</h3>
            <p className="mt-2 text-sm text-text-muted">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag} className="text-xs text-accent-light">
                  #{tag}
                </li>
              ))}
            </ul>
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm font-medium text-accent-light hover:underline"
              >
                View repo &rarr;
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
