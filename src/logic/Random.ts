import { random } from "lodash";

//Se comento para usar el random que ofrece la libreria lodash
//export const Random = () => Math.floor(Math.random() * 123) + 1

export const Random = () => random(1, 123)