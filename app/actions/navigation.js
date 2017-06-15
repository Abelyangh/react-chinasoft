import { goBack as back, push} from 'react-router-redux';

export function goBack(){
  return (dispatch, getState) => {
    dispatch(back())
  }
}


