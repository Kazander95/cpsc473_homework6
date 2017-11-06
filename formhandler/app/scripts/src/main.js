import FormHandler from "./formhandler";
var FORM_SELECTOR = '[data-coffee-order="form"]';
console.log(FORM_SELECTOR);
var formhandler = new FormHandler(FORM_SELECTOR);
formhandler.addSubmitHandler((data) => console.log(data));
