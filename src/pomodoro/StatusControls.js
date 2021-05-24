import React from "react";
import classNames from "../utils/class-names";

function StatusControls({ isRunning, isPaused, onStop, onPlay, onPause }) {

  const onClickPlayPauseButton = () => {
    if (!isRunning) {
      return onPlay();
    }

    if (isPaused) {
      return onPlay();
    }

    return onPause();
  }


  return (
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
            onClick={onClickPlayPauseButton}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isRunning || isPaused,
                "oi-media-pause": isRunning,
              }
              )}
            />
          </button>

          <button
            type="button"
            className="btn btn-secondary"
            title="Stop the session"
            onClick={onStop}
            data-testid="stop"
            disabled={!isRunning}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default StatusControls;