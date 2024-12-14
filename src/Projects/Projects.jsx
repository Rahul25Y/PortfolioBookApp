import React from 'react'
import ProjectBox from './ProjectBox'
import Heading from '../Services/Heading'

export default function Projects({ProjectData,ProjectData2}) {
  return (
    <div className="h-full page-shadow bg-white p-10">
    {/* heading */}
    <Heading
      title="Projects"
      subtitle="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet."
    />
    {/* Project section  */}
    <div>
      <ProjectBox ProjectData={ProjectData} />
    </div>
  </div>
  )
}
