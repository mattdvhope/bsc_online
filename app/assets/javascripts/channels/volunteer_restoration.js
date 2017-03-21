Appp.volunteer_restoration = Appp.cable.subscriptions.create({channel: "VolunteerRestorationChannel"}, {
                                // when .create is invoked, it will invoke the VolunteerRestorationChannel#subscribed method (in Rails), which is in fact a callback method.
  connected: function() {
    console.log("connected to ActionCable");
  },
  disconnected: function() {
    console.log("disconnected from ActionCable");
  },
  received: function(data) {
console.log("In 'VolunteerRestorationChannel'");
console.log(data);

    //!!!!!! Use a conditional 'break' to prevent endless cycling through the 'received' method
    // if (i === 3) { break; }
    // see https://blog.ably.io/rails-5-actioncable-the-good-and-bad-parts-1b56c3b31404#.lmxbqy146

    $("#vol-avail-template").remove();
    var student = App.presentUserModel();
    App.getVolunteersAvailableView(student);

    // $("#ul-of-vol-avail").append(

    //  '<li>
    //     <h3>
    //       ชื่อ: <span style="text-decoration: underline;">' + data.first_name + ' ' + data.last_name}}'</span>
    //     </h3>
    //     <h4>
    //       เพศ: ' + data.gender + '
    //     </h4>
    //     <h4>อายุ: ' + data.age + '</h4>
    //     <h4>รัฐ: ' + data.province + '</h4>
    //     <h4>ประเทศ: ' + data.country + '</h4>
    //     <h4 id="choose-skype-time">เลือกเวลาการสนทนาภาษาอังกฤษทาง Skype กับ คุณ ' + data.first_name + '.  ' + data.first_name + ' is available for only 1 of these slots:</h4>

    //     {{#disableSomeSlots this.skype_time_slots}}
    //       <div id="checkArray">
    //       {{#if this.available}}
    //         <input class="checkers" data-id={{this.id}} data-volunteer-id={{this.volunteer_id}} type="checkbox">
    //         <span id="skype-time-slot-available" data-order={{this.ordertime}}>{{this.day_thai}} {{this.time_thai}}</span>
    //       {{else}}
    //         {{> skype_time_slot_input }}
    //         <span id="skype-time-slot-available" style="color: #8BC34A;">{{this.day_thai}} {{this.time_thai}} กับคุณ, {{../../../first_name}}</span>
    //       {{/if}}
    //       </div>
    //     {{/disableSomeSlots}}
    //     <h4>หลังจากคุณเลือกช่วงเวลาสำหรับการสนทนาภาษาอังกฤษทาง Skype จาก {{this.first_name}} กรุณาคลิ๊กที่ปุ่มสีเขียวนี้ ระบบตอบรับอีเมลอัตโนมัติจะถูกส่งออกไปเพื่อแจ้ง {{this.first_name}} ที่คุณต้องการจะเป็นคู่สนทนาทาง Skype ด้วย {{this.first_name}}</h4>
    //     <button id="connect-with-volunteer" class="btn btn-success" data-id={{this.id}} data-firstname={{this.first_name}} data-lastname={{this.last_name}}>
    //       ส่งอีเมลอัตโนมัติถึง {{this.first_name}}
    //     </button>
    //     <hr>
    //   </li>'


    // ); // $("#ul-of-vol-avail").append

  },

});

