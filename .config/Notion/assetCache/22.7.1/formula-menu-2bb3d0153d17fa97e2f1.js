(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{jAkY:function(e,t,r){"use strict";r.r(t);r("ioFf"),r("rGqo");var n=r("q1tI"),o=r("VOS9"),i=r("LEzx");class s extends i.a{getInitialState(){return{value:"",html:"",query:""}}}var a=s,l=r("t+pW"),c=r("LvDl"),p=r("LeVO"),u=r("rlmE"),d=r("pxbK"),m=r("9OwC"),h=r("Sb6f"),y=r("nFzZ"),f=r("PQqx"),g=r("VyA+"),b=r("zmp8"),S=r("Ng05");r("pIFo"),r("a1Th");function v(e,t){if(!e)return"";const r=function e(t,r){if(!t)return;if("conditional"===t.type)return new O.expression.node.ConditionalNode(e(t.condition,r),e(t.true,r),e(t.false,r));if("constant"===t.type)return new O.expression.node.ConstantNode(t.value,t.value_type);if("function"===t.type)return new O.expression.node.FunctionNode(new O.expression.node.SymbolNode(t.name),(t.args||[]).map(t=>e(t,r)));if("operator"===t.type)return new O.expression.node.OperatorNode(t.operator,t.name,(t.args||[]).map(t=>e(t,r)));if("property"===t.type){const e=r[t.id],n=e?e.name:t.name;return new O.expression.node.FunctionNode("prop",[new O.expression.node.ConstantNode(n,"string")])}if("symbol"===t.type)return new O.expression.node.SymbolNode(t.name)}(e,t);if(!r)return"";const n=r.toString({parenthesis:"auto",handler:(e,t)=>{if(e.isOperatorNode&&"not"===e.fn)return"not "+e.args[0].toString(t)}});return n.replace(/\n/g,"\\n").replace(/\t/g,"\\t")}const O=r("yZWr").create();O.import(r("LPs6")),O.import(r("78Py")),O.import(r("9TFD")),O.import(r("Poiv"));const E=Object(y.l)(m.c,e=>e.value),x=Object(y.l)(m.h,e=>e.apply),w=Object(y.l)(m.e,e=>e.apply);O.import(E,{override:!0}),O.import(x,{override:!0}),O.import(w,{override:!0}),O.config({predictable:!0});var M=r("qr6c"),j=r("qzno");function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function P(e,t,r){const n=e.replace(/\\n/g,"\n").replace(/\\t/g,"\t");if(""===n.trim())return;let o;try{o=M.parse(n)}catch({message:i}){return{type:"error",message:i,size:1}}return function e(t,r,n){if(!t)return;if(t.isAccessorNode||t.isArrayNode||t.isAssignmentNode||t.isBlockNode||t.isFunctionAssignmentNode||t.isIndexNode||t.isObjectNode||t.isRangeNode)return{type:"error",size:1,message:"Invalid syntax: ".concat(t.toString().nodeString)};if(t.isConditionalNode){const o=e(t.condition,r,n),i=e(t.trueExpr,r,n),s=e(t.falseExpr,r,n);if(!o)return;if("error"===o.type)return o;if(i&&"error"===i.type)return i;if(s&&"error"===s.type)return s;if(i&&s)return i.result_type!==s.result_type?{type:"error",size:1,message:"Each branch of a condition must be of the same type: ".concat(t.toString().nodeString)}:{type:"conditional",result_type:i.result_type,condition:o,true:i,false:s}}else{if(t.isConstantNode){const{value:e,valueType:r}=t,n={string:"text",number:"number",boolean:"checkbox"};return r in n?{type:"constant",result_type:n[r],value:e.toString(),value_type:r}:{type:"error",size:1,message:"Illegal constant: ".concat(e,".")}}if(t.isFunctionNode){const{fn:o,args:i}=t;if("prop"===o.name){if(1!==i.length)return{type:"error",size:1,message:"Too many arguments passed to prop()."};const e=i[0];if(!e.isConstantNode||"string"!==e.valueType)return{type:"error",size:1,message:"Invalid property reference: ".concat(e.toString().nodeString)};const t=e.value,o=Object.keys(n).find(e=>{const r=n[e];return Boolean(r&&r.name===t)}),s=o&&n[o];if(!o||!s)return{type:"error",size:1,message:"Property not found: prop('".concat(t,"')")};if("formula"===s.type){const{formula:e}=s;if(!e||!e.result_type)return;return Object(d.a)(e).includes(r)?{type:"error",size:1,message:"Property ".concat(s.name," creates a circular dependency.")}:{type:"property",result_type:Object(d.b)(s),name:t,id:o}}return{type:"property",result_type:Object(d.b)(s),name:t,id:o}}const s=m.f(o.name)||m.g(o.name);if(!s)return{type:"error",size:1,message:"Undefined function: ".concat(o.name)};const a=c.compact((i||[]).map(t=>e(t,r,n))),l=I({functionName:o.name,functionArgs:a,signatures:s.signatures,schema:n});return l.error?l.error:{type:"function",result_type:l.value.resultType,name:o.name,args:a}}if(t.isOperatorNode){const{op:o,fn:i,args:s}=t,a=m.g(i);if(!a)return{type:"error",size:1,message:"Undefined operator: ".concat(o)};const l=c.compact((s||[]).map(t=>e(t,r,n))),p=I({functionName:i,functionArgs:l,signatures:a.signatures,schema:n});return p.error?p.error:{type:"operator",result_type:p.value.resultType,operator:o,name:i,args:l}}if(t.isParenthesisNode)return e(t.content,r,n);if(t.isSymbolNode){const{name:e}=t;return e in m.c?{type:"symbol",result_type:m.c[e].resultType,name:e}:{type:"error",size:1,message:"Undefined constant: ".concat(e)}}}}(o,t,r)}function I(e){const{functionName:t,functionArgs:r,signatures:n,schema:o}=e;return n.reduce((e,n)=>{if(!e.error)return e;const i=function(e){const{functionName:t,functionArgs:r,signature:n,schema:o}=e,{arity:i,variadic:s}=n;if(s){if(!(r.length>0))return{type:"error",size:1,message:"Too few arguments in function ".concat(t,".")};{const e=c.compact(r.map(e=>N({resultType:s,functionArg:e,schema:o})));if(e.length>0)return T({},e[0],{size:e.length})}}if(i){if(r.length<i.length)return{type:"error",size:1,message:"Too few arguments in function ".concat(t,".")};if(r.length>i.length)return{type:"error",size:1,message:"Too many arguments in function ".concat(t,".")};const e=c.compact(r.map((e,t)=>N({resultType:i[t],functionArg:e,schema:o})));if(e.length>0)return T({},e[0],{size:e.length})}}({functionName:t,functionArgs:r,signature:n,schema:o});return i?e.error.size<i.size?e:{error:i}:{value:n}},{error:{type:"error",size:99,message:"No signatures found for function: ".concat(t)}})}function N(e){const{resultType:t,functionArg:r,schema:n}=e;if("error"===r.type)return r;if(t!==r.result_type){const e=v(r,n);return{type:"error",size:1,message:"Type mismatch: ".concat(e," is not a ").concat(t?j.o[t]:"undefined",".")}}}var L=r("J9+s"),D=r("vl8/");function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){R(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function R(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const W=Object(L.defineMessages)({placeholder:{id:"database.formula.placeholder",defaultMessage:"Type a formula"}});class A extends l.a{constructor(){super(...arguments),this.storeTypes={store:a},this.handleInputMount=e=>this.input=e,this.handleInput=e=>{const{target:{textContent:t}}=e;this.updateValue(t),y.i(this.updateTimer)&&(this.updateTimer=window.setTimeout(()=>this.executeUpdate(),A.delay))},this.handlePaste=e=>{e.preventDefault();const t=e.clipboardData.getData("text/plain");document.execCommand("insertText",!1,t)},this.handleKeyUp=e=>{this.updateSelection()},this.handleClick=e=>{this.updateSelection()},this.handleKeyDown=e=>{Object(u.a)(this.environment,e,"command+enter")&&(this.handleAccept(),e.stopPropagation())}}insertEntry(e){const{value:t}=this.stores.store.state,{name:r}=e,n=A.getCompletion(e),o=document.getSelection(),i=o.anchorOffset;let s=i,a=o.focusOffset;const l=d.e(t,i);if(l){const[e,o]=l,i=t.slice(e,o).toLowerCase();i!==n.toLowerCase().slice(0,o-e)&&i!==r.toLowerCase().slice(0,o-e)||(s=e,a=o)}if(this.input.focus(),s<a){const e=this.input.firstChild||this.input,t=document.createRange();t.setStart(e,s),t.setEnd(e,a),o.removeAllRanges(),o.addRange(t),document.execCommand("delete",!1)}document.execCommand("insertText",!1,n);const c=(a+n.length)/(this.input&&this.input.textContent&&this.input.textContent.length||0)*this.container.scrollWidth;c>this.container.scrollLeft+this.container.offsetWidth&&(this.container.scrollLeft=c-this.container.offsetWidth)}handleAccept(){this.updateTimer&&(window.clearTimeout(this.updateTimer),this.updateTimer=void 0);const{value:e}=this.stores.store.state;if(""===e.trim())this.props.onSubmit();else{const{formula:t,error:r}=this.updateFormula(e);r||this.props.onSubmit(t)}}willMount(e){super.willMount(e);const{formula:t,schema:r}=e,n=v(t,r);this.updateValue(n)}didMount(){const{device:e}=this.environment,{value:t}=this.stores.store.state;if(this.input&&(this.input.textContent=t,e.isMobile||this.input.focus(),t)){const e=document.getSelection();this.input.firstChild&&e.collapse(this.input.firstChild,t.length),this.container.scrollLeft=this.container.scrollWidth-this.container.offsetWidth}}renderComponent(){const{device:e}=this.environment,{disabled:t}=this.props,{command:r}=f.getShortcutTextItems(this.environment),{html:o}=this.stores.store.state;return n.createElement("div",{style:this.getWrapStyle()},n.createElement("div",{ref:e=>{e&&(this.container=e)},style:A.style},n.createElement(g.a,{capture:!t,onLeft:c.identity,onRight:c.identity,onSelectAll:c.identity,onRedo:c.identity,onUndo:c.identity,onToggleBold:c.identity,onToggleItalics:c.identity,onToggleCode:c.identity,onCut:c.identity,onCopy:c.identity,onPaste:c.identity,onKeypress:c.identity,onDelete:c.identity,onBackspace:c.identity},n.createElement("div",{ref:this.handleInputMount,contentEditable:!t,spellCheck:!1,autoCorrect:"off",autoCapitalize:"off",onClick:this.handleClick,onKeyUp:this.handleKeyUp,onKeyDown:this.handleKeyDown,onInput:this.handleInput,onPaste:this.handlePaste,style:this.getInputStyle()})),n.createElement("div",{style:this.getOverlayStyle(),dangerouslySetInnerHTML:{__html:o}})),!e.isMobile&&!t&&n.createElement(p.a,{renderTooltip:()=>n.createElement("div",null,n.createElement("span",null,n.createElement(L.FormattedMessage,{defaultMessage:"Accept",id:"database.formula.acceptFormulaInput.tooltip"}))," ",n.createElement("span",{style:{color:this.theme.mediumInvertedTextColor}},r,"+Enter")),render:t=>n.createElement(S.a,Object.assign({disabled:Boolean(this.stores.store.state.error),onClick:()=>this.handleAccept(),style:z({height:24,padding:"0 8px",alignSelf:"flex-end",marginRight:6,marginBottom:4},e.isMobile&&{marginRight:12})},t),n.createElement(L.FormattedMessage,{id:"database.formula.doneButton.label",defaultMessage:"Done",description:"Label for button that confirms changes to a formula."}))}))}updateValue(e){const t=""===e.trim()?this.props.disabled?"":D.default.formatMessage(W.placeholder):d.c(e);this.stores.store.setState(z({},this.stores.store.state,{html:t,value:e}))}updateSelection(){const e=document.getSelection().anchorOffset,{value:t}=this.stores.store.state,r=d.e(t,e),n=r?t.slice(r[0],r[1]):"";n!==this.stores.store.state.query&&this.stores.store.setState(z({},this.stores.store.state,{query:n}))}updateFormula(e){const{schema:t,property:r}=this.props;if(""===e.trim())return{error:void 0,formula:void 0,type:void 0};{const n=P(e,r,t);if(n&&"error"===n.type){const{message:e}=n;return{formula:void 0,error:e,type:void 0}}return{formula:n,error:void 0,type:void 0}}}executeUpdate(){const{value:e}=this.stores.store.state,{error:t,formula:r}=this.updateFormula(e);!t&&r&&this.props.onChange(r),this.updateTimer=void 0,this.stores.store.setState(z({},this.stores.store.state,{error:t}))}static getCompletion(e){const{category:t,name:r}=e;return t===m.a.property?"prop(".concat(JSON.stringify(r),")"):t===m.a.constant?r:"".concat(r,"(")}getWrapStyle(){const{device:e,WindowSizeStore:t}=this.environment;return z({display:"flex",flex:"none",background:this.theme.inputBackground,minHeight:33,borderTopLeftRadius:3,borderTopRightRadius:3},this.props.disabled&&{background:this.theme.contentBackground,borderRadius:3},{},e.isMobile&&{borderBottom:"1px solid ".concat(this.theme.regularDividerColor),background:this.theme.popoverBackground,minHeight:44,paddingLeft:t.paddingLeft,paddingRight:t.paddingRight})}getOverlayStyle(){const{device:e}=this.environment,{value:t}=this.stores.store.state;return z({},e.isMobile?A.mobileInputStyle:A.desktopInputStyle,{zIndex:0},""===t.trim()&&{color:this.theme.mediumTextColor},{position:void 0})}getInputStyle(){const{device:e}=this.environment,t=e.isSafari||e.isChrome?"WebkitTextFillColor":"color";return z({},e.isMobile?A.mobileInputStyle:A.desktopInputStyle,{border:"none",background:"none",[t]:""===this.stores.store.state.value?this.theme.regularTextColor:b.f.transparent,caretColor:this.theme.regularTextColor,zIndex:1,width:"100%"})}}A.delay=0,A.style={flexGrow:1,position:"relative",minWidth:0},A.desktopInputStyle={alignItems:"center",position:"absolute",minWidth:"100%",minHeight:32,margin:0,padding:0,paddingLeft:10,paddingRight:8,paddingTop:8,fontSize:13,fontFamily:h.a.fontFamily.mono,wordWrap:"break-word"},A.mobileInputStyle={alignItems:"center",position:"absolute",minWidth:"100%",minHeight:44,margin:0,paddingLeft:16,paddingRight:0,paddingTop:12,paddingBottom:12,fontSize:14,fontFamily:h.a.fontFamily.githubMono};var _=A,B=r("zEGb"),q=r("SR/M"),U=r("i3uR"),K=r("RgmA");class V extends l.a{renderDescription(){const{entry:e}=this.props;if(e){const{descriptionMessage:t,fallbackDescription:r}=e;if(t)return n.createElement(L.FormattedMessage,Object.assign({},t));if(r)return r}return null}renderComponent(){const{entry:e}=this.props;if(e){const{name:t,examples:r}=e,o=Object(d.c)((r||[]).join("\n")),i=this.renderSyntax();return n.createElement("div",null,n.createElement("h1",{style:V.headerStyle},t),n.createElement("p",{style:V.textStyle},this.renderDescription()),n.createElement("p",{style:V.textStyle},n.createElement("b",null,n.createElement(L.FormattedMessage,{id:"database.formula.syntaxSection.title",defaultMessage:"Syntax",description:"Title of the section describing the syntax of a formula component. For example, for sqrt this title appears above 'sqrt(number)', and appears alongside the Examples section."}))),n.createElement("pre",{style:this.getCodeStyle()},Object(K.a)(i,e=>n.createElement("br",{key:"sep:"+e}))),n.createElement("p",{style:V.textStyle},n.createElement("b",null,n.createElement(L.FormattedMessage,{id:"database.formula.examplesSection.title",defaultMessage:"Examples",description:"Title of the section listing examples ofthe syntax of a formula component. For example, for sqrt this title appears above 'sqrt(144) == 12', and appears alongside the Syntax section."}))),n.createElement("pre",{style:this.getCodeStyle(),dangerouslySetInnerHTML:{__html:o}}))}return n.createElement("div",null)}renderSyntax(){const{entry:e}=this.props;if(!e)return[];const{name:t,category:r}=e;return r===m.a.property?[n.createElement("span",{key:0},"prop(",JSON.stringify(t),")")]:r===m.a.constant?[n.createElement("span",{key:0},t)]:r===m.a.function?this.getFunctionSyntax(e):r===m.a.operator?this.getOperatorSyntax(e):[]}getFunctionSyntax(e){const{name:t}=e;return V.getSignatureNames(e).map((e,r)=>{let{variadic:o,arity:i}=e;return o?n.createElement("span",{key:r},t,"(",n.createElement("i",null,o),"...)"):n.createElement("span",{key:r},t,"(",Object(K.a)(i.map((e,t)=>n.createElement("i",{key:t},e)),e=>n.createElement("span",{key:"sep:"+e},","," ")),")")})}getOperatorSyntax(e){const{operator:t}=e;return c.compact(V.getSignatureNames(e).map((e,r)=>{let{arity:o}=e;if(1===o.length){const[e]=o;return n.createElement("span",{key:-r-1},t," ",n.createElement("i",null,e))}if(2===o.length){const[e,i]=o;return n.createElement("span",{key:-r-1},n.createElement("i",null,e)," ",t," ",n.createElement("i",null,i))}if(3===o.length){const[e,t,i]=o;return n.createElement("span",{key:-r-1},n.createElement("i",null,e)," ","? ",n.createElement("i",null,t)," ",": ",n.createElement("i",null,i))}}).concat(this.getFunctionSyntax(e)))}static getSignatureNames(e){const{name:t,signatures:r}=e;return"if"===t?[{arity:["boolean","value","value"]}]:"format"===t||"unaryPlus"===t?[{arity:["value"]}]:"equal"===t||"unequal"===t?[{arity:["value","value"]}]:r.map(e=>{let{arity:t,variadic:r}=e;return{variadic:r?V.typeNameMap[r]:void 0,arity:t?c.compact(t.map(e=>V.typeNameMap[e])):[]}})}getCodeStyle(){return{paddingTop:6,paddingBottom:8,paddingLeft:10,paddingRight:10,overflowX:"scroll",background:this.theme.sidebarBackground,borderRadius:3,fontSize:13,margin:0,fontFamily:h.a.fontFamily.mono,lineHeight:1.4}}}V.typeNameMap={checkbox:"boolean",number:"number",text:"text",date:"date"},V.headerStyle={fontSize:20,margin:0,lineHeight:1,marginTop:4,marginBottom:12},V.textStyle={marginTop:8,marginBottom:8,fontSize:13,lineHeight:1.4};var H=V,J=r("2Y+N"),G=r("ZQ9l"),Y=r("mF3+"),Q=r("gbGO"),Z=r("MeYt"),X=r("nPEg");function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){te(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class re extends l.a{renderComponent(){const{entry:{name:e}}=this.props;return n.createElement(q.a,{focused:this.props.focused,onClick:this.props.onClick,onMouseEnter:this.props.onMouseEnter,icon:n.createElement("div",{style:ee({},B.a.defaultWrapStyle,{},this.environment.device.isMobile&&{marginLeft:14})},this.renderPropertyIcon()),title:e,right:this.renderDocumentationButtonPopup(),style:ee({},!this.environment.device.isMobile&&{paddingLeft:8,paddingRight:8}),desktopIconStyle:{marginLeft:0}})}renderDocumentationButtonPopup(){const{device:e}=this.environment;if(this.environment.device.isMobile)return n.createElement(U.a,{popupType:e.isMobile?U.a.PopupType.SlideUp:U.a.PopupType.Popup,renderOrigin:e=>n.createElement(Z.a,Object.assign({mobileFeedback:!0,style:{width:16,height:16}},e),Y.a.typesUnknownType({fill:this.theme.mediumIconColor})),render:t=>{let r;return r=e.isMobile?{menuType:Q.b.MenuType.Modal,title:n.createElement(L.FormattedMessage,{defaultMessage:"Documentation",id:"database.formulaPropertyEntryMenuItem.title",description:"In this context, documentation refers to the documentation popup for formulas property values in databases."}),right:n.createElement(X.c,null),onClickRight:t.close}:{menuType:Q.b.MenuType.Popup},n.createElement(Q.b,Object.assign({},r),n.createElement(J.a,null,n.createElement(G.a,{title:n.createElement(H,{entry:this.props.entry}),style:{paddingTop:10,paddingBottom:16}})))}})}renderPropertyIcon(){const{entry:e}=this.props;if(e.category===m.a.property||e.category===m.a.constant){const{resultType:t}=e;return n.createElement(B.a,{type:t,size:14,theme:this.theme})}if(e.category===m.a.function||e.category===m.a.operator){const{signatures:[{resultType:t}]}=e;return n.createElement(B.a,{type:t,size:14,theme:this.theme})}}}re.contextTypes=ee({},Q.c);var ne=re,oe=r("vshI"),ie=r("bPtJ"),se=r("y6Dp"),ae=r("RQ1t"),le=r("8fuX"),ce=r("D2XV"),pe=r("QcDD"),ue=r("qqdV"),de=r("sSHh");function me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function he(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?me(Object(r),!0).forEach((function(t){ye(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):me(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ye(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class fe extends l.a{constructor(){super(...arguments),this.storeTypes={formulaInputStore:a,menuListStore:ae.a},this.getRecordValue=(e,t)=>{const{currentBlockStore:r}=pe.default.state;if(r)return Object(ie.c)(r,e,t).getValue()}}renderComponent(){const{device:e}=this.environment,{schema:t,property:r,disabled:o}=this.props,{error:i}=this.stores.formulaInputStore.state,{formula:s}=t[r],a=n.createElement(n.Fragment,null,n.createElement(_,{ref:e=>{e&&(this.formulaInput=e)},store:this.stores.formulaInputStore,formula:s,schema:t,property:r,disabled:o,onChange:e=>this.handleInputChange(e),onSubmit:e=>this.handleInputSubmit(e)}),e.isMobile&&this.renderStatus());let l;return l=e.isMobile?{menuType:Q.b.MenuType.Modal,title:"Formula",left:n.createElement(X.b,null),right:i?void 0:"Save",onClickLeft:this.props.onClickCancel,onClickRight:()=>this.formulaInput.handleAccept(),header:a}:{menuType:Q.b.MenuType.Popup,width:580,height:o?"none":void 0,disableScroller:!0,header:a,footer:this.renderStatus()},n.createElement(Q.b,Object.assign({},l),!o&&this.renderContent())}renderContent(){const{device:e}=this.environment,t=this.getLibrary(),r=this.getFocusedEntry(t);return e.isMobile?n.createElement(o.a,{initialFocus:0,context:{blocks:[],environment:this.environment},filter:this.stores.formulaInputStore.state.query,sections:this.renderSections(t),menuListStore:this.stores.menuListStore}):n.createElement("div",{style:{display:"flex",flexGrow:1,overflow:"hidden",boxShadow:"\n\t\t\t\t\t\t\tinset 0 1px 0 ".concat(this.theme.regularDividerColor,",\n\t\t\t\t\t\t\tinset 0 -1px 0 ").concat(this.theme.regularDividerColor,"\n\t\t\t\t\t\t"),height:295}},n.createElement(le.b,{type:le.b.OverflowType.Y,style:{width:180,flexGrow:0,flexShrink:0}},n.createElement(o.a,{initialFocus:0,context:{blocks:[],environment:this.environment},filter:this.stores.formulaInputStore.state.query,sections:this.renderSections(t),menuListStore:this.stores.menuListStore,disableMouseLeaveBlur:!0})),n.createElement(le.b,{type:le.b.OverflowType.Y,style:{padding:12,boxShadow:"inset 1px 0 0 ".concat(this.theme.regularDividerColor),flexGrow:1}},n.createElement(H,{entry:r})))}renderStatus(){const{device:e}=this.environment,{disabled:t}=this.props,{command:r}=f.getShortcutTextItems(this.environment),{error:o}=this.stores.formulaInputStore.state;return o?n.createElement("div",{style:e.isMobile?this.getMobileStatusWrapStyle():this.getDesktopStatusWrapStyle()},n.createElement("span",{style:he({},e.isMobile&&fe.mobileStatusStyle,{},fe.errorStatusStyle)},o),!e.isMobile&&this.renderLearnMoreLink()):e.isMobile?n.createElement("div",{style:this.getMobileStatusWrapStyle()},n.createElement("span",{style:fe.mobileStatusStyle},n.createElement(L.FormattedMessage,{defaultMessage:"No errors.",id:"database.formula.mobileNoErrors.message"}))):t?void 0:n.createElement("div",{style:this.getDesktopStatusWrapStyle()},n.createElement("span",null,n.createElement(L.FormattedMessage,{id:"database.formula.keyboardShortcutHint",defaultMessage:"{commandEnter} to accept.",description:'Caption that describes keyboard shortcut to confirm changes to a formula and close the formula editor. Appears as "⌘+Enter to accept." on Mac, Ctrl+Enter on Windows.',values:{commandEnter:n.createElement("span",{style:{fontWeight:h.a.fontWeight.medium}},r,"+Enter")}})),this.renderLearnMoreLink())}renderLearnMoreLink(){return n.createElement("div",{style:{marginLeft:"auto"}},n.createElement(de.a,{title:n.createElement("span",{style:{fontSize:h.a.fontSize.UISmall.desktop}},n.createElement(L.FormattedMessage,{defaultMessage:"Learn more about formulas",id:"formulaPropertyMenu.learnMore.button.label"})),href:ue.v.formulas,analyticsFrom:"formula_property_menu"}))}renderSections(e){return e.map(e=>({key:e.key,title:this.props.intl.formatMessage(e.titleMessage),render:e=>n.createElement(J.a,Object.assign({},e,{desktopTitleStyle:{paddingLeft:8,paddingRight:8}})),actions:e.entries.map((e,t)=>({key:this.getEntryKey(e,t),name:e.name,render:t=>n.createElement(ne,Object.assign({},t,{entry:e})),action:()=>{this.formulaInput.insertEntry(e)},closeParentMenu:!1}))}))}handleUpdate(e,t){const{onChange:r,schema:n,property:o,analyticsFrom:i}=this.props;if(e&&"error"===e.type);else{const{type:s,name:a,number_format:l}=n[o];r({schema:he({},n,{[o]:{type:s,name:a,formula:e,number_format:l}}),close:t});const c=n[o];c&&se.N(this.environment,{property_type:c.type,action:"formula_edit",from:i})}}getLibrary(){const{schema:e,property:t,block:r,intl:n}=this.props,o=Object.keys(e).filter(e=>e!==t).map(t=>{const o=e[t];if(!o)throw new Error("Property not found.");const{name:i}=o,s=oe.b({property:t,schema:e,block:r,getRecordValue:this.getRecordValue,userTimeZone:ce.l,intl:n,depth:0,resultCache:{}});return{name:i,category:m.a.property,fallbackDescription:n.formatMessage({id:"database.formula.property.description",defaultMessage:"Returns the {propertyName} property for each entry."},{propertyName:i}),resultType:d.b(o),examples:["prop(".concat(JSON.stringify(i),") == ").concat(JSON.stringify(s))]}});return[m.d(m.a.property,o),...m.b]}getFocusedEntry(e){const t=this.stores.menuListStore.state.focus.focusedKey;if(void 0!==t)for(const r of e)for(const[e,n]of r.entries.entries())if(this.getEntryKey(n,e)===t)return n}getEntryKey(e,t){return"".concat(e.name," ").concat(t)}getDesktopStatusWrapStyle(){return{display:"flex",flex:"none",alignItems:"center",fontSize:12,paddingLeft:8,paddingRight:8,height:30,color:this.theme.mediumTextColor}}getMobileStatusWrapStyle(){const{WindowSizeStore:e}=this.environment;return{display:"flex",flex:"none",alignItems:"center",fontSize:14,height:28,color:this.theme.mediumTextColor,background:this.theme.popoverBackground,boxShadow:"0 1px 0 ".concat(this.theme.regularDividerColor),paddingLeft:e.paddingLeft,paddingRight:e.paddingRight}}handleInputChange(e){this.handleUpdate(e,!1)}handleInputSubmit(e){this.handleUpdate(e,!0)}}fe.mobileStatusStyle={paddingLeft:16,paddingRight:16},fe.errorStatusStyle=he({color:b.f.redWithAlpha(.8)},h.a.textOverflowStyle);t.default=Object(L.injectIntl)(fe)}}]);