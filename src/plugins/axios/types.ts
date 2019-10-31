interface IError {
    message: string
}

export interface IData {
  errors?: Array<IError>
  data?: Array<any>
}

export interface IUseQuery<T> {
  (query: string, variables?: object): Promise<T>
}
