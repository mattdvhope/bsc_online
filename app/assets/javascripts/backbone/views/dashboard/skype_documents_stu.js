var SkypeDocumentsStuView = Backbone.View.extend({

  template:  HandlebarsTemplates['dashboard/skype_documents_stu'],

  render: function() {
    $("#skype-documents-stu-below").after(
      this.template({
        student: this.model.toJSON()
      })
    );
  } // render

});
