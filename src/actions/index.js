import { asyncAdd } from '../utils/request'

export const CHANGE = 'CHANGE';
export const REQUEST = 'REQUEST';
export const RECEIVE = 'RECEIVE';

export const createChangeAction = (val) => {
  return {
    type: CHANGE,
    payload: val
  }
}

const _createRequestAction = () => {
  return {
    type: REQUEST,
    payload: null
  }
}

const _createReceiveAction = (val) => {
  return {
    type: RECEIVE,
    payload: val
  }
}

/**
 * 这个异步actionCreator返回了一个aysnc function而不是{...}
 * 所以需要用到thunk中间件，让redux支持dispatch一个function并执行它。
 * (原生的redux直接dispath非{}的值时会跑错的)
 * @param {*} val 
 */
export const createAsyncAddAction = (val) => async (dispatch, getState) => {
  dispatch(_createRequestAction());
  const { countData } = getState();
  const res = await asyncAdd(val, countData?.data);
  dispatch(_createReceiveAction(res));
}