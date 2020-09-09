require 'rails_helper'

RSpec.describe List, type: :model do
  let(:list) { build :list }

  describe 'validations' do
    it 'is valid with valid attrs' do
      expect(list).to be_valid
    end

    it 'is not valid if name is missing' do
      list.name = nil
      expect(list).not_to be_valid
    end
  end
end
