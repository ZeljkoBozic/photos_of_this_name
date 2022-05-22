import React from 'react';
import ContactsList from './ContactsList';
import PropTypes from 'prop-types';

const ContactsView = ({navigation}) => {
  return <ContactsList navigation={navigation} />;
};

ContactsView.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default ContactsView;
