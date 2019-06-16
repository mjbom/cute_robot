import { IGameDetails } from './GameRunner.d'

export default class GameRunner {
  static PLAYGROUNDSIZE: number = 5
  constructor() {
    // this.playGroundSize = playGroundSize ? playGroundSize : 5
  }
  static play(gameDetails: IGameDetails, action: string): IGameDetails {
    switch (action) {
      case 'PLACE':
        if (gameDetails.positionX < this.PLAYGROUNDSIZE
          && gameDetails.positionY < this.PLAYGROUNDSIZE
          && gameDetails.positionX >= 0
          && gameDetails.positionY >= 0
          && ['N', 'E', 'S', 'W'].includes(gameDetails.faceDirection)
        ) {
          return gameDetails
        }
        throw 'Bad PLACE settings'
      case 'MOVE':
        return this.move(gameDetails)
      case 'REPORT':
        console.log(gameDetails)
        return gameDetails
      default:
        throw 'Uknown action!'
    }
    return gameDetails
  }

  static isRobotMovable(gameDetails: IGameDetails): boolean {
    switch (gameDetails.faceDirection) {
      case 'N':
        return gameDetails.positionY < this.PLAYGROUNDSIZE - 1
      case 'E':
        return gameDetails.positionX < this.PLAYGROUNDSIZE - 1
      case 'S':
        return gameDetails.positionY > 0
      case 'W':
        return gameDetails.positionX > 0
      default:
        throw 'Unknown direction!'
    }
  }

  static move(gameDetails: IGameDetails): IGameDetails {
    if (!this.isRobotMovable(gameDetails)) {
      throw 'Not movable!'
    }
    switch (gameDetails.faceDirection) {
      case 'N':
        gameDetails.positionY = gameDetails.positionY + 1
        return gameDetails
      case 'E':
        gameDetails.positionX = gameDetails.positionX + 1
        return gameDetails
      case 'S':
        gameDetails.positionX = gameDetails.positionX - 1
        return gameDetails
      case 'W':
        gameDetails.positionX = gameDetails.positionX - 1
        return gameDetails
      default:
        throw 'Unable to move due to unknown error!'
    }
  }

  static turnRight(gameDetails: IGameDetails): IGameDetails {
    switch (gameDetails.faceDirection) {
      case 'N':
        gameDetails.faceDirection = 'E'
        return gameDetails
      case 'E':
        gameDetails.faceDirection = 'S'
        return gameDetails
      case 'S':
        gameDetails.faceDirection = 'W'
        return gameDetails
      case 'W':
        gameDetails.faceDirection = 'N'
        return gameDetails
      default:
        throw 'Unable to rotate due to unknown error!'
    }
  }

  static turnLeft(gameDetails: IGameDetails): IGameDetails {
    switch (gameDetails.faceDirection) {
      case 'N':
        gameDetails.faceDirection = 'W'
        return gameDetails
      case 'E':
        gameDetails.faceDirection = 'N'
        return gameDetails
      case 'S':
        gameDetails.faceDirection = 'E'
        return gameDetails
      case 'W':
        gameDetails.faceDirection = 'S'
        return gameDetails
      default:
        throw 'Unable to rotate due to unknown error!'
    }
  }
}
