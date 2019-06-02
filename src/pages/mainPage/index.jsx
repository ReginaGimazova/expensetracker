import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import NavigationSection from '../../blocks/navigationSection';
import "../../stylesheets/main.css";
import laptopImage from '../../images/laptop.png';


const MainPage = () => (
    <MainTemplate>
        <div className="container mainPageContainer">
            <div className="navigationSectionsContainer">
                <NavigationSection type="left" title="analysis" path="/analysis"/>
                <NavigationSection type="left" title="calendar" path="/calendar"/>
                <NavigationSection type="left" title="???"/>
            </div>
            <img className="image" src={laptopImage} alt="laptop" />
            <div className="navigationSectionsContainer">
                <NavigationSection type="right" title="budgets" path="/budgets" />
                <NavigationSection type="right" title="ok to spend" path="/okToSpend"/>
                <NavigationSection type="right" title="spending" path="/spending" />
            </div>
        </div>
    </MainTemplate>
);

export default MainPage;
