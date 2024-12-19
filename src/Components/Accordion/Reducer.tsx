type ActionType = {
    type: string;
  };
  
 export const TOGGLE_COLLAPSE = "TOGLE-COLLAPSED";
  
 export type StateType = {
    collapsed: boolean;
  };
  
  export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
      case TOGGLE_COLLAPSE:
        return { ...state, collapsed: !state.collapsed };
      default:
        throw new Error("Bad action type");
    }
    return state;
  };
  
  //   if (action.type === TOGGLE_COLLAPSE) {
  //     return !state;
  //   }
  //   return state;
  // };