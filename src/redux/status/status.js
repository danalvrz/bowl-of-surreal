const statusInitialState = 'OK';

const responseStatus = (state = statusInitialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return action.type;
    case 'OK':
      return action.type;
    case 'ERROR':
      return action.type;
    default:
      return state;
  }
};

export default responseStatus;
