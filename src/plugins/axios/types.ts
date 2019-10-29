interface IError {
    message: String
}

export interface IData {
  errors?: Array<IError>
  data?: Array<any>
}

export interface IUseQuery<T> {
  (query: String, variables?: Object): Promise<T>
}
