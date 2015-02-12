# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$ ->
    $('a.answer').hover (event) ->
        $(this).toggleClass("mouse_over")

$ ->
    $('a.answer').click (event) ->
        $(this).toggleClass("mouse_over")



# $ ->
#     $('a.answer').on "ajax:success", (e, data, status, xhr) ->
#         alert("AJAX worked!!!")