import UtilitiesModule from './utilities.module';

describe('Directtive: Email Address', () => {
  let $rootScope;
  let $compile;
  let scope;
  let element;
  let form;

  beforeEach(angular.mock.module(UtilitiesModule));

  beforeEach(inject((
    _$rootScope_,
    _$compile_
  ) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    scope = $rootScope.$new();
  }));

  function compileElement () {
    element = angular.element('<form name="form"><input type="text" ng-model="email" name="email" email-address required /></form>');
    element = $compile(element)(scope);
    form = scope.form;
    $rootScope.$digest();
  }

  it('should validate true if correct email address is provided', () => {
    compileElement();
    form.email.$setViewValue('fake@fake.dev');
    expect(form.email.$valid).toBe(true);
  });

  it('should validate false if incorrect email address is provided', () => {
    compileElement();
    form.email.$setViewValue('fake-fakedev');
    expect(form.email.$valid).toBe(false);
  });
});
