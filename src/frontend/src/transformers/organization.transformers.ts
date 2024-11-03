export const enumToList = <T extends object>(enumObj: T): string[] => {
  return Object.values(enumObj);
};
