import { format, fromUnixTime } from "date-fns";

export const currencyFormat = value => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND"
  }).format(value || 0);
};
export const formatUnixToDate = unix => {
  if (unix) {
    return format(fromUnixTime(unix), "iiii, dd-MM-yyyy");
  }
  return null;
};
