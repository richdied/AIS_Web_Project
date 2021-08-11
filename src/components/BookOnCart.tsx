import React from "react";
import {
  UseFormRegister,
  FieldValues,
  UseFormSetValue,
  UseFormGetValues,
  UseFormWatch,
} from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Book } from "../constants";

const SDelBtn = styled.button`
  cursor: pointer;
`;

const STdCount = styled.td`
  & > input {
    margin-right: 0.5%;
    width: 49%;
    text-align: center;
  }
  & > button {
    margin-left: 0.5%;
    width: 49%;
    cursor: pointer;
  }
`;

const deleteBook = (
  currentBook: Book,
  books: Book[],
  setBooks: React.Dispatch<React.SetStateAction<[] | Book[]>>
) => {
  const filtered = books.filter((book) => {
    return book.id !== currentBook.id;
  });

  setBooks(filtered);
};

interface BookOnCartProps {
  book: Book;
  books: Book[] | [];
  setBooks: React.Dispatch<React.SetStateAction<[] | Book[]>>;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}

export const BookOnCart: React.FC<BookOnCartProps> = ({
  book,
  books,
  setBooks,
  register,
  setValue,
  getValues,
  watch,
}) => {
  const updateCount = () => {
    console.log("current val ", watch(`items.${book.title}.count`));
    const currentValue = getValues(`items.${book.title}.count`);
    setValue(`items.${book.title}.count`, currentValue);
  };

  return (
    <tr>
      <td>
        <label htmlFor='cart-item-check'>
          <input
            type='checkbox'
            id='cart-item-check'
            defaultChecked={false}
            {...register(`items.${book.title}.checked`, {})}
          />
        </label>
      </td>
      <td>
        <Link
          to={{
            pathname: "/books",
            search: "?v=" + book.id,
            state: {
              book,
            },
          }}
        >
          <img src={book.coverImg} />
        </Link>
      </td>
      <td>
        <Link
          to={{
            pathname: "/books",
            search: "?v=" + book.id,
            state: {
              book,
            },
          }}
        >
          {book.title}
        </Link>
      </td>
      <td {...register(`items.${book.title}.price`, { value: book.price })}>
        {book.price}
      </td>
      <STdCount>
        <input
          type='text'
          defaultValue={1}
          {...register(`items.${book.title}.count`)}
        />
        <button type='button' onClick={updateCount}>
          변경
        </button>
      </STdCount>
      <td>100</td>
      <td>
        <SDelBtn
          type='button'
          onClick={() => deleteBook(book, books, setBooks)}
        >
          삭제
        </SDelBtn>
      </td>
    </tr>
  );
};
