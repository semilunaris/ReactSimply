import { TOGGLE_COLLAPSE, reducer } from "./Reducer"
import type  {StateType} from './Reducer'


test('reducer should change to opposite value', ()=>{
    // data
 const state: StateType = {
    collapsed: false
 }

    // action
const newState = reducer(state, {type: TOGGLE_COLLAPSE})


    // expectation

    expect(newState.collapsed).toBe(false)
})