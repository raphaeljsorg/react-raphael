!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["react-raphael"]=t():e["react-raphael"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(2),o=r.Paper,a=r.Set,c=r.Circle,i=r.Ellipse,l=r.Image,s=r.Path,u=r.Rect,p=r.Text;t.Raphael=Raphael,t.Utils=n(1),t.Paper=o,t.Set=a,t.Circle=c,t.Ellipse=i,t.Image=l,t.Path=s,t.Rect=u,t.Text=p},function(e,t){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r={createPaper:function(e,t){var n=t.width,o=t.height,a=Raphael(e,n,o);return r.paper=a,a},create:function(e,t){var o=null;switch(e){case"set":o=r.paper.set();break;case"circle":var a=t.x,c=t.y,i=t.r;o=r.paper.circle(a,c,i);break;case"ellipse":var a=t.x,c=t.y,l=t.rx,s=t.ry;o=r.paper.ellipse(a,c,l,s);break;case"image":var u=t.src,a=t.x,c=t.y,p=t.width,m=t.height;o=r.paper.image(u,a,c,p,m);break;case"path":var f=t.d;o=r.paper.path(f);break;case"rect":var a=t.x,c=t.y,p=t.width,m=t.height,i=t.r;o=r.paper.rect(a,c,p,m,i);break;case"text":var a=t.x,c=t.y,h=t.text;o=r.paper.text(a,c,h)}if(o)for(var y in t)switch(y){case"attr":"object"===n(t[y])&&o.attr(t.attr);break;case"animate":"object"===n(t[y])&&o.animate(t.animate);break;case"animateWith":"object"===n(t[y])&&o.animateWith(t.animateWith);break;case"click":"function"==typeof t[y]&&o.click(t.click);break;case"dblclick":"function"==typeof t[y]&&o.dblclick(t.dblclick);break;case"drag":"function"==typeof t[y]&&o.drag(t.drag);break;case"glow":"object"===n(t[y])&&o.click(t.click);break;case"hover":"function"==typeof t[y]&&o.dblclick(t.dblclick);break;case"hide":"boolean"==typeof t[y]&&(t.hide?o.hide():o.show());break;case"mousedown":"function"==typeof t[y]&&o.mousedown(t.mousedown);break;case"mousemove":"function"==typeof t[y]&&o.mousemove(t.mousemove);break;case"mouseout":"function"==typeof t[y]&&o.mouseout(t.mouseout);break;case"mouseover":"function"==typeof t[y]&&o.mouseover(t.mouseover);break;case"mouseup":"function"==typeof t[y]&&t.mouseup(o.mouseup);break;case"rotate":"rotate"==typeof t[y]&&o.rotate(t.attr);break;case"scale":"scale"==typeof t[y]&&o.scale(t.animate);break;case"touchcancel":"function"==typeof t[y]&&o.touchcancel(t.touchcancel);break;case"touchend":"function"==typeof t[y]&&o.touchend(t.touchend);break;case"touchmove":"function"==typeof t[y]&&t.touchmove(o.touchmove);break;case"touchstart":"function"==typeof t[y]&&t.touchstart(o.touchstart);break;case"transform":"object"!==n(t[y])&&"array"!=typeof t[y]||t.transform(o.transform);break;case"translate":"object"===n(t[y])&&t.translate(o.translate)}return o},createElement:function(e,t,n){var o=r.create(e,t);return r.elements.push({type:e,props:t,callback:n,element:o}),n&&n(o),o},createSet:function(e){var t=r.create("set",e);return r.elements.push({type:"set",element:t}),t},removeSet:function(e){var t=r.elements.filter(function(t){return t===e});t.length>0&&t[0].remove()},removeElement:function(e){var t=r.elements.filter(function(t){return t===e});t.length>0&&t[0].remove()},paper:null,elements:[]};e.exports=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),l=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={loading:!1},n}return a(t,e),c(t,[{key:"componentDidMount",value:function(){var e=ReactDOM.findDOMNode(this.refs.container),t=i.createPaper(e,this.props);this.paper=t,this.setState({loading:!0})}},{key:"componentWillUnmount",value:function(){this.paper.remove()}},{key:"genElementsContainer",value:function(){return this.state.loading?React.createElement("div",{className:"elements-container"},this.props.children):React.createElement("div",{className:"elements-container"})}},{key:"getPaper",value:function(){return this.paper}},{key:"render",value:function(){var e=this.genElementsContainer();return React.createElement("div",{className:"react-raphael"},e,React.createElement("div",{ref:"container",className:"paper-container"}))}}]),t}(React.Component),s=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.elements=[],n.state={loading:!1},n}return a(t,e),c(t,[{key:"componentWillMount",value:function(){this.onCreatedElement=this.onCreatedElement.bind(this),this.elements=[];var e=this.props.children||[],t=e instanceof Array;t||(e=[e]);for(var n=0;n<e.length;n++){var r=e[n],o={};for(var a in r.props)o[a]=r.props[a];o.onCreatedElement=this.onCreatedElement,o.key=n,this.elements.push(React.createElement(r.type,o,null))}}},{key:"componentWillUpdate",value:function(){this.elements=[];var e=this.props.children||[],t=e instanceof Array;t||(e=[e]);for(var n=0;n<e.length;n++){var r=e[n],o={};for(var a in r.props)o[a]=r.props[a];o.onCreatedElement=this.onCreatedElement,o.key=n,this.elements.push(React.createElement(r.type,o,null))}}},{key:"componentDidMount",value:function(){var e=i.createSet(this.props);this.set=e,this.setState({loading:!0})}},{key:"componentWillUnmout",value:function(){i.removeSet(this.set)}},{key:"onCreatedElement",value:function(e){this.set.push(e)}},{key:"getSet",value:function(){return this.set}},{key:"render",value:function(){return this.state.loading?React.createElement("div",{className:"raphael-set"},this.elements):React.createElement("div",{className:"raphael-set"})}}]),t}(React.Component),u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"componentDidMount",value:function(){var e=i.createElement("circle",this.props,this.props.onCreatedElement);this.element=e}},{key:"componentWillUnmount",value:function(){i.removeElement(this.element)}},{key:"render",value:function(){return React.createElement("div",{className:"raphael-circle"})}}]),t}(React.Component),p=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"componentDidMount",value:function(){var e=i.createElement("ellipse",this.props,this.props.onCreatedElement);this.element=e}},{key:"componentWillUnmount",value:function(){i.removeElement(this.element)}},{key:"getElement",value:function(){return this.element}},{key:"render",value:function(){return React.createElement("div",{className:"raphael-ellipse"})}}]),t}(React.Component),m=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"componentDidMount",value:function(){var e=i.createElement("image",this.props,this.props.onCreatedElement);this.element=e}},{key:"componentWillUnmount",value:function(){i.removeElement(this.element)}},{key:"getElement",value:function(){return this.element}},{key:"render",value:function(){return React.createElement("div",{className:"raphael-image"})}}]),t}(React.Component),f=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"componentDidMount",value:function(){var e=i.createElement("path",this.props,this.props.onCreatedElement);this.element=e}},{key:"componentWillUnmount",value:function(){i.removeElement(this.element)}},{key:"getElement",value:function(){return this.element}},{key:"render",value:function(){return React.createElement("div",{className:"raphael-path"})}}]),t}(React.Component),h=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"componentDidMount",value:function(){var e=i.createElement("rect",this.props,this.props.onCreatedElement);this.element=e}},{key:"componentWillUnmount",value:function(){i.removeElement(this.element)}},{key:"getElement",value:function(){return this.element}},{key:"render",value:function(){return React.createElement("div",{className:"raphael-rect"})}}]),t}(React.Component),y=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),c(t,[{key:"componentDidMount",value:function(){var e=i.createElement("text",this.props,this.props.onCreatedElement);this.element=e}},{key:"componentWillUnmount",value:function(){i.removeElement(this.element)}},{key:"getElement",value:function(){return this.element}},{key:"render",value:function(){return React.createElement("div",{className:"raphael-text"})}}]),t}(React.Component);e.exports={Paper:l,Set:s,Circle:u,Ellipse:p,Image:m,Path:f,Rect:h,Text:y}}])});