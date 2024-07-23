export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

export const binarySearch = (arr, callback, low, high) => {
  if (!arr.length) {
    return 0;
  }
  if (low === undefined) {
    low = 0;
  }
  if (high === undefined) {
    high = arr.length;
  }
  if (low >= high) {
    return low;
  }
  const half_index = Math.ceil((low + high) / 2) - 1;
  const pivot = arr[half_index];
  switch (callback(pivot)) {
    case 0:
      return half_index;
    case 1:
      return binarySearch(arr, callback, half_index + 1, high);
    case -1:
      return binarySearch(arr, callback, low, half_index - 1);
  }
};
