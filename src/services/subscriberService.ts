import { subscriber, subscriberReport } from '../@types/models'
import { subscriberModel } from '../models'

export class SubscriberService {
  static findByEmail = (email: string): Promise<subscriber | undefined> => subscriberModel.findOne({ email })

  static findActiveSubscribers = (): Promise<subscriber[] | undefined> => subscriberModel.findAll({ subscribed: true })

  static countSubscribers = (active: boolean): Promise<number> => subscriberModel.count({ subscriber: active })

  static generateSubscribersReport = async (): Promise<subscriberReport> => {
    const activeCount: number = await this.countSubscribers(true)
    const inactiveCount: number = await this.countSubscribers(false)
    const report: subscriberReport = {
      activeCount,
      inactiveCount,
    }
    return report
  }
}
