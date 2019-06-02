import React from "react";
import MainTemplate from "../../templates/MainTemplate";
import NavigationSection from '../../blocks/navigationSection';
import "../../stylesheets/main.css";
import laptopImage from '../../images/laptop.png';


const MainPage = () => (
    <MainTemplate>
        <div className="container mainPageContainer">
            <div className="navigationSectionsContainer">
                <NavigationSection type="left" title="analysis"/>
                <NavigationSection type="left" title="calendar"/>
                <NavigationSection type="left" title="budgets" />
            </div>
            <img className="image" src={laptopImage} alt="laptop" />
            <div className="navigationSectionsContainer">
                <NavigationSection type="right" title="ok to spend"/>
                <NavigationSection type="right" title="spending"/>
                <NavigationSection type="right" title="???"/>
            </div>
        </div>
    </MainTemplate>
);

export default MainPage;
