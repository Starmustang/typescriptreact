"use client";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";
import { RandomFox } from '../components/RandomFox'
import { url } from "inspector";
import { title } from "process";
import { Random } from "lodash";

const random = () => Random(1, 123);

//generar un id unico simple
const generateid = () => Math.random().toString(36).substr(2,9);



export default function Home() {
  const [images, setImages] = useState<Array<IImageItems>>([]);

  const addNewFox: MouseEventHandler<HTMLButtonElement> = (event) =>{
      event.preventDefault()

    const newImageItem: IImageItems = {
      id: generateid(),
      url: `https://randomfox.ca/images/${random()}.jpg`
    };
    setImages([
      ...images,
      newImageItem
    ]);
    window.plausible("add_fox")
  }

  return (
    <div>0
      <head>
        <title>Toner depot</title>
        <meta name="description" content="Generado por wilson"/>
        <link rel="icon" href="/favicon.ico"/>
        <script
        defer
        data-domain="yourdomain.com"
        src="https://plausible.io/js/script.js"
        ></script>
      </head>

      <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>      
<button onClick={addNewFox}>agregar un nuevo zorro</button>

      {images.map(({  id, url}, index) => (
        <div key={id} className="p-4">
          <RandomFox            
          onClick={() => console.log("Hey")}
          title="Random Fox"
          width={640} 
          height="auto" 
          className="rounded bg-gray-300"
          src={url}     
          onLazyLoad={(img) => {
            console.log(`Image #${index + 1} carga. Modo:`, img);
            
          }}
          />
        </div>
      ))} 
      
      </main>

      <footer>

      </footer>
    </div>
  );
}

