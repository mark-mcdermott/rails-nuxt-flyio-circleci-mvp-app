
require 'rails_helper'

RSpec.describe "Health Endpoint", type: :request do
  it "returns OK" do
    get "/api/v1/up", headers: { "ACCEPT" => "application/json" }
    expect(response).to have_http_status(:success)
    expect(JSON.parse(response.body)['status']).to eq('OK')
  end
end
