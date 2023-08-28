import { Bagel } from 'components/Bagel/Bagel';
import { DiagramTab } from 'components/DiagramTab/DiagramTab';
import { Table } from 'components/Table/Table';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { feachTransactionSummary } from 'redux/SummaryPage/operations';
import { selectMonth, selectYear } from 'redux/SummaryPage/selectors';
import {
  SummaryPageContStyled,
  SummaryPageStyled,
  SummaryTitleStyled,
  OverlayGradient1,
  OverlayGradient2,
  OverlayGradient3,
} from './SummaryPage.styled';

const SummaryPage = () => {
  const dispatch = useDispatch();
  const month = useSelector(selectMonth);
  const year = useSelector(selectYear);

  useEffect(() => {
    dispatch(feachTransactionSummary({ month, year }));
  }, [month, year, dispatch]);

  return (
    <>
      <SummaryPageStyled>
        <SummaryPageContStyled>
          <div>
            <SummaryTitleStyled>Statistics</SummaryTitleStyled>
            <Bagel />
          </div>
          <div>
            <DiagramTab />
            <Table />
          </div>
          <OverlayGradient1></OverlayGradient1>
          <OverlayGradient2></OverlayGradient2>
          <OverlayGradient3></OverlayGradient3>
        </SummaryPageContStyled>
      </SummaryPageStyled>
    </>
  );
};

export default SummaryPage;
