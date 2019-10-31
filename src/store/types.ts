export interface RootState {
    allSettings: object,
    categories: Array<object>
}
export enum Action {
    FetchAllSettings = 'FETCH_ALL_SETTINGS',
    FetchCategories = 'FETCH_CATEGORIES'
}

export enum Getter {
    AllSettings = 'ALL_SETTINGS',
    AllCategories = 'ALL_CATEGORIES'
}

export enum Multation {
    SetAllSettings = 'SET_ALL_SETTINGS',
    SetCategories = 'SET_ALL_CATEGORIES'
}
