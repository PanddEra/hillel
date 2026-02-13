'use strict';

import uiVariables from './modules/uiVariables.js';

import {initFormEvents, initFreezeButton} from './modules/events.js';

uiVariables.cardTitle.textContent = '-';
uiVariables.cardEmail.textContent = '-';
uiVariables.cardDate.textContent = '-';

initFormEvents();
initFreezeButton();