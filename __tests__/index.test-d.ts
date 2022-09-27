import { expectAssignable, expectNotAssignable } from "tsd";

import DateTime from "../dist";

expectAssignable<DateTime.YearType>("2000");
expectAssignable<DateTime.YearType>("2022");
expectNotAssignable<DateTime.YearType>("2100");

expectAssignable<DateTime.MonthType>("01");
expectAssignable<DateTime.MonthType>("12");
expectNotAssignable<DateTime.MonthType>("13");

expectAssignable<DateTime.DateType>("01");
expectAssignable<DateTime.DateType>("31");
expectNotAssignable<DateTime.DateType>("32");

expectAssignable<DateTime.DayType>(0);
expectAssignable<DateTime.DayType>(6);
expectNotAssignable<DateTime.DayType>(7);

expectAssignable<DateTime.HourType>("00");
expectAssignable<DateTime.HourType>("23");
expectNotAssignable<DateTime.HourType>("24");

expectAssignable<DateTime.MinuteType>("00");
expectAssignable<DateTime.MinuteType>("59");
expectNotAssignable<DateTime.MinuteType>("60");

expectAssignable<DateTime.SecondType>("00");
expectAssignable<DateTime.SecondType>("59");
expectNotAssignable<DateTime.SecondType>("60");

expectAssignable<DateTime.UTCStringType>("2022-09-27T12:34:59");
expectAssignable<DateTime.UTCStringType>("2099-09-09T00:00:00");
expectNotAssignable<DateTime.UTCStringType>("2022-09-27-00-00-00");
