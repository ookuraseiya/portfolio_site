import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import { GA_TRACKING_ID } from "../config/config";

export const usePageTracking = () => {
  const location = useLocation();
  useEffect(() => {
    ReactGA.initialize(GA_TRACKING_ID);
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);
};