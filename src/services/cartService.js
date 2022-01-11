import BackendService from "./BackendService";

const addToCart = (data) => {
  return BackendService.post("/cart", data);
};
const removeFromCart = (data) => {
  return BackendService.destroy("/cart", data);
};
const getCart = () => {
  return BackendService.get("/cart");
};

const cartService = {
  addToCart,
  removeFromCart,
  getCart,
};
export default cartService;
