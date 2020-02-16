import React, { useState } from 'react';
import TechSelectOptions from '../techs/TechSelectOptions';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ addLog }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter the first and last name' });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      };

      //addLog(newLog);

      M.toast({ html: `Log added by ${tech}` });

      // Clear Fields
      setFirstName('');
      setLastName('');
      setAttention(false);
    }
  };

  //   onChange is an inline function
  //    checked box uses state field 'attention'
  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue waves-light btn'>
          Enter
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addLog: PropTypes.func.isRequired
};

export default AddTechModal;
//export default connect(null, { addLog })(AddLogModal);
