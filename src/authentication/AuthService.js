
export const login = async (username) => {
  localStorage.setItem("user", username);
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return null;
  }
  return user;
};
