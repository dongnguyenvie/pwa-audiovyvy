export interface IFilter {
    (parameter: {
        settings: object
    }): void
}