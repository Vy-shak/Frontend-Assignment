"use client"
import React from "react"
import { useRouter } from "next/navigation"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import InboxHeader from "./InboxHeader"
import { Chatdata } from "@/app/utils/dummyData/Messages"
import MessageBox from "./MessageBox"
import useChatboxStore from "@/lib/states/useMessages"
import {ArrowLeft } from "lucide-react"

function InboxMobile() {
  const { chatbox } = useChatboxStore();
  const Router = useRouter()
  return (
    <div className="justify-start fixed z-50 flex lg:hidden top-0 left-0 flex-col items-start bg-white    w-full">
      <ArrowLeft onClick={()=>Router.back()} className="ml-4 cursor-pointer "/>
      <InboxHeader/>
      <div className="w-full  flexStart   pt-12 px-4 flex-col">
        {Chatdata.map((chat) => {
          if (chatbox.Name === chat.mentor) {
            return (
              <div key={chat.mentor} className="w-full lg:pl-14 h-screen overflow-y-scroll flexStart flex-col gap-y-4">
                {chat.messages.map((msg, index) => (
                  <MessageBox Profile={msg.Dp!} key={index} sender={msg.sender} content={msg.content} />
                ))}
              </div>
            );
          }
          return null; 
        })}
      </div>
      <div className="w-full gap-x-4  pb-6 flexSide px-4 fixed bottom-0">
        <Input  className="ml-6  bg-white focus:border-0 border-2"/>
        <Button variant={"primary"}>Send</Button>
      </div>
    </div>
  )
}

export default InboxMobile
