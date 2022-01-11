import { itemUpdated } from "../cart";
import { loadProducts } from "../product";
const cartWatcher =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== itemUpdated.type) {
      return next(action);
    }
    next(action);
    dispatch(loadProducts());
  };
export default cartWatcher;
