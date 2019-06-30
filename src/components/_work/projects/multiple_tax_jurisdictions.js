import React, { Component } from 'react';
import Modal from '../../modal';

import Mapping1 from '../../../assets/mapping_1.svg';
import Mapping2 from '../../../assets/mapping_2.svg';
import Mapping3 from '../../../assets/mapping_3.svg';

class MultipleTaxJurisdictions extends Component {
  render() {
    return (
      <Modal
        title='Multiple Tax Jurisdictions'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Pain Point'>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
        </Modal.Detail>
        <Modal.Image imgSrc={ Mapping1 } />
        <Modal.Detail subtitle='Project Goal'>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
        </Modal.Detail>
        <Modal.Image imgSrc={ Mapping2 } />
        <small>
          Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell pepper artichoke.
        </small>
        <Modal.Image imgSrc={ Mapping3 } />
      </Modal>
    )
  }
}

export default MultipleTaxJurisdictions;
