import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Billboard } from "../components/Billboard";
import { BookShowcase } from "../components/BookShowcase";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <>
      {/* <Helmet>
        <title>AIS Books | 홈</title>
      </Helmet> */}

      <Billboard />
      <BookShowcase />
    </>
  );
};
