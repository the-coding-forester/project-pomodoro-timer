import React, { useState } from "react"
import { secondsToDuration } from "../utils/duration";
import useInterval from "../utils/useInterval";

function StatusDisplay({ focusDuration, breakDuration, isPaused, isRunning }) {
  const [isFocusing, setIsFocusing] = useState(true);
  const [countdownTime, setCountdownTime] = useState(focusDuration)

  useInterval(
    () => {
      if (isPaused) {
        return
      }
      if (countdownTime === 0) {
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
        setIsFocusing((prevState) => !prevState);
        isFocusing ? setCountdownTime(breakDuration) : setCountdownTime(focusDuration);

        return;
      }
      setCountdownTime((currentCountdownTime) => currentCountdownTime - 1)
    },
    isRunning ? 1000 : null
  );

  if (!isRunning) {
    if (!isFocusing) {
      setIsFocusing(true);
    }

    if (countdownTime !== (focusDuration)) {
      setCountdownTime(focusDuration)
    }

    return null;
  }

  let progress = 0;

  if (isFocusing) {
    progress = Math.round((focusDuration - countdownTime) / focusDuration * 100);
  } else {
    progress = Math.round((breakDuration - countdownTime) / breakDuration * 100);
  }

  const focusMessage = `Focusing for ${secondsToDuration(focusDuration)} minutes`
  const breakMessage = `On Break for ${secondsToDuration(breakDuration)} minutes`


  return (
    <div>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title">{isFocusing ? focusMessage : breakMessage}</h2>
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(countdownTime)} remaining
          </p>
          {isPaused ? <h3>PAUSED</h3> : null}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={progress}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default StatusDisplay;