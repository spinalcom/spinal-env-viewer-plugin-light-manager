const {
  SpinalContextApp
} = require('spinal-env-viewer-context-menu-service');
import {
  SpinalGraphService,
  SpinalNode
} from 'spinal-env-viewer-graph-service';

const {
  spinalPanelManagerService,
} = require('spinal-env-viewer-panel-manager-service');
const {
  SpinalForgeExtention,
} = require('spinal-env-viewer-panel-manager-service_spinalforgeextention');
import lightComponent from '../vue/lightComponent.vue';
import Vue from 'vue';
import bimObjectService from 'spinal-env-viewer-plugin-bimobjectservice';

export const ligntExtension = SpinalForgeExtention.createExtention({
  name: 'light-manager',
  vueMountComponent: Vue.extend(lightComponent),
  // toolbar is optional

  panel: {
    title: 'light-manager',
    classname: 'spinal-pannel',
    closeBehaviour: 'remove', // if something else panel is deleted
  },
  style: {
    left: '405px',
    width: '400px',
  },
  onload: () => {},
  onUnLoad: () => {},
});

SpinalForgeExtention.registerExtention('light-manager', ligntExtension);

export class LightButton extends SpinalContextApp {
  constructor() {
    super('Light manager', 'Spinal CDE description', {
      icon: 'highlight',
      icon_type: 'in',
      backgroundColor: '#356BAB',
      fontColor: '#FFFFFF',
    });
  }

  isShown(option) {
    // to do : put some restriction to see if the selectedNode is a BIMObject or an element of geographiqueContext
    // console.log(option)
    return Promise.resolve(true);
  }

  action(option) {
    console.log("hello panel");
    
    spinalPanelManagerService.openPanel('light-manager', option);
    // option.paramSent = "hello from NoteCircularMenu";
    // let selectedNode = option.selectedNode;
    // let dbid = option.dbid;
    // let boolBIMObject = option.exist;
    // if (option.exist) {
    //   if (option.selectedNode instanceof SpinalNode) {
    //     // get real node
    //     selectedNode = option.selectedNode;
    //   } else {
    //     selectedNode = SpinalGraphService.getRealNode(
    //       option.selectedNode.id.get()
    //     );
    //   }
    //   let obj = {
    //     selectedNode,
    //     dbid,
    //     exist: boolBIMObject,
    //   };

    //   spinalPanelManagerService.openPanel('panel-notes', obj);
    // } else {
    //   window.spinal.ForgeViewer.viewer.model.getProperties(
    //     option.dbid,
    //     async res => {
    //       selectedNode = await bimObjectService.createBIMObject(
    //         option.dbid,
    //         res.name
    //       );
    //       let obj = {
    //         selectedNode,
    //         dbid,
    //         exist: true,
    //       };

    //       spinalPanelManagerService.openPanel('panel-notes', obj);
    //     }
    //   );
    // }
  }
}