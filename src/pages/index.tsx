
import { LazyImage } from '@/components/LazyImage'
import { Random } from "@/logic/Random";
import { generateId } from '@/logic/generateId';
import { useState } from 'react';
import type { MouseEventHandler } from 'react';

type ImageItem = {id: string; url: string}
export default function Home() {
  // const image = `https://randomfox.ca/images/${Random()}.jpg`
  const [images, setImages] = useState<Array<ImageItem>>([]) 


  
  const addNewFox: MouseEventHandler = (event) => {
    event.preventDefault()
    const newImageItem: ImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${Random()}.jpg`
    }
    setImages([...images, newImageItem])
  }

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className='text-3xl font-bold underline'>Hello Platzi</h1>
        <button onClick={addNewFox}>Add New Fox</button>
          {images.map(({id, url}) => <div key={id} className='h-56'><LazyImage image={url}/></div>)}
    </main>
  )
}
