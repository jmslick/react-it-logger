import React, { useState, useEffect } from 'react';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No logs to show...</p>
      ) : (
        // logs.map(log => <LogItem log={log} key={log.id} />)
        logs.map(log => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

// prop : what to get from the state
// the state.log pertains to the log prop defined in the redux root reducer in index.js.
const mapStateToProps = state => ({
  log: state.log
});

// use connect for Redux
/**
 *  when bring in getLogs action here, the action is now a prop.
 * So can declare getLogs as a prop above (line 8).
 */
export default connect(mapStateToProps, { getLogs })(Logs);
