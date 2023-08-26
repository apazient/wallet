import { SpriteSVG } from 'pictures/SpriteSVG';
import React from 'react';

import {
  DeleteTabBtn,
  EditIconStyled,
  IconBtnWrapperStyled,
  MainTrStyled,
  TableStyled,
  TdActionStyled,
  TdCatagoryStyled,
  TdDateStyled,
  TdCommentStyled,
  TdSumStyled,
  TdTypeStyled,
  ThStyled,
  TrInfoStyled,
} from './Table.styled';

const Table = () => {
  return (
    <TableStyled>
      <MainTrStyled>
        <ThStyled>Date</ThStyled>
        <ThStyled>Type</ThStyled>
        <ThStyled>Category</ThStyled>
        <ThStyled>Comment</ThStyled>
        <ThStyled>Sum</ThStyled>
        <ThStyled></ThStyled>
      </MainTrStyled>

      <TrInfoStyled>
        <TdDateStyled>04. 01. 19</TdDateStyled>
        <TdTypeStyled>-</TdTypeStyled>
        <TdCatagoryStyled>Other</TdCatagoryStyled>
        <TdCommentStyled>Gift for your wife</TdCommentStyled>
        <TdSumStyled>300.00</TdSumStyled>
        <TdActionStyled>
          <IconBtnWrapperStyled>
            <EditIconStyled>
              <SpriteSVG name={'edit'} />
            </EditIconStyled>
            <DeleteTabBtn>Delete</DeleteTabBtn>
          </IconBtnWrapperStyled>
        </TdActionStyled>
      </TrInfoStyled>

      <TrInfoStyled>
        <TdDateStyled>05.01.19</TdDateStyled>
        <TdTypeStyled>+</TdTypeStyled>
        <TdCatagoryStyled>Income</TdCatagoryStyled>
        <TdCommentStyled>January bonus</TdCommentStyled>
        <TdSumStyled>8 000.00</TdSumStyled>
        <TdActionStyled>
          <IconBtnWrapperStyled>
            <EditIconStyled>
              <SpriteSVG name={'edit'} />
            </EditIconStyled>
            <DeleteTabBtn>Delete</DeleteTabBtn>
          </IconBtnWrapperStyled>
        </TdActionStyled>
      </TrInfoStyled>

      <TrInfoStyled>
        <TdDateStyled>07. 01. 19</TdDateStyled>
        <TdTypeStyled>-</TdTypeStyled>
        <TdCatagoryStyled>Car</TdCatagoryStyled>
        <TdCommentStyled>Oil</TdCommentStyled>
        <TdSumStyled>1000.00</TdSumStyled>
        <TdActionStyled>
          <IconBtnWrapperStyled>
            <EditIconStyled>
              <SpriteSVG name={'edit'} />
            </EditIconStyled>
            <DeleteTabBtn>Delete</DeleteTabBtn>
          </IconBtnWrapperStyled>
        </TdActionStyled>
      </TrInfoStyled>

      <TrInfoStyled>
        <TdDateStyled>07. 01. 19</TdDateStyled>
        <TdTypeStyled>-</TdTypeStyled>
        <TdCatagoryStyled>Products</TdCatagoryStyled>
        <TdCommentStyled>Vegetables for the week</TdCommentStyled>
        <TdSumStyled>280.00</TdSumStyled>
        <TdActionStyled>
          <IconBtnWrapperStyled>
            <EditIconStyled>
              <SpriteSVG name={'edit'} />
            </EditIconStyled>
            <DeleteTabBtn>Delete</DeleteTabBtn>
          </IconBtnWrapperStyled>
        </TdActionStyled>
      </TrInfoStyled>

      <TrInfoStyled>
        <TdDateStyled>07. 01. 19</TdDateStyled>
        <TdTypeStyled>+</TdTypeStyled>
        <TdCatagoryStyled>Income</TdCatagoryStyled>
        <TdCommentStyled>Gift</TdCommentStyled>
        <TdSumStyled>1000.00</TdSumStyled>
        <TdActionStyled>
          <IconBtnWrapperStyled>
            <EditIconStyled>
              <SpriteSVG name={'edit'} />
            </EditIconStyled>
            <DeleteTabBtn>Delete</DeleteTabBtn>
          </IconBtnWrapperStyled>
        </TdActionStyled>
      </TrInfoStyled>
    </TableStyled>
  );
};

export default Table;
