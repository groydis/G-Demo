import { Pool, QueryResult } from 'pg'
import { DataObject } from '../interfaces/models/QueryObjectPostgres'

export class PostgresModel<T> implements DataObject<T> {
  client: Pool

  constructor (client: Pool) {
    this.client = client
  }

  async findOne (
    table: string,
    where?: string
  ): Promise<T> {
    try {
      let queryText: string = `SELECT * FROM ${table} LIMIT 1`
      if (where) {
        queryText = `SELECT * FROM ${table} ${where} LIMIT 1`
      }
      const query: QueryResult = await this.client.query(queryText)
      const result: T = query.rows[0]
      return result
    } catch (error) {
      console.info(error)
      return error
    }
  }

  async findAll (
    table: string,
    where?: string
  ): Promise<T[]> {
    try {
      let queryText: string = `SELECT * FROM ${table}`
      if (where) {
        queryText = `SELECT * FROM ${table} ${where}`
      }
      const query: QueryResult = await this.client.query(queryText)
      const result: T[] = query.rows
      return result
    } catch (error) {
      console.info(error)
      return error
    }
  }

  async findById (
    table: string,
    id: string
  ): Promise<T> {
    const queryText: string = `SELECT * FROM ${table} where id = ${id}`
    const query: QueryResult = await this.client.query(queryText)
    console.info(query)
    const result: T = query.rows[0]
    return result
  }

  async count (
    table: string,
    where?: string
  ): Promise<number> {
    let queryText: string = `SELECT COUNT(*) FROM ${table}`
    if (where) {
      queryText = `SELECT COUNT(*) FROM ${table} ${where}`
    }
    const query: QueryResult = await this.client.query(queryText)
    console.info(query)
    const result: number = 1
    return result
  }
}
