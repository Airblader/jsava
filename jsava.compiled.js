/** qooxdoo v3.0 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
(function(){ 

if (!this.window) window = this;

if (!window.navigator) window.navigator = {
  userAgent: "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_4; de-de) AppleWebKit/533.17.8 (KHTML, like Gecko) Version/5.0.1 Safari/533.17.8", 
  product: "", 
  cpuClass: ""
}; 

if (!window.qx) window.qx = {};

if (!window.qxvariants) qxvariants = {};
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.aspects":false,"qx.debug":false,"qx.debug.databinding":false,"qx.debug.dispose":false,"qx.globalErrorHandling":false,"qx.optimization.basecalls":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.variants":true,"qx.optimization.whitespace":true};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

qx.$$packageData = {};
qx.$$loader = {};
})();

/** qooxdoo v3.0 | (c) 2013 1&1 Internet AG, http://1und1.de | http://qooxdoo.org/license */
qx.$$packageData['0']={"locales":{},"resources":{},"translations":{"C":{}}};
(function(){var b=".prototype",c="function",d="Boolean",e="Error",f="Object.keys requires an object as argument.",g="constructor",h="warn",j="default",k="hasOwnProperty",m="string",n="Object",o="toLocaleString",p="error",q="toString",r="qx.debug",s="()",t="RegExp",u="String",v="info",w="BROKEN_IE",x="isPrototypeOf",y="Date",z="",A="qx.Bootstrap",B="Function",C="]",D="Class",E="Array",F="[Class ",G="valueOf",H="Number",I="debug",J="ES5",K=".",L="propertyIsEnumerable",M="object";if(!window.qx){window.qx={};}
;qx.Bootstrap={genericToString:function(){return F+this.classname+C;}
,createNamespace:function(name,N){var Q=name.split(K);var P=Q[0];var parent=this.__a&&this.__a[P]?this.__a:window;for(var i=0,O=Q.length-1;i<O;i++ ,P=Q[i]){if(!parent[P]){parent=parent[P]={};}
else {parent=parent[P];}
;}
;parent[P]=N;return P;}
,setDisplayName:function(S,R,name){S.displayName=R+K+name+s;}
,setDisplayNames:function(U,T){for(var name in U){var V=U[name];if(V instanceof Function){V.displayName=T+K+name+s;}
;}
;}
,base:function(W,X){{}
;if(arguments.length===1){return W.callee.base.call(this);}
else {return W.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}
;}
,define:function(name,bj){if(!bj){var bj={statics:{}};}
;var bf;var bb=null;qx.Bootstrap.setDisplayNames(bj.statics,name);if(bj.members||bj.extend){qx.Bootstrap.setDisplayNames(bj.members,name+b);bf=bj.construct||new Function;if(bj.extend){this.extendClass(bf,bf,bj.extend,name,bd);}
;var ba=bj.statics||{};for(var i=0,bc=qx.Bootstrap.keys(ba),l=bc.length;i<l;i++ ){var Y=bc[i];bf[Y]=ba[Y];}
;bb=bf.prototype;bb.base=qx.Bootstrap.base;var bh=bj.members||{};var Y,bg;for(var i=0,bc=qx.Bootstrap.keys(bh),l=bc.length;i<l;i++ ){Y=bc[i];bg=bh[Y];if(bg instanceof Function&&bb[Y]){bg.base=bb[Y];}
;bb[Y]=bg;}
;}
else {bf=bj.statics||{};if(qx.Bootstrap.$$registry&&qx.Bootstrap.$$registry[name]){var bi=qx.Bootstrap.$$registry[name];if(this.keys(bf).length!==0){if(bj.defer){bj.defer(bf,bb);}
;for(var be in bf){bi[be]=bf[be];}
;return;}
;}
;}
;bf.$$type=D;if(!bf.hasOwnProperty(q)){bf.toString=this.genericToString;}
;var bd=name?this.createNamespace(name,bf):z;bf.name=bf.classname=name;bf.basename=bd;if(bj.defer){bj.defer(bf,bb);}
;qx.Bootstrap.$$registry[name]=bf;return bf;}
};qx.Bootstrap.define(A,{statics:{__a:null,LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var bk=true;if(qx.$$environment&&qx.$$environment[r]===false){bk=false;}
;return bk;}
)(),getEnvironmentSetting:function(bl){if(qx.$$environment){return qx.$$environment[bl];}
;}
,setEnvironmentSetting:function(bm,bn){if(!qx.$$environment){qx.$$environment={};}
;if(qx.$$environment[bm]===undefined){qx.$$environment[bm]=bn;}
;}
,createNamespace:qx.Bootstrap.createNamespace,setRoot:function(bo){this.__a=bo;}
,base:qx.Bootstrap.base,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(clazz,construct,superClass,name,basename){var superproto=superClass.prototype;var helper=new Function();helper.prototype=superproto;var proto=new helper();clazz.prototype=proto;proto.name=proto.classname=name;proto.basename=basename;construct.base=superClass;clazz.superclass=superClass;construct.self=clazz.constructor=proto.constructor=clazz;}
,getByName:function(name){return qx.Bootstrap.$$registry[name];}
,$$registry:{},objectGetLength:function(bp){return qx.Bootstrap.keys(bp).length;}
,objectMergeWith:function(br,bq,bt){if(bt===undefined){bt=true;}
;for(var bs in bq){if(bt||br[bs]===undefined){br[bs]=bq[bs];}
;}
;return br;}
,__b:[x,k,o,q,G,L,g],keys:({"ES5":Object.keys,"BROKEN_IE":function(bu){if(bu===null||(typeof bu!=M&&typeof bu!=c)){throw new TypeError(f);}
;var bv=[];var bx=Object.prototype.hasOwnProperty;for(var by in bu){if(bx.call(bu,by)){bv.push(by);}
;}
;var bw=qx.Bootstrap.__b;for(var i=0,a=bw,l=a.length;i<l;i++ ){if(bx.call(bu,a[i])){bv.push(a[i]);}
;}
;return bv;}
,"default":function(bz){if(bz===null||(typeof bz!=M&&typeof bz!=c)){throw new TypeError(f);}
;var bA=[];var bB=Object.prototype.hasOwnProperty;for(var bC in bz){if(bB.call(bz,bC)){bA.push(bC);}
;}
;return bA;}
})[typeof (Object.keys)==c?J:(function(){for(var bD in {toString:1}){return bD;}
;}
)()!==q?w:j],__c:{"[object String]":u,"[object Array]":E,"[object Object]":n,"[object RegExp]":t,"[object Number]":H,"[object Boolean]":d,"[object Date]":y,"[object Function]":B,"[object Error]":e},bind:function(bF,self,bG){var bE=Array.prototype.slice.call(arguments,2,arguments.length);return function(){var bH=Array.prototype.slice.call(arguments,0,arguments.length);return bF.apply(self,bE.concat(bH));}
;}
,firstUp:function(bI){return bI.charAt(0).toUpperCase()+bI.substr(1);}
,firstLow:function(bJ){return bJ.charAt(0).toLowerCase()+bJ.substr(1);}
,getClass:function(bL){var bK=Object.prototype.toString.call(bL);return (qx.Bootstrap.__c[bK]||bK.slice(8,-1));}
,isString:function(bM){return (bM!==null&&(typeof bM===m||qx.Bootstrap.getClass(bM)==u||bM instanceof String||(!!bM&&!!bM.$$isString)));}
,isArray:function(bN){return (bN!==null&&(bN instanceof Array||(bN&&qx.data&&qx.data.IListData&&qx.util.OOUtil.hasInterface(bN.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bN)==E||(!!bN&&!!bN.$$isArray)));}
,isObject:function(bO){return (bO!==undefined&&bO!==null&&qx.Bootstrap.getClass(bO)==n);}
,isFunction:function(bP){return qx.Bootstrap.getClass(bP)==B;}
,$$logs:[],debug:function(bR,bQ){qx.Bootstrap.$$logs.push([I,arguments]);}
,info:function(bT,bS){qx.Bootstrap.$$logs.push([v,arguments]);}
,warn:function(bV,bU){qx.Bootstrap.$$logs.push([h,arguments]);}
,error:function(bX,bW){qx.Bootstrap.$$logs.push([p,arguments]);}
,trace:function(bY){}
}});}
)();
(function(){var a="qx.util.OOUtil";qx.Bootstrap.define(a,{statics:{classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;}
,getPropertyDefinition:function(b,name){while(b){if(b.$$properties&&b.$$properties[name]){return b.$$properties[name];}
;b=b.superclass;}
;return null;}
,hasProperty:function(c,name){return !!qx.util.OOUtil.getPropertyDefinition(c,name);}
,getEventType:function(d,name){var d=d.constructor;while(d.superclass){if(d.$$events&&d.$$events[name]!==undefined){return d.$$events[name];}
;d=d.superclass;}
;return null;}
,supportsEvent:function(e,name){return !!qx.util.OOUtil.getEventType(e,name);}
,getByInterface:function(h,f){var g,i,l;while(h){if(h.$$implements){g=h.$$flatImplements;for(i=0,l=g.length;i<l;i++ ){if(g[i]===f){return h;}
;}
;}
;h=h.superclass;}
;return null;}
,hasInterface:function(k,j){return !!qx.util.OOUtil.getByInterface(k,j);}
,getMixins:function(n){var m=[];while(n){if(n.$$includes){m.push.apply(m,n.$$flatIncludes);}
;n=n.superclass;}
;return m;}
}});}
)();
(function(){var a="qx.bom.client.Xml.getSelectSingleNode",b="qx.bom.client.Stylesheet.getInsertRule",c="qx.bom.client.Html.getDataset",d="qx.bom.client.PhoneGap.getPhoneGap",e="qx.bom.client.EcmaScript.getArrayReduce",f="qx.core.Environment for a list of predefined keys.",g='] found, and no default ("default") given',h="qx.bom.client.Html.getAudioAif",j="qx.bom.client.CssTransform.get3D",k="qx.bom.client.EcmaScript.getArrayLastIndexOf",l=" is not a valid key. Please see the API-doc of ",m=' type)',n="qx.bom.client.EcmaScript.getArrayForEach",o="qx.bom.client.Xml.getAttributeNS",p="qx.bom.client.Stylesheet.getRemoveImport",q="qx.bom.client.Css.getUserModify",r="qx.bom.client.Css.getBoxShadow",s="qx.bom.client.Html.getXul",t="qx.bom.client.Plugin.getWindowsMedia",u=":",v="qx.blankpage",w="qx.bom.client.Html.getVideo",x="qx.bom.client.Device.getName",y="qx.bom.client.Event.getTouch",z="qx.optimization.strings",A="qx.debug.property.level",B="qx.bom.client.EcmaScript.getArrayFilter",C="qx.bom.client.EcmaScript.getStringTrim",D="qx.optimization.variables",E="qx.bom.client.EcmaScript.getStackTrace",F="qx.bom.client.EcmaScript.getDateNow",G="qx.bom.client.EcmaScript.getArrayEvery",H="qx.bom.client.Xml.getImplementation",I="qx.bom.client.Html.getConsole",J="qx.bom.client.Engine.getVersion",K="qx.bom.client.Device.getType",L="qx.bom.client.Plugin.getQuicktime",M="qx.bom.client.Html.getNaturalDimensions",N="qx.bom.client.Xml.getSelectNodes",O="qx.bom.client.Xml.getElementsByTagNameNS",P="qx.nativeScrollBars",Q="qx.bom.client.Html.getDataUrl",R="qx.bom.client.Flash.isAvailable",S="qx.bom.client.Html.getCanvas",T="qx.dyntheme",U="qx.bom.client.Device.getPixelRatio",V="qx.bom.client.Css.getBoxModel",W="qx.bom.client.Plugin.getSilverlight",X="qx/static/blank.html",Y="qx.bom.client.EcmaScript.getArrayMap",ej="qx.bom.client.Css.getUserSelect",ee="qx.bom.client.Css.getRadialGradient",ek="module.property",eg="qx.bom.client.Plugin.getWindowsMediaVersion",eh="qx.bom.client.Stylesheet.getCreateStyleSheet",ed='No match for variant "',ei="qx.bom.client.Locale.getLocale",eo="module.events",ep="qx.bom.client.Plugin.getSkype",eq="module.databinding",er="qx.bom.client.Html.getFileReader",el="qx.bom.client.Css.getBorderImage",em="qx.bom.client.Stylesheet.getDeleteRule",ef="qx.bom.client.EcmaScript.getErrorToString",en="qx.bom.client.Plugin.getDivXVersion",ev="qx.bom.client.Scroll.scrollBarOverlayed",eX="qx.bom.client.Plugin.getPdfVersion",ew="qx.bom.client.Xml.getCreateNode",ex="qx.bom.client.Css.getAlphaImageLoaderNeeded",es="qx.bom.client.Css.getLinearGradient",et="qx.bom.client.Transport.getXmlHttpRequest",fY="qx.bom.client.Css.getBorderImageSyntax",eu="qx.bom.client.Html.getClassList",ey="qx.bom.client.Event.getHelp",ez="qx.optimization.comments",eA="qx.bom.client.Locale.getVariant",eF="qx.bom.client.Css.getBoxSizing",eG="qx.bom.client.OperatingSystem.getName",eH="module.logger",eB="qx.mobile.emulatetouch",eC="qx.bom.client.Html.getAudioWav",eD="qx.bom.client.Browser.getName",eE="qx.bom.client.Css.getInlineBlock",eL="qx.bom.client.Plugin.getPdf",eM="please use 'css.pointerevents' instead.",eN="qx.dynlocale",eO="qx.bom.client.Device.getTouch",eI="The environment key 'event.pointer' is deprecated, ",eJ="qx.emulatemouse",ga='" (',eK="qx.bom.client.Html.getAudio",eS="qx.core.Environment",eT="qx.bom.client.EcmaScript.getFunctionBind",ge="qx.bom.client.CssTransform.getSupport",eU="qx.bom.client.Html.getTextContent",eP="qx.bom.client.Css.getPlaceholder",eQ="qx.bom.client.Css.getFloat",gc="default",eR=' in variants [',eV="false",eW="qx.bom.client.Css.getFilterGradient",fj="qx.bom.client.Html.getHistoryState",fi="qxenv",fh="qx.bom.client.Html.getSessionStorage",fn="qx.bom.client.Html.getAudioAu",fm="qx.bom.client.Css.getOpacity",fl="qx.bom.client.Css.getFilterTextShadow",fk="qx.bom.client.Html.getVml",fc="qx.bom.client.Transport.getMaxConcurrentRequestCount",fb="qx.bom.client.Event.getHashChange",fa="qx.bom.client.Css.getRgba",eY="qx.bom.client.Css.getBorderRadius",fg="qx.bom.client.EcmaScript.getArraySome",ff="qx.bom.client.Transport.getSsl",fe="qx.bom.client.Html.getWebWorker",fd="qx.bom.client.Json.getJson",fu="qx.bom.client.Browser.getQuirksMode",ft="qx.debug.dispose",fs="qx.bom.client.Css.getTextOverflow",fr="qx.bom.client.EcmaScript.getArrayIndexOf",fy="qx.bom.client.Xml.getQualifiedItem",fx="qx.bom.client.Html.getVideoOgg",fw="&",fv="qx.bom.client.EcmaScript.getArrayReduceRight",fq="qx.bom.client.Engine.getMsPointer",fp="qx.bom.client.Browser.getDocumentMode",fo="qx.allowUrlVariants",fJ="qx.debug.ui.queue",fI="|",fH="qx.bom.client.Html.getContains",fN="qx.bom.client.Plugin.getActiveX",fM=".",fL="qx.bom.client.Xml.getDomProperties",fK="qx.bom.client.CssAnimation.getSupport",fC="qx.debug.databinding",fB="qx.optimization.basecalls",fA="qx.bom.client.Browser.getVersion",fz="qx.bom.client.Css.getUserSelectNone",fG="true",fF="qx.bom.client.Html.getSvg",fE="qx.bom.client.EcmaScript.getObjectKeys",fD="qx.bom.client.Plugin.getDivX",fT="qx.bom.client.Runtime.getName",fS="qx.bom.client.Html.getLocalStorage",fR="css.pointerevents",fQ="qx.allowUrlSettings",fX="qx.bom.client.Flash.getStrictSecurityModel",fW="qx.aspects",fV="qx.debug",fU="qx.bom.client.Css.getPointerEvents",fP="qx.dynamicmousewheel",fO="qx.bom.client.Html.getAudioMp3",dO="qx.bom.client.Engine.getName",dN="qx.bom.client.Html.getUserDataStorage",gf="qx.bom.client.Plugin.getGears",dL="qx.bom.client.Plugin.getQuicktimeVersion",dM="qx.bom.client.Html.getAudioOgg",dK="event.pointer",gd="qx.bom.client.Css.getTextShadow",dI="qx.bom.client.Plugin.getSilverlightVersion",dJ="qx.bom.client.Html.getCompareDocumentPosition",dH="qx.bom.client.Flash.getExpressInstall",gb="qx.bom.client.Html.getSelection",dF="qx.bom.client.OperatingSystem.getVersion",dG="qx.bom.client.Html.getXPath",dE="qx.bom.client.Html.getGeoLocation",dX="qx.optimization.privates",dY="qx.bom.client.Scroll.getNativeScroll",dV="qx.bom.client.Css.getAppearance",dW="qx.bom.client.CssTransition.getSupport",dT="qx.bom.client.Stylesheet.getAddImport",dU="qx.optimization.variants",dS="qx.bom.client.Html.getVideoWebm",dD="qx.bom.client.Flash.getVersion",dQ="qx.bom.client.CssAnimation.getRequestAnimationFrame",dR="qx.bom.client.Css.getLegacyWebkitGradient",dP="qx.bom.client.PhoneGap.getNotification",ec="qx.bom.client.Html.getVideoH264",ea="qx.bom.client.Xml.getCreateElementNS",eb="qx.bom.client.Xml.getDomParser";qx.Bootstrap.define(eS,{statics:{_checks:{},_asyncChecks:{},__d:{},_checksMap:{"engine.version":J,"engine.name":dO,"browser.name":eD,"browser.version":fA,"browser.documentmode":fp,"browser.quirksmode":fu,"runtime.name":fT,"device.name":x,"device.type":K,"device.pixelRatio":U,"device.touch":eO,"locale":ei,"locale.variant":eA,"os.name":eG,"os.version":dF,"os.scrollBarOverlayed":ev,"plugin.gears":gf,"plugin.activex":fN,"plugin.skype":ep,"plugin.quicktime":L,"plugin.quicktime.version":dL,"plugin.windowsmedia":t,"plugin.windowsmedia.version":eg,"plugin.divx":fD,"plugin.divx.version":en,"plugin.silverlight":W,"plugin.silverlight.version":dI,"plugin.flash":R,"plugin.flash.version":dD,"plugin.flash.express":dH,"plugin.flash.strictsecurity":fX,"plugin.pdf":eL,"plugin.pdf.version":eX,"io.maxrequests":fc,"io.ssl":ff,"io.xhr":et,"event.touch":y,"event.mspointer":fq,"event.help":ey,"event.hashchange":fb,"ecmascript.error.stacktrace":E,"ecmascript.array.indexof":fr,"ecmascript.array.lastindexof":k,"ecmascript.array.foreach":n,"ecmascript.array.filter":B,"ecmascript.array.map":Y,"ecmascript.array.some":fg,"ecmascript.array.every":G,"ecmascript.array.reduce":e,"ecmascript.array.reduceright":fv,"ecmascript.function.bind":eT,"ecmascript.object.keys":fE,"ecmascript.date.now":F,"ecmascript.error.toString":ef,"ecmascript.string.trim":C,"html.webworker":fe,"html.filereader":er,"html.geolocation":dE,"html.audio":eK,"html.audio.ogg":dM,"html.audio.mp3":fO,"html.audio.wav":eC,"html.audio.au":fn,"html.audio.aif":h,"html.video":w,"html.video.ogg":fx,"html.video.h264":ec,"html.video.webm":dS,"html.storage.local":fS,"html.storage.session":fh,"html.storage.userdata":dN,"html.classlist":eu,"html.xpath":dG,"html.xul":s,"html.canvas":S,"html.svg":fF,"html.vml":fk,"html.dataset":c,"html.dataurl":Q,"html.console":I,"html.stylesheet.createstylesheet":eh,"html.stylesheet.insertrule":b,"html.stylesheet.deleterule":em,"html.stylesheet.addimport":dT,"html.stylesheet.removeimport":p,"html.element.contains":fH,"html.element.compareDocumentPosition":dJ,"html.element.textcontent":eU,"html.image.naturaldimensions":M,"html.history.state":fj,"html.selection":gb,"json":fd,"css.textoverflow":fs,"css.placeholder":eP,"css.borderradius":eY,"css.borderimage":el,"css.borderimage.standardsyntax":fY,"css.boxshadow":r,"css.gradient.linear":es,"css.gradient.filter":eW,"css.gradient.radial":ee,"css.gradient.legacywebkit":dR,"css.boxmodel":V,"css.rgba":fa,"css.userselect":ej,"css.userselect.none":fz,"css.usermodify":q,"css.appearance":dV,"css.float":eQ,"css.boxsizing":eF,"css.animation":fK,"css.animation.requestframe":dQ,"css.transform":ge,"css.transform.3d":j,"css.transition":dW,"css.inlineblock":eE,"css.opacity":fm,"css.textShadow":gd,"css.textShadow.filter":fl,"css.alphaimageloaderneeded":ex,"css.pointerevents":fU,"phonegap":d,"phonegap.notification":dP,"xml.implementation":H,"xml.domparser":eb,"xml.selectsinglenode":a,"xml.selectnodes":N,"xml.getelementsbytagnamens":O,"xml.domproperties":fL,"xml.attributens":o,"xml.createnode":ew,"xml.getqualifieditem":fy,"xml.createelementns":ea,"qx.mobile.nativescroll":dY},get:function(gj){if(qx.Bootstrap.DEBUG){if(gj===dK){gj=fR;qx.Bootstrap.warn(eI+eM);}
;}
;if(this.__d[gj]!=undefined){return this.__d[gj];}
;var gl=this._checks[gj];if(gl){var gh=gl();this.__d[gj]=gh;return gh;}
;var gg=this._getClassNameFromEnvKey(gj);if(gg[0]!=undefined){var gk=gg[0];var gi=gg[1];var gh=gk[gi]();this.__d[gj]=gh;return gh;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(gj+l+f);qx.Bootstrap.trace(this);}
;}
,_getClassNameFromEnvKey:function(gq){var gs=this._checksMap;if(gs[gq]!=undefined){var gn=gs[gq];var gr=gn.lastIndexOf(fM);if(gr>-1){var gp=gn.slice(0,gr);var gm=gn.slice(gr+1);var go=qx.Bootstrap.getByName(gp);if(go!=undefined){return [go,gm];}
;}
;}
;return [undefined,undefined];}
,getAsync:function(gu,gx,self){var gy=this;if(this.__d[gu]!=undefined){window.setTimeout(function(){gx.call(self,gy.__d[gu]);}
,0);return;}
;var gv=this._asyncChecks[gu];if(gv){gv(function(gA){gy.__d[gu]=gA;gx.call(self,gA);}
);return;}
;var gt=this._getClassNameFromEnvKey(gu);if(gt[0]!=undefined){var gw=gt[0];var gz=gt[1];gw[gz](function(gB){gy.__d[gu]=gB;gx.call(self,gB);}
);return;}
;if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(gu+l+f);qx.Bootstrap.trace(this);}
;}
,select:function(gD,gC){return this.__e(this.get(gD),gC);}
,selectAsync:function(gF,gE,self){this.getAsync(gF,function(gG){var gH=this.__e(gF,gE);gH.call(self,gG);}
,this);}
,__e:function(gL,gK){var gJ=gK[gL];if(gK.hasOwnProperty(gL)){return gJ;}
;for(var gM in gK){if(gM.indexOf(fI)!=-1){var gI=gM.split(fI);for(var i=0;i<gI.length;i++ ){if(gI[i]==gL){return gK[gM];}
;}
;}
;}
;if(gK[gc]!==undefined){return gK[gc];}
;if(qx.Bootstrap.DEBUG){throw new Error(ed+gL+ga+(typeof gL)+m+eR+qx.Bootstrap.keys(gK)+g);}
;}
,filter:function(gN){var gP=[];for(var gO in gN){if(this.get(gO)){gP.push(gN[gO]);}
;}
;return gP;}
,invalidateCacheKey:function(gQ){delete this.__d[gQ];}
,add:function(gS,gR){if(this._checks[gS]==undefined){if(gR instanceof Function){this._checks[gS]=gR;}
else {this._checks[gS]=this.__h(gR);}
;}
;}
,addAsync:function(gU,gT){if(this._checks[gU]==undefined){this._asyncChecks[gU]=gT;}
;}
,getChecks:function(){return this._checks;}
,getAsyncChecks:function(){return this._asyncChecks;}
,_initDefaultQxValues:function(){this.add(fG,function(){return true;}
);this.add(fQ,function(){return false;}
);this.add(fo,function(){return false;}
);this.add(A,function(){return 0;}
);this.add(fV,function(){return true;}
);this.add(fJ,function(){return true;}
);this.add(fW,function(){return false;}
);this.add(eN,function(){return true;}
);this.add(T,function(){return true;}
);this.add(eB,function(){return false;}
);this.add(eJ,function(){return false;}
);this.add(v,function(){return X;}
);this.add(fP,function(){return true;}
);this.add(fC,function(){return false;}
);this.add(ft,function(){return false;}
);this.add(fB,function(){return false;}
);this.add(ez,function(){return false;}
);this.add(dX,function(){return false;}
);this.add(z,function(){return false;}
);this.add(D,function(){return false;}
);this.add(dU,function(){return false;}
);this.add(eq,function(){return true;}
);this.add(eH,function(){return true;}
);this.add(ek,function(){return true;}
);this.add(eo,function(){return true;}
);this.add(P,function(){return false;}
);}
,__f:function(){if(qx&&qx.$$environment){for(var gV in qx.$$environment){var gW=qx.$$environment[gV];this._checks[gV]=this.__h(gW);}
;}
;}
,__g:function(){if(window.document&&window.document.location){var gX=window.document.location.search.slice(1).split(fw);for(var i=0;i<gX.length;i++ ){var hb=gX[i].split(u);if(hb.length!=3||hb[0]!=fi){continue;}
;var gY=hb[1];var ha=decodeURIComponent(hb[2]);if(ha==fG){ha=true;}
else if(ha==eV){ha=false;}
else if(/^(\d|\.)+$/.test(ha)){ha=parseFloat(ha);}
;this._checks[gY]=this.__h(ha);}
;}
;}
,__h:function(hc){return qx.Bootstrap.bind(function(hd){return hd;}
,null,hc);}
},defer:function(he){he._initDefaultQxValues();he.__f();if(he.get(fQ)===true){he.__g();}
;}
});}
)();
(function(){var a="ecmascript.array.lastindexof",b="function",c="stack",d="ecmascript.array.map",f="ecmascript.date.now",g="ecmascript.array.reduce",h="e",i="qx.bom.client.EcmaScript",j="ecmascript.object.keys",k="ecmascript.error.stacktrace",l="ecmascript.string.trim",m="ecmascript.array.indexof",n="stacktrace",o="ecmascript.error.toString",p="[object Error]",q="ecmascript.array.foreach",r="ecmascript.function.bind",s="ecmascript.array.reduceright",t="ecmascript.array.some",u="ecmascript.array.filter",v="ecmascript.array.every";qx.Bootstrap.define(i,{statics:{getStackTrace:function(){var w;var e=new Error(h);w=e.stack?c:e.stacktrace?n:null;if(!w){try{throw e;}
catch(x){e=x;}
;}
;return e.stacktrace?n:e.stack?c:null;}
,getArrayIndexOf:function(){return !!Array.prototype.indexOf;}
,getArrayLastIndexOf:function(){return !!Array.prototype.lastIndexOf;}
,getArrayForEach:function(){return !!Array.prototype.forEach;}
,getArrayFilter:function(){return !!Array.prototype.filter;}
,getArrayMap:function(){return !!Array.prototype.map;}
,getArraySome:function(){return !!Array.prototype.some;}
,getArrayEvery:function(){return !!Array.prototype.every;}
,getArrayReduce:function(){return !!Array.prototype.reduce;}
,getArrayReduceRight:function(){return !!Array.prototype.reduceRight;}
,getErrorToString:function(){return typeof Error.prototype.toString==b&&Error.prototype.toString()!==p;}
,getFunctionBind:function(){return typeof Function.prototype.bind===b;}
,getObjectKeys:function(){return !!Object.keys;}
,getDateNow:function(){return !!Date.now;}
,getStringTrim:function(){return typeof String.prototype.trim===b;}
},defer:function(y){qx.core.Environment.add(m,y.getArrayIndexOf);qx.core.Environment.add(a,y.getArrayLastIndexOf);qx.core.Environment.add(q,y.getArrayForEach);qx.core.Environment.add(u,y.getArrayFilter);qx.core.Environment.add(d,y.getArrayMap);qx.core.Environment.add(t,y.getArraySome);qx.core.Environment.add(v,y.getArrayEvery);qx.core.Environment.add(g,y.getArrayReduce);qx.core.Environment.add(s,y.getArrayReduceRight);qx.core.Environment.add(f,y.getDateNow);qx.core.Environment.add(o,y.getErrorToString);qx.core.Environment.add(k,y.getStackTrace);qx.core.Environment.add(r,y.getFunctionBind);qx.core.Environment.add(j,y.getObjectKeys);qx.core.Environment.add(l,y.getStringTrim);}
});}
)();
(function(){var a="qx.lang.normalize.Function",b="ecmascript.function.bind",c="function",d="Function.prototype.bind called on incompatible ";qx.Bootstrap.define(a,{defer:function(){if(!qx.core.Environment.get(b)){var e=Array.prototype.slice;Function.prototype.bind=function(i){var h=this;if(typeof h!=c){throw new TypeError(d+h);}
;var f=e.call(arguments,1);var g=function(){if(this instanceof g){var F=function(){}
;F.prototype=h.prototype;var self=new F;var j=h.apply(self,f.concat(e.call(arguments)));if(Object(j)===j){return j;}
;return self;}
else {return h.apply(i,f.concat(e.call(arguments)));}
;}
;return g;}
;}
;}
});}
)();
(function(){var a="ecmascript.object.keys",b="qx.lang.normalize.Object";qx.Bootstrap.define(b,{defer:function(){if(!qx.core.Environment.get(a)){Object.keys=qx.Bootstrap.keys;}
;}
});}
)();
(function(){var a="function",b="ecmascript.array.lastindexof",c="ecmascript.array.map",d="ecmascript.array.filter",e="Length is 0 and no second argument given",f="qx.lang.normalize.Array",g="ecmascript.array.indexof",h="First argument is not callable",j="ecmascript.array.reduce",k="ecmascript.array.foreach",m="ecmascript.array.reduceright",n="ecmascript.array.some",o="ecmascript.array.every";qx.Bootstrap.define(f,{defer:function(){if(!qx.core.Environment.get(g)){Array.prototype.indexOf=function(p,q){if(q==null){q=0;}
else if(q<0){q=Math.max(0,this.length+q);}
;for(var i=q;i<this.length;i++ ){if(this[i]===p){return i;}
;}
;return -1;}
;}
;if(!qx.core.Environment.get(b)){Array.prototype.lastIndexOf=function(r,s){if(s==null){s=this.length-1;}
else if(s<0){s=Math.max(0,this.length+s);}
;for(var i=s;i>=0;i-- ){if(this[i]===r){return i;}
;}
;return -1;}
;}
;if(!qx.core.Environment.get(k)){Array.prototype.forEach=function(t,u){var l=this.length;for(var i=0;i<l;i++ ){var v=this[i];if(v!==undefined){t.call(u||window,v,i,this);}
;}
;}
;}
;if(!qx.core.Environment.get(d)){Array.prototype.filter=function(z,w){var x=[];var l=this.length;for(var i=0;i<l;i++ ){var y=this[i];if(y!==undefined){if(z.call(w||window,y,i,this)){x.push(this[i]);}
;}
;}
;return x;}
;}
;if(!qx.core.Environment.get(c)){Array.prototype.map=function(D,A){var B=[];var l=this.length;for(var i=0;i<l;i++ ){var C=this[i];if(C!==undefined){B[i]=D.call(A||window,C,i,this);}
;}
;return B;}
;}
;if(!qx.core.Environment.get(n)){Array.prototype.some=function(E,F){var l=this.length;for(var i=0;i<l;i++ ){var G=this[i];if(G!==undefined){if(E.call(F||window,G,i,this)){return true;}
;}
;}
;return false;}
;}
;if(!qx.core.Environment.get(o)){Array.prototype.every=function(H,I){var l=this.length;for(var i=0;i<l;i++ ){var J=this[i];if(J!==undefined){if(!H.call(I||window,J,i,this)){return false;}
;}
;}
;return true;}
;}
;if(!qx.core.Environment.get(j)){Array.prototype.reduce=function(K,L){if(typeof K!==a){throw new TypeError(h);}
;if(L===undefined&&this.length===0){throw new TypeError(e);}
;var M=L===undefined?this[0]:L;for(var i=L===undefined?1:0;i<this.length;i++ ){if(i in this){M=K.call(undefined,M,this[i],i,this);}
;}
;return M;}
;}
;if(!qx.core.Environment.get(m)){Array.prototype.reduceRight=function(N,O){if(typeof N!==a){throw new TypeError(h);}
;if(O===undefined&&this.length===0){throw new TypeError(e);}
;var P=O===undefined?this[this.length-1]:O;for(var i=O===undefined?this.length-2:this.length-1;i>=0;i-- ){if(i in this){P=N.call(undefined,P,this[i],i,this);}
;}
;return P;}
;}
;}
});}
)();
(function(){var a="qx.Mixin",b=".prototype",c="]",d='Conflict between mixin "',e="constructor",f="Array",g='"!',h='" and "',j="destruct",k='" in property "',m="Mixin",n='" in member "',o="[Mixin ";qx.Bootstrap.define(a,{statics:{define:function(name,q){if(q){if(q.include&&!(qx.Bootstrap.getClass(q.include)===f)){q.include=[q.include];}
;{}
;var r=q.statics?q.statics:{};qx.Bootstrap.setDisplayNames(r,name);for(var p in r){if(r[p] instanceof Function){r[p].$$mixin=r;}
;}
;if(q.construct){r.$$constructor=q.construct;qx.Bootstrap.setDisplayName(q.construct,name,e);}
;if(q.include){r.$$includes=q.include;}
;if(q.properties){r.$$properties=q.properties;}
;if(q.members){r.$$members=q.members;qx.Bootstrap.setDisplayNames(q.members,name+b);}
;for(var p in r.$$members){if(r.$$members[p] instanceof Function){r.$$members[p].$$mixin=r;}
;}
;if(q.events){r.$$events=q.events;}
;if(q.destruct){r.$$destructor=q.destruct;qx.Bootstrap.setDisplayName(q.destruct,name,j);}
;}
else {var r={};}
;r.$$type=m;r.name=name;r.toString=this.genericToString;r.basename=qx.Bootstrap.createNamespace(name,r);this.$$registry[name]=r;return r;}
,checkCompatibility:function(t){var u=this.flatten(t);var v=u.length;if(v<2){return true;}
;var w={};var x={};var z={};var y;for(var i=0;i<v;i++ ){y=u[i];for(var s in y.events){if(z[s]){throw new Error(d+y.name+h+z[s]+n+s+g);}
;z[s]=y.name;}
;for(var s in y.properties){if(w[s]){throw new Error(d+y.name+h+w[s]+k+s+g);}
;w[s]=y.name;}
;for(var s in y.members){if(x[s]){throw new Error(d+y.name+h+x[s]+n+s+g);}
;x[s]=y.name;}
;}
;return true;}
,isCompatible:function(B,C){var A=qx.util.OOUtil.getMixins(C);A.push(B);return qx.Mixin.checkCompatibility(A);}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,flatten:function(D){if(!D){return [];}
;var E=D.concat();for(var i=0,l=D.length;i<l;i++ ){if(D[i].$$includes){E.push.apply(E,this.flatten(D[i].$$includes));}
;}
;return E;}
,genericToString:function(){return o+this.name+c;}
,$$registry:{},__i:null,__j:function(name,F){}
}});}
)();
(function(){var a='Implementation of method "',b='"',c="function",d='" is not supported by Class "',e="Boolean",f="qx.Interface",g='The event "',h='" required by interface "',j='" is missing in class "',k='"!',m='The property "',n="Interface",o="toggle",p="]",q="[Interface ",r="is",s="Array",t='Implementation of member "';qx.Bootstrap.define(f,{statics:{define:function(name,v){if(v){if(v.extend&&!(qx.Bootstrap.getClass(v.extend)===s)){v.extend=[v.extend];}
;{}
;var u=v.statics?v.statics:{};if(v.extend){u.$$extends=v.extend;}
;if(v.properties){u.$$properties=v.properties;}
;if(v.members){u.$$members=v.members;}
;if(v.events){u.$$events=v.events;}
;}
else {var u={};}
;u.$$type=n;u.name=name;u.toString=this.genericToString;u.basename=qx.Bootstrap.createNamespace(name,u);qx.Interface.$$registry[name]=u;return u;}
,getByName:function(name){return this.$$registry[name];}
,isDefined:function(name){return this.getByName(name)!==undefined;}
,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,flatten:function(x){if(!x){return [];}
;var w=x.concat();for(var i=0,l=x.length;i<l;i++ ){if(x[i].$$extends){w.push.apply(w,this.flatten(x[i].$$extends));}
;}
;return w;}
,__l:function(B,C,y,F,D){var z=y.$$members;if(z){for(var E in z){if(qx.Bootstrap.isFunction(z[E])){var H=this.__m(C,E);var A=H||qx.Bootstrap.isFunction(B[E]);if(!A){if(D){throw new Error(a+E+j+C.classname+h+y.name+b);}
else {return false;}
;}
;var G=F===true&&!H&&!qx.util.OOUtil.hasInterface(C,y);if(G){B[E]=this.__p(y,B[E],E,z[E]);}
;}
else {if(typeof B[E]===undefined){if(typeof B[E]!==c){if(D){throw new Error(t+E+j+C.classname+h+y.name+b);}
else {return false;}
;}
;}
;}
;}
;}
;if(!D){return true;}
;}
,__m:function(L,I){var N=I.match(/^(is|toggle|get|set|reset)(.*)$/);if(!N){return false;}
;var K=qx.Bootstrap.firstLow(N[2]);var M=qx.util.OOUtil.getPropertyDefinition(L,K);if(!M){return false;}
;var J=N[0]==r||N[0]==o;if(J){return qx.util.OOUtil.getPropertyDefinition(L,K).check==e;}
;return true;}
,__n:function(R,O,P){if(O.$$properties){for(var Q in O.$$properties){if(!qx.util.OOUtil.getPropertyDefinition(R,Q)){if(P){throw new Error(m+Q+d+R.classname+k);}
else {return false;}
;}
;}
;}
;if(!P){return true;}
;}
,__o:function(V,S,T){if(S.$$events){for(var U in S.$$events){if(!qx.util.OOUtil.supportsEvent(V,U)){if(T){throw new Error(g+U+d+V.classname+k);}
else {return false;}
;}
;}
;}
;if(!T){return true;}
;}
,assertObject:function(Y,W){var ba=Y.constructor;this.__l(Y,ba,W,false,true);this.__n(ba,W,true);this.__o(ba,W,true);var X=W.$$extends;if(X){for(var i=0,l=X.length;i<l;i++ ){this.assertObject(Y,X[i]);}
;}
;}
,assert:function(bd,bb,be){this.__l(bd.prototype,bd,bb,be,true);this.__n(bd,bb,true);this.__o(bd,bb,true);var bc=bb.$$extends;if(bc){for(var i=0,l=bc.length;i<l;i++ ){this.assert(bd,bc[i],be);}
;}
;}
,objectImplements:function(bh,bf){var bi=bh.constructor;if(!this.__l(bh,bi,bf)||!this.__n(bi,bf)||!this.__o(bi,bf)){return false;}
;var bg=bf.$$extends;if(bg){for(var i=0,l=bg.length;i<l;i++ ){if(!this.objectImplements(bh,bg[i])){return false;}
;}
;}
;return true;}
,classImplements:function(bl,bj){if(!this.__l(bl.prototype,bl,bj)||!this.__n(bl,bj)||!this.__o(bl,bj)){return false;}
;var bk=bj.$$extends;if(bk){for(var i=0,l=bk.length;i<l;i++ ){if(!this.has(bl,bk[i])){return false;}
;}
;}
;return true;}
,genericToString:function(){return q+this.name+p;}
,$$registry:{},__p:function(bo,bn,bp,bm){}
,__i:null,__j:function(name,bq){}
}});}
)();
(function(){var a="",b="qx.lang.normalize.Error",c=": ",d="Error",e="ecmascript.error.toString";qx.Bootstrap.define(b,{defer:function(){if(!qx.core.Environment.get(e)){Error.prototype.toString=function(){var name=this.name||d;var f=this.message||a;if(name===a&&f===a){return d;}
;if(name===a){return f;}
;if(f===a){return name;}
;return name+c+f;}
;}
;}
});}
)();
(function(){var a="qx.lang.normalize.Date",b="ecmascript.date.now";qx.Bootstrap.define(a,{defer:function(){if(!qx.core.Environment.get(b)){Date.now=function(){return +new Date();}
;}
;}
});}
)();
(function(){var a='',b="ecmascript.string.trim",c="qx.lang.normalize.String";qx.Bootstrap.define(c,{defer:function(){if(!qx.core.Environment.get(b)){String.prototype.trim=function(d){return this.replace(/^\s+|\s+$/g,a);}
;}
;}
});}
)();
(function(){var b='!==inherit){',c='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',d='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',e="set",f=';',g="resetThemed",h='value !== null && value.nodeType === 9 && value.documentElement',j='===value)return value;',k='value !== null && value.$$type === "Mixin"',m='return init;',n='var init=this.',o='value !== null && value.nodeType === 1 && value.attributes',p="var parent = this.getLayoutParent();",q="Error in property ",r='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',s="();",t='.validate.call(this, value);',u='qx.core.Assert.assertInstance(value, Date, msg) || true',v='else{',w="if (!parent) return;",x=" in method ",y='qx.core.Assert.assertInstance(value, Error, msg) || true',z='=computed;',A='Undefined value is not allowed!',B='(backup);',C='else ',D='=true;',E='if(old===undefined)old=this.',F='if(computed===inherit){',G='old=computed=this.',H="inherit",I='if(this.',J='return this.',K='else if(this.',L='Is invalid!',M='if(value===undefined)prop.error(this,2,"',N='", "',O='var computed, old=this.',P='else if(computed===undefined)',Q='delete this.',R="resetRuntime",S="': ",T=" of class ",U='value !== null && value.nodeType !== undefined',V='===undefined)return;',W='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',X="reset",Y="string",ba="')){",bb="module.events",bc="return this.",bd='qx.core.Assert.assertPositiveInteger(value, msg) || true',be='else this.',bf='value=this.',bg='","',bh='if(init==qx.core.Property.$$inherit)init=null;',bi="get",bj='value !== null && value.$$type === "Interface"',bk='var inherit=prop.$$inherit;',bl="', qx.event.type.Data, [computed, old]",bm="var value = parent.",bn="$$useinit_",bo='computed=undefined;delete this.',bp="(value);",bq='this.',br='Requires exactly one argument!',bs='",value);',bt='computed=value;',bu="$$runtime_",bv="setThemed",bw=';}',bx='(value);',by="$$user_",bz='!==undefined)',bA='){',bB='qx.core.Assert.assertArray(value, msg) || true',bC='if(computed===undefined||computed===inherit){',bD=";",bE='qx.core.Assert.assertPositiveNumber(value, msg) || true',bF=".prototype",bG="Boolean",bH=")}",bI="(a[",bJ='(computed, old, "',bK="setRuntime",bL='return value;',bM="this.",bN='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bO="if(reg.hasListener(this, '",bP='Does not allow any arguments!',bQ=')a[i].',bR="()",bS="var a=arguments[0] instanceof Array?arguments[0]:arguments;",bT='.$$properties.',bU='value !== null && value.$$type === "Theme"',bV='old=this.',bW="var reg=qx.event.Registration;",bX="())",bY='=value;',ca='return null;',cb='qx.core.Assert.assertObject(value, msg) || true',cc='");',cd='if(old===computed)return value;',ce='qx.core.Assert.assertString(value, msg) || true',cf='if(old===undefined)old=null;',cg='var pa=this.getLayoutParent();if(pa)computed=pa.',ch="if (value===undefined) value = parent.",ci='value !== null && value.$$type === "Class"',cj='qx.core.Assert.assertFunction(value, msg) || true',ck='!==undefined&&',cl='var computed, old;',cm='var backup=computed;',cn='}else{',co='}',cp="object",cq="$$init_",cr="$$theme_",cs='!==undefined){',ct='if(computed===undefined)computed=null;',cu="Unknown reason: ",cv="init",cw='qx.core.Assert.assertMap(value, msg) || true',cx='qx.core.Assert.assertNumber(value, msg) || true',cy='if((computed===undefined||computed===inherit)&&',cz="reg.fireEvent(this, '",cA='Null value is not allowed!',cB='qx.core.Assert.assertInteger(value, msg) || true',cC="value",cD="shorthand",cE='computed=this.',cF='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cG='value !== null && value.type !== undefined',cH='value !== null && value.document',cI="",cJ='throw new Error("Property ',cK="(!this.",cL='qx.core.Assert.assertBoolean(value, msg) || true',cM='if(a[i].',cN=' of an instance of ',cO="toggle",cP="refresh",cQ="$$inherit_",cR='var prop=qx.core.Property;',cS="boolean",cT=" with incoming value '",cU="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",cV='if(computed===undefined||computed==inherit)computed=null;',cW="qx.core.Property",cX="is",cY=' is not (yet) ready!");',da="]);",db='Could not change or apply init value after constructing phase!';qx.Bootstrap.define(cW,{statics:{__q:function(){if(qx.core.Environment.get(bb)){qx.event.type.Data;qx.event.dispatch.Direct;}
;}
,__r:{"Boolean":cL,"String":ce,"Number":cx,"Integer":cB,"PositiveNumber":bE,"PositiveInteger":bd,"Error":y,"RegExp":cF,"Object":cb,"Array":bB,"Map":cw,"Function":cj,"Date":u,"Node":U,"Element":o,"Document":h,"Window":cH,"Event":cG,"Class":ci,"Mixin":k,"Interface":bj,"Theme":bU,"Color":c,"Decorator":W,"Font":d},__s:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:H,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:Y,dereference:cS,inheritable:cS,nullable:cS,themeable:cS,refine:cS,init:null,apply:Y,event:Y,check:null,transform:Y,deferredInit:cS,validate:null},$$allowedGroupKeys:{name:Y,group:cp,mode:Y,themeable:cS},$$inheritable:{},__t:function(de){var dc=this.__u(de);if(!dc.length){var dd=function(){}
;}
else {dd=this.__v(dc);}
;de.prototype.$$refreshInheritables=dd;}
,__u:function(df){var dg=[];while(df){var dh=df.$$properties;if(dh){for(var name in this.$$inheritable){if(dh[name]&&dh[name].inheritable){dg.push(name);}
;}
;}
;df=df.superclass;}
;return dg;}
,__v:function(inheritables){var inherit=this.$$store.inherit;var init=this.$$store.init;var refresh=this.$$method.refresh;var code=[p,w];for(var i=0,l=inheritables.length;i<l;i++ ){var name=inheritables[i];code.push(bm,inherit[name],bD,ch,init[name],bD,bM,refresh[name],bp);}
;return new Function(code.join(cI));}
,attachRefreshInheritables:function(di){di.prototype.$$refreshInheritables=function(){qx.core.Property.__t(di);return this.$$refreshInheritables();}
;}
,attachMethods:function(dk,name,dj){dj.group?this.__w(dk,dj,name):this.__x(dk,dj,name);}
,__w:function(clazz,config,name){var upname=qx.Bootstrap.firstUp(name);var members=clazz.prototype;var themeable=config.themeable===true;{}
;var setter=[];var resetter=[];if(themeable){var styler=[];var unstyler=[];}
;var argHandler=bS;setter.push(argHandler);if(themeable){styler.push(argHandler);}
;if(config.mode==cD){var shorthand=cU;setter.push(shorthand);if(themeable){styler.push(shorthand);}
;}
;for(var i=0,a=config.group,l=a.length;i<l;i++ ){{}
;setter.push(bM,this.$$method.set[a[i]],bI,i,da);resetter.push(bM,this.$$method.reset[a[i]],s);if(themeable){{}
;styler.push(bM,this.$$method.setThemed[a[i]],bI,i,da);unstyler.push(bM,this.$$method.resetThemed[a[i]],s);}
;}
;this.$$method.set[name]=e+upname;members[this.$$method.set[name]]=new Function(setter.join(cI));this.$$method.reset[name]=X+upname;members[this.$$method.reset[name]]=new Function(resetter.join(cI));if(themeable){this.$$method.setThemed[name]=bv+upname;members[this.$$method.setThemed[name]]=new Function(styler.join(cI));this.$$method.resetThemed[name]=g+upname;members[this.$$method.resetThemed[name]]=new Function(unstyler.join(cI));}
;}
,__x:function(clazz,config,name){var upname=qx.Bootstrap.firstUp(name);var members=clazz.prototype;{}
;if(config.dereference===undefined&&typeof config.check===Y){config.dereference=this.__y(config.check);}
;var method=this.$$method;var store=this.$$store;store.runtime[name]=bu+name;store.user[name]=by+name;store.theme[name]=cr+name;store.init[name]=cq+name;store.inherit[name]=cQ+name;store.useinit[name]=bn+name;method.get[name]=bi+upname;members[method.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,bi);}
;method.set[name]=e+upname;members[method.set[name]]=function(dl){return qx.core.Property.executeOptimizedSetter(this,clazz,name,e,arguments);}
;method.reset[name]=X+upname;members[method.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,X);}
;if(config.inheritable||config.apply||config.event||config.deferredInit){method.init[name]=cv+upname;members[method.init[name]]=function(dm){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cv,arguments);}
;{}
;}
;if(config.inheritable){method.refresh[name]=cP+upname;members[method.refresh[name]]=function(dn){return qx.core.Property.executeOptimizedSetter(this,clazz,name,cP,arguments);}
;{}
;}
;method.setRuntime[name]=bK+upname;members[method.setRuntime[name]]=function(dp){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bK,arguments);}
;method.resetRuntime[name]=R+upname;members[method.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,R);}
;if(config.themeable){method.setThemed[name]=bv+upname;members[method.setThemed[name]]=function(dq){return qx.core.Property.executeOptimizedSetter(this,clazz,name,bv,arguments);}
;method.resetThemed[name]=g+upname;members[method.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,g);}
;{}
;}
;if(config.check===bG){members[cO+upname]=new Function(bc+method.set[name]+cK+method.get[name]+bX);members[cX+upname]=new Function(bc+method.get[name]+bR);{}
;}
;{}
;}
,__y:function(dr){return !!this.__s[dr];}
,__z:{'0':db,'1':br,'2':A,'3':bP,'4':cA,'5':L},error:function(ds,dy,dx,dt,du){var dv=ds.constructor.classname;var dw=q+dx+T+dv+x+this.$$method[dt][dx]+cT+du+S;throw new Error(dw+(this.__z[dy]||cu+dy));}
,__A:function(instance,members,name,variant,code,args){var store=this.$$method[variant][name];{members[store]=new Function(cC,code.join(cI));}
;{}
;qx.Bootstrap.setDisplayName(members[store],instance.classname+bF,store);if(args===undefined){return instance[store]();}
else {return instance[store](args[0]);}
;}
,executeOptimizedGetter:function(dC,dB,name,dA){var dE=dB.$$properties[name];var dD=dB.prototype;var dz=[];var dF=this.$$store;dz.push(I,dF.runtime[name],bz);dz.push(J,dF.runtime[name],f);if(dE.inheritable){dz.push(K,dF.inherit[name],bz);dz.push(J,dF.inherit[name],f);dz.push(C);}
;dz.push(I,dF.user[name],bz);dz.push(J,dF.user[name],f);if(dE.themeable){dz.push(K,dF.theme[name],bz);dz.push(J,dF.theme[name],f);}
;if(dE.deferredInit&&dE.init===undefined){dz.push(K,dF.init[name],bz);dz.push(J,dF.init[name],f);}
;dz.push(C);if(dE.init!==undefined){if(dE.inheritable){dz.push(n,dF.init[name],f);if(dE.nullable){dz.push(bh);}
else if(dE.init!==undefined){dz.push(J,dF.init[name],f);}
else {dz.push(bN,name,cN,dB.classname,cY);}
;dz.push(m);}
else {dz.push(J,dF.init[name],f);}
;}
else if(dE.inheritable||dE.nullable){dz.push(ca);}
else {dz.push(cJ,name,cN,dB.classname,cY);}
;return this.__A(dC,dD,name,dA,dz);}
,executeOptimizedSetter:function(dM,dL,name,dK,dJ){var dO=dL.$$properties[name];var dN=dL.prototype;var dH=[];var dG=dK===e||dK===bv||dK===bK||(dK===cv&&dO.init===undefined);var dI=dO.apply||dO.event||dO.inheritable;var dP=this.__B(dK,name);this.__C(dH,dO,name,dK,dG);if(dG){this.__D(dH,dL,dO,name);}
;if(dI){this.__E(dH,dG,dP,dK);}
;if(dO.inheritable){dH.push(bk);}
;{}
;if(!dI){this.__G(dH,name,dK,dG);}
else {this.__H(dH,dO,name,dK,dG);}
;if(dO.inheritable){this.__I(dH,dO,name,dK);}
else if(dI){this.__J(dH,dO,name,dK);}
;if(dI){this.__K(dH,dO,name,dK);if(dO.inheritable&&dN._getChildren){this.__L(dH,name);}
;}
;if(dG){dH.push(bL);}
;return this.__A(dM,dN,name,dK,dH,dJ);}
,__B:function(dQ,name){if(dQ===bK||dQ===R){var dR=this.$$store.runtime[name];}
else if(dQ===bv||dQ===g){dR=this.$$store.theme[name];}
else if(dQ===cv){dR=this.$$store.init[name];}
else {dR=this.$$store.user[name];}
;return dR;}
,__C:function(dU,dS,name,dV,dT){{if(!dS.nullable||dS.check||dS.inheritable){dU.push(cR);}
;if(dV===e){dU.push(M,name,bg,dV,bs);}
;}
;}
,__D:function(dW,dY,dX,name){if(dX.transform){dW.push(bf,dX.transform,bx);}
;if(dX.validate){if(typeof dX.validate===Y){dW.push(bq,dX.validate,bx);}
else if(dX.validate instanceof Function){dW.push(dY.classname,bT,name);dW.push(t);}
;}
;}
,__E:function(eb,ea,ed,ec){var ee=(ec===X||ec===g||ec===R);if(ea){eb.push(I,ed,j);}
else if(ee){eb.push(I,ed,V);}
;}
,__F:undefined,__G:function(eg,name,eh,ef){if(eh===bK){eg.push(bq,this.$$store.runtime[name],bY);}
else if(eh===R){eg.push(I,this.$$store.runtime[name],bz);eg.push(Q,this.$$store.runtime[name],f);}
else if(eh===e){eg.push(bq,this.$$store.user[name],bY);}
else if(eh===X){eg.push(I,this.$$store.user[name],bz);eg.push(Q,this.$$store.user[name],f);}
else if(eh===bv){eg.push(bq,this.$$store.theme[name],bY);}
else if(eh===g){eg.push(I,this.$$store.theme[name],bz);eg.push(Q,this.$$store.theme[name],f);}
else if(eh===cv&&ef){eg.push(bq,this.$$store.init[name],bY);}
;}
,__H:function(ek,ei,name,el,ej){if(ei.inheritable){ek.push(O,this.$$store.inherit[name],f);}
else {ek.push(cl);}
;ek.push(I,this.$$store.runtime[name],cs);if(el===bK){ek.push(cE,this.$$store.runtime[name],bY);}
else if(el===R){ek.push(Q,this.$$store.runtime[name],f);ek.push(I,this.$$store.user[name],bz);ek.push(cE,this.$$store.user[name],f);ek.push(K,this.$$store.theme[name],bz);ek.push(cE,this.$$store.theme[name],f);ek.push(K,this.$$store.init[name],cs);ek.push(cE,this.$$store.init[name],f);ek.push(bq,this.$$store.useinit[name],D);ek.push(co);}
else {ek.push(G,this.$$store.runtime[name],f);if(el===e){ek.push(bq,this.$$store.user[name],bY);}
else if(el===X){ek.push(Q,this.$$store.user[name],f);}
else if(el===bv){ek.push(bq,this.$$store.theme[name],bY);}
else if(el===g){ek.push(Q,this.$$store.theme[name],f);}
else if(el===cv&&ej){ek.push(bq,this.$$store.init[name],bY);}
;}
;ek.push(co);ek.push(K,this.$$store.user[name],cs);if(el===e){if(!ei.inheritable){ek.push(bV,this.$$store.user[name],f);}
;ek.push(cE,this.$$store.user[name],bY);}
else if(el===X){if(!ei.inheritable){ek.push(bV,this.$$store.user[name],f);}
;ek.push(Q,this.$$store.user[name],f);ek.push(I,this.$$store.runtime[name],bz);ek.push(cE,this.$$store.runtime[name],f);ek.push(I,this.$$store.theme[name],bz);ek.push(cE,this.$$store.theme[name],f);ek.push(K,this.$$store.init[name],cs);ek.push(cE,this.$$store.init[name],f);ek.push(bq,this.$$store.useinit[name],D);ek.push(co);}
else {if(el===bK){ek.push(cE,this.$$store.runtime[name],bY);}
else if(ei.inheritable){ek.push(cE,this.$$store.user[name],f);}
else {ek.push(G,this.$$store.user[name],f);}
;if(el===bv){ek.push(bq,this.$$store.theme[name],bY);}
else if(el===g){ek.push(Q,this.$$store.theme[name],f);}
else if(el===cv&&ej){ek.push(bq,this.$$store.init[name],bY);}
;}
;ek.push(co);if(ei.themeable){ek.push(K,this.$$store.theme[name],cs);if(!ei.inheritable){ek.push(bV,this.$$store.theme[name],f);}
;if(el===bK){ek.push(cE,this.$$store.runtime[name],bY);}
else if(el===e){ek.push(cE,this.$$store.user[name],bY);}
else if(el===bv){ek.push(cE,this.$$store.theme[name],bY);}
else if(el===g){ek.push(Q,this.$$store.theme[name],f);ek.push(I,this.$$store.init[name],cs);ek.push(cE,this.$$store.init[name],f);ek.push(bq,this.$$store.useinit[name],D);ek.push(co);}
else if(el===cv){if(ej){ek.push(bq,this.$$store.init[name],bY);}
;ek.push(cE,this.$$store.theme[name],f);}
else if(el===cP){ek.push(cE,this.$$store.theme[name],f);}
;ek.push(co);}
;ek.push(K,this.$$store.useinit[name],bA);if(!ei.inheritable){ek.push(bV,this.$$store.init[name],f);}
;if(el===cv){if(ej){ek.push(cE,this.$$store.init[name],bY);}
else {ek.push(cE,this.$$store.init[name],f);}
;}
else if(el===e||el===bK||el===bv||el===cP){ek.push(Q,this.$$store.useinit[name],f);if(el===bK){ek.push(cE,this.$$store.runtime[name],bY);}
else if(el===e){ek.push(cE,this.$$store.user[name],bY);}
else if(el===bv){ek.push(cE,this.$$store.theme[name],bY);}
else if(el===cP){ek.push(cE,this.$$store.init[name],f);}
;}
;ek.push(co);if(el===e||el===bK||el===bv||el===cv){ek.push(v);if(el===bK){ek.push(cE,this.$$store.runtime[name],bY);}
else if(el===e){ek.push(cE,this.$$store.user[name],bY);}
else if(el===bv){ek.push(cE,this.$$store.theme[name],bY);}
else if(el===cv){if(ej){ek.push(cE,this.$$store.init[name],bY);}
else {ek.push(cE,this.$$store.init[name],f);}
;ek.push(bq,this.$$store.useinit[name],D);}
;ek.push(co);}
;}
,__I:function(en,em,name,eo){en.push(bC);if(eo===cP){en.push(bt);}
else {en.push(cg,this.$$store.inherit[name],f);}
;en.push(cy);en.push(bq,this.$$store.init[name],ck);en.push(bq,this.$$store.init[name],b);en.push(cE,this.$$store.init[name],f);en.push(bq,this.$$store.useinit[name],D);en.push(cn);en.push(Q,this.$$store.useinit[name],bw);en.push(co);en.push(cd);en.push(F);en.push(bo,this.$$store.inherit[name],f);en.push(co);en.push(P);en.push(Q,this.$$store.inherit[name],f);en.push(be,this.$$store.inherit[name],z);en.push(cm);if(em.init!==undefined&&eo!==cv){en.push(E,this.$$store.init[name],bD);}
else {en.push(cf);}
;en.push(cV);}
,__J:function(eq,ep,name,er){if(er!==e&&er!==bK&&er!==bv){eq.push(ct);}
;eq.push(cd);if(ep.init!==undefined&&er!==cv){eq.push(E,this.$$store.init[name],bD);}
else {eq.push(cf);}
;}
,__K:function(et,es,name,eu){if(es.apply){et.push(bq,es.apply,bJ,name,N,eu,cc);}
;if(es.event){et.push(bW,bO,es.event,ba,cz,es.event,bl,bH);}
;}
,__L:function(ev,name){ev.push(r);ev.push(cM,this.$$method.refresh[name],bQ,this.$$method.refresh[name],B);ev.push(co);}
}});}
)();
(function(){var b=".prototype",c="$$init_",d="constructor",e="Property module disabled.",f="extend",g="module.property",h="singleton",j="qx.event.type.Data",k="module.events",m="toString",n='extend',o="Array",p="static",q="",r="Events module not enabled.",s="]",t="Class",u="qx.Class",v='"extend" parameter is null or undefined',w="[Class ",x="destruct",y=".";qx.Bootstrap.define(u,{statics:{__M:qx.core.Environment.get(g)?qx.core.Property:null,define:function(name,C){if(!C){C={};}
;if(C.include&&!(qx.Bootstrap.getClass(C.include)===o)){C.include=[C.include];}
;if(C.implement&&!(qx.Bootstrap.getClass(C.implement)===o)){C.implement=[C.implement];}
;var z=false;if(!C.hasOwnProperty(f)&&!C.type){C.type=p;z=true;}
;{}
;var A=this.__P(name,C.type,C.extend,C.statics,C.construct,C.destruct,C.include);if(C.extend){if(C.properties){this.__R(A,C.properties,true);}
;if(C.members){this.__T(A,C.members,true,true,false);}
;if(C.events){this.__Q(A,C.events,true);}
;if(C.include){for(var i=0,l=C.include.length;i<l;i++ ){this.__X(A,C.include[i],false);}
;}
;}
else if(C.hasOwnProperty(n)&&false){throw new Error(v);}
;if(C.environment){for(var B in C.environment){qx.core.Environment.add(B,C.environment[B]);}
;}
;if(C.implement){for(var i=0,l=C.implement.length;i<l;i++ ){this.__V(A,C.implement[i]);}
;}
;{}
;if(C.defer){C.defer.self=A;C.defer(A,A.prototype,{add:function(name,D){var E={};E[name]=D;qx.Class.__R(A,E,true);}
});}
;return A;}
,undefine:function(name){delete this.$$registry[name];var H=name.split(y);var G=[window];for(var i=0;i<H.length;i++ ){G.push(G[i][H[i]]);}
;for(var i=G.length-1;i>=1;i-- ){var F=G[i];var parent=G[i-1];if(qx.Bootstrap.isFunction(F)||qx.Bootstrap.objectGetLength(F)===0){delete parent[H[i-1]];}
else {break;}
;}
;}
,isDefined:qx.util.OOUtil.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);}
,getByName:qx.Bootstrap.getByName,include:function(J,I){{}
;qx.Class.__X(J,I,false);}
,patch:function(L,K){{}
;qx.Class.__X(L,K,true);}
,isSubClassOf:function(N,M){if(!N){return false;}
;if(N==M){return true;}
;if(N.prototype instanceof M){return true;}
;return false;}
,getPropertyDefinition:qx.util.OOUtil.getPropertyDefinition,getProperties:function(P){var O=[];while(P){if(P.$$properties){O.push.apply(O,Object.keys(P.$$properties));}
;P=P.superclass;}
;return O;}
,getByProperty:function(Q,name){while(Q){if(Q.$$properties&&Q.$$properties[name]){return Q;}
;Q=Q.superclass;}
;return null;}
,hasProperty:qx.util.OOUtil.hasProperty,getEventType:qx.util.OOUtil.getEventType,supportsEvent:qx.util.OOUtil.supportsEvent,hasOwnMixin:function(S,R){return S.$$includes&&S.$$includes.indexOf(R)!==-1;}
,getByMixin:function(V,U){var T,i,l;while(V){if(V.$$includes){T=V.$$flatIncludes;for(i=0,l=T.length;i<l;i++ ){if(T[i]===U){return V;}
;}
;}
;V=V.superclass;}
;return null;}
,getMixins:qx.util.OOUtil.getMixins,hasMixin:function(X,W){return !!this.getByMixin(X,W);}
,hasOwnInterface:function(ba,Y){return ba.$$implements&&ba.$$implements.indexOf(Y)!==-1;}
,getByInterface:qx.util.OOUtil.getByInterface,getInterfaces:function(bc){var bb=[];while(bc){if(bc.$$implements){bb.push.apply(bb,bc.$$flatImplements);}
;bc=bc.superclass;}
;return bb;}
,hasInterface:qx.util.OOUtil.hasInterface,implementsInterface:function(be,bd){var bf=be.constructor;if(this.hasInterface(bf,bd)){return true;}
;if(qx.Interface.objectImplements(be,bd)){return true;}
;if(qx.Interface.classImplements(bf,bd)){return true;}
;return false;}
,getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;this.$$instance=new this();delete this.$$allowconstruct;}
;return this.$$instance;}
,genericToString:function(){return w+this.classname+s;}
,$$registry:qx.Bootstrap.$$registry,__i:null,__N:null,__j:function(name,bg){}
,__O:function(bh){}
,__P:function(name,br,bq,bi,bo,bm,bl){var bn;if(!bq&&true){bn=bi||{};qx.Bootstrap.setDisplayNames(bn,name);}
else {bn={};if(bq){if(!bo){bo=this.__Y();}
;if(this.__bb(bq,bl)){bn=this.__bc(bo,name,br);}
else {bn=bo;}
;if(br===h){bn.getInstance=this.getInstance;}
;qx.Bootstrap.setDisplayName(bo,name,d);}
;if(bi){qx.Bootstrap.setDisplayNames(bi,name);var bp;for(var i=0,a=Object.keys(bi),l=a.length;i<l;i++ ){bp=a[i];var bj=bi[bp];{bn[bp]=bj;}
;}
;}
;}
;var bk=name?qx.Bootstrap.createNamespace(name,bn):q;bn.name=bn.classname=name;bn.basename=bk;bn.$$type=t;if(br){bn.$$classtype=br;}
;if(!bn.hasOwnProperty(m)){bn.toString=this.genericToString;}
;if(bq){qx.Bootstrap.extendClass(bn,bo,bq,name,bk);if(bm){{}
;bn.$$destructor=bm;qx.Bootstrap.setDisplayName(bm,name,x);}
;}
;this.$$registry[name]=bn;return bn;}
,__Q:function(bs,bt,bv){{var bu,bu;}
;if(bs.$$events){for(var bu in bt){bs.$$events[bu]=bt[bu];}
;}
else {bs.$$events=bt;}
;}
,__R:function(bx,bA,by){if(!qx.core.Environment.get(g)){throw new Error(e);}
;var bz;if(by===undefined){by=false;}
;var bw=bx.prototype;for(var name in bA){bz=bA[name];{}
;bz.name=name;if(!bz.refine){if(bx.$$properties===undefined){bx.$$properties={};}
;bx.$$properties[name]=bz;}
;if(bz.init!==undefined){bx.prototype[c+name]=bz.init;}
;if(bz.event!==undefined){if(!qx.core.Environment.get(k)){throw new Error(r);}
;var event={};event[bz.event]=j;this.__Q(bx,event,by);}
;if(bz.inheritable){this.__M.$$inheritable[name]=true;if(!bw.$$refreshInheritables){this.__M.attachRefreshInheritables(bx);}
;}
;if(!bz.refine){this.__M.attachMethods(bx,name,bz);}
;}
;}
,__S:null,__T:function(bI,bB,bD,bF,bH){var bC=bI.prototype;var bG,bE;qx.Bootstrap.setDisplayNames(bB,bI.classname+b);for(var i=0,a=Object.keys(bB),l=a.length;i<l;i++ ){bG=a[i];bE=bB[bG];{}
;if(bF!==false&&bE instanceof Function&&bE.$$type==null){if(bH==true){bE=this.__U(bE,bC[bG]);}
else {if(bC[bG]){bE.base=bC[bG];}
;bE.self=bI;}
;{}
;}
;bC[bG]=bE;}
;}
,__U:function(bJ,bK){if(bK){return function(){var bM=bJ.base;bJ.base=bK;var bL=bJ.apply(this,arguments);bJ.base=bM;return bL;}
;}
else {return bJ;}
;}
,__V:function(bP,bN){{}
;var bO=qx.Interface.flatten([bN]);if(bP.$$implements){bP.$$implements.push(bN);bP.$$flatImplements.push.apply(bP.$$flatImplements,bO);}
else {bP.$$implements=[bN];bP.$$flatImplements=bO;}
;}
,__W:function(bR){var name=bR.classname;var bQ=this.__bc(bR,name,bR.$$classtype);for(var i=0,a=Object.keys(bR),l=a.length;i<l;i++ ){bS=a[i];bQ[bS]=bR[bS];}
;bQ.prototype=bR.prototype;var bU=bR.prototype;for(var i=0,a=Object.keys(bU),l=a.length;i<l;i++ ){bS=a[i];var bV=bU[bS];if(bV&&bV.self==bR){bV.self=bQ;}
;}
;for(var bS in this.$$registry){var bT=this.$$registry[bS];if(!bT){continue;}
;if(bT.base==bR){bT.base=bQ;}
;if(bT.superclass==bR){bT.superclass=bQ;}
;if(bT.$$original){if(bT.$$original.base==bR){bT.$$original.base=bQ;}
;if(bT.$$original.superclass==bR){bT.$$original.superclass=bQ;}
;}
;}
;qx.Bootstrap.createNamespace(name,bQ);this.$$registry[name]=bQ;return bQ;}
,__X:function(cc,ca,bY){{}
;if(this.hasMixin(cc,ca)){return;}
;var bW=cc.$$original;if(ca.$$constructor&&!bW){cc=this.__W(cc);}
;var bX=qx.Mixin.flatten([ca]);var cb;for(var i=0,l=bX.length;i<l;i++ ){cb=bX[i];if(cb.$$events){this.__Q(cc,cb.$$events,bY);}
;if(cb.$$properties){this.__R(cc,cb.$$properties,bY);}
;if(cb.$$members){this.__T(cc,cb.$$members,bY,bY,bY);}
;}
;if(cc.$$includes){cc.$$includes.push(ca);cc.$$flatIncludes.push.apply(cc.$$flatIncludes,bX);}
else {cc.$$includes=[ca];cc.$$flatIncludes=bX;}
;}
,__Y:function(){function cd(){cd.base.apply(this,arguments);}
;return cd;}
,__ba:function(){return function(){}
;}
,__bb:function(cf,ce){{}
;if(cf&&cf.$$includes){var cg=cf.$$flatIncludes;for(var i=0,l=cg.length;i<l;i++ ){if(cg[i].$$constructor){return true;}
;}
;}
;if(ce){var ch=qx.Mixin.flatten(ce);for(var i=0,l=ch.length;i<l;i++ ){if(ch[i].$$constructor){return true;}
;}
;}
;return false;}
,__bc:function(cj,name,ci){var cl=function(){var co=cl;{}
;var cm=co.$$original.apply(this,arguments);if(co.$$includes){var cn=co.$$flatIncludes;for(var i=0,l=cn.length;i<l;i++ ){if(cn[i].$$constructor){cn[i].$$constructor.apply(this,arguments);}
;}
;}
;{}
;return cm;}
;{var ck;}
;cl.$$original=cj;cj.wrapper=cl;return cl;}
},defer:function(){{var cp,cq,cr;}
;}
});}
)();
(function(){var a="qx.core.Aspect",b="before",c="*",d="static";qx.Bootstrap.define(a,{statics:{__k:[],wrap:function(h,l,j){var m=[];var e=[];var k=this.__k;var g;for(var i=0;i<k.length;i++ ){g=k[i];if((g.type==null||j==g.type||g.type==c)&&(g.name==null||h.match(g.name))){g.pos==-1?m.push(g.fcn):e.push(g.fcn);}
;}
;if(m.length===0&&e.length===0){return l;}
;var f=function(){for(var i=0;i<m.length;i++ ){m[i].call(this,h,l,j,arguments);}
;var n=l.apply(this,arguments);for(var i=0;i<e.length;i++ ){e[i].call(this,h,l,j,arguments,n);}
;return n;}
;if(j!==d){f.self=l.self;f.base=l.base;}
;l.wrapper=f;f.original=l;return f;}
,addAdvice:function(q,o,p,name){this.__k.push({fcn:q,pos:o===b?-1:1,type:p,name:name});}
}});}
)();
(function(){var a="qx.data.MBinding";qx.Mixin.define(a,{members:{bind:function(b,e,c,d){return qx.data.SingleValueBinding.bind(this,b,e,c,d);}
,removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);}
,removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);}
,getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);}
}});}
)();
(function(){var a=". Error message: ",b="Boolean",c="set",d="deepBinding",f=") to the object '",g="item",h="Please use only one array at a time: ",k="Integer",l="reset",m=" of object ",n="qx.data.SingleValueBinding",p="Binding property ",q="Failed so set value ",r="change",s="Binding could not be found!",t="get",u="^",v=" does not work.",w="String",x="Binding from '",y="",z="PositiveNumber",A="]",B="[",C=".",D="PositiveInteger",E='No number or \'last\' value hast been given in an array binding: ',F="' (",G=" on ",H="Binding does not exist!",I="Number",J=").",K="Date",L=" not possible: No event available. ",M="last";qx.Class.define(n,{statics:{__bd:{},bind:function(Q,be,bc,S,bb){var bf=this.__bf(Q,be,bc,S,bb);var U=be.split(C);var P=this.__bl(U);var Y=[];var T=[];var V=[];var ba=[];var R=Q;try{for(var i=0;i<U.length;i++ ){if(P[i]!==y){ba.push(r);}
else {ba.push(this.__bg(R,U[i]));}
;Y[i]=R;if(i==U.length-1){if(P[i]!==y){var bh=P[i]===M?R.length-1:P[i];var O=R.getItem(bh);this.__bk(O,bc,S,bb,Q);V[i]=this.__bm(R,ba[i],bc,S,bb,P[i]);}
else {if(U[i]!=null&&R[t+qx.lang.String.firstUp(U[i])]!=null){var O=R[t+qx.lang.String.firstUp(U[i])]();this.__bk(O,bc,S,bb,Q);}
;V[i]=this.__bm(R,ba[i],bc,S,bb);}
;}
else {var N={index:i,propertyNames:U,sources:Y,listenerIds:V,arrayIndexValues:P,targetObject:bc,targetPropertyChain:S,options:bb,listeners:T};var X=qx.lang.Function.bind(this.__be,this,N);T.push(X);V[i]=R.addListener(ba[i],X);}
;if(R[t+qx.lang.String.firstUp(U[i])]==null){R=null;}
else if(P[i]!==y){R=R[t+qx.lang.String.firstUp(U[i])](P[i]);}
else {R=R[t+qx.lang.String.firstUp(U[i])]();}
;if(!R){break;}
;}
;}
catch(bi){for(var i=0;i<Y.length;i++ ){if(Y[i]&&V[i]){Y[i].removeListenerById(V[i]);}
;}
;var W=bf.targets;var bd=bf.listenerIds;for(var i=0;i<W.length;i++ ){if(W[i]&&bd[i]){W[i].removeListenerById(bd[i]);}
;}
;throw bi;}
;var bg={type:d,listenerIds:V,sources:Y,targetListenerIds:bf.listenerIds,targets:bf.targets};this.__bn(bg,Q,be,bc,S);return bg;}
,__be:function(bp){if(bp.options&&bp.options.onUpdate){bp.options.onUpdate(bp.sources[bp.index],bp.targetObject);}
;for(var j=bp.index+1;j<bp.propertyNames.length;j++ ){var bn=bp.sources[j];bp.sources[j]=null;if(!bn){continue;}
;bn.removeListenerById(bp.listenerIds[j]);}
;var bn=bp.sources[bp.index];for(var j=bp.index+1;j<bp.propertyNames.length;j++ ){if(bp.arrayIndexValues[j-1]!==y){bn=bn[t+qx.lang.String.firstUp(bp.propertyNames[j-1])](bp.arrayIndexValues[j-1]);}
else {bn=bn[t+qx.lang.String.firstUp(bp.propertyNames[j-1])]();}
;bp.sources[j]=bn;if(!bn){if(bp.options&&bp.options.converter){var bj=false;if(bp.options.ignoreConverter){var bq=bp.propertyNames.slice(0,j).join(C);var bo=bq.match(new RegExp(u+bp.options.ignoreConverter));bj=bo?bo.length>0:false;}
;var br=null;if(!bj){br=bp.options.converter();}
;this.__bi(bp.targetObject,bp.targetPropertyChain,br);}
else {this.__bh(bp.targetObject,bp.targetPropertyChain);}
;break;}
;if(j==bp.propertyNames.length-1){if(qx.Class.implementsInterface(bn,qx.data.IListData)){var bs=bp.arrayIndexValues[j]===M?bn.length-1:bp.arrayIndexValues[j];var bk=bn.getItem(bs);this.__bk(bk,bp.targetObject,bp.targetPropertyChain,bp.options,bp.sources[bp.index]);bp.listenerIds[j]=this.__bm(bn,r,bp.targetObject,bp.targetPropertyChain,bp.options,bp.arrayIndexValues[j]);}
else {if(bp.propertyNames[j]!=null&&bn[t+qx.lang.String.firstUp(bp.propertyNames[j])]!=null){var bk=bn[t+qx.lang.String.firstUp(bp.propertyNames[j])]();this.__bk(bk,bp.targetObject,bp.targetPropertyChain,bp.options,bp.sources[bp.index]);}
;var bl=this.__bg(bn,bp.propertyNames[j]);bp.listenerIds[j]=this.__bm(bn,bl,bp.targetObject,bp.targetPropertyChain,bp.options);}
;}
else {if(bp.listeners[j]==null){var bm=qx.lang.Function.bind(this.__be,this,bp);bp.listeners.push(bm);}
;if(qx.Class.implementsInterface(bn,qx.data.IListData)){var bl=r;}
else {var bl=this.__bg(bn,bp.propertyNames[j]);}
;bp.listenerIds[j]=bn.addListener(bl,bp.listeners[j]);}
;}
;}
,__bf:function(bu,bC,bG,by,bA){var bx=by.split(C);var bv=this.__bl(bx);var bF=[];var bE=[];var bz=[];var bD=[];var bw=bG;for(var i=0;i<bx.length-1;i++ ){if(bv[i]!==y){bD.push(r);}
else {try{bD.push(this.__bg(bw,bx[i]));}
catch(e){break;}
;}
;bF[i]=bw;var bB=function(){for(var j=i+1;j<bx.length-1;j++ ){var bJ=bF[j];bF[j]=null;if(!bJ){continue;}
;bJ.removeListenerById(bz[j]);}
;var bJ=bF[i];for(var j=i+1;j<bx.length-1;j++ ){var bH=qx.lang.String.firstUp(bx[j-1]);if(bv[j-1]!==y){var bK=bv[j-1]===M?bJ.getLength()-1:bv[j-1];bJ=bJ[t+bH](bK);}
else {bJ=bJ[t+bH]();}
;bF[j]=bJ;if(bE[j]==null){bE.push(bB);}
;if(qx.Class.implementsInterface(bJ,qx.data.IListData)){var bI=r;}
else {try{var bI=qx.data.SingleValueBinding.__bg(bJ,bx[j]);}
catch(e){break;}
;}
;bz[j]=bJ.addListener(bI,bE[j]);}
;qx.data.SingleValueBinding.updateTarget(bu,bC,bG,by,bA);}
;bE.push(bB);bz[i]=bw.addListener(bD[i],bB);var bt=qx.lang.String.firstUp(bx[i]);if(bw[t+bt]==null){bw=null;}
else if(bv[i]!==y){bw=bw[t+bt](bv[i]);}
else {bw=bw[t+bt]();}
;if(!bw){break;}
;}
;return {listenerIds:bz,targets:bF};}
,updateTarget:function(bL,bO,bQ,bM,bP){var bN=this.resolvePropertyChain(bL,bO);bN=qx.data.SingleValueBinding.__bo(bN,bQ,bM,bP,bL);this.__bi(bQ,bM,bN);}
,resolvePropertyChain:function(o,bU){var bT=this.__bj(o,bU);var bV;if(bT!=null){var bX=bU.substring(bU.lastIndexOf(C)+1,bU.length);if(bX.charAt(bX.length-1)==A){var bR=bX.substring(bX.lastIndexOf(B)+1,bX.length-1);var bS=bX.substring(0,bX.lastIndexOf(B));var bW=bT[t+qx.lang.String.firstUp(bS)]();if(bR==M){bR=bW.length-1;}
;if(bW!=null){bV=bW.getItem(bR);}
;}
else {bV=bT[t+qx.lang.String.firstUp(bX)]();}
;}
;return bV;}
,__bg:function(ca,cb){var bY=this.__bp(ca,cb);if(bY==null){if(qx.Class.supportsEvent(ca.constructor,cb)){bY=cb;}
else if(qx.Class.supportsEvent(ca.constructor,r+qx.lang.String.firstUp(cb))){bY=r+qx.lang.String.firstUp(cb);}
else {throw new qx.core.AssertionError(p+cb+m+ca+L);}
;}
;return bY;}
,__bh:function(ce,cc){var cd=this.__bj(ce,cc);if(cd!=null){var cf=cc.substring(cc.lastIndexOf(C)+1,cc.length);if(cf.charAt(cf.length-1)==A){this.__bi(ce,cc,null);return;}
;if(cd[l+qx.lang.String.firstUp(cf)]!=undefined){cd[l+qx.lang.String.firstUp(cf)]();}
else {cd[c+qx.lang.String.firstUp(cf)](null);}
;}
;}
,__bi:function(cm,ci,cj){var ch=this.__bj(cm,ci);if(ch!=null){var cn=ci.substring(ci.lastIndexOf(C)+1,ci.length);if(cn.charAt(cn.length-1)==A){var cg=cn.substring(cn.lastIndexOf(B)+1,cn.length-1);var ck=cn.substring(0,cn.lastIndexOf(B));var cl=cm;if(!qx.Class.implementsInterface(cl,qx.data.IListData)){cl=ch[t+qx.lang.String.firstUp(ck)]();}
;if(cg==M){cg=cl.length-1;}
;if(cl!=null){cl.setItem(cg,cj);}
;}
else {ch[c+qx.lang.String.firstUp(cn)](cj);}
;}
;}
,__bj:function(ct,cq){var cs=cq.split(C);var cp=ct;for(var i=0;i<cs.length-1;i++ ){try{var cr=cs[i];if(cr.indexOf(A)==cr.length-1){var co=cr.substring(cr.indexOf(B)+1,cr.length-1);cr=cr.substring(0,cr.indexOf(B));}
;if(cr!=y){cp=cp[t+qx.lang.String.firstUp(cr)]();}
;if(co!=null){if(co==M){co=cp.length-1;}
;cp=cp.getItem(co);co=null;}
;}
catch(cu){return null;}
;}
;return cp;}
,__bk:function(cz,cv,cx,cy,cw){cz=this.__bo(cz,cv,cx,cy,cw);if(cz===undefined){this.__bh(cv,cx);}
;if(cz!==undefined){try{this.__bi(cv,cx,cz);if(cy&&cy.onUpdate){cy.onUpdate(cw,cv,cz);}
;}
catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;}
;if(cy&&cy.onSetFail){cy.onSetFail(e);}
else {qx.log.Logger.warn(q+cz+G+cv+a+e);}
;}
;}
;}
,__bl:function(cA){var cB=[];for(var i=0;i<cA.length;i++ ){var name=cA[i];if(qx.lang.String.endsWith(name,A)){var cC=name.substring(name.indexOf(B)+1,name.indexOf(A));if(name.indexOf(A)!=name.length-1){throw new Error(h+name+v);}
;if(cC!==M){if(cC==y||isNaN(parseInt(cC,10))){throw new Error(E+name+v);}
;}
;if(name.indexOf(B)!=0){cA[i]=name.substring(0,name.indexOf(B));cB[i]=y;cB[i+1]=cC;cA.splice(i+1,0,g);i++ ;}
else {cB[i]=cC;cA.splice(i,1,g);}
;}
else {cB[i]=y;}
;}
;return cB;}
,__bm:function(cD,cG,cL,cJ,cH,cF){{var cE;}
;var cI=function(cO,e){if(cO!==y){if(cO===M){cO=cD.length-1;}
;var cP=cD.getItem(cO);if(cP===undefined){qx.data.SingleValueBinding.__bh(cL,cJ);}
;var cN=e.getData().start;var cM=e.getData().end;if(cO<cN||cO>cM){return;}
;}
else {var cP=e.getData();}
;{}
;cP=qx.data.SingleValueBinding.__bo(cP,cL,cJ,cH,cD);{}
;try{if(cP!==undefined){qx.data.SingleValueBinding.__bi(cL,cJ,cP);}
else {qx.data.SingleValueBinding.__bh(cL,cJ);}
;if(cH&&cH.onUpdate){cH.onUpdate(cD,cL,cP);}
;}
catch(cQ){if(!(cQ instanceof qx.core.ValidationError)){throw cQ;}
;if(cH&&cH.onSetFail){cH.onSetFail(cQ);}
else {qx.log.Logger.warn(q+cP+G+cL+a+cQ);}
;}
;}
;if(!cF){cF=y;}
;cI=qx.lang.Function.bind(cI,cD,cF);var cK=cD.addListener(cG,cI);return cK;}
,__bn:function(cV,cR,cU,cS,cT){if(this.__bd[cR.toHashCode()]===undefined){this.__bd[cR.toHashCode()]=[];}
;this.__bd[cR.toHashCode()].push([cV,cR,cU,cS,cT]);}
,__bo:function(da,df,cY,db,cW){if(db&&db.converter){var dc;if(df.getModel){dc=df.getModel();}
;return db.converter(da,dc,cW,df);}
else {var cX=this.__bj(df,cY);var dg=cY.substring(cY.lastIndexOf(C)+1,cY.length);if(cX==null){return da;}
;var dd=qx.Class.getPropertyDefinition(cX.constructor,dg);var de=dd==null?y:dd.check;return this.__bq(da,de);}
;}
,__bp:function(dh,dj){var di=qx.Class.getPropertyDefinition(dh.constructor,dj);if(di==null){return null;}
;return di.event;}
,__bq:function(dm,dl){var dk=qx.lang.Type.getClass(dm);if((dk==I||dk==w)&&(dl==k||dl==D)){dm=parseInt(dm,10);}
;if((dk==b||dk==I||dk==K)&&dl==w){dm=dm+y;}
;if((dk==I||dk==w)&&(dl==I||dl==z)){dm=parseFloat(dm);}
;return dm;}
,removeBindingFromObject:function(dn,dq){if(dq.type==d){for(var i=0;i<dq.sources.length;i++ ){if(dq.sources[i]){dq.sources[i].removeListenerById(dq.listenerIds[i]);}
;}
;for(var i=0;i<dq.targets.length;i++ ){if(dq.targets[i]){dq.targets[i].removeListenerById(dq.targetListenerIds[i]);}
;}
;}
else {dn.removeListenerById(dq);}
;var dp=this.__bd[dn.toHashCode()];if(dp!=undefined){for(var i=0;i<dp.length;i++ ){if(dp[i][0]==dq){qx.lang.Array.remove(dp,dp[i]);return;}
;}
;}
;throw new Error(s);}
,removeAllBindingsForObject:function(ds){{}
;var dr=this.__bd[ds.toHashCode()];if(dr!=undefined){for(var i=dr.length-1;i>=0;i-- ){this.removeBindingFromObject(ds,dr[i][0]);}
;}
;}
,getAllBindingsForObject:function(dt){if(this.__bd[dt.toHashCode()]===undefined){this.__bd[dt.toHashCode()]=[];}
;return this.__bd[dt.toHashCode()];}
,removeAllBindings:function(){for(var dv in this.__bd){var du=qx.core.ObjectRegistry.fromHashCode(dv);if(du==null){delete this.__bd[dv];continue;}
;this.removeAllBindingsForObject(du);}
;this.__bd={};}
,getAllBindings:function(){return this.__bd;}
,showBindingInLog:function(dx,dz){var dy;for(var i=0;i<this.__bd[dx.toHashCode()].length;i++ ){if(this.__bd[dx.toHashCode()][i][0]==dz){dy=this.__bd[dx.toHashCode()][i];break;}
;}
;if(dy===undefined){var dw=H;}
else {var dw=x+dy[1]+F+dy[2]+f+dy[3]+F+dy[4]+J;}
;qx.log.Logger.debug(dw);}
,showAllBindingsInLog:function(){for(var dB in this.__bd){var dA=qx.core.ObjectRegistry.fromHashCode(dB);for(var i=0;i<this.__bd[dB].length;i++ ){this.showBindingInLog(dA,this.__bd[dB][i][0]);}
;}
;}
}});}
)();
(function(){var a="-",b="]",c='\\u',d="undefined",e="",f='\\$1',g="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h="\\\\",j='-',k="g",l="\\\"",m="qx.lang.String",n="(^|[^",o="0",p="%",q='"',r=' ',s='\n',t="])[";qx.Bootstrap.define(m,{statics:{__br:g,__bs:null,__bt:{},camelCase:function(v){var u=this.__bt[v];if(!u){u=v.replace(/\-([a-z])/g,function(x,w){return w.toUpperCase();}
);if(v.indexOf(a)>=0){this.__bt[v]=u;}
;}
;return u;}
,hyphenate:function(z){var y=this.__bt[z];if(!y){y=z.replace(/[A-Z]/g,function(A){return (j+A.charAt(0).toLowerCase());}
);if(z.indexOf(a)==-1){this.__bt[z]=y;}
;}
;return y;}
,capitalize:function(C){if(this.__bs===null){var B=c;this.__bs=new RegExp(n+this.__br.replace(/[0-9A-F]{4}/g,function(D){return B+D;}
)+t+this.__br.replace(/[0-9A-F]{4}/g,function(E){return B+E;}
)+b,k);}
;return C.replace(this.__bs,function(F){return F.toUpperCase();}
);}
,clean:function(G){return G.replace(/\s+/g,r).trim();}
,trimLeft:function(H){return H.replace(/^\s+/,e);}
,trimRight:function(I){return I.replace(/\s+$/,e);}
,startsWith:function(K,J){return K.indexOf(J)===0;}
,endsWith:function(M,L){return M.substring(M.length-L.length,M.length)===L;}
,repeat:function(N,O){return N.length>0?new Array(O+1).join(N):e;}
,pad:function(Q,length,P){var R=length-Q.length;if(R>0){if(typeof P===d){P=o;}
;return this.repeat(P,R)+Q;}
else {return Q;}
;}
,firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(T,S){return T.indexOf(S)!=-1;}
,format:function(U,V){var W=U;var i=V.length;while(i-- ){W=W.replace(new RegExp(p+(i+1),k),V[i]+e);}
;return W;}
,escapeRegexpChars:function(X){return X.replace(/([.*+?^${}()|[\]\/\\])/g,f);}
,toArray:function(Y){return Y.split(/\B|\b/g);}
,stripTags:function(ba){return ba.replace(/<\/?[^>]+>/gi,e);}
,stripScripts:function(bd,bc){var be=e;var bb=bd.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){be+=arguments[1]+s;return e;}
);if(bc===true){qx.lang.Function.globalEval(be);}
;return bb;}
,quote:function(bf){return q+bf.replace(/\\/g,h).replace(/\"/g,l)+q;}
}});}
)();
(function(){var a="mshtml",b="engine.name",c="[object Array]",d="qx.lang.Array",e="Cannot clean-up map entry doneObjects[",f="]",g="qx",h="number",j="][",k="string";qx.Bootstrap.define(d,{statics:{cast:function(m,o,p){if(m.constructor===o){return m;}
;if(qx.data&&qx.data.IListData){if(qx.Class&&qx.Class.hasInterface(m,qx.data.IListData)){var m=m.toArray();}
;}
;var n=new o;if((qx.core.Environment.get(b)==a)){if(m.item){for(var i=p||0,l=m.length;i<l;i++ ){n.push(m[i]);}
;return n;}
;}
;if(Object.prototype.toString.call(m)===c&&p==null){n.push.apply(n,m);}
else {n.push.apply(n,Array.prototype.slice.call(m,p||0));}
;return n;}
,fromArguments:function(q,r){return Array.prototype.slice.call(q,r||0);}
,fromCollection:function(t){if((qx.core.Environment.get(b)==a)){if(t.item){var s=[];for(var i=0,l=t.length;i<l;i++ ){s[i]=t[i];}
;return s;}
;}
;return Array.prototype.slice.call(t,0);}
,fromShortHand:function(u){var w=u.length;var v=qx.lang.Array.clone(u);switch(w){case 1:v[1]=v[2]=v[3]=v[0];break;case 2:v[2]=v[0];case 3:v[3]=v[1];};return v;}
,clone:function(x){return x.concat();}
,insertAt:function(y,z,i){y.splice(i,0,z);return y;}
,insertBefore:function(A,C,B){var i=A.indexOf(B);if(i==-1){A.push(C);}
else {A.splice(i,0,C);}
;return A;}
,insertAfter:function(D,F,E){var i=D.indexOf(E);if(i==-1||i==(D.length-1)){D.push(F);}
else {D.splice(i+1,0,F);}
;return D;}
,removeAt:function(G,i){return G.splice(i,1)[0];}
,removeAll:function(H){H.length=0;return this;}
,append:function(J,I){{}
;Array.prototype.push.apply(J,I);return J;}
,exclude:function(M,L){{}
;for(var i=0,N=L.length,K;i<N;i++ ){K=M.indexOf(L[i]);if(K!=-1){M.splice(K,1);}
;}
;return M;}
,remove:function(O,P){var i=O.indexOf(P);if(i!=-1){O.splice(i,1);return P;}
;}
,contains:function(Q,R){return Q.indexOf(R)!==-1;}
,equals:function(T,S){var length=T.length;if(length!==S.length){return false;}
;for(var i=0;i<length;i++ ){if(T[i]!==S[i]){return false;}
;}
;return true;}
,sum:function(U){var V=0;for(var i=0,l=U.length;i<l;i++ ){V+=U[i];}
;return V;}
,max:function(W){{}
;var i,Y=W.length,X=W[0];for(i=1;i<Y;i++ ){if(W[i]>X){X=W[i];}
;}
;return X===undefined?null:X;}
,min:function(ba){{}
;var i,bc=ba.length,bb=ba[0];for(i=1;i<bc;i++ ){if(ba[i]<bb){bb=ba[i];}
;}
;return bb===undefined?null:bb;}
,unique:function(bf){var bp=[],be={},bi={},bk={};var bj,bd=0;var bn=g+Date.now();var bg=false,bl=false,bo=false;for(var i=0,bm=bf.length;i<bm;i++ ){bj=bf[i];if(bj===null){if(!bg){bg=true;bp.push(bj);}
;}
else if(bj===undefined){}
else if(bj===false){if(!bl){bl=true;bp.push(bj);}
;}
else if(bj===true){if(!bo){bo=true;bp.push(bj);}
;}
else if(typeof bj===k){if(!be[bj]){be[bj]=1;bp.push(bj);}
;}
else if(typeof bj===h){if(!bi[bj]){bi[bj]=1;bp.push(bj);}
;}
else {var bh=bj[bn];if(bh==null){bh=bj[bn]=bd++ ;}
;if(!bk[bh]){bk[bh]=bj;bp.push(bj);}
;}
;}
;for(var bh in bk){try{delete bk[bh][bn];}
catch(bq){try{bk[bh][bn]=null;}
catch(br){throw new Error(e+bh+j+bn+f);}
;}
;}
;return bp;}
}});}
)();
(function(){var a="[object Opera]",b="function",c="[^\\.0-9]",d="4.0",e="gecko",f="1.9.0.0",g="Version/",h="9.0",i="8.0",j="Gecko",k="Maple",l="AppleWebKit/",m="Trident",n="Unsupported client: ",o="",p="opera",q="engine.version",r="! Assumed gecko version 1.9.0.0 (Firefox 3.0).",s="mshtml",t="engine.name",u="webkit",v="5.0",w=".",x="qx.bom.client.Engine";qx.Bootstrap.define(x,{statics:{getVersion:function(){var A=window.navigator.userAgent;var B=o;if(qx.bom.client.Engine.__bu()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(A)){if(A.indexOf(g)!=-1){var D=A.match(/Version\/(\d+)\.(\d+)/);B=D[1]+w+D[2].charAt(0)+w+D[2].substring(1,D[2].length);}
else {B=RegExp.$1+w+RegExp.$2;if(RegExp.$3!=o){B+=w+RegExp.$3;}
;}
;}
;}
else if(qx.bom.client.Engine.__bv()){if(/AppleWebKit\/([^ ]+)/.test(A)){B=RegExp.$1;var C=RegExp(c).exec(B);if(C){B=B.slice(0,C.index);}
;}
;}
else if(qx.bom.client.Engine.__bx()||qx.bom.client.Engine.__bw()){if(/rv\:([^\);]+)(\)|;)/.test(A)){B=RegExp.$1;}
;}
else if(qx.bom.client.Engine.__by()){var z=/Trident\/([^\);]+)(\)|;)/.test(A);if(/MSIE\s+([^\);]+)(\)|;)/.test(A)){B=RegExp.$1;if(B<8&&z){if(RegExp.$1==d){B=i;}
else if(RegExp.$1==v){B=h;}
;}
;}
else if(z){var D=/\brv\:(\d+?\.\d+?)\b/.exec(A);if(D){B=D[1];}
;}
;}
else {var y=window.qxFail;if(y&&typeof y===b){B=y().FULLVERSION;}
else {B=f;qx.Bootstrap.warn(n+A+r);}
;}
;return B;}
,getName:function(){var name;if(qx.bom.client.Engine.__bu()){name=p;}
else if(qx.bom.client.Engine.__bv()){name=u;}
else if(qx.bom.client.Engine.__bx()||qx.bom.client.Engine.__bw()){name=e;}
else if(qx.bom.client.Engine.__by()){name=s;}
else {var E=window.qxFail;if(E&&typeof E===b){name=E().NAME;}
else {name=e;qx.Bootstrap.warn(n+window.navigator.userAgent+r);}
;}
;return name;}
,__bu:function(){return window.opera&&Object.prototype.toString.call(window.opera)==a;}
,__bv:function(){return window.navigator.userAgent.indexOf(l)!=-1;}
,__bw:function(){return window.navigator.userAgent.indexOf(k)!=-1;}
,__bx:function(){return window.controllers&&window.navigator.product===j&&window.navigator.userAgent.indexOf(k)==-1&&window.navigator.userAgent.indexOf(m)==-1;}
,__by:function(){return window.navigator.cpuClass&&(/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent)||/Trident\/\d+?\.\d+?/.test(window.navigator.userAgent));}
},defer:function(F){qx.core.Environment.add(q,F.getVersion);qx.core.Environment.add(t,F.getName);}
});}
)();
(function(){var a='anonymous()',b="()",c="qx.lang.Function",d=".",e=".prototype.",f=".constructor()";qx.Bootstrap.define(c,{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;}
,getName:function(h){if(h.displayName){return h.displayName;}
;if(h.$$original||h.wrapper||h.classname){return h.classname+f;}
;if(h.$$mixin){for(var i in h.$$mixin.$$members){if(h.$$mixin.$$members[i]==h){return h.$$mixin.name+e+i+b;}
;}
;for(var i in h.$$mixin){if(h.$$mixin[i]==h){return h.$$mixin.name+d+i+b;}
;}
;}
;if(h.self){var k=h.self.constructor;if(k){for(var i in k.prototype){if(k.prototype[i]==h){return k.classname+e+i+b;}
;}
;for(var i in k){if(k[i]==h){return k.classname+d+i+b;}
;}
;}
;}
;var j=h.toString().match(/function\s*(\w*)\s*\(.*/);if(j&&j.length>=1&&j[1]){return j[1]+b;}
;return a;}
,globalEval:function(data){if(window.execScript){return window.execScript(data);}
else {return eval.call(window,data);}
;}
,create:function(m,l){{}
;if(!l){return m;}
;if(!(l.self||l.args||l.delay!=null||l.periodical!=null||l.attempt)){return m;}
;return function(event){{}
;var o=qx.lang.Array.fromArguments(arguments);if(l.args){o=l.args.concat(o);}
;if(l.delay||l.periodical){var n=function(){return m.apply(l.self||this,o);}
;{}
;if(l.delay){return window.setTimeout(n,l.delay);}
;if(l.periodical){return window.setInterval(n,l.periodical);}
;}
else if(l.attempt){var p=false;try{p=m.apply(l.self||this,o);}
catch(q){}
;return p;}
else {return m.apply(l.self||this,o);}
;}
;}
,bind:function(r,self,s){return this.create(r,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});}
,curry:function(t,u){return this.create(t,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});}
,listener:function(w,self,x){if(arguments.length<3){return function(event){return w.call(self||this,event||window.event);}
;}
else {var v=qx.lang.Array.fromArguments(arguments,2);return function(event){var y=[event||window.event];y.push.apply(y,v);w.apply(self||this,y);}
;}
;}
,attempt:function(z,self,A){return this.create(z,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();}
,delay:function(C,B,self,D){return this.create(C,{delay:B,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();}
,periodical:function(F,E,self,G){return this.create(F,{periodical:E,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();}
}});}
)();
(function(){var a="qx.event.type.Data",b="qx.event.type.Event",c="qx.data.IListData";qx.Interface.define(c,{events:{"change":a,"changeLength":b},members:{getItem:function(d){}
,setItem:function(e,f){}
,splice:function(g,h,i){}
,contains:function(j){}
,getLength:function(){}
,toArray:function(){}
}});}
)();
(function(){var a=": ",b="qx.type.BaseError",c="",d="error";qx.Class.define(b,{extend:Error,construct:function(e,f){var g=Error.call(this,f);if(g.stack){this.stack=g.stack;}
;if(g.stacktrace){this.stacktrace=g.stacktrace;}
;this.__bN=e||c;this.message=f||qx.type.BaseError.DEFAULTMESSAGE;}
,statics:{DEFAULTMESSAGE:d},members:{__bO:null,__bN:null,message:null,getComment:function(){return this.__bN;}
,toString:function(){return this.__bN+(this.message?a+this.message:c);}
}});}
)();
(function(){var a="qx.core.AssertionError";qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);this.__bP=qx.dev.StackTrace.getStackTrace();}
,members:{__bP:null,getStackTrace:function(){return this.__bP;}
}});}
)();
(function(){var a="anonymous",b="...",c="qx.dev.StackTrace",d="",e="\n",f="?",g="/source/class/",h="Error created at",j="ecmascript.error.stacktrace",k="Backtrace:",l="stack",m=":",n=".",o="function",p="prototype",q="stacktrace";qx.Bootstrap.define(c,{statics:{FILENAME_TO_CLASSNAME:null,FORMAT_STACKTRACE:null,getStackTrace:function(){var t=[];try{throw new Error();}
catch(G){if(qx.dev.StackTrace.hasEnvironmentCheck&&qx.core.Environment.get(j)){var y=qx.dev.StackTrace.getStackTraceFromError(G);var B=qx.dev.StackTrace.getStackTraceFromCaller(arguments);qx.lang.Array.removeAt(y,0);t=B.length>y.length?B:y;for(var i=0;i<Math.min(B.length,y.length);i++ ){var w=B[i];if(w.indexOf(a)>=0){continue;}
;var s=null;var C=w.split(n);var v=/(.*?)\(/.exec(C[C.length-1]);if(v&&v.length==2){s=v[1];C.pop();}
;if(C[C.length-1]==p){C.pop();}
;var E=C.join(n);var u=y[i];var F=u.split(m);var A=F[0];var z=F[1];var r;if(F[2]){r=F[2];}
;var x=null;if(qx.Class.getByName(A)){x=A;}
else {x=E;}
;var D=x;if(s){D+=n+s;}
;D+=m+z;if(r){D+=m+r;}
;t[i]=D;}
;}
else {t=this.getStackTraceFromCaller(arguments);}
;}
;return t;}
,getStackTraceFromCaller:function(K){var J=[];var M=qx.lang.Function.getCaller(K);var H={};while(M){var L=qx.lang.Function.getName(M);J.push(L);try{M=M.caller;}
catch(N){break;}
;if(!M){break;}
;var I=qx.core.ObjectRegistry.toHashCode(M);if(H[I]){J.push(b);break;}
;H[I]=M;}
;return J;}
,getStackTraceFromError:function(bd){var T=[];var R,S,ba,Q,P,bf,bb;var bc=qx.dev.StackTrace.hasEnvironmentCheck?qx.core.Environment.get(j):null;if(bc===l){if(!bd.stack){return T;}
;R=/@(.+):(\d+)$/gm;while((S=R.exec(bd.stack))!=null){bb=S[1];Q=S[2];ba=this.__bQ(bb);T.push(ba+m+Q);}
;if(T.length>0){return this.__bS(T);}
;R=/at (.*)/gm;var be=/\((.*?)(:[^\/].*)\)/;var Y=/(.*?)(:[^\/].*)/;while((S=R.exec(bd.stack))!=null){var X=be.exec(S[1]);if(!X){X=Y.exec(S[1]);}
;if(X){ba=this.__bQ(X[1]);T.push(ba+X[2]);}
else {T.push(S[1]);}
;}
;}
else if(bc===q){var U=bd.stacktrace;if(!U){return T;}
;if(U.indexOf(h)>=0){U=U.split(h)[0];}
;R=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;while((S=R.exec(U))!=null){Q=S[1];P=S[2];bb=S[3];ba=this.__bQ(bb);T.push(ba+m+Q+m+P);}
;if(T.length>0){return this.__bS(T);}
;R=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;while((S=R.exec(U))!=null){Q=S[1];bb=S[2];ba=this.__bQ(bb);T.push(ba+m+Q);}
;}
else if(bd.message&&bd.message.indexOf(k)>=0){var W=bd.message.split(k)[1].trim();var V=W.split(e);for(var i=0;i<V.length;i++ ){var O=V[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);if(O&&O.length>=2){Q=O[1];bf=this.__bQ(O[2]);T.push(bf+m+Q);}
;}
;}
else if(bd.sourceURL&&bd.line){T.push(this.__bQ(bd.sourceURL)+m+bd.line);}
;return this.__bS(T);}
,__bQ:function(bh){if(typeof qx.dev.StackTrace.FILENAME_TO_CLASSNAME==o){var bg=qx.dev.StackTrace.FILENAME_TO_CLASSNAME(bh);{}
;return bg;}
;return qx.dev.StackTrace.__bR(bh);}
,__bR:function(bk){var bl=g;var bi=bk.indexOf(bl);var bm=bk.indexOf(f);if(bm>=0){bk=bk.substring(0,bm);}
;var bj=(bi==-1)?bk:bk.substring(bi+bl.length).replace(/\//g,n).replace(/\.js$/,d);return bj;}
,__bS:function(bn){if(typeof qx.dev.StackTrace.FORMAT_STACKTRACE==o){bn=qx.dev.StackTrace.FORMAT_STACKTRACE(bn);{}
;}
;return bn;}
},defer:function(bo){bo.hasEnvironmentCheck=qx.bom.client.EcmaScript&&qx.bom.client.EcmaScript.getStackTrace;}
});}
)();
(function(){var c="-",d="",e="qx.core.ObjectRegistry",f="Disposed ",g="$$hash",h="-0",j=" objects",k="Could not dispose object ",m=": ";qx.Bootstrap.define(e,{statics:{inShutDown:false,__k:{},__bT:0,__bU:[],__bV:d,__bW:{},register:function(n){var q=this.__k;if(!q){return;}
;var p=n.$$hash;if(p==null){var o=this.__bU;if(o.length>0&&true){p=o.pop();}
else {p=(this.__bT++ )+this.__bV;}
;n.$$hash=p;{}
;}
;{}
;q[p]=n;}
,unregister:function(r){var s=r.$$hash;if(s==null){return;}
;var t=this.__k;if(t&&t[s]){delete t[s];this.__bU.push(s);}
;try{delete r.$$hash;}
catch(u){if(r.removeAttribute){r.removeAttribute(g);}
;}
;}
,toHashCode:function(v){{}
;var x=v.$$hash;if(x!=null){return x;}
;var w=this.__bU;if(w.length>0){x=w.pop();}
else {x=(this.__bT++ )+this.__bV;}
;return v.$$hash=x;}
,clearHashCode:function(y){{}
;var z=y.$$hash;if(z!=null){this.__bU.push(z);try{delete y.$$hash;}
catch(A){if(y.removeAttribute){y.removeAttribute(g);}
;}
;}
;}
,fromHashCode:function(B){return this.__k[B]||null;}
,shutdown:function(){this.inShutDown=true;var D=this.__k;var F=[];for(var C in D){F.push(C);}
;F.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);}
);var E,i=0,l=F.length;while(true){try{for(;i<l;i++ ){C=F[i];E=D[C];if(E&&E.dispose){E.dispose();}
;}
;}
catch(G){qx.Bootstrap.error(this,k+E.toString()+m+G,G);if(i!==l){i++ ;continue;}
;}
;break;}
;qx.Bootstrap.debug(this,f+l+j);delete this.__k;}
,getRegistry:function(){return this.__k;}
,getNextHash:function(){return this.__bT;}
,getPostId:function(){return this.__bV;}
,getStackTraces:function(){return this.__bW;}
},defer:function(H){if(window&&window.top){var frames=window.top.frames;for(var i=0;i<frames.length;i++ ){if(frames[i]===window){H.__bV=c+(i+1);return;}
;}
;}
;H.__bV=h;}
});}
)();
(function(){var a="qx.core.ValidationError";qx.Class.define(a,{extend:qx.type.BaseError});}
)();
(function(){var a="qx.util.RingBuffer";qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);}
,members:{__cf:0,__cg:0,__ch:false,__ci:0,__cj:null,__ck:null,setMaxEntries:function(c){this.__ck=c;this.clear();}
,getMaxEntries:function(){return this.__ck;}
,addEntry:function(d){this.__cj[this.__cf]=d;this.__cf=this.__cl(this.__cf,1);var e=this.getMaxEntries();if(this.__cg<e){this.__cg++ ;}
;if(this.__ch&&(this.__ci<e)){this.__ci++ ;}
;}
,mark:function(){this.__ch=true;this.__ci=0;}
,clearMark:function(){this.__ch=false;}
,getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);}
,getEntries:function(f,j){if(f>this.__cg){f=this.__cg;}
;if(j&&this.__ch&&(f>this.__ci)){f=this.__ci;}
;if(f>0){var h=this.__cl(this.__cf,-1);var g=this.__cl(h,-f+1);var i;if(g<=h){i=this.__cj.slice(g,h+1);}
else {i=this.__cj.slice(g,this.__cg).concat(this.__cj.slice(0,h+1));}
;}
else {i=[];}
;return i;}
,clear:function(){this.__cj=new Array(this.getMaxEntries());this.__cg=0;this.__ci=0;this.__cf=0;}
,__cl:function(n,l){var k=this.getMaxEntries();var m=(n+l)%k;if(m<0){m+=k;}
;return m;}
}});}
)();
(function(){var a="qx.log.appender.RingBuffer";qx.Class.define(a,{extend:qx.util.RingBuffer,construct:function(b){this.setMaxMessages(b||50);}
,members:{setMaxMessages:function(c){this.setMaxEntries(c);}
,getMaxMessages:function(){return this.getMaxEntries();}
,process:function(d){this.addEntry(d);}
,getAllLogEvents:function(){return this.getAllEntries();}
,retrieveLogEvents:function(e,f){return this.getEntries(e,f);}
,clearHistory:function(){this.clear();}
}});}
)();
(function(){var a="qx.log.Logger",b="[",c="...(+",d="array",e=")",f="info",g="node",h="instance",j="string",k="null",m="error",n="#",o="class",p=": ",q="warn",r="document",s="{...(",t="",u="number",v="stringify",w="]",x="date",y="unknown",z="function",A="text[",B="[...(",C="boolean",D="\n",E=")}",F="debug",G=")]",H="map",I="undefined",J="object";qx.Class.define(a,{statics:{__cm:F,setLevel:function(K){this.__cm=K;}
,getLevel:function(){return this.__cm;}
,setTreshold:function(L){this.__cp.setMaxMessages(L);}
,getTreshold:function(){return this.__cp.getMaxMessages();}
,__cn:{},__co:0,register:function(P){if(P.$$id){return;}
;var M=this.__co++ ;this.__cn[M]=P;P.$$id=M;var N=this.__cq;var O=this.__cp.getAllLogEvents();for(var i=0,l=O.length;i<l;i++ ){if(N[O[i].level]>=N[this.__cm]){P.process(O[i]);}
;}
;}
,unregister:function(Q){var R=Q.$$id;if(R==null){return;}
;delete this.__cn[R];delete Q.$$id;}
,debug:function(T,S){qx.log.Logger.__cr(F,arguments);}
,info:function(V,U){qx.log.Logger.__cr(f,arguments);}
,warn:function(X,W){qx.log.Logger.__cr(q,arguments);}
,error:function(ba,Y){qx.log.Logger.__cr(m,arguments);}
,trace:function(bb){var bc=qx.dev.StackTrace.getStackTrace();qx.log.Logger.__cr(f,[(typeof bb!==I?[bb].concat(bc):bc).join(D)]);}
,deprecatedMethodWarning:function(bf,bd){{var be;}
;}
,deprecatedClassWarning:function(bi,bg){{var bh;}
;}
,deprecatedEventWarning:function(bl,event,bj){{var bk;}
;}
,deprecatedMixinWarning:function(bn,bm){{var bo;}
;}
,deprecatedConstantWarning:function(bs,bq,bp){{var self,br;}
;}
,deprecateMethodOverriding:function(bv,bu,bw,bt){{var bx;}
;}
,clear:function(){this.__cp.clearHistory();}
,__cp:new qx.log.appender.RingBuffer(50),__cq:{debug:0,info:1,warn:2,error:3},__cr:function(bz,bB){var bE=this.__cq;if(bE[bz]<bE[this.__cm]){return;}
;var by=bB.length<2?null:bB[0];var bD=by?1:0;var bA=[];for(var i=bD,l=bB.length;i<l;i++ ){bA.push(this.__ct(bB[i],true));}
;var bF=new Date;var bG={time:bF,offset:bF-qx.Bootstrap.LOADSTART,level:bz,items:bA,win:window};if(by){if(by.$$hash!==undefined){bG.object=by.$$hash;}
else if(by.$$type){bG.clazz=by;}
;}
;this.__cp.process(bG);var bC=this.__cn;for(var bH in bC){bC[bH].process(bG);}
;}
,__cs:function(bJ){if(bJ===undefined){return I;}
else if(bJ===null){return k;}
;if(bJ.$$type){return o;}
;var bI=typeof bJ;if(bI===z||bI==j||bI===u||bI===C){return bI;}
else if(bI===J){if(bJ.nodeType){return g;}
else if(bJ instanceof Error||(bJ.name&&bJ.message)){return m;}
else if(bJ.classname){return h;}
else if(bJ instanceof Array){return d;}
else if(bJ instanceof Date){return x;}
else {return H;}
;}
;if(bJ.toString){return v;}
;return y;}
,__ct:function(bP,bO){var bS=this.__cs(bP);var bM=y;var bL=[];switch(bS){case k:case I:bM=bS;break;case j:case u:case C:case x:bM=bP;break;case g:if(bP.nodeType===9){bM=r;}
else if(bP.nodeType===3){bM=A+bP.nodeValue+w;}
else if(bP.nodeType===1){bM=bP.nodeName.toLowerCase();if(bP.id){bM+=n+bP.id;}
;}
else {bM=g;}
;break;case z:bM=qx.lang.Function.getName(bP)||bS;break;case h:bM=bP.basename+b+bP.$$hash+w;break;case o:case v:bM=bP.toString();break;case m:bL=qx.dev.StackTrace.getStackTraceFromError(bP);bM=(bP.basename?bP.basename+p:t)+bP.toString();break;case d:if(bO){bM=[];for(var i=0,l=bP.length;i<l;i++ ){if(bM.length>20){bM.push(c+(l-i)+e);break;}
;bM.push(this.__ct(bP[i],false));}
;}
else {bM=B+bP.length+G;}
;break;case H:if(bO){var bK;var bR=[];for(var bQ in bP){bR.push(bQ);}
;bR.sort();bM=[];for(var i=0,l=bR.length;i<l;i++ ){if(bM.length>20){bM.push(c+(l-i)+e);break;}
;bQ=bR[i];bK=this.__ct(bP[bQ],false);bK.key=bQ;bM.push(bK);}
;}
else {var bN=0;for(var bQ in bP){bN++ ;}
;bM=s+bN+E;}
;break;};return {type:bS,text:bM,trace:bL};}
},defer:function(bT){var bU=qx.Bootstrap.$$logs;for(var i=0;i<bU.length;i++ ){bT.__cr(bU[i][0],bU[i][1]);}
;qx.Bootstrap.debug=bT.debug;qx.Bootstrap.info=bT.info;qx.Bootstrap.warn=bT.warn;qx.Bootstrap.error=bT.error;qx.Bootstrap.trace=bT.trace;}
});}
)();
(function(){var a="qx.lang.Type",b="Error",c="RegExp",d="Date",e="Number",f="Boolean";qx.Bootstrap.define(a,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==c;}
,isNumber:function(h){return (h!==null&&(this.getClass(h)==e||h instanceof Number));}
,isBoolean:function(i){return (i!==null&&(this.getClass(i)==f||i instanceof Boolean));}
,isDate:function(j){return (j!==null&&(this.getClass(j)==d||j instanceof Date));}
,isError:function(k){return (k!==null&&(this.getClass(k)==b||k instanceof Error));}
}});}
)();
(function(){var a="qx.core.MProperty",b="get",c="reset",d="No such property: ",e="set";qx.Mixin.define(a,{members:{set:function(g,h){var f=qx.core.Property.$$method.set;if(qx.Bootstrap.isString(g)){if(!this[f[g]]){if(this[e+qx.Bootstrap.firstUp(g)]!=undefined){this[e+qx.Bootstrap.firstUp(g)](h);return this;}
;throw new Error(d+g);}
;return this[f[g]](h);}
else {for(var i in g){if(!this[f[i]]){if(this[e+qx.Bootstrap.firstUp(i)]!=undefined){this[e+qx.Bootstrap.firstUp(i)](g[i]);continue;}
;throw new Error(d+i);}
;this[f[i]](g[i]);}
;return this;}
;}
,get:function(k){var j=qx.core.Property.$$method.get;if(!this[j[k]]){if(this[b+qx.Bootstrap.firstUp(k)]!=undefined){return this[b+qx.Bootstrap.firstUp(k)]();}
;throw new Error(d+k);}
;return this[j[k]]();}
,reset:function(m){var l=qx.core.Property.$$method.reset;if(!this[l[m]]){if(this[c+qx.Bootstrap.firstUp(m)]!=undefined){this[c+qx.Bootstrap.firstUp(m)]();return;}
;throw new Error(d+m);}
;this[l[m]]();}
}});}
)();
(function(){var a="info",b="debug",c="warn",d="qx.core.MLogging",e="error";qx.Mixin.define(d,{members:{__cu:qx.log.Logger,debug:function(f){this.__cv(b,arguments);}
,info:function(g){this.__cv(a,arguments);}
,warn:function(h){this.__cv(c,arguments);}
,error:function(i){this.__cv(e,arguments);}
,trace:function(){this.__cu.trace(this);}
,__cv:function(j,l){var k=qx.lang.Array.fromArguments(l);k.unshift(this);this.__cu[j].apply(this.__cu,k);}
}});}
)();
(function(){var b="qx.dom.Node",c="";qx.Bootstrap.define(b,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(d){return d.nodeType===this.DOCUMENT?d:d.ownerDocument||d.document;}
,getWindow:function(e){if(e.nodeType==null){return e;}
;if(e.nodeType!==this.DOCUMENT){e=e.ownerDocument;}
;return e.defaultView||e.parentWindow;}
,getDocumentElement:function(f){return this.getDocument(f).documentElement;}
,getBodyElement:function(g){return this.getDocument(g).body;}
,isNode:function(h){return !!(h&&h.nodeType!=null);}
,isElement:function(j){return !!(j&&j.nodeType===this.ELEMENT);}
,isDocument:function(k){return !!(k&&k.nodeType===this.DOCUMENT);}
,isText:function(l){return !!(l&&l.nodeType===this.TEXT);}
,isWindow:function(m){return !!(m&&m.history&&m.location&&m.document);}
,isNodeName:function(n,o){if(!o||!n||!n.nodeName){return false;}
;return o.toLowerCase()==qx.dom.Node.getName(n);}
,getName:function(p){if(!p||!p.nodeName){return null;}
;return p.nodeName.toLowerCase();}
,getText:function(q){if(!q||!q.nodeType){return null;}
;switch(q.nodeType){case 1:var i,a=[],r=q.childNodes,length=r.length;for(i=0;i<length;i++ ){a[i]=this.getText(r[i]);}
;return a.join(c);case 2:case 3:case 4:return q.nodeValue;};return null;}
,isBlockNode:function(s){if(!qx.dom.Node.isElement(s)){return false;}
;s=qx.dom.Node.getName(s);return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(s);}
}});}
)();
(function(){var a="HTMLEvents",b="engine.name",c="",d="qx.bom.Event",f="return;",g="function",h="mouseover",j="transitionend",k="gecko",m="css.transition",n="on",o="undefined",p="end-event";qx.Bootstrap.define(d,{statics:{addNativeListener:function(t,s,q,r){if(t.addEventListener){t.addEventListener(s,q,!!r);}
else if(t.attachEvent){t.attachEvent(n+s,q);}
else if(typeof t[n+s]!=o){t[n+s]=q;}
else {{}
;}
;}
,removeNativeListener:function(x,w,u,v){if(x.removeEventListener){x.removeEventListener(w,u,!!v);}
else if(x.detachEvent){try{x.detachEvent(n+w,u);}
catch(e){if(e.number!==-2146828218){throw e;}
;}
;}
else if(typeof x[n+w]!=o){x[n+w]=null;}
else {{}
;}
;}
,getTarget:function(e){return e.target||e.srcElement;}
,getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(b)==k)){try{e.relatedTarget&&e.relatedTarget.nodeType;}
catch(y){return null;}
;}
;return e.relatedTarget;}
else if(e.fromElement!==undefined&&e.type===h){return e.fromElement;}
else if(e.toElement!==undefined){return e.toElement;}
else {return null;}
;}
,preventDefault:function(e){if(e.preventDefault){e.preventDefault();}
else {try{e.keyCode=0;}
catch(z){}
;e.returnValue=false;}
;}
,stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();}
else {e.cancelBubble=true;}
;}
,fire:function(C,A){if(document.createEvent){var B=document.createEvent(a);B.initEvent(A,true,true);return !C.dispatchEvent(B);}
else {var B=document.createEventObject();return C.fireEvent(n+A,B);}
;}
,supportsEvent:function(H,G){if(H!=window&&G.toLowerCase().indexOf(j)!=-1){var F=qx.core.Environment.get(m);return (F&&F[p]==G);}
;var D=n+G.toLowerCase();var E=(D in H);if(!E){E=typeof H[D]==g;if(!E&&H.setAttribute){H.setAttribute(D,f);E=typeof H[D]==g;H.removeAttribute(D);}
;}
;return E;}
,getEventName:function(I,L){var J=[c].concat(qx.bom.Style.VENDOR_PREFIXES);for(var i=0,l=J.length;i<l;i++ ){var K=J[i].toLowerCase();if(qx.bom.Event.supportsEvent(I,K+L)){return K?K+qx.lang.String.firstUp(L):L;}
;}
;return null;}
}});}
)();
(function(){var a="-",b="qx.bom.Style",c="",d='-',e="Webkit",f="ms",g="Moz",h="O",j="string",k="Khtml";qx.Bootstrap.define(b,{statics:{VENDOR_PREFIXES:[e,g,h,f,k],__cw:{},getPropertyName:function(o){var m=document.documentElement.style;if(m[o]!==undefined){return o;}
;for(var i=0,l=this.VENDOR_PREFIXES.length;i<l;i++ ){var n=this.VENDOR_PREFIXES[i]+qx.lang.String.firstUp(o);if(m[n]!==undefined){return n;}
;}
;return null;}
,getCssName:function(p){var q=this.__cw[p];if(!q){q=p.replace(/[A-Z]/g,function(r){return (d+r.charAt(0).toLowerCase());}
);if((/^ms/.test(q))){q=a+q;}
;this.__cw[p]=q;}
;return q;}
,getAppliedStyle:function(w,u,v,t){var s=(t!==false)?[null].concat(this.VENDOR_PREFIXES):[null];for(var i=0,l=s.length;i<l;i++ ){var x=s[i]?a+s[i].toLowerCase()+a+v:v;try{w.style[u]=x;if(typeof w.style[u]==j&&w.style[u]!==c){return x;}
;}
catch(y){}
;}
;return null;}
}});}
)();
(function(){var a="qx.bom.client.CssTransition",b="E",c="transitionEnd",d="e",e="nd",f="transition",g="css.transition",h="Trans";qx.Bootstrap.define(a,{statics:{getTransitionName:function(){return qx.bom.Style.getPropertyName(f);}
,getSupport:function(){var name=qx.bom.client.CssTransition.getTransitionName();if(!name){return null;}
;var i=qx.bom.Event.getEventName(window,c);i=i==c?i.toLowerCase():i;if(!i){i=name+(name.indexOf(h)>0?b:d)+e;}
;return {name:name,"end-event":i};}
},defer:function(j){qx.core.Environment.add(g,j.getSupport);}
});}
)();
(function(){var a="UNKNOWN_",b="|bubble",c="",d="_",e="c",f="|",g="unload",h="|capture",j="DOM_",k="__cB",m="WIN_",n="QX_",o="qx.event.Manager",p="capture",q="__cC",r="DOCUMENT_";qx.Class.define(o,{extend:Object,construct:function(s,t){this.__cx=s;this.__cy=qx.core.ObjectRegistry.toHashCode(s);this.__cz=t;if(s.qx!==qx){var self=this;qx.bom.Event.addNativeListener(s,g,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,g,arguments.callee);self.dispose();}
));}
;this.__cA={};this.__cB={};this.__cC={};this.__cD={};}
,statics:{__cE:0,getNextUniqueId:function(){return (this.__cE++ )+c;}
},members:{__cz:null,__cA:null,__cC:null,__cF:null,__cB:null,__cD:null,__cx:null,__cy:null,getWindow:function(){return this.__cx;}
,getWindowId:function(){return this.__cy;}
,getHandler:function(v){var u=this.__cB[v.classname];if(u){return u;}
;return this.__cB[v.classname]=new v(this);}
,getDispatcher:function(x){var w=this.__cC[x.classname];if(w){return w;}
;return this.__cC[x.classname]=new x(this,this.__cz);}
,getListeners:function(z,D,y){var B=z.$$hash||qx.core.ObjectRegistry.toHashCode(z);var E=this.__cA[B];if(!E){return null;}
;var C=D+(y?h:b);var A=E[C];return A?A.concat():null;}
,getAllListeners:function(){return this.__cA;}
,serializeListeners:function(G){var K=G.$$hash||qx.core.ObjectRegistry.toHashCode(G);var O=this.__cA[K];var J=[];if(O){var H,N,F,I,L;for(var M in O){H=M.indexOf(f);N=M.substring(0,H);F=M.charAt(H+1)==e;I=O[M];for(var i=0,l=I.length;i<l;i++ ){L=I[i];J.push({self:L.context,handler:L.handler,type:N,capture:F});}
;}
;}
;return J;}
,toggleAttachedEvents:function(R,Q){var U=R.$$hash||qx.core.ObjectRegistry.toHashCode(R);var X=this.__cA[U];if(X){var S,W,P,T;for(var V in X){S=V.indexOf(f);W=V.substring(0,S);P=V.charCodeAt(S+1)===99;T=X[V];if(Q){this.__cG(R,W,P);}
else {this.__cH(R,W,P);}
;}
;}
;}
,hasListener:function(ba,be,Y){{}
;var bc=ba.$$hash||qx.core.ObjectRegistry.toHashCode(ba);var bf=this.__cA[bc];if(!bf){return false;}
;var bd=be+(Y?h:b);var bb=bf[bd];return !!(bb&&bb.length>0);}
,importListeners:function(bg,bi){{}
;var bm=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);var bo=this.__cA[bm]={};var bk=qx.event.Manager;for(var bh in bi){var bl=bi[bh];var bn=bl.type+(bl.capture?h:b);var bj=bo[bn];if(!bj){bj=bo[bn]=[];this.__cG(bg,bl.type,bl.capture);}
;bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__cE++ )+c});}
;}
,addListener:function(br,by,bt,self,bp){{var bv;}
;var bq=br.$$hash||qx.core.ObjectRegistry.toHashCode(br);var bz=this.__cA[bq];if(!bz){bz=this.__cA[bq]={};}
;var bu=by+(bp?h:b);var bs=bz[bu];if(!bs){bs=bz[bu]=[];}
;if(bs.length===0){this.__cG(br,by,bp);}
;var bx=(qx.event.Manager.__cE++ )+c;var bw={handler:bt,context:self,unique:bx};bs.push(bw);return bu+f+bx;}
,findHandler:function(bE,bN){var bL=false,bD=false,bO=false,bA=false;var bK;if(bE.nodeType===1){bL=true;bK=j+bE.tagName.toLowerCase()+d+bN;}
else if(bE.nodeType===9){bA=true;bK=r+bN;}
else if(bE==this.__cx){bD=true;bK=m+bN;}
else if(bE.classname){bO=true;bK=n+bE.classname+d+bN;}
else {bK=a+bE+d+bN;}
;var bC=this.__cD;if(bC[bK]){return bC[bK];}
;var bJ=this.__cz.getHandlers();var bF=qx.event.IEventHandler;var bH,bI,bG,bB;for(var i=0,l=bJ.length;i<l;i++ ){bH=bJ[i];bG=bH.SUPPORTED_TYPES;if(bG&&!bG[bN]){continue;}
;bB=bH.TARGET_CHECK;if(bB){var bM=false;if(bL&&((bB&bF.TARGET_DOMNODE)!=0)){bM=true;}
else if(bD&&((bB&bF.TARGET_WINDOW)!=0)){bM=true;}
else if(bO&&((bB&bF.TARGET_OBJECT)!=0)){bM=true;}
else if(bA&&((bB&bF.TARGET_DOCUMENT)!=0)){bM=true;}
;if(!bM){continue;}
;}
;bI=this.getHandler(bJ[i]);if(bH.IGNORE_CAN_HANDLE||bI.canHandleEvent(bE,bN)){bC[bK]=bI;return bI;}
;}
;return null;}
,__cG:function(bS,bR,bP){var bQ=this.findHandler(bS,bR);if(bQ){bQ.registerEvent(bS,bR,bP);return;}
;{}
;}
,removeListener:function(bV,cc,bX,self,bT){{var ca;}
;var bU=bV.$$hash||qx.core.ObjectRegistry.toHashCode(bV);var cd=this.__cA[bU];if(!cd){return false;}
;var bY=cc+(bT?h:b);var bW=cd[bY];if(!bW){return false;}
;var cb;for(var i=0,l=bW.length;i<l;i++ ){cb=bW[i];if(cb.handler===bX&&cb.context===self){qx.lang.Array.removeAt(bW,i);if(bW.length==0){this.__cH(bV,cc,bT);}
;return true;}
;}
;return false;}
,removeListenerById:function(cg,co){{var ck;}
;var ci=co.split(f);var cn=ci[0];var ce=ci[1].charCodeAt(0)==99;var cm=ci[2];var cf=cg.$$hash||qx.core.ObjectRegistry.toHashCode(cg);var cp=this.__cA[cf];if(!cp){return false;}
;var cj=cn+(ce?h:b);var ch=cp[cj];if(!ch){return false;}
;var cl;for(var i=0,l=ch.length;i<l;i++ ){cl=ch[i];if(cl.unique===cm){qx.lang.Array.removeAt(ch,i);if(ch.length==0){this.__cH(cg,cn,ce);}
;return true;}
;}
;return false;}
,removeAllListeners:function(cr){var ct=cr.$$hash||qx.core.ObjectRegistry.toHashCode(cr);var cw=this.__cA[ct];if(!cw){return false;}
;var cs,cv,cq;for(var cu in cw){if(cw[cu].length>0){cs=cu.split(f);cv=cs[0];cq=cs[1]===p;this.__cH(cr,cv,cq);}
;}
;delete this.__cA[ct];return true;}
,deleteAllListeners:function(cx){delete this.__cA[cx];}
,__cH:function(cB,cA,cy){var cz=this.findHandler(cB,cA);if(cz){cz.unregisterEvent(cB,cA,cy);return;}
;{}
;}
,dispatchEvent:function(cD,event){{var cH;}
;var cI=event.getType();if(!event.getBubbles()&&!this.hasListener(cD,cI)){qx.event.Pool.getInstance().poolObject(event);return true;}
;if(!event.getTarget()){event.setTarget(cD);}
;var cG=this.__cz.getDispatchers();var cF;var cC=false;for(var i=0,l=cG.length;i<l;i++ ){cF=this.getDispatcher(cG[i]);if(cF.canDispatchEvent(cD,event,cI)){cF.dispatchEvent(cD,event,cI);cC=true;break;}
;}
;if(!cC){{}
;return true;}
;var cE=event.getDefaultPrevented();qx.event.Pool.getInstance().poolObject(event);return !cE;}
,dispose:function(){this.__cz.removeManager(this);qx.util.DisposeUtil.disposeMap(this,k);qx.util.DisposeUtil.disposeMap(this,q);this.__cA=this.__cx=this.__cF=null;this.__cz=this.__cD=null;}
}});}
)();
(function(){var a="qx.event.IEventHandler";qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(c,b){}
,registerEvent:function(f,e,d){}
,unregisterEvent:function(i,h,g){}
}});}
)();
(function(){var c="qx.event.Registration";qx.Class.define(c,{statics:{__cI:{},getManager:function(f){if(f==null){{}
;f=window;}
else if(f.nodeType){f=qx.dom.Node.getWindow(f);}
else if(!qx.dom.Node.isWindow(f)){f=window;}
;var e=f.$$hash||qx.core.ObjectRegistry.toHashCode(f);var d=this.__cI[e];if(!d){d=new qx.event.Manager(f,this);this.__cI[e]=d;}
;return d;}
,removeManager:function(g){var h=g.getWindowId();delete this.__cI[h];}
,addListener:function(l,k,i,self,j){return this.getManager(l).addListener(l,k,i,self,j);}
,removeListener:function(p,o,m,self,n){return this.getManager(p).removeListener(p,o,m,self,n);}
,removeListenerById:function(q,r){return this.getManager(q).removeListenerById(q,r);}
,removeAllListeners:function(s){return this.getManager(s).removeAllListeners(s);}
,deleteAllListeners:function(u){var t=u.$$hash;if(t){this.getManager(u).deleteAllListeners(t);}
;}
,hasListener:function(x,w,v){return this.getManager(x).hasListener(x,w,v);}
,serializeListeners:function(y){return this.getManager(y).serializeListeners(y);}
,createEvent:function(B,C,A){{}
;if(C==null){C=qx.event.type.Event;}
;var z=qx.event.Pool.getInstance().getObject(C);A?z.init.apply(z,A):z.init();if(B){z.setType(B);}
;return z;}
,dispatchEvent:function(D,event){return this.getManager(D).dispatchEvent(D,event);}
,fireEvent:function(E,F,H,G){{var I;}
;var J=this.createEvent(F,H||null,G);return this.getManager(E).dispatchEvent(E,J);}
,fireNonBubblingEvent:function(K,P,N,M){{}
;var O=this.getManager(K);if(!O.hasListener(K,P,false)){return true;}
;var L=this.createEvent(P,N||null,M);return O.dispatchEvent(K,L);}
,PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__cB:[],addHandler:function(Q){{}
;this.__cB.push(Q);this.__cB.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getHandlers:function(){return this.__cB;}
,__cC:[],addDispatcher:function(S,R){{}
;this.__cC.push(S);this.__cC.sort(function(a,b){return a.PRIORITY-b.PRIORITY;}
);}
,getDispatchers:function(){return this.__cC;}
}});}
)();
(function(){var a="qx.core.MEvent";qx.Mixin.define(a,{members:{__cJ:qx.event.Registration,addListener:function(d,b,self,c){if(!this.$$disposed){return this.__cJ.addListener(this,d,b,self,c);}
;return null;}
,addListenerOnce:function(h,f,self,g){var i=function(e){this.removeListener(h,f,this,g);f.call(self||this,e);}
;f.$$wrapped_callback=i;return this.addListener(h,i,this,g);}
,removeListener:function(l,j,self,k){if(!this.$$disposed){if(j.$$wrapped_callback){var m=j.$$wrapped_callback;delete j.$$wrapped_callback;j=m;}
;return this.__cJ.removeListener(this,l,j,self,k);}
;return false;}
,removeListenerById:function(n){if(!this.$$disposed){return this.__cJ.removeListenerById(this,n);}
;return false;}
,hasListener:function(p,o){return this.__cJ.hasListener(this,p,o);}
,dispatchEvent:function(q){if(!this.$$disposed){return this.__cJ.dispatchEvent(this,q);}
;return true;}
,fireEvent:function(s,t,r){if(!this.$$disposed){return this.__cJ.fireEvent(this,s,t,r);}
;return true;}
,fireNonBubblingEvent:function(v,w,u){if(!this.$$disposed){return this.__cJ.fireNonBubblingEvent(this,v,w,u);}
;return true;}
,fireDataEvent:function(z,A,x,y){if(!this.$$disposed){if(x===undefined){x=null;}
;return this.__cJ.fireNonBubblingEvent(this,z,qx.event.type.Data,[A,x,!!y]);}
;return true;}
}});}
)();
(function(){var a="qx.event.IEventDispatcher";qx.Interface.define(a,{members:{canDispatchEvent:function(c,event,b){this.assertInstance(event,qx.event.type.Event);this.assertString(b);}
,dispatchEvent:function(e,event,d){this.assertInstance(event,qx.event.type.Event);this.assertString(d);}
}});}
)();
(function(){var a="module.events",b="Cloning only possible with properties.",c="qx.core.Object",d="module.property",e="]",f="[",g="Object";qx.Class.define(c,{extend:Object,include:qx.core.Environment.filter({"module.databinding":qx.data.MBinding,"module.logger":qx.core.MLogging,"module.events":qx.core.MEvent,"module.property":qx.core.MProperty}),construct:function(){qx.core.ObjectRegistry.register(this);}
,statics:{$$type:g},members:{__M:qx.core.Environment.get(d)?qx.core.Property:null,toHashCode:function(){return this.$$hash;}
,toString:function(){return this.classname+f+this.$$hash+e;}
,base:function(h,j){{}
;if(arguments.length===1){return h.callee.base.call(this);}
else {return h.callee.base.apply(this,Array.prototype.slice.call(arguments,1));}
;}
,self:function(k){return k.callee.self;}
,clone:function(){if(!qx.core.Environment.get(d)){throw new Error(b);}
;var n=this.constructor;var m=new n;var p=qx.Class.getProperties(n);var o=this.__M.$$store.user;var q=this.__M.$$method.set;var name;for(var i=0,l=p.length;i<l;i++ ){name=p[i];if(this.hasOwnProperty(o[name])){m[q[name]](this[o[name]]);}
;}
;return m;}
,__cK:null,setUserData:function(r,s){if(!this.__cK){this.__cK={};}
;this.__cK[r]=s;}
,getUserData:function(u){if(!this.__cK){return null;}
;var t=this.__cK[u];return t===undefined?null:t;}
,isDisposed:function(){return this.$$disposed||false;}
,dispose:function(){if(this.$$disposed){return;}
;this.$$disposed=true;this.$$instance=null;this.$$allowconstruct=null;{}
;var x=this.constructor;var v;while(x.superclass){if(x.$$destructor){x.$$destructor.call(this);}
;if(x.$$includes){v=x.$$flatIncludes;for(var i=0,l=v.length;i<l;i++ ){if(v[i].$$destructor){v[i].$$destructor.call(this);}
;}
;}
;x=x.superclass;}
;{var y,w;}
;}
,_disposeObjects:function(z){qx.util.DisposeUtil.disposeObjects(this,arguments);}
,_disposeSingletonObjects:function(A){qx.util.DisposeUtil.disposeObjects(this,arguments,true);}
,_disposeArray:function(B){qx.util.DisposeUtil.disposeArray(this,B);}
,_disposeMap:function(C){qx.util.DisposeUtil.disposeMap(this,C);}
},environment:{"qx.debug.dispose.level":0},destruct:function(){if(qx.core.Environment.get(a)){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);}
else {qx.event.Registration.deleteAllListeners(this);}
;}
;qx.core.ObjectRegistry.unregister(this);this.__cK=null;if(qx.core.Environment.get(d)){var F=this.constructor;var J;var K=this.__M.$$store;var H=K.user;var I=K.theme;var D=K.inherit;var G=K.useinit;var E=K.init;while(F){J=F.$$properties;if(J){for(var name in J){if(J[name].dereference){this[H[name]]=this[I[name]]=this[D[name]]=this[G[name]]=this[E[name]]=undefined;}
;}
;}
;F=F.superclass;}
;}
;}
});}
)();
(function(){var a=" is a singleton! Please use disposeSingleton instead.",b="undefined",c="qx.util.DisposeUtil",d=" of object: ",e="!",f=" has non disposable entries: ",g="The map field: ",h="The array field: ",j="The object stored in key ",k="Has no disposable object under key: ";qx.Class.define(c,{statics:{disposeObjects:function(n,m,o){var name;for(var i=0,l=m.length;i<l;i++ ){name=m[i];if(n[name]==null||!n.hasOwnProperty(name)){continue;}
;if(!qx.core.ObjectRegistry.inShutDown){if(n[name].dispose){if(!o&&n[name].constructor.$$instance){throw new Error(j+name+a);}
else {n[name].dispose();}
;}
else {throw new Error(k+name+e);}
;}
;n[name]=null;}
;}
,disposeArray:function(q,p){var r=q[p];if(!r){return;}
;if(qx.core.ObjectRegistry.inShutDown){q[p]=null;return;}
;try{var s;for(var i=r.length-1;i>=0;i-- ){s=r[i];if(s){s.dispose();}
;}
;}
catch(t){throw new Error(h+p+d+q+f+t);}
;r.length=0;q[p]=null;}
,disposeMap:function(v,u){var w=v[u];if(!w){return;}
;if(qx.core.ObjectRegistry.inShutDown){v[u]=null;return;}
;try{var y;for(var x in w){y=w[x];if(w.hasOwnProperty(x)&&y){y.dispose();}
;}
;}
catch(z){throw new Error(g+u+d+v+f+z);}
;v[u]=null;}
,disposeTriggeredBy:function(A,C){var B=C.dispose;C.dispose=function(){B.call(C);A.dispose();}
;}
,destroyContainer:function(E){{}
;var D=[];this._collectContainerChildren(E,D);var F=D.length;for(var i=F-1;i>=0;i-- ){D[i].destroy();}
;E.destroy();}
,_collectContainerChildren:function(I,H){var J=I.getChildren();for(var i=0;i<J.length;i++ ){var G=J[i];H.push(G);if(this.__cL(G)){this._collectContainerChildren(G,H);}
;}
;}
,__cL:function(L){var K=[qx.ui.container.Composite,qx.ui.container.Scroll,qx.ui.container.SlideBar,qx.ui.container.Stack];for(var i=0,l=K.length;i<l;i++ ){if(typeof K[i]!==b&&qx.Class.isSubClassOf(L.constructor,K[i])){return true;}
;}
;return false;}
}});}
)();
(function(){var a="qx.event.type.Event";qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(c,b){{}
;this._type=null;this._target=null;this._currentTarget=null;this._relatedTarget=null;this._originalTarget=null;this._stopPropagation=false;this._preventDefault=false;this._bubbles=!!c;this._cancelable=!!b;this._timeStamp=(new Date()).getTime();this._eventPhase=null;return this;}
,clone:function(d){if(d){var e=d;}
else {var e=qx.event.Pool.getInstance().getObject(this.constructor);}
;e._type=this._type;e._target=this._target;e._currentTarget=this._currentTarget;e._relatedTarget=this._relatedTarget;e._originalTarget=this._originalTarget;e._stopPropagation=this._stopPropagation;e._bubbles=this._bubbles;e._preventDefault=this._preventDefault;e._cancelable=this._cancelable;return e;}
,stop:function(){if(this._bubbles){this.stopPropagation();}
;if(this._cancelable){this.preventDefault();}
;}
,stopPropagation:function(){{}
;this._stopPropagation=true;}
,getPropagationStopped:function(){return !!this._stopPropagation;}
,preventDefault:function(){{}
;this._preventDefault=true;}
,getDefaultPrevented:function(){return !!this._preventDefault;}
,getType:function(){return this._type;}
,setType:function(f){this._type=f;}
,getEventPhase:function(){return this._eventPhase;}
,setEventPhase:function(g){this._eventPhase=g;}
,getTimeStamp:function(){return this._timeStamp;}
,getTarget:function(){return this._target;}
,setTarget:function(h){this._target=h;}
,getCurrentTarget:function(){return this._currentTarget||this._target;}
,setCurrentTarget:function(i){this._currentTarget=i;}
,getRelatedTarget:function(){return this._relatedTarget;}
,setRelatedTarget:function(j){this._relatedTarget=j;}
,getOriginalTarget:function(){return this._originalTarget;}
,setOriginalTarget:function(k){this._originalTarget=k;}
,getBubbles:function(){return this._bubbles;}
,setBubbles:function(l){this._bubbles=l;}
,isCancelable:function(){return this._cancelable;}
,setCancelable:function(m){this._cancelable=m;}
},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;}
});}
)();
(function(){var a="qx.util.ObjectPool",b="Class needs to be defined!",c="Object is already pooled: ",d="Integer";qx.Class.define(a,{extend:qx.core.Object,construct:function(e){qx.core.Object.call(this);this.__cM={};if(e!=null){this.setSize(e);}
;}
,properties:{size:{check:d,init:Infinity}},members:{__cM:null,getObject:function(h){if(this.$$disposed){return new h;}
;if(!h){throw new Error(b);}
;var f=null;var g=this.__cM[h.classname];if(g){f=g.pop();}
;if(f){f.$$pooled=false;}
else {f=new h;}
;return f;}
,poolObject:function(k){if(!this.__cM){return;}
;var j=k.classname;var m=this.__cM[j];if(k.$$pooled){throw new Error(c+k);}
;if(!m){this.__cM[j]=m=[];}
;if(m.length>this.getSize()){if(k.destroy){k.destroy();}
else {k.dispose();}
;return;}
;k.$$pooled=true;m.push(k);}
},destruct:function(){var p=this.__cM;var n,o,i,l;for(n in p){o=p[n];for(i=0,l=o.length;i<l;i++ ){o[i].dispose();}
;}
;delete this.__cM;}
});}
)();
(function(){var a="singleton",b="qx.event.Pool";qx.Class.define(b,{extend:qx.util.ObjectPool,type:a,construct:function(){qx.util.ObjectPool.call(this,30);}
});}
)();
(function(){var a="qx.event.dispatch.Direct";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;}
,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(d,event,c){return !event.getBubbles();}
,dispatchEvent:function(e,event,k){{var j,f;}
;event.setEventPhase(qx.event.type.Event.AT_TARGET);var g=this._manager.getListeners(e,k,false);if(g){for(var i=0,l=g.length;i<l;i++ ){var h=g[i].context||e;{}
;g[i].handler.call(h,event);}
;}
;}
},defer:function(m){qx.event.Registration.addDispatcher(m);}
});}
)();
(function(){var a=" != ",b="qx.core.Object",c="Expected value to be an array but found ",d="' (rgb(",f=") was fired.",g="Expected value to be an integer >= 0 but found ",h="' to be not equal with '",j="' to '",k="Expected object '",m="Called assertTrue with '",n="Expected value to be a map but found ",o="The function did not raise an exception!",p="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",s="' to implement the interface '",t="Expected value to be null but found ",u="Invalid argument 'type'",v="Called assert with 'false'",w="Assertion error! ",x="'",y="null",z="' but found '",A="'undefined'",B=",",C="' must must be a key of the map '",D="Expected '",E="The String '",F="Expected value to be a string but found ",G="Event (",H="Expected value to be the CSS color '",I="!",J="Expected value not to be undefined but found undefined!",K="qx.util.ColorUtil",L=": ",M="The raised exception does not have the expected type! ",N=") not fired.",O="'!",P="qx.core.Assert",Q="",R="Expected value to be typeof object but found ",S="' but found ",T="' (identical) but found '",U="' must have any of the values defined in the array '",V="Expected value to be a number but found ",W="Called assertFalse with '",X="qx.ui.core.Widget",Y="]",bJ="Expected value to be a qooxdoo object but found ",bK="' arguments.",bL="Expected value '%1' to be in the range '%2'..'%3'!",bF="Array[",bG="' does not match the regular expression '",bH="' to be not identical with '",bI="Expected [",bP="' arguments but found '",bQ="', which cannot be converted to a CSS color!",bR=", ",cg="qx.core.AssertionError",bM="Expected value to be a boolean but found ",bN="Expected value not to be null but found null!",bO="))!",bD="Expected value to be a qooxdoo widget but found ",bU="The value '",bE="Expected value to be typeof '",bV="\n Stack trace: \n",bW="Expected value to be typeof function but found ",cb="Expected value to be an integer but found ",bS="Called fail().",cf="The parameter 're' must be a string or a regular expression.",bT=")), but found value '",bX="qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'",bY="Expected value to be a number >= 0 but found ",ca="Expected value to be instanceof '",cc="], but found [",cd="Wrong number of arguments given. Expected '",ce="object";qx.Class.define(P,{statics:{__bJ:true,__bK:function(ch,ci){var cm=Q;for(var i=1,l=arguments.length;i<l;i++ ){cm=cm+this.__bL(arguments[i]===undefined?A:arguments[i]);}
;var cl=Q;if(cm){cl=ch+L+cm;}
else {cl=ch;}
;var ck=w+cl;if(qx.Class.isDefined(cg)){var cj=new qx.core.AssertionError(ch,cm);if(this.__bJ){qx.Bootstrap.error(ck+bV+cj.getStackTrace());}
;throw cj;}
else {if(this.__bJ){qx.Bootstrap.error(ck);}
;throw new Error(ck);}
;}
,__bL:function(co){var cn;if(co===null){cn=y;}
else if(qx.lang.Type.isArray(co)&&co.length>10){cn=bF+co.length+Y;}
else if((co instanceof Object)&&(co.toString==null)){cn=qx.lang.Json.stringify(co,null,2);}
else {try{cn=co.toString();}
catch(e){cn=Q;}
;}
;return cn;}
,assert:function(cq,cp){cq==true||this.__bK(cp||Q,v);}
,fail:function(cr,cs){var ct=cs?Q:bS;this.__bK(cr||Q,ct);}
,assertTrue:function(cv,cu){(cv===true)||this.__bK(cu||Q,m,cv,x);}
,assertFalse:function(cx,cw){(cx===false)||this.__bK(cw||Q,W,cx,x);}
,assertEquals:function(cy,cz,cA){cy==cz||this.__bK(cA||Q,D,cy,z,cz,O);}
,assertNotEquals:function(cB,cC,cD){cB!=cC||this.__bK(cD||Q,D,cB,h,cC,O);}
,assertIdentical:function(cE,cF,cG){cE===cF||this.__bK(cG||Q,D,cE,T,cF,O);}
,assertNotIdentical:function(cH,cI,cJ){cH!==cI||this.__bK(cJ||Q,D,cH,bH,cI,O);}
,assertNotUndefined:function(cL,cK){cL!==undefined||this.__bK(cK||Q,J);}
,assertUndefined:function(cN,cM){cN===undefined||this.__bK(cM||Q,p,cN,I);}
,assertNotNull:function(cP,cO){cP!==null||this.__bK(cO||Q,bN);}
,assertNull:function(cR,cQ){cR===null||this.__bK(cQ||Q,t,cR,I);}
,assertJsonEquals:function(cS,cT,cU){this.assertEquals(qx.lang.Json.stringify(cS),qx.lang.Json.stringify(cT),cU);}
,assertMatch:function(cX,cW,cV){this.assertString(cX);this.assert(qx.lang.Type.isRegExp(cW)||qx.lang.Type.isString(cW),cf);cX.search(cW)>=0||this.__bK(cV||Q,E,cX,bG,cW.toString(),O);}
,assertArgumentsCount:function(db,dc,dd,cY){var da=db.length;(da>=dc&&da<=dd)||this.__bK(cY||Q,cd,dc,j,dd,bP,da,bK);}
,assertEventFired:function(de,event,dh,di,dj){var df=false;var dg=function(e){if(di){di.call(de,e);}
;df=true;}
;var dk;try{dk=de.addListener(event,dg,de);dh.call(de);}
catch(dl){throw dl;}
finally{try{de.removeListenerById(dk);}
catch(dm){}
;}
;df===true||this.__bK(dj||Q,G,event,N);}
,assertEventNotFired:function(dn,event,dr,ds){var dp=false;var dq=function(e){dp=true;}
;var dt=dn.addListener(event,dq,dn);dr.call();dp===false||this.__bK(ds||Q,G,event,f);dn.removeListenerById(dt);}
,assertException:function(dx,dw,dv,du){var dw=dw||Error;var dy;try{this.__bJ=false;dx();}
catch(dz){dy=dz;}
finally{this.__bJ=true;}
;if(dy==null){this.__bK(du||Q,o);}
;dy instanceof dw||this.__bK(du||Q,M,dw,a,dy);if(dv){this.assertMatch(dy.toString(),dv,du);}
;}
,assertInArray:function(dC,dB,dA){dB.indexOf(dC)!==-1||this.__bK(dA||Q,bU,dC,U,dB,x);}
,assertArrayEquals:function(dD,dE,dF){this.assertArray(dD,dF);this.assertArray(dE,dF);dF=dF||bI+dD.join(bR)+cc+dE.join(bR)+Y;if(dD.length!==dE.length){this.fail(dF,true);}
;for(var i=0;i<dD.length;i++ ){if(dD[i]!==dE[i]){this.fail(dF,true);}
;}
;}
,assertKeyInMap:function(dI,dH,dG){dH[dI]!==undefined||this.__bK(dG||Q,bU,dI,C,dH,x);}
,assertFunction:function(dK,dJ){qx.lang.Type.isFunction(dK)||this.__bK(dJ||Q,bW,dK,I);}
,assertString:function(dM,dL){qx.lang.Type.isString(dM)||this.__bK(dL||Q,F,dM,I);}
,assertBoolean:function(dO,dN){qx.lang.Type.isBoolean(dO)||this.__bK(dN||Q,bM,dO,I);}
,assertNumber:function(dQ,dP){(qx.lang.Type.isNumber(dQ)&&isFinite(dQ))||this.__bK(dP||Q,V,dQ,I);}
,assertPositiveNumber:function(dS,dR){(qx.lang.Type.isNumber(dS)&&isFinite(dS)&&dS>=0)||this.__bK(dR||Q,bY,dS,I);}
,assertInteger:function(dU,dT){(qx.lang.Type.isNumber(dU)&&isFinite(dU)&&dU%1===0)||this.__bK(dT||Q,cb,dU,I);}
,assertPositiveInteger:function(dX,dV){var dW=(qx.lang.Type.isNumber(dX)&&isFinite(dX)&&dX%1===0&&dX>=0);dW||this.__bK(dV||Q,g,dX,I);}
,assertInRange:function(eb,ec,ea,dY){(eb>=ec&&eb<=ea)||this.__bK(dY||Q,qx.lang.String.format(bL,[eb,ec,ea]));}
,assertObject:function(ee,ed){var ef=ee!==null&&(qx.lang.Type.isObject(ee)||typeof ee===ce);ef||this.__bK(ed||Q,R,(ee),I);}
,assertArray:function(eh,eg){qx.lang.Type.isArray(eh)||this.__bK(eg||Q,c,eh,I);}
,assertMap:function(ej,ei){qx.lang.Type.isObject(ej)||this.__bK(ei||Q,n,ej,I);}
,assertRegExp:function(el,ek){qx.lang.Type.isRegExp(el)||this.__bK(ek||Q,r,el,I);}
,assertType:function(eo,en,em){this.assertString(en,u);typeof (eo)===en||this.__bK(em||Q,bE,en,S,eo,I);}
,assertInstance:function(er,es,ep){var eq=es.classname||es+Q;er instanceof es||this.__bK(ep||Q,ca,eq,S,er,I);}
,assertInterface:function(ev,eu,et){qx.Class.implementsInterface(ev,eu)||this.__bK(et||Q,k,ev,s,eu,O);}
,assertCssColor:function(eC,ez,eB){var ew=qx.Class.getByName(K);if(!ew){throw new Error(bX);}
;var ey=ew.stringToRgb(eC);try{var eA=ew.stringToRgb(ez);}
catch(eE){this.__bK(eB||Q,H,eC,d,ey.join(B),bT,ez,bQ);}
;var eD=ey[0]==eA[0]&&ey[1]==eA[1]&&ey[2]==eA[2];eD||this.__bK(eB||Q,H,ey,d,ey.join(B),bT,ez,d,eA.join(B),bO);}
,assertElement:function(eG,eF){!!(eG&&eG.nodeType===1)||this.__bK(eF||Q,q,eG,O);}
,assertQxObject:function(eI,eH){this.__bM(eI,b)||this.__bK(eH||Q,bJ,eI,I);}
,assertQxWidget:function(eK,eJ){this.__bM(eK,X)||this.__bK(eJ||Q,bD,eK,I);}
,__bM:function(eM,eL){if(!eM){return false;}
;var eN=eM.constructor;while(eN){if(eN.classname===eL){return true;}
;eN=eN.superclass;}
;return false;}
}});}
)();
(function(){var b=': ',d='String',e='',f='Boolean',g='\\\\',h='object',l='\\f',m=']',o='\\t',p='function',q='{\n',r='[]',s="qx.lang.JsonImpl",t='Z',u=',',w='\\n',x='Object',y='{}',z='"',A='@',B='.',C='(',D='Array',E='T',F=':',G='\\r',H='{',I='JSON.parse',J=' ',K='\n',L='\\u',M=',\n',N='0000',O='null',P='string',Q="Cannot stringify a recursive object.",R='0',S='-',T='[',U='Number',V=')',W='[\n',X='\\"',Y='\\b',ba='}';qx.Bootstrap.define(s,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);this.parse=qx.lang.Function.bind(this.parse,this);}
,members:{__bX:null,__bY:null,__ca:null,__cb:null,stringify:function(bc,bb,bd){this.__bX=e;this.__bY=e;this.__cb=[];if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));for(var i=0;i<bd;i+=1){this.__bY+=J;}
;}
else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);}
;this.__bY=bd;}
;if(bb&&(qx.lang.Type.isFunction(bb)||qx.lang.Type.isArray(bb))){this.__ca=bb;}
else {this.__ca=null;}
;return this.__cc(e,{'':bc});}
,__cc:function(bi,bj){var bg=this.__bX,be,bh=bj[bi];if(bh&&qx.lang.Type.isFunction(bh.toJSON)){bh=bh.toJSON(bi);}
else if(qx.lang.Type.isDate(bh)){bh=this.dateToJSON(bh);}
;if(typeof this.__ca===p){bh=this.__ca.call(bj,bi,bh);}
;if(bh===null){return O;}
;if(bh===undefined){return undefined;}
;switch(qx.lang.Type.getClass(bh)){case d:return this.__cd(bh);case U:return isFinite(bh)?String(bh):O;case f:return String(bh);case D:this.__bX+=this.__bY;be=[];if(this.__cb.indexOf(bh)!==-1){throw new TypeError(Q);}
;this.__cb.push(bh);var length=bh.length;for(var i=0;i<length;i+=1){be[i]=this.__cc(i,bh)||O;}
;this.__cb.pop();if(be.length===0){var bf=r;}
else if(this.__bX){bf=W+this.__bX+be.join(M+this.__bX)+K+bg+m;}
else {bf=T+be.join(u)+m;}
;this.__bX=bg;return bf;case x:this.__bX+=this.__bY;be=[];if(this.__cb.indexOf(bh)!==-1){throw new TypeError(Q);}
;this.__cb.push(bh);if(this.__ca&&typeof this.__ca===h){var length=this.__ca.length;for(var i=0;i<length;i+=1){var k=this.__ca[i];if(typeof k===P){var v=this.__cc(k,bh);if(v){be.push(this.__cd(k)+(this.__bX?b:F)+v);}
;}
;}
;}
else {for(var k in bh){if(Object.hasOwnProperty.call(bh,k)){var v=this.__cc(k,bh);if(v){be.push(this.__cd(k)+(this.__bX?b:F)+v);}
;}
;}
;}
;this.__cb.pop();if(be.length===0){var bf=y;}
else if(this.__bX){bf=q+this.__bX+be.join(M+this.__bX)+K+bg+ba;}
else {bf=H+be.join(u)+ba;}
;this.__bX=bg;return bf;};}
,dateToJSON:function(bk){var bl=function(n){return n<10?R+n:n;}
;var bm=function(n){var bn=bl(n);return n<100?R+bn:bn;}
;return isFinite(bk.valueOf())?bk.getUTCFullYear()+S+bl(bk.getUTCMonth()+1)+S+bl(bk.getUTCDate())+E+bl(bk.getUTCHours())+F+bl(bk.getUTCMinutes())+F+bl(bk.getUTCSeconds())+B+bm(bk.getUTCMilliseconds())+t:null;}
,__cd:function(bp){var bo={'\b':Y,'\t':o,'\n':w,'\f':l,'\r':G,'"':X,'\\':g};var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;bq.lastIndex=0;if(bq.test(bp)){return z+bp.replace(bq,function(a){var c=bo[a];return typeof c===P?c:L+(N+a.charCodeAt(0).toString(16)).slice(-4);}
)+z;}
else {return z+bp+z;}
;}
,parse:function(text,reviver){var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return L+(N+a.charCodeAt(0).toString(16)).slice(-4);}
);}
;if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,A).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,m).replace(/(?:^|:|,)(?:\s*\[)+/g,e))){var j=eval(C+text+V);return typeof reviver===p?this.__ce({'':j},e,reviver):j;}
;throw new SyntaxError(I);}
,__ce:function(bu,bt,bs){var br=bu[bt];if(br&&typeof br===h){for(var k in br){if(Object.hasOwnProperty.call(br,k)){var v=this.__ce(br,k,bs);if(v!==undefined){br[k]=v;}
else {delete br[k];}
;}
;}
;}
;return bs.call(bu,bt,br);}
}});}
)();
(function(){var a="GlobalError: ",b="qx.core.GlobalError";qx.Bootstrap.define(b,{extend:Error,construct:function(e,c){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(e);}
;this.__bE=a+(e&&e.message?e.message:e);var d=Error.call(this,this.__bE);if(d.stack){this.stack=d.stack;}
;if(d.stacktrace){this.stacktrace=d.stacktrace;}
;this.__bH=c;this.__bI=e;}
,members:{__bI:null,__bH:null,__bE:null,toString:function(){return this.__bE;}
,getArguments:function(){return this.__bH;}
,getSourceException:function(){return this.__bI;}
},destruct:function(){this.__bI=null;this.__bH=null;this.__bE=null;}
});}
)();
(function(){var a="prop",b="qx.bom.client.Json",c="repl",d="JSON",e='{"x":1}',f="json",g="val";qx.Bootstrap.define(b,{statics:{getJson:function(){return (qx.Bootstrap.getClass(window.JSON)==d&&JSON.parse(e).x===1&&JSON.stringify({"prop":g},function(k,v){return k===a?c:v;}
).indexOf(c)>0);}
},defer:function(h){qx.core.Environment.add(f,h.getJson);}
});}
)();
(function(){var a="qx.lang.Json",b="json";qx.Bootstrap.define(a,{statics:{JSON:qx.core.Environment.get(b)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(c){c.stringify=c.JSON.stringify;c.parse=c.JSON.parse;}
});}
)();
(function(){var a="qx.event.handler.Object";qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(c,b){return qx.Class.supportsEvent(c.constructor,b);}
,registerEvent:function(f,e,d){}
,unregisterEvent:function(i,h,g){}
},defer:function(j){qx.event.Registration.addHandler(j);}
});}
)();
(function(){var a="qx.event.type.Data";qx.Class.define(a,{extend:qx.event.type.Event,members:{__cN:null,__cO:null,init:function(c,d,b){qx.event.type.Event.prototype.init.call(this,false,b);this.__cN=c;this.__cO=d;return this;}
,clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);f.__cN=this.__cN;f.__cO=this.__cO;return f;}
,getData:function(){return this.__cN;}
,getOldData:function(){return this.__cO;}
},destruct:function(){this.__cN=this.__cO=null;}
});}
)();
(function(){var a="qx.data.marshal.IMarshaler";qx.Interface.define(a,{members:{toClass:function(b,c){}
,toModel:function(d){}
}});}
)();
(function(){var a='"',b="",c="Unsupported type!",d="change",e="qx.data.marshal.Json",f="Array",g="_validate",h="set",j="_applyEventPropagation",k="qx.data.model.";qx.Class.define(e,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(l){qx.core.Object.call(this);this.__yf=l;}
,statics:{$$instance:null,createModel:function(m,n){if(this.$$instance===null){this.$$instance=new qx.data.marshal.Json();}
;this.$$instance.toClass(m,n);return this.$$instance.toModel(m);}
},members:{__yf:null,__yg:function(o){return Object.keys(o).sort().join(a);}
,toClass:function(p,q){this.__yh(p,q,null,0);}
,__yh:function(C,x,r,z){if(!qx.lang.Type.isObject(C)||!!C.$$isString||C instanceof qx.core.Object){if(C instanceof Array||qx.Bootstrap.getClass(C)==f){for(var i=0;i<C.length;i++ ){this.__yh(C[i],x,null,z+1);}
;}
;return;}
;var t=this.__yg(C);if(this.__yl(t,r,z)){return;}
;for(var B in C){this.__yh(C[B],x,B,z+1);}
;if(qx.Class.isDefined(k+t)){return;}
;if(this.__yf&&this.__yf.getModelClass&&this.__yf.getModelClass(t,C)!=null){return;}
;var D={};var u={__yi:this.__yi};for(var B in C){if(this.__yf&&this.__yf.getPropertyMapping){B=this.__yf.getPropertyMapping(B,t);}
;B=B.replace(/-|\.|\s+/g,b);{}
;D[B]={};D[B].nullable=true;D[B].event=d+qx.lang.String.firstUp(B);if(x){D[B].apply=j;}
;if(this.__yf&&this.__yf.getValidationRule){var w=this.__yf.getValidationRule(t,B);if(w){D[B].validate=g+B;u[g+B]=w;}
;}
;}
;if(this.__yf&&this.__yf.getModelSuperClass){var A=this.__yf.getModelSuperClass(t)||qx.core.Object;}
else {var A=qx.core.Object;}
;var v=[];if(this.__yf&&this.__yf.getModelMixins){var y=this.__yf.getModelMixins(t);if(!qx.lang.Type.isArray(y)){if(y!=null){v=[y];}
;}
else {v=y;}
;}
;if(x){v.push(qx.data.marshal.MEventBubbling);}
;var s={extend:A,include:v,properties:D,members:u,destruct:this.__yj};qx.Class.define(k+t,s);}
,__yj:function(){var E=qx.util.PropertyUtil.getAllProperties(this.constructor);for(var F in E){this.__yi(this.get(E[F].name));}
;}
,__yi:function(G){if(!(G instanceof qx.core.Object)){return;}
;if(G.isDisposed()){return;}
;G.dispose();}
,__yk:function(I,H){var J;if(this.__yf&&this.__yf.getModelClass){J=this.__yf.getModelClass(I,H);}
;if(J!=null){return (new J());}
else {var K=qx.Class.getByName(k+I);return (new K());}
;}
,__yl:function(L,O,M){var N=this.__yf;return N&&N.ignore&&N.ignore(L,O,M);}
,toModel:function(P){return this.__ym(P,null,0);}
,__ym:function(ba,R,W){var V=qx.lang.Type.isObject(ba);var Q=ba instanceof Array||qx.Bootstrap.getClass(ba)==f;if((!V&&!Q)||!!ba.$$isString||ba instanceof qx.core.Object){return ba;}
else if(this.__yl(this.__yg(ba),R,W)){return ba;}
else if(Q){var bb=new qx.data.Array();bb.setAutoDisposeItems(true);for(var i=0;i<ba.length;i++ ){bb.push(this.__ym(ba[i],null,W+1));}
;return bb;}
else if(V){var S=this.__yg(ba);var Y=this.__yk(S,ba);for(var X in ba){var T=X;if(this.__yf&&this.__yf.getPropertyMapping){T=this.__yf.getPropertyMapping(X,S);}
;var bc=T.replace(/-|\.|\s+/g,b);{}
;T=bc;var U=h+qx.lang.String.firstUp(T);if(Y[U]){Y[U](this.__ym(ba[X],X,W+1));}
;}
;return Y;}
;throw new Error(c);}
},destruct:function(){this.__yf=null;}
});}
)();
(function(){var a="qx.data.marshal.MEventBubbling",b="",c="]",d="idBubble-",f="[",g="changeBubble",h=".",j="qx.event.type.Data";qx.Mixin.define(a,{events:{"changeBubble":j},members:{_applyEventPropagation:function(l,k,name){this.fireDataEvent(g,{value:l,name:name,old:k,item:this});this._registerEventChaining(l,k,name);}
,_registerEventChaining:function(n,m,name){if(m!=null&&m.getUserData&&m.getUserData(d+this.$$hash)!=null){var p=m.getUserData(d+this.$$hash);for(var i=0;i<p.length;i++ ){m.removeListenerById(p[i]);}
;m.setUserData(d+this.$$hash,null);}
;if((n instanceof qx.core.Object)&&qx.Class.hasMixin(n.constructor,qx.data.marshal.MEventBubbling)){var o=qx.lang.Function.bind(this.__pk,this,name);var q=n.addListener(g,o,this);var p=n.getUserData(d+this.$$hash);if(p==null){p=[];n.setUserData(d+this.$$hash,p);}
;p.push(q);}
;}
,__pk:function(name,e){var y=e.getData();var u=y.value;var s=y.old;if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(y.name.indexOf){var x=y.name.indexOf(h)!=-1?y.name.indexOf(h):y.name.length;var v=y.name.indexOf(f)!=-1?y.name.indexOf(f):y.name.length;if(v==0){var t=name+y.name;}
else if(x<v){var r=y.name.substring(0,x);var w=y.name.substring(x+1,y.name.length);if(w[0]!=f){w=h+w;}
;var t=name+f+r+c+w;}
else if(v<x){var r=y.name.substring(0,v);var w=y.name.substring(v,y.name.length);var t=name+f+r+c+w;}
else {var t=name+f+y.name+c;}
;}
else {var t=name+f+y.name+c;}
;}
else {if(parseInt(name)==name&&name!==b){name=f+name+c;}
;var t=name+h+y.name;}
;this.fireDataEvent(g,{value:u,name:t,old:s,item:y.item||e.getTarget()});}
}});}
)();
(function(){var a="$$theme_",b="$$user_",c="qx.util.PropertyUtil",d="$$init_";qx.Class.define(c,{statics:{getProperties:function(e){return e.$$properties;}
,getAllProperties:function(j){var g={};var f=j;while(f!=qx.core.Object){var i=this.getProperties(f);for(var h in i){g[h]=i[h];}
;f=f.superclass;}
;return g;}
,getUserValue:function(l,k){return l[b+k];}
,setUserValue:function(n,m,o){n[b+m]=o;}
,deleteUserValue:function(q,p){delete (q[b+p]);}
,getInitValue:function(s,r){return s[d+r];}
,setInitValue:function(u,t,v){u[d+t]=v;}
,deleteInitValue:function(x,w){delete (x[d+w]);}
,getThemeValue:function(z,y){return z[a+y];}
,setThemeValue:function(B,A,C){B[a+A]=C;}
,deleteThemeValue:function(E,D){delete (E[a+D]);}
,setThemed:function(H,G,I){var F=qx.core.Property.$$method.setThemed;H[F[G]](I);}
,resetThemed:function(K,J){var L=qx.core.Property.$$method.resetThemed;K[L[J]]();}
}});}
)();
(function(){var a="-",b="add",c="order",d="add/remove",e="Boolean",f="",g="change",h="qx.data.Array",j="Type of the parameter not supported!",k="0-",l="remove",m="0",n="number",o="changeBubble",p="changeLength",q="qx.event.type.Data";qx.Class.define(h,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(r){qx.core.Object.call(this);if(r==undefined){this.__pl=[];}
else if(arguments.length>1){this.__pl=[];for(var i=0;i<arguments.length;i++ ){this.__pl.push(arguments[i]);}
;}
else if(typeof r==n){this.__pl=new Array(r);}
else if(r instanceof Array){this.__pl=qx.lang.Array.clone(r);}
else {this.__pl=[];this.dispose();throw new Error(j);}
;for(var i=0;i<this.__pl.length;i++ ){this._applyEventPropagation(this.__pl[i],null,i);}
;this.__pm();{}
;}
,properties:{autoDisposeItems:{check:e,init:false}},events:{"change":q,"changeLength":q},members:{__pl:null,concat:function(s){if(s){var t=this.__pl.concat(s);}
else {var t=this.__pl.concat();}
;return new qx.data.Array(t);}
,join:function(u){return this.__pl.join(u);}
,pop:function(){var v=this.__pl.pop();this.__pm();this._registerEventChaining(null,v,this.length-1);this.fireDataEvent(o,{value:[],name:this.length+f,old:[v],item:this});this.fireDataEvent(g,{start:this.length-1,end:this.length-1,type:l,items:[v],removed:[v],added:[]},null);return v;}
,push:function(w){for(var i=0;i<arguments.length;i++ ){this.__pl.push(arguments[i]);this.__pm();this._registerEventChaining(arguments[i],null,this.length-1);this.fireDataEvent(o,{value:[arguments[i]],name:(this.length-1)+f,old:[],item:this});this.fireDataEvent(g,{start:this.length-1,end:this.length-1,type:b,items:[arguments[i]],added:[arguments[i]],removed:[]},null);}
;return this.length;}
,reverse:function(){if(this.length==0){return;}
;var x=this.__pl.concat();this.__pl.reverse();this.__pn(0,this.length);this.fireDataEvent(g,{start:0,end:this.length-1,type:c,items:null,added:[],removed:[]},null);this.fireDataEvent(o,{value:this.__pl,name:k+(this.__pl.length-1),old:x,item:this});}
,shift:function(){if(this.length==0){return;}
;var y=this.__pl.shift();this.__pm();this._registerEventChaining(null,y,this.length-1);this.__pn(0,this.length);this.fireDataEvent(o,{value:[],name:m,old:[y],item:this});this.fireDataEvent(g,{start:0,end:this.length-1,type:l,items:[y],removed:[y],added:[]},null);return y;}
,slice:function(A,z){return new qx.data.Array(this.__pl.slice(A,z));}
,splice:function(G,I,K){var N=this.__pl.length;var J=this.__pl.splice.apply(this.__pl,arguments);if(this.__pl.length!=N){this.__pm();}
else if(I==arguments.length-2){var B=qx.lang.Array.fromArguments(arguments,2);for(var i=0;i<B.length;i++ ){if(B[i]!==J[i]){break;}
;if(i==B.length-1){return new qx.data.Array();}
;}
;}
;var L=I>0;var D=arguments.length>2;var F=null;if(L||D){var B=qx.lang.Array.fromArguments(arguments,2);if(J.length==0){var M=b;var E=G+B.length;F=B;}
else if(B.length==0){var M=l;var E=this.length-1;F=J;}
else {var M=d;var E=G+Math.abs(B.length-J.length);}
;this.fireDataEvent(g,{start:G,end:E,type:M,items:F,added:B,removed:J},null);}
;for(var i=0;i<J.length;i++ ){this._registerEventChaining(null,J[i],i);}
;for(var i=2;i<arguments.length;i++ ){this._registerEventChaining(arguments[i],null,G+(i-2));}
;this.__pn(G+(arguments.length-2)-I,this.length);var H=[];for(var i=2;i<arguments.length;i++ ){H[i-2]=arguments[i];}
;var C=(G+Math.max(arguments.length-3,I-1));var name=G==C?C:G+a+C;this.fireDataEvent(o,{value:H,name:name+f,old:J,item:this});return (new qx.data.Array(J));}
,sort:function(P){if(this.length==0){return;}
;var O=this.__pl.concat();this.__pl.sort.apply(this.__pl,arguments);if(qx.lang.Array.equals(this.__pl,O)===true){return;}
;this.__pn(0,this.length);this.fireDataEvent(g,{start:0,end:this.length-1,type:c,items:null,added:[],removed:[]},null);this.fireDataEvent(o,{value:this.__pl,name:k+(this.length-1),old:O,item:this});}
,unshift:function(Q){for(var i=arguments.length-1;i>=0;i-- ){this.__pl.unshift(arguments[i]);this.__pm();this.__pn(0,this.length);this.fireDataEvent(o,{value:[this.__pl[0]],name:m,old:[this.__pl[1]],item:this});this.fireDataEvent(g,{start:0,end:this.length-1,type:b,items:[arguments[i]],added:[arguments[i]],removed:[]},null);}
;return this.length;}
,toArray:function(){return this.__pl;}
,getItem:function(R){return this.__pl[R];}
,setItem:function(S,U){var T=this.__pl[S];if(T===U){return;}
;this.__pl[S]=U;this._registerEventChaining(U,T,S);if(this.length!=this.__pl.length){this.__pm();}
;this.fireDataEvent(o,{value:[U],name:S+f,old:[T],item:this});this.fireDataEvent(g,{start:S,end:S,type:d,items:[U],added:[U],removed:[T]},null);}
,getLength:function(){return this.length;}
,indexOf:function(V){return this.__pl.indexOf(V);}
,lastIndexOf:function(W){return this.__pl.lastIndexOf(W);}
,toString:function(){if(this.__pl!=null){return this.__pl.toString();}
;return f;}
,contains:function(X){return this.__pl.indexOf(X)!==-1;}
,copy:function(){return this.concat();}
,insertAt:function(Y,ba){this.splice(Y,0,ba).dispose();}
,insertBefore:function(bc,bb){var bd=this.indexOf(bc);if(bd==-1){this.push(bb);}
else {this.splice(bd,0,bb).dispose();}
;}
,insertAfter:function(bf,be){var bg=this.indexOf(bf);if(bg==-1||bg==(this.length-1)){this.push(be);}
else {this.splice(bg+1,0,be).dispose();}
;}
,removeAt:function(bh){var bi=this.splice(bh,1);var bj=bi.getItem(0);bi.dispose();return bj;}
,removeAll:function(){for(var i=0;i<this.__pl.length;i++ ){this._registerEventChaining(null,this.__pl[i],i);}
;if(this.getLength()==0){return [];}
;var bl=this.getLength();var bk=this.__pl.concat();this.__pl.length=0;this.__pm();this.fireDataEvent(o,{value:[],name:k+(bl-1),old:bk,item:this});this.fireDataEvent(g,{start:0,end:bl-1,type:l,items:bk,removed:bk,added:[]},null);return bk;}
,append:function(bm){if(bm instanceof qx.data.Array){bm=bm.toArray();}
;{}
;Array.prototype.push.apply(this.__pl,bm);for(var i=0;i<bm.length;i++ ){this._registerEventChaining(bm[i],null,this.__pl.length+i);}
;var bn=this.length;this.__pm();var name=bn==(this.length-1)?bn:bn+a+(this.length-1);this.fireDataEvent(o,{value:bm,name:name+f,old:[],item:this});this.fireDataEvent(g,{start:bn,end:this.length-1,type:b,items:bm,added:bm,removed:[]},null);}
,remove:function(bo){var bp=this.indexOf(bo);if(bp!=-1){this.splice(bp,1).dispose();return bo;}
;}
,equals:function(bq){if(this.length!==bq.length){return false;}
;for(var i=0;i<this.length;i++ ){if(this.getItem(i)!==bq.getItem(i)){return false;}
;}
;return true;}
,sum:function(){var br=0;for(var i=0;i<this.length;i++ ){br+=this.getItem(i);}
;return br;}
,max:function(){var bs=this.getItem(0);for(var i=1;i<this.length;i++ ){if(this.getItem(i)>bs){bs=this.getItem(i);}
;}
;return bs===undefined?null:bs;}
,min:function(){var bt=this.getItem(0);for(var i=1;i<this.length;i++ ){if(this.getItem(i)<bt){bt=this.getItem(i);}
;}
;return bt===undefined?null:bt;}
,forEach:function(bu,bv){for(var i=0;i<this.__pl.length;i++ ){bu.call(bv,this.__pl[i],i,this);}
;}
,filter:function(bw,self){return new qx.data.Array(this.__pl.filter(bw,self));}
,map:function(bx,self){return new qx.data.Array(this.__pl.map(bx,self));}
,some:function(by,self){return this.__pl.some(by,self);}
,every:function(bz,self){return this.__pl.every(bz,self);}
,reduce:function(bB,bA){return this.__pl.reduce(bB,bA);}
,reduceRight:function(bD,bC){return this.__pl.reduceRight(bD,bC);}
,__pm:function(){var bE=this.length;this.length=this.__pl.length;this.fireDataEvent(p,this.length,bE);}
,__pn:function(bG,bF){for(var i=bG;i<bF;i++ ){this._registerEventChaining(this.__pl[i],this.__pl[i],i);}
;}
},destruct:function(){for(var i=0;i<this.__pl.length;i++ ){var bH=this.__pl[i];this._applyEventPropagation(null,bH,i);if(this.isAutoDisposeItems()&&bH&&bH instanceof qx.core.Object){bH.dispose();}
;}
;this.__pl=null;}
});}
)();
(function(){var a="",b="runtime.name",c="node.js",d="rhino",e="undefined",f="titanium",g="qx.bom.client.Runtime";qx.Bootstrap.define(g,{statics:{getName:function(){var name=a;if(typeof environment!==e){name=d;}
else if(typeof process!==e){name=c;}
else if(typeof Titanium!==e&&typeof Titanium.userAgent!==e){name=f;}
else {name=qx.bom.client.Browser.getName();}
;return name;}
},defer:function(h){qx.core.Environment.add(b,h.getName);}
});}
)();
(function(){var a="rim_tabletos",b="10.1",c="Darwin",d="10.3",e="os.version",f="10.7",g="2003",h=")",i="iPhone",j="android",k="unix",l="ce",m="7",n="SymbianOS",o="10.5",p="os.name",q="10.9",r="|",s="MacPPC",t="95",u="iPod",v="10.8",w="\.",x="Win64",y="linux",z="me",A="10.2",B="Macintosh",C="Android",D="Windows",E="98",F="ios",G="vista",H="8",I="blackberry",J="2000",K="8.1",L="(",M="",N="win",O="Linux",P="10.6",Q="BSD",R="10.0",S="10.4",T="Mac OS X",U="iPad",V="X11",W="xp",X="symbian",Y="qx.bom.client.OperatingSystem",bo="g",bp="Win32",bq="osx",bk="webOS",bl="RIM Tablet OS",bm="BlackBerry",bn="nt4",br=".",bs="MacIntel",bt="webos";qx.Bootstrap.define(Y,{statics:{getName:function(){if(!navigator){return M;}
;var bu=navigator.platform||M;var bv=navigator.userAgent||M;if(bu.indexOf(D)!=-1||bu.indexOf(bp)!=-1||bu.indexOf(x)!=-1){return N;}
else if(bu.indexOf(B)!=-1||bu.indexOf(s)!=-1||bu.indexOf(bs)!=-1||bu.indexOf(T)!=-1){return bq;}
else if(bv.indexOf(bl)!=-1){return a;}
else if(bv.indexOf(bk)!=-1){return bt;}
else if(bu.indexOf(u)!=-1||bu.indexOf(i)!=-1||bu.indexOf(U)!=-1){return F;}
else if(bv.indexOf(C)!=-1){return j;}
else if(bu.indexOf(O)!=-1){return y;}
else if(bu.indexOf(V)!=-1||bu.indexOf(Q)!=-1||bu.indexOf(c)!=-1){return k;}
else if(bu.indexOf(n)!=-1){return X;}
else if(bu.indexOf(bm)!=-1){return I;}
;return M;}
,__cS:{"Windows NT 6.3":K,"Windows NT 6.2":H,"Windows NT 6.1":m,"Windows NT 6.0":G,"Windows NT 5.2":g,"Windows NT 5.1":W,"Windows NT 5.0":J,"Windows 2000":J,"Windows NT 4.0":bn,"Win 9x 4.90":z,"Windows CE":l,"Windows 98":E,"Win98":E,"Windows 95":t,"Win95":t,"Mac OS X 10_9":q,"Mac OS X 10.9":q,"Mac OS X 10_8":v,"Mac OS X 10.8":v,"Mac OS X 10_7":f,"Mac OS X 10.7":f,"Mac OS X 10_6":P,"Mac OS X 10.6":P,"Mac OS X 10_5":o,"Mac OS X 10.5":o,"Mac OS X 10_4":S,"Mac OS X 10.4":S,"Mac OS X 10_3":d,"Mac OS X 10.3":d,"Mac OS X 10_2":A,"Mac OS X 10.2":A,"Mac OS X 10_1":b,"Mac OS X 10.1":b,"Mac OS X 10_0":R,"Mac OS X 10.0":R},getVersion:function(){var bw=qx.bom.client.OperatingSystem.__cT(navigator.userAgent);if(bw==null){bw=qx.bom.client.OperatingSystem.__cU(navigator.userAgent);}
;if(bw!=null){return bw;}
else {return M;}
;}
,__cT:function(bx){var bA=[];for(var bz in qx.bom.client.OperatingSystem.__cS){bA.push(bz);}
;var bB=new RegExp(L+bA.join(r).replace(/\./g,w)+h,bo);var by=bB.exec(bx);if(by&&by[1]){return qx.bom.client.OperatingSystem.__cS[by[1]];}
;return null;}
,__cU:function(bF){var bG=bF.indexOf(C)!=-1;var bC=bF.match(/(iPad|iPhone|iPod)/i)?true:false;if(bG){var bE=new RegExp(/ Android (\d+(?:\.\d+)+)/i);var bH=bE.exec(bF);if(bH&&bH[1]){return bH[1];}
;}
else if(bC){var bI=new RegExp(/(CPU|iPhone|iPod) OS (\d+)_(\d+)\s+/);var bD=bI.exec(bF);if(bD&&bD[2]&&bD[3]){return bD[2]+br+bD[3];}
;}
;return null;}
},defer:function(bJ){qx.core.Environment.add(p,bJ.getName);qx.core.Environment.add(e,bJ.getVersion);}
});}
)();
(function(){var a="CSS1Compat",b="msie",c="android",d="operamini",e="gecko",f="maple",g="browser.quirksmode",h="browser.name",i="trident",j="mobile chrome",k=")(/| )([0-9]+\.[0-9])",l="iemobile",m="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",n="IEMobile|Maxthon|MSIE|Trident",o="opera mobi",p="Mobile Safari",q="Maple",r="operamobile",s="ie",t="mobile safari",u="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|PhantomJS|Mobile Safari|Safari",v="qx.bom.client.Browser",w="(Maple )([0-9]+\.[0-9]+\.[0-9]*)",x="",y="opera mini",z="(",A="browser.version",B="opera",C="ce",D="mshtml",E="Opera Mini|Opera Mobi|Opera",F="webkit",G="browser.documentmode",H="5.0",I="Mobile/";qx.Bootstrap.define(v,{statics:{getName:function(){var L=navigator.userAgent;var M=new RegExp(z+qx.bom.client.Browser.__db+k);var K=L.match(M);if(!K){return x;}
;var name=K[1].toLowerCase();var J=qx.bom.client.Engine.getName();if(J===F){if(name===c){name=j;}
else if(L.indexOf(p)!==-1||L.indexOf(I)!==-1){name=t;}
;}
else if(J===D){if(name===b||name===i){name=s;if(qx.bom.client.OperatingSystem.getVersion()===C){name=l;}
;}
;}
else if(J===B){if(name===o){name=r;}
else if(name===y){name=d;}
;}
else if(J===e){if(L.indexOf(q)!==-1){name=f;}
;}
;return name;}
,getVersion:function(){var P=navigator.userAgent;var Q=new RegExp(z+qx.bom.client.Browser.__db+k);var N=P.match(Q);if(!N){return x;}
;var name=N[1].toLowerCase();var O=N[3];if(P.match(/Version(\/| )([0-9]+\.[0-9])/)){O=RegExp.$2;}
;if(qx.bom.client.Engine.getName()==D){O=qx.bom.client.Engine.getVersion();if(name===b&&qx.bom.client.OperatingSystem.getVersion()==C){O=H;}
;}
;if(qx.bom.client.Browser.getName()==f){Q=new RegExp(w);N=P.match(Q);if(!N){return x;}
;O=N[2];}
;return O;}
,getDocumentMode:function(){if(document.documentMode){return document.documentMode;}
;return 0;}
,getQuirksMode:function(){if(qx.bom.client.Engine.getName()==D&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;}
else {return document.compatMode!==a;}
;}
,__db:{"webkit":u,"gecko":m,"mshtml":n,"opera":E}[qx.bom.client.Engine.getName()]},defer:function(R){qx.core.Environment.add(h,R.getName),qx.core.Environment.add(A,R.getVersion),qx.core.Environment.add(G,R.getDocumentMode),qx.core.Environment.add(g,R.getQuirksMode);}
});}
)();


