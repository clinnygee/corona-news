(this["webpackJsonpcorona-news"]=this["webpackJsonpcorona-news"]||[]).push([[0],{17:function(e,t,n){},21:function(e,t,n){e.exports=n(42)},26:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(9),c=n.n(l),o=(n(26),n(2)),i=n(1),u=n(10),s=n(11),f=n(18),d=n(12),h=n(19),m=function(e,t){return e.slice(0,t)+"..."},g=[{country:"Australia",code:"Au"},{country:"United States",code:"Us"},{country:"China",code:"Ch"},{country:"Brazil",code:"br"},{country:"Canada",code:"ca"},{country:"Germany",code:"de"},{country:"France",code:"fr"},{country:"Great Britain",code:"gb"},{country:"Greece",code:"gr"},{country:"Russia",code:"ru"},{country:"Japan",code:"jp"},{country:"South Korea",code:"sk"},{country:"Thailand",code:"th"},{country:"Italy",code:"it"},{country:"India",code:"in"}],p="https://cors-anywhere.herokuapp.com/",x=function(e){var t="";return e?(t="https://corona.lmao.ninja/countries",fetch(p+t).then((function(e){return e.json()})).then((function(e){return e})).then((function(t){return function(e,t){var n=e.filter((function(e){return e.country===t}));return console.log(n),n.length>=1?(delete n[0].country,n[0]):null}(t,e)}))):(t="https://corona.lmao.ninja/all",fetch(p+t).then((function(e){return e.json()})).then((function(e){return e})))},y=Object(r.createContext)({searchTerm:"Global",countryCode:"",darkMode:!0,articles:null,allStats:null,getAllStats:function(){},updateSearchTerm:function(){},toggleDarkMode:function(){}}),b=function(e){function t(){var e,n;Object(u.a)(this,t);for(var r=arguments.length,a=new Array(r),l=0;l<r;l++)a[l]=arguments[l];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).getAllStats=function(){x().then((function(e){n.setState({allStats:e})}))},n.updateSearchTerm=function(e){n.setState({searchTerm:e}),n.updateCountryCode(e),console.log(e)},n.updateCountryCode=function(e){var t=g.find((function(t){return t.country===e}));console.log(t),t?(n.setState({countryCode:(null===t||void 0===t?void 0:t.code)?t.code:"all"}),console.log(t)):n.setState({countryCode:"all"})},n.toggleDarkMode=function(){n.setState({darkMode:!n.state.darkMode})},n.state={articles:null,darkMode:!0,allStats:null,getAllStats:n.getAllStats,searchTerm:"Global",countryCode:"",updateSearchTerm:n.updateSearchTerm,toggleDarkMode:n.toggleDarkMode},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(y.Provider,{value:this.state},this.props.children)}}]),t}(a.a.Component),E=y.Consumer,v=n(3);function F(){var e=Object(o.a)(["\n    text-align: center;\n    color: ",",\n"]);return F=function(){return e},e}function w(){var e=Object(o.a)(["\n    text-align: center;\n    text-transform: capitalize;\n    color: ",";\n"]);return w=function(){return e},e}function j(){var e=Object(o.a)(["\n    font-size: 2em;\n    color: ",";\n    width: 100%;\n    text-align: center;\n    text-transform: uppercase;\n"]);return j=function(){return e},e}function O(){var e=Object(o.a)(["\n    min-width: 30%;\n    height: 40%;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    line-height: 1.5em;\n    border: 1px solid ",";\n    background-color: ",";\n    color: ",";\n    border-radius: 4px;\n    margin: 2px 2px 2px 2px;\n"]);return O=function(){return e},e}function k(){var e=Object(o.a)(["\n    width: 100%;\n    height: calc(100% - 84px);\n    display: flex;\n    flex-wrap: wrap;\n    padding: 16px 16px 16px 16px;\n    align-items: center;\n    justify-content: center;\n    \n    "]);return k=function(){return e},e}var S=i.b.div(k()),D=i.b.div(O(),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.text_primary})),C=i.b.h1(j(),(function(e){return e.theme.colors.text_secondary})),T=i.b.h1(w(),(function(e){return e.theme.colors.text_secondary})),_=i.b.p(F(),(function(e){return e.theme.colors.text_ternary})),B=function(e){return a.a.createElement(D,null,a.a.createElement(T,null,e.title),a.a.createElement(_,null,e.content))},M=function(e){console.log(e.stats);var t=Object.keys(e.stats);console.log(t);var n=t.map((function(t){var n=e.stats[t]>=1584683350300?function(e){var t=new Date(e);return console.log(t),t.toString()}(e.stats[t]):e.stats[t];return console.log(n),a.a.createElement(B,{title:t,content:n,key:t})}));return console.log(t),a.a.createElement(S,null,a.a.createElement(C,null,e.searchTerm),n)},P=n(16),R=n.n(P),z=n(17),I=n.n(z);function A(){var e=Object(o.a)(["\n    background-color: ",";\n    border: 1px solid ",";\n    color: ",";\n    width: 95%;\n    border-radius: 4px;\n    padding: 4px 4px 4px 4px;\n\n"]);return A=function(){return e},e}var K=i.b.div(A(),(function(e){return e.theme.colors.background}),(function(e){return e.theme.colors.border}),(function(e){return e.theme.colors.text_secondary})),G=function(e){return e.country},U=function(e){return a.a.createElement(K,null,e.country)},q=function(e){var t=Object(r.useState)(""),n=Object(v.a)(t,2),l=n[0],c=n[1],o=Object(r.useState)([]),i=Object(v.a)(o,2),u=i[0],s=i[1],f={placeholder:"Search",value:l,onChange:function(t,n){var r=n.newValue;c(r),console.log(r),e.onChange(r)},onKeyPress:e.onKeyPress};return a.a.createElement(R.a,{suggestions:u,onSuggestionsFetchRequested:function(e){var t=e.value;s(function(e){var t=e.trim().toLowerCase(),n=t.length;return 0===n?[]:g.filter((function(e){return e.country.toLowerCase().slice(0,n)===t}))}(t))},onSuggestionsClearRequested:function(){s([])},getSuggestionValue:G,renderSuggestion:U,inputProps:f,onKeyPress:e.onKeyPress,theme:I.a})};function Y(){var e=Object(o.a)(['\n\n    display: inline-block;\n    width: 80px;\n    height: 80px;\n\n    &:after{\n        content: " ";\n        display: block;\n        width: 64px;\n        height: 64px;\n        margin: 8px;\n        border-radius: 50%;\n        border: 6px solid #fff;\n        border-color: rgb(215, 218, 220) transparent rgb(215, 218, 220) transparent;\n        animation: '," 1.2s linear infinite;\n    }\n    \n"]);return Y=function(){return e},e}function J(){var e=Object(o.a)(["\n    0% {\n        transform: rotate(0deg);\n      }\n      100% {\n        transform: rotate(360deg);\n      }\n"]);return J=function(){return e},e}function L(){var e=Object(o.a)(["\n    position: relative;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 100px;\n    height: 100px;\n"]);return L=function(){return e},e}var V=i.b.div(L()),W=Object(i.c)(J()),$=i.b.div(Y(),W),H=function(e){return a.a.createElement(V,null,a.a.createElement($,null))};function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var X=a.a.createElement("g",null),Z=a.a.createElement("g",null),ee=a.a.createElement("g",null),te=a.a.createElement("g",null),ne=a.a.createElement("g",null),re=a.a.createElement("g",null),ae=a.a.createElement("g",null),le=a.a.createElement("g",null),ce=a.a.createElement("g",null),oe=a.a.createElement("g",null),ie=a.a.createElement("g",null),ue=a.a.createElement("g",null),se=a.a.createElement("g",null),fe=a.a.createElement("g",null),de=a.a.createElement("g",null),he=function(e){var t=e.svgRef,n=e.title,r=Q(e,["svgRef","title"]);return a.a.createElement("svg",N({id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 511.989 511.989",style:{enableBackground:"new 0 0 511.989 511.989"},xmlSpace:"preserve",ref:t},r),n?a.a.createElement("title",null,n):null,a.a.createElement("circle",{style:{fill:"#27536B"},cx:255.994,cy:255.994,r:255.994}),a.a.createElement("path",{style:{fill:"#FCD57E"},d:"M391.37,292.817c-48.362,48.362-126.774,48.362-175.136,0s-48.362-126.774,0-175.136 c10.084-10.084,21.476-18.057,33.627-23.935c-39.798,1.061-79.279,16.774-109.653,47.147c-62.946,62.946-62.946,165.003,0,227.949 s165.003,62.946,227.949,0c30.374-30.374,46.086-69.854,47.147-109.653C409.427,271.341,401.454,282.733,391.37,292.817z"}),a.a.createElement("g",null,a.a.createElement("polygon",{style:{fill:"#FFFFFF"},points:"355.804,153.568 361.513,205.217 367.224,153.568 418.873,147.859 367.224,142.148  361.513,90.499 355.804,142.148 304.154,147.859  "}),a.a.createElement("polygon",{style:{fill:"#FFFFFF"},points:"112.365,410.626 116.455,447.623 120.545,410.626 157.542,406.536 120.545,402.446  116.455,365.449 112.365,402.446 75.368,406.536  "}),a.a.createElement("rect",{x:243.188,y:248.208,transform:"matrix(0.7071 -0.7071 0.7071 0.7071 -106.4278 249.8396)",style:{fill:"#FFFFFF"},width:10.362,height:10.362}),a.a.createElement("rect",{x:418.93,y:193.377,transform:"matrix(0.7071 -0.7071 0.7071 0.7071 -16.1825 358.0481)",style:{fill:"#FFFFFF"},width:10.362,height:10.362}),a.a.createElement("rect",{x:450.017,y:284.419,transform:"matrix(0.7071 -0.7071 0.7071 0.7071 -71.4537 406.696)",style:{fill:"#FFFFFF"},width:10.362,height:10.362}),a.a.createElement("rect",{x:76.067,y:124.535,transform:"matrix(0.7071 -0.7071 0.7071 0.7071 -67.9259 95.4443)",style:{fill:"#FFFFFF"},width:10.362,height:10.362}),a.a.createElement("rect",{x:346.322,y:421.433,transform:"matrix(0.7071 -0.7071 0.7071 0.7071 -198.7088 373.5025)",style:{fill:"#FFFFFF"},width:10.362,height:10.362}),a.a.createElement("rect",{x:117.587,y:97.883,transform:"matrix(0.7071 -0.7071 0.7071 0.7071 -36.9191 116.9972)",style:{fill:"#FFFFFF"},width:10.362,height:10.362})),X,Z,ee,te,ne,re,ae,le,ce,oe,ie,ue,se,fe,de)},me=a.a.forwardRef((function(e,t){return a.a.createElement(he,N({svgRef:t},e))}));n.p;function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var xe=a.a.createElement("rect",{x:240.961,y:21.696,width:30.1,height:82}),ye=a.a.createElement("rect",{x:78.327,y:104.267,transform:"matrix(0.7071 0.7071 -0.7071 0.7071 119.3201 -49.4295)",width:81.999,height:30.1}),be=a.a.createElement("rect",{x:21.703,y:240.956,width:82,height:30.1}),Ee=a.a.createElement("rect",{x:104.276,y:351.684,transform:"matrix(0.7071 0.7071 -0.7071 0.7071 312.6187 30.6383)",width:30.1,height:81.999}),ve=a.a.createElement("rect",{x:240.961,y:408.306,width:30.1,height:82}),Fe=a.a.createElement("rect",{x:351.694,y:377.641,transform:"matrix(0.7071 0.7071 -0.7071 0.7071 392.6914 -162.6601)",width:81.999,height:30.1}),we=a.a.createElement("rect",{x:408.311,y:240.956,width:82,height:30.1}),je=a.a.createElement("rect",{x:377.657,y:78.324,transform:"matrix(0.7071 0.7071 -0.7071 0.7071 199.3955 -242.7367)",width:30.1,height:81.999}),Oe=a.a.createElement("g",null),ke=a.a.createElement("g",null),Se=a.a.createElement("g",null),De=a.a.createElement("g",null),Ce=a.a.createElement("g",null),Te=a.a.createElement("g",null),_e=a.a.createElement("g",null),Be=a.a.createElement("g",null),Me=a.a.createElement("g",null),Pe=a.a.createElement("g",null),Re=a.a.createElement("g",null),ze=a.a.createElement("g",null),Ie=a.a.createElement("g",null),Ae=a.a.createElement("g",null),Ke=a.a.createElement("g",null),Ge=function(e){var t=e.svgRef,n=e.title,r=pe(e,["svgRef","title"]);return a.a.createElement("svg",ge({id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512.006 512.006",style:{enableBackground:"new 0 0 512.006 512.006"},xmlSpace:"preserve",ref:t},r),n?a.a.createElement("title",null,n):null,xe,ye,be,Ee,ve,Fe,we,je,a.a.createElement("rect",{x:240.961,y:21.696,style:{fill:"#FF4F19"},width:30.1,height:82}),a.a.createElement("g",null,a.a.createElement("rect",{x:78.327,y:104.267,transform:"matrix(0.7071 0.7071 -0.7071 0.7071 119.3201 -49.4295)",style:{fill:"#FF9575"},width:81.999,height:30.1}),a.a.createElement("rect",{x:21.703,y:240.956,style:{fill:"#FF9575"},width:82,height:30.1}),a.a.createElement("rect",{x:104.276,y:351.684,transform:"matrix(0.7071 0.7071 -0.7071 0.7071 312.6187 30.6383)",style:{fill:"#FF9575"},width:30.1,height:81.999})),a.a.createElement("g",null,a.a.createElement("rect",{x:240.961,y:408.306,style:{fill:"#FF4F19"},width:30.1,height:82}),a.a.createElement("rect",{x:351.694,y:377.641,transform:"matrix(0.7071 0.7071 -0.7071 0.7071 392.6914 -162.6601)",style:{fill:"#FF4F19"},width:81.999,height:30.1}),a.a.createElement("rect",{x:408.311,y:240.956,style:{fill:"#FF4F19"},width:82,height:30.1}),a.a.createElement("rect",{x:377.657,y:78.324,transform:"matrix(0.7071 0.7071 -0.7071 0.7071 199.3955 -242.7367)",style:{fill:"#FF4F19"},width:30.1,height:81.999})),a.a.createElement("g",null,a.a.createElement("rect",{x:133.796,y:17.798,transform:"matrix(0.3893 0.9211 -0.9211 0.3893 129.0107 -128.89)",style:{fill:"#FFE97F"},width:55.823,height:30.1}),a.a.createElement("rect",{x:3.616,y:149.85,transform:"matrix(0.9266 0.3761 -0.3761 0.9266 64.3327 0.249)",style:{fill:"#FFE97F"},width:55.826,height:30.101}),a.a.createElement("rect",{x:17.816,y:322.408,transform:"matrix(0.3893 0.9211 -0.9211 0.3893 342.7538 183.6659)",style:{fill:"#FFE97F"},width:30.1,height:55.823}),a.a.createElement("rect",{x:149.847,y:452.569,transform:"matrix(0.9266 0.3761 -0.3761 0.9266 192.8123 -26.7408)",style:{fill:"#FFE97F"},width:30.101,height:55.826})),a.a.createElement("g",null,a.a.createElement("rect",{x:322.426,y:464.113,transform:"matrix(0.3893 0.9211 -0.9211 0.3893 655.3109 -30.0768)",style:{fill:"#FFDB2D"},width:55.823,height:30.1}),a.a.createElement("rect",{x:452.565,y:332.074,transform:"matrix(0.9266 0.3761 -0.3761 0.9266 165.8267 -155.2189)",style:{fill:"#FFDB2D"},width:55.826,height:30.101}),a.a.createElement("rect",{x:464.148,y:133.779,transform:"matrix(0.3893 0.9211 -0.9211 0.3893 441.5789 -342.6494)",style:{fill:"#FFDB2D"},width:30.1,height:55.823}),a.a.createElement("rect",{x:332.055,y:3.611,transform:"matrix(0.9266 0.3761 -0.3761 0.9266 37.3397 -128.2294)",style:{fill:"#FFDB2D"},width:30.101,height:55.826})),a.a.createElement("path",{style:{fill:"#FFD699"},d:"M256.011,411.64c-85.818,0-155.635-69.817-155.635-155.635S170.193,100.37,256.011,100.37 s155.635,69.817,155.635,155.635S341.829,411.64,256.011,411.64z"}),a.a.createElement("path",{style:{fill:"#FFC266"},d:"M256.011,100.369c85.818,0,155.635,69.817,155.635,155.635S341.829,411.64,256.011,411.64"}),a.a.createElement("path",{style:{fill:"#FFE97F"},d:"M256.011,381.539c-69.219,0-125.534-56.315-125.534-125.534s56.315-125.534,125.534-125.534 s125.534,56.315,125.534,125.534S325.23,381.539,256.011,381.539z"}),a.a.createElement("path",{style:{fill:"#FFDB2D"},d:"M256.011,130.47c69.219,0,125.534,56.315,125.534,125.534S325.23,381.539,256.011,381.539"}),Oe,ke,Se,De,Ce,Te,_e,Be,Me,Pe,Re,ze,Ie,Ae,Ke)},Ue=a.a.forwardRef((function(e,t){return a.a.createElement(Ge,ge({svgRef:t},e))}));n.p;function qe(){var e=Object(o.a)(["\n  background: ",";\n  border: 2px solid ",";\n  border-radius: 30px;\n  cursor: pointer;\n  display: flex;\n  font-size: 0.5rem;\n  justify-content: space-between;\n  margin: 0 auto;\n  overflow: hidden;\n  padding: 0.5rem;\n  position: relative;\n  width: 8rem;\n  height: 4rem;\n\n  &:focus {\n      outline: none;\n  }\n\n  svg {\n    height: auto;\n    width: 2.5rem;\n    transition: all 0.3s linear;\n    \n    // sun icon\n    &:first-child {\n      transform: ",";\n    }\n    \n    // moon icon\n    &:nth-child(2) {\n      transform: ",";\n    }\n  }\n"]);return qe=function(){return e},e}var Ye=i.b.button(qe(),(function(e){return e.theme.colors.gradient}),(function(e){return e.theme.colors.toggleBorder}),(function(e){return e.lightTheme?"translateY(0)":"translateY(100px)"}),(function(e){return e.lightTheme?"translateY(-100px)":"translateY(0)"})),Je=function(e){var t=e.isDark,n=e.toggleIsDark,r=!t;return a.a.createElement(Ye,{onClick:n,lightTheme:r},a.a.createElement(Ue,null),a.a.createElement(me,null))};function Le(){var e=Object(o.a)(["\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return Le=function(){return e},e}function Ve(){var e=Object(o.a)(["\n    width: 100%;\n    height: 60px;\n"]);return Ve=function(){return e},e}function We(){var e=Object(o.a)(["\n    width: 300px;\n    min-height: 400px;\n    background-color: ",";\n    border-radius: 4px;\n    padding: 16px 0 16px 0;\n    border: 1px solid ","\n"]);return We=function(){return e},e}var $e=i.b.div(We(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.border_dark})),He=i.b.div(Ve()),Ne=i.b.div(Le()),Qe=function(e){var t=Object(r.useState)(""),n=Object(v.a)(t,2),l=n[0],c=n[1],o=Object(r.useState)(!1),i=Object(v.a)(o,2),u=i[0],s=i[1],f=Object(r.useState)([]),d=Object(v.a)(f,2),h=d[0],m=d[1],g=Object(r.useState)(!0),p=Object(v.a)(g,2),y=p[0],b=p[1];Object(r.useEffect)((function(){x(l).then((function(e){m(e),b(!1),console.log(e)})),c("")}),[u]);return a.a.createElement($e,null,a.a.createElement(He,null,a.a.createElement(Ne,null,a.a.createElement(q,{onChange:function(e){c(e)},onKeyPress:function(t){console.log(t.key),"Enter"===t.key&&(s(!u),e.updateContextSearchTerm(l))},value:l}))),y||null===h?a.a.createElement(H,null):a.a.createElement(M,{stats:h,searchTerm:e.searchTerm}),a.a.createElement(Je,{isDark:e.isDark,toggleIsDark:e.toggleIsDark}))};function Xe(){var e=Object(o.a)(["\n    width: 85px;\n    height: 85px;\n"]);return Xe=function(){return e},e}function Ze(){var e=Object(o.a)(["\n    color: rgb(79,188,255);\n    font-size: 12px;\n    padding: 4px 4px 4px 4px;\n"]);return Ze=function(){return e},e}function et(){var e=Object(o.a)(["\n    color: ",";\n    font-size: 14px;\n    padding: 4px 4px 4px 4px;\n"]);return et=function(){return e},e}function tt(){var e=Object(o.a)(["\n    color: ",";\n    font-size: 18px;\n    padding: 4px 4px 4px 4px;\n"]);return tt=function(){return e},e}function nt(){var e=Object(o.a)(["\n    color: ",";\n    font-size: 12px;\n    padding: 4px 4px 4px 4px;\n"]);return nt=function(){return e},e}function rt(){var e=Object(o.a)(["\n    width: 100px;\n    padding: 10px 10px 10px 10px;\n"]);return rt=function(){return e},e}function at(){var e=Object(o.a)(["\n    width: calc(100% - 100px);\n\n"]);return at=function(){return e},e}function lt(){var e=Object(o.a)(["\n    height: 100%;\n    width: calc(100% - 25px);\n    background-color: ",";\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n"]);return lt=function(){return e},e}function ct(){var e=Object(o.a)(["\n    \n    height: 100%;\n    width: 25px;\n"]);return ct=function(){return e},e}function ot(){var e=Object(o.a)(["\n    height: 250px;\n    width: 100%;\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    border-radius: 4px;\n    margin: 16px 0px 16px 0px;\n"]);return ot=function(){return e},e}var it=i.b.div(ot(),(function(e){return e.theme.colors.article_background})),ut=i.b.div(ct()),st=i.b.div(lt(),(function(e){return e.theme.colors.primary})),ft=i.b.div(at()),dt=i.b.div(rt()),ht=i.b.h3(nt(),(function(e){return e.theme.colors.text_ternary})),mt=i.b.h1(tt(),(function(e){return e.theme.colors.text_secondary})),gt=i.b.p(et(),(function(e){return e.theme.colors.text_ternary})),pt=i.b.a(Ze()),xt=i.b.img(Xe()),yt=function(e){var t=Object(r.createRef)(),n=Object(r.createRef)();return Object(r.useEffect)((function(){console.log(n),console.log(t.current.height)})),a.a.createElement(it,null,a.a.createElement(ut,null),a.a.createElement(st,null,a.a.createElement(ft,null,a.a.createElement(ht,null,"Author: ",e.author),a.a.createElement(mt,{ref:n},e.title.length>80?m(e.title,80):e.title),a.a.createElement(gt,null,null!==e.description&&e.description.length>50?m(e.description,80):e.description),a.a.createElement(pt,{href:e.url},m(e.url,30))),a.a.createElement(dt,null,a.a.createElement(xt,{ref:t,src:e.imageUrl,alt:"image for ".concat(e.title)}))))};function bt(){var e=Object(o.a)(["\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    padding: 16px 0 16px 0;\n"]);return bt=function(){return e},e}var Et=i.b.div(bt()),vt=function(e){var t=Object(r.useState)([]),n=Object(v.a)(t,2),l=n[0],c=n[1];Object(r.useEffect)((function(){(function(e){var t;return t="Global"!==e?"http://newsapi.org/v2/top-headlines?country=".concat(e,"&q=coronavirus&apiKey=b23cc20188404ec8b852cc86145559e7"):"http://newsapi.org/v2/top-headlines?country=&q=coronavirus&apiKey=b23cc20188404ec8b852cc86145559e7",fetch(p+t)})(e.searchTerm).then((function(e){return e.json()})).then((function(e){return c(e.articles)}))}),[e.searchTerm]),console.log(e.searchTerm),console.log(l);var o=l.map((function(e){return a.a.createElement(yt,{author:e.author,title:e.title,description:e.description,url:e.url,imageUrl:e.urlToImage,key:e.title})}));return a.a.createElement(Et,null,o)};function Ft(){var e=Object(o.a)(["\n    width: 300px;\n    display: flex;\n    flex-direction: column;\n    padding: 16px 0 16px 0;\n"]);return Ft=function(){return e},e}var wt=i.b.div(Ft()),jt=function(){var e=Object(r.useState)([]),t=Object(v.a)(e,2),n=t[0],l=t[1];Object(r.useEffect)((function(){fetch(p+"reddit.com/r/upliftingnews.json").then((function(e){return e.json()})).then((function(e){return l(e.data.children)}))}),[]),console.log(n);var c=n.map((function(e){return a.a.createElement(yt,{author:e.data.author,title:e.data.title,description:e.data.selftext,imageUrl:e.data.thumbnail,url:e.data.url})}));return a.a.createElement(wt,null,c)},Ot={colors:{background:"#ccc",primary:"#fff",secondary:"#fff",color:"rgb(215, 218, 220)",border_dark:"rgb(52, 53, 54)",border:"rgb(215, 218, 220)",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)",article_background:"rgba(230,230,230,0.8)"}},kt={colors:{background:"#1a1a1b",primary:"#2b2b2c",secondary:"#474748",color:"rgb(215, 218, 220)",border_dark:"rgb(52, 53, 54)",border:"rgb(215, 218, 220)",text_primary:"#fff",text_secondary:"rgb(215, 218, 220)",text_ternary:"rgb(129,131,132)",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)",article_background:"rgba(30,30,30,0.6)"}};function St(){var e=Object(o.a)(["\n    width: 100vw;\n    min-height: 100vh;\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 30px 30px 30px 30px;\n"]);return St=function(){return e},e}var Dt=i.b.div(St(),(function(e){return e.theme.colors.background}));var Ct=function(){return a.a.createElement(b,null,a.a.createElement(E,null,(function(e){return a.a.createElement(i.a,{theme:e.darkMode?kt:Ot},a.a.createElement(Dt,null,a.a.createElement(Qe,{searchTerm:e.searchTerm,updateContextSearchTerm:e.updateSearchTerm,isDark:e.darkMode,toggleIsDark:e.toggleDarkMode}),e.darkMode?a.a.createElement(vt,{searchTerm:e.countryCode}):a.a.createElement(jt,null)))})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(Ct,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.08d74960.chunk.js.map