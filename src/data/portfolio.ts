export const profile = {
  name: 'Joshua',
  role: 'Software Engineer ',
  tagline: "Let's build something amazing today.",
  location: 'Melaka, Malaysia',
  email: 'joshuahaojie@gmail.com',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Joskethegreat' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
  ],
}

export const about = {
  summary:
    'I\'m a software engineer student (Graduating in 2027) who enjoys turning ideas into working wonders. I also lean towards the philosophy "Build first, improve later."',
  skills: [
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'Git',
    'REST APIs',
    'Cloud (AWS/GCP)',
  ],
}

export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A short description of this project — what it does and the problem it solves.',
    tags: ['React', 'TypeScript', 'Vite'],
    repo: 'https://github.com/Joskethegreat',
  },
  {
    title: 'Project Two',
    description:
      'A short description of this project — what it does and the problem it solves.',
    tags: ['Node.js', 'PostgreSQL'],
    repo: 'https://github.com/Joskethegreat',
  },
  {
    title: 'Project Three',
    description:
      'A short description of this project — what it does and the problem it solves.',
    tags: ['Python', 'API'],
    repo: 'https://github.com/Joskethegreat',
  },
]
