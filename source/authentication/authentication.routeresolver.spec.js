import AuthenticationModule from './authentication.module';
import AuthenticationService from './authentication.service';
import AuthenticationRouteResolver from './authentication.routeresolver';

describe("Authentication: RouteResolver", () => {
  var $q;
  var $rootScope;
  var AuthenticationService: AuthenticationService;
  var fakeWindow;
  var fakeAuthenticationPrefix = "fake-authentication-prefix-";
  var fakeLoginUrl = "/fakelogin.url";
  var fakeLogoutUrl = "/fakelogout.url";
  var fakeRegisterUrl = "/fakeRegister.url";

  beforeEach(angular.mock.module(AuthenticationModule));

  beforeEach(angular.mock.module(($provide) => {
    fakeWindow = {
      location: {
        href: "http://videoservice.fake",
        search: ""
      }
    };
    $provide.constant('$window', fakeWindow);
  }));

  beforeEach(inject((
    _$q_,
    _$rootScope_,
    _AuthenticationService_
  ) => {
    $q = _$q_;
    $rootScope = _$rootScope_;
    AuthenticationService = _AuthenticationService_;
  }));

  it("should resolve when authenticated", () => {
    spyOn(AuthenticationService, "isAuthenticated").and.returnValue(true);
    let resolved = false;
    var promise = AuthenticationRouteResolver($q, AuthenticationService);
    promise.then(() => { resolved = true; });
    $rootScope.$digest();
    expect(resolved).toEqual(true);
  });

  it("should reject when not authenticated", () => {
    spyOn(AuthenticationService, "isAuthenticated").and.returnValue(false);
    let rejected = false;
    var promise = AuthenticationRouteResolver($q, AuthenticationService);
    promise.catch(() => { rejected = true; });
    $rootScope.$digest();
    expect(rejected).toEqual(true);
  });
});
