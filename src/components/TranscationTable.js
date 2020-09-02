import React, { Fragment } from 'react';
import moment from 'moment';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, {
  textFilter,
  dateFilter,
} from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

const TranscationTable = (props) => {
  const { transcations } = props;

  const DateFormatter = (cell, row) => {
    console.log('cell=>', cell);
    return <span>{moment(cell).format('DD-MM-YYYY, hh:mm:ss')} </span>;
  };
  const columns = [
    {
      dataField: 'transcationId',
      text: 'Transcation Id',
      filter: textFilter(),
    },
    {
      dataField: 'accountType',
      text: 'Account Type',
      filter: textFilter(),
    },
    {
      dataField: 'amount',
      text: 'Amount',
      filter: textFilter(),
    },
    {
      dataField: 'transcationTime',
      text: 'Transcation DateS',
      filter: dateFilter(),
      // filter: textFilter(),
      formatter: DateFormatter,
    },
  ];

  return (
    <Fragment>
      {/* {transcations.length > 0 && ( */}
      <BootstrapTable
        keyField='transcationId'
        data={transcations}
        columns={columns}
        filter={filterFactory()}
        pagination={paginationFactory()}
        noDataIndication='No Transcation Found'
        striped
        hover
        condensed
      />
      {/* )} */}
    </Fragment>
  );
};

export default TranscationTable;
