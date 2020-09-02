import React, { Fragment } from 'react';
import TranscationTable from './TranscationTable';

const AccountInfo = (props) => {
  const { userInfo, transcations } = props;
  const {
    accountNumber,
    name,
    branch,
    branchCode,
    totalBalance,
    perDayLimit,
  } = userInfo;
  return (
    <Fragment>
      <div className='main-header'>
        <div className='main-header-account-info'>
          <ul className='main-header___list'>
            <li className='main-header___list-item'>Account Number:</li>
            <li className='main-header___list-item'>Name: </li>
            <li className='main-header___list-item'>branch:</li>
            <li className='main-header___list-item'>branchCode:</li>
            <li className='main-header___list-item'>Total Balance:</li>
            <li className='main-header___list-item'>
              Withdarw Limit(per day):
            </li>
          </ul>
        </div>
        <div className='main-header-account-info'>
          <ul className='main-header___list'>
            <li className='main-header___list-item'>{accountNumber}</li>
            <li className='main-header___list-item'>{name}</li>
            <li className='main-header___list-item'> {branch}</li>
            <li className='main-header___list-item'>{branchCode}</li>
            <li className='main-header___list-item'>INR {totalBalance}</li>
            <li className='main-header___list-item'>INR {perDayLimit}</li>
          </ul>
        </div>
      </div>
      <TranscationTable transcations={transcations} />
    </Fragment>
  );
};

export default AccountInfo;
