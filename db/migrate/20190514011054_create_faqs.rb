class CreateFaqs < ActiveRecord::Migration[5.1]
  def change
    create_table :faqs do |t|

      t.timestamps
    end
  end
end
