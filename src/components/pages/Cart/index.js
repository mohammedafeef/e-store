import styled from "styled-components";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../../store/cart";
const CartWrapper = styled.div`
  display: flex;
  padding: 30px 150px;
  margin-bottom: 20px;
  flex-direction: column;
  margin-top: 120px;
  @media screen and (max-width: 450px) {
    padding: 0 15px;
    margin-top: 110px;
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
  overflow: hidden;
  @media screen and (max-width: 450px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
const ProductList = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-right: 20px;
  overflow-y: auto;
`;
const CheckOutWrapper = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  background: #ffffff;
  box-shadow: 0px 9px 26px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
`;
const CheckOutTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  color: black;
  margin-bottom: 20px;
`;
const Total = styled.h4`
  color: #3187ed;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const CheckOutBtn = styled.button`
  cursor: pointer;
  display: flex;
  background: transparent;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
  border: none;
  background-color: #3187ed;
  box-shadow: 0px 11px 27px rgba(49, 135, 237, 0.35);
  border-radius: 12px;
`;
export default function Cart() {
  const cart = useSelector(getCartItems);
  const total = useSelector(getTotalPrice);

  return (
    <CartWrapper>
      <Title>Cart</Title>
      <ProductWrapper>
        <ProductList>
          {cart.list.map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </ProductList>
        <CheckOutWrapper>
          <CheckOutTitle>Total amount</CheckOutTitle>
          <Total>₹{total}</Total>
          <CheckOutBtn>Check out</CheckOutBtn>
        </CheckOutWrapper>
      </ProductWrapper>
    </CartWrapper>
  );
}
