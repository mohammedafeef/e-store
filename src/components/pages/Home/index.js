import { useEffect } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts, getProducts } from "../../../store/product";

const HomeWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px 150px;
  margin-bottom: 20px;
  padding: 30px 150px;
  margin-bottom: 20px;
  margin-top: 120px;
  @media screen and (max-width: 450px) {
    padding:0 15px;
    margin-top:110px;
  }
`;
const Title = styled.h3`
  font-size: 30px;
  font-weight: 700;
  color: black;
`;
const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
export default function Home() {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products?.list?.length) dispatch(loadProducts());
  }, []);
  return (
    <HomeWrapper>
      <Title>Best Deals</Title>
      <ProductWrapper>
        {products.list &&
          products.list.map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
      </ProductWrapper>
    </HomeWrapper>
  );
}
