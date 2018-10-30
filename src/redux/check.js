/* global window */

import store from './store';
import { addInfo, sortName, changeFilter } from './actions/action';

window.store = store;
window.addInfo = addInfo;
window.changeFilter = changeFilter;
