import BackendService from "./BackendService";

const getProducts = () => {
  return BackendService.get("/products");
};

const productService = {
  getProducts,
};
export default productService;
