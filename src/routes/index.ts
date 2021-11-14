import { Router } from 'express'

import * as systemController from '../controllers/system'
import * as userController from '../controllers/user'
import * as subscriberController from '../controllers/subscriber'
import * as gamesController from '../controllers/game'

const version: string = 'v1'
const baseURL: string = `/:version(${version})`

/**
 * Set routes
 *
 * @param router
 * @return {Router}
 */
export const routes = (router: Router): Router => {
  router.get('/healthCheck', systemController.healthCheck)
  router.get(`${baseURL}/users/:email`, userController.returnUser)
  router.get(`${baseURL}/users/:email/friends`, userController.returnFriends)
  router.get(`${baseURL}/subscribers/active`, subscriberController.returnActiveScubscribers)
  router.get(`${baseURL}/subscribers/report`, subscriberController.returnSubscriberReport)
  router.get(`${baseURL}/games`, gamesController.returnAllGames)
  router.get(`${baseURL}/games/winners`, gamesController.returnWinners)
  return router
}
