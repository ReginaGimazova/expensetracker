import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import "react-tabs/style/react-tabs.css";
import "../../stylesheets/main.css";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import Form from "../../blocks/authForm";

const MainPage = () => (
  <MainTemplate>
      <div className="formContainer">
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
  </MainTemplate>
);

export default MainPage;
