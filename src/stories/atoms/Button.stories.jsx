import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../../blocks/button";

storiesOf("atoms/Button", module).add("simple", () => <Button text="next" />);
storiesOf("atoms/Button", module).add("submit" +
    "", () => <Button text="submit" type="submit" />);
