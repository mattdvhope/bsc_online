class Practice < ActiveRecord::Base

  # 'type_of' refers to vocabulary, phrases & sentences for practice
  belongs_to :lesson

end
