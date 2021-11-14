import { Request, Response } from 'express'
import { asyncHandler } from '../helpers/asyncHandler'
import { GameService } from '../services'

export const returnAllGames = asyncHandler(async (request: Request, response: Response) => {
  const games = await GameService.findAllGames()
  response.status(200).json({ games })
})

export const returnWinners = asyncHandler(async (request: Request, response: Response) => {
  const winners = await GameService.findAllWinners()
  response.status(200).json({ winners })
})
