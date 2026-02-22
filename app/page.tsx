import React from 'react'
import HeroSection from './components/HeroSection'
import ProjectsSection from "@/app/components/ProjectsSection";
import SkillsEducation from './components/SkillsEducation';

const page = () => {
  return (
    <div>
        <HeroSection/>
        <ProjectsSection/>
        <SkillsEducation/>
    </div>
  )
}

export default page