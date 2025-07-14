// Example client utility function test
import { capitalize } from '../../utils/capitalize';

describe('capitalize utility', () => {
  it('should capitalize the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });
});
