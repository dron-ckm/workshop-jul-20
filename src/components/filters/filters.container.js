import Filters from "./filters";
import { setFiltersStartDate, setFiltersEndDate } from "../../ac";
import { connect } from "react-redux";

const mapStateToProps = storeState => ({
  filters: storeState.filters
});

const mapDispatchToProps = {
  setFiltersStartDate,
  setFiltersEndDate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
