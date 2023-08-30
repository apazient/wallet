import React from 'react';
import moment from 'moment';
import {
  CommentMobTrans,
  DeletBtnMobTrans,
  EditBtnMobTrans,
  EditIconMobTrans,
  StyledLiTransList,
  StyledNameTranList,
  StyledUlTransList,
} from './TransactionsList.styled';
import { getCategoriName } from 'helpers/helpers';
import { useDispatch } from 'react-redux';
import { setIsModalEditTransaction } from 'redux/Global/globalSlice';
import { SpriteSVG } from 'pictures/SpriteSVG';

function MobileList({ dataList, allCategories, handleDeleteClick }) {
  const dispatch = useDispatch();
  return (
    <>
      {dataList?.map(
        ({ id, transactionDate, type, categoryId, comment, amount }) => (
          <StyledUlTransList $type={type} key={id}>
            <StyledLiTransList>
              <StyledNameTranList>Date</StyledNameTranList>
              <div>{moment(transactionDate).format('DD.MM.YY')}</div>
            </StyledLiTransList>
            <StyledLiTransList>
              <StyledNameTranList>Type</StyledNameTranList>
              <div>{type === 'INCOME' ? '+' : '-'}</div>
            </StyledLiTransList>
            <StyledLiTransList>
              <StyledNameTranList>Category</StyledNameTranList>
              <div>
                {dataList.length !== 0
                  ? getCategoriName(allCategories, categoryId)
                  : 'notNull'}
              </div>
            </StyledLiTransList>
            <StyledLiTransList>
              <StyledNameTranList>Comment</StyledNameTranList>
              <CommentMobTrans>{comment}</CommentMobTrans>
            </StyledLiTransList>
            <StyledLiTransList>
              <StyledNameTranList>Sum</StyledNameTranList>
              <div>{Math.abs(amount).toFixed(2)}</div>
            </StyledLiTransList>
            <StyledLiTransList>
              <DeletBtnMobTrans onClick={() => handleDeleteClick(id)}>
                Delete
              </DeletBtnMobTrans>
              <EditBtnMobTrans
                onClick={() => {
                  dispatch(setIsModalEditTransaction({ id, flag: true }));
                }}
              >
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
}

export default MobileList;
