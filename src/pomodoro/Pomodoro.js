import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import DurationControls from "./DurationControls/DurationControls";
import StatusControls from "./StatusControls";

function Pomodoro() {
  // Timer starts out paused
  // const [isTimerRunning, setIsTimerRunning] = useState(false);
  const isTimerRunning = false;

  const [focusMinutes, setFocusMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);


  // useInterval(
  //   () => {
  //     // ToDo: Implement what should happen when the timer is running
  //   },
  //   isTimerRunning ? 1000 : null
  // );


  return (
    <div className="pomodoro">
      <DurationControls
        onFocusDurationChange={setFocusMinutes}
        onBreakDurationChange={setBreakMinutes}
        focusMinutes={focusMinutes}
        breakMinutes={breakMinutes}
      />

      <StatusControls
        isRunning={isRunning}
        isPaused={isPaused}
        onPlay={() => {
          setIsRunning(true)
          setIsPaused(false)
        }}
        onStop={() => setIsRunning(false)}
        onPause={() => setIsPaused(true)}
      />

      <StatusDisplay />
    </div>
  );
}

export default Pomodoro;
