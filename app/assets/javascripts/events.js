$(function() {
  var event_template = Handlebars.compile($("#event").html()),
      events_template = Handlebars.compile($("#events").html());

  Handlebars.registerPartial("event", $("#event").html()); // the "event" in quotes here refers to the partial tag in the HTML file: {{> event}}

  var Events = {
    collection: [],
    $el: $("#events_list"), // '$el' is the parent element that we'll use for any operations within our 'Events' object
    add: function(events) {
      var self = this; // we'll store the local context b/c we'll write a 'forEach' method that's going to need to access the 'Events' object
      events = _.isArray(events) ? events : [events]; // if 'events' is an array, simply return it, but if it's not, then make an array out of it here ; by assigning 'events' (left of = sign), we'll reset events to ensure that it is an array that can be run through the 'forEach' method below...even if it only has one element in the array

      events.forEach(function(event) { // we're running a 'forEach' loop here b/c we need to handle the possiblity that when calling the 'add' method when there are already elements in this collection, if we simply did 'self.collection = events;' , we'd only get a collection of one event rather than the accumulated number of events (more than one) 
        self.collection.push(event); // 'self' here is a reference to the 'Events' object
      });
         
      self.render(); // whenever we add a new event to this collection, we'll have to re-render this events list
    },
    render: function(events) { // it will render the events from the events call
      this.$el.html(events_template({ events: this.collection }));
    }
  };

  $("form").on("submit", function(e) { // we want to create new instances of these events by submitting this form
    e.preventDefault();
    var $f = $(this); // store the <form> element as a jQuery object
    
    $.ajax({ // on our <form> element, we've already got our action and method operated on our form ( <form action="/events/new" method="post"> ), so we can read that in for our ajax call
      url: $f.attr("action"),
      type: $f.attr("method"),
      data: $f.serialize(), // our data is the serialization of the form
      success: function(event) { // this method will return a single object, not an array of events
        Events.add(event);
console.log(Events);
console.log($f);
console.log($f.serialize());
      }
    });
  });

  $.ajax({
    url: "/events",
    // url: "/events.json",
    dataType: "json",
    success: function(events) {
      Events.add(events);
    }
  });
});



