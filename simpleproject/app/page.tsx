"use client"
import Image from "next/image";
import { generateTextAction } from "./actions/aiActions";
import { useState } from "react";
import ReactMarkdown from "react-markdown"


export default function Home() {
  const [prompt , setPrompt] = useState<string>("")
  const [output , setOutput] = useState<string>("")

  const handleSendPrompt = async ()=> {
    const response = await generateTextAction(prompt)
      console.log(response);
      setOutput(response)
      
  }
  return (
    <main className="flex flex-col w-screen h-screen items-center px-24 py-6 justify-between">
      {output && (
        <div className="pb-30">
          <h1 className="text-2xl font-bold mb-4 text-center">AI response </h1>
          <ReactMarkdown>

          {output}
          </ReactMarkdown>
        </div>
      )

      }

     <div className="input-area fixed bottom-6 px-24 py-2 flex items-center justify-between w-full bg-white border border-gray-300 rounded-lg shadow-lg">
      <input type="text" placeholder="Type Your Message Here" className="border p-2 rounded-md w-[80%] outline-none" value={prompt} onChange={(e)=>setPrompt(e.target.value)}/>
      <button className="bg-blue-500 text-white p-2 rounded-md w-[18%] cursor-pointer" onClick={handleSendPrompt}>Send</button>
     </div>
    </main>
  );
}
