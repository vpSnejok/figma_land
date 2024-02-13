import React from 'react';
import cn from "classnames";

import styles from "./Button.module.scss"

const Button = (props) => {
    const {type, children,className} = props
    return (
        <button
            className={cn(styles.btn,className)}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;