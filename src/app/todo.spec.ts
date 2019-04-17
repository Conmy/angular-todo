import { Todo } from './todo';
import { unwatchFile } from 'fs';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Todo({
      title: 'Hello',
      complete: true
    });

    expect(todo.title).toEqual('Hello');
    expect(todo.complete).toBe(true);
  })
});
