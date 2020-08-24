# Pomodoro Timer

The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s.
The technique uses a timer to break down work into intervals, traditionally 25 minutes in length,
separated by short breaks. Each interval is known as a pomodoro, from the Italian word for 'tomato',
after the tomato-shaped kitchen timer that Cirillo used as a university student.

You will implement a Pomodoro timer that follows these steps (simplified from the original technique):

1. Set the focus duration (default to 25 minutes, no less than 5 or more than 60).
1. Set the break duration (default to 5 minutes, no less than 1 or more than 15).
1. When the user clicks the "play" button, the timer starts.
1. When the focus time expires, an alarm plays and then the break timer starts.
1. When the break time expires, the alarm plays again and then the focus timer starts.

## Specific instruction

1. The code has various TODO items that should help you build the project as expected. With that said, feel free to make the changes you feel are necessary to accomplish the tasks.
1. The tests use the `data-testid="..."` attributes on elements. Removing these will break one or more tests.
1. This application uses [Bootstrap 4](https://getbootstrap.com/) for styling.
1. This application uses [Open-Iconic icons](https://useiconic.com/open) for icons.
1. Changing the duration of the focus or break session does not need to change the current timer, the changes can take effect on the next session.
1. Use the following code to play an mp3 file located in the `public` directory.
   ```javascript
   new Audio(`${process.env.PUBLIC_URL}/alarm/submarine-dive-horn.mp3`).play();
   ```
1. Break up the code into additional components that have a single responsibility.
1. Use pure functions whenever possible.
1. Display durations as `mm:ss`. i.e. 05:00 for 5 minutes or 18:45 for eighteen minutes and forty-five seconds.

## Using `setInterval` in React

Using `setInterval` with React functional components requires a custom hook.

We have provided a custom [`useInterval`](./src/useInterval/index.js) hook for you to use that is already setup to start and stop with the play/pause buttons

As it is currently configured, the `useInterval` will execute the code in the callback every second,
this should be sufficient to implement the pomodoro timer.

## Stretch Features:

1. When the break time expires, don't start the focus time until the user presses play again. This way, if the user is away from their desk during break, the focus time does not start until they return.
1. Allow the user to "reset" the current timer back to zero elapsed time.
1. Allow the user to "skip ahead" and end the current session and start the next session
1. After four short breaks, take a longer break (15–30 minutes), then start a new focus session
1. Refactor to use `useReducer()` rather than `useState()`
