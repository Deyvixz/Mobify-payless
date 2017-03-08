import {handleActions} from 'redux-actions'
import Immutable from 'immutable'
import {mergePayloadForActions} from '../../utils/reducer-utils'
import * as privacyCookieActions from './actions'

const initialState = Immutable.Map()

export default handleActions({
    ...mergePayloadForActions(
        privacyCookieActions.receiveData,
        privacyCookieActions.changeTitle
    )
}, initialState)
