
import { RandomFox } from '@/components/RandomFox'
import { Random } from "@/logic/Random";
import { useState } from 'react';


export default function Home() {
  // const image = `https://randomfox.ca/images/${Random()}.jpg`
  const [images, setImages] = useState<string[]>([
    `https://randomfox.ca/images/${Random()}.jpg`,
    `https://randomfox.ca/images/${Random()}.jpg`,
    `https://randomfox.ca/images/${Random()}.jpg`,
    `https://randomfox.ca/images/${Random()}.jpg`
  ])

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className='text-3xl font-bold underline'>Hello Platzi</h1>
        {images.map(image => <RandomFox image={image}/>)}
    </main>
  )
}
