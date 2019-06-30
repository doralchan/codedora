import React, { Component } from 'react';
import Modal from '../../modal';

class TimecardIntegrations extends Component {
  render() {
    return (
      <Modal
        title='Timecard Integrations'
        handleClose={ this.props.closeModal }
        primaryCTA='Done'
        >
        This is supposed to be a modal
      </Modal>
    )
  }
}

export default TimecardIntegrations;
