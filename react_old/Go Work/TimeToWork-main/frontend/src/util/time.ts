export const time = () => {
  const today = new Date();

  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');

  const currentTime = hours + ':' + minutes;

  return currentTime;
};
