import React from 'react';
import type { FC } from 'react';
import { Link, ConnectProps } from 'umi';
import { connect } from 'dva';
import Count from '../count/index';

interface GlobalModelState {
  text?: string;
  login?: boolean;
}

interface AppProps extends ConnectProps {
  global: GlobalModelState;
}

const App: FC<AppProps> = ({ global, location, dispatch }) => {
  const { pathname } = location;
  console.log(location);
  console.log(pathname);
  return (
    <div>
      <h2>
        {global.text} @ {pathname}
      </h2>
      <Count />
      <br />
      <button
        onClick={() => {
          dispatch?.({
            type: 'global/setText',
          });
        }}
      >
        Set Title
      </button>
      <button
        onClick={() => {
          dispatch?.({
            type: 'global/throwError',
          });
        }}
      >
        Throw error
      </button>
      <br />
      <div>
        <h1>Login Page is {global.login ? 'succesfully' : 'failed'}</h1>
        <button
          onClick={() => {
            dispatch?.({
              type: 'global/login',
            });
          }}
        >
          Login
        </button>
      </div>
      <div>
        <Link to="/list">Go to /list</Link>
      </div>
      <div>
        <Link to="/list/list">Go to /list/list</Link>
      </div>
      <div>
        <Link to="/list/search">Go to /list/search</Link>
      </div>
      <div>
        <Link to="/admin">Go to /admin</Link>
      </div>
      <div>
        <Link to="/delay">Go to /delay</Link>
      </div>
    </div>
  );
};

export default connect(({ global }: { global: GlobalModelState }) => ({
  global,
}))(App);