if (typeof exports != "undefined") {for (var key in qx) {exports[key] = qx[key];}}/**
 * This file provides the hashCode() method on Javascript's basic types.
 * Using this should generally be avoided in favor of the actual ported classes (Integer, String, …) as
 * these primitive types are the equivalent of Java's primitive types which don't have a hashCode method either.
 */

(function () {
    'use strict';

    var hashCodeFunctions = {
        'default': function (_this) {
            var hashCode = 0;
            for( var property in _this ) {
                if( !_this.hasOwnProperty( property )
                    || typeof _this[property] === 'undefined' || !_this[property].toString ) {
                    continue;
                }

                var temp = _this[property].toString();
                for( var i = 0; i < temp.length; i++ ) {
                    hashCode = (31 * hashCode + temp.charCodeAt( i )) << 0;
                }
            }

            return hashCode;
        },

        'number': function (_this) {
            return _this | 0;
        },

        'string': function (_this) {
            var hashCode = 0;
            for( var i = 0; i < _this.length; i++ ) {
                hashCode = (31 * hashCode + _this.charCodeAt( i )) << 0;
            }

            return hashCode;
        }
    };

    Object.prototype.hashCode = Object.prototype.hashCode || function () {
        var type = hashCodeFunctions.hasOwnProperty( typeof this ) ? typeof this : 'default';
        return hashCodeFunctions[type]( this );
    };

    var equalsFunctions = {
        'default': function (_this, other) {
            if( typeof other !== typeof _this ) {
                return false;
            }

            for( var property in _this ) {
                if( _this.hasOwnProperty( property )
                    && (!other.hasOwnProperty( property ) || _this[property] !== other[property]) ) {
                    return false;
                }
            }

            return true;
        },

        'number': function (_this, other) {
            return typeof _this === typeof other && _this === other;
        },

        'string': function (_this, other) {
            if( typeof other !== typeof _this ) {
                return false;
            }

            if( _this.length !== other.length ) {
                return false;
            }

            for( var i = 0; i < _this.length; i++ ) {
                if( _this[i] !== other[i] ) {
                    return false;
                }
            }

            return true;
        }
    };

    Object.prototype.equals = Object.prototype.equals || function (other) {
        var type = equalsFunctions.hasOwnProperty( typeof this ) ? typeof this : 'default';
        return equalsFunctions[type]( this, other );
    };
})();qx.Interface.define( 'jsava.io.Serializable', {
} );qx.Class.define( 'jsava.lang.Object', {
    extend: qx.core.Object,

    members: {
        /**
         * @returns {String}
         */
        getClass: function () {
            // TODO return Class object
            return this.name;
        },

        /** @returns {String} */
        getClassName: function () {
            // TODO remove this method and replace with getClass().getName()
            return this.name;
        },

        /**
         * @returns {Number}
         */
        hashCode: function () {
            var hashCode = 0;

            // TODO if hashCode() is available on property, use it
            for( var property in this ) {
                if( !this.hasOwnProperty( property )
                    || typeof this[property] === 'undefined' || !this[property].toString ) {
                    continue;
                }

                var temp = this[property].toString();
                for( var i = 0; i < temp.length; i++ ) {
                    hashCode = (31 * hashCode + temp.charCodeAt( i )) << 0;
                }
            }

            return hashCode;
        },

        /**
         * @param other
         * @returns {Boolean}
         */
        equals: function (other) {
            return this === other;
        },

        clone: function () {
            return this.base( arguments );
        },

        /**
         * @returns {String}
         */
        toString: function () {
            return this.getClass().name + '@' + this.hashCode().toString( 16 );
        },

        notify: function () {
            // TODO
            throw new jsava.lang.UnsupportedOperationException();
        },

        notifyAll: function () {
            // TODO
            throw new jsava.lang.UnsupportedOperationException();
        },

        wait: function () {
            // TODO
            throw new jsava.lang.UnsupportedOperationException();
        },

        finalize: function () {
            throw new jsava.lang.UnsupportedOperationException();
        }
    }
} );qx.Class.define( 'jsava.lang.Throwable', {
    extend: jsava.lang.Object,
    implement: [jsava.io.Serializable],

    construct: function () {
        var args = Array.prototype.slice.call( arguments );
        this.fillInStackTrace();
        this.__cause = this;

        if( args.length === 1
            && qx.Class.isSubClassOf( args[0].constructor, jsava.lang.Throwable ) ) {
            this.__detailMessage = (args[0] === null) ? null : args[0].toString();
            this.__cause = args[0];
        } else if( args.length >= 1 && typeof args[0] === 'string' ) {
            this.__detailMessage = args[0];

            if( args.length === 2
                && qx.Class.isSubClassOf( args[1].constructor, jsava.lang.Throwable ) ) {
                this.__cause = args[1];
            }
        }
    },

    statics: {
        serialVersionUID: 1
    },

    members: {
        __detailMessage: null,
        /** @type jsava.lang.Throwable */
        __cause: null,
        __stackTrace: null,

        getMessage: function () {
            return this.__detailMessage;
        },

        getLocalizedMessage: function () {
            return this.getMessage();
        },

        getCause: function () {
            return this.__cause;
        },

        initCause: function (cause) {
            if( this.__cause !== this ) {
                throw new jsava.lang.IllegalStateException( 'Can\'t overwrite cause' );
            }
            if( cause === this ) {
                throw new jsava.lang.IllegalArgumentException( 'Self-causation is not permitted' );
            }

            this.__cause = cause;
            return this;
        },

        toString: function () {
            var className = this.getClassName(),
                message = this.getLocalizedMessage();
            return message !== null ? (className + ': ' + message) : className;
        },

        printStackTrace: function () {
            // TODO other method signatures
            if( console && console.error ) {
                console.error( this.__stackTrace );
            }
        },

        fillInStackTrace: function () {
            this.__stackTrace = new Error().stack;
        },

        getStackTrace: function () {
            return this.__stackTrace;
        },

        setStackTrace: function (stackTrace) {
            this.__stackTrace = stackTrace;
        }
    }
} );qx.Class.define( 'jsava.lang.Exception', {
    extend: jsava.lang.Throwable,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        serialVersionUID: 1
    }
} );qx.Class.define( 'jsava.lang.RuntimeException', {
    extend: jsava.lang.Exception,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        serialVersionUID: 1
    }
} );qx.Class.define( 'jsava.lang.IndexOutOfBoundsException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        serialVersionUID: 1
    }
} );qx.Class.define( 'jsava.lang.IllegalArgumentException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        serialVersionUID: 1
    }
} );qx.Class.define( 'jsava.lang.CloneNotSupportedException', {
    extend: jsava.lang.Exception,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        serialVersionUID: 1
    }
} );qx.Class.define( 'jsava.lang.NullPointerException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        serialVersionUID: 1
    }
} );qx.Interface.define( 'jsava.lang.Cloneable', {
} );qx.Class.define( 'jsava.lang.System', {
    // TODO much more stuff implement

    extend: jsava.lang.Object,

    type: 'static',

    statics: {
        /**
         * @param {jsava.lang.Object} src
         * @param {Number} srcPos
         * @param {jsava.lang.Object} dest
         * @param {Number} destPos
         * @param {Number} length
         */
        arraycopy: function (src, srcPos, dest, destPos, length) {
            var temp = Array.prototype.slice.call( src );

            for( var i = 0; i < length; i++ ) {
                dest[destPos + i] = temp[srcPos + i];
            }
        }
    }
} );qx.Class.define( 'jsava.lang.ClassCastException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        serialVersionUID: 1
    }
} );qx.Class.define( 'jsava.lang.IllegalStateException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        serialVersionUID: 1
    }
} );qx.Interface.define( 'jsava.lang.Iterable', {
    members: {
        /**
         * Returns an iterator
         *
         * @return {jsava.util.Iterator} an iterator
         */
        iterator: function () {
        }
    }
} );qx.Class.define( 'jsava.lang.UnsupportedOperationException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        serialVersionUID: 1
    }
} );qx.Class.define( 'jsava.lang.NoSuchElementException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        serialVersionUID: 1
    }
} );qx.Class.define( 'jsava.lang.ConcurrentModificationException', {
    extend: jsava.lang.RuntimeException,

    construct: function () {
        this.base.apply( this, Array.prototype.concat.call( arguments, Array.prototype.slice.call( arguments ) ) );
    },

    statics: {
        serialVersionUID: 1
    }
} );qx.Class.define( 'jsava.JsavaUtils', {
    extend: qx.core.Object,

    type: 'static',

    statics: {
        /**
         * Creates an anonymous class and returns it.
         * @returns {*}
         */
        createAnonymousClass: function (config) {
            var clazzName = 'Anonymous';

            var clazz = qx.Class.define( clazzName, config );
            qx.Class.undefine( clazzName );

            return clazz;
        },

        /**
         * Creates and returns an array of given size.
         * @param size
         * @param defaultValue
         * @returns {Array}
         */
        arrayOfGivenSize: function (size, defaultValue) {
            var result = [];
            for( var i = 0; i < size; i++ ) {
                result[i] = defaultValue;
            }

            return result;
        }
    }
} );qx.Interface.define( 'jsava.util.Collection', {
    extend: jsava.lang.Iterable,

    members: {
        /**
         * @return {Integer}
         */
        size: function () {
        },

        /**
         * @return {Boolean}
         */
        isEmpty: function () {
        },

        /**
         * @param {jsava.lang.Object} obj
         * @return {Boolean}
         */
        contains: function (obj) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        /**
         * @inheritDoc
         */
        iterator: function () {
        },

        /**
         * @return {jsava.lang.Object[]}
         */
        toArray: function () {
        },

        /**
         * @param elem
         * @return {Boolean}
         */
        add: function (elem) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        /**
         * @param obj
         * @return {Boolean}
         */
        remove: function (obj) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        containsAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        addAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        removeAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        retainAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        clear: function () {
        },

        /**
         * @param {jsava.lang.Object} other
         * @return {Boolean}
         */
        equals: function (other) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        /**
         * @return {Integer}
         */
        hashCode: function () {
        }
    }
} );qx.Interface.define( 'jsava.util.Set', {
    extend: jsava.util.Collection,

    members: {
        size: function () {
        },

        isEmpty: function () {
        },

        contains: function (obj) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        iterator: function () {
        },

        toArray: function () {
        },

        add: function (elem) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        remove: function (elem) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        containsAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        addAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        retainAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        removeAll: function (collection) {
            this.assertInterface( collection, jsava.util.Collection );
        },

        clear: function () {
        },

        equals: function (other) {
            this.assertArgumentsCount( arguments, 1, 1 );
        },

        hashCode: function () {
        }
    }
} );qx.Interface.define( "jsava.util.Map", {
    statics : {
        Entry: qx.Interface.define( 'jsava.util.Map.Entry', {
            members: {
                getKey: function () {
                },

                getValue: function () {
                },

                setValue: function (value) {
                },

                equals: function (other) {
                },

                hashCode: function () {
                }
            }
        } )
    },

    members: {
        /**
         * @return {Integer}
         */
        size: function () {
        },

        /**
         * @return {Boolean}
         */
        isEmpty: function () {
        },

        /**
         * @param {jsava.lang.Object} key
         * @return {Boolean}
         */
        containsKey: function (key) {
        },

        /**
         * @param {jsava.lang.Object} value
         * @return {Boolean}
         */
        containsValue: function (value) {
        },

        get: function (key) {
        },

        put: function (key, value) {

        },

        remove: function (key) {
        },

        putAll: function (map) {
        },

        clear: function () {

        },

        /**
         * @return {jsava.util.Set}
         */
        keySet: function () {
        },

        /**
         * @return {jsava.util.Collection}
         */
        values: function () {
        },

        /**
         * @return {jsava.util.Set}
         */
        entrySet: function () {
        },

        /**
         * @param other
         * @return {Boolean}
         */
        equals: function (other) {
        },

        /**
         * @return {Integer}
         */
        hashCode: function () {
        }
    }
} );qx.Interface.define( 'jsava.util.Iterator', {
    members: {
        /**
         * @return {Boolean}
         */
        hasNext: function () {
        },

        /**
         * @return {*}
         */
        next: function () {
        },

        remove: function () {
        }
    }
} );qx.Class.define( 'jsava.util.AbstractCollection', {
    extend: jsava.lang.Object,
    implement: [jsava.util.Collection],

    type: 'abstract',

    /** @protected */
    construct: function () {
    },

    members: {
        /** @abstract */
        iterator: function () {
        },

        /** @abstract */
        size: function () {
        },

        isEmpty: function () {
            return this.size() === 0;
        },

        contains: function (obj) {
            var iterator = this.iterator();
            if( obj === null ) {
                while( iterator.hasNext() ) {
                    if( iterator.next() === null ) {
                        return true;
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    if( obj.equals( iterator.next() ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        toArray: function () {
            if( Array.prototype.slice.call( arguments ).length !== 0 ) {
                // TODO overloaded signature
                throw new jsava.lang.UnsupportedOperationException();
            }

            /** @type jsava.lang.Object[] */
            var result = [],
                iterator = this.iterator();
            while( iterator.hasNext() ) {
                result.push( iterator.next() );
            }

            return result;
        },

        add: function (elem) {
            throw new jsava.lang.UnsupportedOperationException();
        },

        remove: function (obj) {
            var iterator = this.iterator();
            if( obj === null ) {
                while( iterator.hasNext() ) {
                    if( iterator.next() === null ) {
                        iterator.remove();
                        return true;
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    if( obj.equals( iterator.next() ) ) {
                        iterator.remove();
                        return true;
                    }
                }
            }

            return false;
        },

        containsAll: function (collection) {
            var iterator = collection.iterator();
            while( iterator.hasNext() ) {
                if( !this.contains( iterator.next() ) ) {
                    return false;
                }
            }

            return true;
        },

        addAll: function (collection) {
            var modified = false,
                iterator = collection.iterator();
            while( iterator.hasNext() ) {
                if( this.add( iterator.next() ) ) {
                    modified = true;
                }
            }

            return modified;
        },

        removeAll: function (collection) {
            var modified = false,
                iterator = this.iterator();
            while( iterator.hasNext() ) {
                if( collection.contains( iterator.next() ) ) {
                    iterator.remove();
                    modified = true;
                }
            }

            return modified;
        },

        retainAll: function (collection) {
            var modified = false,
                iterator = this.iterator();
            while( iterator.hasNext() ) {
                if( !collection.contains( iterator.next() ) ) {
                    iterator.remove();
                    modified = true;
                }
            }

            return modified;
        },

        clear: function () {
            var iterator = this.iterator();
            while( iterator.hasNext() ) {
                iterator.next();
                iterator.remove();
            }
        },

        toString: function () {
            var iterator = this.iterator();
            if( !iterator.hasNext() ) {
                return '[]';
            }

            // TODO use StringBuilder
            var result = '[';
            for( ; ; ) {
                var element = iterator.next();
                result += element === this ? '(this Collection)' : element;
                if( !iterator.hasNext() ) {
                    return result + ']';
                }

                result += ', ';
            }
        }
    }
} );qx.Class.define( 'jsava.util.AbstractSet', {
    extend: jsava.util.AbstractCollection,
    implement: [jsava.util.Set],

    type: 'abstract',

    /** @protected */
    construct: function () {
    },

    members: {
        equals: function (obj) {
            if( obj === this ) {
                return true;
            }

            if( obj === null ) {
                return false;
            }

            if( !qx.Class.implementsInterface( obj, jsava.util.Set ) ) {
                return false;
            }

            /** @implements jsava.util.Collection */
            var collection = obj;

            if( collection.size() !== this.size() ) {
                return false;
            }

            try {
                return this.containsAll( collection );
            } catch( e ) {
                if( qx.Class.isSubClassOf( e.constructor, jsava.lang.ClassCastException )
                    || qx.Class.isSubClassOf( e.constructor, jsava.lang.NullPointerException ) ) {
                    return false;
                }

                throw e;
            }
        },

        hashCode: function () {
            var hashCode = 0,
                iterator = this.iterator();
            while( iterator.hasNext() ) {
                var obj = iterator.next();
                if( obj !== null ) {
                    hashCode += obj.hashCode();
                }
            }

            return hashCode;
        },

        removeAll: function (collection) {
            var modified = false;

            if( this.size > collection.size() ) {
                var iterator = collection.iterator();
                while( iterator.hasNext() ) {
                    modified = this.remove( iterator.next() ) || modified;
                }
            } else {
                var iterator = this.iterator();
                while( iterator.hasNext() ) {
                    if( collection.contains( iterator.next() ) ) {
                        iterator.remove();
                        modified = true;
                    }
                }
            }

            return modified;
        }
    }
} );qx.Class.define( 'jsava.util.AbstractMap', {
    extend: jsava.lang.Object,
    implement: jsava.util.Map,

    type: 'abstract',

    /** @protected */
    construct: function () {
    },

    statics: {
        SimpleEntry: qx.Class.define( 'jsava.util.AbstractMap.SimpleEntry', {
            extend: jsava.util.Map.Entry,
            implement: [jsava.io.Serializable],

            construct: function () {
                var args = Array.prototype.slice.call( arguments );
                switch( args.length ) {
                    case 1:
                        this.assertInterface( args[0], jsava.util.Map.Entry );
                        this.__key = args[0].getKey();
                        this.__value = args[0].getValue();
                        break;
                    case 2:
                        this.__key = args[0];
                        this.__value = args[1];
                        break;
                    default:
                        throw new jsava.lang.IllegalArgumentException();
                        break;
                }
            },

            statics: {
                serialVersionUID: 1
            },

            members: {
                __key: null,
                __value: null,

                __eq: function (obj1, obj2) {
                    return obj1 === null ? obj2 === null : obj1.equals( obj2 );
                },

                getKey: function () {
                    return this.__key;
                },

                getValue: function () {
                    return this.__value;
                },

                setValue: function (value) {
                    var oldValue = this.__value;
                    this.__value = value;
                    return oldValue;
                },

                equals: function (other) {
                    if( other === null || !( qx.Interface.objectImplements( other, jsava.util.Map.Entry ) ) ) {
                        return false;
                    }

                    return this.__eq( this.__key, other.getKey() ) && this.__eq( this.__value, other.getValue() );
                },

                hashCode: function () {
                    return (this.__key === null ? 0 : this.__key.hashCode()) ^
                        (this.__value === null ? 0 : this.__value.hashCode());
                },

                toString: function () {
                    return this.__key + '=' + this.__value;
                }
            }
        } ),

        SimpleImmutableEntry: qx.Class.define( 'jsava.util.AbstractMap.SimpleImmutableEntry', {
            extend: jsava.util.Map.Entry,
            implement: [jsava.io.Serializable],

            construct: function () {
                var args = Array.prototype.slice.call( arguments );
                switch( args.length ) {
                    case 1:
                        this.assertInterface( args[0], jsava.util.Map.Entry );
                        this.__key = args[0].getKey();
                        this.__value = args[0].getValue();
                        break;
                    case 2:
                        this.__key = args[0];
                        this.__value = args[1];
                        break;
                    default:
                        throw new jsava.lang.IllegalArgumentException();
                        break;
                }
            },

            statics: {
                serialVersionUID: 1
            },

            members: {
                __key: null,
                __value: null,

                __eq: function (obj1, obj2) {
                    return obj1 === null ? obj2 === null : obj1.equals( obj2 );
                },

                getKey: function () {
                    return this.__key;
                },

                getValue: function () {
                    return this.__value;
                },

                setValue: function (value) {
                    throw new jsava.lang.UnsupportedOperationException();
                },

                equals: function (other) {
                    if( other === null || !( qx.Interface.objectImplements( other, jsava.util.Map.Entry ) ) ) {
                        return false;
                    }

                    return this.__eq( this.__key, other.getKey() ) && this.__eq( this.__value, other.getValue() );
                },

                hashCode: function () {
                    return (this.__key === null ? 0 : this.__key.hashCode()) ^
                        (this.__value === null ? 0 : this.__value.hashCode());
                },

                toString: function () {
                    return this.__key + '=' + this.__value;
                }
            }
        } )
    },

    members: {
        /** @implements jsava.util.Set */
        _keySet: null,
        /** @implements jsava.util.Collection */
        _values: null,

        /** @abstract */
        entrySet: function () {
        },

        size: function () {
            return this.entrySet().size();
        },

        isEmpty: function () {
            return this.size() === 0;
        },

        containsValue: function (value) {
            var iterator = this.entrySet().iterator();
            if( value === null ) {
                while( iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( entry.getValue() === null ) {
                        return true;
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( value.equals( entry.getValue() ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        containsKey: function (key) {
            var iterator = this.entrySet().iterator();
            if( key === null ) {
                while( iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( entry.getKey() === null ) {
                        return true;
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( key.equals( entry.getKey() ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        get: function (key) {
            var iterator = this.entrySet().iterator();
            if( key === null ) {
                while( iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( entry.getKey() === null ) {
                        return entry.getValue();
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( key.equals( entry.getKey() ) ) {
                        return entry.getValue();
                    }
                }
            }

            return null;
        },

        put: function (key, value) {
            throw new jsava.lang.UnsupportedOperationException();
        },

        remove: function (key) {
            var iterator = this.entrySet().iterator(),
                correctEntry = null;
            if( key === null ) {
                while( correctEntry === null && iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( entry.getKey() === null ) {
                        correctEntry = entry;
                    }
                }
            } else {
                while( correctEntry === null && iterator.hasNext() ) {
                    var entry = iterator.next();
                    if( key.equals( entry.getKey() ) ) {
                        correctEntry = entry;
                    }
                }
            }

            var oldValue = null;
            if( correctEntry !== null ) {
                oldValue = correctEntry.getValue();
                iterator.remove();
            }

            return oldValue;
        },

        putAll: function (map) {
            var iterator = map.entrySet().iterator();
            while( iterator.hasNext() ) {
                var entry = iterator.next();
                this.put( entry.getKey(), entry.getValue() );
            }
        },

        clear: function () {
            this.entrySet().clear();
        },

        keySet: function () {
            if( this._keySet === null ) {
                var _this = this;

                this._keySet = new (jsava.JsavaUtils.createAnonymousClass( {
                    extend: jsava.util.AbstractSet,

                    construct: function () {
                    },

                    members: {
                        iterator: function () {
                            return new (jsava.JsavaUtils.createAnonymousClass( {
                                extend: jsava.lang.Object,
                                implement: [jsava.util.Iterator],

                                construct: function () {
                                },

                                members: {
                                    __iterator: _this.entrySet().iterator(),

                                    hasNext: function () {
                                        return this.__iterator.hasNext();
                                    },

                                    next: function () {
                                        return this.__iterator.next().getKey();
                                    },

                                    remove: function () {
                                        this.__iterator.remove();
                                    }
                                }
                            } ) );
                        },

                        size: function () {
                            return _this.size();
                        },

                        contains: function (key) {
                            return _this.containsKey( key );
                        }
                    }
                } ) );
            }

            return this._keySet;
        },

        values: function () {
            if( this._values === null ) {
                var _this = this;

                this._values = new (jsava.JsavaUtils.createAnonymousClass( {
                    extend: jsava.util.AbstractCollection,

                    construct: function () {
                    },

                    members: {
                        iterator: function () {
                            return new (jsava.JsavaUtils.createAnonymousClass( {
                                extend: jsava.lang.Object,
                                implement: [jsava.util.Iterator],

                                construct: function () {
                                },

                                members: {
                                    __iterator: _this.entrySet().iterator(),

                                    hasNext: function () {
                                        return this.__iterator.hasNext();
                                    },

                                    next: function () {
                                        return this.__iterator.next().getValue();
                                    },

                                    remove: function () {
                                        this.__iterator.remove();
                                    }
                                }
                            } ) );
                        },

                        size: function () {
                            return _this.size();
                        },

                        contains: function (value) {
                            return _this.containsValue( value );
                        }
                    }
                } ) );
            }

            return this._values;
        },

        equals: function (other) {
            if( other === this ) {
                return true;
            }

            if( other === null ) {
                return false;
            }

            if( !qx.Interface.objectImplements( other, jsava.util.Map ) ) {
                return false;
            }

            if( other.size() !== this.size() ) {
                return false;
            }

            try {
                var iterator = this.entrySet().iterator();
                while( iterator.hasNext() ) {
                    var entry = iterator.next(),
                        key = entry.getKey(),
                        value = entry.getValue();
                    if( value === null ) {
                        if( !(other.get( key ) === null && other.containsKey( key )) ) {
                            return false;
                        }
                    } else {
                        if( !value.equals( other.get( key ) ) ) {
                            return false
                        }
                    }
                }
            } catch( e ) {
                if( qx.Class.isSubClassOf( e.constructor, jsava.lang.ClassCastException )
                    || qx.Class.isSubClassOf( e.constructor, jsava.lang.NullPointerException ) ) {
                    return false;
                }
            }

            return true;
        },

        hashCode: function () {
            var hashCode = 0,
                iterator = this.entrySet().iterator();
            while( iterator.hasNext() ) {
                hashCode += iterator.next().hashCode();
            }

            return hashCode;
        },

        toString: function () {
            var iterator = this.entrySet().iterator();
            if( !iterator.hasNext() ) {
                return '{}';
            }

            // TODO use java.lang.StringBuilder
            var result = '{';
            for( ; ; ) {
                var entry = iterator.next(),
                    key = entry.getKey(),
                    value = entry.getValue();
                result += (key === this) ? '(this Map)' : key;
                result += '=';
                result += (value === this) ? '(this Map)' : value;

                if( !iterator.hasNext() ) {
                    return result += '}';
                }

                result += ', ';
            }
        },

        clone: function () {
            var result = this.base( arguments );
            result._keySet = null;
            result._values = null;
            return result;
        }
    }
} );qx.Class.define( 'jsava.util.HashMap', {
    extend: jsava.util.AbstractMap,
    implement: [jsava.util.Map, jsava.io.Serializable, jsava.lang.Cloneable],

    construct: function () {
        var args = Array.prototype.slice.call( arguments ),
            initialCapacity = this.self( arguments ).DEFAULT_INITIAL_CAPACITY,
            loadFactor = this.self( arguments ).DEFAULT_LOAD_FACTOR;

        switch( args.length ) {
            case 1:
                if( qx.Class.implementsInterface( args[0], jsava.util.Map ) ) {
                    initialCapacity = Math.max( ((args[0].size() / this.self( arguments ).DEFAULT_LOAD_FACTOR) | 0) + 1,
                        this.self( arguments ).DEFAULT_INITIAL_CAPACITY );
                    loadFactor = this.self( arguments ).DEFAULT_LOAD_FACTOR;
                } else {
                    initialCapacity = args[0];
                }
                break;
            case 2:
                initialCapacity = args[0];
                loadFactor = args[1];
                break;
        }

        if( initialCapacity < 0 ) {
            throw new jsava.lang.IllegalArgumentException( 'Illegal initial capacity: ' + initialCapacity );
        }
        if( initialCapacity > this.self( arguments ).MAXIMUM_CAPACITY ) {
            initialCapacity = this.self( arguments ).MAXIMUM_CAPACITY;
        }
        if( loadFactor <= 0 || isNaN( loadFactor ) ) {
            throw new jsava.lang.IllegalArgumentException( 'Illegal load factor: ' + loadFactor );
        }

        var capacity = 1;
        while( capacity < initialCapacity ) {
            capacity <<= 1;
        }

        this._loadFactor = loadFactor;
        this._threshold = (capacity * loadFactor) | 0;
        this._table = jsava.JsavaUtils.arrayOfGivenSize( capacity, null );
        this._init();
    },

    statics: {
        serialVersionUID: 1,

        DEFAULT_INITIAL_CAPACITY: 16,
        MAXIMUM_CAPACITY: 1 << 30,
        DEFAULT_LOAD_FACTOR: 0.75,

        _hash: function (hash) {
            hash ^= (hash >>> 20) ^ (hash >>> 12);
            return hash ^ (hash >>> 7) ^ (hash >>> 4);
        },

        _indexFor: function (hashCode, length) {
            return hashCode & (length - 1);
        },

        Entry: qx.Class.define( 'jsava.util.HashMap.Entry', {
            extend: jsava.lang.Object,
            implement: [jsava.util.Map.Entry],

            construct: function (hash, key, value, nextEntry) {
                this._value = value;
                this._next = nextEntry;
                this._key = key;
                this._hash = hash;
            },

            members: {
                _key: null,
                _value: null,
                /** @type jsava.util.HashMap.Entry */
                _next: null,
                /** @type Number */
                _hash: 0,

                getKey: function () {
                    return this._key;
                },

                getValue: function () {
                    return this._value;
                },

                setValue: function (newValue) {
                    var oldValue = this._value;
                    this._value = newValue;
                    return oldValue;
                },

                equals: function (obj) {
                    if( obj === null || !qx.Class.implementsInterface( obj, jsava.util.HashMap.Entry ) ) {
                        return false;
                    }

                    /** @type jsava.util.HashMap.Entry */
                    var entry = obj,
                        key1 = this.getKey(),
                        key2 = entry.getKey();
                    if( key1 === key2 || (key1 !== null && key1.equals( key2 )) ) {
                        var value1 = this.getValue(),
                            value2 = entry.getValue();
                        if( value1 === value2 || (value1 !== null && value1.equals( value2 )) ) {
                            return true;
                        }
                    }

                    return false;
                },

                hashCode: function () {
                    return (this._key === null ? 0 : this._key.hashCode()) ^
                        (this._value === null ? 0 : this._value.hashCode());
                },

                toString: function () {
                    return this.getKey() + '=' + this.getValue();
                },

                /**
                 * This method is invoked whenever the value in an entry is
                 * overwritten by an invocation of put(k,v) for a key k that's already
                 * in the HashMap.
                 */
                _recordAccess: function (map) {
                },

                /**
                 * This method is invoked whenever the entry is
                 * removed from the table.
                 */
                _recordRemoval: function (map) {
                }
            }
        } )
    },

    members: {
        /** @type jsava.util.HashMap.Entry[] */
        _table: null,
        /** @type Number */
        _size: 0,
        /** @type Number */
        _threshold: 0,
        /** @type Number */
        _loadFactor: 0,
        /** @type Number */
        _modCount: 0,
        /** @implements jsava.util.Set */
        __entrySet: null,

        /**
         * Initialization hook for subclasses. This method is called
         * in all constructors and pseudo-constructors (clone, readObject)
         * after HashMap has been initialized but before any entries have
         * been inserted.  (In the absence of this method, readObject would
         * require explicit knowledge of subclasses.)
         */
        _init: function () {
        },

        size: function () {
            return this._size;
        },

        isEmpty: function () {
            return this._size === 0;
        },

        get: function (key) {
            if( key === null ) {
                return this.__getForNullKey();
            }

            var hash = this.self( arguments )._hash( key.hashCode() );
            for( var entry = this._table[this.self( arguments )._indexFor( hash, this._table.length )];
                 entry !== null; entry = entry._next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry._hash === hash && ((k = entry._key) === key || key.equals( k )) ) {
                    return entry._value;
                }
            }

            return null;
        },

        __getForNullKey: function () {
            for( var entry = this._table[0]; entry !== null; entry = entry._next ) {
                if( entry._key === null ) {
                    return entry._value;
                }
            }

            return null;
        },

        containsKey: function (key) {
            return this._getEntry( key ) !== null;
        },

        _getEntry: function (key) {
            var hash = (key === null) ? 0 : this.self( arguments )._hash( key.hashCode() );
            for( var entry = this._table[this.self( arguments )._indexFor( hash, this._table.length )];
                 entry !== null; entry = entry._next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry._hash === hash
                    && ( ( k = entry._key ) === key || ( key !== null && key.equals( k ) ) ) ) {
                    return entry;
                }
            }

            return null;
        },

        put: function (key, value) {
            if( key === null ) {
                return this.__putForNullKey( value );
            }

            var hash = this.self( arguments )._hash( key.hashCode() ),
                i = this.self( arguments )._indexFor( hash, this._table.length );
            for( var entry = this._table[i]; entry !== null; entry = entry._next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry._hash === hash && ( (k = entry._key) === key || key.equals( k ) ) ) {
                    var oldValue = entry._value;
                    entry._value = value;
                    entry._recordAccess( this );
                    return oldValue;
                }
            }

            this._modCount++;
            this._addEntry( hash, key, value, i );
            return null;
        },

        __putForNullKey: function (value) {
            for( var entry = this._table[0]; entry !== null; entry = entry._next ) {
                if( entry._key === null ) {
                    var oldValue = entry._value;
                    entry._value = value;
                    entry._recordAccess( this );
                    return oldValue;
                }
            }

            this._modCount++;
            this._addEntry( 0, null, value, 0 );
            return null;
        },

        __putForCreate: function (key, value) {
            var hash = (key === null) ? 0 : this.self( arguments )._hash( key.hashCode() ),
                i = this.self( arguments )._indexFor( hash, this._table.length );
            for( var entry = this._table[i]; entry !== null; entry = entry._next ) {
                /** @type jsava.lang.Object */
                var k;
                if( entry._hash === hash
                    && ( (k = entry._key) === key || ( key !== null && key.equals( k ) ) ) ) {
                    entry._value = value;
                    return;
                }
            }

            this._createEntry( hash, key, value, i );
        },

        __putAllForCreate: function (map) {
            var iterator = map.entrySet().iterator();
            while( iterator.hasNext() ) {
                var entry = iterator.next();
                this.__putForCreate( entry.getKey(), entry.getValue() );
            }
        },

        _resize: function (newCapacity) {
            var oldTable = this._table,
                oldCapacity = oldTable.length;
            if( oldCapacity === this.self( arguments ).MAXIMUM_CAPACITY ) {
                this._threshold = Number.MAX_VALUE;
                return;
            }

            var newTable = jsava.JsavaUtils.arrayOfGivenSize( newCapacity, null );
            this._transfer( newTable );
            this._table = newTable;
            this._threshold = (newCapacity * this._loadFactor) | 0;
        },

        _transfer: function (newTable) {
            var src = this._table,
                newCapacity = newTable.length;
            for( var j = 0; j < src.length; j++ ) {
                var entry = src[j];
                if( entry !== null ) {
                    src[j] = null;
                    do {
                        var next = entry._next,
                            i = this.self( arguments )._indexFor( entry._hash, newCapacity );
                        entry._next = newTable[i];
                        newTable[i] = entry;
                        entry = next;
                    } while( entry !== null );
                }
            }
        },

        putAll: function (map) {
            var numKeysToBeAdded = map.size();
            if( numKeysToBeAdded === 0 ) {
                return;
            }

            if( numKeysToBeAdded > this._threshold ) {
                var targetCapacity = (numKeysToBeAdded / this._loadFactor + 1) | 0;
                if( targetCapacity > this.self( arguments ).MAXIMUM_CAPACITY ) {
                    targetCapacity = this.self( arguments ).MAXIMUM_CAPACITY;
                }

                var newCapacity = this._table.length;
                while( newCapacity < targetCapacity ) {
                    newCapacity <<= 1;
                }
                if( newCapacity > this._table.length ) {
                    this._resize( newCapacity );
                }
            }

            var iterator = map.entrySet().iterator();
            while( iterator.hasNext() ) {
                var entry = iterator.next();
                this.put( entry.getKey(), entry.getValue() );
            }
        },

        remove: function (key) {
            var entry = this._removeEntryForKey( key );
            return entry === null ? null : entry._value;
        },

        _removeEntryForKey: function (key) {
            var hash = (key === null) ? 0 : this.self( arguments )._hash( key.hashCode() ),
                i = this.self( arguments )._indexFor( hash, this._table.length ),
                prev = this._table[i],
                entry = prev;

            while( entry !== null ) {
                var next = entry._next,
                    /** @type jsava.lang.Object */
                        k;
                if( entry._hash === hash
                    && ( (k = entry._key) === key || ( key !== null && key.equals( k ) ) ) ) {
                    this._modCount++;
                    this._size--;
                    if( prev === entry ) {
                        this._table[i] = next;
                    } else {
                        prev._next = next;
                    }
                    entry._recordRemoval( this );
                    return entry;
                }
                prev = entry;
                entry = next;
            }

            return entry;
        },

        _removeMapping: function (obj) {
            if( obj === null || !qx.Class.implementsInterface( obj, jsava.util.Map.Entry ) ) {
                return null;
            }

            /** @implements jsava.util.Map.Entry */
            var entry = obj,
                key = entry.getKey(),
                hash = (key === null) ? 0 : this.self( arguments )._hash( key.hashCode() ),
                i = this.self( arguments )._indexFor( hash, this._table.length ),
                prev = this._table[i],
                e = prev;

            while( e !== null ) {
                var next = e._next;
                if( e._hash === hash && e.equals( entry ) ) {
                    this._modCount++;
                    this._size--;
                    if( prev === e ) {
                        this._table[i] = next;
                    } else {
                        prev._next = next;
                    }
                    e._recordRemoval( this );
                    return e;
                }
                prev = e;
                e = next;
            }

            return e;
        },

        clear: function () {
            this._modCount++;
            var table = this._table;
            for( var i = 0; i < table.length; i++ ) {
                table[i] = null;
            }
            this._size = 0;
        },

        containsValue: function (value) {
            if( value === null ) {
                return this.__containsNullValue();
            }

            var table = this._table;
            for( var i = 0; i < table.length; i++ ) {
                for( var entry = table[i]; entry !== null; entry = entry._next ) {
                    if( value.equals( entry._value ) ) {
                        return true;
                    }
                }
            }

            return false;
        },

        __containsNullValue: function () {
            var table = this._table;
            for( var i = 0; i < table.length; i++ ) {
                for( var entry = table[i]; entry !== null; entry = entry._next ) {
                    if( entry._value === null ) {
                        return true;
                    }
                }
            }

            return false;
        },

        clone: function () {
            /** @type jsava.util.HashMap */
            var result = null;
            try {
                result = this.base( arguments );
            } catch( e ) {
                if( !qx.Class.isSubClassOf( e.constructor, jsava.lang.CloneNotSupportedException ) ) {
                    throw e;
                }
            }

            result._table = jsava.JsavaUtils.arrayOfGivenSize( this._table.length, null );
            result.__entrySet = null;
            result._modCount = 0;
            result._size = 0;
            result._init();
            result.__putAllForCreate( this );

            return result;
        },

        _addEntry: function (hash, key, value, bucketIndex) {
            var entry = this._table[bucketIndex];
            this._table[bucketIndex] = new (this.self( arguments ).Entry)( hash, key, value, entry );
            if( this._size++ >= this._threshold ) {
                this._resize( 2 * this._table.length );
            }
        },

        _createEntry: function (hash, key, value, bucketIndex) {
            var entry = this._table[bucketIndex];
            this._table[bucketIndex] = new (this.self( arguments ).Entry)( hash, key, value, entry );
            this._size++;
        },

        keySet: function () {
            var keySet = this._keySet;
            return keySet !== null ? keySet : ( this._keySet = new this.KeySet( this ) );
        },

        values: function () {
            var values = this._values;
            return values !== null ? values : ( this._values = new this.Values( this ) );
        },

        entrySet: function () {
            return this.__entrySet0();
        },

        __entrySet0: function () {
            var entrySet = this.__entrySet;
            return entrySet !== null ? entrySet : ( this.__entrySet = new this.EntrySet( this ) );
        },

        /** @private */
        HashIterator: qx.Class.define( 'jsava.util.HashMap.HashIterator', {
            extend: jsava.lang.Object,
            implement: [jsava.util.Iterator],

            type: 'abstract',

            /** @protected */
            construct: function (thisHashMap) {
                this.__thisHashMap = thisHashMap;
                this._expectedModCount = this.__thisHashMap._modCount;
                if( this.__thisHashMap._size > 0 ) {
                    var table = this.__thisHashMap._table;
                    while( this._index < table.length && ( this._next = table[this._index++] ) === null ) {
                        // do nothing
                    }
                }
            },

            members: {
                __thisHashMap: null,

                /** @type jsava.util.HashMap.Entry */
                _next: null,
                /** @type Number */
                _expectedModCount: 0,
                /** @type Number */
                _index: 0,
                /** @type jsava.util.HashMap.Entry */
                _current: null,

                hasNext: function () {
                    return this._next !== null;
                },

                _nextEntry: function () {
                    if( this.__thisHashMap._modCount !== this._expectedModCount ) {
                        throw new jsava.lang.ConcurrentModificationException();
                    }

                    var entry = this._next;
                    if( entry === null ) {
                        throw new jsava.lang.NoSuchElementException();
                    }

                    if( (this._next = entry._next) === null ) {
                        var table = this.__thisHashMap._table;
                        while( this._index < table.length && ( this._next = table[this._index++] ) === null ) {
                            // do nothing
                        }
                    }

                    this._current = entry;
                    return entry;
                },

                remove: function () {
                    if( this._current === null ) {
                        throw new jsava.lang.IllegalStateException();
                    }

                    if( this.__thisHashMap._modCount !== this._expectedModCount ) {
                        throw new jsava.lang.ConcurrentModificationException();
                    }

                    var key = this._current._key;
                    this._current = null;
                    this.__thisHashMap._removeEntryForKey( key );
                    this._expectedModCount = this.__thisHashMap._modCount;
                }
            }
        } ),

        _newKeyIterator: function () {
            return new this.KeyIterator( this );
        },

        _newValueIterator: function () {
            return new this.ValueIterator( this );
        },

        _newEntryIterator: function () {
            return new this.EntryIterator( this );
        },

        /** @private */
        ValueIterator: qx.Class.define( 'jsava.util.HashMap.ValueIterator', {
            extend: jsava.util.HashMap.HashIterator,

            construct: function (thisHashMap) {
                this.base( arguments, thisHashMap );
            },

            members: {
                next: function () {
                    return this._nextEntry()._value;
                }
            }
        } ),

        /** @private */
        KeyIterator: qx.Class.define( 'jsava.util.HashMap.KeyIterator', {
            extend: jsava.util.HashMap.HashIterator,

            construct: function (thisHashMap) {
                this.base( arguments, thisHashMap );
            },

            members: {
                next: function () {
                    return this._nextEntry().getKey();
                }
            }
        } ),

        /** @private */
        EntryIterator: qx.Class.define( 'jsava.util.HashMap.EntryIterator', {
            extend: jsava.util.HashMap.HashIterator,

            construct: function (thisHashMap) {
                this.base( arguments, thisHashMap );
            },

            members: {
                next: function () {
                    return this._nextEntry();
                }
            }
        } ),

        /** @private */
        KeySet: qx.Class.define( 'jsava.util.HashMap.KeySet', {
            extend: jsava.util.AbstractSet,

            construct: function (thisHashMap) {
                this.base( arguments );
                this.__thisHashMap = thisHashMap;
            },

            members: {
                __thisHashMap: null,

                iterator: function () {
                    return this.__thisHashMap._newKeyIterator();
                },

                size: function () {
                    return this.__thisHashMap._size;
                },

                contains: function (obj) {
                    return this.__thisHashMap.containsKey( obj );
                },

                remove: function (obj) {
                    return this.__thisHashMap._removeEntryForKey( obj ) !== null;
                },

                clear: function () {
                    this.__thisHashMap.clear();
                }
            }
        } ),

        /** @private */
        Values: qx.Class.define( 'jsava.util.HashMap.Values', {
            extend: jsava.util.AbstractCollection,

            construct: function (thisHashMap) {
                this.base( arguments );
                this.__thisHashMap = thisHashMap;
            },

            members: {
                __thisHashMap: null,

                iterator: function () {
                    return this.__thisHashMap._newValueIterator();
                },

                size: function () {
                    return this.__thisHashMap._size;
                },

                contains: function (obj) {
                    return this.__thisHashMap.containsValue( obj );
                },

                clear: function () {
                    this.__thisHashMap.clear();
                }
            }
        } ),

        /** @private */
        EntrySet: qx.Class.define( 'jsava.util.HashMap.EntrySet', {
            extend: jsava.util.AbstractSet,

            construct: function (thisHashMap) {
                this.base( arguments );
                this.__thisHashMap = thisHashMap;
            },

            members: {
                __thisHashMap: null,

                iterator: function () {
                    return this.__thisHashMap._newEntryIterator();
                },

                size: function () {
                    return this.__thisHashMap._size;
                },

                contains: function (obj) {
                    if( obj === null || !qx.Class.implementsInterface( obj, jsava.util.Map.Entry ) ) {
                        return false;
                    }

                    /** @implements jsava.util.Map.Entry */
                    var entry = obj,
                        candidate = this.__thisHashMap._getEntry( entry.getKey() );
                    return candidate !== null && candidate.equals( entry );
                },

                remove: function (obj) {
                    return this.__thisHashMap._removeMapping( obj ) !== null;
                },

                clear: function () {
                    this.__thisHashMap.clear();
                }
            }
        } )
    }
} );qx.Interface.define( 'jsava.util.List', {
    extend: jsava.util.Collection,

    members: {
        /**
         * @return {Number}
         */
        size: function () {
        },

        /**
         * @return {Boolean}
         */
        isEmpty: function () {
        },

        /**
         * @return {Boolean}
         */
        contains: function (obj) {
        },

        /**
         * @return {jsava.util.Iterator}
         */
        iterator: function () {
        },

        /**
         * @return {jsava.lang.Object[]}
         */
        toArray: function () {
        },

        /**
         * @return {Boolean}
         */
        add: function () {
        },

        /**
         * @param {jsava.lang.Object} obj
         * @return {Boolean}
         */
        remove: function (obj) {
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        containsAll: function (collection) {
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        addAll: function (collection) {
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        removeAll: function (collection) {
        },

        /**
         * @param {jsava.util.Collection} collection
         * @return {Boolean}
         */
        retainAll: function (collection) {
        },

        clear: function () {
        },

        /**
         * @param {jsava.lang.Object} other
         * @return {Boolean}
         */
        equals: function (other) {
        },

        /**
         * @return {Number}
         */
        hashCode: function () {
        },

        /**
         * @param {Number} index
         */
        get: function (index) {
        },

        /**
         * @param {Number} index
         * @param element
         */
        set: function (index, element) {
        },

        /**
         * @param {jsava.lang.Object} obj
         * @return {Number}
         */
        indexOf: function (obj) {
        },

        /**
         * @param {jsava.lang.Object} obj
         * @return {Number}
         */
        lastIndexOf: function (obj) {
        },

        /**
         * @return {jsava.util.ListIterator}
         */
        listIterator: function () {
        },

        /**
         * @param {Number} fromIndex
         * @param {Number} toIndex
         * @return {jsava.util.List}
         */
        subList: function (fromIndex, toIndex) {
        }
    }
} );qx.Interface.define( 'jsava.util.ListIterator', {
    extend: jsava.util.Iterator,

    members: {
        /**
         * @return {Boolean}
         */
        hasNext: function () {
        },

        next: function () {
        },

        /**
         * @return {Boolean}
         */
        hasPrevious: function () {
        },

        previous: function () {
        },

        /**
         * @return {Number}
         */
        nextIndex: function () {
        },

        /**
         * @return {Number}
         */
        previousIndex: function () {
        },

        remove: function () {
        },

        set: function (element) {
        },

        add: function (element) {
        }
    }
} );qx.Class.define( 'jsava.util.AbstractList', {
    extend: jsava.util.AbstractCollection,
    implement: jsava.util.List,

    type: 'abstract',

    /** @protected */
    construct: function () {
    },

    members: {
        /** @protected */
        modCount: 0,

        add: function () {
            if( arguments.length === 1 ) {
                this.add( this.size(), arguments[0] );
                return true;
            }

            // add(index, element) needs to be implemented in the child class
            // add(element) shall either be overridden or call this.base(arguments)
            throw new jsava.lang.UnsupportedOperationException();
        },

        /** @abstract */
        get: function (index) {
        },

        set: function (index, element) {
            throw new jsava.lang.UnsupportedOperationException();
        },

        remove: function (index) {
            throw new jsava.lang.UnsupportedOperationException();
        },

        indexOf: function (obj) {
            var iterator = this.listIterator();
            if( obj === null ) {
                while( iterator.hasNext() ) {
                    if( iterator.next() === null ) {
                        return iterator.previousIndex();
                    }
                }
            } else {
                while( iterator.hasNext() ) {
                    if( obj.equals( iterator.next() ) ) {
                        return iterator.previousIndex();
                    }
                }
            }

            return -1;
        },

        lastIndexOf: function (obj) {
            var iterator = this.listIterator( this.size() );
            if( obj === null ) {
                while( iterator.hasPrevious() ) {
                    if( iterator.previous() === null ) {
                        return iterator.previousIndex();
                    }
                }
            } else {
                while( iterator.hasPrevious() ) {
                    if( obj.equals( iterator.previous() ) ) {
                        return iterator.previousIndex();
                    }
                }
            }

            return -1;
        },

        clear: function () {
            this.removeRange( 0, this.size() );
        },

        addAll: function (index, collection) {
            var modified = false,
                iterator = collection.iterator();
            while( iterator.hasNext() ) {
                this.add( index++, iterator.next() );
                modified = true;
            }

            return modified;
        },

        iterator: function () {
            return new this.Itr( this );
        },

        listIterator: function () {
            if( arguments.length === 0 ) {
                return this.listIterator( 0 );
            }

            var index = arguments[0];
            if( index < 0 || index > this.size() ) {
                throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index );
            }

            return new this.ListItr( this, index );
        },

        subList: function (fromIndex, toIndex) {
            return (qx.Interface.objectImplements( this, jsava.util.RandomAccess ) ?
                new jsava.util.RandomAccessSubList( this, fromIndex, toIndex ) :
                new jsava.util.SubList( this, fromIndex, toIndex ))
        },

        equals: function (other) {
            if( other === this ) {
                return true;
            }

            if( other === null ) {
                return false;
            }

            if( !qx.Interface.objectImplements( other, jsava.util.List ) ) {
                return false;
            }

            /** @type jsava.util.List */
            var list = other;

            var iterator1 = this.listIterator(),
                iterator2 = list.listIterator();
            while( iterator1.hasNext() && iterator2.hasNext() ) {
                var element1 = iterator1.next(),
                    object2 = iterator2.next();
                if( !( element1 === null ? object2 === null : element1.equals( object2 ) ) ) {
                    return false;
                }
            }

            return !( iterator1.hasNext() || iterator2.hasNext() );
        },

        hashCode: function () {
            var hashCode = 1,
                iterator = this.iterator();
            while( iterator.hasNext() ) {
                var obj = iterator.next();
                hashCode = 31 * hashCode + (obj === null ? 0 : obj.hashCode());
            }

            return hashCode;
        },

        /**
         * @protected
         * @param {Number} fromIndex
         * @param {Number} toIndex
         */
        removeRange: function (fromIndex, toIndex) {
            var iterator = this.listIterator( fromIndex );
            for( var i = 0, n = toIndex - fromIndex; i < n; i++ ) {
                iterator.next();
                iterator.remove();
            }
        },

        /** @private */
        Itr: qx.Class.define( 'jsava.util.AbstractList.Itr', {
            extend: jsava.lang.Object,
            implement: jsava.util.Iterator,

            /** @private */
            construct: function (thisAbstractList) {
                this.__thisAbstractList = thisAbstractList;
                this.expectedModCount = this.__thisAbstractList._modCount;
            },

            members: {
                /** @type jsava.util.AbstractList */
                __thisAbstractList: null,

                /** @protected */
                cursor: 0,
                /** @protected */
                lastRet: -1,
                /**
                 * @protected
                 * @type Number
                 */
                expectedModCount: 0,

                hasNext: function () {
                    return this.cursor !== this.__thisAbstractList.size();
                },

                next: function () {
                    this.checkForComodification();

                    try {
                        var next = this.__thisAbstractList.get( this.cursor );
                        this.lastRet = this.cursor++;
                        return next;
                    } catch( e ) {
                        if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IndexOutOfBoundsException ) ) {
                            this.checkForComodification();
                            throw new jsava.lang.NoSuchElementException();
                        }

                        throw e;
                    }
                },

                remove: function () {
                    if( this.lastRet === -1 ) {
                        throw new jsava.lang.IllegalStateException();
                    }
                    this.checkForComodification();

                    try {
                        this.__thisAbstractList.remove( this.lastRet );
                        if( this.lastRet < this.cursor ) {
                            this.cursor--;
                        }
                        this.lastRet = -1;
                        this.expectedModCount = this.__thisAbstractList._modCount;
                    } catch( e ) {
                        if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IndexOutOfBoundsException ) ) {
                            throw new jsava.lang.ConcurrentModificationException();
                        }

                        throw e;
                    }
                },

                /** @protected */
                checkForComodification: function () {
                    if( this.__thisAbstractList._modCount !== this.expectedModCount ) {
                        throw new jsava.lang.ConcurrentModificationException();
                    }
                }
            }
        } ),

        /** @private */
        ListItr: qx.Class.define( 'jsava.util.AbstractList.ListItr', {
            extend: jsava.util.AbstractList.Itr,
            implement: jsava.util.ListIterator,

            /** @private */
            construct: function (thisAbstractList, index) {
                this.base( arguments, thisAbstractList );
                this.cursor = index;
            },

            members: {
                hasPrevious: function () {
                    return this.cursor !== 0;
                },

                previous: function () {
                    this.checkForComodification();
                    try {
                        var i = this.cursor - 1,
                            previous = this.__thisAbstractList.get( i );
                        this.lastRet = this.cursor = i;
                        return previous;
                    } catch( e ) {
                        if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IndexOutOfBoundsException ) ) {
                            this.checkForComodification();
                            throw new jsava.lang.NoSuchElementException();
                        }

                        throw e;
                    }
                },

                nextIndex: function () {
                    return this.cursor;
                },

                previousIndex: function () {
                    return this.cursor - 1;
                },

                set: function (element) {
                    if( this.lastRet === 1 ) {
                        throw new jsava.lang.IllegalStateException();
                    }
                    this.checkForComodification();

                    try {
                        this.__thisAbstractList.set( this.lastRet, element );
                        this.expectedModCount = this.__thisAbstractList._modCount;
                    } catch( e ) {
                        if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IndexOutOfBoundsException ) ) {
                            throw new jsava.lang.ConcurrentModificationException();
                        }

                        throw e;
                    }
                },

                add: function (element) {
                    this.checkForComodification();
                    try {
                        this.__thisAbstractList.add( this.cursor++, element );
                        this.lastRet = -1;
                        this.expectedModCount = this.__thisAbstractList._modCount;
                    } catch( e ) {
                        if( qx.Class.isSubClassOf( e.constructor, jsava.lang.IndexOutOfBoundsException ) ) {
                            throw new jsava.lang.ConcurrentModificationException();
                        }

                        throw e;
                    }
                }
            }
        } )
    }
} );qx.Class.define( 'jsava.util.Arrays', {
    extend: jsava.lang.Object,

    type: 'static',

    statics: {
        // TODO various signatures may be missing
        /**
         * @param {jsava.lang.Object[]} original
         * @param {Number} newLength
         */
        copyOf: function (original, newLength) {
            var copy = jsava.JsavaUtils.arrayOfGivenSize( newLength, null );
            jsava.lang.System.arraycopy( original, 0, copy, 0, Math.min( original.length, newLength ) );

            return copy;
        }

        // TODO a lot more methods
    }
} );qx.Class.define( 'jsava.util.SubList', {
    extend: jsava.util.AbstractList,

    /**
     * @protected
     * @param {jsava.util.AbstractList} list
     * @param {Number} fromIndex
     * @param {Number} toIndex
     */
    construct: function (list, fromIndex, toIndex) {
        if( fromIndex < 0 ) {
            throw new jsava.util.IndexOutOfBoundsException( 'fromIndex = ' + fromIndex );
        }
        if( toIndex > list.size() ) {
            throw new jsava.util.IndexOutOfBoundsException( 'toIndex = ' + toIndex );
        }
        if( fromIndex > toIndex ) {
            throw new jsava.util.IllegalArgumentException( 'fromIndex(' + fromIndex + ') > toIndex(' + toIndex + ')' );
        }

        this.l = list;
        this.offset = fromIndex;
        this.__size = toIndex - fromIndex;
        this.expectedModCount = this.l._modCount;
    },

    members: {
        /**
         * @private
         * @implements jsava.util.AbstractList
         */
        l: null,
        /** @private */
        offset: 0,
        /** @private */
        __size: 0,
        /** @private */
        expectedModCount: 0,

        set: function (index, element) {
            this.rangeCheck( index );
            this.checkForComodification();
            return this.l.set( index + this.offset, element );
        },

        get: function (index) {
            this.rangeCheck( index );
            this.checkForComodification();
            return this.l.get( index + this.offset );
        },

        size: function () {
            this.checkForComodification();
            return this.__size;
        },

        add: function (index, element) {
            if( index < 0 || index > this.__size ) {
                throw new jsava.lang.IndexOutOfBoundsException();
            }

            this.checkForComodification();
            this.l.add( index + this.offset, element );
            this.expectedModCount = this.l._modCount;
            this.__size++;
            this._modCount++;
        },

        remove: function (index) {
            this.rangeCheck( index );
            this.checkForComodification();
            var result = this.l.remove( index + this.offset );
            this.expectedModCount = this.l._modCount;
            this.__size--;
            this._modCount++;

            return result;
        },

        removeRange: function (fromIndex, toIndex) {
            this.checkForComodification();
            this.l.removeRange( fromIndex + this.offset, toIndex + this.offset );
            this.expectedModCount = this.l._modCount;
            this.__size -= (toIndex - fromIndex);
            this._modCount++;
        },

        addAll: function () {
            if( arguments.length === 1 ) {
                return this.addAll( this.__size, arguments[0] );
            } else {
                var index = arguments[0],
                    /** @implements jsava.util.Collection */
                        collection = arguments[1];

                if( index < 0 || index > this.__size ) {
                    throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ', Size: ' + this.__size );
                }

                var cSize = collection.size();
                if( cSize === 0 ) {
                    return false;
                }

                this.checkForComodification();
                this.l.addAll( this.offset + index, collection );
                this.expectedModCount = this.l._modCount;
                this.__size += cSize;
                this._modCount++;

                return true;
            }
        },

        iterator: function () {
            return this.listIterator();
        },

        listIterator: function () {
            if( arguments.length === 0 ) {
                return this.base( arguments );
            }

            var index = arguments[0];

            this.checkForComodification();
            if( index < 0 || index > this.__size ) {
                throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ', Size: ' + this.__size );
            }

            return new (jsava.JsavaUtils.createAnonymousClass( {
                extend: jsava.lang.Object,
                implement: jsava.util.ListIterator,

                construct: function (thisSubList) {
                    this.__thisSubList = thisSubList;
                    this.iterator = this.__thisSubList.l.listIterator( index + this.__thisSubList.offset );
                },

                members: {
                    /** @type jsava.util.SubList */
                    __thisSubList: null,
                    /** @implements jsava.util.ListIterator */
                    iterator: null,

                    hasNext: function () {
                        return this.nextIndex() < this.__thisSubList.__size;
                    },

                    next: function () {
                        if( this.hasNext() ) {
                            return this.iterator.next();
                        } else {
                            throw new jsava.lang.NoSuchElementException();
                        }
                    },

                    hasPrevious: function () {
                        return this.previousIndex() >= 0;
                    },

                    previous: function () {
                        if( this.hasPrevious() ) {
                            return this.iterator.previous();
                        } else {
                            throw new jsava.lang.NoSuchElementException();
                        }
                    },

                    nextIndex: function () {
                        return this.iterator.nextIndex() - this.__thisSubList.offset;
                    },

                    previousIndex: function () {
                        return this.iterator.previousIndex() - this.__thisSubList.offset;
                    },

                    remove: function () {
                        this.iterator.remove();
                        this.__thisSubList.expectedModCount = this.__thisSubList.l._modCount;
                    },

                    set: function (element) {
                        this.iterator.set( element );
                    },

                    add: function (element) {
                        this.iterator.add( element );
                        this.__thisSubList.expectedModCount = this.__thisSubList.l._modCount;
                        this.__thisSubList.__size++;
                        this.__thisSubList._modCount++;
                    }
                }
            } ))( this );
        },

        subList: function (fromIndex, toIndex) {
            return new this.SubList( this, fromIndex, toIndex );
        },

        /** @private */
        rangeCheck: function (index) {
            if( index < 0 || index >= this.__size ) {
                throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ',Size: ' + this.__size );
            }
        },

        /** @private */
        checkForComodification: function () {
            if( this.l._modCount !== this.expectedModCount ) {
                throw new jsava.lang.ConcurrentModificationException();
            }
        }
    }
} );qx.Interface.define( 'jsava.util.RandomAccess', {
} );qx.Class.define( 'jsava.util.RandomAccessSubList', {
    extend: jsava.util.SubList,
    implement: jsava.util.RandomAccess,

    /**
     * @protected
     * @param {jsava.util.AbstractList} list
     * @param {Number} fromIndex
     * @param {Number} toIndex
     */
    construct: function (list, fromIndex, toIndex) {
        this.base( arguments, list, fromIndex, toIndex );
    },

    members: {
        subList: function (fromIndex, toIndex) {
            return new jsava.util.RandomAccessSubList( this, fromIndex, toIndex );
        }
    }
} );qx.Class.define( 'jsava.util.ArrayList', {
    extend: jsava.util.AbstractList,
    implement: [jsava.util.List, jsava.util.RandomAccess, jsava.lang.Cloneable, jsava.io.Serializable],

    construct: function () {
        var args = Array.prototype.slice.call( arguments );
        if( args.length === 0 ) {
            args = [10];
        }

        if( qx.Class.implementsInterface( args[0], jsava.util.Collection ) ) {
            /** @type jsava.util.Collection */
            var collection = args[0];

            this.elementData = collection.toArray();
            this.__size = this.elementData.length;
        } else {
            var initialCapacity = args[0];

            this.base( arguments );
            if( initialCapacity < 10 ) {
                throw new jsava.lang.IllegalArgumentException( 'Illegal Capacity: ' + initialCapacity );
            }

            this.elementData = jsava.JsavaUtils.arrayOfGivenSize( initialCapacity, null );
        }
    },

    statics: {
        serialVersionUID: 1
    },

    members: {
        /**
         * @private
         * @type {jsava.lang.Object[]}
         */
        elementData: null,

        /** @private */
        __size: 0,

        trimtoSize: function () {
            this.modCount++;
            var oldCapacity = this.elementData.length;
            if( this.__size < oldCapacity ) {
                this.elementData = jsava.util.Arrays.copyOf( this.elementData, this.__size );
            }
        },

        /**
         * @param {Number} minCapacity
         */
        ensureCapacity: function (minCapacity) {
            this.modCount++;
            var oldCapacity = this.elementData.length;
            if( minCapacity > oldCapacity ) {
                var oldData = this.elementData,
                    newCapacity = (oldCapacity * 3) / 2 + 1;
                if( newCapacity < minCapacity ) {
                    newCapacity = minCapacity;
                }

                this.elementData = jsava.util.Arrays.copyOf( this.elementData, newCapacity );
            }
        },

        size: function () {
            return this.__size;
        },

        isEmpty: function () {
            return this.__size === 0;
        },

        contains: function (obj) {
            return this.indexOf( obj ) >= 0;
        },

        indexOf: function (obj) {
            if( obj === null ) {
                for( var i = 0; i < this.__size; i++ ) {
                    if( this.elementData[i] === null ) {
                        return i;
                    }
                }
            } else {
                for( var i = 0; i < this.__size; i++ ) {
                    if( obj.equals( this.elementData[i] ) ) {
                        return i;
                    }
                }
            }

            return -1;
        },

        lastIndexOf: function (obj) {
            if( obj === null ) {
                for( var i = this.__size - 1; i >= 0; i-- ) {
                    if( this.elementData[i] === null ) {
                        return i;
                    }
                }
            } else {
                for( var i = this.__size - 1; i >= 0; i-- ) {
                    if( obj.equals( this.elementData[i] ) ) {
                        return i;
                    }
                }
            }

            return -1;
        },

        clone: function () {
            try {
                /** @type jsava.util.ArrayList */
                var v = this.base( arguments );
                v.elementData = jsava.util.Arrays.copyOf( this.elementData, this.__size );
                v.modCount = 0;
                return v;
            } catch( e ) {
                if( qx.Class.isSubClassOf( e.constructor, jsava.lang.CloneNotSupportedException ) ) {
                    // TODO throw InternalError.InternalError
                    throw new jsava.lang.Exception();
                }

                throw e;
            }
        },

        toArray: function () {
            return jsava.util.Arrays.copyOf( this.elementData, this.__size );
        },

        get: function (index) {
            this.RangeCheck( index );
            return this.elementData[index];
        },

        set: function (index, element) {
            this.RangeCheck( index );

            var oldValue = this.elementData[index];
            this.elementData[index] = element;
            return oldValue;
        },

        add: function () {
            var args = Array.prototype.slice.call( arguments );
            switch( args.length ) {
                case 1:
                    var element = args[0];

                    this.ensureCapacity( this.__size + 1 );
                    this.elementData[this.__size++] = element;
                    return true;
                case 2:
                    var index = args[0],
                        element = args[1];

                    if( index > this.__size || index < 0 ) {
                        throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ', Size: ' + this.__size );
                    }

                    this.ensureCapacity( this.__size + 1 );
                    jsava.lang.System.arraycopy( this.elementData, index, this.elementData, index + 1,
                        this.__size - index );
                    this.elementData[index] = element;
                    this.__size++;
                    break;
            }
        },

        remove: function () {
            var args = Array.prototype.slice.call( arguments );
            if( qx.Class.isSubClassOf( args[0].constructor, jsava.lang.Object ) ) {
                var obj = args[0];

                if( obj === null ) {
                    for( var index = 0; index < this.__size; index++ ) {
                        if( this.elementData[index] === null ) {
                            this.fastRemove( index );
                            return true;
                        }
                    }
                } else {
                    for( var index = 0; index < this.__size; index++ ) {
                        if( obj.equals( this.elementData[index] ) ) {
                            this.fastRemove( index );
                            return true;
                        }
                    }
                }

                return false;
            } else {
                var index = args[0];

                this.RangeCheck( index );
                this.modCount++;
                var oldValue = this.elementData[index];

                var numMoved = this.__size - index - 1;
                if( numMoved > 0 ) {
                    jsava.lang.System.arraycopy( this.elementData, index + 1, this.elementData, index, numMoved );
                }
                this.elementData[--this.__size] = null;

                return oldValue;
            }
        },

        /** @private */
        fastRemove: function (index) {
            this.modCount++;
            var numMoved = this.__size - index - 1;
            if( numMoved > 0 ) {
                jsava.lang.System.arraycopy( this.elementData, index + 1, this.elementData, index, numMoved );
            }
            this.elementData[--this.__size] = null;
        },

        clear: function () {
            this.modCount++;

            for( var i = 0; i < this.__size; i++ ) {
                this.elementData[i] = null;
            }

            this.__size = 0;
        },

        addAll: function () {
            var args = Array.prototype.slice.call( arguments );
            switch( args.length ) {
                case 1:
                    /** @type jsava.util.Collection */
                    var collection = args[0];

                    var a = collection.toArray(),
                        numNew = a.length;
                    this.ensureCapacity( this.__size + numNew );
                    jsava.lang.System.arraycopy( a, 0, this.elementData, this.__size, numNew );
                    this.__size += numNew;

                    return numNew !== 0;
                case 2:
                    var index = args[0],
                        /** @type jsava.util.Collection */
                            collection = args[1];

                    if( index > this.__size || index < 0 ) {
                        throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ', Size: ' + this.__size );
                    }

                    var a = collection.toArray(),
                        numNew = a.length;
                    this.ensureCapacity( this.__size + numNew );

                    var numMoved = this.__size - index;
                    if( numMoved > 0 ) {
                        jsava.lang.System.arraycopy( this.elementData, index, this.elementData, index + numNew,
                            numMoved );
                    }
                    jsava.lang.System.arraycopy( a, 0, this.elementData, index, numNew );
                    this.__size += numNew;

                    return numNew !== 0;
            }
        },

        removeRange: function (fromIndex, toIndex) {
            this.modCount++;
            var numMoved = this.__size - toIndex;
            jsava.lang.System.arraycopy( this.elementData, toIndex, this.elementData, fromIndex, numMoved );

            var newSize = this.__size - (toIndex - fromIndex);
            while( this.__size !== newSize ) {
                this.elementData[--this.__size] = null;
            }
        },

        /** @private */
        RangeCheck: function (index) {
            if( index >= this.__size ) {
                throw new jsava.lang.IndexOutOfBoundsException( 'Index: ' + index + ', Size: ' + this.__size );
            }
        },

        /** @private */
        writeObject: function () {
            throw new jsava.lang.UnsupportedOperationException();
        },

        /** @private */
        readObject: function () {
            throw new jsava.lang.UnsupportedOperationException();
        }
    }
} );(function (window) {
    'use strict';

    if( typeof window === 'undefined' ) {
        return;
    }

    // DO NOT EDIT -- will be replaced in compile.pl
    var compileOrder = ['jsava.io.Serializable','jsava.lang.Object','jsava.lang.Throwable','jsava.lang.Exception','jsava.lang.RuntimeException','jsava.lang.IndexOutOfBoundsException','jsava.lang.IllegalArgumentException','jsava.lang.CloneNotSupportedException','jsava.lang.NullPointerException','jsava.lang.Cloneable','jsava.lang.System','jsava.lang.ClassCastException','jsava.lang.IllegalStateException','jsava.lang.Iterable','jsava.lang.UnsupportedOperationException','jsava.lang.NoSuchElementException','jsava.lang.ConcurrentModificationException','jsava.JsavaUtils','jsava.util.Collection','jsava.util.Set','jsava.util.Map','jsava.util.Iterator','jsava.util.AbstractCollection','jsava.util.AbstractSet','jsava.util.AbstractMap','jsava.util.HashMap','jsava.util.List','jsava.util.ListIterator','jsava.util.AbstractList','jsava.util.Arrays','jsava.util.SubList','jsava.util.RandomAccess','jsava.util.RandomAccessSubList','jsava.util.ArrayList'];

    var Cache = new (function () {
        var __cache = {};

        this.Status = {
            CHECKED: 0,
            SHORTENED: 1
        };

        this.setStatus = function (clazz, status) {
            __cache[clazz] = status;
        };
    });

    var getShortName = function (clazz) {
        return clazz.split( /\./ ).pop();
    };

    var getClass = function (clazz) {
        var __clazz = window,
            parts = clazz.split( /\./ );
        for( var i = 0; i < parts.length; i++ ) {
            __clazz = __clazz[parts[i]];
        }

        return __clazz;
    };

    for( var i = 0; i < compileOrder.length; i++ ) {
        var clazz = getShortName( compileOrder[i] );

        if( typeof window[clazz] === 'undefined' ) {
            window[clazz] = getClass( compileOrder[i] );
            Cache.setStatus( clazz, Cache.Status.SHORTENED );
        } else {
            Cache.setStatus( clazz, Cache.Status.CHECKED );
        }
    }
})( window );
