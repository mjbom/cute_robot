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
