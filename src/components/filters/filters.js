import React, { Component } from "react";
import styles from "./styles.css";
import Select from "react-select";
import PropTypes from "prop-types";

import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

// @connect(state => ({ filtersState: state.filters }))
class Filters extends Component {
  static propTypes = {
    filters: PropTypes.shape({
      startDate: PropTypes.date,
      endDate: PropTypes.date
    })
  };

  handleChange = changes => {
    // this.setState({selectedOption: changes});
    console.log("select changes", changes, this.props);
  };

  render() {
    console.log(this.props.filters);
    const from = this.props.filters.startDate || undefined;
    const to = this.props.filters.endDate || undefined;
    const modifiers = { start: from, end: to };
    const selectedValue = null;

    return (
      <div className={styles.filters}>
        <h2>Filter here</h2>
        <div className={styles.filters__holder}>
          <div className={styles.filters__select}>
            <Select
              value={selectedValue}
              onChange={this.handleChange}
              options={options}
            />
          </div>

          <div className={styles.InputFromTo}>
            <DayPickerInput
              value={from}
              placeholder="From"
              format="LL"
              formatDate={formatDate}
              parseDate={parseDate}
              dayPickerProps={{
                selectedDays: [from, { from, to }],
                disabledDays: { after: to },
                toMonth: to,
                modifiers,
                numberOfMonths: 1,
                onDayClick: () => this.to.getInput().focus()
              }}
              onDayChange={from => this.props.setFiltersStartDate(from)}
            />{" "}
            —{" "}
            <span className="InputFromTo-to">
              <DayPickerInput
                ref={el => (this.to = el)}
                value={to}
                placeholder="To"
                format="LL"
                formatDate={formatDate}
                parseDate={parseDate}
                dayPickerProps={{
                  selectedDays: [from, { from, to }],
                  disabledDays: { before: from },
                  modifiers,
                  month: from,
                  fromMonth: from,
                  numberOfMonths: 1
                }}
                onDayChange={to => this.props.setFiltersEndDate(to)}
              />
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Filters;
