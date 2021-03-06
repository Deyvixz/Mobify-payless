import React from 'react'
import {CHECKOUT_CONFIRMATION_MODAL} from '../constants'
import {closeModal} from '../../../store/modals/actions'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {getAssetUrl} from 'progressive-web-sdk/dist/asset-utils'
import {isModalOpen} from '../../../store/selectors'
import {stripEvent} from '../../../utils/utils'

import Button from 'progressive-web-sdk/dist/components/button'
import Image from 'progressive-web-sdk/dist/components/image'
import Sheet from 'progressive-web-sdk/dist/components/sheet'

const CheckoutConfirmationModal = (props) => {
    const {
        closeCheckoutConfirmationModal,
        isOpen,
    } = props

    return (
        <div className="t-checkout-confirmation__temp">
            <Sheet
                className="t-checkout-confirmation__account-created-modal pw--no-shadow"
                open={isOpen}
                onDismiss={closeCheckoutConfirmationModal}
                maskOpacity={0.7}
                coverage="90%"
                effect="modal-center"
                shrinkToContent={true}
            >
                <div className="u-padding-md u-text-align-center">
                    <div className="u-padding-top-lg u-padding-bottom-lg u-margin-bottom u-text-align-center">
                        <Image
                            src={getAssetUrl('static/img/checkout/account-created.png')}
                            alt="Sparkling user indicating account creation"
                            height="71px"
                            width="104px"
                        />
                    </div>

                    <p className="u-margin-bottom-lg u-h5">
                        <strong>Account Created Successfully</strong>
                    </p>

                    <p className="u-margin-bottom-lg">
                        Welcome to the family. You can now track this order in My Account.
                    </p>

                    <Button
                        className="c--tertiary u-width-full u-text-uppercase"
                        onClick={closeCheckoutConfirmationModal}
                    >
                        Ok
                    </Button>
                </div>
            </Sheet>
        </div>
    )
}

CheckoutConfirmationModal.propTypes = {
    /**
     * A function used to set the Confirmation page's "Save Your Details" modal
     * state to closed
     */
    closeCheckoutConfirmationModal: React.PropTypes.func,

    /**
     * Whether the modal is open or not
     */
    isOpen: React.PropTypes.bool,
}

const mapStateToProps = createStructuredSelector({
    isOpen: isModalOpen(CHECKOUT_CONFIRMATION_MODAL)
})

const mapDispatchToProps = {
    closeCheckoutConfirmationModal: stripEvent(() => closeModal(CHECKOUT_CONFIRMATION_MODAL)),
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutConfirmationModal)
