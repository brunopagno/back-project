import Router from './router';
import './css/back.css';

import OpeningView from './view/OpeningView';
import GameOver from './view/GameOver';
import GameView from './view/GameView';
import BattleView from './view/BattleView';

Router.registerView('OpeningView', OpeningView);
Router.registerView('GameOver', GameOver);
Router.registerView('GameView', GameView);
Router.registerView('BattleView', BattleView);

Router.newGame();
// Router.changeView(OpeningView, 'back');
Router.changeView('GameView', 'back');
