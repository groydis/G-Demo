import { Request, Response } from 'express'
import { asyncHandler } from '../helpers/asyncHandler'
import { UserService } from '../services'

export const returnUser = asyncHandler(async (request: Request, response: Response) => {
  const { email } = request.params
  const user = await UserService.findByEmail(email)
  response.status(200).json({ user })
})

export const returnFriends = asyncHandler(async (request: Request, response: Response) => {
  const { email } = request.params
  const user = await UserService.findByEmail(email)
  const friends = await UserService.findFriends(user.friends)
  response.status(200).json({ friends })
})
