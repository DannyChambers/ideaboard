
import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../../reducers/index';

import { loadState, saveState } from '../../../localStorage';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {

	saveState(store.getState());

})


import Home from "./index";

storiesOf("Components/Pages/Home", module)
  .add("Default", () => (
    <Provider store={store}><Home /></Provider>
  ));