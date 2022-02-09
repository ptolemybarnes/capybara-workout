describe "Capybara Workout", type: :feature, js: true do
  before :each do
    visit(workout_path)
  end

  it "Clicks on a button" do
    click_button 'Click me!'

    expect(page).to have_content 'You clicked me!'
  end

  it "Clicks on a button using a specific ID" do
    find_by_id('coffee').click

    expect(page).to have_content 'You clicked me!'
  end

  it "Clicks on a button using a specific ID" do
    click_on({id: 'coffee'})

    expect(page).to have_content 'You clicked me!'
  end

  it "Clicks on a button using a specific class" do
    find('button.london').click

    expect(page).to have_content 'You clicked me!'
  end

  it "Clicks on a button within a specific element" do
    within('div.banana') do
      click_button("Same button, different div")
    end

    expect(page).to have_content 'You clicked me!'
  end

  it "Clicks on a checkbox" do
    check('first-checkbox')

    expect(page).to have_content 'You clicked me!'
  end

  it "Submits data via a form" do
    within("form") do
      fill_in 'your_name', with: 'Tommy'
      fill_in 'coach_name', with: 'Roi'
      click_button 'Submit'
    end

    assert_current_path('/finish')
    expect(page).to have_content 'Congratulations Tommy — You Finished!'
    expect(page).to have_content 'Your coach Roi is proud of you!'
  end
end

def workout_path
  '/workout'
end