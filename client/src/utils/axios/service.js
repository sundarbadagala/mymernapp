import axios from "./instance";
import qs from "qs";
const { REACT_APP_SERVER_BASE_URL } = process.env;

function apiRequest(props) {
  const { url, init, query, option, config } = props;
  const strQuery = query ? `?${qs.stringify(query)}` : "";
  let API_ENDPOINT = REACT_APP_SERVER_BASE_URL;
  const fetchUrl = `${API_ENDPOINT}/${url}${strQuery}`;
  if (init.method === "POST") {
    return axios.post(fetchUrl, option, config);
  }
  if (init.method === "PATCH") {
    return axios.patch(fetchUrl, option);
  }
  if (init.method === "DELETE") {
    return axios.delete(fetchUrl, option);
  }
  return axios.get(fetchUrl, { params: option });
}

const request = {
  get: (url, option) =>
    apiRequest({
      url,
      init: {
        method: "GET",
      },
      option,
    }),

  delete: (url, option) =>
    apiRequest({
      url,
      init: {
        method: "DELETE",
      },
      option,
    }),

  post: (url, option, config) =>
    apiRequest({
      url,
      init: {
        method: "POST",
      },
      option,
      config,
    }),
  patch: (url, option) =>
    apiRequest({
      url,
      init: {
        method: "PATCH",
      },
      option,
    }),
};

export default request;
