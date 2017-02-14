var SkypeDocumentsVolView = Backbone.View.extend({

  template:  HandlebarsTemplates['dashboard/skype_documents_vol'],

  render: function() {
    $("#skype-documents-vol-below").after(
      this.template({
        volunteer: this.model.toJSON(),
        // time_slots: collection_objects
      })
    );
  } // render

});
