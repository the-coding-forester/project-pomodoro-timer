import React from "react"
import { minutesToDuration } from "../../utils/duration"

//minutes represents the what (focus/break) Duration is set to
function Duration({ onDurationChange, classSuffix, title, min, max, stepValue, minutes }) {

  function onDecreaseDuration() {
    if (minutes <= min) {
      return;
    }

    onDurationChange(minutes - stepValue)
  }

  function onIncreaseDuration() {
    if (minutes >= max) {
      return;
    }

    onDurationChange(minutes + stepValue)
  }


  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid={`duration-${classSuffix}`}>
          {title} Duration: {minutesToDuration(minutes)}
        </span>
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-secondary"
            data-testid={`decrease-${classSuffix}`}
            onClick={onDecreaseDuration}
          >
            <span className="oi oi-minus" />
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-testid={`increase-${classSuffix}`}
            onClick={onIncreaseDuration}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Duration;