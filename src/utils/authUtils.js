export const authenticateUser = (email, password) => {
  const storedUser = JSON.parse(localStorage.getItem("adminUser")) || {};
  return storedUser.email === email && storedUser.password === password;
};

export const saveAdminCredentials = (email, password) => {
  localStorage.setItem("adminUser", JSON.stringify({ email, password }));
};
