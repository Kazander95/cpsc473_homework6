import $ from 'jquery';

class FormHandler {
  constructor(selector) {
    console.log("test");
    //error checking
    if (!selector) {
      throw new Error('No provided selector');
    }

    this.$formElement = $(selector);

    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector:' + selector);
    }

  }

  //Yay, no more prototypes
  addSubmitHandler(fn) {
    console.log('Setting the submit handler for the form');
    this.$formElement.on('submit', (event) => {
      //this is just all the stuff from the original module with minor changes
      event.preventDefault();

      //let instead of var
      let data = {};
      //arrow operator for anonymous function
      this.$formElement.serializeArray().forEach((item) => {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });

      fn(data);


    });
  }

  addInputHandler(fn) {
    console.log('Setting input handler for form');
    this.$formElement.on('input', '[name="emailAddress"]', (event) => {
      let emailAddress = event.target.value;
      let message = '';
      if (fn(emailAddress)) {
        event.target.setCustomValidity('');
      } else {
        message = emailAddress + ' is not an authorized email address!';
        event.target.setCustomValidity(message);
      }
    });
  };
}

export default FormHandler;
