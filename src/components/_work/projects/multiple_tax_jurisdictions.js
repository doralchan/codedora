import React, { Component } from 'react';
import Modal from '../../modal';

class MultipleTaxJurisdictions extends Component {
  render() {
    return (
      <Modal
        title='Multiple Tax Jurisdictions'
        handleClose={ this.props.closeModal }
        primaryCTA='Done'
        >
        This is supposed to be a modal
      </Modal>
    )
  }
}

export default MultipleTaxJurisdictions;
