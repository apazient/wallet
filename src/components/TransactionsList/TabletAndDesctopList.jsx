import React from 'react';
import {
  DeleteTabBtn,
  EditIconStyled,
  IconBtnWrapperStyled,
  TableBody,
  TableHeader,
  TableScrollBody,
  TableStyled,
  TdActionStyled,
  TdCatagoryStyled,
  TdCommentStyled,
  TdDateStyled,
  TdSumStyled,
  TdTypeStyled,
  ThActionStyled,
  ThCategoryStyled,
  ThCommentStyled,
  ThDateStyled,
  ThSumStyled,
  ThTypeStyled,
  TrInfoStyled,
  TrStyled,
} from './TransactionsList.styled';
import moment from 'moment';
import { SpriteSVG } from 'pictures/SpriteSVG';
import { getCategoriName } from 'helpers/helpers';
import { useDispatch } from 'react-redux';
import { setIsModalEditTransaction } from 'redux/Global/globalSlice';

function TabletAndDesctopList({ dataList, allCategories, handleDeleteClick }) {
  const dispatch = useDispatch();
  return (
    <>
      <TableStyled>
        <TableHeader>
          <TrStyled>
            <ThDateStyled>Date</ThDateStyled>
            <ThTypeStyled>Type</ThTypeStyled>
            <ThCategoryStyled>Category</ThCategoryStyled>
            <ThCommentStyled>Comment</ThCommentStyled>
            <ThSumStyled>Sum</ThSumStyled>
            <ThActionStyled>&nbsp;</ThActionStyled>
          </TrStyled>
        </TableHeader>
      </TableStyled>
      <TableScrollBody>
        <TableBody>
          {dataList?.map(
            ({ id, transactionDate, type, categoryId, comment, amount }) => (
              <TrInfoStyled key={id}>
                <TdDateStyled>
                  {moment(transactionDate).format('DD.MM.YY')}
                </TdDateStyled>
                <TdTypeStyled>{type === 'INCOME' ? '+' : '-'}</TdTypeStyled>
                <TdCatagoryStyled>
                  {dataList.length !== 0
                    ? getCategoriName(allCategories, categoryId)
                    : 'notNull'}
                </TdCatagoryStyled>
                <TdCommentStyled>{comment}</TdCommentStyled>
                <TdSumStyled
                  style={
                    type === 'INCOME'
                      ? { color: 'rgba(255, 182, 39, 1)' }
                      : { color: 'rgba(255, 134, 141, 1)' }
                  }
                >
                  {Math.abs(amount)}
                </TdSumStyled>
                <TdActionStyled>
                  <IconBtnWrapperStyled>
                    <div
                      onClick={() => {
                        dispatch(setIsModalEditTransaction({ id, flag: true }));
                      }}
                    >
                      <EditIconStyled>
                        <SpriteSVG name={`edit`} />
                      </EditIconStyled>
                    </div>
                    <DeleteTabBtn onClick={() => handleDeleteClick(id)}>
                      Delete
                    </DeleteTabBtn>
                  </IconBtnWrapperStyled>
                </TdActionStyled>
              </TrInfoStyled>
            )
          )}
        </TableBody>
      </TableScrollBody>
    </>
  );
}

export default TabletAndDesctopList;
