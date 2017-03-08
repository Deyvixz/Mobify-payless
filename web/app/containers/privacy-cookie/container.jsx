import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectorToJS} from '../../utils/selector-utils'

import {getTitle, getText} from './selectors'
// import * as privacyCookieActions from './actions'

const containerClass = 't-privacy-cookie'
const titleClass = `${containerClass}__title`

const PrivacyCookie = ({title, text}) => (
    <div className={containerClass}>
        <h1 className={titleClass}>{title}</h1>
        <div className={titleClass}>{text}</div>
       
    </div>
)

PrivacyCookie.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string
}

// Only wrap compound data (arrays and objects) in selectorToJS
const mapStateToProps = createStructuredSelector({
    text: getText,
    title: getTitle
})

const mapDispatchToProps = {
    // setTitle: privacyCookieActions.setTitle
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivacyCookie)
