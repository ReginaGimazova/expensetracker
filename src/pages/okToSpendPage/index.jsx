import React, {Component} from 'react';
import MainTemplate from "../../templates/MainTemplate";
import SpendingForm from "../../blocks/okToSpendForm";

class OkToSpendPage extends Component {
    render() {
        return (
            <MainTemplate>
                <SpendingForm />
            </MainTemplate>
        )
    }
};

export default OkToSpendPage;
