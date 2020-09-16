import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import reducers from './reducers'
import { MovieState, SetFeaturedAction } from './reducers/types'

const persistConfig = {
  key: '@devflix',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export{ store, persistor}
