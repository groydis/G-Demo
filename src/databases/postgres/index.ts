import { Pool } from 'pg'

export const createPool = (): Pool => {
  const pool: Pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'demouser',
    database: 'demo',
    password: 'gYpfHMzB96',
  })
  return pool
}
