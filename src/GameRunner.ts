import { IGameDetails, IFaceDirection, IAction } from './GameRunner.d'

export default class GameRunner {
  static PLAYGROUNDSIZE: number = 5
  constructor() {
    // this.playGroundSize = playGroundSize ? playGroundSize : 5
  }
  static play(gameDetails: IGameDetails, action: IAction): IGameDetails {
    switch (action) {
      case IAction.PLACE:
        if (gameDetails.positionX < this.PLAYGROUNDSIZE
          && gameDetails.positionY < this.PLAYGROUNDSIZE
          && gameDetails.positionX > 0
          && gameDetails.positionY > 0
          && gameDetails.faceDirection in IFaceDirection) {
          return gameDetails
        }
        break
      case IAction.MOVE:
        return this.move(gameDetails)
      case IAction.REPORT:
        console.log(gameDetails)
        return gameDetails
      default:
        throw 'Uknown action!'
    }
    return gameDetails
  }

  static isRobotMovable(gameDetails: IGameDetails): boolean {
    switch (gameDetails.faceDirection) {
      case IFaceDirection.N:
        return gameDetails.positionY < this.PLAYGROUNDSIZE
      case IFaceDirection.E:
        return gameDetails.positionX < this.PLAYGROUNDSIZE
      case IFaceDirection.S:
        return gameDetails.positionY > 0
      case IFaceDirection.W:
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
      case IFaceDirection.N:
        gameDetails.positionY = gameDetails.positionY + 1
        return gameDetails
      case IFaceDirection.E:
        gameDetails.positionX = gameDetails.positionX + 1
        return gameDetails
      case IFaceDirection.S:
        gameDetails.positionX = gameDetails.positionX - 1
        return gameDetails
      case IFaceDirection.W:
        gameDetails.positionX = gameDetails.positionX - 1
        return gameDetails
      default:
        throw 'Unable to move due to unknown error!'
    }
  }
}
