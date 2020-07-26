export const trueOrFalse = () => {
  return Math.floor(Math.random() * 10 + 1) % 2 == 0;
};

export const randomNumber = () => {
  return parseInt(Math.random() * 1000, 10);
};

export class DateTime extends Date {
  toJSON() {
    return {
      date: super.toJSON().toString().replace("T", " ").replace("Z", ""),
      timezone_type: 3,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
  }
}
