import React, { Component, Fragment } from 'react';
import uuid from 'react-uuid';
import Login from './Login';
import Dashbord from './Dashbord';
import '../styles.css';

class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
    this.handleWithdaw = this.handleWithdaw.bind(this);
    this.handleSelectAccountType = this.handleSelectAccountType.bind(this);
    this.handleOnchange = this.handleOnchange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      isLoadingLogin: false,
      erroValidation: false,
      erroMsg: null,
      isLogin: false,
      withdrawAmount: 0,
      accountType: null,
      transcations: [],
      userInfo: {
        name: '',
        accountNumber: null,
        branch: '',
        branchCode: null,
        perDayLimit: null,
        totalBalance: null,
        remaining: null,
      },
    };
  }
  handleSelectAccountType(e) {
    this.setState({
      accountType: e.value,
      erroValidation: false,
      erroMsg: null,
    });
  }
  handleWithdaw(e, withdrawAmt) {
    e.preventDefault();
    let amount = parseInt(withdrawAmt);
    let withdrawAmount = parseInt(this.state.withdrawAmount);
    console.log('withdrawAmt=>', amount);
    console.log('withdrawAmount=>', this.state.withdrawAmount);
    if (this.state.accountType !== null) {
      if (amount > 0) {
        if (withdrawAmount < 10000) {
          let remaining = this.state.userInfo.remaining - amount;
          if (remaining > 0) {
            this.setState(
              {
                userInfo: {
                  ...this.state.userInfo,
                  totalBalance: remaining,
                  remaining: remaining,
                },
                withdrawAmount: withdrawAmount + amount,
              },
              () => {
                let transcations = this.state.transcations;
                let transcationObj = {
                  transcationId: uuid(),
                  ...this.state.userInfo,
                  accountType: this.state.accountType,
                  amount: amount,
                  transcationTime: new Date().toString(),
                };
                transcations.push(transcationObj);
                this.setState({ transcations });
              }
            );
          } else {
            this.setState({
              erroValidation: true,
              erroMsg: `Sorry. you have insufficent balance`,
            });
          }
        } else {
          this.setState({
            erroValidation: true,
            erroMsg: `You have exceed your the per-day limits`,
          });
        }
      } else {
        this.setState({
          erroValidation: true,
          erroMsg: `Please enter vaild amount`,
        });
      }
    } else {
      this.setState({
        erroValidation: true,
        erroMsg: `Please choose account type`,
      });
    }
  }
  handleOnchange(e) {
    this.setState({
      erroValidation: false,
      erroMsg: null,
    });
  }
  handleLogin(e, username, password) {
    if (!username && !password) {
      this.setState({
        erroValidation: true,
        erroMsg: `Please enter Username and Password`,
      });
      return false;
    }
    if (username !== 'root' && password !== 'root') {
      this.setState({
        erroValidation: true,
        erroMsg: `Invalid Username and password`,
      });
    }
    if (username === 'root' && password === 'root') {
      let userInfo = {
        name: 'Santosh Panda',
        accountNumber: 542535453456,
        branch: 'Bangalore',
        branchCode: 524,
        perDayLimit: 10000,
        totalBalance: 15000,
        remaining: 15000,
      };
      this.setState({ isLogin: true, userInfo });
    }
  }

  render() {
    const {
      isLoadingLogin,
      erroValidation,
      erroMsg,
      isLogin,
      userInfo,
      accountType,
      transcations,
    } = this.state;

    return (
      <Fragment>
        {!isLogin ? (
          <Login
            isLoadingLogin={isLoadingLogin}
            erroValidation={erroValidation}
            erroMsg={erroMsg}
            isLogin={isLogin}
            handleLogin={this.handleLogin}
            handleOnchange={this.handleOnchange}
          />
        ) : (
          <Dashbord
            userInfo={userInfo}
            erroValidation={erroValidation}
            erroMsg={erroMsg}
            handleWithdaw={this.handleWithdaw}
            handleOnchange={this.handleOnchange}
            handleSelectAccountType={this.handleSelectAccountType}
            accountType={accountType}
            transcations={transcations}
          />
        )}
      </Fragment>
    );
  }
}

export default SinglePage;
