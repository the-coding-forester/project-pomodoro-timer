import React, { useState } from "react";
import DurationControls from "./DurationControls/DurationControls";
import StatusControls from "./StatusControls";
import StatusDisplay from "./StatusDisplay";

function Pomodoro() {

  const [focusMinutes, setFocusMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

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

      <StatusDisplay
        focusDuration={focusMinutes * 60}
        breakDuration={breakMinutes * 60}
        isPaused={isPaused}
        isRunning={isRunning}
      />
    </div>
  );
}

export default Pomodoro;
