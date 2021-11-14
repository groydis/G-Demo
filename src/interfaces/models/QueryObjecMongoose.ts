export interface DataObject<T> {
  findOne (
    filterQuery: Object,
    projection?: Object | string | string[],
    options?: Object,
  ): Promise<T>

  findAll (
    filterQuery: Object,
    projection?: Object | string | string[],
    options?: Object,
  ): Promise<T[]>

  findById (
    id: string,
    projection?: Object | string | string[],
    options?: Object,
  ): Promise<T>

  count (
    filterQuery: Object
  ): Promise<number>
}
