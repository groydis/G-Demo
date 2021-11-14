import { Schema, model } from 'mongoose'
import { subscriber } from '../../../@types/models'

const schema = new Schema<subscriber>({
  name: { type: String },
  email: { type: String },
  subscribed: { type: Boolean },
})

export const SubscriberDALModel = model<subscriber>('Subscribers', schema)
