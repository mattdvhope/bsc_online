function setThaiAttributes(time_slot, day, time_period, am_pm) {

  var time_parts = time_period.match(/(\d{1,2})(:)(00|30) - (\d{1,2})(:)(00|30)/);
  first_time = parseInt(time_parts[1]);
  first_time_mins = parseInt(time_parts[3]);
  second_time = parseInt(time_parts[4]);
  second_time_mins = parseInt(time_parts[6]);

  var thai_first_time;
  var time_thai;
  var day_thai;

  if (volunteerIsInDaylightSavingsTime()) {
    if (am_pm == "AM EST") {
      thai_first_time = first_time + 11;
      if (first_time_mins === 00) {
        thai_second_time = thai_first_time;
        time_thai = thai_first_time + ":00 - " + thai_second_time + ":30น.";
      }
      else if (first_time_mins === 30) {
        thai_second_time = thai_first_time + 1;
        time_thai = thai_first_time + ":30 - " + thai_second_time + ":00น.";
      }
      
      if (first_time === 12 && first_time_mins === 00) {
        time_thai = "11:00 - 11:30น.";
      }
      if (first_time === 12 && first_time_mins === 30) {
        time_thai = "11:30 - 12:00น.";
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
      if (first_time_mins === 00) {
        thai_second_time = thai_first_time;
        time_thai = thai_first_time + ":00 - " + thai_second_time + ":30น.";
      }
      else if (first_time_mins === 30) {
        thai_second_time = thai_first_time + 1;
        time_thai = thai_first_time + ":30 - " + thai_second_time + ":00น.";
      }

      if (first_time === 12 && first_time_mins === 00) {
        time_thai = "23:00 - 23:30น.";
      }
      if (first_time === 12 && first_time_mins === 30) {
        time_thai = "23:30 - 00:00น.";
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
      if (first_time_mins === 00) {
        thai_second_time = thai_first_time;
        time_thai = thai_first_time + ":00 - " + thai_second_time + ":30น.";
      }
      else if (first_time_mins === 30) {
        thai_second_time = thai_first_time + 1;
        time_thai = thai_first_time + ":30 - " + thai_second_time + ":00น.";
      }

      if (first_time === 12 && first_time_mins === 00) {
        time_thai = "12:00 - 12:30น.";
      }
      if (first_time === 12 && first_time_mins === 30) {
        time_thai = "12:30 - 00:00น.";
      }
      if (first_time === 11 && first_time_mins === 30) {
        time_thai = "23:30 - 00:00น.";
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
      if (first_time_mins === 00) {
        thai_second_time = thai_first_time;
        time_thai = thai_first_time + ":00 - " + thai_second_time + ":30น.";
      }
      else if (first_time_mins === 30) {
        thai_second_time = thai_first_time + 1;
        time_thai = thai_first_time + ":30 - " + thai_second_time + ":00น.";
      }

      if (first_time === 12 && first_time_mins === 00) {
        time_thai = "00:00 - 00:30น.";
      }
      if (first_time === 12 && first_time_mins === 30) {
        time_thai = "00:30 - 01:00น.";
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


