module.exports = function rejectGhostClicks (lastTouchEventTimestamp, clickTimestamp) {
  return lastTouchEventTimestamp && (clickTimestamp - lastTouchEventTimestamp < 750);
}
