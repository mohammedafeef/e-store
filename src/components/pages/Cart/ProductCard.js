import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart, removeFromCart } from "../../../store/cart";
import { useDispatch } from "react-redux";
const ProductWrapper = styled.div`
  display: flex;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 9px 26px rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  margin-bottom: 10px;
  @media screen and (max-width: 450px) {
    padding: 10px;
  }
`;
const DetailsWrapper = styled.div`
  display: flex;
  flex: 1;
`;
const Image = styled.img`
  height: 100px;
  width: 150px;
  @media screen and (max-width: 450px) {
    height: 80px;
    width: 120px;
  }
`;
const MetaWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const Name = styled.h3`
  font-size: 16px;
  color: black;
  margin-bottom: 10px;
`;
const Price = styled.h4`
  color: #3187ed;
  font-size: 20px;
  font-weight: 600;
`;
const QuandityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SumTotal = styled.div`
  color: #3187ed;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  @media screen and (max-width: 450px) {
    font-size: 25px;
  }
`;
const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const AddBtn = styled(AddIcon)`
  cursor: pointer;
  padding: 10px;
  font-size: 50px !important;
  color: white;
  border: none;
  background-color: #39ff14;
  box-shadow: 0px 11px 27px rgba(57, 255, 20, 0.35);
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 450px) {
    font-size: 40px !important;
    padding: 5px;
  }
`;
const RemoveBtn = styled(RemoveIcon)`
  cursor: pointer;
  padding: 10px;
  font-size: 50px !important;
  color: white;
  border: none;
  background-color: #f72119;
  box-shadow: 0px 11px 27px rgba(247, 33, 25, 0.35);
  border-radius: 12px;
  transition: transform 0.2s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
  @media screen and (max-width: 450px) {
    font-size: 40px !important;
    padding: 5px;
  }
`;
const Count = styled.h4`
  font-size: 20px;
  font-weight: 700;
  color: black;
  margin: 0 10px;
`;
export default function ProductCart(props) {
  const { name, price, quantity, imageUrl, productId } = props.item;
  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(addToCart(productId));
  const removeItemHandler = () => dispatch(removeFromCart(productId));
  return (
    <ProductWrapper>
      <DetailsWrapper>
        <Image src={imageUrl} />
        <MetaWrapper>
          <Name>{name}</Name>
          <Price>₹{price}</Price>
        </MetaWrapper>
      </DetailsWrapper>
      <QuandityWrapper>
        <SumTotal>₹{price * quantity}</SumTotal>
        <CountWrapper>
          <RemoveBtn onClick={removeItemHandler} />
          <Count>{quantity}</Count>
          <AddBtn onClick={addItemHandler} />
        </CountWrapper>
      </QuandityWrapper>
    </ProductWrapper>
  );
}
