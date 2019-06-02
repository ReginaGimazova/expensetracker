import React from "react";
import { storiesOf } from "@storybook/react";
import CalendarMonth from "../../blocks/calendar/_type/month";
import data from "../../../data/spending";

storiesOf("organisms/CalendarMonth", module).add("calendarMonth", () => (
  <CalendarMonth data={data} />
));
