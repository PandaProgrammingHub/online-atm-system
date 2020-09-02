import React, { Component, Fragment } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.username = React.createRef();
    this.password = React.createRef();
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleOnCancle = this.handleOnCancle.bind(this);
  }
  handleOnCancle(e) {
    e.preventDefault();
    this.username.current.value = '';
    this.password.current.value = '';
  }
  handleLoginClick(e) {
    e.preventDefault();
    let username = this.username.current.value.trim();
    let password = this.password.current.value.trim();
    this.props.handleLogin(e, username, password);
  }
  render() {
    const { erroValidation, erroMsg, handleOnchange } = this.props;
    return (
      <Fragment>
        <div className='searchUser'>
          <div className='login'>
            <div className='panel-heading' role='tab'>
              <h4 className='panel-title'>Login to ATM System</h4>
            </div>
            <div id='collapseOne' className='panel-collapse' role='tabpanel'>
              <form className='well' onSubmit={this.handleLoginClick}>
                <div className='form-group'>
                  <label>Username</label>
                  <input
                    type='text'
                    className='form-control'
                    ref={this.username}
                    onChange={handleOnchange}
                  />
                </div>
                <div className='form-group'>
                  <label>Password</label>
                  <input
                    type='text'
                    className='form-control'
                    ref={this.password}
                    onChange={handleOnchange}
                  />
                </div>

                {erroValidation && <p className='help-block'>{erroMsg}</p>}
                <div className='btn-group'>
                  <button type='submit' className='btn btn-default'>
                    Login
                  </button>
                  <button
                    className='btn btn-default mr1'
                    onClick={this.handleOnCancle}
                  >
                    Cancle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
