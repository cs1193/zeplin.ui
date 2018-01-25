import UtilitiesModule from './utilities.module';
import RemainderTimeFilter from './remaindertime.filter';

describe('Filter: Remainder Time', () => {
  let $filter;

  beforeEach(angular.mock.module(UtilitiesModule));

  beforeEach(inject((
    _$filter_
  ) => {
    $filter = _$filter_;
  }));

  it('should be registered', () => {
    expect($filter('remaindertime')).toBeDefined();
  });

  it('should return correct if current date is today', () => {
    expect($filter('remaindertime')('2017-06-24T03:59:42.019Z')).toBe('Saturday, June 24, 2017 9:29 AM');
  });
});
