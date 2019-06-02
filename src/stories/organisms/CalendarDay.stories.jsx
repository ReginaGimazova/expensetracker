import React from "react";
import { storiesOf } from "@storybook/react";
import CalendarDay from "../../blocks/calendar/_type/day";
import data from "../../../data/spending";

storiesOf("organisms/CalendarDay", module).add("calendarDay", () => (
  <CalendarDay data={data} />
));
