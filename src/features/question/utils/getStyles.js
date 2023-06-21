export const getChartColor = (value, type) => {
  if (type === "sara") {
    if (value >= 5) return "#007BED";
    else if (value >= 3) return "#4D9DE6";
    else return "#A2CBF1";
  }

  if (type === "mara") {
    if (value >= 5) return "#EF2B00";
    else if (value >= 3) return "#F46242";
    else return "#F5907A";
  }
};
