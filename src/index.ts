module DateTime {
  export type DigitType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

  export type YearType =
    | `19${DigitType}${DigitType}`
    | `20${DigitType}${DigitType}`;

  export type MonthType =
    | `0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
    | `1${0 | 1 | 2}`;

  export type DateType =
    | `0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`
    | `1${DigitType}`
    | `2${DigitType}`
    | `3${0 | 1}`;

  export type DayType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

  export type HourType =
    | `0${DigitType}`
    | `1${DigitType}`
    | `2${0 | 1 | 2 | 3}`;

  export type MinuteType = `${0 | 1 | 2 | 3 | 4 | 5}${DigitType}`;

  export type SecondType = MinuteType;

  export type UTCStringType =
    `${number}-${number}-${number}T${number}:${number}:${number}`;
}

export default DateTime;
