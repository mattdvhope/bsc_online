Appp.volunteer_removal = Appp.cable.subscriptions.create({channel: "VolunteerRemovalChannel"}, {
                                // when .create is invoked, it will invoke the VolunteerRemovalChannel#subscribed method (in Rails), which is in fact a callback method.
  connected: function() {
    console.log("connected to ActionCable");
  },
  disconnected: function() {
    console.log("disconnected from ActionCable");
  },
  received: function(data) {

    if (data.available === false) {
console.log(data);
      $('li[data-volunteer-id="'+ data.volunteer_id + '"]')
      .not('li[data-student-id="'+ data.student_id + '"]').remove();
    }
    else if  (data.available === true) {
console.log(data);

    //   $("#ul-of-vol-avail").append(

    //     '<li data-volunteer-id=' + data.volunteer_id + 'data-student-id=' + data.student_id + 
    //       '<h3>' +
    //         'ชื่อ: <span style="text-decoration: underline;">' + data.vol_first_name + ' ' + data.vol_last_name + '</span>' +
    //       '</h3>' +
    //       '<h4>' + data.vol_gender + '</h4>' +
    //       '<h4>อายุ: ' + data.vol_age + '</h4>' +
    //       '<h4>มลรัฐในสหรัฐ: ' + data.vol_province + '</h4>' +
    //       '<h4 id="choose-skype-time">เลือกเวลาการสนทนาภาษาอังกฤษทาง Skype กับ คุณ ' + data.vol_first_name + '.  ' + data.vol_first_name + ' มีเวลาว่างกับ 1 ใน ' + data.vol_slot_num + ' ช่องนี้เท่านั้น:</h4>' +

    //         '<div id="checkArray">' +
    //           '<input class="checkers" data-id=' + '"1" ' + 'data-volunteer-id=' + data.volunteer_id + ' type="checkbox">' +
    //           '<span id="skype-time-slot-available" data-order=' + '1' + '>' + 'Tuesday ' + '12:00น.' + '</span>' +
    //         '</div>' +

    //       '<h4>หลังจากคุณเลือกช่วงเวลาสำหรับการสนทนาภาษาอังกฤษทาง Skype จาก ' + data.vol_first_name + ' กรุณาคลิ๊กที่ปุ่มสีเขียวนี้ ระบบตอบรับอีเมลอัตโนมัติจะถูกส่งออกไปเพื่อแจ้ง ' + data.vol_first_name + ' ที่คุณต้องการจะเป็นคู่สนทนาทาง Skype ด้วย ' + data.first_name + '</h4>' +
    //       '<button id="connect-with-volunteer" class="btn btn-success" data-id=' + '"1"' + 'data-firstname=' + data.vol_first_name + ' ' + 'data-lastname=' + data.vol_last_name + '>' +
    //         'ส่งอีเมลอัตโนมัติถึง ' + data.first_name +
    //       '</button>' +
    //       '<hr>' +
    //     '</li>'

    //   ); // $("#ul-of-vol-avail").append

    } // else if

  }, // received:

}); // Appp.cable.subscriptions.create

