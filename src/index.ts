import { IGameDetails } from './GameRunner.d'
import GameRunner from './GameRunner'
const readline = require('readline')
const rl = readline.createInterface(process.stdin, process.stdout)

let gameDetails: IGameDetails = {
  positionX: NaN,
  positionY: NaN,
  faceDirection: ''
}

GameRunner.PLAYGROUNDSIZE = 5

let placeFlag = false
rl.setPrompt('Enter your choice please (PLACE X,Y,Face direction | EXIT): > ')
rl.prompt()
rl.on('line', (line) => {
  if (!placeFlag) {
    if (/^PLACE [0-9]+,[0-9]+,[A-Z]$/.test(line)) {
      try {
        const placeParams = line.split(' ')[1].split(',')
        gameDetails.positionX = parseInt(placeParams[0] as string, 10)
        gameDetails.positionY = parseInt(placeParams[1] as string, 10)
        gameDetails.faceDirection = placeParams[2] as string
        gameDetails = GameRunner.play(gameDetails, 'PLACE')
        rl.setPrompt('Enter your choice please (PLACE X,Y,Face direction | MOVE | RIGHT | LEFT | REPORT | EXIT): > ')
        placeFlag = true
      } catch (error) {
        console.log(error)
      }
    } else if (line === 'EXIT') {
      rl.close()
    } else {
      console.log('Still do not know this command!: ', line)
    }
  } else {
    try {
      switch (line) {
        case 'MOVE':
          gameDetails = GameRunner.play(gameDetails, 'MOVE')
          console.log('You entered MOVE.')
          break
        case 'RIGHT':
          gameDetails = GameRunner.turnRight(gameDetails)
          console.log('You entered RIGHT.')
          break
        case 'LEFT':
          gameDetails = GameRunner.turnLeft(gameDetails)
          console.log('You entered LEFT.')
          break
        case 'REPORT':
          gameDetails = GameRunner.play(gameDetails, 'REPORT')
          console.log('You entered REPORT.')
          break
        case 'EXIT':
          rl.close()
          break
        default:
          if (/^PLACE [0-9]+,[0-9]+,[A-Z]$/.test(line)) {
            const placeParams = line.split(' ')[1].split(',')
            // gameDetails.positionX = parseInt(placeParams[0])
            console.log('placeParams: ', placeParams)
            gameDetails = GameRunner.play(gameDetails, 'PLACE')
            console.log('You entered PLACE.')
          } else {
            console.log('Still do not know this command!: ', line)
          }
      }
    } catch (error) {
      console.log(error)
    }

  }
  rl.prompt()
}).on('close', () => {
  process.exit(0)
})
