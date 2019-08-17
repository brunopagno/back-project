import Back from './back';
import './css/back.css';

const back = new Back();

back.init();
back.initRenderer('back');

for (let i = 0; i < 7; i += 1) {
  back.update();
  back.draw();
}
