(function() {
  this.HandlebarsTemplates || (this.HandlebarsTemplates = {});
  this.HandlebarsTemplates["application/application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "  <div class=\"modal-dialog\">\n  \n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        <h3 class=\"modal-title\">"
    + this.escapeExpression(((helper = (helper = helpers.application_title || (depth0 != null ? depth0.application_title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"application_title","hash":{},"data":data}) : helper)))
    + "</h3>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"form-horizontal\">\n          <div class=\"control-group\">\n            <label>Something to add to form</label>\n            <input type=\"text\" class=\"form-control category_name\" placeholder=\"Input data\" aria-describedby=\"basic-addon1\" maxlength=\"100\">\n            <br>\n            <button class=\"category_add btn btn-primary\">Add</button>\n          </div>\n\n          <ul class=\"categories span3\">\n\n          </ul>\n        </form>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n    \n  </div>\n";
},"useData":true});
  return this.HandlebarsTemplates["application/application"];
}).call(this);
