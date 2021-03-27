/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { letterHtmlSubscribe, letterSubjectSubscribe } from '../../../store/general';
import createNewSubscribe from '../../../store/createSubscribe/middleware';
import StyledSubscribedBlock from './StyledNotSubscribedUser';

const NotSubscribed = connect(null, {createNewSubscribe})(({
  email,
  setIsSubscribed, createNewSubscribe
}) => {
  const addSubscriber = async (email, letterSubject, letterHtml) => {
    const result = await createNewSubscribe({email, letterSubject, letterHtml})
    if (!result && result.status !== 200) return
    setIsSubscribed(() => true)
  }
  return (
    <StyledSubscribedBlock>
      <p>
        You don't subscribe to our newsletter.
      </p>
      <button
        type="submit"
        onClick={() => addSubscriber(email, letterSubjectSubscribe, letterHtmlSubscribe)}
      >
        Subscribe
      </button>
    </StyledSubscribedBlock>
  );
})
NotSubscribed.propTypes = {
  createNewSubscribe: PropTypes.func
}
export default NotSubscribed;