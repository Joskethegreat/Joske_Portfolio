import cursorLogo from '../assets/cursor-logo.png'
import geminiLogo from '../assets/gemini-logo.webp'
import githubLogo from '../assets/github-logo.png'
import javaLogo from '../assets/java-logo.png'
import javascriptLogo from '../assets/javascript-logo.webp'
import ollamaLogo from '../assets/ollama-logo.webp'
import perplexityLogo from '../assets/perplexity-logo.png'
import postgresqlLogo from '../assets/postgresql-logo.png'
import pythonLogo from '../assets/python-logo.png'
import reactLogo from '../assets/react-logo.webp'
import supabaseLogo from '../assets/supabase-logo.webp'
import viteLogo from '../assets/vite-logo.webp'
import vscodeLogo from '../assets/vscode-logo.webp'

const skills = [
  { name: 'Python', logo: pythonLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'PostgreSQL', logo: postgresqlLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'React', logo: reactLogo },
  { name: 'Vite', logo: viteLogo },
  { name: 'Supabase', logo: supabaseLogo },
  { name: 'GitHub', logo: githubLogo },
  { name: 'VS Code', logo: vscodeLogo },
  { name: 'Cursor', logo: cursorLogo },
  { name: 'Gemini', logo: geminiLogo },
  { name: 'Perplexity', logo: perplexityLogo },
  { name: 'Ollama', logo: ollamaLogo },
]

function Awards() {
  return (
    <section className="bg-gradient-to-t from-teal-500/20 via-blue-500/5 to-transparent px-6 py-30">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-semibold text-text">Skills</h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
          {skills.map((skill) => (
            <div key={skill.name} className="group flex w-20 flex-col items-center">
              <img
                src={skill.logo}
                alt={skill.name}
                className="h-20 w-20 object-contain transition duration-200 group-hover:-translate-y-1"
              />
              <span className="mt-1 text-xs text-text-muted opacity-0 transition duration-200 group-hover:opacity-100">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
