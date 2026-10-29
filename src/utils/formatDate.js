export const formatDate = (date) => {
  if (!date) {
    return "Actual";
  }

  const formattedDate = new Date(date).toLocaleString("es-AR", {
    timeZone: "UTC",
    month: "short",
    year: "numeric",
  });

  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};
