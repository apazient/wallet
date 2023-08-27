import { SpriteSVG } from 'pictures/SpriteSVG';
import React from 'react';
import {
  CommentMobTrans,
  DeletBtnMobTrans,
  EditBtnMobTrans,
  EditIconMobTrans,
  StyledLiTransList,
  StyledNameTranList,
  StyledUlTransList,
} from './TransactionListMobile.styled';

export const TransactionListMobile = () => {
  return (
    <>
      {dataList?.map(
        ({ id, transactionDate, type, categoryId, comment, amount }) => (
          <StyledUlTransList key={id}>
            <StyledLiTransList>
              <StyledNameTranList>Date</StyledNameTranList>
              <div>{transactionDate}</div>
            </StyledLiTransList>
            <StyledLiTransList>
              <StyledNameTranList>Type</StyledNameTranList>
              <div>{type === 'INCOME' ? '+' : '-'}</div>
            </StyledLiTransList>
            <StyledLiTransList>
              <StyledNameTranList>Category</StyledNameTranList>
              <div>Other</div>
            </StyledLiTransList>
            <StyledLiTransList>
              <StyledNameTranList>Comment</StyledNameTranList>
              <CommentMobTrans>{comment}</CommentMobTrans>
            </StyledLiTransList>
            <StyledLiTransList>
              <StyledNameTranList>Sum</StyledNameTranList>
              <div>{amount}</div>
            </StyledLiTransList>
            <StyledLiTransList>
              <DeletBtnMobTrans>Delete</DeletBtnMobTrans>
              <EditBtnMobTrans>
                <EditIconMobTrans>
                  <SpriteSVG name={'edit'} />
                </EditIconMobTrans>
                Edit
              </EditBtnMobTrans>
            </StyledLiTransList>
          </StyledUlTransList>
        )
      )}
    </>
  );
};
