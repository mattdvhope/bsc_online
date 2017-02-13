function setThaiAttributes(time_slot, day, time_period, am_pm) {

  var first_time = time_period.match(/(\d{1,2})/);
  first_time = parseInt(first_time[0]);
  var thai_first_time;
  var time_thai;
  var day_thai;

  if (volunteerIsInDaylightSavingsTime()) {
    if (am_pm == "AM EST") {
      thai_first_time = first_time + 11;
      thai_second_time = thai_first_time + 1;
      time_thai = thai_first_time + ":00 - " + thai_second_time + ":00น.";
      if (first_time == 12) {
        time_thai = "11:00 - 12:00น.";
      }
      if (day == "Sunday") {day_thai = "วันอาทิตย์"}
      if (day == "Monday") {day_thai = "วันจันทร์"}
      if (day == "Tuesday") {day_thai = "วันอังคาร"}
      if (day == "Wednesday") {day_thai = "วันพุธ"}
      if (day == "Thursday") {day_thai = "วันพฤหัสบดี"}
      if (day == "Friday") {day_thai = "วันศุกร์"}
      if (day == "Saturday") {day_thai = "วันเสาร์"}
    } 
    else if (am_pm == "PM EST") {
      thai_first_time = first_time - 1;
      thai_second_time = thai_first_time + 1;
      time_thai = thai_first_time + ":00 - " + thai_second_time + ":00น.";
      if (first_time == 12) {
        time_thai = "23:00 - 00:00น.";
      }

      if (first_time != 12) {
        if (day == "Sunday") {day_thai = "วันจันทร์"}
        if (day == "Monday") {day_thai = "วันอังคาร"}
        if (day == "Tuesday") {day_thai = "วันพุธ"}
        if (day == "Wednesday") {day_thai = "วันพฤหัสบดี"}
        if (day == "Thursday") {day_thai = "วันศุกร์"}
        if (day == "Friday") {day_thai = "วันเสาร์"}
        if (day == "Saturday") {day_thai = "วันอาทิตย์"}
      } else {
        if (day == "Sunday") {day_thai = "วันอาทิตย์"}
        if (day == "Monday") {day_thai = "วันจันทร์"}
        if (day == "Tuesday") {day_thai = "วันอังคาร"}
        if (day == "Wednesday") {day_thai = "วันพุธ"}
        if (day == "Thursday") {day_thai = "วันพฤหัสบดี"}
        if (day == "Friday") {day_thai = "วันศุกร์"}
        if (day == "Saturday") {day_thai = "วันเสาร์"}
      }
    }
  }
  else { // if it's not 'daylight s.t.'
    if (am_pm == "AM EST") {
      thai_first_time = first_time + 12;
      thai_second_time = thai_first_time + 1;
      time_thai = thai_first_time + ":00 - " + thai_second_time + ":00น.";
      if (first_time == 12) {
        time_thai = "12:00 - 13:00น.";
      }
      if (day == "Sunday") {day_thai = "วันอาทิตย์"}
      if (day == "Monday") {day_thai = "วันจันทร์"}
      if (day == "Tuesday") {day_thai = "วันอังคาร"}
      if (day == "Wednesday") {day_thai = "วันพุธ"}
      if (day == "Thursday") {day_thai = "วันพฤหัสบดี"}
      if (day == "Friday") {day_thai = "วันศุกร์"}
      if (day == "Saturday") {day_thai = "วันเสาร์"}
    } 
    else if (am_pm == "PM EST") {
      thai_first_time = first_time;
      thai_second_time = thai_first_time + 1;
      time_thai = thai_first_time + ":00 - " + thai_second_time + ":00น.";
      if (first_time == 12) {
        time_thai = "0:00 - 1:00น.";
      }
      if (day == "Sunday") {day_thai = "วันจันทร์"}
      if (day == "Monday") {day_thai = "วันอังคาร"}
      if (day == "Tuesday") {day_thai = "วันพุธ"}
      if (day == "Wednesday") {day_thai = "วันพฤหัสบดี"}
      if (day == "Thursday") {day_thai = "วันศุกร์"}
      if (day == "Friday") {day_thai = "วันเสาร์"}
      if (day == "Saturday") {day_thai = "วันอาทิตย์"}
    }
  } // if-else 'dst'
  time_slot.set({
    day_thai: day_thai,
    time_thai: time_thai
  });

  return time_slot;

} // function setThaiAttributes()


