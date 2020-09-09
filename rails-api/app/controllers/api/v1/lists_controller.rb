class Api::V1::ListsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_error

  before_action :find_list, only: :show

  def index
    render json: Api::V1::ListBlueprint.render(List.all)
  end

  def create
    list = List.new create_list_params

    if list.save
      render json: Api::V1::ListBlueprint.render(list), status: :created
    else
      render status: :bad_request
    end
  end

  def show
    render json: Api::V1::ListBlueprint.render(@list)
  end

  private

  def create_list_params
    params.require(:list).permit(:name)
  end

  def find_list
    @list = List.find params[:id]
  end

  def not_found_error
    render status: :not_found, json: 'Cannot find record'
  end
end
