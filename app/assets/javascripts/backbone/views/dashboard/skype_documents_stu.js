var SkypeDocumentsStuView = Backbone.View.extend({

  template:  HandlebarsTemplates['dashboard/skype_documents_stu'],

  render: function() {
console.log(this.model);
    $("#skype-documents-stu-below").after(
      this.template({
        student: this.model.toJSON(),
        // time_slots: collection_objects
      })
    );
  } // render

});
