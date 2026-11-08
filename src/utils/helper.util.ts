import Cookies from "js-cookie";
export const getCookieValue = (cookieKey: string): string | null => {
  const cookies = Cookies.get(cookieKey);
  return cookies || null;
};
