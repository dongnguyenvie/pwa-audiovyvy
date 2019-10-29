export interface RootState {
    allSettings: Object
}
export enum Action {
    FetchAllSettings = 'FETCH_ALL_SETTINGS'
}

export enum Getter {
    allSettings = 'All_SETTINGS'
}

export enum Multation {
    SetAllSettings = 'SET_ALL_SETTINGS'
}
