import { TasksPage } from './app.po';

describe('tasks App', () => {
  let page: TasksPage;

  beforeEach(() => {
    page = new TasksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
