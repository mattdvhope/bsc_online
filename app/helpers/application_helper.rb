module ApplicationHelper

  def full_title(page_title)
    base_title = "CEP Online"
    page_title.empty? ?  base_title : "#{page_title}"
  end

end