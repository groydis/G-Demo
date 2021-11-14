// import { CustomModel } from '../customModel'
import { game } from '../../@types/models'
import { PostgresModel } from '../PostgresModel'
import { createPool } from '../../databases/postgres'

export class GameModel extends PostgresModel<game> {
  constructor () {
    const client = createPool()
    super(client)
  }

  async testAll (): Promise<any> {
    const query = await super.client.query('SELECT * FROM games')
    return query
  }

  async testOne (): Promise<any> {
    const query = await super.client.query('SELECT * FROM games LIMIT 1')
    return query
  }
}
