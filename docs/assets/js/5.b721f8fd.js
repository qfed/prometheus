(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{171:function(t,e,a){},177:function(t,e,a){"use strict";var i=a(171);a.n(i).a},186:function(t,e,a){"use strict";a.r(e);a(52);var i={props:{name:String},methods:{toggle:function(){this.isShow=!this.isShow},dragend:function(t){var e=t.clientX,a=t.clientY,i=document.getElementsByClassName("dragable-mobile")[0];i.style.left=e+"px",i.style.top=a+"px",t.stopPropagation()}},data:function(){return{isShow:!0}},computed:{url:function(){return this.name?" https://qfed.github.io/prometheus/react-demo/".concat(this.name,"/").concat(this.name,".html"):" https://qfed.github.io/prometheus/react-demo/"}}},s=(a(177),a(0)),n=Object(s.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"dragable-mobile",attrs:{draggable:"true"},on:{dragend:this.dragend}},[e("div",{staticClass:"dragable-mobile__header",on:{click:this.toggle}},[this._v("\n    拖拽移动|点击折叠\n  ")]),this._v(" "),e("iframe",{class:{"dragable-mobile__body":!0,"dragable-mobile__body--active":this.isShow},attrs:{src:this.url}})])}),[],!1,null,null,null);e.default=n.exports}}]);