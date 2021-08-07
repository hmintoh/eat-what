const isWithinInterval = (
  time: number,
  range: { start: number; end: number }
): boolean => {
  return time >= range.start && time <= range.end;
};

const getTime = (): number => {
  const today = new Date();
  return today.setHours(
    today.getHours(),
    today.getMinutes(),
    today.getSeconds()
  );
};

export { isWithinInterval, getTime };
