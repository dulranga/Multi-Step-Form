export const getClass = (...classNames) =>
  classNames
    .filter((className) => !!className)
    .join(" ")
    .trim();
