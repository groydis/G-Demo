import { Schema, model } from 'mongoose'
import { user } from '../../../@types/models'

const schema = new Schema<user>({
  id: { type: String },
  index: { type: Number },
  guid: { type: String },
  isActive: { type: Boolean },
  picture: { type: String },
  age: { type: Number },
  eyeColor: { type: String },
  name: { type: String },
  gender: { type: String },
  company: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  about: { type: String },
  registered: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  tags: { type: Array },
  friends: { type: Array },
  greeting: { type: String },
  favoriteFruit: { type: String },
})

export const UserDALModel = model<user>('Users', schema)
