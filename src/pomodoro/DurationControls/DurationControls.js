import React from "react"

function DurationControls({ onFocusDurationChange, onBreakDurationChange, focusMinutes, breakMinutes }) {

  return (
    <div className="row">
      <Duration
        onDurationChange={onFocusDurationChange}
        classSuffix="focus"
        title="Focus"
        min={5}
        max={60}
        stepValue={5}
        minutes={focusMinutes}
      />
      <Duration
        onDurationChange={onBreakDurationChange}
        classSuffix="break"
        title="Break"
        min={1}
        max={15}
        stepValue={1}
        minutes={breakMinutes}
      />
    </div>
  )
}

export default DurationControls;