import React from 'react'
import HeroSection from './components/HeroSection'
import ProjectsSection from "@/app/components/ProjectsSection";
import SkillsEducation from './components/SkillsEducation';
import DiffLockSection from './components/DiffLockSection';
import IgnitionSection from './components/Ignition';
import CommandCenter from './components/Commandcenter';
import CertificatesSection from './components/Certificates';
import SkillsTelemetry from './components/SkillsTelemetry';
const page = () => {
  return (
    <div>
        <HeroSection/>
        <ProjectsSection/>
        <SkillsEducation/>
        <SkillsTelemetry/>
        <DiffLockSection/>
        <CertificatesSection/>
        <CommandCenter/>
    </div>
  )
}

export default page