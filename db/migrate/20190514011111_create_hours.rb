class CreateHours < ActiveRecord::Migration[5.1]
  def change
    create_table :hours do |t|

      t.timestamps
    end
  end
end
