import React, { useRef, useState } from 'react'
import Card from './Card'


function Foreground() {

    const ref = useRef(null);

    const data = [
        {desc: 'This is the background color of the card that will be displayed',
         filesize: '.9mb',
          close: true ,
           tag: { isOpen: true, text: 'Download Now', tagColor: 'bg-green-600'}} ,
        {desc: 'This is the background color of the card that will be displayed',
         filesize: '.9mb',
          close: true ,
           tag: { isOpen: true, text: 'Download Now', tagColor: 'blue'}} ,
        {desc: 'This is the background color of the card that will be displayed',
         filesize: '.9mb',
          close: true ,
           tag: { isOpen: true, text: 'Download Now', tagColor: 'bg-green-600'}} ,
    ]
    useState()
  return (
    <div ref={ref}className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item, index) => (
            <Card key={index} desc={item.desc} filesize={item.filesize} close={item.close} tag={item.tag} reference={ref}/>
        ))}
    </div>
  )
}

export default Foreground