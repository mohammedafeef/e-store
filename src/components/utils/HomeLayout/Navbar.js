import styled from "styled-components";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import Badge from "@mui/material/Badge";
import LogoImage from "../../../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCartItemsCount } from "../../../store/cart";
import { getUser, userSignedOut, userRedirected } from "../../../store/user";

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: white;
  z-index: 10;
  display: flex;
  height: 120px;
  padding: 30px 150px;
  box-shadow: 0px 20px 39px rgba(0, 0, 0, 0.03);
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 450px) {
    padding: 0;
    height: 100px;
  }
`;
const Logo = styled.img`
  cursor: pointer;
  height: 100px;
  width: 200px;
`;
const UserWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const NeoBtn = styled.button`
  cursor: pointer;
  padding: 20px 30px;
  margin-left: 80px;
  font-size: 15px;
  font-weight: 700;
  color: white;
  border: none;
  background-color: #00c6d7;
  box-shadow: 0px 11px 27px rgba(0, 198, 215, 0.35);
  border-radius: 12px;
  @media screen and (max-width: 450px) {
    margin: 0 15px;
    margin-left: 20px;
    padding: 15px 20px;
  }
`;
const CartIcon = styled(ShoppingCartRoundedIcon)`
  font-size: 30px !important;
  color: black;
  cursor: pointer;
`;
export default function Navbar() {
  const dispatch = useDispatch();
  const itemsCount = useSelector(getCartItemsCount);
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(userSignedOut());
    dispatch(userRedirected());
    navigate("/home");
  };
  return (
    <NavbarWrapper>
      <Link to="/home">
        <Logo src={LogoImage} />
      </Link>
      <UserWrapper>
        <Link to={"/cart"}>
          <Badge
            badgeContent={itemsCount}
            color="primary"
            invisible={itemsCount > 0 ? false : true}
          >
            <CartIcon />
          </Badge>
        </Link>
        <Link to="/user/login">
          <NeoBtn onClick={user.data.token ? handleLogout : null}>
            {user.data.token ? "Logout" : "Login"}
          </NeoBtn>
        </Link>
      </UserWrapper>
    </NavbarWrapper>
  );
}
