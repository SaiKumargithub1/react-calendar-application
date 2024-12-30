export const getHighlightClass = (communicationDate) => {
  const today = new Date().toDateString();
  if (new Date(communicationDate).toDateString() < today)
    return "highlight-red";
  if (new Date(communicationDate).toDateString() === today)
    return "highlight-yellow";
  return "";
};
