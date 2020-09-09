FactoryBot.define do
  factory :list do
    name { Faker::Color.color_name }
  end
end
