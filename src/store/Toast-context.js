import React, { createContext } from "react";

const ToastContext = createContext({
  callToast: () => {},
});

export default ToastContext;
