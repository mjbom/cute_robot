import GameRunner from './GameRunner'
import { IGameDetails } from './GameRunner.d'

describe('GameRunner Class', () => {
  it('tests play method', () => {
    let gameDetails: IGameDetails = {
      positionX: 0,
      positionY: 0,
      faceDirection: 'N'
    }
    gameDetails = GameRunner.play(gameDetails, 'MOVE')
    gameDetails = GameRunner.play(gameDetails, 'REPORT')
    expect(gameDetails.positionX).toBe(0)
    expect(gameDetails.positionY).toBe(1)
    expect(gameDetails).toMatchSnapshot()
  })

  it('tests isRobotMovable method', () => {
    const gameDetails: IGameDetails = {
      positionX: 5,
      positionY: 5,
      faceDirection: 'N'
    }
    expect(GameRunner.isRobotMovable(gameDetails)).toBe(false)
    gameDetails.positionX = 0
    gameDetails.positionY = 1
    expect(GameRunner.isRobotMovable(gameDetails)).toBe(true)
    gameDetails.positionX = 5
    expect(GameRunner.isRobotMovable(gameDetails)).toBe(true)
    gameDetails.positionY = 4
    expect(GameRunner.isRobotMovable(gameDetails)).toBe(true)
  })

  it('tests move method', () => {
    let gameDetails: IGameDetails = {
      positionX: 0,
      positionY: 0,
      faceDirection: 'N'
    }
    gameDetails = GameRunner.move(gameDetails)
    expect(gameDetails).toMatchSnapshot()
    gameDetails = GameRunner.move(gameDetails)
    expect(gameDetails).toMatchSnapshot()
  })

})
