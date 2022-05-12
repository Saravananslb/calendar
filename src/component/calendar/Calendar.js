import React from "react";
import { connect } from "react-redux";
import { CHANGE_MONTH } from "../../actions/calendarAction";
import { MONTH_LIST } from "../../constants/calender";

const Calendar = (props) => {
  const changeMonth = (arrow) => {
    let selectedMonth;
    let selectedYear;
    if (arrow === "LEFT") {
      if (props.selectedMonth === 0) {
        selectedMonth = 11;
        selectedYear = props.selectedYear - 1;
      } else {
        selectedMonth = props.selectedMonth - 1;
        selectedYear = props.selectedYear;
      }
    } else if (arrow === "RIGHT") {
      if (props.selectedMonth === 11) {
        selectedMonth = 0;
        selectedYear = props.selectedYear + 1;
      } else {
        selectedMonth = props.selectedMonth + 1;
        selectedYear = props.selectedYear;
      }
    }
    props.dispatch({
      type: CHANGE_MONTH,
      payload: {
        selectedYear,
        selectedMonth,
      },
    });
  };

  return (
    <div className="calender-container">
      <div className="calender-inner-container">
        <div>
          <h1>Calendar</h1>
        </div>
        <div className="calender-display-container">
          <div id="calender-display">
            <div className="month-header">
              <div className="left-arrow" onClick={() => changeMonth("LEFT")}>
                {"<"}
              </div>
              <div id="month">{MONTH_LIST[props.selectedMonth]}, {props.selectedYear}</div>
              <div className="right-arrow" onClick={() => changeMonth("RIGHT")}>
                {">"}
              </div>
            </div>
            <div className="calender-container-child" id="week-container">
              <div>Sunday</div>
              <div>Monday</div>
              <div>Tuesday</div>
              <div>Wednesday</div>
              <div>Thursday</div>
              <div>Friday</div>
              <div>Saturday</div>
            </div>
            <div className="calender-container-child" id="days-container">
              {props.days.map((item, index) => (
                <div key={item + index}>{item}</div>
              ))}
            </div>
          </div>
          <div id="calender-date"></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    startDay: state.startDay,
    endDay: state.endDay,
    selectedMonth: state.selectedMonth,
    selectedYear: state.selectedYear,
    days: state.days,
  };
};

export default connect(mapStateToProps)(Calendar);
