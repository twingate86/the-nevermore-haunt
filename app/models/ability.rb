class Ability
    include CanCan::Ability

    def initialize(user)
        cannot :read, User
        cannot :create, User
        if user.admin?
            can :manage, all
        end
    end
end