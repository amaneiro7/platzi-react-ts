import type { FunctionComponent, FC } from "react"
type Props = {image: string}

// //Caso 1
// export const RandomFox1 = () => {
//     return <img />
// }

//Caso 2
export const RandomFox = ({image}: Props): JSX.Element => {
    return <img width={320} height={'auto'} className="rounded-md" src={image}/>
}

// //Caso 3
// export const RandomFox3 = (): FunctionComponent => {
    // return <img />
// }
// //Caso 4
// export const RandomFox4 = (): FC => {
    // return <img />
// }