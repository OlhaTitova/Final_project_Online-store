import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setShowModal } from '../../../store/dashBoardModal/middleware';
import { BlockInfo, TextInfo } from '../StyledDashBoard';
import Modal from '../DashBoardModal/DashBoardModal';

const PasswordInfoChange = connect(null, {setShowModal})(({ setShowModal, info }) => (
  <BlockInfo>
    <h4>Contact Information</h4>
    <div>
      <TextInfo>
        <p>
          <span style={{fontSize: '18px', fontWeight: '600'}}>First Name:</span>
          {' '}
          {info.firstName}
        </p>
        <p>
          <span style={{fontSize: '18px', fontWeight: '600'}}>Last Name:</span>
          {' '}
          {info.lastName}
        </p>
        <p>
          <span style={{fontSize: '18px', fontWeight: '600'}}>Phone:</span>
          {' '}
          {info.telephone}
        </p>
      </TextInfo>
      <div>
        <button
          type="submit"
          id="setInfo"
          data-testid="setInfo"
          onClick={(e) => setShowModal(e.target.id)}
        >
          Edit
        </button>
        <button
          type="submit"
          id="setPassword"
          onClick={(e) => setShowModal(e.target.id)}
        >
          Change Password
        </button>
        <Modal title />

      </div>
    </div>
  </BlockInfo>
))

PasswordInfoChange.propTypes = {
  setShowModal: PropTypes.func,
  info: PropTypes.instanceOf(Object),
}
export default PasswordInfoChange;