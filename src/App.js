import React from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';

import Routes from '~/routes';

export default function App() {
  const SignedIn = useSelector((state) => state.auth.signed);

  const barStyle = SignedIn ? 'dark-content' : 'light-content';
  const backgroundColor = SignedIn ? '#fff' : '#7159c1';

  return (
    <>
      <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
      <Routes SignedIn={SignedIn} />
    </>
  );
}
