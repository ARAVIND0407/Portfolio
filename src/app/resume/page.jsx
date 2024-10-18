"use client"

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs
} from "react-icons/fa";
import { SiTailwindcss, SiNodedotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque nisi necessitatibus voluptate mollitia facere quos",
  info:[
    {
      fieldName: "Name",
      fieldValue: "Aravind Krishnan"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91)8921698403"
    },
    {
      fieldName: "Experience",
      fieldValue: "2 years"
    },
    {
      fieldName: "Skype",
      fieldValue: "ark05520"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian"
    },
    {
      fieldName: "Email",
      fieldValue: "aravindkrishnan05520@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Malayalam, Hindi, Tamil"
    }
  ]
  
}

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque nisi necessitatibus voluptate mollitia facere quos magnam labore corrupti rem",
  items:[
    {
      company: "Experion",
      position: "Software Engineer",
      duration: "2024 - Present"
    },
    {
      company: "Experion",
      position: "Associate Software Engineer",
      duration: "2023 - 2024"
    },
    {
      company: "Experion",
      position: "Trainee Software Engineer",
      duration: "2022 - 2023"
    },
    {
      company: "Experion",
      position: "Software Engineer",
      duration: "2024 - Present"
    },
    {
      company: "Experion",
      position: "Associate Software Engineer",
      duration: "2023 - 2024"
    },
    {
      company: "Experion",
      position: "Trainee Software Engineer",
      duration: "2022 - 2023"
    }
  ]

}

// education details
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque nisi necessitatibus voluptate mollitia facere quos magnam labore corrupti rem",
  items:[
    {
      institution: "Government Polytechnic College",
      degree: "Diploma In Computer Engineering",
      duration: "2019 - 2022",
    },
    {
      institution: "Government Polytechnic College",
      degree: "Diploma In Computer Engineering",
      duration: "2019 - 2022",
    },
    {
      institution: "Government Polytechnic College",
      degree: "Diploma In Computer Engineering",
      duration: "2019 - 2022",
    },
    {
      institution: "Government Polytechnic College",
      degree: "Diploma In Computer Engineering",
      duration: "2019 - 2022",
    },
    {
      institution: "Government Polytechnic College",
      degree: "Diploma In Computer Engineering",
      duration: "2019 - 2022",
    },
    {
      institution: "Government Polytechnic College",
      degree: "Diploma In Computer Engineering",
      duration: "2019 - 2022",
    },
  ]
}

// skill details
const skills = {
  title: 'My education',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque nisi necessitatibus voluptate mollitia facere quos magnam labore corrupti rem",
  items:[
    {
      icon: <FaHtml5/>,
      name: "html 5",
    },
    {
      icon: <FaCss3/>,
      name: "css 3",
    },
    {
      icon: <FaJs/>,
      name: "javascript",
    },
    {
      icon: <FaReact/>,
      name: "react.js",
    },
    {
      icon: <SiNodedotjs/>,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss/>,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs/>,
      name: "node.js",
    },
    {
      icon: <FaFigma/>,
      name: "figma",
    },
  ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const resume = () => {
  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{
      opacity: 1,
      transition:{
        delay: 2.4,
        duration: 0.4,
        ease: 'easeIn'
      }
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="aboutme">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="max-w-[600px]">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=>{
                      return <li key={index} className="bg-[#232329] h-[180px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                        <span>{item.duration}</span>
                        <h3>{item.position}</h3>
                        <div className="">
                          {/* dot */}
                          <span></span>
                          <p>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              education
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              skills
            </TabsContent>
            <TabsContent value="aboutme" className="w-full">
              aboutme
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default resume
