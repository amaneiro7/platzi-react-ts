
import { LazyImage } from '@/components/LazyImage'
import { Random } from "@/logic/Random";
import { generateId } from '@/logic/generateId';
import { useState } from 'react';
import type { MouseEventHandler } from 'react';

//Se comento para que sea incluido en el archivo de variables globales
// type ImageItem = {id: string; url: string}
export default function Home() {
  // const image = `https://randomfox.ca/images/${Random()}.jpg`
  const [images, setImages] = useState<Array<IFoxImageItem>>([]) 


  
  const addNewFox: MouseEventHandler = (event) => {
    event.preventDefault()
    const newImageItem: IFoxImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${Random()}.jpg`
    }
    setImages([...images, newImageItem])
  }

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className='text-3xl font-bold underline'>Hello Platzi</h1>
        <button onClick={addNewFox}>Add New Fox</button>
          {images.map(({id, url}, index) => 
          <div key={id} className='h-56'>
            <LazyImage 
              src={url}              
              width={320}
              height='auto'
              title='Random Fox'
              className='rounded-lg bg-gray-300 w-80 h-52 object-cover'
              onClick={() => console.log('hey')}
              onLazyLoad={img => console.log(`Image #${index +1} cargada.Nodo:`, img)}
            />
          </div>)}
    </main>
  )
}
