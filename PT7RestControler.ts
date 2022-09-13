export const fetchApi = (endpoint: string, attributes: any, callback: any) => {
  fetch(endpoint, {
    method: attributes.method,
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json; charset=UTF-8",
      ...(attributes?.headers && attributes.headers),
    },
    ...(attributes?.payload && { body: JSON.stringify(attributes.payload) }),
    cache: "default",
  })
    .then((response) => response.text())
    .then((response) => {
      return callback(response);
    });
};

export const getCookie = (name: string) => {
  var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
};

export const deleteCookie = (name: string) => {
  document.cookie = `${name}=${""}; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
};
