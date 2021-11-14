import { UserModel } from './users'
import { SubscriberModel } from './subscribers'
import { GameModel } from './games'

import { UserDALModel } from './users/dal'
import { SubscriberDALModel } from './subscribers/dal'

export const userModel = new UserModel(UserDALModel)
export const subscriberModel = new SubscriberModel(SubscriberDALModel)
export const gameModel = new GameModel()
