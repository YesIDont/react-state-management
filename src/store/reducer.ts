type State = {
  clicks: number;
}

type Action = {
  type: string;
  payload: number;
}

export const defaultState = {
  clicks: 0,
  userNamer: '',
}

const ACTIONS = {
  ICREMENT: 'ICREMENT'
}

export const reducer = (state: State, action: Action) => {
  switch(action.type) {
    case ACTIONS.ICREMENT:
      return {
        ...state,
        clicks: action.payload
      }

      default:
        return state;
  }
}
