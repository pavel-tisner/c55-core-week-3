function isBookApplicable(searchString) {
  const title = "The fundamentals of JavaScript";
  const editedTitle = title.toLowerCase();
  const editedSearchString = searchString.trim().toLowerCase();
  return editedTitle.includes(editedSearchString);
}
console.log(isBookApplicable("javascript")); // Output: true
console.log(isBookApplicable("javascript ")); // Output: true
console.log(isBookApplicable("python")); // Output: false
console.log(isBookApplicable("JavaScript")); // Output: true
console.log(isBookApplicable("JAVASCRIPT")); // Output: true
