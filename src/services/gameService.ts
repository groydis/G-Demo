import { gameModel, userModel } from '../models'
import { game, user } from '../@types/models'

export class GameService {
  static findAllGames = (): Promise<game[]> => gameModel.findAll('games')

  static findGameById = (id: string): Promise<game> => gameModel.findById('game', id)

  static findAllWinners = async (): Promise<any> => {
    const allGames: game[] = await gameModel.findAll('games')
    const winnerIds: string[] = Object.values(allGames).map((gamedata) => gamedata.winner)
    const winnerDetails = await winnerIds.map((value) => userModel.findAll({ guid: value }))
    const winners: user[][] = await Promise.all(winnerDetails)
    return winners.flat()
  }
}
