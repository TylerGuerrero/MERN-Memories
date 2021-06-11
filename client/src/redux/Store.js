import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import { rootReducer } from './RootReducer'

const logger = createLogger()
const middleware = [logger, thunk]

export const store = (rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)