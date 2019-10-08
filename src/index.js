import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';
import AccApp from './accordion/AccApp';
import TabsStore from './accordion/TabsStore';
import NewApp from './state-drills/NewApp'

ReactDOM.render(<NewApp />, document.getElementById('root'));
// ReactDOM.render(<AccApp />, document.getElementById('root'));
// ReactDOM.render(<RouletteGun bulletInChamber={8}/>, document.getElementById('root'));
// ReactDOM.render(<Tabs tabs = {TabsStore}/>, document.getElementById('root'));
// ReactDOM.render(<Bomb />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));


