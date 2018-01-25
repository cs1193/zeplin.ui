import AuthenticationModule from './authentication.module';
import AuthenticationService from './authentication.httpinterceptor';
import AuthenticationHttpInterceptor from './authentication.httpinterceptor';

describe("Authentication: HttpInterceptor", () => {
  let fake$window: any;
  let fakeAccessToken;
  let $injector;

  let $location: any;
  let authenticationHttpInterceptor: AuthenticationHttpInterceptor;
  let authenticationService: AuthenticationService;


  const fakeLoginUrl = "/fake-login";
  const fakeLogoutUrl = "/fake-logout";
  const fakeRegisterUrl = "/fake-register";

  beforeEach(angular.mock.module(AuthenticationModule));

  beforeEach(angular.mock.module(($provide) => {
    fake$window = {
      location: {
        path: "/videos",
        search: ""
      },
      localStorage: {
        getItem: () => { return undefined; }
      }
    };
    $provide.constant('LOGIN_ENDPOINT', fakeLoginUrl);
    $provide.constant('LOGOUT_ENDPOINT', fakeLogoutUrl);
    $provide.constant('REGISTER_ENDPOINT', fakeRegisterUrl);
    $provide.service("$window", () => fake$window);
  }));

  beforeEach(inject((
    _$location_,
    _AuthenticationHttpInterceptor_: AuthenticationHttpInterceptor,
    _AuthenticationService_: AuthenticationService
  ) => {
    $location = _$location_;
    authenticationHttpInterceptor = _AuthenticationHttpInterceptor_;
    authenticationService = _AuthenticationService_;

    fakeAccessToken = "fakeToken";
    spyOn(authenticationService, "getAccessToken").and.returnValue(fakeAccessToken);
  }));

  it('exists with required methods', () => {
    expect(authenticationHttpInterceptor).toBeDefined();
    expect(angular.isFunction(authenticationHttpInterceptor.request)).toBe(true);
    expect(angular.isFunction(authenticationHttpInterceptor.responseError)).toBe(true);
  });

  it('should append authorization header query params for request', () => {
    let config = {
      method: 'POST',
      url: 'http://get-boards-data',
      headers: {}
    };
    authenticationHttpInterceptor.request(config);
    expect(config.headers['x-access-token']).toEqual(`${fakeAccessToken}`);
  });

  it('should not redirect to login for unauthorized', () => {
    const rejection = {
      status: 'error'
    };
    authenticationHttpInterceptor.responseError(rejection);
    expect(fake$window.location.path).not.toMatch(fakeLoginUrl);
  });
});
