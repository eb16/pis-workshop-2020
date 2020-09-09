require 'rails_helper'

RSpec.describe 'Api::V1::Lists', type: :request do
  let(:json_response) { JSON.parse response.body, symbolize_names: true }
  let(:serializer) { Api::V1::ListBlueprint }

  describe 'get lists' do
    subject { get api_v1_lists_path }

    before(:each) do
      create_list :list, 5
      subject
    end

    it 'returns success' do
      expect(response).to have_http_status :ok
    end

    it 'returns the lists' do
      expected_lists = List.all.map { |list| serializer.render_as_hash(list) }
      expect(json_response).to eql expected_lists
    end
  end

  describe 'create list' do
    subject { post api_v1_lists_path, params: { list: params } }

    context 'when the list can be successfully created' do
      let(:params) { attributes_for :list }

      before(:each) { subject }

      it 'returns success' do
        expect(response).to have_http_status :created
      end

      it 'returns the created list' do
        expect(json_response).to eql serializer.render_as_hash(List.first)
      end
    end

    context 'when the list cannot be created' do
      let(:params) { attributes_for :list, name: nil }

      before(:each) { subject }

      it 'returns success' do
        expect(response).to have_http_status :bad_request
      end
    end
  end

  describe 'get a list' do
    let!(:list) { create :list }

    subject { get api_v1_list_path(list_id) }

    context 'when there is a list with that specific id' do
      let(:list_id) { list.id }

      before(:each) { subject }

      it 'returns success' do
        expect(response).to have_http_status :ok
      end

      it 'returns the created list' do
        expect(json_response).to eql serializer.render_as_hash(list)
      end
    end

    context 'when the list could not be found' do
      let(:list_id) { List.maximum(:id).next }

      before(:each) { subject }

      it 'returns an error' do
        expect(response).to have_http_status :not_found
      end
    end
  end
end
