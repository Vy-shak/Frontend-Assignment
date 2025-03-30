"use client"
import React from "react"
import InboxHeader from "./InboxHeader"
import { Chatdata } from "@/app/utils/dummyData/Messages"
import MessageBox from "./MessageBox"
import useChatboxStore from "@/lib/states/useMessages"

function Inbox() {
  const { chatbox } = useChatboxStore()
  return (
    <div className="justify-start flex-col items-start lg:flex hidden  w-full">
      <InboxHeader/>
      <div className="w-full lg:pl-96 flexStart   pt-12 px-4 flex-col">
        {Chatdata.map((chat) => {
          if (chatbox.Name === chat.mentor) {
            return (
              <div key={chat.mentor} className="w-full h-screen overflow-y-scroll flexStart flex-col gap-y-4">
                {chat.messages.map((msg, index) => (
                  <MessageBox Profile={msg.Dp!} key={index} sender={msg.sender} content={msg.content} />
                ))}
              </div>
            );
          }
          return null; 
        })}
      </div>
    </div>
  )
}

export default Inbox
