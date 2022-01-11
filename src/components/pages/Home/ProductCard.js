import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUser } from "../../../store/user";
import { addToCart } from "../../../store/cart";
import { useSelector, useDispatch } from "react-redux";
const ProductWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  background: #ffffff;
  box-shadow: 0px 9px 26px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  @media screen and (max-width: 450px) {
    min-width: 75%;
  }
`;
const Stock = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  text-align: center;
  padding: 7px;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: rgba(49, 135, 237, 0.8);
  border-radius: 25px 0px 0px 25px;
`;
const Image = styled.img`
  width: 100%;
  height: 150px;
  margin-bottom: 30px;
`;
const Name = styled.h3`
  font-size: 16px;
  color: black;
  margin-bottom: 10px;
`;
const Desc = styled.h4`
  color: #8d8d8d;
  font-size: 15px;
  margin-bottom: 20px;
  font-weight: 400;
`;
const Price = styled.h4`
  color: #3187ed;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 20px;
`;
const ButtonWrapper = styled.div`
  display: flex;
`;
const AddToCartBtn = styled.div`
  cursor: pointer;
  display: flex;
  background: transparent;
  width: 100%;
  padding: 10px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #3187ed;
  border: 2px solid #3187ed;
  border-radius: 12px;
  transition: 0.2s;
  pointer-events: ${(props) => (!props.disabled ? "none" : "auto")};
  opacity: ${(props) => (!props.disabled ? 0.5 : 1)};
  :hover {
    background-color: #3187ed;
    color: white;
  }
`;
export default function ProductCard(props) {
  const { _id, name, description, price, imageUrl, quandity } = props.item;
  const user = useSelector(getUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    if (quandity === 0) return;
    if (!user.data.token) return navigate("/user/login");
    dispatch(addToCart(_id));
  };
  return (
    <ProductWrapper>
      <Stock>{quandity > 0 ? `${quandity} left` : "Out of stock"} </Stock>
      <Image src={imageUrl}/>
      <Name>{name} </Name>
      <Desc>{description}</Desc>
      <Price>₹{price}</Price>
      <ButtonWrapper>
        <AddToCartBtn disabled={quandity} onClick={handleAddToCart}>
          Add To cart
        </AddToCartBtn>
      </ButtonWrapper>
    </ProductWrapper>
  );
}
