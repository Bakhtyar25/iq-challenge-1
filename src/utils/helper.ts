// Returns a new date object with a specified offset from the current time.
export function getEndDate() {
  return new Date(Date.now() + 123_456_789);
}

// Retrieves the end date from local storage or generates a new one if not found.
export function getLocalEndDate() {
  const endDate = localStorage.getItem("endDate");
  return endDate ? new Date(+endDate) : getEndDate();
}

// Stores the given end date in local storage.
export function setLocalEndDate(endDate: Date) {
  localStorage.setItem("endDate", JSON.stringify(endDate.getTime()));
}
