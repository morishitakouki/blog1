class AddNullFalse < ActiveRecord::Migration[6.1]
  def change
    change_column_null :posts, :title, false 
    change_column_null :posts, :content, false
  end
end
