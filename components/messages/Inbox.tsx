"use client"
import React from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import InboxHeader from "./InboxHeader"
import { Chatdata } from "@/app/utils/dummyData/Messages"
import MessageBox from "./MessageBox"
import useChatboxStore from "@/lib/states/useMessages"

function Inbox() {
  const { chatbox } = useChatboxStore()
  return (
    <div className="justify-start flex-col items-start lg:flex hidden  w-full">
      <InboxHeader/>
      <div className="w-full lg:pl-72 flexStart   pt-12 px-4 flex-col">
        {Chatdata.map((chat) => {
          if (chatbox.Name === chat.mentor) {
            return (
              <div key={chat.mentor} className="w-full pl-14 h-screen overflow-y-scroll flexStart flex-col gap-y-4">
                {chat.messages.map((msg, index) => (
                  <MessageBox Profile={msg.Dp!} key={index} sender={msg.sender} content={msg.content} />
                ))}
              </div>
            );
          }
          return null; 
        })}
      </div>
      <div className="w-fit gap-x-4 pl-80 pb-6 flex justify-end fixed bottom-0">
        <Input  className="ml-6  lg:w-lg xl:w-2xl 2xl:w-2xl focus:outline-none focus:ring-0 focus:border-transparent bg-white focus:border-0 border-2"/>
        <Button variant={"primary"}>Send</Button>
      </div>
    </div>
  )
}

export default Inbox
