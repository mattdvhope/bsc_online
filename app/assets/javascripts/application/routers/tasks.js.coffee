class App.Routers.Tasks extends App.Router

  routes:
    "tasks" : "index"

  index: ->
    collection = new App.Collections.Tasks [
      { id: 1, notes: "Dust" }
      { id: 2, notes: "Wash" }
    ]
    view = new App.Views.Tasks.Index(collection: collection)
    $('body').html(view.el)
    view.render()