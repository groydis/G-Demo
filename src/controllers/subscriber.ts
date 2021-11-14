import { Request, Response } from 'express'
import { asyncHandler } from '../helpers/asyncHandler'
import { SubscriberService } from '../services'

export const returnActiveScubscribers = asyncHandler(async (request: Request, response: Response) => {
  const activeSubscribers = await SubscriberService.findActiveSubscribers()
  response.status(200).json({ activeSubscribers })
})

export const returnSubscriberReport = asyncHandler(async (request: Request, response: Response) => {
  const subscribersReport = await SubscriberService.generateSubscribersReport()
  response.status(200).json({ subscribersReport })
})
