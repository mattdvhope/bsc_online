json.array! @class_times do |class_time|

  json.id                     class_time.id
  json.period                 class_time.period
  json.period_thai            class_time.period_thai
  json.category               class_time.category
  json.part                   class_time.part
  json.order_no               class_time.order_no
  json.completed              class_time.completed
  json.cancelled              class_time.cancelled
  json.users                  class_time.users

end