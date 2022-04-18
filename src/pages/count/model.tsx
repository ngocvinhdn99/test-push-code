import { Reducer, Subscription } from 'umi';

interface CountModelType {
  namespace: 'count';
  state: number;
  reducers: {
    increase: Reducer<number>;
    decrease: Reducer<number>;
  };
  subscriptions: {
    setup: Subscription;
  };
}

const CountModel: CountModelType = {
  namespace: 'count',
  state: 0,
  reducers: {
    increase(state) {
      console.log('increase');
      return state! + 1;
    },
    decrease(state) {
      console.log('decrease');
      return state! - 1;
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({}) => {
        console.log('test subscriptions');
        console.log(history);
      });
    },
  },
};

export default CountModel;
