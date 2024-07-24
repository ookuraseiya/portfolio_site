export const DOMAIN = String(import.meta.env.VITE_MICROCMS_DOMAIN);
export const BUSINESS_END_POINT = String(
  import.meta.env.VITE_MICROCMS_ENDPOINT_BUSINESS
);
export const PERSONAL_END_POINT = String(
  import.meta.env.VITE_MICROCMS_ENDPOINT_PERSONAL
);
export const ACQUISITION_CONDITION = "?limit=100&orders=-publishedAt";
export const API = String(import.meta.env.VITE_MICROCMS_API_KEY);
