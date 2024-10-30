export const date = () => {
  const dateToday = new Date();

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const day = String(dateToday.getDate()).padStart(2, "0");
  const currentMonths = months[dateToday.getMonth()];
  const year = dateToday.getFullYear();
  const currentDate = day + " de " + currentMonths + " de " + year;

  return currentDate;
};
