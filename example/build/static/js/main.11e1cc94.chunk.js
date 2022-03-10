(this["webpackJsonpredux-geogebra-example"]=this["webpackJsonpredux-geogebra-example"]||[]).push([[0],{15:function(e,t,n){e.exports=n(34)},16:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);n(16);var a=n(0),r=n.n(a),i=n(2),o=n.n(i),c=n(12),s=n.n(c),l=n(7),u=n(13),E=n(3),d=n(1);function p(e,t){return{type:e,payload:t}}var g=function(e){return p("ADD_ELEMENT_TO_STORE",e)},m=function(e){return p("REMOVE_ELEMENT_FROM_STORE",e)},f=function(e){return p("RENAME_ELEMENT_IN_STORE",e)},_=function(e){return p("UPDATE_ELEMENT_IN_STORE",e)},S=function(e){return p("ADD_NAME_TO_SELECTED_ELEMENTS",e)},T=function(){return p("REMOVE_NAME_FROM_SELECTED_ELEMENTS")},v=function(e){return p("REMOVE_ELEMENTS_AT_CANCEL",e)},b=function(e){return p("SET_MODE_IN_STORE",e)},N=function(e){return p("SET_PERSPECTIVE_IN_STORE",e)},O=function(e){return p("SET_MOUSEDOWN_IN_STORE",e)},h=function(e){return p("SET_EUCLIDIANVIEWS_IN_STORE",e)},w=function(e){return p("SET_EUCLIDIANVIEW3D_IN_STORE",e)},y=function(e){return p("SET_ALGEBRAVIEW_IN_STORE",e)},L=function(e){return p("SET_SPREADSHEETVIEW_IN_STORE",e)},R=function(e){return p("SET_PROBABILITYCALCULATOR_IN_STORE",e)},A=new u.XMLParser({ignoreAttributes:!1,preserveOrder:!1,attributeNamePrefix:"",parseAttributeValue:!0,unpairedTags:["view","pane","toolbar","input","dockBar"],processEntities:!0}),M=function(e,t){t.dispatch(N(function(e){var t=A.parse(e),n=t.perspective;return n.panes=Array.isArray(t.perspective.panes.pane)?[].concat(t.perspective.panes.pane):[t.perspective.panes.pane],n.views=[].concat(t.perspective.views.view),n}(e)))},I=function(e,t){t.dispatch(h(function(e){var t=A.parse(e);return Array.isArray(t.geogebra.euclidianView)?t.geogebra.euclidianView:[t.geogebra.euclidianView]}(e))),t.dispatch(w(function(e){return A.parse(e).geogebra.euclidianView3D}(e)))},D=function(e,t){t.dispatch(R(function(e){return A.parse(e).geogebra.probabilityCalculator}(e)))},C=function(e,t){t.dispatch(y(function(e){return A.parse(e).geogebra.algebraView}(e)))},V=function(e,t){t.dispatch(L(function(e){return A.parse(e).geogebra.spreadsheetView}(e)))},P=function(e,t){if(e){var n=function(){var n=e.getAllObjectNames(),a=t.getState();n.length!==a.elements.length&&t.dispatch(v(n))},a=Object(l.a)(250,!1,(function(a){switch(console.log(a),a.type){case"addMacro":case"addPolygon":case"addPolygonComplete":case"algebraPanelSelected":case"deleteGeos":break;case"deselect":n(),t.dispatch(T());break;case"dragEnd":case"dropdownClosed":case"dropdownItemFocused":case"dropdownOpened":case"editorKeyTyped":case"editorStart":case"editorStop":case"export":break;case"mouseDown":var r={x:a.x,y:a.y,z:a.z||0,viewNo:2===a.viewNo?16:a.viewNo};t.dispatch(O(r));break;case"movedGeos":case"movingGeos":case"openDialog":case"openMenu":case"pasteElms":case"pasteElmsComplete":case"redo":case"relationTool":case"removeMacro":case"renameComplete":case"renameMacro":break;case"select":t.dispatch(S(a.target));break;case"setMode":t.dispatch(b(Number(a.argument))),n();break;case"showNavigationBar":case"showStyleBar":case"sidePanelClosed":case"sidePanelOpened":case"tablePanelSelected":case"toolsPanelSelected":case"undo":break;case"updateStyle":var i=j(e,a.target);t.dispatch(_(i));break;case"perspectiveChange":case"viewChanged3D":case"viewChanged2D":!function(e,t,n){M(t,n),I(e,n),C(e,n),D(e,n),V(e,n)}(e.getXML(),e.getPerspectiveXML(),t)}}));e.registerClientListener(a)}},j=function(e,t){if(!t)return{name:t||""};var n=e.getObjectType(t),a=void 0;switch(n){case"point":a={x:e.getXcoord(t),y:e.getYcoord(t),z:e.getZcoord(t)}}return{name:t,coordinates:a,value:e.getValue(t),color:e.getColor(t),isVisible:e.getVisible(t),valueString:e.getValueString(t),definitionString:e.getDefinitionString(t),commandString:e.getCommandString(t),LaTeXString:e.getLaTeXString(t),objectType:n,isExisting:e.exists(t),isDefined:e.isDefined(t),objectNumber:e.getObjectNumber(t),CASobjectNumber:e.getCASObjectNumber(t),layer:e.getLayer(t),lineStyle:e.getLineStyle(t),lineThickness:e.getLineThickness(t),pointStyle:e.getPointStyle(t),pointSize:e.getPointSize(t),filling:e.getFilling(t),caption:e.getCaption(t),labelStyle:e.getLabelStyle(t),isLabelVisible:e.getLabelVisible(t),isIndependent:e.isIndependent(t),isMoveable:e.isMoveable(t)}};var B=d.c,x=(d.b,function(e){var t=Object(a.useRef)(e),n=t.current,i=n.id,o=n.LoadComponent,c=n.onReady,s=n.appletOnLoad,u=n.debug;i||(i="ggb-applet"),u||(u=!1),o||(o=function(e){var t=e.children;return r.a.createElement("h3",null,t)});var E="https://geogebra.org/apps/deployggb.js",p=Object(a.useState)(!1),S=p[0],T=p[1],v=Object(a.useState)(!0),b=v[0],N=v[1],O=Object(a.useState)(!1),h=O[0],w=O[1],y=Object(d.d)(),L=function(){s&&s();var e=window[i];e&&(!function(e,t){var n=e.getXML(),a=e.getPerspectiveXML();M(a,t),I(n,t),C(n,t),D(n,t),V(n,t)}(e,y),function(e,t){e&&e.registerAddListener((function(n){var a=j(e,n);t.dispatch(g(a))}))}(e,y),function(e,t){e&&e.registerRemoveListener((function(e){t.dispatch(m(e))}))}(e,y),function(e,t){e&&e.registerRenameListener((function(e,n){t.dispatch(f({oldName:e,newName:n}))}))}(e,y),function(e,t){if(e){var n=Object(l.a)(250,!1,(function(n){var a=j(e,n);t.dispatch(_(a))}));e.registerUpdateListener(n)}}(e,y),P(e,y),c&&c(),u&&console.log('Applet with id "'+i+'" is ready'))};return Object(a.useEffect)((function(){return!S&&function(e,t){return new Promise((function(n,a){var r=!1;document||a(new Error("Document was not defined"));var i=document.getElementsByTagName("script")[0],o=document.createElement("script");o.crossOrigin="",o.id=t+"-script",o.type="text/javascript",o.src=e,o.onload=function(){r||(r=!0,n(o))},o.onerror=function(e){a(new Error("Error loading script: "+e))},o.onabort=function(e){a(new Error("Script loading aborted: "+e))},null!=i.parentNode&&i.parentNode.insertBefore(o,i)}))}(E,i).then((function(){u&&console.log('script from "'+E+'" succesfull loaded into the DOM'),T(!0)})).catch((function(e){return console.error(e)})),function(){T(!1);var e=document.getElementById(i+"-holder");e&&e.lastChild&&(e.lastChild.textContent="")}}),[]),Object(a.useEffect)((function(){if(window.GGBApplet){var e=JSON.parse(JSON.stringify(t.current));e.appletOnLoad=L,new window.GGBApplet(e,!0).inject(i),N(!1),w(!1),u&&console.log('applet with id "'+i+'" succesfull injected into the DOM')}return function(){var e=document.getElementById(i+"-holder");e&&e.lastChild&&(e.lastChild.textContent="")}}),[S,h]),r.a.createElement("div",{id:i+"-holder"},b&&r.a.createElement(o,null,"Loading"),r.a.createElement("div",{id:i}))});x.defaultProps={appName:"classic",width:800,height:600,showToolBar:!0,showAlgebraInput:!0,showMenuBar:!0};function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var G=function(e,t){switch(void 0===e&&(e=W),t.type){case"ADD_ELEMENT_TO_STORE":var n=t.payload;return n?e.elements.map((function(e){return e.name})).includes(n.name)?e:k({},e,{elements:e.elements.concat(n)}):e;case"REMOVE_ELEMENT_FROM_STORE":var a=t.payload;return a?k({},e,{elements:e.elements.filter((function(e){return e.name!==a}))}):e;case"RENAME_ELEMENT_IN_STORE":var r=t.payload;return r?k({},e,{elements:e.elements.map((function(e){return k({},e,{name:e.name===r.oldName?r.newName:e.name})}))}):e;case"UPDATE_ELEMENT_IN_STORE":var i=t.payload;return i?k({},e,{elements:e.elements.map((function(e){return e.name===i.name?i:e}))}):e;case"ADD_NAME_TO_SELECTED_ELEMENTS":var o=t.payload;return o?e.selectedElementNames.find((function(e){return e===o}))?e:k({},e,{selectedElementNames:e.selectedElementNames?e.selectedElementNames.concat(o):[o]}):e;case"REMOVE_NAME_FROM_SELECTED_ELEMENTS":return k({},e,{selectedElementNames:[]});case"REMOVE_ELEMENTS_AT_CANCEL":var c=t.payload;if(!c)return e;var s=e.elements.filter((function(e){return c.includes(e.name)}));return k({},e,{elements:s});case"SET_MODE_IN_STORE":var l=t.payload;return l?k({},e,{mode:l}):e;case"SET_PERSPECTIVE_IN_STORE":var u=t.payload;return u?k({},e,{perspective:u}):e;case"SET_MOUSEDOWN_IN_STORE":var E=t.payload;return E?k({},e,{mouseDown:E}):e;case"SET_EUCLIDIANVIEWS_IN_STORE":var d=t.payload;return d?k({},e,{euclidianViews:d}):e;case"SET_EUCLIDIANVIEW3D_IN_STORE":var p=t.payload;return p?k({},e,{euclidianView3D:p}):e;case"SET_ALGEBRAVIEW_IN_STORE":var g=t.payload;return g?k({},e,{algebraView:g}):e;case"SET_SPREADSHEETVIEW_IN_STORE":var m=t.payload;return m?k({},e,{spreadsheetView:m}):e;case"SET_PROBABILITYCALCULATOR_IN_STORE":var f=t.payload;return f?k({},e,{probabilityCalculator:f}):e;case"ON_APPLET_LOADED":default:return e}};function U(e){return Object(E.b)(G,e)}var W={id:"ggbApplet",elements:[],selectedElementNames:[],params:{id:"ggbApplet",width:800,height:600,showAlgebraInput:!0,showToolBar:!0,showMenuBar:!0},mode:0,perspective:void 0,editorState:{content:"",caret:[0]},mouseDown:void 0},X=(U(W),function(e){var t=e.children,n=Object(a.useMemo)((function(){return U(W)}),[]);return r.a.createElement(d.a,{store:n},t)});X.displayName="ReactGeoGebraProvider";var F=X,z=x,J=(n(33),function(){var e=B((function(e){return e}));return Object(a.useEffect)((function(){console.log(e)}),[e]),r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"React Redux GeoGebra Example"),r.a.createElement(z,{id:"ggbApplet",width:800}),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Store State"),r.a.createElement(s.a,{src:e,name:"state"})))});o.a.render(r.a.createElement(F,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.11e1cc94.chunk.js.map