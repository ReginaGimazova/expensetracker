import React, { useState } from "react";
import PropTypes from "prop-types";
import Label from "../label";
import styles from "./Form.module.css";

const Form = ({ type }) => {
  const [okToSpend, setOkToSpend] = useState(0);
  const [budget, setBudget] = useState(0);
  const [expense, setExpense] = useState(0);
  return (
    <div>
      {type === "start" && (
        <form className={styles.form}>
          <div className={styles.input__container}>
            <Label>OK TO SPEND</Label>
            <input
              className={styles.input}
              name="okToSpend"
              type=""
              value={okToSpend}
              onChange={e => setOkToSpend(e.target.value)}
            />
          </div>
          <div className={styles.input__container}>
            <Label>BUDGET</Label>
            <input
              className={styles.input}
              name="budget"
              type=""
              value={budget}
              onChange={e => setBudget(e.target.value)}
            />
          </div>
        </form>
      )}
      {type === "expenses" && (
        <form>
          <input
            className={styles.input}
            type=""
            value={expense}
            onChange={e => setExpense(e.target.value)}
          />
        </form>
      )}
    </div>
  );
};

export default Form;

Form.propTypes = {
  type: PropTypes.string,
};

Form.defaultProps = {
  type: "",
};
