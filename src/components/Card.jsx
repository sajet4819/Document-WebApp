import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";


function Card({data, reference}) {
  return (

    <motion.div drag 
    dragConstraints = {reference} 
    whileDrag={{scale:1.2}}
    dragElastic={0.1}
    dragTransition={{ bounceStiffness:100, bounceDamping:10}}
     className=' relative flex-shrink-0 w-[15vw] h-[15rem] rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden  '>
 <FaRegFileAlt/>

<p className='text-sm leading-tight mt-5 font-semibold'>

    {data.desc}
    </p>

       <div className='footer absolute bottom-0 w-full  left-0'>
        <div className='flex items-center justify-between px-8 py-3  mb-3'>

            <h5>{data.filesize}</h5>
            <button>
           <span className='w-7 bg-zinc-600  p-1 rounded-full flex  item-center justify-center hover:bg-zinc-400  '>
           
            {data.close ? <IoClose/> : <LuDownload size= ".7em" color='#fff'/>
            //agar (data.close)ki value true hai (?) to fir close icon show krr raha hu aur agar aesa nahi hai to fir (:)  mai   downloade  icon show krr raha hu 
 } 
            </span> 
            </button>
         </div>

         
            
           {data.tag.isOpen ? (
             //to show(downloade) now or NOt to show it .
                //data ka tag (isOpen) agar vo true hai (?) to fir app kya show karo ~~~~
                 <div className={`tag w-full py-4 ${data.tag.tagColor==="blue" ? "bg-blue-600" : "bg-green-600"}   
                 
                 flex item-center justify-center`}>

                <h3 className='text-sm font-semibold'>    {data.tag.tagTitle}   </h3> 
                </div>
               //select the element(data.tag.tagcolor) agar(===)vo blue hai(?)to rnder blue nhi to (:) rnder green
              //Or null (kuch matt show karo)  
            ) : null
           }
         
         

       </div>
    </motion.div>

  )
}

export default Card