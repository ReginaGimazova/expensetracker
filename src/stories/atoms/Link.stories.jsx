import React from "react";
import { storiesOf } from "@storybook/react";
import Link from "../../blocks/link";

storiesOf("atoms/SimpleLink", module).add("link", () => (
  <Link href="/" text="text" />
));
