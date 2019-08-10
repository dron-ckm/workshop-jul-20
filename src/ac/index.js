import {
  DELETE_ARTICLE,
  INCREMENT,
  SET_FILTERS_START_DATE,
  SET_FILTERS_END_DATE
} from "../constants";

export const increment = () => ({
  type: INCREMENT
});

export const deleteArticle = id => ({
  type: DELETE_ARTICLE,
  payload: { id }
});

export const setFiltersStartDate = startDate => {
  return {
    type: SET_FILTERS_START_DATE,
    payload: { startDate }
  };
};

export const setFiltersEndDate = endDate => ({
  type: SET_FILTERS_END_DATE,
  payload: { endDate }
});
