describe 'Capybara Workout', js: true do

  scenario 'starting the workout' do
    visit '/'

    click_link "Start Workout!"
    expect(current_path).to eq "/workout"
  end

  scenario 'clicking buttons' do
    visit workout_path

    within task_sections(:first) do
      click_button "Click me!"
      expect(page).to have_text "Well done!"
    end
  end


  def workout_path
    '/workout'
  end

  def task_sections number
    "section." + number.to_s
  end

end
