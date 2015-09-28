describe 'Capybara Workout', js: true do

  scenario 'starting the workout' do
    visit '/'

    click_link "Start Workout!"
    expect(current_path).to eq "/workout"
  end

  context 'clicking buttons' do

    before do
        visit workout_path
    end

    context 'with unique text' do
      
      scenario "first button" do

        within task_sections(:first) do
          click_button "Click me!"
          expect(page).to have_text "Well done!"
        end

      end

      scenario "second button" do

        within task_sections(:second) do
          click_button "Click on me too!"
          expect(page).to have_text "Success!"
        end

      end

    end

    context 'with same text' do

      scenario 'raises an error unless you specify within', tag: :meta do
        expect { click_button "We're the same" }.to raise_error Capybara::Ambiguous
      end

      scenario 'passes when using within syntax' do
        within task_sections(:third) do
          click_button "We're the same...but different"
          expect(page).to have_text "Nice one!"
        end
      end

    end

    scenario 'targeting element by ids' do

      ['top', 'bottom'].each do |button_id|
        within task_sections(:fifth) do
          click_button(button_id)
          expect(page).to have_text "Well done, you clicked the button with an ID"
        end
      end
    end

  end

  def workout_path
    '/workout'
  end

  def task_sections number
    "section." + number.to_s
  end

end
