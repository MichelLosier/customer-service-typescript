export interface DatabaseClient<T> {
  findMany(args?: any): Promise<T[]>;
  findUnique(args: any): Promise<T | null>;
}
