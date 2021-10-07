/*
This is an imperfect solution for the time being. Every consumer would have to
do this, or otherwise be able to provide the module (eg. npm install) for jest
to resolve and provide. I have some very early ideas around finding a way to
interop systemjs with a jest testing environment.
*/
import React from "react";

export const Button = (props) => <button {...props} />;
