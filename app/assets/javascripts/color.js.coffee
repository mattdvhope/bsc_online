$ ->
  $('#redness').click ->
    $(this).css 'color', 'red'
    event.preventDefault()

# $ ->
#   $('#redness').hover ->
#     $(this).css 'color', 'red'
#     event.preventDefault()

# $ ->
#   $('#redness').on 'click', ->
#     state = 'clicked'
#     window.state = 'clicked'
#     console.log 'element clicked'