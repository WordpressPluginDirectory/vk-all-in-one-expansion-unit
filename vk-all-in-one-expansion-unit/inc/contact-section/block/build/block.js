(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.wp.blocks,n=window.React;var o,l,r;function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)({}).hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(null,arguments)}var c=function(e){return n.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},e),o||(o=n.createElement("path",{fill:"#000",d:"m10.89 14.778-3.267.007a.11.11 0 0 0-.102.076l-.25.722c-.022.076.03.152.103.152h1.27c.095 0 .146.122.08.19L6.7 18.105h.007l1.042 3.397c.022.076-.03.144-.103.144h-1.02a.104.104 0 0 1-.102-.076L6 19.83c-.029-.106-.168-.106-.205-.007l-.426 1.223a.1.1 0 0 0 0 .069l.39 1.481c.014.046.058.084.102.084H9.15c.073 0 .125-.076.103-.145l-1.329-4.277c-.014-.038 0-.084.03-.114l3.016-3.176c.066-.069.015-.19-.08-.19"})),l||(l=n.createElement("path",{fill:"#D8141C",d:"m7.022 13-1.99.008a.11.11 0 0 0-.102.076l-.257.721c-.03.076.03.152.103.152h.836c.074 0 .125.076.103.152l-2.37 6.717a.108.108 0 0 1-.206 0l-1.703-4.848a.112.112 0 0 1 .103-.152h.859a.11.11 0 0 1 .103.076l.616 1.748a.108.108 0 0 0 .206 0l.954-2.72a.112.112 0 0 0-.103-.152H.108c-.073 0-.125.076-.103.152l3.127 8.996a.108.108 0 0 0 .205 0l3.787-10.774c.022-.076-.029-.152-.102-.152"})),r||(r=n.createElement("path",{fill:"#000",fillRule:"evenodd",d:"M7 0h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.2-.19.45-.29.71-.29.1 0 .21.01.31.05 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V17c0 .55-.45 1-1 1-4.02 0-7.714-1.395-10.624-3.727a1.6 1.6 0 0 0-1.084-.947A16.95 16.95 0 0 1 6 1c0-.55.45-1 1-1",clipRule:"evenodd"})))};const i=JSON.parse('{"apiVersion":3,"name":"vk-blocks/contact-section","title":"Contact Section","category":"veu-block","description":"Display Contact Section","textdomain":"vk-all-in-one-expansion-unit","attributes":{"vertical":{"type":"boolean","default":false}},"supports":{"className":true}}'),s=window.wp.i18n,u=window.wp.blockEditor,p=window.wp.serverSideRender;var m=e.n(p);const b=window.wp.components;function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}var f,d,y,w=i.name,h={icon:React.createElement(c,null),edit:function(e){var t=e.attributes,n=e.setAttributes,o=t.vertical,l=(0,u.useBlockProps)({className:"veu_contact_section_block"});return React.createElement(React.Fragment,null,React.createElement(u.InspectorControls,null,React.createElement(b.PanelBody,{title:(0,s.__)("Display conditions","vk-all-in-one-expansion-unit"),initialOpen:!1},React.createElement(b.BaseControl,null,React.createElement(b.CheckboxControl,{label:(0,s.__)("Set telephone and mail form vertically","vk-all-in-one-expansion-unit"),className:"mb-1",checked:o,onChange:function(e){return n({vertical:e})}})))),React.createElement("div",l,React.createElement(m(),{block:"vk-blocks/contact-section",attributes:e.attributes})))}};(0,t.unstable__bootstrapServerSideBlockDefinitions)((f={},y=i,(d=function(e){var t=function(e){if("object"!=v(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!=v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==v(t)?t:t+""}(d=w))in f?Object.defineProperty(f,d,{value:y,enumerable:!0,configurable:!0,writable:!0}):f[d]=y,f)),(0,t.registerBlockType)(i,h)})();