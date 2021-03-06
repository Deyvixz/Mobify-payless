import React, {PropTypes} from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {getAssetUrl} from 'progressive-web-sdk/dist/asset-utils'
import {GRID_SETTINGS} from '../constants'
import * as selectors from '../selectors'
import {getEmailAddress} from '../../../store/checkout/selectors'

import {Grid, GridSpan} from 'progressive-web-sdk/dist/components/grid'
import Image from 'progressive-web-sdk/dist/components/image'
import Link from 'progressive-web-sdk/dist/components/link'

const CheckoutConfirmationSplash = (props) => {
    const {
        emailAddress,
        orderNumber,
        orderUrl
    } = props

    const OrderNumber = orderUrl
        ? <Link href={orderUrl}><strong>{orderNumber}</strong></Link>
        : <strong>{orderNumber}</strong>

    return (
        <div className="t-checkout-confirmation__splash u-bg-color-neutral-00 u-border-light-bottom">
            <Grid className="u-center-piece">
                <GridSpan
                    className="t-checkout-confirmation__splash-image"
                    {...GRID_SETTINGS}
                >
                    <div className="u-text-align-center u-padding-lg u-text-line-height-0">
                        <Image src={getAssetUrl('static/img/checkout/confirmed.png')} alt="Sparkling checkmark, signifying completion" height="57px" width="99px" />
                    </div>
                </GridSpan>

                <GridSpan
                    className="t-checkout-confirmation__splash-message"
                    {...GRID_SETTINGS}
                >
                    <div className="t-checkout-confirmation__thanks u-padding-bottom-lg">
                        <h1 className="u-margin-bottom-md u-text-lighter u-text-all-caps">
                            <span className="u-text-normal">Thanks,</span> order confirmed
                        </h1>

                        <div className="u-text-content">
                            <p>We’ve sent you an email confirmation along with your order receipt.</p>
                            <p>Your order # is: {OrderNumber}.</p>
                            <p>Email: <strong>{emailAddress}</strong></p>
                        </div>
                    </div>
                </GridSpan>
            </Grid>
        </div>
    )
}

CheckoutConfirmationSplash.propTypes = {
    emailAddress: PropTypes.string,
    orderNumber: PropTypes.string,
    orderUrl: PropTypes.string,
}

const mapStateToProps = createStructuredSelector({
    emailAddress: getEmailAddress,
    orderNumber: selectors.getOrderNumber,
    orderUrl: selectors.getOrderUrl
})

export default connect(mapStateToProps)(CheckoutConfirmationSplash)
