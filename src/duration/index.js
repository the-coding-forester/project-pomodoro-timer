export function secondsToDuration(givenSeconds) {
  const minutes = Math.floor((givenSeconds % 3600) / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.round(givenSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

export function minutesToDuration(givenMinutes) {
  const minutes = Math.floor(givenMinutes).toString().padStart(2, "0");
  return `${minutes}:00`;
}
