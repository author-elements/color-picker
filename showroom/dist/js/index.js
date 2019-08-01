/**
 * author-color-picker-showroom v1.0.0 generated on Wed Jul 31 2019.
 * Built at 20:22:44 GMT-0700 (Pacific Daylight Time)
 * Copyright (c) 2019 Author.io
 */
"use strict";var Demo=new NGNX.VIEW.Registry({selector:".demo",namespace:"demo.",references:{swatch:".selected.color",preview:".color.preview",picker:"author-color-picker",target:"author-color-picker .target"},init:function(){var e=this.ref,t=e.picker,r=e.preview,n=e.swatch,a=e.target;window.cp=t.element,t.on("sample",function(e){var t=e.detail,c=t.color,o=t.position;r.style.background=c.rgb,a.element.style.left="".concat(100*o.x.percentage,"%"),a.element.style.top="".concat(100*o.y.percentage,"%")}),t.on("change",function(e){var t=e.detail,c=t.color,o=t.position;n.style.background=c.rgb,a.element.style.left="".concat(100*o.x.percentage,"%"),a.element.style.top="".concat(100*o.y.percentage,"%")})}});