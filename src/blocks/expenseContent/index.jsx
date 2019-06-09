import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-solid-svg-icons"
import "@fortawesome/free-regular-svg-icons"
import {
  faHamburger as food,
  faBusAlt as transport,
  faTshirt as clothing,
  faBicycle as rental,
  faBaby as baby,
  faBabyCarriage,
  faGamepad as entertainment,
  faSprayCan as beauty,
  faMobileAlt as telephone,
  faHome as home,
  faPaw as pet,
  faSmoking as cigarette,
  faGlassCheers as alcohol,
  faPlaneDeparture as travel,
  faBook as education,
  faGraduationCap,
  faMedkit as health,
  faGift as gift,
  faDumbbell as fitness
} from "@fortawesome/free-solid-svg-icons";
import Button from "../button";
import expenseTypes from "../../data/expenseType";
import "./expenseContent.css";

const ExpenseContent = () => (
    <section>
        {expenseTypes.map((type) => (
            <Button>
                <FontAwesomeIcon icon={type.name}/>
                {type.name}
            </Button>
        ))}
       
    </section>
);
export default ExpenseContent;
