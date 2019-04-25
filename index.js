const circularMenuHookName = 'circularMenu';
// const SideBarHookName = 'GraphManagerSideBar';
const forgeBarHookName = 'viewerBar';
const namePanel = 'light-manager'
// const nameAttributesRightClickPanel = 'attributes-right-click'
const {
  spinalContextMenuService,
} = require('spinal-env-viewer-context-menu-service');
const {
  SpinalForgeExtention,
} = require('spinal-env-viewer-panel-manager-service_spinalforgeextention');

import {
  LightButton
} from './buttonClass/lightPanel.js'


// SpinalForgeExtention.registerExtention(namePanel, DocumentationExtension);
// SpinalForgeExtention.registerExtention(namePanel, noteExtension);

spinalContextMenuService.registerApp(
  circularMenuHookName,
  new LightButton(),[7]
);

// registerRightClickButton();