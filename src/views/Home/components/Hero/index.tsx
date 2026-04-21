import React from 'react'
import './index.scss'
import { TextType } from '@/components/TextType'
import { RainbowButton } from '@/components/RainbowButton'

export const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-glow" />
        <h1 className="hero-title">
          你好，我是<span className="hero-name">伍观文</span>
        </h1>
        <h2 className="hero-subtitle">
          <TextType
            text={[
              '前端切图仔 +',
              'CRUD工程师 +',
              'Ctrl+C、Ctrl+V 大师 = ?',
              '全栈开发工程师',
            ]}
          ></TextType>
        </h2>
        <p className="hero-description">
          使用现代技术构建美观、实用、高性能的 Web 应用。
          <br />
          热衷于创造卓越的用户体验，专注于前端开发与全栈解决方案。
        </p>
        <div className="hero-buttons">
          <RainbowButton
            className="btn btn-primary"
            onClick={() => {
              const el = document.getElementById('skills')
              el?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            查看技术
          </RainbowButton>
        </div>
      </div>
    </section>
  )
}
