"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam adipisci temporibus, at commodi cupiditate expedita modi deserunt dolore laboriosam non!",
    stack:[{name: "html"}, {name: "css"}, {name: "javascript"}],
    image: "/assets/primage/1.jpg",
    live: "",
    github: ""
  },
  {
    num: "02",
    category: "Full Stack",
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam adipisci temporibus, at commodi cupiditate expedita modi deserunt dolore laboriosam non!",
    stack:[{name: "Next.js"}, {name: "Tailwind.css"}, {name: "Javascript"}],
    image: "/assets/primage/2.jpg",
    live: "",
    github: ""
  },
  {
    num: "03",
    category: "Frontend",
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam adipisci temporibus, at commodi cupiditate expedita modi deserunt dolore laboriosam non!",
    stack:[{name: "html"}, {name: "css"}, {name: "javascript"}],
    image: "/assets/primage/3.jpg",
    live: "",
    github: ""
  },
]

const work = () => {
  const [project, setProject] = useState(projects[0])
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{opacity:1}}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="">
              {/* outline num */}
              <div className="text-8xl text-transparent text-outline leading-none font-extrabold">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} Project</h2>
              {/* project description */}
              <p className="text-white/60">
                {project.description}
              </p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return <li key={index} className="text-xl text-accent">{item.name}
                  {index != project.stack.length -1 && ","}
                  </li>
                })}
              </ul>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.section>
  )
}

export default work
