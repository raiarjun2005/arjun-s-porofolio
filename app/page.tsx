import React from 'react'
import HeroSection from './components/HeroSection'
import ProjectsSection from "@/app/components/ProjectsSection";
import SkillsEducation from './components/SkillsEducation';
import DiffLockSection from './components/DiffLockSection';
import IgnitionSection from './components/Ignition';
const page = () => {
  return (
    <div>
        <HeroSection/>
        <ProjectsSection/>
        <SkillsEducation/>
        <DiffLockSection/>
        <IgnitionSection/>
    </div>
  )
}

export default page