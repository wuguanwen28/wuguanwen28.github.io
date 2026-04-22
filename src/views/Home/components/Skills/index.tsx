import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import { IconCloud } from '@/components/IconCloud'
import { AnimatedBeam } from '@/components/AnimatedBeam'
import { ElectricBorder } from '@/components/ElectricBorder'
import { ShimmerButton } from '@/components/ShimmerButton'

const slugs = [
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
].map((item) => {
  if (typeof item === 'string') item = { name: item, color: item }
  const { name, color } = item
  return `https://cdn.simpleicons.org/${name}/${color}`
})

const leftSkills = [
  'React',
  'Vue3',
  'JavaScript',
  'Typescript',
  'Three.js',
  'Echarts.js',
] as const

const rightSkills = [
  'Vite',
  'Webpack',
  'Babel',
  'NestJs',
  'NodeJs',
  'MongoDB',
] as const

type LeftSkill = (typeof leftSkills)[number]
type RightSkill = (typeof rightSkills)[number]
type SkillType = LeftSkill | RightSkill
type AllSkillsMap = {
  [key in SkillType]?: {
    delay: number
    el: HTMLElement
  }
}

const colors = [
  '#ffffff',
  '#ff4242',
  '#a142ff',
  '#42a1ff',
  '#42d0ff',
  '#a1ff42',
]

export const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const skillTextRef = useRef<HTMLDivElement>(null)
  const allSkillsRef = useRef<{ [key in SkillType]?: HTMLElement }>({})
  const [allSkills, setAllSkills] = useState<AllSkillsMap>({})

  useEffect(() => {
    const allSkills: AllSkillsMap = {}
    Object.keys(allSkillsRef.current).map((_key) => {
      const key = _key as SkillType
      allSkills[key] = {
        delay: Math.random() * 7,
        el: allSkillsRef.current[key]!,
      }
    })
    setAllSkills(allSkills)
  }, [])

  const setRefs = (el: HTMLElement | null, skill: SkillType) => {
    if (el) allSkillsRef.current[skill] = el
  }

  return (
    <div className="skills" id="skills" ref={containerRef}>
      <h1 className="section-title">技能与技术</h1>
      <div className="skills-container">
        <div className="skill-list-left">
          {leftSkills.map((skill, index) => {
            return (
              <ShimmerButton
                key={index}
                className="skill-item"
                ref={(el) => setRefs(el, skill)}
              >
                {skill}
              </ShimmerButton>
            )
          })}
        </div>
        <div className="center-element" ref={skillTextRef}>
          <ElectricBorder borderRadius={999} chaos={0.15} color={colors}>
            <div className="icon-cloud-container">
              <IconCloud images={slugs} />
            </div>
          </ElectricBorder>
        </div>
        <div className="skill-list-right">
          {rightSkills.map((skill, index) => {
            return (
              <ShimmerButton
                key={index}
                className="skill-item"
                shimmerSize="2px"
                shimmerColor="#68a9ff"
                ref={(el) => setRefs(el, skill)}
              >
                {skill}
              </ShimmerButton>
            )
          })}
        </div>
      </div>
      {Object.keys(allSkills).map((key, index) => {
        const item = allSkills[key as SkillType]!
        const reverse = !!rightSkills.includes(key as RightSkill)
        return (
          <AnimatedBeam
            key={index}
            duration={20}
            repeatDelay={-17}
            delay={item.delay}
            containerRef={containerRef}
            fromRef={{ current: item.el }}
            toRef={skillTextRef}
            reverse={reverse}
          />
        )
      })}
    </div>
  )
}
