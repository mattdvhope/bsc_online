var SkypeDocumentsView = Backbone.View.extend({

  template:  HandlebarsTemplates['dashboard/skype_documents'],

  render: function() {
    $("#skype-documents-below").after(
      this.template({
        volunteer: this.model.toJSON(),
        // time_slots: collection_objects
      })
    );
  } // render

});
