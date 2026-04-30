import { mkdirSync, writeFileSync } from 'fs'
import path from 'path'

const icons = [
  'typescript',
  'javascript',
  'vuedotjs',
  'vite',
  'webpack',
  'vueuse',
  'react',
  'flutter',
  'html5',
  'css',
  'nestjs',
  'nodedotjs',
  'mysql',
  'mongodb',
  'nginx',
  'docker',
  'git',
  { name: 'nextdotjs', color: 'fff' },
  { name: 'threedotjs', color: 'fff' },
]

const outDir = path.join(process.cwd(), './src/assets/icons')
mkdirSync(outDir, { recursive: true })

icons.forEach(async (item) => {
  if (typeof item === 'string') {
    item = { name: item, color: item }
  }
  const { name, color } = item
  const url = `https://cdn.simpleicons.org/${name}/${color}`
  const icon = await fetch(url).then((res) => res.blob())

  writeFileSync(
    path.join(outDir, `${name}.svg`),
    Buffer.from(await icon.arrayBuffer()),
  )
})
