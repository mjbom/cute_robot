export interface IGameDetails {
  positionX: number,
  positionY: number,
  faceDirection: IFaceDirection
}

export enum IAction {
  PLACE,
  MOVE,
  REPORT
}

export enum IFaceDirection {
  N,
  E,
  S,
  W
}
import GameRunner from './GameRunner'

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question("What's your name?", (name) => {
  console.log(`Hi ${name}!`)
  readline.close()
})

const PLAYGROUNDSIZE = 5
console.log(PLAYGROUNDSIZE)

const initialState: IGameDetails = {
  positionX: 0,
  positionY: 0,
  faceDirection: IFaceDirection.N
}
