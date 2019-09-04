class Back {
  changeView(view, id) {
    this.currentView = view;
    this.currentView.initialize(id);
    this.currentView.draw();
  }

  draw() {
    this.currentView.draw();
    const self = this;
    setTimeout(() => {
      if (self.currentView.afterDraw) {
        self.currentView.afterDraw();
      }
    }, 50);
  }
}

const instance = new Back();
export default instance;
