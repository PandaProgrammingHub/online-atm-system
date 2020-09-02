import React, { Component, Fragment } from 'react';
import TranscationTable from './TranscationTable';

import Select from 'react-select';

class Withdraw extends Component {
  constructor(props) {
    super(props);
    this.withdrawAmount = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();

    let withdrawAmount = this.withdrawAmount.current.value;
    this.props.handleWithdaw(e, withdrawAmount);
    this.withdrawAmount.current.value = '';
  }
  handleChange(e) {
    this.props.handleSelectAccountType(e);
  }
  handleClear(e) {
    e.preventDefault();
    this.withdrawAmount.current.value = '';
  }
  render() {
    const {
      erroValidation,
      erroMsg,
      transcations,
      handleOnchange,
    } = this.props;
    const options = [
      { value: 'saving', label: 'Saving' },
      { value: 'current', label: 'Current' },
    ];

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Account Type</label>
            <Select options={options} onChange={this.handleChange} />
            <br />
            <label>Withdraw amount</label>
            <input
              type='text'
              name='withdraw_amount'
              className='form-control'
              ref={this.withdrawAmount}
              onChange={handleOnchange}
            />
          </div>
          {erroValidation && <p className='help-block'>{erroMsg}</p>}
          <div className='btn-group'>
            <button
              type='submit'
              onSubmit={this.handleSubmit}
              className='btn btn-default'
            >
              Confirm
            </button>
            <button onClick={this.handleClear} className='btn btn-default mr1'>
              Cancle
            </button>
          </div>
        </form>
        <br />
        <TranscationTable transcations={transcations} />
      </Fragment>
    );
  }
}

export default Withdraw;
