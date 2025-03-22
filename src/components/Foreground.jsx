import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {


  const ref = useRef(null);


  const data = [
    {
      desc:"Avalaible Space in your Account.",
      filesize : ".145Gb",
      close: true,
    tag: { isOpen: false, tagTitle: "Download now", tagColor: "green" },

    },
    {
      desc:"Video",
      filesize : ".100Gb",
      close: true,
    tag: { isOpen: true, tagTitle: "Download now", tagColor: "blue" },

    },
    {
      desc:"Collge Document.",
      filesize : ".100mb",
      close: false,
    tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },

    },
    {
      desc:"Work Data.",
      filesize : ".150mb",
      close: false,
    tag: { isOpen: true, tagTitle: "Upload", tagColor: "green" },

    },
  ];

  
  return (
    <>
    <div ref={ref} className="fixed top-0 left-0 z-[3]  w-full h-full  flex gap-10 flex-wrpe p-5 " >

{data.map((item,index)=>(
  <Card  data={item} reference={ref}/> 
))}
        
    </div>
    
    </>
  )
}

export default Foreground