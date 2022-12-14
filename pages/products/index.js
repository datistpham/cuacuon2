import React from "react";
import Header from "../components/Header";
import ListProducts from "../components/ListProducts";
import Navigation from "../components/Navigation";
import SpecificProduct from "../components/SpecificProduct";
import Head from "next/head";
import { SERVER_URL } from "../_app";

const Products = ({ data }) => {
  return (
    <div className="fdjhkejqklejasasa">
      <Head>
        <title>Sản phẩm</title>
      </Head>
      <Header />
      <Navigation />
      <Wrapper />
      <ListProducts />
      <SpecificProduct />
    </div>
  );
};

export const Title = (props) => {
  return (
    <div className="fjkdjsklsmasas" style={{ fontSize: 32 }}>
      {props.title}
    </div>
  );
};

export default Products;

const Wrapper = (props) => {
  return (
    <div
      className="fjkldjaksaas"
      style={{
        width: "100%",
        background: "#fff",
        position: "relative",
        zIndex: 16,
      }}
    >
      {/* <Title title={"Sản phẩm nổi bật"} /> */}
    </div>
  );
};

export async function getServerSideProps(context) {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  // console.log(context)
  const res = await axios({
      url: `${SERVER_URL}/api/v1/get/cuacuon`,
      method: "GET",
  })
  const data = await res.data;
  return {
    props: { data },
  };
}

