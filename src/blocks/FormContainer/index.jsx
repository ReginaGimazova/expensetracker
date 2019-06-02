import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Form from "../form";

import "../../stylesheets/main.css";
import "react-tabs/style/react-tabs.css";

const FormContainer = () => (
  <div className="form-container">
    <Tabs>
      <TabList>
        <Tab>LOG IN</Tab>
        <Tab>REGISTER</Tab>
      </TabList>
      <TabPanel>
        <Form formTitle="Log into EXPENSE TRACKER" buttonText="LOG IN" />
      </TabPanel>
      <TabPanel>
        <Form formTitle="Create your account" buttonText="REGISTER" />
      </TabPanel>
    </Tabs>
  </div>
);

export default FormContainer;
