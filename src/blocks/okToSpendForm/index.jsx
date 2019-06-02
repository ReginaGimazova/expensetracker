import React, { useState } from "react";
import PropTypes from "prop-types";
import Label from "../input/__label";
import styles from "./okToSpendForm.css";

const Form = () => {
  const [okToSpend, setOkToSpend] = useState(0);
  return (
    <div>
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
      </form>
    </div>
  );
};

export default Form;

Form.propTypes = {
  type: PropTypes.string
};

Form.defaultProps = {
  type: ""
};
