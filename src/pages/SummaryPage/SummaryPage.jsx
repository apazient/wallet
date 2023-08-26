import { Bagel } from 'components/Bagel/Bagel';
import { DiagramTab } from 'components/DiagramTab/DiagramTab';
import { Table } from 'components/Table/Table';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { feachTransactionSummary } from 'redux/SummaryPage/operations';
import { selectMonth, selectYear } from 'redux/SummaryPage/selectors';

const SummaryPage = () => {
  const dispatch = useDispatch();
  const month = useSelector(selectMonth);
  const year = useSelector(selectYear);

  useEffect(() => {
    dispatch(feachTransactionSummary({ month, year }));
  }, [month, year, dispatch]);

  return (
    <>
      <Bagel />
      <DiagramTab />
      <Table />
    </>
  );
};

export default SummaryPage;
