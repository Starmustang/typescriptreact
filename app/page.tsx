"use client";
import Image from "next/image";
import { useState } from "react";
import { RandomFox } from '../components/RandomFox'

const random = () => Math.floor(Math.random() *123) + 1

type ImageItems = Array<{  id: string, url: string}>

export default function Home() {
  const [images, setImages] = useState<ImageItems>([
    {id:'.... ', url:`https://randomfox.ca/images/${random()}.jpg`} ,
    {id:'.... ', url:`https://randomfox.ca/images/${random()}.jpg`},
    {id:'.... ', url:`https://randomfox.ca/images/${random()}.jpg`},
    {id:'.... ', url:`https://randomfox.ca/images/${random()}.jpg`},
  ]);
  return (
    <div>
      <head>
        <title>Toner depot</title>
        <meta name="description" content="Generado por wilson"/>
        <link rel="icon" href="/favicon.ico"/>
      </head>

      <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>      
      {images.map((image, index) => (
        <div key={index} className="p-4">
          <RandomFox image={image}/>
        </div>
      ))}
      
      </main>

      <footer>

      </footer>
    </div>
  );
}
