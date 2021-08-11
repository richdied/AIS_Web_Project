import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BookOnCart } from "../components/BookOnCart";
import { Book } from "../constants";
import { genMockBook } from "../utils";

const SHeader = styled.h3`
  margin-top: 3.5em;
  font-size: 2rem;
  font-weight: 700;
`;

const SListControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  padding: 1.3em 0;

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > label {
    user-select: none;
  }

  & > div > button {
    cursor: pointer;
    padding: 0.3em 1.9em;
    font-size: 0.9rem;
    font-weight: 549;
    border: 2px solid ${(props) => props.theme.ogrey};
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.secondary};
    outline: none;
  }

  & > div > button:nth-of-type(2) {
    margin-left: 0.5em;
  }
`;

const SShipmentNotice = styled.ul`
  padding: 2em 0;
  line-height: 1.5em;
  font-size: 0.9rem;
  list-style-type: disc;
  list-style-position: inside;
`;

const SCartBtn = styled.div`
  display: flex;
  justify-content: center;
  padding: 1.5em 0;

  & > button {
    outline: none;
    border: none;
    border-radius: 9999999px;
    padding: 15px 80px;
    font-size: 1rem;
    font-weight: 700;
    background-color: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.primary};
    cursor: pointer;
  }

  & > button:nth-of-type(2) {
    background-color: ${(props) => props.theme.grey};
    color: ${(props) => props.theme.secondary};
    margin-left: 1em;
  }
`;

const STable = styled.table`
  width: 100%;

  & > tbody > tr > td {
    padding: 13px 0;
    text-align: center;
    vertical-align: middle;
  }

  & > tbody > tr > td:nth-of-type(2) {
    & img {
      width: 100px;
      height: auto;
    }
  }
`;

const SGreyHead = styled.tr`
  font-weight: 700;
  background-color: ${(props) => props.theme.grey};

  & > td {
    font-size: 1rem;
    padding: 0.6em;
    text-align: center;
  }
`;

const SGreyBox = styled.ul`
  background-color: ${(props) => props.theme.grey};
  margin-top: 1em;
  padding: 1.3em 0;
`;

const SGreyResult = styled(SGreyBox)`
  display: flex;

  & > li {
    text-align: center;
    flex-grow: 1;
  }
`;

const SGreyNotice = styled(SGreyBox)`
  text-align: center;
  padding-left: 3em;
  padding-right: 3em;
  font-size: 0.9rem;

  & > string {
    font-size: 1rem;
    font-weight: 700;
  }
`;

interface CartProps {}

export const Cart: React.FC<CartProps> = ({}) => {
  const { register, handleSubmit, watch, getValues, setValue } = useForm();
  const [books, setBooks] = useState<Book[] | []>([]);

  useEffect(() => {
    const mockBook1 = genMockBook(
      "1",
      "이것이 파이썬이다",
      "https://www.hanbit.co.kr/data/books/B7030127165_m.jpg",
      200
    );
    const mockBook2 = genMockBook(
      "2",
      "그림으로 배우는 네트워크",
      "https://www.hanbit.co.kr/data/books/B1598189984_l.jpg",
      150
    );

    setBooks([mockBook1, mockBook2]);
  }, []);

  const handleOnValid = () => {
    console.log(watch());
  };
  const handleOnInvalid = () => {};

  const deleteSelected = () => {
    const items = getValues("items");

    let filtered = books;
    for (const title in items) {
      if (items[title].checked) {
        filtered = filtered.filter((book) => {
          return book.title != title;
        });
      }
    }
    setBooks(filtered);
  };

  const getTotalBooks = () => {
    let result = 0;
    const items = getValues("items");
    console.log("getToTotalBooks ", items);

    for (const title in items) {
      result += parseInt(items[title].count);
    }

    return result;
  };

  const getTotalPrice = () => {
    let result = 0;
    const items = getValues("items");

    for (const title in items) {
      result += items[title].price;
    }

    return result;
  };

  const toggleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.checked;

    for (const book of books) {
      setValue(`items.${book.title}.checked`, val);
    }
  };

  return (
    <>
      <SHeader>장바구니</SHeader>

      <SShipmentNotice>
        <li>
          <strong>
            월~금 오전 12시까지 주문 및 결제(입금확인 완료 기준)시 당일 출고
          </strong>
          가 되며, 12시 이후 주문건은 다음 날 처리됩니다. 단, 토요일/일요일에는
          출고를 하지 않습니다.
        </li>
        <li>
          서울/경기/인천 지역은 택배 출고 후 빠르면 다음날 받아보실 수 있으나,
          택배사 사정에 따라 지연될 수도 있습니다. 지방은 출고 후 2~3일 정도
          소요됩니다.
        </li>
      </SShipmentNotice>

      <form onSubmit={handleSubmit(handleOnValid, handleOnInvalid)}>
        <SListControl>
          <div>
            <input
              type='checkbox'
              id='cart-select-a'
              onChange={(e) => {
                toggleSelectAll(e);
              }}
            />
            <label htmlFor='cart-select-a'>전체선택</label>
          </div>
          <div>
            <button onClick={deleteSelected} type='button'>
              선택상품삭제
            </button>
            <button onClick={() => setBooks([])} type='button'>
              전체상품삭제
            </button>
          </div>
        </SListControl>
        <STable>
          <thead>
            <SGreyHead>
              <td colSpan={3}>상품명</td>
              <td>판매가</td>
              <td>수량</td>
              <td>합계</td>
              <td>삭제</td>
            </SGreyHead>
          </thead>
          <tbody>
            {books.map((book, idx) => {
              return (
                <BookOnCart
                  key={idx}
                  book={book}
                  books={books}
                  setBooks={setBooks}
                  register={register}
                  setValue={setValue}
                  getValues={getValues}
                  watch={watch}
                />
              );
            })}
          </tbody>
        </STable>

        <SGreyResult>
          <li>
            주문상품 수량
            <span>
              {books.length}종 [{getTotalBooks()}개]
            </span>
          </li>
          <li>
            배송료 : <strong> 0원</strong>
          </li>
          <li>
            총 상품 금액 : <span>{getTotalPrice()}원</span>
          </li>
        </SGreyResult>

        <SGreyNotice>
          <li>
            <strong>*문화비(도서) 소득공제</strong>
            시행에 따라
            <strong>소득공제가 가능한 "책, eBook"</strong>과 소득공제가 불가능한
            "교육, 아이템"은
            <strong>별도로 선택 주문</strong>해 주세요.
          </li>
          <li>
            *소득공제 가능 상품과 불가능 상품을 한 번에 주문할 수 없습니다.
          </li>
        </SGreyNotice>

        <SCartBtn>
          <button type='submit'>주문하기</button>
          <button type='button'>
            <Link to='/'>계속하기</Link>
          </button>
        </SCartBtn>
      </form>
    </>
  );
};
