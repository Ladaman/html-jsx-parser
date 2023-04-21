import React from "react";
import AuthComponent from "./AuthComponent";

export default {
  title: "AuthComponent",
  component: AuthComponent,
};

export const blocked = () => <AuthComponent status={0} />;
export const loginAndRegister = () => <AuthComponent status={1} />;
export const optin = () => <AuthComponent status={2} />;
export const verify = () => <AuthComponent status={3} />;
