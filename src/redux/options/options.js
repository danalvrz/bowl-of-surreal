const optionsInitialState = { show: false };

const optionsStatus = (state = optionsInitialState, action) => {
  switch (action.type) {
    case 'SHOW':
      return { ...state, show: true };
    case 'HIDE':
      return { ...state, show: false };
    default:
      return state;
  }
};

export default optionsStatus;
