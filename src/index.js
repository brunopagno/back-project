import Router from './router';
import './css/back.css';
import './css/cave.css';
import './css/grimoire.css';
import './css/hand.css';

import OpeningView from './view/OpeningView';
import GameView from './view/GameView';
import BattleView from './view/BattleView';

Router.registerView('OpeningView', OpeningView);
Router.registerView('GameView', GameView);
Router.registerView('BattleView', BattleView);

Router.newGame();
// Router.changeView(OpeningView, 'back');
Router.changeView('GameView', 'back');
