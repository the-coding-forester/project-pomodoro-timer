import React, { useState } from "react";
import classNames from "../class-names";
import useInterval from "../useInterval";

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
    },
    isTimerRunning ? 1000 : null
  );

  function toggleTimer(isTimerRunning) {
    return !isTimerRunning;
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="focus-duration">
              Focus Duration: 25:00
            </span>
            <div className="input-group-append">
              {/* ToDO: Implement decreasing focus duration */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
              >
                <span className="oi oi-minus" />
              </button>
              {/* ToDO: Implement increasing focus duration */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="break-duration">
                Break Duration: 05:00
              </span>
              <div className="input-group-append">
                {/* ToDO: Implement decreasing break duration */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                >
                  <span className="oi oi-minus" />
                </button>
                {/* ToDO: Implement increasing break duration */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                >
                  <span className="oi oi-plus" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          {/* ToDO: Update message below to include current session (Focusing or On Break) and total duration */}
          <h2 data-testid="session-title">Focusing for 25:00 minutes</h2>
          {/* ToDO: Update message below to include time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            25:00 remaining
          </p>
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
              aria-valuenow="0" // ToDO: Increase aria-valuenow as elapsed time increases
              style={{ width: "0%" }} // ToDO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={() => setIsTimerRunning(toggleTimer)}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
