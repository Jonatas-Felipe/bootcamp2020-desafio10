import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `deliveryman/${id}`);

    const entregador = response.data;
    const signedIn = true;

    yield put(signInSuccess(signedIn, entregador));
  } catch (err) {
    const { response } = err;

    const error =
      response.status === '500'
        ? 'Verifique sua conexão com a internet'
        : response.data.error;

    Alert.alert('Falha no login', error);

    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
