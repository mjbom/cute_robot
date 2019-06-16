import GameRunner from './GameRunner'
import { IGameDetails } from './GameRunner.d'

describe('GameRunner Class', () => {
  it('tests play method with MOVE action', () => {
    let gameDetails: IGameDetails = {
      positionX: 0,
      positionY: 0,
      faceDirection: 'N'
    }
    gameDetails = GameRunner.play(gameDetails, 'MOVE')
    expect(gameDetails.positionX).toBe(0)
    expect(gameDetails.positionY).toBe(1)
    expect(gameDetails).toMatchSnapshot()
    gameDetails = GameRunner.play(gameDetails, 'MOVE')
    expect(gameDetails).toMatchSnapshot()
    gameDetails = GameRunner.play(gameDetails, 'MOVE')
    expect(gameDetails).toMatchSnapshot()
    gameDetails = GameRunner.turnRight(gameDetails)
    gameDetails = GameRunner.play(gameDetails, 'MOVE')
    expect(gameDetails).toMatchSnapshot()
  })

  it('tests play method with PLACE action', () => {
    let gameDetails: IGameDetails = {
      positionX: 0,
      positionY: 0,
      faceDirection: 'N'
    }
    gameDetails = GameRunner.play(gameDetails, 'PLACE')
    expect(gameDetails).toMatchSnapshot()
    gameDetails.positionX = 4
    gameDetails.positionY = 3
    gameDetails.faceDirection = 'W'
    gameDetails = GameRunner.play(gameDetails, 'PLACE')
    expect(gameDetails).toMatchSnapshot()
    gameDetails.positionX = 10
    try {
      GameRunner.play(gameDetails, 'PLACE')
    } catch (error) {
      expect(error).toBe('Bad PLACE settings')
    }
  })

  it('tests play method with REPORT action', () => {
    let gameDetails: IGameDetails = {
      positionX: 3,
      positionY: 3,
      faceDirection: 'S'
    }
    gameDetails = GameRunner.play(gameDetails, 'REPORT')
    expect(gameDetails).toMatchSnapshot()
    gameDetails.positionX = 0
    gameDetails.positionY = 0
    gameDetails.faceDirection = 'E'
    gameDetails = GameRunner.play(gameDetails, 'REPORT')
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
    expect(GameRunner.isRobotMovable(gameDetails)).toBe(false)
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

  it('tests turnRight method', () => {
    let gameDetails: IGameDetails = {
      positionX: 0,
      positionY: 0,
      faceDirection: 'N'
    }
    gameDetails = GameRunner.turnRight(gameDetails)
    expect(gameDetails).toMatchSnapshot()
    gameDetails = GameRunner.turnRight(gameDetails)
    expect(gameDetails).toMatchSnapshot()
    gameDetails = GameRunner.turnRight(gameDetails)
    expect(gameDetails).toMatchSnapshot()
    gameDetails = GameRunner.turnRight(gameDetails)
    expect(gameDetails).toMatchSnapshot()
  })

  it('tests turnLeft method', () => {
    let gameDetails: IGameDetails = {
      positionX: 3,
      positionY: 3,
      faceDirection: 'N'
    }
    gameDetails = GameRunner.turnLeft(gameDetails)
    expect(gameDetails).toMatchSnapshot()
    gameDetails = GameRunner.turnLeft(gameDetails)
    expect(gameDetails).toMatchSnapshot()
    gameDetails = GameRunner.turnLeft(gameDetails)
    expect(gameDetails).toMatchSnapshot()
    gameDetails = GameRunner.turnLeft(gameDetails)
    expect(gameDetails).toMatchSnapshot()
  })

})
