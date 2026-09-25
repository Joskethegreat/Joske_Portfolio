import javaLogo from '../assets/java-logo.png'
import postgresqlLogo from '../assets/postgresql-logo.png'
import pythonLogo from '../assets/python-logo.png'

const skills = [
  { name: 'Python', logo: pythonLogo },
  { name: 'Java', logo: javaLogo },
  { name: 'PostgreSQL', logo: postgresqlLogo },
]

function Awards() {
  return (
    <section className="bg-gradient-to-t from-teal-500/20 via-blue-500/5 to-transparent px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-semibold text-text">Skills</h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
          {skills.map((skill) => (
            <img
              key={skill.name}
              src={skill.logo}
              alt={skill.name}
              className="h-16 w-16 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
