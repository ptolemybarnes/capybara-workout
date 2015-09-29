# Capybara Workout
I created [this site](//capybaraworkout.herokuapp.com/) as a playground for students at Makers Academy to learn to use Capybara to send instructions to an automated browser.

### Tech
I took the opportunity to explore functional javascript with the [Ramda](https://github.com/ramda/ramda) library.
```js
R.compose(_.setHTMLofElement(successMsg), _.getClickedElement)
```

### Style
```haml
.fifth.centered-row
    .button-row
      %button.button--horizontal{ id: 'left' } We're the same but we have different IDs
      %button.button--horizontal{ id: 'right'} We're the same but we have different IDs
```
Style assets are pinched from [makersacademy.com](//makersacademy.com/elements).
