export interface QueryError {
  type: QueryErrorType;
  message: string;
}

export enum QueryErrorType {
  MAX_RECURSIVE_SELECTION_DEPTH = "MAX_RECURSIVE_SELECTION_DEPTH",
}
