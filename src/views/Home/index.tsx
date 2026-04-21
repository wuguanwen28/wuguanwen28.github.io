import React from 'react'
import { GalaxyBackground } from '@/components/GalaxyBackground'
import { Hero } from './components/Hero'
export const Home: React.FC = () => {
  return (
    <>
      <GalaxyBackground saturation={0.4} repulsionStrength={1} />
      <Hero />
    </>
  )
}

export default Home
