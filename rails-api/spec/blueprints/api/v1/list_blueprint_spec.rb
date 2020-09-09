require 'rails_helper'

RSpec.describe Api::V1::ListBlueprint do
  let(:list) { create :list }

  it 'has the expected keys' do
    expected_keys = %i[id name]

    expect(described_class.render_as_hash(list).keys).to match_array expected_keys
  end
end
