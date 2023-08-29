import { SpriteSVG } from 'pictures/SpriteSVG';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTransaction,
  fetchTransactions,
} from 'redux/TransactionsList/operations';
import {
  selectToken,
  selectTransaction,
} from 'redux/TransactionsList/selectors';
import { ModalEditTransaction } from 'components/ModalEditTransaction/ModalEditTransaction';
import Modal from 'components/Modal/Modal';
import { isEditTransaction } from 'redux/Global/selectors';
import {
  DeleteTabBtn,
  EditIconStyled,
  IconBtnWrapperStyled,
  TableStyled,
  TdActionStyled,
  TdCatagoryStyled,
  TdDateStyled,
  TdCommentStyled,
  TdSumStyled,
  TdTypeStyled,
  ThStyled,
  TrInfoStyled,
  ThDateStyled,
  ThSumStyled,
  TableHeader,
  TableBody,
  TableScrollBody,
} from './TransactionsList.styled';
import { selectAllCategories } from 'redux/TransactionCategories/selectors';
import { getCategoriName } from 'helpers/helpers';
import { feachCategories } from 'redux/TransactionCategories/operations';
import { setIsModalEditTransaction } from 'redux/Global/globalSlice';
import { useMediaQuery } from 'react-responsive';
import { IS_DESKTOP, IS_MOBILE, IS_TABLET } from 'styles/const ';
import {
  CommentMobTrans,
  DeletBtnMobTrans,
  EditBtnMobTrans,
  EditIconMobTrans,
  StyledLiTransList,
  StyledNameTranList,
  StyledUlTransList,
} from './TransactionsList.styled';

const TransactionsList = () => {
  const isMobile = useMediaQuery(IS_MOBILE);
  const isTablet = useMediaQuery(IS_TABLET);
  const isDesktop = useMediaQuery(IS_DESKTOP);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const dataList = useSelector(selectTransaction);
  const allCategories = useSelector(selectAllCategories);

  const isEditTrans = useSelector(isEditTransaction);

  useEffect(() => {
    dispatch(fetchTransactions(token));
  }, [dispatch, token]);
  useEffect(() => {
    dispatch(feachCategories());
  }, [dispatch]);

  const handleDeleteClick = transactionId => {
    dispatch(deleteTransaction(transactionId));
  };

  return (
    <>
      {isMobile &&
        dataList?.map(
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
                <div>{Math.abs(amount)}</div>
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
      {(isTablet || isDesktop) && (
        <>
          <TableStyled>
            <TableHeader>
              <tr>
                <ThDateStyled>Date</ThDateStyled>
                <ThStyled>Type</ThStyled>
                <ThStyled>Category</ThStyled>
                <ThStyled>Comment</ThStyled>
                <ThSumStyled>Sum</ThSumStyled>
                <ThStyled>&nbsp;</ThStyled>
              </tr>
            </TableHeader>
          </TableStyled>
          <TableScrollBody>
            <TableBody>
              {dataList?.map(
                ({
                  id,
                  transactionDate,
                  type,
                  categoryId,
                  comment,
                  amount,
                }) => (
                  <TrInfoStyled key={id}>
                    <TdDateStyled>{transactionDate}</TdDateStyled>
                    <TdTypeStyled>{type === 'INCOME' ? '+' : '-'}</TdTypeStyled>
                    <TdCatagoryStyled>
                      {dataList.length !== 0
                        ? getCategoriName(allCategories, categoryId)
                        : 'notNull'}
                    </TdCatagoryStyled>
                    <TdCommentStyled>{comment}</TdCommentStyled>
                    <TdSumStyled>{Math.abs(amount)}</TdSumStyled>
                    <TdActionStyled>
                      <IconBtnWrapperStyled>
                        <div
                          onClick={() => {
                            dispatch(
                              setIsModalEditTransaction({ id, flag: true })
                            );
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
      )}

      {isEditTrans && (
        <Modal>
          <ModalEditTransaction />
        </Modal>
      )}
    </>
  );
};
export default TransactionsList;
