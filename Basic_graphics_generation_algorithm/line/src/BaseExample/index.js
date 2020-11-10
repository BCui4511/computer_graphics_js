
export default class BaseExample {
  title = 'the title of example';
  description = 'the description of expamle';
  draw(ctx) {
    return ctx;
  }
  getTitle() {
    return this.title;
  }
  getDescription() {
    return this.description;
  }
}