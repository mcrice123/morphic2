//import React from 'react';
import { navigate } from "gatsby";

export default () => {
    // Wrap the require in check for window
    if (typeof window !== `undefined`) {
        navigate("/");
    }
    return null;
};