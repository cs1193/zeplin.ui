/* @flow */

export default class EmailAddressDirective {
  static NAME: string = 'emailAddress';

  static factory() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link(scope, element, attributes, controller) {
        controller.$parsers.push((viewValue) => {
          let newEmail = controller.$viewValue;
          controller.$setValidity('invalidEmail', true);
          if (typeof newEmail === 'object' || newEmail === '') return newEmail;

          if (!newEmail.match(/^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;,.](([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+)*$/)) {
            controller.$setValidity('invalidEmail', false);
          }
          return viewValue;
        });
      },
    };
  }
}
