import AuthenticationModule from './authentication.module';
import EndpointService from './endpoint.service';

describe("Endpoint: Service", () => {
  var $q;
  var $rootScope;
  var $httpBackend;
  var EndpointService: EndpointService;
  var fakeWindow, fakeCorrectLoginDetails, fakeIncorrectLoginDetails, fakeCorrectLoginResponse, fakeIncorrectLoginResponse;

  var fakeServiceEndpoint = "http://fakeservice.endpoint";
  var fakeLoginUrl = "/fakelogin.url";
  var fakeLogoutUrl = "/fakelogout.url";

  beforeEach(angular.mock.module(AuthenticationModule));

  beforeEach(angular.mock.module(($provide) => {
    $provide.constant('LOGIN_ENDPOINT', fakeLoginUrl);
    $provide.constant('LOGOUT_ENDPOINT', fakeLogoutUrl);
  }));

  beforeEach(inject((
    _$rootScope_,
    _$q_,
    _$httpBackend_,
    _EndpointService_
  ) => {
    $rootScope = _$rootScope_;
    $q = _$q_;
    $httpBackend = _$httpBackend_;
    EndpointService = _EndpointService_;

    fakeCorrectLoginDetails = {
      username: 'abc',
      password: 'password'
    };

    fakeCorrectLoginResponse = {
      username: 'bestman',
      sessionId: 'fakeSessionId',
      status: 'success'
    };

    fakeIncorrectLoginDetails = {
      username: 'xyz',
      password: 'wuv'
    };

    fakeIncorrectLoginResponse = {
      "status": "error",
      "error": "Invalid username or password"
    };
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it("should retrieve sessionId on valid login", () => {
    spyOn(EndpointService, "login").and.returnValue($q.when(fakeCorrectLoginResponse));
    EndpointService.login(fakeCorrectLoginDetails.username, fakeCorrectLoginDetails.password).then((success) => {
      expect(success).toBe(fakeCorrectLoginResponse);
    });
  });

  it("should tell errror message on invalid login", () => {
    spyOn(EndpointService, "login").and.returnValue($q.when(fakeIncorrectLoginResponse));
    EndpointService.login(fakeIncorrectLoginDetails.username, fakeIncorrectLoginDetails.password).then((success) => {
      expect(success).toBe(fakeIncorrectLoginResponse);
    });
  });

});
