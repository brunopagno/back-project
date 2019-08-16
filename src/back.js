const Back = {};

Back.init = function init() {
  console.log('Initializing game');
};

Back.draw = function draw(id) {
  const backTag = document.getElementById(id);
  backTag.innerHTML = ':)';
};

export default Back;
