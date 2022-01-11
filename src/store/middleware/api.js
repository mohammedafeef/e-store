import axios from "axios";
import { BASE_URL } from "../../const";
import * as actions from "../api";
const api =
  ({ dispatch, getState }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    next(action);
    const { url, method, data, onSuccess, onError } = action.payload;
    const user = getState().user;
    try {
      const response = await axios.request({
        baseURL: BASE_URL,
        url,
        method,
        data: data ? data : undefined,
        headers: {
          token: user.data.token ? user.data.token : undefined,
        },
      });

      dispatch(
        dispatch({
          type: onSuccess,
          payload: response.data.data,
        })
      );
      dispatch({
        type: actions.apiCallSuccess.type,
        payload: response.data.data,
      });
    } catch (error) {
      if (onError)
        dispatch({
          type: onError,
          payload: error,
        });
      dispatch({
        type: actions.apiCallFailed.type,
        payload: error,
      });
    }
  };
export default api;
