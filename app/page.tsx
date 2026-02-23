import React from 'react'
import HeroSection from './components/HeroSection'
import ProjectsSection from "@/app/components/ProjectsSection";
import SkillsEducation from './components/SkillsEducation';
import DiffLockSection from './components/DiffLockSection';
import IgnitionSection from './components/Ignition';
import CommandCenter from './components/Commandcenter';
const page = () => {
  return (
    <div>
        <HeroSection/>
        <ProjectsSection/>
        <SkillsEducation/>
        <DiffLockSection/>
        {/* <IgnitionSection/> */}
        <CommandCenter/>
    </div>
  )
}

export default page