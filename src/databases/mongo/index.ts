import * as mongoose from 'mongoose'

export const connect = () => {
  try {
    mongoose.connect(
      `mongodb://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_HOST}/${process.env.MONGO_DB_NAME}`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    console.info('Mongo DB: Connected')
  } catch (error: any) {
    console.error(`Can't connect to database! Reason: "${error.message}". Shutting down...`)
    process.exit(1)
  }
}
