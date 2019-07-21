class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable,
         :recoverable, :rememberable, :validatable
end
 
  #removed :registerable to prevent randos
  #devise :database_authenticatable, :registerable,
         #:recoverable, :rememberable, :validatable
