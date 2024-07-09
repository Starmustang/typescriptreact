"use client";
import Image from "next/image";
import { useState } from "react";
import { RandomFox } from '../components/RandomFox'

const random = () => Math.floor(Math.random() *123) + 1

//generar un id unico simple
const generateid = () => Math.random().toString(36).substr(2,9);

type ImageItems = {  id: string, url: string}

export default function Home() {
  const [images, setImages] = useState<Array<ImageItems>>([
    {id:generateid(), url:`https://randomfox.ca/images/${random()}.jpg`} ,
    {id:generateid(), url:`https://randomfox.ca/images/${random()}.jpg`},
    {id:generateid(), url:`https://randomfox.ca/images/${random()}.jpg`},
    {id:generateid(), url:`https://randomfox.ca/images/${random()}.jpg`},
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
      {images.map(({  id, url}) => (
        <div key={id} className="p-4">
          <RandomFox image={url}/>
        </div>
      ))}
      
      </main>

      <footer>

      </footer>
    </div>
  );
}

/* "countDate": "2024-07-09T20:34:15.077Z",
  "countBlackWhite": 0,
  "countColor": 0,
  "countScan": 0,
  "clientNumber": 302,
  "officeId": "4028918f84447901018452d92cbf0612",
  "deviceId": "4028918f842601d401842e15243f00eb" */