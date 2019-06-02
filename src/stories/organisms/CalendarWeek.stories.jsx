import React from "react";
import { storiesOf } from "@storybook/react";
import CalendarWeek from "../../blocks/calendar/_type/week";
import data from "../../data/spending";

storiesOf("organisms/CalendarWeek", module).add("calendarWeek", () => (
    <CalendarWeek data={data} />
));
