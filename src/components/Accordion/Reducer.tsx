export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"
type ActionType = {
    type: string
}
export const reducer = (state: boolean, action: ActionType) => {
    switch (action.type) {
        case TOGGLE_COLLAPSED: {
            return !state
        }
        default:
            throw new Error('Bad action type')
    }

}