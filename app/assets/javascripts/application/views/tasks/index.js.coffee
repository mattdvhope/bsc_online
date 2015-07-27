class App.Views.Tasks.Index extends App.View
  render: ->
    @$el.empty()
    for model in @collection.models
      @$el.append(model.get('notes'))