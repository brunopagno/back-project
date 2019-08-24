class Back {
  changeView(view, id) {
    this.currentView = view;
    this.currentView.initialize(id);
    this.currentView.draw();
  }

  draw() {
    this.currentView.draw();
  }
}

const instance = new Back();
export default instance;
