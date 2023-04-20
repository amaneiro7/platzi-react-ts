import { FunctionComponent, FC, useRef, useEffect, useState } from "react"
import type { ImgHTMLAttributes } from "react";

type LazyImagesProps = {
  src: string
  onLazyLoad?: (img: HTMLImageElement) => void  
}
type Props = ImgHTMLAttributes<HTMLImageElement> & LazyImagesProps


// //Caso 1
// export const RandomFox1 = () => {
//     return <img />
// }

//Caso 2
export const LazyImage = ({
  src, 
  onLazyLoad, 
  ...imgProps
}: Props): JSX.Element => {
    const node = useRef<HTMLImageElement>(null)
    const [currentSrc, setCurrentSrc] = useState<string>("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")
    const [isLazyLoaded, setIsLazyLoaded] = useState(false)

    useEffect(() => {
      if (isLazyLoaded) { 
        return 
      }
        //nuevo observador
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if ( !entry.isIntersecting || !node.current ) { 
            return 
          }

          setCurrentSrc(src)
          observer.disconnect()
          setIsLazyLoaded(true)

          if (typeof onLazyLoad === "function") {
            onLazyLoad(node.current)
          }
        })
    });

    if (node.current) {
      observer.observe(node.current);
    }
     
        
        // desconectar
        return () => {
          observer.disconnect()
        }
      }, [src, onLazyLoad, isLazyLoaded])

    return <img ref={node} src={currentSrc} alt="Random Fox" {...imgProps} />
}


// //Caso 3
// export const RandomFox3 = (): FunctionComponent => {
    // return <img />
// }
// //Caso 4
// export const RandomFox4 = (): FC => {
    // return <img />
// }