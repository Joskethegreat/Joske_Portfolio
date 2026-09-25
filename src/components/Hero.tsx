import { profile } from '../data/portfolio'
import meImage from '../assets/me.jpg'

function Hero() {
  return (
    <section className="relative mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-28">
      <img
        src={meImage}
        alt="me"
        className="absolute right-0 bottom-0 z-0 h-99/100 w-99/100 object-contain"
      />

      <div className="relative flex flex-col items-start gap-6">
        <p className="text-sm font-medium text-accent-light">{profile.location}</p>
        <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          Meet {profile.name}, your
          <br />
          <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            <u>{profile.role}</u>
          </span>
          .
        </h1>
        <p className="max-w-xl text-lg text-text-muted">{profile.tagline}</p>
      </div>
    </section>
  )
}

export default Hero
