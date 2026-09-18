const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold tracking-tight text-text">
          Joshua<span className="text-accent">.</span>
        </a>
        <ul className="flex gap-6 text-sm text-text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-text">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
