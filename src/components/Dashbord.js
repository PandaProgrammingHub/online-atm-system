import React, { Component, Fragment } from 'react';
import AccountInfo from './AccountInfo';
import Withdraw from './Withdraw';

const MainComponent = (props) => {
  const {
    actionType,
    userInfo,
    transcations,
    erroValidation,
    erroMsg,
    handleWithdaw,
    handleOnchange,
    handleSelectAccountType,
    accountType,
  } = props;
  switch (actionType) {
    case 'Account Summary':
      return (
        <AccountInfo
          key='Account Summary'
          userInfo={userInfo}
          transcations={transcations}
        />
      );
    case 'Cash Withdrawal':
      return (
        <Withdraw
          key='Cash Withdrawal'
          erroValidation={erroValidation}
          erroMsg={erroMsg}
          handleWithdaw={handleWithdaw}
          handleOnchange={handleOnchange}
          handleSelectAccountType={handleSelectAccountType}
          accountType={accountType}
          transcations={transcations}
        />
      );
    default:
      return <h2>Comming Soon!!</h2>;
  }
};
class Dashbord extends Component {
  constructor(props) {
    super(props);
    this.handleActionMenu = this.handleActionMenu.bind(this);
    this.state = {
      actionType: 'Account Summary',
    };
  }
  handleActionMenu(e, actionType) {
    this.setState({ actionType });
  }

  render() {
    const {
      userInfo,
      erroValidation,
      erroMsg,
      handleWithdaw,
      handleOnchange,
      handleSelectAccountType,
      accountType,
      transcations,
    } = this.props;
    const { accountNumber, name } = userInfo;
    const { actionType } = this.state;

    return (
      <Fragment>
        <div className='grid-container'>
          <header className='header'>
            <div className='header__search'>Account : {accountNumber}</div>
            <div className='header__avatar'>Welcome, {name}!</div>
          </header>

          <aside className='sidenav'>
            <div className='sidenav__close-icon'>
              <i className='fas fa-times sidenav__brand-close' />
            </div>
            <ul className='sidenav__list'>
              <li
                onClick={(e) => this.handleActionMenu(e, 'Account Summary')}
                className={
                  actionType === 'Account Summary'
                    ? 'sidenav__list-item active'
                    : 'sidenav__list-item'
                }
              >
                Account Summary
              </li>
              <li
                onClick={(e) => this.handleActionMenu(e, 'Cash Withdrawal')}
                className={
                  actionType === 'Cash Withdrawal'
                    ? 'sidenav__list-item active'
                    : 'sidenav__list-item'
                }
              >
                Cash Withdrawal
              </li>

              <li
                onClick={(e) => this.handleActionMenu(e, 'Check Balance')}
                className={
                  actionType === 'Check Balance'
                    ? 'sidenav__list-item active'
                    : 'sidenav__list-item'
                }
              >
                Check Balance
              </li>
              <li
                onClick={(e) => this.handleActionMenu(e, 'Fund Transfer')}
                className={
                  actionType === 'Fund Transfer'
                    ? 'sidenav__list-item active'
                    : 'sidenav__list-item'
                }
              >
                Fund Transfer
              </li>
              <li
                onClick={(e) =>
                  this.handleActionMenu(e, 'Fund or Cheque Deposit')
                }
                className={
                  actionType === 'Fund or Cheque Deposit'
                    ? 'sidenav__list-item active'
                    : 'sidenav__list-item'
                }
              >
                Fund or Cheque Deposit
              </li>
              <li
                onClick={(e) => this.handleActionMenu(e, 'Invalid PIN')}
                className={
                  actionType === 'Invalid PIN'
                    ? 'sidenav__list-item active'
                    : 'sidenav__list-item'
                }
              >
                Invalid PIN
              </li>
              <li
                onClick={(e) => this.handleActionMenu(e, 'Bank')}
                className={
                  actionType === 'Bank'
                    ? 'sidenav__list-item active'
                    : 'sidenav__list-item'
                }
              >
                Bank
              </li>
              <li
                onClick={(e) => this.handleActionMenu(e, 'Print Receipt')}
                className={
                  actionType === 'Print Receipt'
                    ? 'sidenav__list-item active'
                    : 'sidenav__list-item'
                }
              >
                Print Receipt
              </li>
            </ul>
          </aside>

          <main className='main'>
            <div className='main-card'>
              <MainComponent
                actionType={actionType}
                userInfo={userInfo}
                transcations={transcations}
                erroValidation={erroValidation}
                erroMsg={erroMsg}
                handleWithdaw={handleWithdaw}
                handleOnchange={handleOnchange}
                handleSelectAccountType={handleSelectAccountType}
                accountType={accountType}
              />
            </div>
          </main>

          <footer className='footer'>
            <div className='footer__copyright'>&copy; 2020</div>
            <div className='footer__signature'>Developed By: Santosh Panda</div>
          </footer>
        </div>
      </Fragment>
    );
  }
}

export default Dashbord;
