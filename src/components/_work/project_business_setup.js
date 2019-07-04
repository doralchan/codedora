import React, { Component } from 'react';
import Modal from '../modal';

class BusinessSetup extends Component {
  render() {
    return (
      <Modal
        title='Business Setup'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='The Problem'>
          Gathering tax information from employers has proven to be one of the most challenging steps to onboarding. Not only is there a substantial drop off rate, but there is sufficient evidence the numbers entered are made up to get past this step. See an example of Pennsylvania below. This problem is compounded when we work towards offering employers the ability to enter multiple state tax jurisdictions.
        </Modal.Detail>
        <Modal.Detail subtitle='Research'>
          After working with the operations team and customer support, we discovered a list of common scenarios. The employers who ended up with failed tax filings had either not registered with the proper state agencies, were still waiting to receive their account numbers, are currently not eligible or used an inactive state account number from a previous business. It became clear employers needed more information about what to do with each respective status.
        </Modal.Detail>
        <Modal.Detail subtitle='The Solution'>
          State governments are not modern or consistent. Within each state government can be 2-20 agencies that an employer must register with to stay compliant. By organizing these inputs by agency, we are highlighting who and where these account numbers can be obtained, and whether if they even apply. Creating these affordances increases the likeliness a user will enter the correct data or seek the proper help to do so.
        </Modal.Detail>
      </Modal>
    )
  }
}

export default BusinessSetup;
