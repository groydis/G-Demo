export interface DataObject<T> {
  findOne (
    table: string,
    where?: string,
    options?: string,
  ): Promise<T>

  findAll (
    table: string,
    where?: string,
    options?: string,
  ): Promise<T[]>

  findById (
    table: string,
    id: string,
    where?: string,
  ): Promise<T>

  count (
    table: string,
    where?: string,
  ): Promise<number>
}
