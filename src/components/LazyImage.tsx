import Image from "next/image"
import { FunctionComponent, FC, useRef, useEffect, useState } from "react"
type Props = {image: string}


// //Caso 1
// export const RandomFox1 = () => {
//     return <img />
// }

//Caso 2
export const LazyImage = ({image}: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)
    const [src, setSrc] = useState<string>("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

    useEffect(() => {
        //nuevo observador
        const observer = new IntersectionObserver(entries => entries.forEach(entry => {
          if ( entry.isIntersecting ) return setSrc(image)
        }))
        //observer node
        if (node.current) observer.observe(node.current)
        // desconectar
        return () => {
          observer.disconnect()
        }
      }, [image])

    return <Image width={320} height={213}
                ref={node}
                className="rounded-lg bg-gray-300 w-80 h-52 object-cover" 
                src={src} 
                alt="random photo of a fox"
            />
}


// //Caso 3
// export const RandomFox3 = (): FunctionComponent => {
    // return <img />
// }
// //Caso 4
// export const RandomFox4 = (): FC => {
    // return <img />
// }