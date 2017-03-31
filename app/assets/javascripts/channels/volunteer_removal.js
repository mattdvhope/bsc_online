$(document).ready(function(){

Appp.volunteer_removal = Appp.cable.subscriptions.create({channel: "VolunteerRemovalChannel"}, {
                                // when .create is invoked, it will invoke the VolunteerRemovalChannel#subscribed method (in Rails), which is in fact a callback method.
  connected: function() {
    console.log("connected to ActionCable");
  },
  disconnected: function() {
    console.log("disconnected from ActionCable");
  },
  received: function(data) {

    var current_clicker_id = data.student_id;
    var present_user_id = $('ul#ul-of-vol-avail').data("student-id");

    if (data.available === false) {
console.log("false: ", present_user_id);

      $('li[data-volunteer-id="'+ data.volunteer_id + '"]')
      .not('li[data-student-id="'+ current_clicker_id + '"]').remove();
    }
    else if (data.available === true) {
console.log("true: ", present_user_id);
      $('h4[data-id=' + data.volunteer_id + ']').children().remove();

      if ($('li[data-volunteer-id=' + data.volunteer_id + ']').length === 0) {

        $("#ul-of-vol-avail").append(

          '<li data-volunteer-id=' + data.volunteer_id + ' data-student-id=' + present_user_id + ' ' +
            '<h3>' +
            '<h3>ชื่อ: <span style="text-decoration: underline;">' + data.vol_first_name + ' ' + data.vol_last_name + '</span></h3>' +

             // change gender to Thai!!!
            '<h4>เพศ: ' + data.vol_gender + '</h4>' +

            '<h4>อายุ: ' + data.vol_age + '</h4>' +
            '<h4>มลรัฐในสหรัฐ: ' + data.vol_province + '</h4>' +
            '<h4 id="choose-skype-time" data-id="' + data.volunteer_id + '">เลือกเวลาการสนทนาภาษาอังกฤษทาง Skype กับ คุณ ' + data.vol_first_name + '.  ' + data.vol_first_name + ' มีเวลาว่างกับ 1 ใน ' + data.vol_slot_num + ' ช่องนี้เท่านั้น:</h4>' +
              // slots appended here
            '<h4>หลังจากคุณเลือกช่วงเวลาสำหรับการสนทนาภาษาอังกฤษทาง Skype จาก ' + data.vol_first_name + ' กรุณาคลิ๊กที่ปุ่มสีเขียวนี้ ระบบตอบรับอีเมลอัตโนมัติจะถูกส่งออกไปเพื่อแจ้ง ' + data.vol_first_name + ' ที่คุณต้องการจะเป็นคู่สนทนาทาง Skype ด้วย ' + data.first_name + '</h4>' +
            '<button id="connect-with-volunteer" class="btn btn-success" data-id=' + '"1"' + 'data-firstname=' + data.vol_first_name + ' ' + 'data-lastname=' + data.vol_last_name + '>' +
              'ส่งอีเมลอัตโนมัติถึง ' + data.vol_first_name +
            '</button>' +
            '<hr>' +
          '</li>'

        ); // $("#ul-of-vol-avail").append

      } // if

      // data.vol_slots.data.vol_slots.sort(function(a, b){return a.order-b.order});

      data.vol_slots.forEach(function(slot) {
        $('h4[data-id=' + data.volunteer_id + ']').append(
          '<div id="checkArray">' +
            '<input class="checkers" data-id=' + slot.id + ' data-volunteer-id=' + data.volunteer_id + ' data-student-id=' + present_user_id + ' type="checkbox" style="transform: scale(1.5, 1.5); zoom: 1.2; margin-left: 0.8em; margin-top: 0.3em">' +
            '<span id="skype-time-slot-available" style="font-size: 16.5px;" data-order=' + '1' + '>' + slot.day_thai + ' ' + slot.time_thai + '</span>' +
          '</div>'
        ); // 'h4[data-id='... .append
      });

      if ($('span:contains("กับคุณ")').length > 0) {
        $(".checkers[data-volunteer-id=" + data.volunteer_id + "][data-student-id=" + present_user_id + "]").parent().find('input').each(function() {
          console.log($(this)[0]);
          $(this).attr("disabled", true);
        });
      }

    } // else if ... true

  }, // received:

}); // Appp.cable.subscriptions.create

}); // $(document).ready

