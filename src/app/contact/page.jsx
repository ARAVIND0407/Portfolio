"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select, 
  SelectContent, 
  SelectTrigger, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectValue 
} from '@/components/ui/select';

import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa';

const contactInfo = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: '(+91) 8921698403',
  },
  {
    icon: <FaEnvelope/>,
    title: "Email",
    description: 'valoark@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt/>,
    title: "Address",
    description: 'Anjaneyam Mararikulam North PO 688523. Cherthala Alappuzha',
  },
]

import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: { delay: 1.4, duration: 0.4, ease: "easeIn" } }}
    className="py-6 ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
        {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's Work Together</h3>
              <p className="text-white/60">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, dolore!</p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeHolder="Firstname"/>
                <Input type="lastname" placeHolder="Lastname"/>
                <Input type="email" placeHolder="Email address"/>
                <Input type="phone" placeHolder="Phone number"/>
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className=" w-full ">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Developement</SelectItem>
                    <SelectItem value="cst">UI/UX Designing</SelectItem>
                    <SelectItem value="mst">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea 
              className="h-[200px]"
              placeHolder="Type your message here."
              />
              {/* button */}
              <Button size="md" className="max-w-40 h-[50px]">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className="flex flex-1 items-center xl:justify-end xl:order-none order-1 mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((info, index)=>{
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{info.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{info.title}</p>
                    <h3 className="text-xl">{info.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default contact
