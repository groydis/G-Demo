import { user, friend } from '../@types/models'
import { userModel } from '../models'

export class UserService {
  static findByEmail = (email: string): Promise<user | undefined> => userModel.findOne({ email })

  static findByIndex = (index: number): Promise<user | undefined> => userModel.findOne({ index })

  static findFriends = async (usersFriends: friend[]): Promise<user[]> => {
    const mapFriends: Promise<user>[] = Object.values(usersFriends).map(async ({ id }) => this.findByIndex(id))
    const friends: user[] = await Promise.all(mapFriends)
    return friends
  }
}
