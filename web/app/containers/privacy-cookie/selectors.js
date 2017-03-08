import Immutable from 'immutable'
import {createSelector} from 'reselect'
import {createGetSelector} from '../../utils/selector-utils'
import {getUi} from '../../store/selectors'

export const getPrivacyCookie = createSelector(
    getUi,
    ({privacyCookie}) => privacyCookie
)

export const getTitle = createGetSelector(getPrivacyCookie, 'title', 'Privacy')
export const getText = createGetSelector(getPrivacyCookie, 'text')
