import React from 'react';
import Link from 'next/link';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';

import getCity from '../src/City/City.actions';
import initialStore from '../src/store';

import Page from '../src/Layout/Page';
import City from '../src/City/City';

const Index = ({ getCity, city }) => (
  <Page title="Teste de NextJS + Redux + Promises">
    <Link href="/about">
      <a href="/about">
        <h2>About</h2>
      </a>
    </Link>
    <button onClick={() => getCity('01001000')}>get city</button>
    <City city={city} />
  </Page>
);

Index.getInitialProps = async ({ store, isServer }) => {
  console.log('isServer: ', isServer);
  await store.dispatch(getCity(isServer ? '06020194' : '06246000'));
  const { city } = store.getState();
  return { city };
};

const mapDispatchToProps = dispatch => bindActionCreators({ getCity }, dispatch);
export default withRedux(initialStore, null, mapDispatchToProps)(Index);
