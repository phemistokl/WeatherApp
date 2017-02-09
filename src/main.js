import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import Tabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import App from './containers/App.jsx';
import SearchPage from './containers/SearchPage.jsx';
import SavedLocations from './containers/SavedLocations.jsx';

import store from './store';

import './assets/main.css';

ReactDOM.render(
    <Provider store={store}>
    <Tabs
      defaultActiveKey="1"
      renderTabBar={()=><ScrollableInkTabBar />}
      renderTabContent={()=><TabContent />}
    >
      <TabPane tab='Search' key="1"><SearchPage /></TabPane>
      <TabPane tab='Bookmarks' key="2"><SavedLocations /></TabPane>
    </Tabs>
    </Provider>,
    document.getElementById('root')
);
