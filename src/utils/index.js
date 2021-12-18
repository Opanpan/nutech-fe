const TOKEN_KEY = "jwt";

export const login = (data) => {
  localStorage.setItem(TOKEN_KEY, data.token);
  localStorage.setItem("user", data.user.username);
  localStorage.setItem("id", data.user.id);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem("user");
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }

  return false;
};
