(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},351:function(e,t,n){},352:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(45),o=n.n(i),l=(n(103),n(89)),c=n(90),s=n(97),u=n(96),g=(n(104),{particles:{number:{value:30,density:{enable:!0,value_area:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"}}}}),m=n(91),d=n.n(m),p=(n(105),function(e){var t=e.route,n=e.changeRoute;return r.a.createElement("header",null,r.a.createElement("div",{className:"logoBox"},r.a.createElement("img",{src:d.a,height:"40px",alt:"logo"}),r.a.createElement("p",null,"SmartBrain")),r.a.createElement("nav",null,"logged"===t&&r.a.createElement("p",{onClick:function(){return n("signin")}},"Sign out"),"signin"===t&&r.a.createElement("p",{onClick:function(){return n("register")}},"Register"),"register"===t&&r.a.createElement("p",{onClick:function(){return n("signin")}},"Sign in")))}),h=(n(106),function(e){var t=e.onInputChange,n=e.onSubmit;return r.a.createElement("div",{className:"imageLinkForm margin-lad"},r.a.createElement("p",null,"This Magic Brain will detect faces in your pictures. Git it a try!"),r.a.createElement("div",{className:"formBox"},r.a.createElement("input",{className:"formInput",type:"text",placeholder:"Insert the link of your image",onChange:t}),r.a.createElement("button",{className:"formButton",onClick:n},"Detect")))}),f=(n(107),function(){return r.a.createElement("div",{className:"textBox"},r.a.createElement("div",{className:"userText"},r.a.createElement("p",null,r.a.createElement("span",null,"Gast\xf3n"),", your current rank is .. ",r.a.createElement("span",null,"#",5,"!"))))}),E=n(92),v=n.n(E),b=n(93),w=n.n(b),x=(n(108),function(e){var t=e.inputUrl,n=e.boxes,a=e.loading,i=e.errFetch,o=0,l=n.map((function(e){return r.a.createElement("div",{key:o++,className:"bounding-box",style:{top:e.topRow,bottom:e.bottomRow,left:e.leftCol,right:e.rightCol}})}));return r.a.createElement("div",null,r.a.createElement(v.a,{className:"Tilt tilt-img",options:{max:5},style:{width:"85%"}},r.a.createElement("div",{className:"Tilt-inner"},r.a.createElement("div",{className:"imgBox "},a&&r.a.createElement("div",{className:"loadingBox"},r.a.createElement("img",{className:"loadingSvg",width:"100px",src:w.a,alt:"loading"})),i?r.a.createElement("h2",{className:"textError"},"The URL is wrong.. Try again!"):r.a.createElement("div",null,r.a.createElement("img",{id:"inputImg",className:"img",src:t,alt:""}),l)))))}),y=n(94),R=n.n(y),N=n(95),B=n.n(N);n(351);var S=function(e){var t=e.changeRoute;return r.a.createElement("div",{className:"loggin"},r.a.createElement("div",{className:"logginBox"},r.a.createElement("h2",null,"Sign in"),r.a.createElement("input",{placeholder:"Username",type:"text",required:!0,autoFocus:!0,id:"logginSignUsername",name:"logginSignUsername"}),r.a.createElement("input",{placeholder:"Password",type:"password",required:!0,id:"logginSignPassword",name:"logginSignPassword"}),r.a.createElement("button",{onClick:function(){return t("logged")}},"Sign in"),r.a.createElement("p",{className:"logginRegister",onClick:function(){return t("register")}},"Register")))};var F=function(e){var t=e.changeRoute;return r.a.createElement("div",{className:"loggin"},r.a.createElement("div",{className:"logginBox"},r.a.createElement("h2",null,"Register"),r.a.createElement("input",{placeholder:"Name",type:"text",required:!0,autoFocus:!0,id:"logginRegisterName",name:"logginRegisterName"}),r.a.createElement("input",{placeholder:"Username",type:"text",required:!0,autoFocus:!0,id:"logginRegisterUsername",name:"logginRegisterUsername"}),r.a.createElement("input",{placeholder:"E-mail",type:"email",required:!0,autoFocus:!0,id:"logginRegisterEmail",name:"logginRegisterEmail"}),r.a.createElement("input",{placeholder:"Password",type:"password",required:!0,id:"logginRegisterPassword",name:"logginRegisterPassword"}),r.a.createElement("input",{placeholder:"Password again",type:"password",required:!0,id:"logginRegisterPasswordAgain",name:"logginRegisterPasswordAgain"}),r.a.createElement("button",{onClick:function(){return t("logged")}},"Register"),r.a.createElement("p",{className:"logginRegister",onClick:function(){return t("signin")}},"Sign in")))},k=new B.a.App({apiKey:"946131969c6c4d0388f1216e9b25374f"}),C=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).calculateFaceLocation=function(e){var t=e,n=document.getElementById("inputImg"),a=Number(n.width),r=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*r,rightCol:a-t.right_col*a,bottomRow:r-t.bottom_row*r}},a.getArrayOfBoxs=function(e){for(var t=e.outputs[0].data.regions,n=[],r=0;r<t.length;r++){var i=t[r].region_info.bounding_box;n.push(a.calculateFaceLocation(i))}return n},a.displayFaceBox=function(e){a.setState({boxes:e})},a.onInputChange=function(e){a.setState({input:e.target.value})},a.reviewErrFetch=function(e){a.setState({errFetch:e})},a.isLoading=function(e){a.setState({loading:e})},a.cleanBoundingBox=function(e){var t=document.querySelectorAll(".bounding-box");if(e){if(t.length>0)for(var n=0;n<t.length;n++)t[n].style.display="none"}else if(t.length>0)for(var a=0;a<t.length;a++)t[a].style.display="block"},a.onSubmit=function(){a.cleanBoundingBox(!0),a.isLoading(!0),a.reviewErrFetch(!1),a.setState({imageUrl:a.state.input}),k.models.predict("a403429f2ddf4b49b307e318f00e528b",a.state.input).then((function(e){return a.isLoading(!1),a.reviewErrFetch(!1),a.cleanBoundingBox(!1),a.displayFaceBox(a.getArrayOfBoxs(e))})).catch((function(e){a.cleanBoundingBox(!0),a.reviewErrFetch(!0),a.isLoading(!1),console.log(e)})),document.querySelector(".formInput").value=""},a.changeRoute=function(e){a.setState({route:e})},a.state={input:"",imageUrl:"",loading:!1,boxes:[],route:"signin",errFetch:!1},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state,t=e.route,n=e.imageUrl,a=e.errFetch,i=e.boxes,o=e.loading,l=this.changeRoute,c=this.onInputChange,s=this.onSubmit;return r.a.createElement("div",{className:"App"},r.a.createElement(R.a,{className:"particles",params:g}),r.a.createElement(p,{route:t,changeRoute:l}),("signin"===t||"signout"===t)&&r.a.createElement(S,{changeRoute:l}),"register"===t&&r.a.createElement(F,{changeRoute:l}),"logged"===t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(h,{onInputChange:c,onSubmit:s}),r.a.createElement(x,{inputUrl:n,errFetch:a,boxes:i,loading:o})))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,n){e.exports=n.p+"static/media/brain.8ce6e398.svg"},93:function(e,t,n){e.exports=n.p+"static/media/loading.0def894e.svg"},98:function(e,t,n){e.exports=n(352)}},[[98,1,2]]]);
//# sourceMappingURL=main.8c1d6127.chunk.js.map