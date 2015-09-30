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
        click_button "Click me!"
        expect(page).to have_text "Well done!"
      end

      scenario "second button" do
        click_button "Click on me too!"
        expect(page).to have_text "Success!"
      end

    end

    context 'using within syntax' do

      scenario 'raises an error unless you specify within', tag: :meta do
        expect { click_button "We're the same" }.to raise_error Capybara::Ambiguous
      end

      scenario 'passes when using within syntax' do
        within task_divs(:third) do
          click_button "We're the same...but in different sections"
          expect(page).to have_text "Nice one!"
        end
      end

    end

    scenario 'targeting element by ids' do

      ['left', 'right'].each do |button_id|
        within task_divs(:fifth) do
          click_button(button_id)
          expect(page).to have_text "Well done, you clicked the button with an ID"
        end
      end

    end

    scenario 'targeting an element by class' do
      ['left', 'right'].each do |button_class|
        within task_divs(:sixth) do
          page.find("button." + button_class).click
          expect(page).to have_text "Well done, you clicked the button tagged with the '#{button_class}' class"
        end
      end
    end

  end

  context 'madlibs' do

    scenario 'filling in the madlibs form' do
      visit workout_path

      within(task_sections(:madlibs)) do 
        {
          name: "Ptolemy",
          age:  "27",
          gender: "male",
          'favourite beverage' => 'coffee'
        }.each do |input, value|
          fill_in input.to_s, with: value
        end
        click_button "Submit"
      end

      expect(current_path).to eq "/workout_two"
      expect(page).to have_text("Hello, Ptolemy!")
    end

  end

  def workout_path
    '/workout'
  end

  def task_divs number
    "div." + number.to_s
  end

  def task_sections klass
    "section." + klass.to_s
  end

end

