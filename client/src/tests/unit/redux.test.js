// Example Redux reducer test
import reducer from '../../redux/reducer';

describe('Redux Reducer', () => {
  it('should handle ADD_TODO', () => {
    const initialState = { todos: [] };
    const action = { type: 'ADD_TODO', payload: 'Test' };
    const state = reducer(initialState, action);
    expect(state.todos).toContain('Test');
  });
});
