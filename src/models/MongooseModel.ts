import { Model, FilterQuery } from 'mongoose'
import { DataObject } from '../interfaces/models/QueryObjecMongoose'

export class MongooseModel<T> implements DataObject<T> {
  collectionModel: Model<T>

  constructor (model: Model<T>) {
    this.collectionModel = model
  }

  async findOne (
    filterQuery: FilterQuery<T>,
    projection?: string | Object | string[],
    options?: Object
  ): Promise<T> {
    return this.collectionModel.findOne(filterQuery, projection, options).lean()
  }

  async findAll (
    filterQuery: FilterQuery<T>,
    projection?: string | Object | string[],
    options?: Object
  ): Promise<T[]> {
    return this.collectionModel.find(filterQuery, projection, options).lean()
  }

  async findById (
    id: Object,
    projection?: string | Object | string[],
    options?: Object
  ): Promise<T> {
    return this.collectionModel.findById(id, projection, options).lean()
  }

  async count (filterQuery: FilterQuery<T>): Promise<number> {
    return this.collectionModel.countDocuments(filterQuery).lean()
  }
}
