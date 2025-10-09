export function getUser() {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("user");
  return stored ? JSON.parse(stored) : null;
}

export function isLoggedIn() {
  return !!getUser();
}

export function logout() {
  localStorage.removeItem("user");
}
