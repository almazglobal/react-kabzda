import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test("reducer should change value to opposite value", () => {
    const state: StateType = {
        collapsed: false,
    }
    const newState = reducer(state, {type: TOGGLE_COLLAPSED})
    expect(newState.collapsed).toBe(true)
})

test("reducer should throw error because type is incorrect", () => {
    const state: StateType = {
        collapsed: false,
    }
    expect(() => reducer(state, {type: 'FAKE'})).toThrowError()
})