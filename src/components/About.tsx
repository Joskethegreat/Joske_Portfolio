import { about } from '../data/portfolio'

function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-20">
      {/* <h2 className="text-center text-2xl font-semibold text-text">About</h2> */}
      <p className="mx-auto mt-4 max-w-2xl text-center italic text-text-muted">
        {about.summary}
      </p>
      
      <br />
     
    </section>
  )
}

export default About
