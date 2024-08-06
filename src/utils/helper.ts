export function getEndDate() {
  return new Date(Date.now() + 123_456_789);
}

export function getLocalEndDate() {
  const endDate = localStorage.getItem("endDate");
  return endDate ? new Date(+endDate) : getEndDate();
}

export function setLocalEndDate(endDate: Date) {
  localStorage.setItem("endDate", JSON.stringify(endDate.getTime()));
}
