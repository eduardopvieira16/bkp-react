export const dayOfWeek = () => {
  const now = new Date();

  const days = [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
  ];

  const currentDayOfWeek = days[now.getDay()];

  return currentDayOfWeek;
};
