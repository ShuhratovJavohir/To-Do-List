(function(){"use strict";var t={7855:function(t,e,n){var o=n(9242),s=n(3396),l=n.p+"img/edit.97193562.svg";const i={class:"wrapper"},a=(0,s._)("img",{src:l,alt:"edit"},null,-1),r=[a];function d(t,e,n,l,a,d){const c=(0,s.up)("Navbar"),u=(0,s.up)("Notes"),_=(0,s.up)("Model");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s.Wm)(c),(0,s.Wm)(u,{notes:a.notes,onDelNotes:d.delNotes},null,8,["notes","onDelNotes"]),(0,s.wy)((0,s.Wm)(_,{onClose:e[0]||(e[0]=t=>a.isModelShow=!1),onAddNote:d.add,isModelShow:a.isModelShow},null,8,["onAddNote","isModelShow"]),[[o.F8,a.isModelShow]]),a.isModelShow?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("button",{key:0,class:"model-btn",onClick:e[1]||(e[1]=t=>a.isModelShow=!0)},r))])}n(7658);var c=n.p+"img/search.2e7736ef.svg";const u={class:"header"},_=(0,s.uE)('<nav class="header__nav"><button class="header__nav-lang">Ru</button><h1 class="header__nav-title">Заметки</h1><button class="header__nav-search"><img src="'+c+'" alt="search"></button></nav>',1),p=[_];function v(t,e,n,o,l,i){return(0,s.wg)(),(0,s.iD)("header",u,p)}var h={},f=n(89);const w=(0,f.Z)(h,[["render",v]]);var m=w,g=n(7139),b=n.p+"img/list.bf9cd1f8.svg",N=n.p+"img/grid.b4f0109b.svg";const y={class:"notes"},M={class:"container"},x={class:"notes__top"},k=(0,s._)("h2",{class:"notes__top-title"},"Все заметки",-1),C={src:b,alt:"list"},O={src:N,alt:"list"};function S(t,e,n,l,i,a){const r=(0,s.up)("Note");return(0,s.wg)(),(0,s.iD)("div",y,[(0,s._)("div",M,[(0,s._)("div",x,[k,(0,s._)("button",{onClick:e[0]||(e[0]=t=>i.view=!i.view),class:"notes__top-btn"},[(0,s.wy)((0,s._)("img",C,null,512),[[o.F8,i.view]]),(0,s.wy)((0,s._)("img",O,null,512),[[o.F8,!i.view]]),(0,s._)("span",null,(0,g.zw)(i.view?"Список":"Сетка"),1)])]),(0,s._)("div",{class:(0,g.C_)(i.view?"notes__list":"notes__grid")},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.notes,(e=>((0,s.wg)(),(0,s.j4)(r,{key:e.id,note:e,view:i.view,onDelNotes:n=>t.$emit("delNotes",e.id)},null,8,["note","view","onDelNotes"])))),128))],2)])])}var D=n.p+"img/delete.360c3812.svg";const j={class:"note"},Z={class:"note-title"},T={class:"note-data"},z={class:"note-text"},F={class:"note__btns"},$=(0,s._)("button",{class:"note__btns-edit"},[(0,s._)("img",{src:l,alt:""}),(0,s._)("span",null,"РЕДАКТИРОВАТЬ")],-1),A=(0,s._)("img",{src:D,alt:""},null,-1),W=(0,s._)("span",null,"Удалить",-1),B=[A,W];function E(t,e,n,o,l,i){return(0,s.wg)(),(0,s.iD)("div",j,[(0,s._)("div",{class:(0,g.C_)(n.view?"note__list":"note__grid")},[(0,s._)("h2",Z,(0,g.zw)(n.note.title),1),(0,s._)("p",T,(0,g.zw)(n.note.date),1)],2),(0,s._)("p",z,(0,g.zw)(n.note.text),1),(0,s._)("div",F,[$,(0,s._)("button",{class:"note__btns-delete",onClick:e[0]||(e[0]=e=>t.$emit("delNotes",n.note.id))},B)])])}var J={props:{note:{typeof:Object},view:{typeof:Boolean}},data(){return{}}};const P=(0,f.Z)(J,[["render",E]]);var U=P,V={props:{notes:{typeof:Array}},data(){return{view:!0}},components:{Note:U}};const q=(0,f.Z)(V,[["render",S]]);var H=q;const I=(0,s._)("h2",{class:"model-title"},"Добавить заметку",-1),K={class:"model__inputs"},L={class:"model__inputs_input"},R=(0,s._)("p",{class:"model__inputs_input-title"},"Title",-1),Y={class:"model__inputs_input"},G=(0,s._)("p",{class:"model__inputs_input-title"},"Content",-1),Q={class:"model__btns"};function X(t,e,n,l,i,a){return(0,s.wg)(),(0,s.j4)(o.uT,{name:"model"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:"model",onClick:e[5]||(e[5]=(...t)=>a.closeModel&&a.closeModel(...t))},[(0,s._)("div",{class:"model__content",onClick:e[4]||(e[4]=(0,o.iM)((()=>{}),["stop"]))},[I,(0,s._)("div",K,[(0,s._)("div",L,[R,(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>i.title=t),class:"model__inputs_input-input",type:"text",placeholder:"Tile"},null,512),[[o.nr,i.title]])]),(0,s._)("div",Y,[G,(0,s.wy)((0,s._)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>i.text=t),class:"model__inputs_input-input",type:"text",placeholder:"Content"},null,512),[[o.nr,i.text]])])]),(0,s._)("div",Q,[(0,s._)("button",{onClick:e[2]||(e[2]=(...t)=>a.closeModel&&a.closeModel(...t)),class:"model__btns-btn cancel"},"Отменить"),(0,s._)("button",{onClick:e[3]||(e[3]=(...t)=>a.addNote&&a.addNote(...t)),class:"model__btns-btn add"},"Добавить")])])])])),_:1})}var tt=n(3029),et={props:{isModelShow:{typeof:Boolean}},data(){return{title:"",text:""}},methods:{closeModel(){this.$emit("close"),this.title=this.text=""},addNote(){if(""!=this.title&&""!=this.text){const t={id:(0,tt.Z)(),title:this.title,text:this.text,date:(new Date).toLocaleDateString()};this.$emit("addNote",t),this.closeModel()}}}};const nt=(0,f.Z)(et,[["render",X]]);var ot=nt,st={components:{Navbar:m,Notes:H,Model:ot},data(){return{isModelShow:!1,notes:[]}},mounted(){this.getNotes()},methods:{add(t){this.notes.push(t)},getNotes(){let t=localStorage.notes;t&&(this.notes=JSON.parse(t))},delNotes(t){let e=this.notes.findIndex((e=>e.id==t));this.notes.splice(e,1)}},watch:{notes:{handler(){localStorage.notes=JSON.stringify(this.notes)},deep:!0}}};const lt=(0,f.Z)(st,[["render",d]]);var it=lt;(0,o.ri)(it).mount("#app")}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var l=e[o]={exports:{}};return t[o].call(l.exports,l,l.exports,n),l.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,l){if(!o){var i=1/0;for(c=0;c<t.length;c++){o=t[c][0],s=t[c][1],l=t[c][2];for(var a=!0,r=0;r<o.length;r++)(!1&l||i>=l)&&Object.keys(n.O).every((function(t){return n.O[t](o[r])}))?o.splice(r--,1):(a=!1,l<i&&(i=l));if(a){t.splice(c--,1);var d=s();void 0!==d&&(e=d)}}return e}l=l||0;for(var c=t.length;c>0&&t[c-1][2]>l;c--)t[c]=t[c-1];t[c]=[o,s,l]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/to-do-list/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,l,i=o[0],a=o[1],r=o[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(r)var c=r(n)}for(e&&e(o);d<i.length;d++)l=i[d],n.o(t,l)&&t[l]&&t[l][0](),t[l]=0;return n.O(c)},o=self["webpackChunkto_do_list"]=self["webpackChunkto_do_list"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7855)}));o=n.O(o)})();
//# sourceMappingURL=app.6fff3a4d.js.map