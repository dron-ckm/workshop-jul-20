import { SET_FILTERS_START_DATE, SET_FILTERS_END_DATE } from "../constants";

const defaultFilters = {
  startDate: null,
  endDate: null
};
export default (filters = defaultFilters, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FILTERS_START_DATE:
      return {
        ...filters,
        startDate: payload.startDate
      };

    case SET_FILTERS_END_DATE:
      return {
        ...filters,
        endDate: payload.endDate
      };

    default:
      return defaultFilters;
  }
};
