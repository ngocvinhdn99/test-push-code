import { Effect, Reducer } from 'umi';
import { routerRedux } from 'dva/router';

export interface GlobalModelState {
  text?: string;
  login?: boolean;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    login: Effect;
    throwError: Effect;
  };
  reducers: {
    setText: Reducer<GlobalModelState>;
    signin: Reducer<GlobalModelState>;
  };
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',
  state: {
    text: 'hello umi+dva',
    login: false,
  },
  reducers: {
    setText(state) {
      const newText =
        state?.text === 'setted dva'
          ? 'hi umi + dva from Ngoc Vinh!!!!'
          : 'setted dva';

      console.log(newText);
      return {
        ...state,
        text: newText,
      };
    },
    signin(state) {
      return {
        ...state,
        login: !state?.login,
      };
    },
  },
  effects: {
    *login(action, { call, put }) {
      yield put({
        type: 'signin',
      });
      //   yield put(routerRedux.push('/admin'));
    },
    *throwError() {
      console.log('handle error 1');
      throw new Error('hi error');
    },
  },
};

export default GlobalModel;
