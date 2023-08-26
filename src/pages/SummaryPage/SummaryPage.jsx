import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { feachTransactionSummary } from 'redux/SummaryPage/operations';

const SummaryPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feachTransactionSummary());
  }, [dispatch]);
  return <div>SummaryPage</div>;
};

export default SummaryPage;
