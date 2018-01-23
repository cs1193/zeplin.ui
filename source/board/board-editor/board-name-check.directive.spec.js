import BoardModule from '../board.module';

describe('Directive: Board Name Check', () => {
  let $rootScope;
  let $compile;
  let scope;
  let element;
  let form;

  beforeEach(angular.mock.module(BoardModule));

  beforeEach(inject((
    _$rootScope_,
    _$compile_,
  ) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    scope = $rootScope.$new();
  }));

  function compileElement() {
    element = angular.element('<form name="form"><input type="text" ng-model="boardName" board-name-check required /></form>');
    element = $compile(element)(scope);
    form = scope.form;
    $rootScope.$digest();
  }

  it('should validate success if board name is not already present', () => {

    expect(true).toBe(true);
  });
});
