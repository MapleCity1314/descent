var Lp=Object.defineProperty;var Np=(i,t,e)=>t in i?Lp(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var B=(i,t,e)=>Np(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xl="160",Ip=0,dh=1,Op=2,Md=1,Up=2,oi=3,Li=0,en=1,Wn=2,hi=0,Gs=1,Dr=2,fh=3,ph=4,Fp=5,Xi=100,kp=101,Bp=102,mh=103,gh=104,Vp=200,zp=201,Gp=202,Hp=203,jc=204,Zc=205,Wp=206,qp=207,Xp=208,Yp=209,jp=210,Zp=211,$p=212,Jp=213,Kp=214,Qp=0,tm=1,em=2,Jo=3,nm=4,im=5,sm=6,rm=7,Td=0,om=1,am=2,Ri=0,cm=1,lm=2,hm=3,bd=4,um=5,dm=6,wd=300,Ws=301,qs=302,$c=303,Jc=304,Na=306,Kc=1e3,Pn=1001,Qc=1002,Ke=1003,_h=1004,sc=1005,vn=1006,fm=1007,Lr=1008,Pi=1009,pm=1010,mm=1011,yl=1012,Ed=1013,Ei=1014,Ai=1015,ui=1016,Ad=1017,Cd=1018,Ji=1020,gm=1021,Dn=1023,_m=1024,vm=1025,Ki=1026,Xs=1027,xm=1028,Rd=1029,ym=1030,Pd=1031,Dd=1033,rc=33776,oc=33777,ac=33778,cc=33779,vh=35840,xh=35841,yh=35842,Sh=35843,Ld=36196,Mh=37492,Th=37496,bh=37808,wh=37809,Eh=37810,Ah=37811,Ch=37812,Rh=37813,Ph=37814,Dh=37815,Lh=37816,Nh=37817,Ih=37818,Oh=37819,Uh=37820,Fh=37821,lc=36492,kh=36494,Bh=36495,Sm=36283,Vh=36284,zh=36285,Gh=36286,Nd=3e3,Qi=3001,Mm=3200,Tm=3201,Id=0,bm=1,yn="",ke="srgb",fi="srgb-linear",Sl="display-p3",Ia="display-p3-linear",Ko="linear",le="srgb",Qo="rec709",ta="p3",vs=7680,Hh=519,wm=512,Em=513,Am=514,Od=515,Cm=516,Rm=517,Pm=518,Dm=519,Wh=35044,hc=35048,qh="300 es",tl=1035,li=2e3,ea=2001;class nr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uc=Math.PI/180,el=180/Math.PI;function ir(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function He(i,t,e){return Math.max(t,Math.min(e,i))}function Lm(i,t){return(i%t+t)%t}function dc(i,t,e){return(1-e)*i+e*t}function Xh(i){return(i&i-1)===0&&i!==0}function nl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function sn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ht{constructor(t=0,e=0){ht.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,s,r,o,a,c,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],v=s[4],y=s[7],T=s[2],b=s[5],E=s[8];return r[0]=o*_+a*x+c*T,r[3]=o*m+a*v+c*b,r[6]=o*p+a*y+c*E,r[1]=l*_+h*x+u*T,r[4]=l*m+h*v+u*b,r[7]=l*p+h*y+u*E,r[2]=d*_+f*x+g*T,r[5]=d*m+f*v+g*b,r[8]=d*p+f*y+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(fc.makeScale(t,e)),this}rotate(t){return this.premultiply(fc.makeRotation(-t)),this}translate(t,e){return this.premultiply(fc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fc=new Xt;function Ud(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Nm(){const i=na("canvas");return i.style.display="block",i}const Yh={};function Er(i){i in Yh||(Yh[i]=!0,console.warn(i))}const jh=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zh=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),uo={[fi]:{transfer:Ko,primaries:Qo,toReference:i=>i,fromReference:i=>i},[ke]:{transfer:le,primaries:Qo,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ia]:{transfer:Ko,primaries:ta,toReference:i=>i.applyMatrix3(Zh),fromReference:i=>i.applyMatrix3(jh)},[Sl]:{transfer:le,primaries:ta,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Zh),fromReference:i=>i.applyMatrix3(jh).convertLinearToSRGB()}},Im=new Set([fi,Ia]),Qt={enabled:!0,_workingColorSpace:fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Im.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=uo[t].toReference,s=uo[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return uo[i].primaries},getTransfer:function(i){return i===yn?Ko:uo[i].transfer}};function Hs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pc(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let xs;class Fd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=na("canvas")),xs.width=t.width,xs.height=t.height;const n=xs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=na("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Hs(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hs(e[n]/255)*255):e[n]=Hs(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Om=0,kd=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Om++}),this.uuid=ir(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mc(s[o].image)):r.push(mc(s[o]))}else r=mc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function mc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Um=0;class pn extends nr{constructor(t=pn.DEFAULT_IMAGE,e=pn.DEFAULT_MAPPING,n=Pn,s=Pn,r=vn,o=Lr,a=Dn,c=Pi,l=pn.DEFAULT_ANISOTROPY,h=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=ir(),this.name="",this.source=new kd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Qi?ke:yn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kc:t.x=t.x-Math.floor(t.x);break;case Pn:t.x=t.x<0?0:1;break;case Qc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kc:t.y=t.y-Math.floor(t.y);break;case Pn:t.y=t.y<0?0:1;break;case Qc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ke?Qi:Nd}set encoding(t){Er("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Qi?ke:yn}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=wd;pn.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,y=(f+1)/2,T=(p+1)/2,b=(h+d)/4,E=(u+_)/4,C=(g+m)/4;return v>y&&v>T?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=b/n,r=E/n):y>T?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=C/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=E/r,s=C/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((l+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fm extends nr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};n.encoding!==void 0&&(Er("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Qi?ke:yn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends Fm{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bd extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class km extends pn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,x=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const T=Math.sqrt(v),b=Math.atan2(T,p*x);m=Math.sin(m*b)/T,a=Math.sin(a*b)/T}const y=a*x;if(c=c*m+d*y,l=l*m+f*y,h=h*m+g*y,u=u*m+_*y,m===1-a){const T=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=T,l*=T,h*=T,u*=T}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($h.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($h.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return gc.copy(this).projectOnVector(t),this.sub(gc)}reflect(t){return this.sub(gc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gc=new I,$h=new fs;class ps{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fo.copy(n.boundingBox)),fo.applyMatrix4(t.matrixWorld),this.union(fo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),po.subVectors(this.max,mr),ys.subVectors(t.a,mr),Ss.subVectors(t.b,mr),Ms.subVectors(t.c,mr),vi.subVectors(Ss,ys),xi.subVectors(Ms,Ss),Vi.subVectors(ys,Ms);let e=[0,-vi.z,vi.y,0,-xi.z,xi.y,0,-Vi.z,Vi.y,vi.z,0,-vi.x,xi.z,0,-xi.x,Vi.z,0,-Vi.x,-vi.y,vi.x,0,-xi.y,xi.x,0,-Vi.y,Vi.x,0];return!_c(e,ys,Ss,Ms,po)||(e=[1,0,0,0,1,0,0,0,1],!_c(e,ys,Ss,Ms,po))?!1:(mo.crossVectors(vi,xi),e=[mo.x,mo.y,mo.z],_c(e,ys,Ss,Ms,po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qn=[new I,new I,new I,new I,new I,new I,new I,new I],wn=new I,fo=new ps,ys=new I,Ss=new I,Ms=new I,vi=new I,xi=new I,Vi=new I,mr=new I,po=new I,mo=new I,zi=new I;function _c(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){zi.fromArray(i,r);const a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),c=t.dot(zi),l=e.dot(zi),h=n.dot(zi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Bm=new ps,gr=new I,vc=new I;class sr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);const e=gr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(gr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(vc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(vc)),this.expandByPoint(gr.copy(t.center).sub(vc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ti=new I,xc=new I,go=new I,yi=new I,yc=new I,_o=new I,Sc=new I;class Vd{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){xc.copy(t).add(e).multiplyScalar(.5),go.copy(e).sub(t).normalize(),yi.copy(this.origin).sub(xc);const r=t.distanceTo(e)*.5,o=-this.direction.dot(go),a=yi.dot(this.direction),c=-yi.dot(go),l=yi.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(xc).addScaledVector(go,d),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);const n=ti.dot(this.direction),s=ti.dot(ti)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,s,r){yc.subVectors(e,t),_o.subVectors(n,t),Sc.crossVectors(yc,_o);let o=this.direction.dot(Sc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yi.subVectors(this.origin,t);const c=a*this.direction.dot(_o.crossVectors(yi,_o));if(c<0)return null;const l=a*this.direction.dot(yc.cross(yi));if(l<0||c+l>o)return null;const h=-a*yi.dot(Sc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),o=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vm,t,zm)}lookAt(t,e,n){const s=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Si.crossVectors(n,ln),Si.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Si.crossVectors(n,ln)),Si.normalize(),vo.crossVectors(ln,Si),s[0]=Si.x,s[4]=vo.x,s[8]=ln.x,s[1]=Si.y,s[5]=vo.y,s[9]=ln.y,s[2]=Si.z,s[6]=vo.z,s[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],v=n[7],y=n[11],T=n[15],b=s[0],E=s[4],C=s[8],S=s[12],M=s[1],D=s[5],L=s[9],H=s[13],P=s[2],U=s[6],F=s[10],V=s[14],X=s[3],W=s[7],Y=s[11],J=s[15];return r[0]=o*b+a*M+c*P+l*X,r[4]=o*E+a*D+c*U+l*W,r[8]=o*C+a*L+c*F+l*Y,r[12]=o*S+a*H+c*V+l*J,r[1]=h*b+u*M+d*P+f*X,r[5]=h*E+u*D+d*U+f*W,r[9]=h*C+u*L+d*F+f*Y,r[13]=h*S+u*H+d*V+f*J,r[2]=g*b+_*M+m*P+p*X,r[6]=g*E+_*D+m*U+p*W,r[10]=g*C+_*L+m*F+p*Y,r[14]=g*S+_*H+m*V+p*J,r[3]=x*b+v*M+y*P+T*X,r[7]=x*E+v*D+y*U+T*W,r[11]=x*C+v*L+y*F+T*Y,r[15]=x*S+v*H+y*V+T*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,v=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,y=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,T=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,b=e*x+n*v+s*y+r*T;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=x*E,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*E,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*E,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*E,t[4]=v*E,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*E,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*E,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*E,t[8]=y*E,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*E,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*E,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*E,t[12]=T*E,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*E,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*E,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,x=c*l,v=c*h,y=c*u,T=n.x,b=n.y,E=n.z;return s[0]=(1-(_+p))*T,s[1]=(f+y)*T,s[2]=(g-v)*T,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(d+p))*b,s[6]=(m+x)*b,s[7]=0,s[8]=(g+v)*E,s[9]=(m-x)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ts.set(s[0],s[1],s[2]).length();const o=Ts.set(s[4],s[5],s[6]).length(),a=Ts.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],En.copy(this);const l=1/r,h=1/o,u=1/a;return En.elements[0]*=l,En.elements[1]*=l,En.elements[2]*=l,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,e.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=li){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===li)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ea)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=li){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(a===li)g=(o+r)*u,_=-2*u;else if(a===ea)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ts=new I,En=new he,Vm=new I(0,0,0),zm=new I(1,1,1),Si=new I,vo=new I,ln=new I,Jh=new he,Kh=new fs;class Oa{constructor(t=0,e=0,n=0,s=Oa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-He(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-He(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oa.DEFAULT_ORDER="XYZ";class zd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gm=0;const Qh=new I,bs=new fs,ei=new he,xo=new I,_r=new I,Hm=new I,Wm=new fs,tu=new I(1,0,0),eu=new I(0,1,0),nu=new I(0,0,1),qm={type:"added"},Xm={type:"removed"};class Ce extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gm++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new I,e=new Oa,n=new fs,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Xt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.multiply(bs),this}rotateOnWorldAxis(t,e){return bs.setFromAxisAngle(t,e),this.quaternion.premultiply(bs),this}rotateX(t){return this.rotateOnAxis(tu,t)}rotateY(t){return this.rotateOnAxis(eu,t)}rotateZ(t){return this.rotateOnAxis(nu,t)}translateOnAxis(t,e){return Qh.copy(t).applyQuaternion(this.quaternion),this.position.add(Qh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(tu,t)}translateY(t){return this.translateOnAxis(eu,t)}translateZ(t){return this.translateOnAxis(nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xo.copy(t):xo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(_r,xo,this.up):ei.lookAt(xo,_r,this.up),this.quaternion.setFromRotationMatrix(ei),s&&(ei.extractRotation(s.matrixWorld),bs.setFromRotationMatrix(ei),this.quaternion.premultiply(bs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(qm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xm)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,Hm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,Wm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new I(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new I,ni=new I,Mc=new I,ii=new I,ws=new I,Es=new I,iu=new I,Tc=new I,bc=new I,wc=new I;let yo=!1;class Cn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),An.subVectors(t,e),s.cross(An);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){An.subVectors(s,e),ni.subVectors(n,e),Mc.subVectors(t,e);const o=An.dot(An),a=An.dot(ni),c=An.dot(Mc),l=ni.dot(ni),h=ni.dot(Mc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getUV(t,e,n,s,r,o,a,c){return yo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yo=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ii.x),c.addScaledVector(o,ii.y),c.addScaledVector(a,ii.z),c)}static isFrontFacing(t,e,n,s){return An.subVectors(n,e),ni.subVectors(t,e),An.cross(ni).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return An.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),An.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return yo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),yo=!0),Cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return Cn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;ws.subVectors(s,n),Es.subVectors(r,n),Tc.subVectors(t,n);const c=ws.dot(Tc),l=Es.dot(Tc);if(c<=0&&l<=0)return e.copy(n);bc.subVectors(t,s);const h=ws.dot(bc),u=Es.dot(bc);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ws,o);wc.subVectors(t,r);const f=ws.dot(wc),g=Es.dot(wc);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Es,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return iu.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(iu,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(ws,o).addScaledVector(Es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},So={h:0,s:0,l:0};function Ec(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Lm(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Ec(o,r,t+1/3),this.g=Ec(o,r,t),this.b=Ec(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){const n=Gd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}copyLinearToSRGB(t){return this.r=pc(t.r),this.g=pc(t.g),this.b=pc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return Qt.fromWorkingColorSpace(Ge.copy(this),t),Math.round(He(Ge.r*255,0,255))*65536+Math.round(He(Ge.g*255,0,255))*256+Math.round(He(Ge.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ge.copy(this),e);const n=Ge.r,s=Ge.g,r=Ge.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=ke){Qt.fromWorkingColorSpace(Ge.copy(this),t);const e=Ge.r,n=Ge.g,s=Ge.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Mi),this.setHSL(Mi.h+t,Mi.s+e,Mi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Mi),t.getHSL(So);const n=dc(Mi.h,So.h,e),s=dc(Mi.s,So.s,e),r=dc(Mi.l,So.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ge=new kt;kt.NAMES=Gd;let Ym=0;class rr extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ym++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=Gs,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=Zc,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Jo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vs,this.stencilZFail=vs,this.stencilZPass=vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jc&&(n.blendSrc=this.blendSrc),this.blendDst!==Zc&&(n.blendDst=this.blendDst),this.blendEquation!==Xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Jo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Jr extends rr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new I,Mo=new ht;class Mn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Wh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mo.fromBufferAttribute(this,e),Mo.applyMatrix3(t),this.setXY(e,Mo.x,Mo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pr(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pr(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pr(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),n=sn(n,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Wh&&(t.usage=this.usage),t}}class Hd extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wd extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jm=0;const _n=new he,Ac=new Ce,As=new I,hn=new ps,vr=new ps,Ie=new I;class Xe extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jm++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ud(t)?Wd:Hd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Ac.lookAt(t),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];hn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(hn.min,vr.min),hn.expandByPoint(Ie),Ie.addVectors(hn.max,vr.max),hn.expandByPoint(Ie)):(hn.expandByPoint(vr.min),hn.expandByPoint(vr.max))}hn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ie.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ie.fromBufferAttribute(a,l),c&&(As.fromBufferAttribute(t,l),Ie.add(As)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let M=0;M<a;M++)l[M]=new I,h[M]=new I;const u=new I,d=new I,f=new I,g=new ht,_=new ht,m=new ht,p=new I,x=new I;function v(M,D,L){u.fromArray(s,M*3),d.fromArray(s,D*3),f.fromArray(s,L*3),g.fromArray(o,M*2),_.fromArray(o,D*2),m.fromArray(o,L*2),d.sub(u),f.sub(u),_.sub(g),m.sub(g);const H=1/(_.x*m.y-m.x*_.y);isFinite(H)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(H),x.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(H),l[M].add(p),l[D].add(p),l[L].add(p),h[M].add(x),h[D].add(x),h[L].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let M=0,D=y.length;M<D;++M){const L=y[M],H=L.start,P=L.count;for(let U=H,F=H+P;U<F;U+=3)v(n[U+0],n[U+1],n[U+2])}const T=new I,b=new I,E=new I,C=new I;function S(M){E.fromArray(r,M*3),C.copy(E);const D=l[M];T.copy(D),T.sub(E.multiplyScalar(E.dot(D))).normalize(),b.crossVectors(C,D);const H=b.dot(h[M])<0?-1:1;c[M*4]=T.x,c[M*4+1]=T.y,c[M*4+2]=T.z,c[M*4+3]=H}for(let M=0,D=y.length;M<D;++M){const L=y[M],H=L.start,P=L.count;for(let U=H,F=H+P;U<F;U+=3)S(n[U+0]),S(n[U+1]),S(n[U+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Xe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const su=new he,Gi=new Vd,To=new sr,ru=new I,Cs=new I,Rs=new I,Ps=new I,Cc=new I,bo=new I,wo=new ht,Eo=new ht,Ao=new ht,ou=new I,au=new I,cu=new I,Co=new I,Ro=new I;class Oe extends Ce{constructor(t=new Xe,e=new Jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){bo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Cc.fromBufferAttribute(u,t),o?bo.addScaledVector(Cc,h):bo.addScaledVector(Cc.sub(e),h))}e.add(bo)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(r),Gi.copy(t.ray).recast(t.near),!(To.containsPoint(Gi.origin)===!1&&(Gi.intersectSphere(To,ru)===null||Gi.origin.distanceToSquared(ru)>(t.far-t.near)**2))&&(su.copy(r).invert(),Gi.copy(t.ray).applyMatrix4(su),!(n.boundingBox!==null&&Gi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,T=v;y<T;y+=3){const b=a.getX(y),E=a.getX(y+1),C=a.getX(y+2);s=Po(this,p,t,n,l,h,u,b,E,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);s=Po(this,o,t,n,l,h,u,x,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=x,T=v;y<T;y+=3){const b=y,E=y+1,C=y+2;s=Po(this,p,t,n,l,h,u,b,E,C),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,v=m+1,y=m+2;s=Po(this,o,t,n,l,h,u,x,v,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Zm(i,t,e,n,s,r,o,a){let c;if(t.side===en?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Li,a),c===null)return null;Ro.copy(a),Ro.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ro);return l<e.near||l>e.far?null:{distance:l,point:Ro.clone(),object:i}}function Po(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Cs),i.getVertexPosition(c,Rs),i.getVertexPosition(l,Ps);const h=Zm(i,t,e,n,Cs,Rs,Ps,Co);if(h){s&&(wo.fromBufferAttribute(s,a),Eo.fromBufferAttribute(s,c),Ao.fromBufferAttribute(s,l),h.uv=Cn.getInterpolation(Co,Cs,Rs,Ps,wo,Eo,Ao,new ht)),r&&(wo.fromBufferAttribute(r,a),Eo.fromBufferAttribute(r,c),Ao.fromBufferAttribute(r,l),h.uv1=Cn.getInterpolation(Co,Cs,Rs,Ps,wo,Eo,Ao,new ht),h.uv2=h.uv1),o&&(ou.fromBufferAttribute(o,a),au.fromBufferAttribute(o,c),cu.fromBufferAttribute(o,l),h.normal=Cn.getInterpolation(Co,Cs,Rs,Ps,ou,au,cu,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new I,materialIndex:0};Cn.getNormal(Cs,Rs,Ps,u.normal),h.face=u}return h}class or extends Xe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(u,2));function g(_,m,p,x,v,y,T,b,E,C,S){const M=y/E,D=T/C,L=y/2,H=T/2,P=b/2,U=E+1,F=C+1;let V=0,X=0;const W=new I;for(let Y=0;Y<F;Y++){const J=Y*D-H;for(let tt=0;tt<U;tt++){const Z=tt*M-L;W[_]=Z*x,W[m]=J*v,W[p]=P,l.push(W.x,W.y,W.z),W[_]=0,W[m]=0,W[p]=b>0?1:-1,h.push(W.x,W.y,W.z),u.push(tt/E),u.push(1-Y/C),V+=1}}for(let Y=0;Y<C;Y++)for(let J=0;J<E;J++){const tt=d+J+U*Y,Z=d+J+U*(Y+1),et=d+(J+1)+U*(Y+1),nt=d+(J+1)+U*Y;c.push(tt,Z,nt),c.push(Z,et,nt),X+=6}a.addGroup(f,X,S),f+=X,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ys(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function $e(i){const t={};for(let e=0;e<i.length;e++){const n=Ys(i[e]);for(const s in n)t[s]=n[s]}return t}function $m(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qd(i){return i.getRenderTarget()===null?i.outputColorSpace:Qt.workingColorSpace}const ia={clone:Ys,merge:$e};var Jm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Km=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends rr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jm,this.fragmentShader=Km,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=$m(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xd extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=li}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends Xd{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=el*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(uc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return el*2*Math.atan(Math.tan(uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(uc*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ds=-90,Ls=1;class Qm extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Ds,Ls,t,e);s.layers=this.layers,this.add(s);const r=new dn(Ds,Ls,t,e);r.layers=this.layers,this.add(r);const o=new dn(Ds,Ls,t,e);o.layers=this.layers,this.add(o);const a=new dn(Ds,Ls,t,e);a.layers=this.layers,this.add(a);const c=new dn(Ds,Ls,t,e);c.layers=this.layers,this.add(c);const l=new dn(Ds,Ls,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yd extends pn{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Ws,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tg extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(Er("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Qi?ke:yn),this.texture=new Yd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new or(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:hi});r.uniforms.tEquirect.value=e;const o=new Oe(s,r),a=e.minFilter;return e.minFilter===Lr&&(e.minFilter=vn),new Qm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Rc=new I,eg=new I,ng=new Xt;class Wi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Rc.subVectors(n,e).cross(eg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Rc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ng.getNormalMatrix(t),s=this.coplanarPoint(Rc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hi=new sr,Do=new I;class Ml{constructor(t=new Wi,e=new Wi,n=new Wi,s=new Wi,r=new Wi,o=new Wi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=li){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],x=s[13],v=s[14],y=s[15];if(n[0].setComponents(c-r,d-l,m-f,y-p).normalize(),n[1].setComponents(c+r,d+l,m+f,y+p).normalize(),n[2].setComponents(c+o,d+h,m+g,y+x).normalize(),n[3].setComponents(c-o,d-h,m-g,y-x).normalize(),n[4].setComponents(c-a,d-u,m-_,y-v).normalize(),e===li)n[5].setComponents(c+a,d+u,m+_,y+v).normalize();else if(e===ea)n[5].setComponents(a,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Do.x=s.normal.x>0?t.max.x:t.min.x,Do.y=s.normal.y>0?t.max.y:t.min.y,Do.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Do)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jd(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function ig(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,h){const u=l.array,d=l.usage,f=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,d),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,u){const d=h.array,f=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),f.count===-1&&g.length===0&&i.bufferSubData(u,0,d),g.length!==0){for(let _=0,m=g.length;_<m;_++){const p=g[_];e?i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d,p.start,p.count):i.bufferSubData(u,p.start*d.BYTES_PER_ELEMENT,d.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}f.count!==-1&&(e?i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):i.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}class Tl extends Xe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const x=p*d-o;for(let v=0;v<l;v++){const y=v*u-r;g.push(y,-x,0),_.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<a;x++){const v=x+l*p,y=x+l*(p+1),T=x+1+l*(p+1),b=x+1+l*p;f.push(v,y,b),f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tl(t.width,t.height,t.widthSegments,t.heightSegments)}}var sg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,og=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dg=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_g=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Eg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ag=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Rg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ng=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ig="gl_FragColor = linearToOutputTexel( gl_FragColor );",Og=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ug=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xg=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Yg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$g=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Kg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,t_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,e_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,n_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,i_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,s_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,r_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,o_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,a_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,c_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,h_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,u_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,d_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,f_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,p_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,g_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,__=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,v_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,x_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,y_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,S_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,M_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,T_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,A_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,D_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,L_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,N_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,O_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,B_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,z_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,G_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,H_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,W_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,q_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,X_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Y_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,j_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,J_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,K_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ov=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,uv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_v=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ev=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ov=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:sg,alphahash_pars_fragment:rg,alphamap_fragment:og,alphamap_pars_fragment:ag,alphatest_fragment:cg,alphatest_pars_fragment:lg,aomap_fragment:hg,aomap_pars_fragment:ug,batching_pars_vertex:dg,batching_vertex:fg,begin_vertex:pg,beginnormal_vertex:mg,bsdfs:gg,iridescence_fragment:_g,bumpmap_pars_fragment:vg,clipping_planes_fragment:xg,clipping_planes_pars_fragment:yg,clipping_planes_pars_vertex:Sg,clipping_planes_vertex:Mg,color_fragment:Tg,color_pars_fragment:bg,color_pars_vertex:wg,color_vertex:Eg,common:Ag,cube_uv_reflection_fragment:Cg,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Pg,displacementmap_vertex:Dg,emissivemap_fragment:Lg,emissivemap_pars_fragment:Ng,colorspace_fragment:Ig,colorspace_pars_fragment:Og,envmap_fragment:Ug,envmap_common_pars_fragment:Fg,envmap_pars_fragment:kg,envmap_pars_vertex:Bg,envmap_physical_pars_fragment:Jg,envmap_vertex:Vg,fog_vertex:zg,fog_pars_vertex:Gg,fog_fragment:Hg,fog_pars_fragment:Wg,gradientmap_pars_fragment:qg,lightmap_fragment:Xg,lightmap_pars_fragment:Yg,lights_lambert_fragment:jg,lights_lambert_pars_fragment:Zg,lights_pars_begin:$g,lights_toon_fragment:Kg,lights_toon_pars_fragment:Qg,lights_phong_fragment:t_,lights_phong_pars_fragment:e_,lights_physical_fragment:n_,lights_physical_pars_fragment:i_,lights_fragment_begin:s_,lights_fragment_maps:r_,lights_fragment_end:o_,logdepthbuf_fragment:a_,logdepthbuf_pars_fragment:c_,logdepthbuf_pars_vertex:l_,logdepthbuf_vertex:h_,map_fragment:u_,map_pars_fragment:d_,map_particle_fragment:f_,map_particle_pars_fragment:p_,metalnessmap_fragment:m_,metalnessmap_pars_fragment:g_,morphcolor_vertex:__,morphnormal_vertex:v_,morphtarget_pars_vertex:x_,morphtarget_vertex:y_,normal_fragment_begin:S_,normal_fragment_maps:M_,normal_pars_fragment:T_,normal_pars_vertex:b_,normal_vertex:w_,normalmap_pars_fragment:E_,clearcoat_normal_fragment_begin:A_,clearcoat_normal_fragment_maps:C_,clearcoat_pars_fragment:R_,iridescence_pars_fragment:P_,opaque_fragment:D_,packing:L_,premultiplied_alpha_fragment:N_,project_vertex:I_,dithering_fragment:O_,dithering_pars_fragment:U_,roughnessmap_fragment:F_,roughnessmap_pars_fragment:k_,shadowmap_pars_fragment:B_,shadowmap_pars_vertex:V_,shadowmap_vertex:z_,shadowmask_pars_fragment:G_,skinbase_vertex:H_,skinning_pars_vertex:W_,skinning_vertex:q_,skinnormal_vertex:X_,specularmap_fragment:Y_,specularmap_pars_fragment:j_,tonemapping_fragment:Z_,tonemapping_pars_fragment:$_,transmission_fragment:J_,transmission_pars_fragment:K_,uv_pars_fragment:Q_,uv_pars_vertex:tv,uv_vertex:ev,worldpos_vertex:nv,background_vert:iv,background_frag:sv,backgroundCube_vert:rv,backgroundCube_frag:ov,cube_vert:av,cube_frag:cv,depth_vert:lv,depth_frag:hv,distanceRGBA_vert:uv,distanceRGBA_frag:dv,equirect_vert:fv,equirect_frag:pv,linedashed_vert:mv,linedashed_frag:gv,meshbasic_vert:_v,meshbasic_frag:vv,meshlambert_vert:xv,meshlambert_frag:yv,meshmatcap_vert:Sv,meshmatcap_frag:Mv,meshnormal_vert:Tv,meshnormal_frag:bv,meshphong_vert:wv,meshphong_frag:Ev,meshphysical_vert:Av,meshphysical_frag:Cv,meshtoon_vert:Rv,meshtoon_frag:Pv,points_vert:Dv,points_frag:Lv,shadow_vert:Nv,shadow_frag:Iv,sprite_vert:Ov,sprite_frag:Uv},mt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Gn={basic:{uniforms:$e([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:$e([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:$e([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:$e([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:$e([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new kt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:$e([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:$e([mt.points,mt.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:$e([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:$e([mt.common,mt.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:$e([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:$e([mt.sprite,mt.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:$e([mt.common,mt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:$e([mt.lights,mt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Gn.physical={uniforms:$e([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Lo={r:0,b:0,g:0};function Fv(i,t,e,n,s,r,o){const a=new kt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(m,p){let x=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?_(a,c):v&&v.isColor&&(_(v,1),x=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Na)?(h===void 0&&(h=new Oe(new or(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Ys(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Qt.getTransfer(v.colorSpace)!==le,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Oe(new Tl(2,2),new on({name:"BackgroundMaterial",uniforms:Ys(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(v.colorSpace)!==le,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(Lo,qd(i)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function kv(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null);let l=c,h=!1;function u(P,U,F,V,X){let W=!1;if(o){const Y=_(V,F,U);l!==Y&&(l=Y,f(l.object)),W=p(P,V,F,X),W&&x(P,V,F,X)}else{const Y=U.wireframe===!0;(l.geometry!==V.id||l.program!==F.id||l.wireframe!==Y)&&(l.geometry=V.id,l.program=F.id,l.wireframe=Y,W=!0)}X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,C(P,U,F,V),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function d(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?i.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?i.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function _(P,U,F){const V=F.wireframe===!0;let X=a[P.id];X===void 0&&(X={},a[P.id]=X);let W=X[U.id];W===void 0&&(W={},X[U.id]=W);let Y=W[V];return Y===void 0&&(Y=m(d()),W[V]=Y),Y}function m(P){const U=[],F=[],V=[];for(let X=0;X<s;X++)U[X]=0,F[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:F,attributeDivisors:V,object:P,attributes:{},index:null}}function p(P,U,F,V){const X=l.attributes,W=U.attributes;let Y=0;const J=F.getAttributes();for(const tt in J)if(J[tt].location>=0){const et=X[tt];let nt=W[tt];if(nt===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor)),et===void 0||et.attribute!==nt||nt&&et.data!==nt.data)return!0;Y++}return l.attributesNum!==Y||l.index!==V}function x(P,U,F,V){const X={},W=U.attributes;let Y=0;const J=F.getAttributes();for(const tt in J)if(J[tt].location>=0){let et=W[tt];et===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(et=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(et=P.instanceColor));const nt={};nt.attribute=et,et&&et.data&&(nt.data=et.data),X[tt]=nt,Y++}l.attributes=X,l.attributesNum=Y,l.index=V}function v(){const P=l.newAttributes;for(let U=0,F=P.length;U<F;U++)P[U]=0}function y(P){T(P,0)}function T(P,U){const F=l.newAttributes,V=l.enabledAttributes,X=l.attributeDivisors;F[P]=1,V[P]===0&&(i.enableVertexAttribArray(P),V[P]=1),X[P]!==U&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,U),X[P]=U)}function b(){const P=l.newAttributes,U=l.enabledAttributes;for(let F=0,V=U.length;F<V;F++)U[F]!==P[F]&&(i.disableVertexAttribArray(F),U[F]=0)}function E(P,U,F,V,X,W,Y){Y===!0?i.vertexAttribIPointer(P,U,F,X,W):i.vertexAttribPointer(P,U,F,V,X,W)}function C(P,U,F,V){if(n.isWebGL2===!1&&(P.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const X=V.attributes,W=F.getAttributes(),Y=U.defaultAttributeValues;for(const J in W){const tt=W[J];if(tt.location>=0){let Z=X[J];if(Z===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){const et=Z.normalized,nt=Z.itemSize,dt=e.get(Z);if(dt===void 0)continue;const ft=dt.buffer,ot=dt.type,At=dt.bytesPerElement,St=n.isWebGL2===!0&&(ot===i.INT||ot===i.UNSIGNED_INT||Z.gpuType===Ed);if(Z.isInterleavedBufferAttribute){const Ct=Z.data,N=Ct.stride,ut=Z.offset;if(Ct.isInstancedInterleavedBuffer){for(let Q=0;Q<tt.locationSize;Q++)T(tt.location+Q,Ct.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let Q=0;Q<tt.locationSize;Q++)y(tt.location+Q);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let Q=0;Q<tt.locationSize;Q++)E(tt.location+Q,nt/tt.locationSize,ot,et,N*At,(ut+nt/tt.locationSize*Q)*At,St)}else{if(Z.isInstancedBufferAttribute){for(let Ct=0;Ct<tt.locationSize;Ct++)T(tt.location+Ct,Z.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let Ct=0;Ct<tt.locationSize;Ct++)y(tt.location+Ct);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let Ct=0;Ct<tt.locationSize;Ct++)E(tt.location+Ct,nt/tt.locationSize,ot,et,nt*At,nt/tt.locationSize*Ct*At,St)}}else if(Y!==void 0){const et=Y[J];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(tt.location,et);break;case 3:i.vertexAttrib3fv(tt.location,et);break;case 4:i.vertexAttrib4fv(tt.location,et);break;default:i.vertexAttrib1fv(tt.location,et)}}}}b()}function S(){L();for(const P in a){const U=a[P];for(const F in U){const V=U[F];for(const X in V)g(V[X].object),delete V[X];delete U[F]}delete a[P]}}function M(P){if(a[P.id]===void 0)return;const U=a[P.id];for(const F in U){const V=U[F];for(const X in V)g(V[X].object),delete V[X];delete U[F]}delete a[P.id]}function D(P){for(const U in a){const F=a[U];if(F[P.id]===void 0)continue;const V=F[P.id];for(const X in V)g(V[X].object),delete V[X];delete F[P.id]}}function L(){H(),h=!0,l!==c&&(l=c,f(l.object))}function H(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:L,resetDefaultState:H,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:D,initAttributes:v,enableAttribute:y,disableUnusedAttributes:b}}function Bv(i,t,e,n){const s=n.isWebGL2;let r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,d){if(d===0)return;let f,g;if(s)f=i,g="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](r,h,u,d),e.update(u,r,d)}function l(h,u,d){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d;g++)this.render(h[g],u[g]);else{f.multiDrawArraysWEBGL(r,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Vv(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,y=o||t.has("OES_texture_float"),T=v&&y,b=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:b}}function zv(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Wi,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const x=r?0:n,v=x*4;let y=p.clippingState||null;c.value=y,y=h(g,d,v,f);for(let T=0;T!==v;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,y=f;v!==_;++v,y+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Gv(i){let t=new WeakMap;function e(o,a){return a===$c?o.mapping=Ws:a===Jc&&(o.mapping=qs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$c||a===Jc)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new tg(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class bl extends Xd{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ks=4,lu=[.125,.215,.35,.446,.526,.582],Yi=20,Pc=new bl,hu=new kt;let Dc=null,Lc=0,Nc=0;const qi=(1+Math.sqrt(5))/2,Ns=1/qi,uu=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,qi,Ns),new I(0,qi,-Ns),new I(Ns,0,qi),new I(-Ns,0,qi),new I(qi,Ns,0),new I(-qi,Ns,0)];class du{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Dc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dc,Lc,Nc),t.scissorTest=!1,No(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ws||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Nc=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:ui,format:Dn,colorSpace:fi,depthBuffer:!1},s=fu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hv(r)),this._blurMaterial=Wv(r,t,e)}return s}_compileMaterial(t){const e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,Pc)}_sceneToCubeUV(t,e,n,s){const a=new dn(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(hu),h.toneMapping=Ri,h.autoClear=!1;const f=new Jr({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),g=new Oe(new or,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(hu),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):x===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const v=this._cubeSize;No(s,x*v,p>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ws||t.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;No(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Pc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=uu[(s-1)%uu.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Oe(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Yi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Yi;m>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yi}`);const p=[];let x=0;for(let E=0;E<Yi;++E){const C=E/_,S=Math.exp(-C*C/2);p.push(S),E===0?x+=S:E<m&&(x+=2*S)}for(let E=0;E<p.length;E++)p[E]=p[E]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-n;const y=this._sizeLods[s],T=3*y*(s>v-ks?s-v+ks:0),b=4*(this._cubeSize-y);No(e,T,b,3*y,2*y),c.setRenderTarget(e),c.render(u,Pc)}}function Hv(i){const t=[],e=[],n=[];let s=i;const r=i-ks+1+lu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-ks?c=lu[o-i+ks-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),v=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let b=0;b<f;b++){const E=b%3*2/3-1,C=b>2?0:-1,S=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];x.set(S,_*g*b),v.set(d,m*g*b);const M=[b,b,b,b,b,b];y.set(M,p*g*b)}const T=new Xe;T.setAttribute("position",new Mn(x,_)),T.setAttribute("uv",new Mn(v,m)),T.setAttribute("faceIndex",new Mn(y,p)),t.push(T),s>ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fu(i,t,e){const n=new In(i,t,e);return n.texture.mapping=Na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function No(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wv(i,t,e){const n=new Float32Array(Yi),s=new I(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function pu(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function mu(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function wl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qv(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===$c||c===Jc,h=c===Ws||c===qs;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new du(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new du(i));const d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Xv(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Yv(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let v=0,y=x.length;v<y;v+=3){const T=x[v+0],b=x[v+1],E=x[v+2];d.push(T,b,b,E,E,T)}}else if(g!==void 0){const x=g.array;_=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){const T=v+0,b=v+1,E=v+2;d.push(T,b,b,E,E,T)}}else return;const m=new(Ud(d)?Wd:Hd)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function jv(i,t,e,n){const s=n.isWebGL2;let r;function o(f){r=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,g){i.drawElements(r,g,a,f*c),e.update(g,r,1)}function u(f,g,_){if(_===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,f*c,_),e.update(g,r,_)}function d(f,g,_){if(_===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(f[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,f,0,_);let p=0;for(let x=0;x<_;x++)p+=g[x];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=d}function Zv(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function $v(i,t){return i[0]-t[0]}function Jv(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Kv(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,o=new pe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=r.get(h);if(m===void 0||m.count!==_){let U=function(){H.dispose(),r.delete(h),h.removeEventListener("dispose",U)};var f=U;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],C=h.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let M=h.attributes.position.count*S,D=1;M>t.maxTextureSize&&(D=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const L=new Float32Array(M*D*4*_),H=new Bd(L,M,D,_);H.type=Ai,H.needsUpdate=!0;const P=S*4;for(let F=0;F<_;F++){const V=b[F],X=E[F],W=C[F],Y=M*D*4*F;for(let J=0;J<V.count;J++){const tt=J*P;v===!0&&(o.fromBufferAttribute(V,J),L[Y+tt+0]=o.x,L[Y+tt+1]=o.y,L[Y+tt+2]=o.z,L[Y+tt+3]=0),y===!0&&(o.fromBufferAttribute(X,J),L[Y+tt+4]=o.x,L[Y+tt+5]=o.y,L[Y+tt+6]=o.z,L[Y+tt+7]=0),T===!0&&(o.fromBufferAttribute(W,J),L[Y+tt+8]=o.x,L[Y+tt+9]=o.y,L[Y+tt+10]=o.z,L[Y+tt+11]=W.itemSize===4?o.w:1)}}m={count:_,texture:H,size:new ht(M,D)},r.set(h,m),h.addEventListener("dispose",U)}let p=0;for(let v=0;v<d.length;v++)p+=d[v];const x=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",x),u.getUniforms().setValue(i,"morphTargetInfluences",d),u.getUniforms().setValue(i,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const T=_[y];T[0]=y,T[1]=d[y]}_.sort(Jv);for(let y=0;y<8;y++)y<g&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort($v);const m=h.morphAttributes.position,p=h.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const T=a[y],b=T[0],E=T[1];b!==Number.MAX_SAFE_INTEGER&&E?(m&&h.getAttribute("morphTarget"+y)!==m[b]&&h.setAttribute("morphTarget"+y,m[b]),p&&h.getAttribute("morphNormal"+y)!==p[b]&&h.setAttribute("morphNormal"+y,p[b]),s[y]=E,x+=E):(m&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),p&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}const v=h.morphTargetsRelative?1:1-x;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Qv(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Zd extends pn{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:Ki,h!==Ki&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ki&&(n=Ei),n===void 0&&h===Xs&&(n=Ji),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ke,this.minFilter=c!==void 0?c:Ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $d=new pn,Jd=new Zd(1,1);Jd.compareFunction=Od;const Kd=new Bd,Qd=new km,tf=new Yd,gu=[],_u=[],vu=new Float32Array(16),xu=new Float32Array(9),yu=new Float32Array(4);function ar(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=gu[s];if(r===void 0&&(r=new Float32Array(s),gu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ua(i,t){let e=_u[t];e===void 0&&(e=new Int32Array(t),_u[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function t0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function e0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function s0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;yu.set(n),i.uniformMatrix2fv(this.addr,!1,yu),Pe(e,n)}}function r0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;xu.set(n),i.uniformMatrix3fv(this.addr,!1,xu),Pe(e,n)}}function o0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Re(e,n))return;vu.set(n),i.uniformMatrix4fv(this.addr,!1,vu),Pe(e,n)}}function a0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function l0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function u0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function m0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Jd:$d;e.setTexture2D(t||r,s)}function g0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qd,s)}function _0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tf,s)}function v0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kd,s)}function x0(i){switch(i){case 5126:return t0;case 35664:return e0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return o0;case 5124:case 35670:return a0;case 35667:case 35671:return c0;case 35668:case 35672:return l0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return v0}}function y0(i,t){i.uniform1fv(this.addr,t)}function S0(i,t){const e=ar(t,this.size,2);i.uniform2fv(this.addr,e)}function M0(i,t){const e=ar(t,this.size,3);i.uniform3fv(this.addr,e)}function T0(i,t){const e=ar(t,this.size,4);i.uniform4fv(this.addr,e)}function b0(i,t){const e=ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function w0(i,t){const e=ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function E0(i,t){const e=ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function A0(i,t){i.uniform1iv(this.addr,t)}function C0(i,t){i.uniform2iv(this.addr,t)}function R0(i,t){i.uniform3iv(this.addr,t)}function P0(i,t){i.uniform4iv(this.addr,t)}function D0(i,t){i.uniform1uiv(this.addr,t)}function L0(i,t){i.uniform2uiv(this.addr,t)}function N0(i,t){i.uniform3uiv(this.addr,t)}function I0(i,t){i.uniform4uiv(this.addr,t)}function O0(i,t,e){const n=this.cache,s=t.length,r=Ua(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||$d,r[o])}function U0(i,t,e){const n=this.cache,s=t.length,r=Ua(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Qd,r[o])}function F0(i,t,e){const n=this.cache,s=t.length,r=Ua(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||tf,r[o])}function k0(i,t,e){const n=this.cache,s=t.length,r=Ua(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Pe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Kd,r[o])}function B0(i){switch(i){case 5126:return y0;case 35664:return S0;case 35665:return M0;case 35666:return T0;case 35674:return b0;case 35675:return w0;case 35676:return E0;case 5124:case 35670:return A0;case 35667:case 35671:return C0;case 35668:case 35672:return R0;case 35669:case 35673:return P0;case 5125:return D0;case 36294:return L0;case 36295:return N0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return U0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return k0}}class V0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=x0(e.type)}}class z0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=B0(e.type)}}class G0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ic=/(\w+)(\])?(\[|\.)?/g;function Su(i,t){i.seq.push(t),i.map[t.id]=t}function H0(i,t,e){const n=i.name,s=n.length;for(Ic.lastIndex=0;;){const r=Ic.exec(n),o=Ic.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Su(e,l===void 0?new V0(a,i,t):new z0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new G0(a),Su(e,u)),e=u}}}class jo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);H0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Mu(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const W0=37297;let q0=0;function X0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Y0(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===ta&&e===Qo?n="LinearDisplayP3ToLinearSRGB":t===Qo&&e===ta&&(n="LinearSRGBToLinearDisplayP3"),i){case fi:case Ia:return[n,"LinearTransferOETF"];case ke:case Sl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Tu(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+X0(i.getShaderSource(t),o)}else return s}function j0(i,t){const e=Y0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Z0(i,t){let e;switch(t){case cm:e="Linear";break;case lm:e="Reinhard";break;case hm:e="OptimizedCineon";break;case bd:e="ACESFilmic";break;case dm:e="AgX";break;case um:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $0(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function J0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Bs).join(`
`)}function K0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Q0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Bs(i){return i!==""}function bu(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tx=/^[ \t]*#include +<([\w\d./]+)>/gm;function il(i){return i.replace(tx,nx)}const ex=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function nx(i,t){let e=Gt[t];if(e===void 0){const n=ex.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return il(e)}const ix=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eu(i){return i.replace(ix,sx)}function sx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Au(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function rx(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Md?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Up?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===oi&&(t="SHADOWMAP_TYPE_VSM"),t}function ox(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ws:case qs:t="ENVMAP_TYPE_CUBE";break;case Na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ax(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qs:t="ENVMAP_MODE_REFRACTION";break}return t}function cx(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Td:t="ENVMAP_BLENDING_MULTIPLY";break;case om:t="ENVMAP_BLENDING_MIX";break;case am:t="ENVMAP_BLENDING_ADD";break}return t}function lx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function hx(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=rx(e),l=ox(e),h=ax(e),u=cx(e),d=lx(e),f=e.isWebGL2?"":$0(e),g=J0(e),_=K0(r),m=s.createProgram();let p,x,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Bs).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Bs).join(`
`),x.length>0&&(x+=`
`)):(p=[Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),x=[f,Au(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Ri?Z0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,j0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),o=il(o),o=bu(o,e),o=wu(o,e),a=il(a),a=bu(a,e),a=wu(a,e),o=Eu(o),a=Eu(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=v+p+o,T=v+x+a,b=Mu(s,s.VERTEX_SHADER,y),E=Mu(s,s.FRAGMENT_SHADER,T);s.attachShader(m,b),s.attachShader(m,E),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function C(L){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(m).trim(),P=s.getShaderInfoLog(b).trim(),U=s.getShaderInfoLog(E).trim();let F=!0,V=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,b,E);else{const X=Tu(s,b,"vertex"),W=Tu(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+H+`
`+X+`
`+W)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(P===""||U==="")&&(V=!1);V&&(L.diagnostics={runnable:F,programLog:H,vertexShader:{log:P,prefix:p},fragmentShader:{log:U,prefix:x}})}s.deleteShader(b),s.deleteShader(E),S=new jo(s,m),M=Q0(s,m)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let D=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(m,W0)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q0++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=E,this}let ux=0;class dx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new fx(t),e.set(t,n)),n}}class fx{constructor(t){this.id=ux++,this.code=t,this.usedTimes=0}}function px(i,t,e,n,s,r,o){const a=new zd,c=new dx,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,M,D,L,H){const P=L.fog,U=H.geometry,F=S.isMeshStandardMaterial?L.environment:null,V=(S.isMeshStandardMaterial?e:t).get(S.envMap||F),X=V&&V.mapping===Na?V.image.height:null,W=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Y=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,J=Y!==void 0?Y.length:0;let tt=0;U.morphAttributes.position!==void 0&&(tt=1),U.morphAttributes.normal!==void 0&&(tt=2),U.morphAttributes.color!==void 0&&(tt=3);let Z,et,nt,dt;if(W){const je=Gn[W];Z=je.vertexShader,et=je.fragmentShader}else Z=S.vertexShader,et=S.fragmentShader,c.update(S),nt=c.getVertexShaderID(S),dt=c.getFragmentShaderID(S);const ft=i.getRenderTarget(),ot=H.isInstancedMesh===!0,At=H.isBatchedMesh===!0,St=!!S.map,Ct=!!S.matcap,N=!!V,ut=!!S.aoMap,Q=!!S.lightMap,q=!!S.bumpMap,z=!!S.normalMap,_t=!!S.displacementMap,lt=!!S.emissiveMap,A=!!S.metalnessMap,w=!!S.roughnessMap,k=S.anisotropy>0,it=S.clearcoat>0,st=S.iridescence>0,rt=S.sheen>0,bt=S.transmission>0,gt=k&&!!S.anisotropyMap,Mt=it&&!!S.clearcoatMap,Pt=it&&!!S.clearcoatNormalMap,Bt=it&&!!S.clearcoatRoughnessMap,at=st&&!!S.iridescenceMap,Zt=st&&!!S.iridescenceThicknessMap,Yt=rt&&!!S.sheenColorMap,Ut=rt&&!!S.sheenRoughnessMap,Et=!!S.specularMap,Tt=!!S.specularColorMap,zt=!!S.specularIntensityMap,Jt=bt&&!!S.transmissionMap,xe=bt&&!!S.thicknessMap,Wt=!!S.gradientMap,pt=!!S.alphaMap,O=S.alphaTest>0,vt=!!S.alphaHash,xt=!!S.extensions,It=!!U.attributes.uv1,Dt=!!U.attributes.uv2,ie=!!U.attributes.uv3;let se=Ri;return S.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(se=i.toneMapping),{isWebGL2:h,shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:et,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:dt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:At,instancing:ot,instancingColor:ot&&H.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ft===null?i.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:fi,map:St,matcap:Ct,envMap:N,envMapMode:N&&V.mapping,envMapCubeUVHeight:X,aoMap:ut,lightMap:Q,bumpMap:q,normalMap:z,displacementMap:d&&_t,emissiveMap:lt,normalMapObjectSpace:z&&S.normalMapType===bm,normalMapTangentSpace:z&&S.normalMapType===Id,metalnessMap:A,roughnessMap:w,anisotropy:k,anisotropyMap:gt,clearcoat:it,clearcoatMap:Mt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Bt,iridescence:st,iridescenceMap:at,iridescenceThicknessMap:Zt,sheen:rt,sheenColorMap:Yt,sheenRoughnessMap:Ut,specularMap:Et,specularColorMap:Tt,specularIntensityMap:zt,transmission:bt,transmissionMap:Jt,thicknessMap:xe,gradientMap:Wt,opaque:S.transparent===!1&&S.blending===Gs,alphaMap:pt,alphaTest:O,alphaHash:vt,combine:S.combine,mapUv:St&&_(S.map.channel),aoMapUv:ut&&_(S.aoMap.channel),lightMapUv:Q&&_(S.lightMap.channel),bumpMapUv:q&&_(S.bumpMap.channel),normalMapUv:z&&_(S.normalMap.channel),displacementMapUv:_t&&_(S.displacementMap.channel),emissiveMapUv:lt&&_(S.emissiveMap.channel),metalnessMapUv:A&&_(S.metalnessMap.channel),roughnessMapUv:w&&_(S.roughnessMap.channel),anisotropyMapUv:gt&&_(S.anisotropyMap.channel),clearcoatMapUv:Mt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&_(S.sheenRoughnessMap.channel),specularMapUv:Et&&_(S.specularMap.channel),specularColorMapUv:Tt&&_(S.specularColorMap.channel),specularIntensityMapUv:zt&&_(S.specularIntensityMap.channel),transmissionMapUv:Jt&&_(S.transmissionMap.channel),thicknessMapUv:xe&&_(S.thicknessMap.channel),alphaMapUv:pt&&_(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(z||k),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:It,vertexUv2s:Dt,vertexUv3s:ie,pointsUvs:H.isPoints===!0&&!!U.attributes.uv&&(St||pt),fog:!!P,useFog:S.fog===!0,fogExp2:P&&P.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:H.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:tt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:se,useLegacyLights:i._useLegacyLights,decodeVideoTexture:St&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===le,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wn,flipSided:S.side===en,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:xt&&S.extensions.derivatives===!0,extensionFragDepth:xt&&S.extensions.fragDepth===!0,extensionDrawBuffers:xt&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:xt&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:xt&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const D in S.defines)M.push(D),M.push(S.defines[D]);return S.isRawShaderMaterial===!1&&(x(M,S),v(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.useLegacyLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const M=g[S.type];let D;if(M){const L=Gn[M];D=ia.clone(L.uniforms)}else D=S.uniforms;return D}function T(S,M){let D;for(let L=0,H=l.length;L<H;L++){const P=l[L];if(P.cacheKey===M){D=P,++D.usedTimes;break}}return D===void 0&&(D=new hx(i,M,S,r),l.push(D)),D}function b(S){if(--S.usedTimes===0){const M=l.indexOf(S);l[M]=l[l.length-1],l.pop(),S.destroy()}}function E(S){c.remove(S)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:b,releaseShaderCache:E,programs:l,dispose:C}}function mx(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function gx(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ru(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||gx),n.length>1&&n.sort(d||Cu),s.length>1&&s.sort(d||Cu)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function _x(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ru,i.set(n,[o])):s>=r.length?(o=new Ru,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function vx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new kt};break;case"SpotLight":e={position:new I,direction:new I,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function xx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let yx=0;function Sx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mx(i,t){const e=new vx,n=xx(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new I);const r=new I,o=new he,a=new he;function c(h,u){let d=0,f=0,g=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let _=0,m=0,p=0,x=0,v=0,y=0,T=0,b=0,E=0,C=0,S=0;h.sort(Sx);const M=u===!0?Math.PI:1;for(let L=0,H=h.length;L<H;L++){const P=h[L],U=P.color,F=P.intensity,V=P.distance,X=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=U.r*F*M,f+=U.g*F*M,g+=U.b*F*M;else if(P.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(P.sh.coefficients[W],F);S++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*M),P.castShadow){const Y=P.shadow,J=n.get(P);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,s.directionalShadow[_]=J,s.directionalShadowMap[_]=X,s.directionalShadowMatrix[_]=P.shadow.matrix,y++}s.directional[_]=W,_++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(U).multiplyScalar(F*M),W.distance=V,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,s.spot[p]=W;const Y=P.shadow;if(P.map&&(s.spotLightMap[E]=P.map,E++,Y.updateMatrices(P),P.castShadow&&C++),s.spotLightMatrix[p]=Y.matrix,P.castShadow){const J=n.get(P);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,s.spotShadow[p]=J,s.spotShadowMap[p]=X,b++}p++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(U).multiplyScalar(F),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),s.rectArea[x]=W,x++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity*M),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Y=P.shadow,J=n.get(P);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,J.shadowCameraNear=Y.camera.near,J.shadowCameraFar=Y.camera.far,s.pointShadow[m]=J,s.pointShadowMap[m]=X,s.pointShadowMatrix[m]=P.shadow.matrix,T++}s.point[m]=W,m++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(F*M),W.groundColor.copy(P.groundColor).multiplyScalar(F*M),s.hemi[v]=W,v++}}x>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_FLOAT_1,s.rectAreaLTC2=mt.LTC_FLOAT_2):(s.rectAreaLTC1=mt.LTC_HALF_1,s.rectAreaLTC2=mt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_FLOAT_1,s.rectAreaLTC2=mt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=mt.LTC_HALF_1,s.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=f,s.ambient[2]=g;const D=s.hash;(D.directionalLength!==_||D.pointLength!==m||D.spotLength!==p||D.rectAreaLength!==x||D.hemiLength!==v||D.numDirectionalShadows!==y||D.numPointShadows!==T||D.numSpotShadows!==b||D.numSpotMaps!==E||D.numLightProbes!==S)&&(s.directional.length=_,s.spot.length=p,s.rectArea.length=x,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=b+E-C,s.spotLightMap.length=E,s.numSpotLightShadowsWithMaps=C,s.numLightProbes=S,D.directionalLength=_,D.pointLength=m,D.spotLength=p,D.rectAreaLength=x,D.hemiLength=v,D.numDirectionalShadows=y,D.numPointShadows=T,D.numSpotShadows=b,D.numSpotMaps=E,D.numLightProbes=S,s.version=yx++)}function l(h,u){let d=0,f=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let x=0,v=h.length;x<v;x++){const y=h[x];if(y.isDirectionalLight){const T=s.directional[d];T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),d++}else if(y.isSpotLight){const T=s.spot[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const T=s.rectArea[_];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),a.identity(),o.copy(y.matrixWorld),o.premultiply(p),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const T=s.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const T=s.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function Pu(i,t){const e=new Mx(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Tx(i,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new Pu(i,t),e.set(r,[c])):o>=a.length?(c=new Pu(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class bx extends rr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wx extends rr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cx(i,t,e){let n=new Ml;const s=new ht,r=new ht,o=new pe,a=new bx({depthPacking:Tm}),c=new wx,l={},h=e.maxTextureSize,u={[Li]:en,[en]:Li,[Wn]:Wn},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:Ex,fragmentShader:Ax}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Xe;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Oe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Md;let p=this.type;this.render=function(b,E,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),L=i.state;L.setBlending(hi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const H=p!==oi&&this.type===oi,P=p===oi&&this.type!==oi;for(let U=0,F=b.length;U<F;U++){const V=b[U],X=V.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const W=X.getFrameExtents();if(s.multiply(W),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,X.mapSize.y=r.y)),X.map===null||H===!0||P===!0){const J=this.type!==oi?{minFilter:Ke,magFilter:Ke}:{};X.map!==null&&X.map.dispose(),X.map=new In(s.x,s.y,J),X.map.texture.name=V.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const Y=X.getViewportCount();for(let J=0;J<Y;J++){const tt=X.getViewport(J);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),L.viewport(o),X.updateMatrices(V,J),n=X.getFrustum(),y(E,C,X.camera,V,this.type)}X.isPointLightShadow!==!0&&this.type===oi&&x(X,C),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,D)};function x(b,E){const C=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new In(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,C,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,C,f,_,null)}function v(b,E,C,S){let M=null;const D=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)M=D;else if(M=C.isPointLight===!0?c:a,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const L=M.uuid,H=E.uuid;let P=l[L];P===void 0&&(P={},l[L]=P);let U=P[H];U===void 0&&(U=M.clone(),P[H]=U,E.addEventListener("dispose",T)),M=U}if(M.visible=E.visible,M.wireframe=E.wireframe,S===oi?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:u[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,C.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=i.properties.get(M);L.light=C}return M}function y(b,E,C,S,M){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===oi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const H=t.update(b),P=b.material;if(Array.isArray(P)){const U=H.groups;for(let F=0,V=U.length;F<V;F++){const X=U[F],W=P[X.materialIndex];if(W&&W.visible){const Y=v(b,W,S,M);b.onBeforeShadow(i,b,E,C,H,Y,X),i.renderBufferDirect(C,null,H,Y,b,X),b.onAfterShadow(i,b,E,C,H,Y,X)}}}else if(P.visible){const U=v(b,P,S,M);b.onBeforeShadow(i,b,E,C,H,U,null),i.renderBufferDirect(C,null,H,U,b,null),b.onAfterShadow(i,b,E,C,H,U,null)}}const L=b.children;for(let H=0,P=L.length;H<P;H++)y(L[H],E,C,S,M)}function T(b){b.target.removeEventListener("dispose",T);for(const C in l){const S=l[C],M=b.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}function Rx(i,t,e){const n=e.isWebGL2;function s(){let O=!1;const vt=new pe;let xt=null;const It=new pe(0,0,0,0);return{setMask:function(Dt){xt!==Dt&&!O&&(i.colorMask(Dt,Dt,Dt,Dt),xt=Dt)},setLocked:function(Dt){O=Dt},setClear:function(Dt,ie,se,Le,je){je===!0&&(Dt*=Le,ie*=Le,se*=Le),vt.set(Dt,ie,se,Le),It.equals(vt)===!1&&(i.clearColor(Dt,ie,se,Le),It.copy(vt))},reset:function(){O=!1,xt=null,It.set(-1,0,0,0)}}}function r(){let O=!1,vt=null,xt=null,It=null;return{setTest:function(Dt){Dt?At(i.DEPTH_TEST):St(i.DEPTH_TEST)},setMask:function(Dt){vt!==Dt&&!O&&(i.depthMask(Dt),vt=Dt)},setFunc:function(Dt){if(xt!==Dt){switch(Dt){case Qp:i.depthFunc(i.NEVER);break;case tm:i.depthFunc(i.ALWAYS);break;case em:i.depthFunc(i.LESS);break;case Jo:i.depthFunc(i.LEQUAL);break;case nm:i.depthFunc(i.EQUAL);break;case im:i.depthFunc(i.GEQUAL);break;case sm:i.depthFunc(i.GREATER);break;case rm:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=Dt}},setLocked:function(Dt){O=Dt},setClear:function(Dt){It!==Dt&&(i.clearDepth(Dt),It=Dt)},reset:function(){O=!1,vt=null,xt=null,It=null}}}function o(){let O=!1,vt=null,xt=null,It=null,Dt=null,ie=null,se=null,Le=null,je=null;return{setTest:function(re){O||(re?At(i.STENCIL_TEST):St(i.STENCIL_TEST))},setMask:function(re){vt!==re&&!O&&(i.stencilMask(re),vt=re)},setFunc:function(re,Ze,zn){(xt!==re||It!==Ze||Dt!==zn)&&(i.stencilFunc(re,Ze,zn),xt=re,It=Ze,Dt=zn)},setOp:function(re,Ze,zn){(ie!==re||se!==Ze||Le!==zn)&&(i.stencilOp(re,Ze,zn),ie=re,se=Ze,Le=zn)},setLocked:function(re){O=re},setClear:function(re){je!==re&&(i.clearStencil(re),je=re)},reset:function(){O=!1,vt=null,xt=null,It=null,Dt=null,ie=null,se=null,Le=null,je=null}}}const a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,y=null,T=null,b=null,E=null,C=null,S=new kt(0,0,0),M=0,D=!1,L=null,H=null,P=null,U=null,F=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,W=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=W>=2);let J=null,tt={};const Z=i.getParameter(i.SCISSOR_BOX),et=i.getParameter(i.VIEWPORT),nt=new pe().fromArray(Z),dt=new pe().fromArray(et);function ft(O,vt,xt,It){const Dt=new Uint8Array(4),ie=i.createTexture();i.bindTexture(O,ie),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let se=0;se<xt;se++)n&&(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)?i.texImage3D(vt,0,i.RGBA,1,1,It,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(vt+se,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return ie}const ot={};ot[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),ot[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ot[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ot[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),At(i.DEPTH_TEST),c.setFunc(Jo),lt(!1),A(dh),At(i.CULL_FACE),z(hi);function At(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function St(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function Ct(O,vt){return f[O]!==vt?(i.bindFramebuffer(O,vt),f[O]=vt,n&&(O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=vt),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=vt)),!0):!1}function N(O,vt){let xt=_,It=!1;if(O)if(xt=g.get(vt),xt===void 0&&(xt=[],g.set(vt,xt)),O.isWebGLMultipleRenderTargets){const Dt=O.texture;if(xt.length!==Dt.length||xt[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,se=Dt.length;ie<se;ie++)xt[ie]=i.COLOR_ATTACHMENT0+ie;xt.length=Dt.length,It=!0}}else xt[0]!==i.COLOR_ATTACHMENT0&&(xt[0]=i.COLOR_ATTACHMENT0,It=!0);else xt[0]!==i.BACK&&(xt[0]=i.BACK,It=!0);It&&(e.isWebGL2?i.drawBuffers(xt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(xt))}function ut(O){return m!==O?(i.useProgram(O),m=O,!0):!1}const Q={[Xi]:i.FUNC_ADD,[kp]:i.FUNC_SUBTRACT,[Bp]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[mh]=i.MIN,Q[gh]=i.MAX;else{const O=t.get("EXT_blend_minmax");O!==null&&(Q[mh]=O.MIN_EXT,Q[gh]=O.MAX_EXT)}const q={[Vp]:i.ZERO,[zp]:i.ONE,[Gp]:i.SRC_COLOR,[jc]:i.SRC_ALPHA,[jp]:i.SRC_ALPHA_SATURATE,[Xp]:i.DST_COLOR,[Wp]:i.DST_ALPHA,[Hp]:i.ONE_MINUS_SRC_COLOR,[Zc]:i.ONE_MINUS_SRC_ALPHA,[Yp]:i.ONE_MINUS_DST_COLOR,[qp]:i.ONE_MINUS_DST_ALPHA,[Zp]:i.CONSTANT_COLOR,[$p]:i.ONE_MINUS_CONSTANT_COLOR,[Jp]:i.CONSTANT_ALPHA,[Kp]:i.ONE_MINUS_CONSTANT_ALPHA};function z(O,vt,xt,It,Dt,ie,se,Le,je,re){if(O===hi){p===!0&&(St(i.BLEND),p=!1);return}if(p===!1&&(At(i.BLEND),p=!0),O!==Fp){if(O!==x||re!==D){if((v!==Xi||b!==Xi)&&(i.blendEquation(i.FUNC_ADD),v=Xi,b=Xi),re)switch(O){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dr:i.blendFunc(i.ONE,i.ONE);break;case fh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ph:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ph:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,T=null,E=null,C=null,S.set(0,0,0),M=0,x=O,D=re}return}Dt=Dt||vt,ie=ie||xt,se=se||It,(vt!==v||Dt!==b)&&(i.blendEquationSeparate(Q[vt],Q[Dt]),v=vt,b=Dt),(xt!==y||It!==T||ie!==E||se!==C)&&(i.blendFuncSeparate(q[xt],q[It],q[ie],q[se]),y=xt,T=It,E=ie,C=se),(Le.equals(S)===!1||je!==M)&&(i.blendColor(Le.r,Le.g,Le.b,je),S.copy(Le),M=je),x=O,D=!1}function _t(O,vt){O.side===Wn?St(i.CULL_FACE):At(i.CULL_FACE);let xt=O.side===en;vt&&(xt=!xt),lt(xt),O.blending===Gs&&O.transparent===!1?z(hi):z(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),c.setFunc(O.depthFunc),c.setTest(O.depthTest),c.setMask(O.depthWrite),a.setMask(O.colorWrite);const It=O.stencilWrite;l.setTest(It),It&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),k(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?At(i.SAMPLE_ALPHA_TO_COVERAGE):St(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(O){L!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),L=O)}function A(O){O!==Ip?(At(i.CULL_FACE),O!==H&&(O===dh?i.cullFace(i.BACK):O===Op?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):St(i.CULL_FACE),H=O}function w(O){O!==P&&(X&&i.lineWidth(O),P=O)}function k(O,vt,xt){O?(At(i.POLYGON_OFFSET_FILL),(U!==vt||F!==xt)&&(i.polygonOffset(vt,xt),U=vt,F=xt)):St(i.POLYGON_OFFSET_FILL)}function it(O){O?At(i.SCISSOR_TEST):St(i.SCISSOR_TEST)}function st(O){O===void 0&&(O=i.TEXTURE0+V-1),J!==O&&(i.activeTexture(O),J=O)}function rt(O,vt,xt){xt===void 0&&(J===null?xt=i.TEXTURE0+V-1:xt=J);let It=tt[xt];It===void 0&&(It={type:void 0,texture:void 0},tt[xt]=It),(It.type!==O||It.texture!==vt)&&(J!==xt&&(i.activeTexture(xt),J=xt),i.bindTexture(O,vt||ot[O]),It.type=O,It.texture=vt)}function bt(){const O=tt[J];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function gt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Bt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Zt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ut(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function zt(O){nt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),nt.copy(O))}function Jt(O){dt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),dt.copy(O))}function xe(O,vt){let xt=u.get(vt);xt===void 0&&(xt=new WeakMap,u.set(vt,xt));let It=xt.get(O);It===void 0&&(It=i.getUniformBlockIndex(vt,O.name),xt.set(O,It))}function Wt(O,vt){const It=u.get(vt).get(O);h.get(vt)!==It&&(i.uniformBlockBinding(vt,It,O.__bindingPointIndex),h.set(vt,It))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},J=null,tt={},f={},g=new WeakMap,_=[],m=null,p=!1,x=null,v=null,y=null,T=null,b=null,E=null,C=null,S=new kt(0,0,0),M=0,D=!1,L=null,H=null,P=null,U=null,F=null,nt.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:At,disable:St,bindFramebuffer:Ct,drawBuffers:N,useProgram:ut,setBlending:z,setMaterial:_t,setFlipSided:lt,setCullFace:A,setLineWidth:w,setPolygonOffset:k,setScissorTest:it,activeTexture:st,bindTexture:rt,unbindTexture:bt,compressedTexImage2D:gt,compressedTexImage3D:Mt,texImage2D:Et,texImage3D:Tt,updateUBOMapping:xe,uniformBlockBinding:Wt,texStorage2D:Yt,texStorage3D:Ut,texSubImage2D:Pt,texSubImage3D:Bt,compressedTexSubImage2D:at,compressedTexSubImage3D:Zt,scissor:zt,viewport:Jt,reset:pt}}function Px(i,t,e,n,s,r,o){const a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,w){return f?new OffscreenCanvas(A,w):na("canvas")}function _(A,w,k,it){let st=1;if((A.width>it||A.height>it)&&(st=it/Math.max(A.width,A.height)),st<1||w===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const rt=w?nl:Math.floor,bt=rt(st*A.width),gt=rt(st*A.height);u===void 0&&(u=g(bt,gt));const Mt=k?g(bt,gt):u;return Mt.width=bt,Mt.height=gt,Mt.getContext("2d").drawImage(A,0,0,bt,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+bt+"x"+gt+")."),Mt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Xh(A.width)&&Xh(A.height)}function p(A){return a?!1:A.wrapS!==Pn||A.wrapT!==Pn||A.minFilter!==Ke&&A.minFilter!==vn}function x(A,w){return A.generateMipmaps&&w&&A.minFilter!==Ke&&A.minFilter!==vn}function v(A){i.generateMipmap(A)}function y(A,w,k,it,st=!1){if(a===!1)return w;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let rt=w;if(w===i.RED&&(k===i.FLOAT&&(rt=i.R32F),k===i.HALF_FLOAT&&(rt=i.R16F),k===i.UNSIGNED_BYTE&&(rt=i.R8)),w===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(rt=i.R8UI),k===i.UNSIGNED_SHORT&&(rt=i.R16UI),k===i.UNSIGNED_INT&&(rt=i.R32UI),k===i.BYTE&&(rt=i.R8I),k===i.SHORT&&(rt=i.R16I),k===i.INT&&(rt=i.R32I)),w===i.RG&&(k===i.FLOAT&&(rt=i.RG32F),k===i.HALF_FLOAT&&(rt=i.RG16F),k===i.UNSIGNED_BYTE&&(rt=i.RG8)),w===i.RGBA){const bt=st?Ko:Qt.getTransfer(it);k===i.FLOAT&&(rt=i.RGBA32F),k===i.HALF_FLOAT&&(rt=i.RGBA16F),k===i.UNSIGNED_BYTE&&(rt=bt===le?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function T(A,w,k){return x(A,k)===!0||A.isFramebufferTexture&&A.minFilter!==Ke&&A.minFilter!==vn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function b(A){return A===Ke||A===_h||A===sc?i.NEAREST:i.LINEAR}function E(A){const w=A.target;w.removeEventListener("dispose",E),S(w),w.isVideoTexture&&h.delete(w)}function C(A){const w=A.target;w.removeEventListener("dispose",C),D(w)}function S(A){const w=n.get(A);if(w.__webglInit===void 0)return;const k=A.source,it=d.get(k);if(it){const st=it[w.__cacheKey];st.usedTimes--,st.usedTimes===0&&M(A),Object.keys(it).length===0&&d.delete(k)}n.remove(A)}function M(A){const w=n.get(A);i.deleteTexture(w.__webglTexture);const k=A.source,it=d.get(k);delete it[w.__cacheKey],o.memory.textures--}function D(A){const w=A.texture,k=n.get(A),it=n.get(w);if(it.__webglTexture!==void 0&&(i.deleteTexture(it.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(k.__webglFramebuffer[st]))for(let rt=0;rt<k.__webglFramebuffer[st].length;rt++)i.deleteFramebuffer(k.__webglFramebuffer[st][rt]);else i.deleteFramebuffer(k.__webglFramebuffer[st]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[st])}else{if(Array.isArray(k.__webglFramebuffer))for(let st=0;st<k.__webglFramebuffer.length;st++)i.deleteFramebuffer(k.__webglFramebuffer[st]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let st=0;st<k.__webglColorRenderbuffer.length;st++)k.__webglColorRenderbuffer[st]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[st]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let st=0,rt=w.length;st<rt;st++){const bt=n.get(w[st]);bt.__webglTexture&&(i.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(w[st])}n.remove(w),n.remove(A)}let L=0;function H(){L=0}function P(){const A=L;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function U(A){const w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function F(A,w){const k=n.get(A);if(A.isVideoTexture&&_t(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const it=A.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(k,A,w);return}}e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+w)}function V(A,w){const k=n.get(A);if(A.version>0&&k.__version!==A.version){nt(k,A,w);return}e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+w)}function X(A,w){const k=n.get(A);if(A.version>0&&k.__version!==A.version){nt(k,A,w);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+w)}function W(A,w){const k=n.get(A);if(A.version>0&&k.__version!==A.version){dt(k,A,w);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+w)}const Y={[Kc]:i.REPEAT,[Pn]:i.CLAMP_TO_EDGE,[Qc]:i.MIRRORED_REPEAT},J={[Ke]:i.NEAREST,[_h]:i.NEAREST_MIPMAP_NEAREST,[sc]:i.NEAREST_MIPMAP_LINEAR,[vn]:i.LINEAR,[fm]:i.LINEAR_MIPMAP_NEAREST,[Lr]:i.LINEAR_MIPMAP_LINEAR},tt={[wm]:i.NEVER,[Dm]:i.ALWAYS,[Em]:i.LESS,[Od]:i.LEQUAL,[Am]:i.EQUAL,[Pm]:i.GEQUAL,[Cm]:i.GREATER,[Rm]:i.NOTEQUAL};function Z(A,w,k){if(k?(i.texParameteri(A,i.TEXTURE_WRAP_S,Y[w.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Y[w.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Y[w.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,J[w.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,J[w.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(w.wrapS!==Pn||w.wrapT!==Pn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,b(w.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,b(w.minFilter)),w.minFilter!==Ke&&w.minFilter!==vn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,tt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(w.magFilter===Ke||w.minFilter!==sc&&w.minFilter!==Lr||w.type===Ai&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===ui&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(i.texParameterf(A,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function et(A,w){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",E));const it=w.source;let st=d.get(it);st===void 0&&(st={},d.set(it,st));const rt=U(w);if(rt!==A.__cacheKey){st[rt]===void 0&&(st[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),st[rt].usedTimes++;const bt=st[A.__cacheKey];bt!==void 0&&(st[A.__cacheKey].usedTimes--,bt.usedTimes===0&&M(w)),A.__cacheKey=rt,A.__webglTexture=st[rt].texture}return k}function nt(A,w,k){let it=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(it=i.TEXTURE_3D);const st=et(A,w),rt=w.source;e.bindTexture(it,A.__webglTexture,i.TEXTURE0+k);const bt=n.get(rt);if(rt.version!==bt.__version||st===!0){e.activeTexture(i.TEXTURE0+k);const gt=Qt.getPrimaries(Qt.workingColorSpace),Mt=w.colorSpace===yn?null:Qt.getPrimaries(w.colorSpace),Pt=w.colorSpace===yn||gt===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Bt=p(w)&&m(w.image)===!1;let at=_(w.image,Bt,!1,s.maxTextureSize);at=lt(w,at);const Zt=m(at)||a,Yt=r.convert(w.format,w.colorSpace);let Ut=r.convert(w.type),Et=y(w.internalFormat,Yt,Ut,w.colorSpace,w.isVideoTexture);Z(it,w,Zt);let Tt;const zt=w.mipmaps,Jt=a&&w.isVideoTexture!==!0&&Et!==Ld,xe=bt.__version===void 0||st===!0,Wt=T(w,at,Zt);if(w.isDepthTexture)Et=i.DEPTH_COMPONENT,a?w.type===Ai?Et=i.DEPTH_COMPONENT32F:w.type===Ei?Et=i.DEPTH_COMPONENT24:w.type===Ji?Et=i.DEPTH24_STENCIL8:Et=i.DEPTH_COMPONENT16:w.type===Ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===Ki&&Et===i.DEPTH_COMPONENT&&w.type!==yl&&w.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Ei,Ut=r.convert(w.type)),w.format===Xs&&Et===i.DEPTH_COMPONENT&&(Et=i.DEPTH_STENCIL,w.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=Ji,Ut=r.convert(w.type))),xe&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,Et,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Et,at.width,at.height,0,Yt,Ut,null));else if(w.isDataTexture)if(zt.length>0&&Zt){Jt&&xe&&e.texStorage2D(i.TEXTURE_2D,Wt,Et,zt[0].width,zt[0].height);for(let pt=0,O=zt.length;pt<O;pt++)Tt=zt[pt],Jt?e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Tt.width,Tt.height,Yt,Ut,Tt.data):e.texImage2D(i.TEXTURE_2D,pt,Et,Tt.width,Tt.height,0,Yt,Ut,Tt.data);w.generateMipmaps=!1}else Jt?(xe&&e.texStorage2D(i.TEXTURE_2D,Wt,Et,at.width,at.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,Yt,Ut,at.data)):e.texImage2D(i.TEXTURE_2D,0,Et,at.width,at.height,0,Yt,Ut,at.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Jt&&xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,Et,zt[0].width,zt[0].height,at.depth);for(let pt=0,O=zt.length;pt<O;pt++)Tt=zt[pt],w.format!==Dn?Yt!==null?Jt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Tt.width,Tt.height,at.depth,Yt,Tt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pt,Et,Tt.width,Tt.height,at.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,pt,0,0,0,Tt.width,Tt.height,at.depth,Yt,Ut,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,pt,Et,Tt.width,Tt.height,at.depth,0,Yt,Ut,Tt.data)}else{Jt&&xe&&e.texStorage2D(i.TEXTURE_2D,Wt,Et,zt[0].width,zt[0].height);for(let pt=0,O=zt.length;pt<O;pt++)Tt=zt[pt],w.format!==Dn?Yt!==null?Jt?e.compressedTexSubImage2D(i.TEXTURE_2D,pt,0,0,Tt.width,Tt.height,Yt,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,pt,Et,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Tt.width,Tt.height,Yt,Ut,Tt.data):e.texImage2D(i.TEXTURE_2D,pt,Et,Tt.width,Tt.height,0,Yt,Ut,Tt.data)}else if(w.isDataArrayTexture)Jt?(xe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Wt,Et,at.width,at.height,at.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Yt,Ut,at.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,at.width,at.height,at.depth,0,Yt,Ut,at.data);else if(w.isData3DTexture)Jt?(xe&&e.texStorage3D(i.TEXTURE_3D,Wt,Et,at.width,at.height,at.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Yt,Ut,at.data)):e.texImage3D(i.TEXTURE_3D,0,Et,at.width,at.height,at.depth,0,Yt,Ut,at.data);else if(w.isFramebufferTexture){if(xe)if(Jt)e.texStorage2D(i.TEXTURE_2D,Wt,Et,at.width,at.height);else{let pt=at.width,O=at.height;for(let vt=0;vt<Wt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Et,pt,O,0,Yt,Ut,null),pt>>=1,O>>=1}}else if(zt.length>0&&Zt){Jt&&xe&&e.texStorage2D(i.TEXTURE_2D,Wt,Et,zt[0].width,zt[0].height);for(let pt=0,O=zt.length;pt<O;pt++)Tt=zt[pt],Jt?e.texSubImage2D(i.TEXTURE_2D,pt,0,0,Yt,Ut,Tt):e.texImage2D(i.TEXTURE_2D,pt,Et,Yt,Ut,Tt);w.generateMipmaps=!1}else Jt?(xe&&e.texStorage2D(i.TEXTURE_2D,Wt,Et,at.width,at.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Yt,Ut,at)):e.texImage2D(i.TEXTURE_2D,0,Et,Yt,Ut,at);x(w,Zt)&&v(it),bt.__version=rt.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function dt(A,w,k){if(w.image.length!==6)return;const it=et(A,w),st=w.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+k);const rt=n.get(st);if(st.version!==rt.__version||it===!0){e.activeTexture(i.TEXTURE0+k);const bt=Qt.getPrimaries(Qt.workingColorSpace),gt=w.colorSpace===yn?null:Qt.getPrimaries(w.colorSpace),Mt=w.colorSpace===yn||bt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const Pt=w.isCompressedTexture||w.image[0].isCompressedTexture,Bt=w.image[0]&&w.image[0].isDataTexture,at=[];for(let pt=0;pt<6;pt++)!Pt&&!Bt?at[pt]=_(w.image[pt],!1,!0,s.maxCubemapSize):at[pt]=Bt?w.image[pt].image:w.image[pt],at[pt]=lt(w,at[pt]);const Zt=at[0],Yt=m(Zt)||a,Ut=r.convert(w.format,w.colorSpace),Et=r.convert(w.type),Tt=y(w.internalFormat,Ut,Et,w.colorSpace),zt=a&&w.isVideoTexture!==!0,Jt=rt.__version===void 0||it===!0;let xe=T(w,Zt,Yt);Z(i.TEXTURE_CUBE_MAP,w,Yt);let Wt;if(Pt){zt&&Jt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Tt,Zt.width,Zt.height);for(let pt=0;pt<6;pt++){Wt=at[pt].mipmaps;for(let O=0;O<Wt.length;O++){const vt=Wt[O];w.format!==Dn?Ut!==null?zt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,O,0,0,vt.width,vt.height,Ut,vt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,O,Tt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,O,0,0,vt.width,vt.height,Ut,Et,vt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,O,Tt,vt.width,vt.height,0,Ut,Et,vt.data)}}}else{Wt=w.mipmaps,zt&&Jt&&(Wt.length>0&&xe++,e.texStorage2D(i.TEXTURE_CUBE_MAP,xe,Tt,at[0].width,at[0].height));for(let pt=0;pt<6;pt++)if(Bt){zt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,at[pt].width,at[pt].height,Ut,Et,at[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Tt,at[pt].width,at[pt].height,0,Ut,Et,at[pt].data);for(let O=0;O<Wt.length;O++){const xt=Wt[O].image[pt].image;zt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,O+1,0,0,xt.width,xt.height,Ut,Et,xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,O+1,Tt,xt.width,xt.height,0,Ut,Et,xt.data)}}else{zt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Ut,Et,at[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,Tt,Ut,Et,at[pt]);for(let O=0;O<Wt.length;O++){const vt=Wt[O];zt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,O+1,0,0,Ut,Et,vt.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,O+1,Tt,Ut,Et,vt.image[pt])}}}x(w,Yt)&&v(i.TEXTURE_CUBE_MAP),rt.__version=st.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ft(A,w,k,it,st,rt){const bt=r.convert(k.format,k.colorSpace),gt=r.convert(k.type),Mt=y(k.internalFormat,bt,gt,k.colorSpace);if(!n.get(w).__hasExternalTextures){const Bt=Math.max(1,w.width>>rt),at=Math.max(1,w.height>>rt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,rt,Mt,Bt,at,w.depth,0,bt,gt,null):e.texImage2D(st,rt,Mt,Bt,at,0,bt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),z(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,st,n.get(k).__webglTexture,0,q(w)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,st,n.get(k).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(A,w,k){if(i.bindRenderbuffer(i.RENDERBUFFER,A),w.depthBuffer&&!w.stencilBuffer){let it=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(k||z(w)){const st=w.depthTexture;st&&st.isDepthTexture&&(st.type===Ai?it=i.DEPTH_COMPONENT32F:st.type===Ei&&(it=i.DEPTH_COMPONENT24));const rt=q(w);z(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,it,w.width,w.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,it,w.width,w.height)}else i.renderbufferStorage(i.RENDERBUFFER,it,w.width,w.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(w.depthBuffer&&w.stencilBuffer){const it=q(w);k&&z(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,w.width,w.height):z(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it,i.DEPTH24_STENCIL8,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const it=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let st=0;st<it.length;st++){const rt=it[st],bt=r.convert(rt.format,rt.colorSpace),gt=r.convert(rt.type),Mt=y(rt.internalFormat,bt,gt,rt.colorSpace),Pt=q(w);k&&z(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Pt,Mt,w.width,w.height):z(w)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Pt,Mt,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Mt,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);const it=n.get(w.depthTexture).__webglTexture,st=q(w);if(w.depthTexture.format===Ki)z(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,it,0);else if(w.depthTexture.format===Xs)z(w)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function St(A){const w=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");At(w.__webglFramebuffer,A)}else if(k){w.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[it]),w.__webglDepthbuffer[it]=i.createRenderbuffer(),ot(w.__webglDepthbuffer[it],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=i.createRenderbuffer(),ot(w.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(A,w,k){const it=n.get(A);w!==void 0&&ft(it.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&St(A)}function N(A){const w=A.texture,k=n.get(A),it=n.get(w);A.addEventListener("dispose",C),A.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=w.version,o.memory.textures++);const st=A.isWebGLCubeRenderTarget===!0,rt=A.isWebGLMultipleRenderTargets===!0,bt=m(A)||a;if(st){k.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(a&&w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer[gt]=[];for(let Mt=0;Mt<w.mipmaps.length;Mt++)k.__webglFramebuffer[gt][Mt]=i.createFramebuffer()}else k.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer=[];for(let gt=0;gt<w.mipmaps.length;gt++)k.__webglFramebuffer[gt]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(rt)if(s.drawBuffers){const gt=A.texture;for(let Mt=0,Pt=gt.length;Mt<Pt;Mt++){const Bt=n.get(gt[Mt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&z(A)===!1){const gt=rt?w:[w];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Mt=0;Mt<gt.length;Mt++){const Pt=gt[Mt];k.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Mt]);const Bt=r.convert(Pt.format,Pt.colorSpace),at=r.convert(Pt.type),Zt=y(Pt.internalFormat,Bt,at,Pt.colorSpace,A.isXRRenderTarget===!0),Yt=q(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Zt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,k.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Z(i.TEXTURE_CUBE_MAP,w,bt);for(let gt=0;gt<6;gt++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)ft(k.__webglFramebuffer[gt][Mt],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Mt);else ft(k.__webglFramebuffer[gt],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);x(w,bt)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){const gt=A.texture;for(let Mt=0,Pt=gt.length;Mt<Pt;Mt++){const Bt=gt[Mt],at=n.get(Bt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),Z(i.TEXTURE_2D,Bt,bt),ft(k.__webglFramebuffer,A,Bt,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),x(Bt,bt)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?gt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(gt,it.__webglTexture),Z(gt,w,bt),a&&w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)ft(k.__webglFramebuffer[Mt],A,w,i.COLOR_ATTACHMENT0,gt,Mt);else ft(k.__webglFramebuffer,A,w,i.COLOR_ATTACHMENT0,gt,0);x(w,bt)&&v(gt),e.unbindTexture()}A.depthBuffer&&St(A)}function ut(A){const w=m(A)||a,k=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let it=0,st=k.length;it<st;it++){const rt=k[it];if(x(rt,w)){const bt=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,gt=n.get(rt).__webglTexture;e.bindTexture(bt,gt),v(bt),e.unbindTexture()}}}function Q(A){if(a&&A.samples>0&&z(A)===!1){const w=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],k=A.width,it=A.height;let st=i.COLOR_BUFFER_BIT;const rt=[],bt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(A),Mt=A.isWebGLMultipleRenderTargets===!0;if(Mt)for(let Pt=0;Pt<w.length;Pt++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Pt=0;Pt<w.length;Pt++){rt.push(i.COLOR_ATTACHMENT0+Pt),A.depthBuffer&&rt.push(bt);const Bt=gt.__ignoreDepthValues!==void 0?gt.__ignoreDepthValues:!1;if(Bt===!1&&(A.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),Mt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Pt]),Bt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[bt]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[bt])),Mt){const at=n.get(w[Pt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,at,0)}i.blitFramebuffer(0,0,k,it,0,0,k,it,st,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Pt=0;Pt<w.length;Pt++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Pt]);const Bt=n.get(w[Pt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Pt,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}}function q(A){return Math.min(s.maxSamples,A.samples)}function z(A){const w=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function _t(A){const w=o.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}function lt(A,w){const k=A.colorSpace,it=A.format,st=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===tl||k!==fi&&k!==yn&&(Qt.getTransfer(k)===le?a===!1?t.has("EXT_sRGB")===!0&&it===Dn?(A.format=tl,A.minFilter=vn,A.generateMipmaps=!1):w=Fd.sRGBToLinear(w):(it!==Dn||st!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),w}this.allocateTextureUnit=P,this.resetTextureUnits=H,this.setTexture2D=F,this.setTexture2DArray=V,this.setTexture3D=X,this.setTextureCube=W,this.rebindTextures=Ct,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=z}function Dx(i,t,e){const n=e.isWebGL2;function s(r,o=yn){let a;const c=Qt.getTransfer(o);if(r===Pi)return i.UNSIGNED_BYTE;if(r===Ad)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Cd)return i.UNSIGNED_SHORT_5_5_5_1;if(r===pm)return i.BYTE;if(r===mm)return i.SHORT;if(r===yl)return i.UNSIGNED_SHORT;if(r===Ed)return i.INT;if(r===Ei)return i.UNSIGNED_INT;if(r===Ai)return i.FLOAT;if(r===ui)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===gm)return i.ALPHA;if(r===Dn)return i.RGBA;if(r===_m)return i.LUMINANCE;if(r===vm)return i.LUMINANCE_ALPHA;if(r===Ki)return i.DEPTH_COMPONENT;if(r===Xs)return i.DEPTH_STENCIL;if(r===tl)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===xm)return i.RED;if(r===Rd)return i.RED_INTEGER;if(r===ym)return i.RG;if(r===Pd)return i.RG_INTEGER;if(r===Dd)return i.RGBA_INTEGER;if(r===rc||r===oc||r===ac||r===cc)if(c===le)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===rc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===oc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===rc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===oc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ac)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vh||r===xh||r===yh||r===Sh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===vh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ld)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Mh||r===Th)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Mh)return c===le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Th)return c===le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bh||r===wh||r===Eh||r===Ah||r===Ch||r===Rh||r===Ph||r===Dh||r===Lh||r===Nh||r===Ih||r===Oh||r===Uh||r===Fh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===bh)return c===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===wh)return c===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Eh)return c===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ah)return c===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ch)return c===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rh)return c===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ph)return c===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dh)return c===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lh)return c===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Nh)return c===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ih)return c===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Oh)return c===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Uh)return c===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fh)return c===le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===lc||r===kh||r===Bh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===lc)return c===le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===kh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sm||r===Vh||r===zh||r===Gh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===lc)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Vh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===zh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Gh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ji?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class Lx extends dn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ci extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nx={type:"move"};class Oc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ci;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ix extends nr{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=e.getContextAttributes();let m=null,p=null;const x=[],v=[],y=new ht;let T=null;const b=new dn;b.layers.enable(1),b.viewport=new pe;const E=new dn;E.layers.enable(2),E.viewport=new pe;const C=[b,E],S=new Lx;S.layers.enable(1),S.layers.enable(2);let M=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=x[Z];return et===void 0&&(et=new Oc,x[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=x[Z];return et===void 0&&(et=new Oc,x[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=x[Z];return et===void 0&&(et=new Oc,x[Z]=et),et.getHandSpace()};function L(Z){const et=v.indexOf(Z.inputSource);if(et===-1)return;const nt=x[et];nt!==void 0&&(nt.update(Z.inputSource,Z.frame,l||o),nt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",P);for(let Z=0;Z<x.length;Z++){const et=v[Z];et!==null&&(v[Z]=null,x[Z].disconnect(et))}M=null,D=null,t.setRenderTarget(m),f=null,d=null,u=null,s=null,p=null,tt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",H),s.addEventListener("inputsourceschange",P),_.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(y),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new In(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let et=null,nt=null,dt=null;_.depth&&(dt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=_.stencil?Xs:Ki,nt=_.stencil?Ji:Ei);const ft={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),p=new In(d.textureWidth,d.textureHeight,{format:Dn,type:Pi,depthTexture:new Zd(d.textureWidth,d.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const ot=t.properties.get(p);ot.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function P(Z){for(let et=0;et<Z.removed.length;et++){const nt=Z.removed[et],dt=v.indexOf(nt);dt>=0&&(v[dt]=null,x[dt].disconnect(nt))}for(let et=0;et<Z.added.length;et++){const nt=Z.added[et];let dt=v.indexOf(nt);if(dt===-1){for(let ot=0;ot<x.length;ot++)if(ot>=v.length){v.push(nt),dt=ot;break}else if(v[ot]===null){v[ot]=nt,dt=ot;break}if(dt===-1)break}const ft=x[dt];ft&&ft.connect(nt)}}const U=new I,F=new I;function V(Z,et,nt){U.setFromMatrixPosition(et.matrixWorld),F.setFromMatrixPosition(nt.matrixWorld);const dt=U.distanceTo(F),ft=et.projectionMatrix.elements,ot=nt.projectionMatrix.elements,At=ft[14]/(ft[10]-1),St=ft[14]/(ft[10]+1),Ct=(ft[9]+1)/ft[5],N=(ft[9]-1)/ft[5],ut=(ft[8]-1)/ft[0],Q=(ot[8]+1)/ot[0],q=At*ut,z=At*Q,_t=dt/(-ut+Q),lt=_t*-ut;et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(lt),Z.translateZ(_t),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const A=At+_t,w=St+_t,k=q-lt,it=z+(dt-lt),st=Ct*St/w*A,rt=N*St/w*A;Z.projectionMatrix.makePerspective(k,it,st,rt,A,w),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function X(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;S.near=E.near=b.near=Z.near,S.far=E.far=b.far=Z.far,(M!==S.near||D!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),M=S.near,D=S.far);const et=Z.parent,nt=S.cameras;X(S,et);for(let dt=0;dt<nt.length;dt++)X(nt[dt],et);nt.length===2?V(S,b,E):S.projectionMatrix.copy(b.projectionMatrix),W(Z,S,et)};function W(Z,et,nt){nt===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(nt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=el*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)};let Y=null;function J(Z,et){if(h=et.getViewerPose(l||o),g=et,h!==null){const nt=h.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let dt=!1;nt.length!==S.cameras.length&&(S.cameras.length=0,dt=!0);for(let ft=0;ft<nt.length;ft++){const ot=nt[ft];let At=null;if(f!==null)At=f.getViewport(ot);else{const Ct=u.getViewSubImage(d,ot);At=Ct.viewport,ft===0&&(t.setRenderTargetTextures(p,Ct.colorTexture,d.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(p))}let St=C[ft];St===void 0&&(St=new dn,St.layers.enable(ft),St.viewport=new pe,C[ft]=St),St.matrix.fromArray(ot.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(ot.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(At.x,At.y,At.width,At.height),ft===0&&(S.matrix.copy(St.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),dt===!0&&S.cameras.push(St)}}for(let nt=0;nt<x.length;nt++){const dt=v[nt],ft=x[nt];dt!==null&&ft!==void 0&&ft.update(dt,et,l||o)}Y&&Y(Z,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const tt=new jd;tt.setAnimationLoop(J),this.setAnimationLoop=function(Z){Y=Z},this.dispose=function(){}}}function Ox(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qd(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,x,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ux(i,t,e,n){let s={},r={},o=[];const a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,v){const y=v.program;n.uniformBlockBinding(x,y)}function l(x,v){let y=s[x.id];y===void 0&&(g(x),y=h(x),s[x.id]=y,x.addEventListener("dispose",m));const T=v.program;n.updateUBOMapping(x,T);const b=t.render.frame;r[x.id]!==b&&(d(x),r[x.id]=b)}function h(x){const v=u();x.__bindingPointIndex=v;const y=i.createBuffer(),T=x.__size,b=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,T,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=s[x.id],y=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,E=y.length;b<E;b++){const C=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,M=C.length;S<M;S++){const D=C[S];if(f(D,b,S,T)===!0){const L=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let P=0;for(let U=0;U<H.length;U++){const F=H[U],V=_(F);typeof F=="number"||typeof F=="boolean"?(D.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,L+P,D.__data)):F.isMatrix3?(D.__data[0]=F.elements[0],D.__data[1]=F.elements[1],D.__data[2]=F.elements[2],D.__data[3]=0,D.__data[4]=F.elements[3],D.__data[5]=F.elements[4],D.__data[6]=F.elements[5],D.__data[7]=0,D.__data[8]=F.elements[6],D.__data[9]=F.elements[7],D.__data[10]=F.elements[8],D.__data[11]=0):(F.toArray(D.__data,P),P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,v,y,T){const b=x.value,E=v+"_"+y;if(T[E]===void 0)return typeof b=="number"||typeof b=="boolean"?T[E]=b:T[E]=b.clone(),!0;{const C=T[E];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return T[E]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function g(x){const v=x.uniforms;let y=0;const T=16;for(let E=0,C=v.length;E<C;E++){const S=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,D=S.length;M<D;M++){const L=S[M],H=Array.isArray(L.value)?L.value:[L.value];for(let P=0,U=H.length;P<U;P++){const F=H[P],V=_(F),X=y%T;X!==0&&T-X<V.boundary&&(y+=T-X),L.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=V.storage}}}const b=y%T;return b>0&&(y+=T-b),x.__size=y,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){const v=x.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class ef{constructor(t={}){const{canvas:e=Nm(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this._useLegacyLights=!1,this.toneMapping=Ri,this.toneMappingExposure=1;const v=this;let y=!1,T=0,b=0,E=null,C=-1,S=null;const M=new pe,D=new pe;let L=null;const H=new kt(0);let P=0,U=e.width,F=e.height,V=1,X=null,W=null;const Y=new pe(0,0,U,F),J=new pe(0,0,U,F);let tt=!1;const Z=new Ml;let et=!1,nt=!1,dt=null;const ft=new he,ot=new ht,At=new I,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return E===null?V:1}let N=n;function ut(R,G){for(let $=0;$<R.length;$++){const K=R[$],j=e.getContext(K,G);if(j!==null)return j}return null}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${xl}`),e.addEventListener("webglcontextlost",pt,!1),e.addEventListener("webglcontextrestored",O,!1),e.addEventListener("webglcontextcreationerror",vt,!1),N===null){const G=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&G.shift(),N=ut(G,R),N===null)throw ut(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Q,q,z,_t,lt,A,w,k,it,st,rt,bt,gt,Mt,Pt,Bt,at,Zt,Yt,Ut,Et,Tt,zt,Jt;function xe(){Q=new Xv(N),q=new Vv(N,Q,t),Q.init(q),Tt=new Dx(N,Q,q),z=new Rx(N,Q,q),_t=new Zv(N),lt=new mx,A=new Px(N,Q,z,lt,q,Tt,_t),w=new Gv(v),k=new qv(v),it=new ig(N,q),zt=new kv(N,Q,it,q),st=new Yv(N,it,_t,zt),rt=new Qv(N,st,it,_t),Yt=new Kv(N,q,A),Bt=new zv(lt),bt=new px(v,w,k,Q,q,zt,Bt),gt=new Ox(v,lt),Mt=new _x,Pt=new Tx(Q,q),Zt=new Fv(v,w,k,z,rt,d,c),at=new Cx(v,rt,q),Jt=new Ux(N,_t,q,z),Ut=new Bv(N,Q,_t,q),Et=new jv(N,Q,_t,q),_t.programs=bt.programs,v.capabilities=q,v.extensions=Q,v.properties=lt,v.renderLists=Mt,v.shadowMap=at,v.state=z,v.info=_t}xe();const Wt=new Ix(v,N);this.xr=Wt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=Q.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Q.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(U,F,!1))},this.getSize=function(R){return R.set(U,F)},this.setSize=function(R,G,$=!0){if(Wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=R,F=G,e.width=Math.floor(R*V),e.height=Math.floor(G*V),$===!0&&(e.style.width=R+"px",e.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(U*V,F*V).floor()},this.setDrawingBufferSize=function(R,G,$){U=R,F=G,V=$,e.width=Math.floor(R*$),e.height=Math.floor(G*$),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(M)},this.getViewport=function(R){return R.copy(Y)},this.setViewport=function(R,G,$,K){R.isVector4?Y.set(R.x,R.y,R.z,R.w):Y.set(R,G,$,K),z.viewport(M.copy(Y).multiplyScalar(V).floor())},this.getScissor=function(R){return R.copy(J)},this.setScissor=function(R,G,$,K){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,G,$,K),z.scissor(D.copy(J).multiplyScalar(V).floor())},this.getScissorTest=function(){return tt},this.setScissorTest=function(R){z.setScissorTest(tt=R)},this.setOpaqueSort=function(R){X=R},this.setTransparentSort=function(R){W=R},this.getClearColor=function(R){return R.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor.apply(Zt,arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha.apply(Zt,arguments)},this.clear=function(R=!0,G=!0,$=!0){let K=0;if(R){let j=!1;if(E!==null){const yt=E.texture.format;j=yt===Dd||yt===Pd||yt===Rd}if(j){const yt=E.texture.type,wt=yt===Pi||yt===Ei||yt===yl||yt===Ji||yt===Ad||yt===Cd,Lt=Zt.getClearColor(),Ot=Zt.getClearAlpha(),Ht=Lt.r,Ft=Lt.g,Vt=Lt.b;wt?(f[0]=Ht,f[1]=Ft,f[2]=Vt,f[3]=Ot,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=Ht,g[1]=Ft,g[2]=Vt,g[3]=Ot,N.clearBufferiv(N.COLOR,0,g))}else K|=N.COLOR_BUFFER_BIT}G&&(K|=N.DEPTH_BUFFER_BIT),$&&(K|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pt,!1),e.removeEventListener("webglcontextrestored",O,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),Mt.dispose(),Pt.dispose(),lt.dispose(),w.dispose(),k.dispose(),rt.dispose(),zt.dispose(),Jt.dispose(),bt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",je),Wt.removeEventListener("sessionend",re),dt&&(dt.dispose(),dt=null),Ze.stop()};function pt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function O(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=_t.autoReset,G=at.enabled,$=at.autoUpdate,K=at.needsUpdate,j=at.type;xe(),_t.autoReset=R,at.enabled=G,at.autoUpdate=$,at.needsUpdate=K,at.type=j}function vt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function xt(R){const G=R.target;G.removeEventListener("dispose",xt),It(G)}function It(R){Dt(R),lt.remove(R)}function Dt(R){const G=lt.get(R).programs;G!==void 0&&(G.forEach(function($){bt.releaseProgram($)}),R.isShaderMaterial&&bt.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,$,K,j,yt){G===null&&(G=St);const wt=j.isMesh&&j.matrixWorld.determinant()<0,Lt=Cp(R,G,$,K,j);z.setMaterial(K,wt);let Ot=$.index,Ht=1;if(K.wireframe===!0){if(Ot=st.getWireframeAttribute($),Ot===void 0)return;Ht=2}const Ft=$.drawRange,Vt=$.attributes.position;let Me=Ft.start*Ht,cn=(Ft.start+Ft.count)*Ht;yt!==null&&(Me=Math.max(Me,yt.start*Ht),cn=Math.min(cn,(yt.start+yt.count)*Ht)),Ot!==null?(Me=Math.max(Me,0),cn=Math.min(cn,Ot.count)):Vt!=null&&(Me=Math.max(Me,0),cn=Math.min(cn,Vt.count));const Ne=cn-Me;if(Ne<0||Ne===1/0)return;zt.setup(j,K,Lt,$,Ot);let Kn,ge=Ut;if(Ot!==null&&(Kn=it.get(Ot),ge=Et,ge.setIndex(Kn)),j.isMesh)K.wireframe===!0?(z.setLineWidth(K.wireframeLinewidth*Ct()),ge.setMode(N.LINES)):ge.setMode(N.TRIANGLES);else if(j.isLine){let qt=K.linewidth;qt===void 0&&(qt=1),z.setLineWidth(qt*Ct()),j.isLineSegments?ge.setMode(N.LINES):j.isLineLoop?ge.setMode(N.LINE_LOOP):ge.setMode(N.LINE_STRIP)}else j.isPoints?ge.setMode(N.POINTS):j.isSprite&&ge.setMode(N.TRIANGLES);if(j.isBatchedMesh)ge.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)ge.renderInstances(Me,Ne,j.count);else if($.isInstancedBufferGeometry){const qt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,tc=Math.min($.instanceCount,qt);ge.renderInstances(Me,Ne,tc)}else ge.render(Me,Ne)};function ie(R,G,$){R.transparent===!0&&R.side===Wn&&R.forceSinglePass===!1?(R.side=en,R.needsUpdate=!0,ho(R,G,$),R.side=Li,R.needsUpdate=!0,ho(R,G,$),R.side=Wn):ho(R,G,$)}this.compile=function(R,G,$=null){$===null&&($=R),m=Pt.get($),m.init(),x.push(m),$.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),R!==$&&R.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(v._useLegacyLights);const K=new Set;return R.traverse(function(j){const yt=j.material;if(yt)if(Array.isArray(yt))for(let wt=0;wt<yt.length;wt++){const Lt=yt[wt];ie(Lt,$,j),K.add(Lt)}else ie(yt,$,j),K.add(yt)}),x.pop(),m=null,K},this.compileAsync=function(R,G,$=null){const K=this.compile(R,G,$);return new Promise(j=>{function yt(){if(K.forEach(function(wt){lt.get(wt).currentProgram.isReady()&&K.delete(wt)}),K.size===0){j(R);return}setTimeout(yt,10)}Q.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let se=null;function Le(R){se&&se(R)}function je(){Ze.stop()}function re(){Ze.start()}const Ze=new jd;Ze.setAnimationLoop(Le),typeof self<"u"&&Ze.setContext(self),this.setAnimationLoop=function(R){se=R,Wt.setAnimationLoop(R),R===null?Ze.stop():Ze.start()},Wt.addEventListener("sessionstart",je),Wt.addEventListener("sessionend",re),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(G),G=Wt.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,G,E),m=Pt.get(R,x.length),m.init(),x.push(m),ft.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Z.setFromProjectionMatrix(ft),nt=this.localClippingEnabled,et=Bt.init(this.clippingPlanes,nt),_=Mt.get(R,p.length),_.init(),p.push(_),zn(R,G,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(X,W),this.info.render.frame++,et===!0&&Bt.beginShadows();const $=m.state.shadowsArray;if(at.render($,R,G),et===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Zt.render(_,R),m.setupLights(v._useLegacyLights),G.isArrayCamera){const K=G.cameras;for(let j=0,yt=K.length;j<yt;j++){const wt=K[j];oh(_,R,wt,wt.viewport)}}else oh(_,R,G);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(v,R,G),zt.resetDefaultState(),C=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function zn(R,G,$,K){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){K&&At.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ft);const wt=rt.update(R),Lt=R.material;Lt.visible&&_.push(R,wt,Lt,$,At.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){const wt=rt.update(R),Lt=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),At.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),At.copy(wt.boundingSphere.center)),At.applyMatrix4(R.matrixWorld).applyMatrix4(ft)),Array.isArray(Lt)){const Ot=wt.groups;for(let Ht=0,Ft=Ot.length;Ht<Ft;Ht++){const Vt=Ot[Ht],Me=Lt[Vt.materialIndex];Me&&Me.visible&&_.push(R,wt,Me,$,At.z,Vt)}}else Lt.visible&&_.push(R,wt,Lt,$,At.z,null)}}const yt=R.children;for(let wt=0,Lt=yt.length;wt<Lt;wt++)zn(yt[wt],G,$,K)}function oh(R,G,$,K){const j=R.opaque,yt=R.transmissive,wt=R.transparent;m.setupLightsView($),et===!0&&Bt.setGlobalState(v.clippingPlanes,$),yt.length>0&&Ap(j,yt,G,$),K&&z.viewport(M.copy(K)),j.length>0&&lo(j,G,$),yt.length>0&&lo(yt,G,$),wt.length>0&&lo(wt,G,$),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function Ap(R,G,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const yt=q.isWebGL2;dt===null&&(dt=new In(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?ui:Pi,minFilter:Lr,samples:yt?4:0})),v.getDrawingBufferSize(ot),yt?dt.setSize(ot.x,ot.y):dt.setSize(nl(ot.x),nl(ot.y));const wt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(H),P=v.getClearAlpha(),P<1&&v.setClearColor(16777215,.5),v.clear();const Lt=v.toneMapping;v.toneMapping=Ri,lo(R,$,K),A.updateMultisampleRenderTarget(dt),A.updateRenderTargetMipmap(dt);let Ot=!1;for(let Ht=0,Ft=G.length;Ht<Ft;Ht++){const Vt=G[Ht],Me=Vt.object,cn=Vt.geometry,Ne=Vt.material,Kn=Vt.group;if(Ne.side===Wn&&Me.layers.test(K.layers)){const ge=Ne.side;Ne.side=en,Ne.needsUpdate=!0,ah(Me,$,K,cn,Ne,Kn),Ne.side=ge,Ne.needsUpdate=!0,Ot=!0}}Ot===!0&&(A.updateMultisampleRenderTarget(dt),A.updateRenderTargetMipmap(dt)),v.setRenderTarget(wt),v.setClearColor(H,P),v.toneMapping=Lt}function lo(R,G,$){const K=G.isScene===!0?G.overrideMaterial:null;for(let j=0,yt=R.length;j<yt;j++){const wt=R[j],Lt=wt.object,Ot=wt.geometry,Ht=K===null?wt.material:K,Ft=wt.group;Lt.layers.test($.layers)&&ah(Lt,G,$,Ot,Ht,Ft)}}function ah(R,G,$,K,j,yt){R.onBeforeRender(v,G,$,K,j,yt),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(v,G,$,K,R,yt),j.transparent===!0&&j.side===Wn&&j.forceSinglePass===!1?(j.side=en,j.needsUpdate=!0,v.renderBufferDirect($,G,K,j,R,yt),j.side=Li,j.needsUpdate=!0,v.renderBufferDirect($,G,K,j,R,yt),j.side=Wn):v.renderBufferDirect($,G,K,j,R,yt),R.onAfterRender(v,G,$,K,j,yt)}function ho(R,G,$){G.isScene!==!0&&(G=St);const K=lt.get(R),j=m.state.lights,yt=m.state.shadowsArray,wt=j.state.version,Lt=bt.getParameters(R,j.state,yt,G,$),Ot=bt.getProgramCacheKey(Lt);let Ht=K.programs;K.environment=R.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(R.isMeshStandardMaterial?k:w).get(R.envMap||K.environment),Ht===void 0&&(R.addEventListener("dispose",xt),Ht=new Map,K.programs=Ht);let Ft=Ht.get(Ot);if(Ft!==void 0){if(K.currentProgram===Ft&&K.lightsStateVersion===wt)return lh(R,Lt),Ft}else Lt.uniforms=bt.getUniforms(R),R.onBuild($,Lt,v),R.onBeforeCompile(Lt,v),Ft=bt.acquireProgram(Lt,Ot),Ht.set(Ot,Ft),K.uniforms=Lt.uniforms;const Vt=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Vt.clippingPlanes=Bt.uniform),lh(R,Lt),K.needsLights=Pp(R),K.lightsStateVersion=wt,K.needsLights&&(Vt.ambientLightColor.value=j.state.ambient,Vt.lightProbe.value=j.state.probe,Vt.directionalLights.value=j.state.directional,Vt.directionalLightShadows.value=j.state.directionalShadow,Vt.spotLights.value=j.state.spot,Vt.spotLightShadows.value=j.state.spotShadow,Vt.rectAreaLights.value=j.state.rectArea,Vt.ltc_1.value=j.state.rectAreaLTC1,Vt.ltc_2.value=j.state.rectAreaLTC2,Vt.pointLights.value=j.state.point,Vt.pointLightShadows.value=j.state.pointShadow,Vt.hemisphereLights.value=j.state.hemi,Vt.directionalShadowMap.value=j.state.directionalShadowMap,Vt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Vt.spotShadowMap.value=j.state.spotShadowMap,Vt.spotLightMatrix.value=j.state.spotLightMatrix,Vt.spotLightMap.value=j.state.spotLightMap,Vt.pointShadowMap.value=j.state.pointShadowMap,Vt.pointShadowMatrix.value=j.state.pointShadowMatrix),K.currentProgram=Ft,K.uniformsList=null,Ft}function ch(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=jo.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function lh(R,G){const $=lt.get(R);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function Cp(R,G,$,K,j){G.isScene!==!0&&(G=St),A.resetTextureUnits();const yt=G.fog,wt=K.isMeshStandardMaterial?G.environment:null,Lt=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:fi,Ot=(K.isMeshStandardMaterial?k:w).get(K.envMap||wt),Ht=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ft=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Vt=!!$.morphAttributes.position,Me=!!$.morphAttributes.normal,cn=!!$.morphAttributes.color;let Ne=Ri;K.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ne=v.toneMapping);const Kn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ge=Kn!==void 0?Kn.length:0,qt=lt.get(K),tc=m.state.lights;if(et===!0&&(nt===!0||R!==S)){const gn=R===S&&K.id===C;Bt.setState(K,R,gn)}let ye=!1;K.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==tc.state.version||qt.outputColorSpace!==Lt||j.isBatchedMesh&&qt.batching===!1||!j.isBatchedMesh&&qt.batching===!0||j.isInstancedMesh&&qt.instancing===!1||!j.isInstancedMesh&&qt.instancing===!0||j.isSkinnedMesh&&qt.skinning===!1||!j.isSkinnedMesh&&qt.skinning===!0||j.isInstancedMesh&&qt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qt.instancingColor===!1&&j.instanceColor!==null||qt.envMap!==Ot||K.fog===!0&&qt.fog!==yt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==Bt.numPlanes||qt.numIntersection!==Bt.numIntersection)||qt.vertexAlphas!==Ht||qt.vertexTangents!==Ft||qt.morphTargets!==Vt||qt.morphNormals!==Me||qt.morphColors!==cn||qt.toneMapping!==Ne||q.isWebGL2===!0&&qt.morphTargetsCount!==ge)&&(ye=!0):(ye=!0,qt.__version=K.version);let ki=qt.currentProgram;ye===!0&&(ki=ho(K,G,j));let hh=!1,fr=!1,ec=!1;const Ve=ki.getUniforms(),Bi=qt.uniforms;if(z.useProgram(ki.program)&&(hh=!0,fr=!0,ec=!0),K.id!==C&&(C=K.id,fr=!0),hh||S!==R){Ve.setValue(N,"projectionMatrix",R.projectionMatrix),Ve.setValue(N,"viewMatrix",R.matrixWorldInverse);const gn=Ve.map.cameraPosition;gn!==void 0&&gn.setValue(N,At.setFromMatrixPosition(R.matrixWorld)),q.logarithmicDepthBuffer&&Ve.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ve.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,fr=!0,ec=!0)}if(j.isSkinnedMesh){Ve.setOptional(N,j,"bindMatrix"),Ve.setOptional(N,j,"bindMatrixInverse");const gn=j.skeleton;gn&&(q.floatVertexTextures?(gn.boneTexture===null&&gn.computeBoneTexture(),Ve.setValue(N,"boneTexture",gn.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Ve.setOptional(N,j,"batchingTexture"),Ve.setValue(N,"batchingTexture",j._matricesTexture,A));const nc=$.morphAttributes;if((nc.position!==void 0||nc.normal!==void 0||nc.color!==void 0&&q.isWebGL2===!0)&&Yt.update(j,$,ki),(fr||qt.receiveShadow!==j.receiveShadow)&&(qt.receiveShadow=j.receiveShadow,Ve.setValue(N,"receiveShadow",j.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Bi.envMap.value=Ot,Bi.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),fr&&(Ve.setValue(N,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&Rp(Bi,ec),yt&&K.fog===!0&&gt.refreshFogUniforms(Bi,yt),gt.refreshMaterialUniforms(Bi,K,V,F,dt),jo.upload(N,ch(qt),Bi,A)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(jo.upload(N,ch(qt),Bi,A),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ve.setValue(N,"center",j.center),Ve.setValue(N,"modelViewMatrix",j.modelViewMatrix),Ve.setValue(N,"normalMatrix",j.normalMatrix),Ve.setValue(N,"modelMatrix",j.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const gn=K.uniformsGroups;for(let ic=0,Dp=gn.length;ic<Dp;ic++)if(q.isWebGL2){const uh=gn[ic];Jt.update(uh,ki),Jt.bind(uh,ki)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ki}function Rp(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Pp(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,G,$){lt.get(R.texture).__webglTexture=G,lt.get(R.depthTexture).__webglTexture=$;const K=lt.get(R);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,G){const $=lt.get(R);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,$=0){E=R,T=G,b=$;let K=!0,j=null,yt=!1,wt=!1;if(R){const Ot=lt.get(R);Ot.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer(N.FRAMEBUFFER,null),K=!1):Ot.__webglFramebuffer===void 0?A.setupRenderTarget(R):Ot.__hasExternalTextures&&A.rebindTextures(R,lt.get(R.texture).__webglTexture,lt.get(R.depthTexture).__webglTexture);const Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(wt=!0);const Ft=lt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ft[G])?j=Ft[G][$]:j=Ft[G],yt=!0):q.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?j=lt.get(R).__webglMultisampledFramebuffer:Array.isArray(Ft)?j=Ft[$]:j=Ft,M.copy(R.viewport),D.copy(R.scissor),L=R.scissorTest}else M.copy(Y).multiplyScalar(V).floor(),D.copy(J).multiplyScalar(V).floor(),L=tt;if(z.bindFramebuffer(N.FRAMEBUFFER,j)&&q.drawBuffers&&K&&z.drawBuffers(R,j),z.viewport(M),z.scissor(D),z.setScissorTest(L),yt){const Ot=lt.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ot.__webglTexture,$)}else if(wt){const Ot=lt.get(R.texture),Ht=G||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ot.__webglTexture,$||0,Ht)}C=-1},this.readRenderTargetPixels=function(R,G,$,K,j,yt,wt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Lt=Lt[wt]),Lt){z.bindFramebuffer(N.FRAMEBUFFER,Lt);try{const Ot=R.texture,Ht=Ot.format,Ft=Ot.type;if(Ht!==Dn&&Tt.convert(Ht)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Vt=Ft===ui&&(Q.has("EXT_color_buffer_half_float")||q.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Ft!==Pi&&Tt.convert(Ft)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ft===Ai&&(q.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-K&&$>=0&&$<=R.height-j&&N.readPixels(G,$,K,j,Tt.convert(Ht),Tt.convert(Ft),yt)}finally{const Ot=E!==null?lt.get(E).__webglFramebuffer:null;z.bindFramebuffer(N.FRAMEBUFFER,Ot)}}},this.copyFramebufferToTexture=function(R,G,$=0){const K=Math.pow(2,-$),j=Math.floor(G.image.width*K),yt=Math.floor(G.image.height*K);A.setTexture2D(G,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,R.x,R.y,j,yt),z.unbindTexture()},this.copyTextureToTexture=function(R,G,$,K=0){const j=G.image.width,yt=G.image.height,wt=Tt.convert($.format),Lt=Tt.convert($.type);A.setTexture2D($,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,$.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,$.unpackAlignment),G.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,K,R.x,R.y,j,yt,wt,Lt,G.image.data):G.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,K,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,wt,G.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,K,R.x,R.y,wt,Lt,G.image),K===0&&$.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(R,G,$,K,j=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=R.max.x-R.min.x+1,wt=R.max.y-R.min.y+1,Lt=R.max.z-R.min.z+1,Ot=Tt.convert(K.format),Ht=Tt.convert(K.type);let Ft;if(K.isData3DTexture)A.setTexture3D(K,0),Ft=N.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)A.setTexture2DArray(K,0),Ft=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,K.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,K.unpackAlignment);const Vt=N.getParameter(N.UNPACK_ROW_LENGTH),Me=N.getParameter(N.UNPACK_IMAGE_HEIGHT),cn=N.getParameter(N.UNPACK_SKIP_PIXELS),Ne=N.getParameter(N.UNPACK_SKIP_ROWS),Kn=N.getParameter(N.UNPACK_SKIP_IMAGES),ge=$.isCompressedTexture?$.mipmaps[j]:$.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ge.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ge.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,R.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,R.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,R.min.z),$.isDataTexture||$.isData3DTexture?N.texSubImage3D(Ft,j,G.x,G.y,G.z,yt,wt,Lt,Ot,Ht,ge.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Ft,j,G.x,G.y,G.z,yt,wt,Lt,Ot,ge.data)):N.texSubImage3D(Ft,j,G.x,G.y,G.z,yt,wt,Lt,Ot,Ht,ge),N.pixelStorei(N.UNPACK_ROW_LENGTH,Vt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Me),N.pixelStorei(N.UNPACK_SKIP_PIXELS,cn),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ne),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Kn),j===0&&K.generateMipmaps&&N.generateMipmap(Ft),z.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),z.unbindTexture()},this.resetState=function(){T=0,b=0,E=null,z.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Sl?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Ia?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ke?Qi:Nd}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Qi?ke:fi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Fx extends ef{}Fx.prototype.isWebGL1Renderer=!0;class El{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new kt(t),this.near=e,this.far=n}clone(){return new El(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kx extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Du extends Mn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Is=new he,Lu=new he,Io=[],Nu=new ps,Bx=new he,xr=new Oe,yr=new sr;class Uc extends Oe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Du(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Bx)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ps),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),Nu.copy(t.boundingBox).applyMatrix4(Is),this.boundingBox.union(Nu)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new sr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Is),yr.copy(t.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,s=this.count;if(xr.geometry=this.geometry,xr.material=this.material,xr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),t.ray.intersectsSphere(yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Is),Lu.multiplyMatrices(n,Is),xr.matrixWorld=Lu,xr.raycast(t,Io);for(let o=0,a=Io.length;o<a;o++){const c=Io[o];c.instanceId=r,c.object=this,e.push(c)}Io.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Du(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class nf extends rr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Iu=new he,sl=new Vd,Oo=new sr,Uo=new I;class Vx extends Ce{constructor(t=new Xe,e=new nf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Oo.copy(n.boundingSphere),Oo.applyMatrix4(s),Oo.radius+=r,t.ray.intersectsSphere(Oo)===!1)return;Iu.copy(s).invert(),sl.copy(t.ray).applyMatrix4(Iu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Uo.fromBufferAttribute(u,m),Ou(Uo,m,c,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Uo.fromBufferAttribute(u,g),Ou(Uo,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ou(i,t,e,n,s,r,o){const a=sl.distanceSqToPoint(i);if(a<e){const c=new I;sl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,object:o})}}class jn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new ht:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],o=[],a=new I,c=new he;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(He(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(He(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Al extends jn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new ht,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class zx extends Al{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Cl(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Fo=new I,Fc=new Cl,kc=new Cl,Bc=new Cl;class Gx extends jn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Fo.subVectors(s[0],s[1]).add(s[0]),l=Fo);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Fc.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),kc.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),Bc.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Fc.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),kc.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Bc.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Fc.calc(c),kc.calc(c),Bc.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Uu(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Hx(i,t){const e=1-i;return e*e*t}function Wx(i,t){return 2*(1-i)*i*t}function qx(i,t){return i*i*t}function Ar(i,t,e,n){return Hx(i,t)+Wx(i,e)+qx(i,n)}function Xx(i,t){const e=1-i;return e*e*e*t}function Yx(i,t){const e=1-i;return 3*e*e*i*t}function jx(i,t){return 3*(1-i)*i*i*t}function Zx(i,t){return i*i*i*t}function Cr(i,t,e,n,s){return Xx(i,t)+Yx(i,e)+jx(i,n)+Zx(i,s)}class sf extends jn{constructor(t=new ht,e=new ht,n=new ht,s=new ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(t,s.x,r.x,o.x,a.x),Cr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $x extends jn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cr(t,s.x,r.x,o.x,a.x),Cr(t,s.y,r.y,o.y,a.y),Cr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rf extends jn{constructor(t=new ht,e=new ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ht){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ht){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jx extends jn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class of extends jn{constructor(t=new ht,e=new ht,n=new ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ht){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ar(t,s.x,r.x,o.x),Ar(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kx extends jn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ar(t,s.x,r.x,o.x),Ar(t,s.y,r.y,o.y),Ar(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class af extends jn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ht){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Uu(a,c.x,l.x,h.x,u.x),Uu(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ht().fromArray(s))}return this}}var rl=Object.freeze({__proto__:null,ArcCurve:zx,CatmullRomCurve3:Gx,CubicBezierCurve:sf,CubicBezierCurve3:$x,EllipseCurve:Al,LineCurve:rf,LineCurve3:Jx,QuadraticBezierCurve:of,QuadraticBezierCurve3:Kx,SplineCurve:af});class Qx extends jn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new rl[s.type]().fromJSON(s))}return this}}class Fu extends Qx{constructor(t){super(),this.type="Path",this.currentPoint=new ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new rf(this.currentPoint.clone(),new ht(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new of(this.currentPoint.clone(),new ht(t,e),new ht(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new sf(this.currentPoint.clone(),new ht(t,e),new ht(n,s),new ht(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new af(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Al(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Rl extends Xe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ae(u,3)),this.setAttribute("normal",new ae(d,3)),this.setAttribute("uv",new ae(f,2));function x(){const y=new I,T=new I;let b=0;const E=(e-t)/n;for(let C=0;C<=r;C++){const S=[],M=C/r,D=M*(e-t)+t;for(let L=0;L<=s;L++){const H=L/s,P=H*c+a,U=Math.sin(P),F=Math.cos(P);T.x=D*U,T.y=-M*n+m,T.z=D*F,u.push(T.x,T.y,T.z),y.set(U,E,F).normalize(),d.push(y.x,y.y,y.z),f.push(H,1-M),S.push(g++)}_.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){const M=_[S][C],D=_[S+1][C],L=_[S+1][C+1],H=_[S][C+1];h.push(M,D,H),h.push(D,L,H),b+=6}l.addGroup(p,b,0),p+=b}function v(y){const T=g,b=new ht,E=new I;let C=0;const S=y===!0?t:e,M=y===!0?1:-1;for(let L=1;L<=s;L++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const D=g;for(let L=0;L<=s;L++){const P=L/s*c+a,U=Math.cos(P),F=Math.sin(P);E.x=S*F,E.y=m*M,E.z=S*U,u.push(E.x,E.y,E.z),d.push(0,M,0),b.x=U*.5+.5,b.y=F*.5*M+.5,f.push(b.x,b.y),g++}for(let L=0;L<s;L++){const H=T+L,P=D+L;y===!0?h.push(P,P+1,H):h.push(P+1,P,H),C+=3}l.addGroup(p,C,y===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pl extends Rl{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Pl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fa extends Xe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const v=new I,y=new I,T=new I;for(let b=0;b<e.length;b+=3)f(e[b+0],v),f(e[b+1],y),f(e[b+2],T),c(v,y,T,x)}function c(x,v,y,T){const b=T+1,E=[];for(let C=0;C<=b;C++){E[C]=[];const S=x.clone().lerp(y,C/b),M=v.clone().lerp(y,C/b),D=b-C;for(let L=0;L<=D;L++)L===0&&C===b?E[C][L]=S:E[C][L]=S.clone().lerp(M,L/D)}for(let C=0;C<b;C++)for(let S=0;S<2*(b-C)-1;S++){const M=Math.floor(S/2);S%2===0?(d(E[C][M+1]),d(E[C+1][M]),d(E[C][M])):(d(E[C][M+1]),d(E[C+1][M+1]),d(E[C+1][M]))}}function l(x){const v=new I;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(x),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){const x=new I;for(let v=0;v<r.length;v+=3){x.x=r[v+0],x.y=r[v+1],x.z=r[v+2];const y=m(x)/2/Math.PI+.5,T=p(x)/Math.PI+.5;o.push(y,1-T)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const v=o[x+0],y=o[x+2],T=o[x+4],b=Math.max(v,y,T),E=Math.min(v,y,T);b>.9&&E<.1&&(v<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),T<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,v){const y=x*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const x=new I,v=new I,y=new I,T=new I,b=new ht,E=new ht,C=new ht;for(let S=0,M=0;S<r.length;S+=9,M+=6){x.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),b.set(o[M+0],o[M+1]),E.set(o[M+2],o[M+3]),C.set(o[M+4],o[M+5]),T.copy(x).add(v).add(y).divideScalar(3);const D=m(T);_(b,M+0,x,D),_(E,M+2,v,D),_(C,M+4,y,D)}}function _(x,v,y,T){T<0&&x.x===1&&(o[v]=x.x-1),y.x===0&&y.z===0&&(o[v]=T/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.vertices,t.indices,t.radius,t.details)}}class cf extends Fu{constructor(t){super(t),this.uuid=ir(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Fu().fromJSON(s))}return this}}const ty={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=lf(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=ry(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Nr(r,o,e,a,c,f,0),o}};function lf(i,t,e,n,s){let r,o;if(s===gy(i,t,e,n)>0)for(r=t;r<e;r+=n)o=ku(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=ku(r,i[r],i[r+1],o);return o&&ka(o,o.next)&&(Or(o),o=o.next),o}function rs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ka(e,e.next)||ve(e.prev,e,e.next)===0)){if(Or(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Nr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&hy(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?ny(i,n,s,r):ey(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Or(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=iy(rs(i),t,e),Nr(i,t,e,n,s,r,2)):o===2&&sy(i,t,e,n,s,r):Nr(rs(i),t,e,n,s,r,1);break}}}function ey(i){const t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Vs(s,a,r,c,o,l,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ny(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ve(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=ol(f,g,t,e,n),x=ol(_,m,t,e,n);let v=i.prevZ,y=i.nextZ;for(;v&&v.z>=p&&y&&y.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Vs(a,h,c,u,l,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Vs(a,h,c,u,l,d,y.x,y.y)&&ve(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Vs(a,h,c,u,l,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Vs(a,h,c,u,l,d,y.x,y.y)&&ve(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function iy(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!ka(s,r)&&hf(s,n,n.next,r)&&Ir(s,r)&&Ir(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Or(n),Or(n.next),n=i=r),n=n.next}while(n!==i);return rs(n)}function sy(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fy(o,a)){let c=uf(o,a);o=rs(o,o.next),c=rs(c,c.next),Nr(o,t,e,n,s,r,0),Nr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function ry(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=lf(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(dy(l));for(s.sort(oy),r=0;r<s.length;r++)e=ay(s[r],e);return e}function oy(i,t){return i.x-t.x}function ay(i,t){const e=cy(i,t);if(!e)return t;const n=uf(e,i);return rs(n,n.next),rs(e,e.next)}function cy(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Vs(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ir(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&ly(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function ly(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function hy(i,t,e,n){let s=i;do s.z===0&&(s.z=ol(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,uy(s)}function uy(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function ol(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function dy(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Vs(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function fy(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!py(i,t)&&(Ir(i,t)&&Ir(t,i)&&my(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||ka(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ka(i,t){return i.x===t.x&&i.y===t.y}function hf(i,t,e,n){const s=Bo(ve(i,t,e)),r=Bo(ve(i,t,n)),o=Bo(ve(e,n,i)),a=Bo(ve(e,n,t));return!!(s!==r&&o!==a||s===0&&ko(i,e,t)||r===0&&ko(i,n,t)||o===0&&ko(e,i,n)||a===0&&ko(e,t,n))}function ko(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Bo(i){return i>0?1:i<0?-1:0}function py(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&hf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ir(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function my(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function uf(i,t){const e=new al(i.i,i.x,i.y),n=new al(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ku(i,t,e,n){const s=new al(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Or(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function al(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gy(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Rr{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Rr.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Bu(t),Vu(n,t);let o=t.length;e.forEach(Bu);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Vu(n,e[c]);const a=ty.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Bu(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Vu(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Dl extends Xe{constructor(t=new cf([new ht(.5,.5),new ht(-.5,.5),new ht(-.5,-.5),new ht(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:_y;let v,y=!1,T,b,E,C;p&&(v=p.getSpacedPoints(h),y=!0,d=!1,T=p.computeFrenetFrames(h,!1),b=new I,E=new I,C=new I),d||(m=0,f=0,g=0,_=0);const S=a.extractPoints(l);let M=S.shape;const D=S.holes;if(!Rr.isClockWise(M)){M=M.reverse();for(let N=0,ut=D.length;N<ut;N++){const Q=D[N];Rr.isClockWise(Q)&&(D[N]=Q.reverse())}}const H=Rr.triangulateShape(M,D),P=M;for(let N=0,ut=D.length;N<ut;N++){const Q=D[N];M=M.concat(Q)}function U(N,ut,Q){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(ut,Q)}const F=M.length,V=H.length;function X(N,ut,Q){let q,z,_t;const lt=N.x-ut.x,A=N.y-ut.y,w=Q.x-N.x,k=Q.y-N.y,it=lt*lt+A*A,st=lt*k-A*w;if(Math.abs(st)>Number.EPSILON){const rt=Math.sqrt(it),bt=Math.sqrt(w*w+k*k),gt=ut.x-A/rt,Mt=ut.y+lt/rt,Pt=Q.x-k/bt,Bt=Q.y+w/bt,at=((Pt-gt)*k-(Bt-Mt)*w)/(lt*k-A*w);q=gt+lt*at-N.x,z=Mt+A*at-N.y;const Zt=q*q+z*z;if(Zt<=2)return new ht(q,z);_t=Math.sqrt(Zt/2)}else{let rt=!1;lt>Number.EPSILON?w>Number.EPSILON&&(rt=!0):lt<-Number.EPSILON?w<-Number.EPSILON&&(rt=!0):Math.sign(A)===Math.sign(k)&&(rt=!0),rt?(q=-A,z=lt,_t=Math.sqrt(it)):(q=lt,z=A,_t=Math.sqrt(it/2))}return new ht(q/_t,z/_t)}const W=[];for(let N=0,ut=P.length,Q=ut-1,q=N+1;N<ut;N++,Q++,q++)Q===ut&&(Q=0),q===ut&&(q=0),W[N]=X(P[N],P[Q],P[q]);const Y=[];let J,tt=W.concat();for(let N=0,ut=D.length;N<ut;N++){const Q=D[N];J=[];for(let q=0,z=Q.length,_t=z-1,lt=q+1;q<z;q++,_t++,lt++)_t===z&&(_t=0),lt===z&&(lt=0),J[q]=X(Q[q],Q[_t],Q[lt]);Y.push(J),tt=tt.concat(J)}for(let N=0;N<m;N++){const ut=N/m,Q=f*Math.cos(ut*Math.PI/2),q=g*Math.sin(ut*Math.PI/2)+_;for(let z=0,_t=P.length;z<_t;z++){const lt=U(P[z],W[z],q);ft(lt.x,lt.y,-Q)}for(let z=0,_t=D.length;z<_t;z++){const lt=D[z];J=Y[z];for(let A=0,w=lt.length;A<w;A++){const k=U(lt[A],J[A],q);ft(k.x,k.y,-Q)}}}const Z=g+_;for(let N=0;N<F;N++){const ut=d?U(M[N],tt[N],Z):M[N];y?(E.copy(T.normals[0]).multiplyScalar(ut.x),b.copy(T.binormals[0]).multiplyScalar(ut.y),C.copy(v[0]).add(E).add(b),ft(C.x,C.y,C.z)):ft(ut.x,ut.y,0)}for(let N=1;N<=h;N++)for(let ut=0;ut<F;ut++){const Q=d?U(M[ut],tt[ut],Z):M[ut];y?(E.copy(T.normals[N]).multiplyScalar(Q.x),b.copy(T.binormals[N]).multiplyScalar(Q.y),C.copy(v[N]).add(E).add(b),ft(C.x,C.y,C.z)):ft(Q.x,Q.y,u/h*N)}for(let N=m-1;N>=0;N--){const ut=N/m,Q=f*Math.cos(ut*Math.PI/2),q=g*Math.sin(ut*Math.PI/2)+_;for(let z=0,_t=P.length;z<_t;z++){const lt=U(P[z],W[z],q);ft(lt.x,lt.y,u+Q)}for(let z=0,_t=D.length;z<_t;z++){const lt=D[z];J=Y[z];for(let A=0,w=lt.length;A<w;A++){const k=U(lt[A],J[A],q);y?ft(k.x,k.y+v[h-1].y,v[h-1].x+Q):ft(k.x,k.y,u+Q)}}}et(),nt();function et(){const N=s.length/3;if(d){let ut=0,Q=F*ut;for(let q=0;q<V;q++){const z=H[q];ot(z[2]+Q,z[1]+Q,z[0]+Q)}ut=h+m*2,Q=F*ut;for(let q=0;q<V;q++){const z=H[q];ot(z[0]+Q,z[1]+Q,z[2]+Q)}}else{for(let ut=0;ut<V;ut++){const Q=H[ut];ot(Q[2],Q[1],Q[0])}for(let ut=0;ut<V;ut++){const Q=H[ut];ot(Q[0]+F*h,Q[1]+F*h,Q[2]+F*h)}}n.addGroup(N,s.length/3-N,0)}function nt(){const N=s.length/3;let ut=0;dt(P,ut),ut+=P.length;for(let Q=0,q=D.length;Q<q;Q++){const z=D[Q];dt(z,ut),ut+=z.length}n.addGroup(N,s.length/3-N,1)}function dt(N,ut){let Q=N.length;for(;--Q>=0;){const q=Q;let z=Q-1;z<0&&(z=N.length-1);for(let _t=0,lt=h+m*2;_t<lt;_t++){const A=F*_t,w=F*(_t+1),k=ut+q+A,it=ut+z+A,st=ut+z+w,rt=ut+q+w;At(k,it,st,rt)}}}function ft(N,ut,Q){c.push(N),c.push(ut),c.push(Q)}function ot(N,ut,Q){St(N),St(ut),St(Q);const q=s.length/3,z=x.generateTopUV(n,s,q-3,q-2,q-1);Ct(z[0]),Ct(z[1]),Ct(z[2])}function At(N,ut,Q,q){St(N),St(ut),St(q),St(ut),St(Q),St(q);const z=s.length/3,_t=x.generateSideWallUV(n,s,z-6,z-3,z-2,z-1);Ct(_t[0]),Ct(_t[1]),Ct(_t[3]),Ct(_t[1]),Ct(_t[2]),Ct(_t[3])}function St(N){s.push(c[N*3+0]),s.push(c[N*3+1]),s.push(c[N*3+2])}function Ct(N){r.push(N.x),r.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vy(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new rl[s.type]().fromJSON(s)),new Dl(n,t.options)}}const _y={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new ht(r,o),new ht(a,c),new ht(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new ht(o,1-c),new ht(l,1-u),new ht(d,1-g),new ht(_,1-p)]:[new ht(a,1-c),new ht(h,1-u),new ht(f,1-g),new ht(m,1-p)]}};function vy(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class sa extends Fa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new sa(t.radius,t.detail)}}class Ll extends Fa{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ll(t.radius,t.detail)}}class Nl extends Xe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new I,g=new ht;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const x=p+m,v=x,y=x+n+1,T=x+n+2,b=x+1;a.push(v,y,b),a.push(y,T,b)}}this.setIndex(a),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nl(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ba extends Xe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],v=p/n;let y=0;p===0&&o===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){const b=T/e;u.x=-t*Math.cos(s+b*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+b*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(b+y,1-v),x.push(l++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const v=h[p][x+1],y=h[p][x],T=h[p+1][x],b=h[p+1][x+1];(p!==0||o>0)&&f.push(v,y,b),(p!==n-1||c<Math.PI)&&f.push(y,T,b)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(_,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Il extends Xe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Il(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ts extends rr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Id,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Va extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class xy extends Va{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Vc=new he,zu=new I,Gu=new I;class df{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ml,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;zu.setFromMatrixPosition(t.matrixWorld),e.position.copy(zu),Gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gu),e.updateMatrixWorld(),Vc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Vc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Hu=new he,Sr=new I,zc=new I;class yy extends df{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ht(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Sr),zc.copy(n.position),zc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(zc),n.updateMatrixWorld(),s.makeTranslation(-Sr.x,-Sr.y,-Sr.z),Hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hu)}}class Sy extends Va{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new yy}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class My extends df{constructor(){super(new bl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wu extends Va{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new My}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ty extends Va{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let by=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=qu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function qu(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xl);const We={towerLight:2236968,maple:16732067,lethal:16724821,bone:15262938},Ti=[3003583,3718648,8490232,4906624,16486972,16765503,12616956],cl=[{id:"default",name:"霓虹粉",cost:0,color:16732067,emissive:16732067,trail:16732067},{id:"mint",name:"薄荷",cost:8,color:3003583,emissive:3003583,trail:6220500},{id:"sky",name:"晴空",cost:12,color:3718648,emissive:959977,trail:8246268},{id:"gold",name:"鎏金",cost:18,color:16765503,emissive:16758528,trail:16770688},{id:"violet",name:"电光紫",cost:24,color:12616956,emissive:11032055,trail:14202110},{id:"lime",name:"青柠",cost:30,color:4906624,emissive:2278750,trail:8843180}];function Mr(i){return cl.find(t=>t.id===i)??cl[0]}const wy={textPrimary:"#EDEDED"},oe={radiusInner:.85,radiusOuter:2.2,ringHeight:.42,ringGap:2.85,sectorCount:16,visibleRings:14,recycleAbove:3.5},Je={radius:.34,orbitRadius:1.5,orbitAngle:Math.PI/2,gravity:-34,bounceSpeed:11,maxFallSpeed:-26},ff={dragSensitivity:.011,ease:14},si={shatterThreshold:3,baseScorePerRing:10,multiplierStep:.5,multiplierMax:9,smashBonus:15,bonusRingScore:50,brittleScore:6,shatterSmashBudget:5},br={fallScaleStart:1,fallScaleEnd:1.6,fallScaleDepth:180,gapCountStart:4,gapCountMin:1,narrowGapStartDepth:90,narrowGapDepth:120,lethalStartDepth:48,lethalRatioStart:.02,lethalRatioEnd:.26,lethalRatioDepth:170,rotatingStartDepth:18,rotatingChanceStart:0,rotatingChanceEnd:.3,rotatingChanceDepth:80,rotatingSpeed:.6,brittleStartDepth:130,brittleChance:.18,movingLethalStartDepth:180,bonusRingEvery:11,warmupRings:6},Hn={fov:58,followLag:6,yOffset:4,zDistance:5.9,rollAmount:.05},Vo={dt:1/120,maxSubSteps:6};class Ey{constructor(t){B(this,"scene",new kx);B(this,"camera");B(this,"renderer");B(this,"backdrop");B(this,"ro");B(this,"onResize");this.renderer=new ef({canvas:t,antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(8019920,1),this.renderer.toneMapping=bd,this.renderer.toneMappingExposure=1.15,this.scene.background=new kt(8019920),this.scene.fog=new El(10118102,18,48),this.camera=new dn(Hn.fov,window.innerWidth/window.innerHeight,.1,100),this.camera.position.set(0,Hn.yOffset,Hn.zDistance),this.camera.lookAt(0,0,0),this.backdrop=this.makeBackdrop(),this.scene.add(this.backdrop),this.addLights(),this.resize(),typeof ResizeObserver<"u"&&(this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(t))}addLights(){const t=new Wu(16777215,3);t.position.set(3,8,7),this.scene.add(t);const e=new Wu(13227263,1.2);e.position.set(-3,2,8),this.scene.add(e);const n=new xy(12375807,15182048,1.1);this.scene.add(n),this.scene.add(new Ty(5921390,.8))}makeBackdrop(){const t=new kt(5211888),e=new kt(12605144),n=new on({side:en,depthWrite:!1,fog:!1,uniforms:{top:{value:t},bottom:{value:e}},vertexShader:`
        varying vec3 vDir;
        void main() {
          vDir = normalize(position);
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * mv;
        }
      `,fragmentShader:`
        uniform vec3 top;
        uniform vec3 bottom;
        varying vec3 vDir;
        void main() {
          float t = smoothstep(-0.6, 0.6, vDir.y);
          float r = 1.0 - smoothstep(0.0, 1.0, length(vDir.xz));
          vec3 col = mix(bottom, top, t);
          col += r * 0.015;
          gl_FragColor = vec4(col, 1.0);
        }
      `}),s=new Oe(new Ba(40,32,16),n);return s.frustumCulled=!1,s}syncBackdrop(){this.backdrop.position.copy(this.camera.position)}resize(){const t=window.innerWidth||1,e=window.innerHeight||1;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!0),this.onResize?.(t,e)}}const pf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Kr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Ay=new bl(-1,1,1,-1,0,1);class Cy extends Xe{constructor(){super(),this.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ae([0,2,0,0,2,0],2))}}const Ry=new Cy;class mf{constructor(t){this._mesh=new Oe(Ry,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Ay)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class gf extends Kr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof on?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ia.clone(t.uniforms),this.material=new on({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new mf(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xu extends Kr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Py extends Kr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Dy{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ht);this._width=n.width,this._height=n.height,e=new In(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ui}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new gf(pf),this.copyPass.material.blending=hi,this.clock=new by}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xu!==void 0&&(o instanceof Xu?n=!0:o instanceof Py&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ly extends Kr{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new kt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Ny={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new kt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class js extends Kr{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ht(t.x,t.y):new ht(256,256),this.clearColor=new kt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new In(r,o,{type:ui}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new In(r,o,{type:ui});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new In(r,o,{type:ui});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}const a=Ny;this.highPassUniforms=ia.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new ht(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=pf;this.copyUniforms=ia.clone(h.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Dr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new kt,this.oldClearAlpha=1,this.basic=new Jr,this.fsQuad=new mf(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ht(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=js.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=js.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new on({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new on({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}js.BlurDirectionX=new ht(1,0);js.BlurDirectionY=new ht(0,1);const Iy={uniforms:{tDiffuse:{value:null},uTime:{value:0},uRes:{value:new ht(1,1)},uVignette:{value:.28},uVignettePunch:{value:0},uChromatic:{value:0},uGrain:{value:.02},uDesat:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform vec2 uRes;
    uniform float uVignette;
    uniform float uVignettePunch;
    uniform float uChromatic;
    uniform float uGrain;
    uniform float uDesat;
    varying vec2 vUv;

    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv;
      vec2 toC = uv - 0.5;
      float r2 = dot(toC, toC);

      // chromatic aberration: offset channels radially (transient)
      vec3 col;
      if (uChromatic > 0.0001) {
        vec2 off = toC * uChromatic;
        col.r = texture2D(tDiffuse, uv + off).r;
        col.g = texture2D(tDiffuse, uv).g;
        col.b = texture2D(tDiffuse, uv - off).b;
      } else {
        col = texture2D(tDiffuse, uv).rgb;
      }

      // vignette (base + punch)
      float vig = 1.0 - smoothstep(0.35, 0.95, r2 * (uVignette + uVignettePunch));
      col *= mix(1.0, vig, 0.9);

      // desaturate (death flash)
      if (uDesat > 0.0001) {
        float l = dot(col, vec3(0.299, 0.587, 0.114));
        col = mix(col, vec3(l), uDesat);
      }

      // grain (barely-there底噪)
      float g = hash(uv * uRes + uTime) - 0.5;
      col += g * uGrain;

      // linear (tone-mapped) -> sRGB output encoding. The EffectComposer renders
      // to a linear target and this custom pass is the last one, so we must do
      // the output conversion here (otherwise the whole image shows up dark).
      col = clamp(col, 0.0, 1.0);
      col = mix(col * 12.92, 1.055 * pow(col, vec3(0.4166667)) - 0.055, step(0.0031308, col));

      gl_FragColor = vec4(col, 1.0);
    }
  `};class Oy{constructor(t,e,n){B(this,"composer");B(this,"bloom");B(this,"final");B(this,"time",0);this.composer=new Dy(t),this.composer.addPass(new Ly(e,n));const s=t.getSize(new ht);this.bloom=new js(s,.55,.7,.85),this.composer.addPass(this.bloom),this.final=new gf(Iy),this.final.uniforms.uRes.value.copy(s),this.composer.addPass(this.final),this.setSize(s.x,s.y)}setSize(t,e){this.composer.setSize(t,e),this.final.uniforms.uRes.value.set(t,e)}setBloomIntensity(t){this.bloom.strength=.5+t*.55}vignettePunch(t){this.final.uniforms.uVignettePunch.value=Math.max(this.final.uniforms.uVignettePunch.value,t)}chromaticPunch(t){this.final.uniforms.uChromatic.value=Math.max(this.final.uniforms.uChromatic.value,t)}desatFlash(t){this.final.uniforms.uDesat.value=Math.max(this.final.uniforms.uDesat.value,t)}setGrain(t){this.final.uniforms.uGrain.value=t}update(t){this.time+=t;const e=this.final.uniforms;e.uTime.value=this.time,e.uVignettePunch.value*=1-Math.min(1,t*4),e.uChromatic.value*=1-Math.min(1,t*5),e.uDesat.value*=1-Math.min(1,t*3)}render(){this.composer.render()}}class Uy{constructor(t){B(this,"followY",0);B(this,"roll",0);B(this,"rollTarget",0);B(this,"fovBoost",0);B(this,"shake",0);B(this,"dropVel",0);B(this,"lookTarget",new I);B(this,"intro",0);B(this,"seed",0);B(this,"reducedMotion",!1);this.camera=t}snapTo(t){this.followY=t+Hn.yOffset,this.roll=this.rollTarget=0,this.fovBoost=0,this.shake=0,this.dropVel=0,this.intro=1}beginIntro(t){this.followY=t+Hn.yOffset+6,this.intro=0}punchFOV(t){this.reducedMotion||(this.fovBoost=Math.max(this.fovBoost,t))}addShake(t){this.reducedMotion||(this.shake=Math.max(this.shake,t))}setRollTarget(t){this.rollTarget=this.reducedMotion?0:t}deathDrop(){this.dropVel=4.5,this.addShake(.9),this.punchFOV(10)}update(t,e){this.seed+=t,this.intro<1&&(this.intro=Math.min(1,this.intro+t*1.4));const n=1-Math.pow(1-this.intro,3),s=e+Hn.yOffset,r=Math.min(1,Hn.followLag*t);this.followY+=(s-this.followY)*r,this.dropVel>.001&&(this.followY-=this.dropVel*t,this.dropVel*=1-Math.min(1,t*2)),this.roll+=(this.rollTarget-this.roll)*Math.min(1,t*6),this.fovBoost*=1-Math.min(1,t*6),this.camera.fov=Hn.fov+this.fovBoost,this.camera.updateProjectionMatrix(),this.shake*=1-Math.min(1,t*7);const o=this.shake*Math.sin(this.seed*97)*.25,a=this.shake*Math.sin(this.seed*83+1.3)*.25,c=(1-n)*6,l=(1-n)*4;this.camera.position.set(o,this.followY+c,Hn.zDistance+l),this.camera.rotation.z=this.roll+a*.05,this.lookTarget.set(0,e-1.4,0),this.camera.lookAt(this.lookTarget),this.camera.rotation.z+=this.roll}}var Ae=(i=>(i[i.Gap=0]="Gap",i[i.Safe=1]="Safe",i[i.Lethal=2]="Lethal",i[i.Brittle=3]="Brittle",i))(Ae||{});let Gc=null;function Fy(){if(Gc)return Gc;const t=(Math.PI*2/oe.sectorCount-.055)/2,e=oe.radiusInner,n=oe.radiusOuter,s=oe.ringHeight,r=new cf;r.absarc(0,0,n,-t,t,!1),r.absarc(0,0,e,t,-t,!0),r.closePath();const o=new Dl(r,{depth:s,bevelEnabled:!0,bevelThickness:.02,bevelSize:.02,bevelSegments:1,curveSegments:6});return o.rotateX(-Math.PI/2),o.translate(0,-s/2,0),o.computeVertexNormals(),Gc=o,o}let Tr=null;function ky(){return Tr||(Tr=new Il(oe.radiusOuter,.045,8,48),Tr.rotateX(Math.PI/2),Tr)}const zo=Math.PI*2/oe.sectorCount,Go=new I;class By{constructor(){B(this,"group",new Ci);B(this,"meshes",[]);B(this,"mats",[]);B(this,"bonusMesh");B(this,"bonusMat");B(this,"layout",[]);B(this,"depthIndex",-1);B(this,"rotating",!1);B(this,"bonus",!1);B(this,"selfRot",0);B(this,"consumed",new Set);B(this,"active",!1);const t=Fy();for(let e=0;e<oe.sectorCount;e++){const n=new ts({color:We.towerLight,roughness:.82,metalness:.12,emissive:0,emissiveIntensity:0}),s=new Oe(t,n);s.rotation.y=e*zo,s.castShadow=!1,s.receiveShadow=!1,this.meshes.push(s),this.mats.push(n),this.group.add(s)}this.bonusMat=new ts({color:We.maple,emissive:We.maple,emissiveIntensity:1.4,roughness:.4,metalness:0}),this.bonusMesh=new Oe(ky(),this.bonusMat),this.bonusMesh.visible=!1,this.group.add(this.bonusMesh)}configure(t){this.depthIndex=t.depthIndex,this.rotating=t.rotating,this.bonus=t.bonus,this.selfRot=0,this.group.rotation.y=0,this.consumed.clear(),this.active=!0,this.layout=this.bonus?new Array(oe.sectorCount).fill(Ae.Gap):this.buildLayout(t),this.applyLayout(),this.bonusMesh.visible=this.bonus}buildLayout(t){const e=oe.sectorCount,n=new Array(e).fill(Ae.Safe),s=t.seed,r=Math.max(1,Math.min(e-1,t.gapCount));let o;t.guaranteedGapAngle!==void 0?o=Vy(Math.round(-t.guaranteedGapAngle/zo),e):o=Ho(t.depthIndex*2+1^s)%e;for(let f=0;f<r;f++)n[(o+f)%e]=Ae.Gap;const a=e*t.lethalRatio;let c=Math.floor(a);const l=a-c;l>0&&Yu(Ho(t.depthIndex*13+5^s))<l&&c++;let h=0,u=(o+r+2)%e,d=0;for(;h<c&&d++<e*3;)u=(u+3+Ho(t.depthIndex*7+h^s)%4)%e,n[u]===Ae.Safe&&(n[u]=Ae.Lethal,h++);if(t.brittleChance>0)for(let f=0;f<e;f++)n[f]===Ae.Safe&&Yu(Ho(t.depthIndex*31+f*7+3^s))<t.brittleChance&&(n[f]=Ae.Brittle);return n}applyLayout(){for(let t=0;t<oe.sectorCount;t++){const e=this.layout[t],n=this.meshes[t],s=this.mats[t];if(n.position.set(0,0,0),n.rotation.set(0,t*zo,0),n.scale.set(1,1,1),s.depthWrite=!0,e===Ae.Gap){n.visible=!1;continue}n.visible=!0,n.scale.set(1,1,1),s.opacity=1,s.transparent=!1;const r=Ti[(this.depthIndex%Ti.length+Ti.length)%Ti.length];e===Ae.Lethal?(s.color.setHex(We.lethal),s.emissive.setHex(We.lethal),s.emissiveIntensity=.55):e===Ae.Brittle?(s.color.setHex(16777215),s.emissive.setHex(r),s.emissiveIntensity=.16,s.opacity=.5,s.transparent=!0):(s.color.setHex(r),s.emissive.setHex(r),s.emissiveIntensity=.28)}}sectorIndexAt(t){this.group.updateWorldMatrix(!0,!1),Go.copy(t),this.group.worldToLocal(Go);const e=Math.atan2(Go.z,Go.x);let n=Math.round(-e/zo)%oe.sectorCount;return n<0&&(n+=oe.sectorCount),n}kindAt(t){return this.consumed.has(t)?Ae.Gap:this.layout[t]??Ae.Gap}smashSector(t,e){this.consumed.add(t);const n=this.meshes[t];n.getWorldPosition(e),n.visible=!1}break(){if(!this.bonus)for(const t of this.meshes)t.visible=!1}mainColor(){return Ti[(this.depthIndex%Ti.length+Ti.length)%Ti.length]}centerY(){return this.group.position.y}worldYTop(){return this.group.position.y+oe.ringHeight/2}setY(t){this.group.position.y=t}update(t,e){if(!this.active)return;this.rotating&&(this.selfRot+=br.rotatingSpeed*t,this.group.rotation.y=this.selfRot);const n=.1+.12*(.5+.5*Math.sin(e*1.6));for(let s=0;s<this.mats.length;s++)this.layout[s]===Ae.Lethal&&!this.consumed.has(s)&&(this.mats[s].emissiveIntensity=n);this.bonus&&(this.bonusMat.emissiveIntensity=1+.6*Math.sin(e*2.2))}retire(){this.active=!1,this.bonusMesh.visible=!1}}function Vy(i,t){return(i%t+t)%t}function Ho(i){let t=(i^2654435769)>>>0;return t=Math.imul(t^t>>>16,73244475)>>>0,t=Math.imul(t^t>>>16,73244475)>>>0,(t^t>>>16)>>>0}function Yu(i){return(i>>>0)/4294967296}const ll=-2.2;function ju(i){return ll-i*oe.ringGap}class zy{constructor(t){B(this,"group",new Ci);B(this,"pool",[]);B(this,"byDepth",new Map);B(this,"maxDepth",-1);B(this,"targetRotation",0);B(this,"spawned",!1);B(this,"seed",0);B(this,"noLethal",!1);t.add(this.group);for(let e=0;e<oe.visibleRings;e++){const n=new By;this.pool.push(n),this.group.add(n.group)}}reset(t,e=!1){this.byDepth.clear(),this.maxDepth=-1,this.targetRotation=0,this.group.rotation.y=0,this.seed=(t??Math.random()*4294967295)>>>0,this.noLethal=e;for(let n=0;n<this.pool.length;n++)this.configureRing(this.pool[n],n);this.spawned=!0}configureRing(t,e){const n=br,s=e<n.warmupRings,r=e>0&&e%n.bonusRingEvery===0,o=!r&&!s&&e>=n.rotatingStartDepth&&Gy(e*2+1^this.seed)<this.ramp(e,n.rotatingChanceStart,n.rotatingChanceEnd,n.rotatingChanceDepth);let a=0;!s&&!this.noLethal&&e>=n.lethalStartDepth&&(a=this.ramp(e-n.lethalStartDepth,n.lethalRatioStart,n.lethalRatioEnd,n.lethalRatioDepth)),o&&e<n.movingLethalStartDepth&&(a=0);let c=n.gapCountStart;e>=n.narrowGapStartDepth&&(c=Math.round(this.ramp(e-n.narrowGapStartDepth,n.gapCountStart,n.gapCountMin,n.narrowGapDepth)));const l=!s&&e>=n.brittleStartDepth?n.brittleChance:0;t.configure({depthIndex:e,seed:this.seed,lethalRatio:a,gapCount:c,brittleChance:l,rotating:o,bonus:r}),t.setY(ll-e*oe.ringGap);const h=this.byDepth.get(e);h&&h!==t&&h.retire(),this.byDepth.set(e,t),e>this.maxDepth&&(this.maxDepth=e)}recycle(t){if(!this.spawned)return;const e=t+oe.recycleAbove*oe.ringGap;for(const n of this.pool)n.active&&n.group.position.y>e&&(this.byDepth.delete(n.depthIndex),this.configureRing(n,this.maxDepth+1))}getRingByDepth(t){return this.byDepth.get(t)}updateRotation(t){const e=Math.min(1,ff.ease*t);this.group.rotation.y+=(this.targetRotation-this.group.rotation.y)*e}update(t,e){for(const n of this.pool)n.update(t,e)}fallScale(t){return this.ramp(t,br.fallScaleStart,br.fallScaleEnd,br.fallScaleDepth)}ringWorldPos(t,e){return e.set(0,ll-t*oe.ringGap,0),e}ramp(t,e,n,s){const r=Math.min(1,Math.max(0,t/s));return e+(n-e)*r}}function Gy(i){let t=(Math.imul(i+1,2654435769)^2246822507)>>>0;return t=Math.imul(t^t>>>15,3266489909)>>>0,((t^t>>>16)>>>0)/4294967295}let Hy=class{constructor(){B(this,"group",new Ci);B(this,"mesh");B(this,"mat");B(this,"light");B(this,"trail");B(this,"trailMat");B(this,"vy",0);B(this,"y",0);B(this,"shattering",!1);B(this,"squash",0);B(this,"glow",.45);B(this,"glowTarget",.45);B(this,"worldPos",new I);const t=new Ba(Je.radius,32,24);this.mat=new ts({color:We.maple,emissive:We.maple,emissiveIntensity:.45,roughness:.35,metalness:.1}),this.mesh=new Oe(t,this.mat),this.group.add(this.mesh),this.light=new Sy(We.maple,.5,2.2,2.4),this.light.position.set(0,0,0),this.group.add(this.light);const e=new Pl(Je.radius*.8,1,16,1,!0);e.translate(0,.5,0),this.trailMat=new Jr({color:We.maple,transparent:!0,opacity:0,blending:Dr,depthWrite:!1}),this.trail=new Oe(e,this.trailMat),this.group.add(this.trail),this.group.position.set(Je.orbitRadius*Math.cos(Je.orbitAngle),0,Je.orbitRadius*Math.sin(Je.orbitAngle))}reset(t){this.y=t,this.vy=0,this.squash=0,this.shattering=!1,this.glow=this.glowTarget=.45,this.group.position.y=t,this.mesh.scale.set(1,1,1)}integrate(t,e){this.vy+=Je.gravity*e*t,this.vy<Je.maxFallSpeed&&(this.vy=Je.maxFallSpeed),this.y+=this.vy*t}bounce(){this.vy=Je.bounceSpeed,this.squash=.7}smashImpact(){this.squash=.5,this.vy>-10&&(this.vy=-10)}setShatter(t){this.shattering=t,this.glowTarget=t?1.6:.45}applySkin(t){this.mat.color.setHex(t.color),this.mat.emissive.setHex(t.emissive),this.light.color.setHex(t.color),this.trailMat.color.setHex(t.trail)}render(t,e){this.group.position.y=this.y,this.squash+=(0-this.squash)*Math.min(1,t*12);const n=Math.min(1,Math.max(0,-this.vy/26))*.22,s=(1+n)*(1-this.squash*.55),r=(1-n*.45)*(1+this.squash*.5);this.mesh.scale.set(r,s,r),this.glow+=(this.glowTarget-this.glow)*Math.min(1,t*8);const o=this.shattering?.25*Math.sin(e*18):0;this.mat.emissiveIntensity=this.glow+o,this.light.intensity=(this.shattering?1.8:.5)+o*1.2;const a=Math.min(1,Math.max(0,-this.vy/22)),c=a*(this.shattering?3.2:1.8)+(this.shattering?.6:0),l=this.shattering?1.5:1;this.trail.scale.set(l,Math.max(.001,c),l),this.trail.visible=c>.05,this.trailMat.opacity=Math.min(.7,a*(this.shattering?.7:.4)+(this.shattering?.15:0))}getWorldPos(t){const e=t??this.worldPos;return this.group.getWorldPosition(e)}get bottom(){return this.y-Je.radius}};const Wy=12,qy=.24,Xy=20;class Yy{constructor(t){B(this,"group",new Ci);B(this,"pool",[]);B(this,"seed",1);B(this,"spawnedThrough",-1);B(this,"prevBallY",0);B(this,"ox");B(this,"oz");B(this,"_pos",new I);B(this,"onCollect");B(this,"enabled",!0);t.add(this.group);const e=new Ll(.17);for(let n=0;n<Xy;n++){const s=new ts({color:7268351,emissive:2282478,emissiveIntensity:.9,roughness:.12,metalness:.35}),r=new Oe(e,s);r.scale.set(.85,1.25,.85),r.visible=!1,this.group.add(r),this.pool.push({mesh:r,active:!1,depth:-1,y:0})}this.ox=Je.orbitRadius*Math.cos(Je.orbitAngle),this.oz=Je.orbitRadius*Math.sin(Je.orbitAngle)}reset(t,e=!0){for(const n of this.pool)n.active=!1,n.mesh.visible=!1;this.seed=e?Math.random()*4294967295>>>0:0,this.enabled=e,this.spawnedThrough=-1,this.prevBallY=t}free(){return this.pool.find(t=>!t.active)}update(t,e,n){this.enabled&&(this.spawnAhead(n),this.collect(n)),this.prevBallY=n;const s=n+oe.recycleAbove*oe.ringGap;for(const r of this.pool)if(r.active){if(r.y>s){r.active=!1,r.mesh.visible=!1;continue}r.mesh.rotation.y+=t*2.4,r.mesh.position.y=r.y+Math.sin(e*2+r.depth)*.05}}spawnAhead(t){const n=Math.floor((ju(0)-t)/oe.ringGap)+Wy;for(let s=this.spawnedThrough+1;s<=n;s++){if(this.spawnedThrough=s,s<2||Zy(jy(s*2654435761^this.seed))>=qy)continue;const r=this.free();r&&(r.active=!0,r.depth=s,r.y=ju(s)-oe.ringGap*.5,r.mesh.position.set(this.ox,r.y,this.oz),r.mesh.visible=!0)}}collect(t){for(const e of this.pool)e.active&&this.prevBallY>e.y&&t<=e.y&&(e.active=!1,e.mesh.visible=!1,this._pos.set(this.ox,e.y,this.oz),this.onCollect?.(this._pos))}}function jy(i){let t=(i^2654435769)>>>0;return t=Math.imul(t^t>>>16,73244475)>>>0,t=Math.imul(t^t>>>16,73244475)>>>0,(t^t>>>16)>>>0}function Zy(i){return(i>>>0)/4294967296}const un=new Ce,Zu=new fs,$u=new I;class $y{constructor(t){B(this,"shardMesh");B(this,"shards",[]);B(this,"shardCap",140);B(this,"sparkMesh");B(this,"sparks",[]);B(this,"sparkCap",220);B(this,"dust");B(this,"dustPositions");B(this,"dustCount",220);B(this,"waves",[]);B(this,"waveCap",8);B(this,"debrisMesh");B(this,"debris",[]);B(this,"debrisCap",240);B(this,"debrisColorDirty",!1);B(this,"_color",new kt);const e=new sa(.12,0),n=new ts({roughness:.5,metalness:.1,emissive:We.maple,emissiveIntensity:.3,vertexColors:!1});this.shardMesh=new Uc(e,n,this.shardCap),this.shardMesh.instanceMatrix.setUsage(hc),this.shardMesh.frustumCulled=!1,this.shardMesh.count=this.shardCap,t.add(this.shardMesh);const s=new sa(.04,0),r=new ts({color:We.maple,emissive:We.maple,emissiveIntensity:1.8,roughness:.4});this.sparkMesh=new Uc(s,r,this.sparkCap),this.sparkMesh.instanceMatrix.setUsage(hc),this.sparkMesh.frustumCulled=!1,this.sparkMesh.count=this.sparkCap,t.add(this.sparkMesh);const o=new or(.2,.12,.2),a=new ts({roughness:.38,metalness:0,emissive:16777215,emissiveIntensity:.18});this.debrisMesh=new Uc(o,a,this.debrisCap),this.debrisMesh.instanceMatrix.setUsage(hc),this.debrisMesh.frustumCulled=!1,this.debrisMesh.count=this.debrisCap,t.add(this.debrisMesh);for(let u=0;u<this.shardCap;u++)this.shards.push(this.makeShard());for(let u=0;u<this.sparkCap;u++)this.sparks.push(this.makeShard());for(let u=0;u<this.debrisCap;u++)this.debris.push(this.makeShard()),this.debrisMesh.setColorAt(u,this._color.setHex(16777215));this.hideAll(this.shardMesh,this.shardCap),this.hideAll(this.sparkMesh,this.sparkCap),this.hideAll(this.debrisMesh,this.debrisCap),this.debrisMesh.instanceColor&&(this.debrisMesh.instanceColor.needsUpdate=!0),this.dustPositions=new Float32Array(this.dustCount*3);for(let u=0;u<this.dustCount;u++)this.dustPositions[u*3]=(Math.random()-.5)*10,this.dustPositions[u*3+1]=(Math.random()-.5)*30,this.dustPositions[u*3+2]=(Math.random()-.5)*10;const c=new Xe;c.setAttribute("position",new Mn(this.dustPositions,3));const l=new nf({color:We.bone,size:.03,transparent:!0,opacity:.16,depthWrite:!1,fog:!0});this.dust=new Vx(c,l),this.dust.frustumCulled=!1,t.add(this.dust);const h=new Nl(.62,.8,44);h.rotateX(-Math.PI/2);for(let u=0;u<this.waveCap;u++){const d=new Jr({color:16777215,transparent:!0,opacity:0,blending:Dr,side:Wn,depthWrite:!1}),f=new Oe(h,d);f.visible=!1,f.frustumCulled=!1,t.add(f),this.waves.push({mesh:f,mat:d,life:0,ttl:.4,active:!1})}}shockwave(t,e=16777215){for(const n of this.waves)if(!n.active){n.active=!0,n.life=0,n.ttl=.4,n.mesh.visible=!0,n.mesh.position.copy(t),n.mesh.scale.setScalar(.4),n.mat.color.setHex(e),n.mat.opacity=.5;return}}makeShard(){return{pos:new I,vel:new I,spin:new I,rot:new fs,life:0,ttl:1,scale:1,active:!1}}hideAll(t,e){un.scale.set(0,0,0),un.position.set(0,-9999,0),un.updateMatrix();for(let n=0;n<e;n++)t.setMatrixAt(n,un.matrix);t.instanceMatrix.needsUpdate=!0}burstShards(t,e=We.maple,n=14){this._color.setHex(e);let s=0;for(const r of this.shards)if(!r.active&&(r.active=!0,r.pos.copy(t).add(Hc(.25)),r.vel.set((Math.random()-.5)*6,Math.random()*2.5+.5,(Math.random()-.5)*6),r.spin.set(ci(8),ci(8),ci(8)),r.rot.identity(),r.life=0,r.ttl=.6+Math.random()*.4,r.scale=.7+Math.random()*.8,++s>=n))break;this.burstSparks(t,8)}burstSparks(t,e=10){let n=0;for(const s of this.sparks)if(!s.active&&(s.active=!0,s.pos.copy(t).add(Hc(.15)),s.vel.set((Math.random()-.5)*4,Math.random()*3+1,(Math.random()-.5)*4),s.spin.set(0,0,0),s.life=0,s.ttl=.4+Math.random()*.3,s.scale=.6+Math.random()*.8,++n>=e))break}emitEmber(t){for(const e of this.sparks)if(!e.active){e.active=!0,e.pos.copy(t).add(Hc(.08)),e.vel.set((Math.random()-.5)*.8,-.4-Math.random(),(Math.random()-.5)*.8),e.life=0,e.ttl=.5+Math.random()*.3,e.scale=.4+Math.random()*.5;return}}burstRing(t,e,n,s=46){let r=0;for(let o=0;o<this.debris.length&&r<s;o++){const a=this.debris[o];if(a.active)continue;const c=Math.random()*Math.PI*2,l=e*(.5+Math.random()*.7);a.active=!0,a.pos.set(t.x+Math.cos(c)*l,t.y+(Math.random()-.5)*.3,t.z+Math.sin(c)*l);const h=1.4+Math.random()*3.6;a.vel.set(Math.cos(c)*h,.6-Math.random()*3.4,Math.sin(c)*h),a.spin.set(ci(14),ci(14),ci(14)),a.rot.identity(),a.life=0,a.ttl=.55+Math.random()*.5,a.scale=.55+Math.random()*1,this.debrisMesh.setColorAt(o,this._color.setHex(n)),r++}this.debrisColorDirty=!0}recordBurst(t){this.burstShards(t,We.maple,28),this.burstSparks(t,40)}update(t,e){this.stepPool(this.shards,this.shardMesh,t,!0),this.stepPool(this.sparks,this.sparkMesh,t,!1),this.stepPool(this.debris,this.debrisMesh,t,!0),this.debrisColorDirty&&this.debrisMesh.instanceColor&&(this.debrisMesh.instanceColor.needsUpdate=!0,this.debrisColorDirty=!1);const n=16;for(let s=0;s<this.dustCount;s++){let r=this.dustPositions[s*3+1]-t*.15;const o=r-e;o<-n?r+=n*2:o>n&&(r-=n*2),this.dustPositions[s*3+1]=r}this.dust.geometry.getAttribute("position").needsUpdate=!0;for(const s of this.waves){if(!s.active)continue;s.life+=t;const r=s.life/s.ttl;if(r>=1){s.active=!1,s.mesh.visible=!1,s.mat.opacity=0;continue}const o=1-(1-r)*(1-r);s.mesh.scale.setScalar(.4+o*2.6),s.mat.opacity=.5*(1-r)}}stepPool(t,e,n,s){let r=!1;for(let o=0;o<t.length;o++){const a=t[o];if(!a.active)continue;if(r=!0,a.life+=n,a.life>=a.ttl){a.active=!1,un.position.set(0,-9999,0),un.scale.set(0,0,0),un.updateMatrix(),e.setMatrixAt(o,un.matrix);continue}s&&(a.vel.y-=11*n),a.pos.addScaledVector(a.vel,n);const c=1-a.life/a.ttl;a.spin.lengthSq()>0&&($u.copy(a.spin).normalize(),Zu.setFromAxisAngle($u,a.spin.length()*n),a.rot.multiply(Zu)),un.position.copy(a.pos),un.quaternion.copy(a.rot);const l=a.scale*c;un.scale.set(l,l,l),un.updateMatrix(),e.setMatrixAt(o,un.matrix)}r&&(e.instanceMatrix.needsUpdate=!0)}}function ci(i){return(Math.random()-.5)*i}function Hc(i){return new I(ci(i),ci(i),ci(i))}const Wc=new I;class Jy{constructor(t){B(this,"layer");B(this,"flashEl");B(this,"edgeEl");this.layer=document.createElement("div"),this.layer.className="fx-layer",this.flashEl=document.createElement("div"),this.flashEl.className="fx-flash",this.layer.appendChild(this.flashEl),this.edgeEl=document.createElement("div"),this.edgeEl.className="fx-edge",this.layer.appendChild(this.edgeEl),t.appendChild(this.layer)}scorePopup(t,e,n,s,r){Wc.copy(t).project(s);const o=r.domElement.getBoundingClientRect(),a=o.left+(Wc.x+1)/2*o.width,c=o.top+(1-Wc.y)/2*o.height,l=document.createElement("div");l.className="fx-popup"+(n?" accent":""),l.textContent=e,l.style.left=`${a}px`,l.style.top=`${c}px`,this.layer.appendChild(l),l.addEventListener("animationend",()=>l.remove())}flash(t=.6,e=wy.textPrimary){this.flashEl.style.background=e,this.flashEl.style.opacity=String(t),this.flashEl.offsetWidth,this.flashEl.style.transition="opacity 0.5s ease-out",this.flashEl.style.opacity="0"}edgePulse(){this.edgeEl.classList.remove("pulse"),this.edgeEl.offsetWidth,this.edgeEl.classList.add("pulse")}}class Ky{constructor(t,e){B(this,"root");B(this,"scoreEl");B(this,"multEl");B(this,"diamondsEl");B(this,"displayScore",0);this.root=document.createElement("div"),this.root.className="hud",this.scoreEl=document.createElement("div"),this.scoreEl.className="hud-score",this.scoreEl.textContent="0",this.multEl=document.createElement("div"),this.multEl.className="hud-mult",this.multEl.textContent="",this.diamondsEl=document.createElement("div"),this.diamondsEl.className="hud-diamonds",this.diamondsEl.textContent="◆ 0";const n=document.createElement("button");n.className="hud-pause",n.setAttribute("aria-label","暂停"),n.textContent="❘❘",n.addEventListener("click",e),this.root.append(this.scoreEl,this.multEl,this.diamondsEl,n),t.appendChild(this.root)}setDiamonds(t){this.diamondsEl.textContent=`◆ ${t}`}pulseDiamonds(){this.diamondsEl.animate([{transform:"scale(1)"},{transform:"scale(1.4)"},{transform:"scale(1)"}],{duration:240,easing:"ease-out"})}show(t){this.root.classList.toggle("show",t)}setScore(t){this.displayScore+=(t-this.displayScore)*.3,Math.abs(t-this.displayScore)<.5&&(this.displayScore=t),this.scoreEl.textContent=String(Math.round(this.displayScore))}setMultiplier(t,e){if(t<=1){this.multEl.textContent="",this.multEl.classList.remove("hot");return}this.multEl.textContent=`×${t.toFixed(1)}`,this.multEl.classList.toggle("hot",e)}pulseMultiplier(){this.multEl.animate([{transform:"scale(1)"},{transform:"scale(1.35)"},{transform:"scale(1)"}],{duration:220,easing:"ease-out"})}}class Qy{constructor(t,e,n){B(this,"current",null);B(this,"prevScreen",null);B(this,"start");B(this,"pause");B(this,"gameover");B(this,"settings");B(this,"shop");B(this,"bestStartEl");B(this,"startDiamondsEl");B(this,"finalScoreEl");B(this,"bestEndEl");B(this,"recordTag");B(this,"reviveBtn");B(this,"shopBalEl");B(this,"shopList");this.settingsModel=e,this.cb=n,this.start=this.buildStart(),this.pause=this.buildPause(),this.gameover=this.buildGameOver(),this.settings=this.buildSettings(),this.shop=this.buildShop(),this.bestStartEl=this.start.querySelector(".best b"),this.startDiamondsEl=this.start.querySelector(".diamonds b"),this.finalScoreEl=this.gameover.querySelector(".final-score"),this.bestEndEl=this.gameover.querySelector(".best b"),this.recordTag=this.gameover.querySelector(".record-tag"),this.reviveBtn=this.gameover.querySelector(".revive"),t.append(this.start,this.pause,this.gameover,this.settings,this.shop)}el(t,e,n){const s=document.createElement(t);return e&&(s.className=e),n!==void 0&&(s.textContent=n),s}button(t,e,n){const s=this.el("button",e,t);return s.addEventListener("click",()=>{this.cb.onButtonSound(),n()}),s}buildStart(){const t=this.el("div","screen"),e=this.el("div","title");e.innerHTML='坠 <span class="accent">·</span> DESCENT';const n=this.el("div","best");n.innerHTML="最高 <b>0</b>";const s=this.el("div","best diamonds");s.innerHTML="◆ <b>0</b>";const r=this.button("轻点坠落 · TAP TO DROP","primary",()=>this.cb.onStart()),o=this.el("div","btn-row");o.append(this.button("商店 · SHOP","secondary",()=>this.open("shop")),this.button("新手引导","secondary",()=>this.cb.onTutorial()));const a=this.button("⚙","gear",()=>this.open("settings"));return a.setAttribute("aria-label","设置"),t.append(e,n,s,r,o,a),t}buildShop(){const t=this.el("div","screen dim"),e=this.el("div","subtitle","商店 · 球皮肤"),n=this.el("div","best");n.innerHTML="钻石 <b>0</b>",this.shopBalEl=n.querySelector("b"),this.shopList=this.el("div","settings shop-list");const s=this.button("返回","",()=>this.open("start"));return t.append(e,n,this.shopList,s),t}refreshShop(){if(this.shopList){this.shopBalEl.textContent=String(this.settingsModel.diamonds),this.startDiamondsEl.textContent=String(this.settingsModel.diamonds),this.shopList.textContent="";for(const t of cl){const e=this.el("div","set-row"),n=this.el("div","skin-name"),s=this.el("span","skin-swatch");s.style.background=`#${t.color.toString(16).padStart(6,"0")}`,n.append(s,this.el("span",void 0,t.name));const r=this.settingsModel.ownsSkin(t.id),o=this.settingsModel.equippedSkin===t.id;let a;if(o)a=this.button("已装备","ghost",()=>{}),a.disabled=!0;else if(r)a=this.button("装备","",()=>this.cb.onEquipSkin(t.id));else{const c=this.settingsModel.diamonds>=t.cost;a=this.button(`◆ ${t.cost}`,c?"primary":"",()=>{this.settingsModel.diamonds>=t.cost?this.cb.onBuySkin(t.id):a.animate([{transform:"translateX(0)"},{transform:"translateX(-6px)"},{transform:"translateX(6px)"},{transform:"translateX(0)"}],{duration:240})})}e.append(n,a),this.shopList.append(e)}}}buildPause(){const t=this.el("div","screen dim"),e=this.el("div","subtitle","已暂停"),n=this.el("div","btn-row");return n.append(this.button("继续","primary",()=>this.cb.onResume()),this.button("重开","",()=>this.cb.onRestart()),this.button("返回主页","",()=>this.cb.onHome()),this.button("设置","",()=>this.open("settings"))),t.append(e,n),t}buildGameOver(){const t=this.el("div","screen"),e=this.el("div","record-tag","新纪录"),n=this.el("div","final-score","0"),s=this.el("div","best");s.innerHTML="最高 <b>0</b>";const r=this.button("重开","primary",()=>this.cb.onRestart()),o=this.button("看广告复活","ghost revive",()=>this.cb.onReviveAd());return o.style.display="",t.append(e,n,s,r,o),t}buildSettings(){const t=this.el("div","screen dim"),e=this.el("div","subtitle","设置"),n=this.el("div","settings");n.append(this.toggleRow("音乐","music",this.settingsModel.music),this.toggleRow("音效","sfx",this.settingsModel.sfx),this.toggleRow("震动反馈","haptics",this.settingsModel.haptics));const s=this.el("div","set-row");s.append(this.el("span",void 0,"最高分"));const r=this.button("重置","ghost",()=>{r.dataset.confirm?(this.cb.onResetHighScore(),this.refreshBest(),r.textContent="已重置",delete r.dataset.confirm):(r.dataset.confirm="1",r.textContent="确认重置？")});s.append(r),n.append(s);const o=this.button("返回","",()=>this.open(this.prevScreen??"start"));return t.append(e,n,o),t}toggleRow(t,e,n){const s=this.el("div","set-row");s.append(this.el("span",void 0,t));const r=this.el("button","toggle");return r.setAttribute("role","switch"),r.setAttribute("aria-checked",String(n)),r.setAttribute("aria-label",t),r.addEventListener("click",()=>{const o=r.getAttribute("aria-checked")!=="true";r.setAttribute("aria-checked",String(o)),this.cb.onButtonSound(),this.cb.onSettingChange(e,o)}),s.append(r),s}screenFor(t){switch(t){case"start":return this.start;case"pause":return this.pause;case"gameover":return this.gameover;case"settings":return this.settings;case"shop":return this.shop;default:return null}}open(t){t==="settings"&&(this.prevScreen=this.current==="settings"?this.prevScreen:this.current),t==="shop"&&this.refreshShop();const e=this.screenFor(this.current);e&&e.classList.remove("show"),this.current=t;const n=this.screenFor(t);n&&(n.classList.add("show"),n.querySelector("button.primary, button")?.focus?.())}hideAll(){[this.start,this.pause,this.gameover,this.settings,this.shop].forEach(t=>t.classList.remove("show")),this.current=null}refreshBest(){this.bestStartEl.textContent=String(this.settingsModel.highScore),this.bestEndEl.textContent=String(this.settingsModel.highScore),this.startDiamondsEl.textContent=String(this.settingsModel.diamonds)}showStart(){this.refreshBest(),this.open("start")}showGameOver(t,e){this.refreshBest(),this.finalScoreEl.classList.toggle("record",e),this.recordTag.classList.toggle("show",e),this.reviveBtn.style.display="",this.open("gameover"),this.countUp(t)}countUp(t){const e=this.finalScoreEl,n=700,s=performance.now(),r=o=>{const a=Math.min(1,(o-s)/n),c=1-Math.pow(1-a,3);e.textContent=String(Math.round(t*c)),a<1?requestAnimationFrame(r):e.textContent=String(t)};requestAnimationFrame(r)}}class tS{constructor(t){B(this,"root");B(this,"bubble");B(this,"hideTimer",0);this.root=document.createElement("div"),this.root.className="tutorial",this.bubble=document.createElement("div"),this.bubble.className="tutorial-bubble",this.root.appendChild(this.bubble),t.appendChild(this.root)}show(t,e=0){window.clearTimeout(this.hideTimer),this.bubble.textContent=t,this.root.classList.add("show"),e>0&&(this.hideTimer=window.setTimeout(()=>this.hide(),e))}hide(){window.clearTimeout(this.hideTimer),this.root.classList.remove("show")}complete(t="新手引导完成 🎉"){this.show(t,1800)}}const _f="14.9.17",Ju=(i,t,e)=>({endTime:t,insertTime:e,type:"exponentialRampToValue",value:i}),Ku=(i,t,e)=>({endTime:t,insertTime:e,type:"linearRampToValue",value:i}),hl=(i,t)=>({startTime:t,type:"setValue",value:i}),vf=(i,t,e)=>({duration:e,startTime:t,type:"setValueCurve",values:i}),xf=(i,t,{startTime:e,target:n,timeConstant:s})=>n+(t-n)*Math.exp((e-i)/s),zs=i=>i.type==="exponentialRampToValue",ra=i=>i.type==="linearRampToValue",wi=i=>zs(i)||ra(i),Ol=i=>i.type==="setValue",ai=i=>i.type==="setValueCurve",oa=(i,t,e,n)=>{const s=i[t];return s===void 0?n:wi(s)||Ol(s)?s.value:ai(s)?s.values[s.values.length-1]:xf(e,oa(i,t-1,s.startTime,n),s)},Qu=(i,t,e,n,s)=>e===void 0?[n.insertTime,s]:wi(e)?[e.endTime,e.value]:Ol(e)?[e.startTime,e.value]:ai(e)?[e.startTime+e.duration,e.values[e.values.length-1]]:[e.startTime,oa(i,t-1,e.startTime,s)],ul=i=>i.type==="cancelAndHold",dl=i=>i.type==="cancelScheduledValues",bi=i=>ul(i)||dl(i)?i.cancelTime:zs(i)||ra(i)?i.endTime:i.startTime,td=(i,t,e,{endTime:n,value:s})=>e===s?s:0<e&&0<s||e<0&&s<0?e*(s/e)**((i-t)/(n-t)):i<n?e:s,ed=(i,t,e,{endTime:n,value:s})=>e+(i-t)/(n-t)*(s-e),yf=(i,t)=>{const e=Math.floor(t);if(e===t)return i[e];const n=Math.ceil(t);return(1-(t-e))*i[e]+(1-(n-t))*i[n]},eS=(i,{duration:t,startTime:e,values:n})=>{const s=(i-e)/t*(n.length-1);return yf(n,s)},nS=(i,t,e)=>{const n=i.length,s=Math.max(1,Math.floor(e/t*n))+1,r=i instanceof Float32Array?new Float32Array(s):i.slice(0,s);for(let o=0;o<s;o+=1){const c=o/(s-1)*e/t*(n-1);r[o]=yf(i,c)}return r},Wo=i=>i.type==="setTarget";class iS{constructor(t){this._automationEvents=[],this._currenTime=0,this._defaultValue=t}[Symbol.iterator](){return this._automationEvents[Symbol.iterator]()}add(t){const e=bi(t);if(ul(t)||dl(t)){const n=this._automationEvents.findIndex(r=>dl(t)&&ai(r)?r.startTime+r.duration>=e:bi(r)>=e),s=this._automationEvents[n];if(n!==-1&&(this._automationEvents=this._automationEvents.slice(0,n)),ul(t)){const r=this._automationEvents[this._automationEvents.length-1];if(s!==void 0&&wi(s)){if(r!==void 0&&Wo(r))throw new Error("The internal list is malformed.");const o=r===void 0?s.insertTime:ai(r)?r.startTime+r.duration:bi(r),a=r===void 0?this._defaultValue:ai(r)?r.values[r.values.length-1]:r.value,c=zs(s)?td(e,o,a,s):ed(e,o,a,s),l=zs(s)?Ju(c,e,this._currenTime):Ku(c,e,this._currenTime);this._automationEvents.push(l)}if(r!==void 0&&Wo(r)&&this._automationEvents.push(hl(this.getValue(e),e)),r!==void 0&&ai(r)&&r.startTime+r.duration>e){const o=e-r.startTime;this._automationEvents[this._automationEvents.length-1]=vf(nS(r.values,r.duration,o),r.startTime,o)}}}else{const n=this._automationEvents.findIndex(o=>bi(o)>e),s=n===-1?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[n-1];if(s!==void 0&&ai(s)&&bi(s)+s.duration>e)return!1;const r=zs(t)?Ju(t.value,t.endTime,this._currenTime):ra(t)?Ku(t.value,e,this._currenTime):t;if(n===-1)this._automationEvents.push(r);else{if(ai(t)&&e+t.duration>bi(this._automationEvents[n]))return!1;this._automationEvents.splice(n,0,r)}}return!0}flush(t){const e=this._automationEvents.findIndex(n=>bi(n)>t);if(e>1){const n=this._automationEvents.slice(e-1),s=n[0];Wo(s)&&n.unshift(hl(oa(this._automationEvents,e-2,s.startTime,this._defaultValue),s.startTime)),this._automationEvents=n}}getValue(t){if(this._automationEvents.length===0)return this._defaultValue;const e=this._automationEvents.findIndex(o=>bi(o)>t),n=this._automationEvents[e],s=(e===-1?this._automationEvents.length:e)-1,r=this._automationEvents[s];if(r!==void 0&&Wo(r)&&(n===void 0||!wi(n)||n.insertTime>t))return xf(t,oa(this._automationEvents,s-1,r.startTime,this._defaultValue),r);if(r!==void 0&&Ol(r)&&(n===void 0||!wi(n)))return r.value;if(r!==void 0&&ai(r)&&(n===void 0||!wi(n)||r.startTime+r.duration>t))return t<r.startTime+r.duration?eS(t,r):r.values[r.values.length-1];if(r!==void 0&&wi(r)&&(n===void 0||!wi(n)))return r.value;if(n!==void 0&&zs(n)){const[o,a]=Qu(this._automationEvents,s,r,n,this._defaultValue);return td(t,o,a,n)}if(n!==void 0&&ra(n)){const[o,a]=Qu(this._automationEvents,s,r,n,this._defaultValue);return ed(t,o,a,n)}return this._defaultValue}}const sS=i=>({cancelTime:i,type:"cancelAndHold"}),rS=i=>({cancelTime:i,type:"cancelScheduledValues"}),oS=(i,t)=>({endTime:t,type:"exponentialRampToValue",value:i}),aS=(i,t)=>({endTime:t,type:"linearRampToValue",value:i}),cS=(i,t,e)=>({startTime:t,target:i,timeConstant:e,type:"setTarget"}),lS=()=>new DOMException("","AbortError"),hS=i=>(t,e,[n,s,r],o)=>{i(t[s],[e,n,r],a=>a[0]===e&&a[1]===n,o)},uS=i=>(t,e,n)=>{const s=[];for(let r=0;r<n.numberOfInputs;r+=1)s.push(new Set);i.set(t,{activeInputs:s,outputs:new Set,passiveInputs:new WeakMap,renderer:e})},dS=i=>(t,e)=>{i.set(t,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:e})},Zs=new WeakSet,Sf=new WeakMap,Ul=new WeakMap,Mf=new WeakMap,Fl=new WeakMap,za=new WeakMap,Tf=new WeakMap,fl=new WeakMap,pl=new WeakMap,ml=new WeakMap,bf={construct(){return bf}},fS=i=>{try{const t=new Proxy(i,bf);new t}catch{return!1}return!0},nd=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,id=(i,t)=>{const e=[];let n=i.replace(/^[\s]+/,""),s=n.match(nd);for(;s!==null;){const r=s[1].slice(1,-1),o=s[0].replace(/([\s]+)?;?$/,"").replace(r,new URL(r,t).toString());e.push(o),n=n.slice(s[0].length).replace(/^[\s]+/,""),s=n.match(nd)}return[e.join(";"),n]},sd=i=>{if(i!==void 0&&!Array.isArray(i))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},rd=i=>{if(!fS(i))throw new TypeError("The given value for processorCtor should be a constructor.");if(i.prototype===null||typeof i.prototype!="object")throw new TypeError("The given value for processorCtor should have a prototype.")},pS=(i,t,e,n,s,r,o,a,c,l,h,u,d)=>{let f=0;return(g,_,m={credentials:"omit"})=>{const p=h.get(g);if(p!==void 0&&p.has(_))return Promise.resolve();const x=l.get(g);if(x!==void 0){const T=x.get(_);if(T!==void 0)return T}const v=r(g),y=v.audioWorklet===void 0?s(_).then(([T,b])=>{const[E,C]=id(T,b),S=`${E};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${C}
})})(window,'_AWGS')`;return e(S)}).then(()=>{const T=d._AWGS.pop();if(T===void 0)throw new SyntaxError;n(v.currentTime,v.sampleRate,()=>T(class{},void 0,(b,E)=>{if(b.trim()==="")throw t();const C=pl.get(v);if(C!==void 0){if(C.has(b))throw t();rd(E),sd(E.parameterDescriptors),C.set(b,E)}else rd(E),sd(E.parameterDescriptors),pl.set(v,new Map([[b,E]]))},v.sampleRate,void 0,void 0))}):Promise.all([s(_),Promise.resolve(i(u,u))]).then(([[T,b],E])=>{const C=f+1;f=C;const[S,M]=id(T,b),P=`${S};((AudioWorkletProcessor,registerProcessor)=>{${M}
})(${E?"AudioWorkletProcessor":"class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}"},(n,p)=>registerProcessor(n,class extends p{${E?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${E?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}));registerProcessor('__sac${C}',class extends AudioWorkletProcessor{process(){return !1}})`,U=new Blob([P],{type:"application/javascript; charset=utf-8"}),F=URL.createObjectURL(U);return v.audioWorklet.addModule(F,m).then(()=>{if(a(v))return v;const V=o(v);return V.audioWorklet.addModule(F,m).then(()=>V)}).then(V=>{if(c===null)throw new SyntaxError;try{new c(V,`__sac${C}`)}catch{throw new SyntaxError}}).finally(()=>URL.revokeObjectURL(F))});return x===void 0?l.set(g,new Map([[_,y]])):x.set(_,y),y.then(()=>{const T=h.get(g);T===void 0?h.set(g,new Set([_])):T.add(_)}).finally(()=>{const T=l.get(g);T!==void 0&&T.delete(_)}),y}},On=(i,t)=>{const e=i.get(t);if(e===void 0)throw new Error("A value with the given key could not be found.");return e},Ga=(i,t)=>{const e=Array.from(i).filter(t);if(e.length>1)throw Error("More than one element was found.");if(e.length===0)throw Error("No element was found.");const[n]=e;return i.delete(n),n},wf=(i,t,e,n)=>{const s=On(i,t),r=Ga(s,o=>o[0]===e&&o[1]===n);return s.size===0&&i.delete(t),r},Qr=i=>On(Tf,i),$s=i=>{if(Zs.has(i))throw new Error("The AudioNode is already stored.");Zs.add(i),Qr(i).forEach(t=>t(!0))},Ef=i=>"port"in i,to=i=>{if(!Zs.has(i))throw new Error("The AudioNode is not stored.");Zs.delete(i),Qr(i).forEach(t=>t(!1))},gl=(i,t)=>{!Ef(i)&&t.every(e=>e.size===0)&&to(i)},mS=(i,t,e,n,s,r,o,a,c,l,h,u,d)=>{const f=new WeakMap;return(g,_,m,p,x)=>{const{activeInputs:v,passiveInputs:y}=r(_),{outputs:T}=r(g),b=a(g),E=C=>{const S=c(_),M=c(g);if(C){const D=wf(y,g,m,p);i(v,g,D,!1),!x&&!u(g)&&e(M,S,m,p),d(_)&&$s(_)}else{const D=n(v,g,m,p);t(y,p,D,!1),!x&&!u(g)&&s(M,S,m,p);const L=o(_);if(L===0)h(_)&&gl(_,v);else{const H=f.get(_);H!==void 0&&clearTimeout(H),f.set(_,setTimeout(()=>{h(_)&&gl(_,v)},L*1e3))}}};return l(T,[_,m,p],C=>C[0]===_&&C[1]===m&&C[2]===p,!0)?(b.add(E),h(g)?i(v,g,[m,p,E],!0):t(y,p,[g,m,E],!0),!0):!1}},gS=i=>(t,e,[n,s,r],o)=>{const a=t.get(n);a===void 0?t.set(n,new Set([[s,e,r]])):i(a,[s,e,r],c=>c[0]===s&&c[1]===e,o)},_S=i=>(t,e)=>{const n=i(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});e.connect(n).connect(t.destination);const s=()=>{e.removeEventListener("ended",s),e.disconnect(n),n.disconnect()};e.addEventListener("ended",s)},vS=i=>(t,e)=>{i(t).add(e)},xS={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},yS=(i,t,e,n,s,r)=>class extends i{constructor(a,c){const l=s(a),h={...xS,...c},u=n(l,h),d=r(l)?t():null;super(a,!1,u,d),this._nativeAnalyserNode=u}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(a){this._nativeAnalyserNode.fftSize=a}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(a){const c=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=a,!(a>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=c,e()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(a){const c=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=a,!(this._nativeAnalyserNode.maxDecibels>a))throw this._nativeAnalyserNode.minDecibels=c,e()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(a){this._nativeAnalyserNode.smoothingTimeConstant=a}getByteFrequencyData(a){this._nativeAnalyserNode.getByteFrequencyData(a)}getByteTimeDomainData(a){this._nativeAnalyserNode.getByteTimeDomainData(a)}getFloatFrequencyData(a){this._nativeAnalyserNode.getFloatFrequencyData(a)}getFloatTimeDomainData(a){this._nativeAnalyserNode.getFloatTimeDomainData(a)}},Ye=(i,t)=>i.context===t,SS=(i,t,e)=>()=>{const n=new WeakMap,s=async(r,o)=>{let a=t(r);if(!Ye(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,fftSize:a.fftSize,maxDecibels:a.maxDecibels,minDecibels:a.minDecibels,smoothingTimeConstant:a.smoothingTimeConstant};a=i(o,l)}return n.set(o,a),await e(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}},aa=i=>{try{i.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},Zn=()=>new DOMException("","IndexSizeError"),kl=i=>{i.getChannelData=(t=>e=>{try{return t.call(i,e)}catch(n){throw n.code===12?Zn():n}})(i.getChannelData)},MS={numberOfChannels:1},TS=(i,t,e,n,s,r,o,a)=>{let c=null;return class Af{constructor(h){if(s===null)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:u,numberOfChannels:d,sampleRate:f}={...MS,...h};c===null&&(c=new s(1,1,44100));const g=n!==null&&t(r,r)?new n({length:u,numberOfChannels:d,sampleRate:f}):c.createBuffer(d,u,f);if(g.numberOfChannels===0)throw e();return typeof g.copyFromChannel!="function"?(o(g),kl(g)):t(aa,()=>aa(g))||a(g),i.add(g),g}static[Symbol.hasInstance](h){return h!==null&&typeof h=="object"&&Object.getPrototypeOf(h)===Af.prototype||i.has(h)}}},rn=-34028234663852886e22,Qe=-rn,di=i=>Zs.has(i),bS={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},wS=(i,t,e,n,s,r,o,a)=>class extends i{constructor(l,h){const u=r(l),d={...bS,...h},f=s(u,d),g=o(u),_=g?t():null;super(l,!1,f,_),this._audioBufferSourceNodeRenderer=_,this._isBufferNullified=!1,this._isBufferSet=d.buffer!==null,this._nativeAudioBufferSourceNode=f,this._onended=null,this._playbackRate=e(this,g,f.playbackRate,Qe,rn)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(l){if(this._nativeAudioBufferSourceNode.buffer=l,l!==null){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(l){this._nativeAudioBufferSourceNode.loop=l}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(l){this._nativeAudioBufferSourceNode.loopEnd=l}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(l){this._nativeAudioBufferSourceNode.loopStart=l}get onended(){return this._onended}set onended(l){const h=typeof l=="function"?a(this,l):null;this._nativeAudioBufferSourceNode.onended=h;const u=this._nativeAudioBufferSourceNode.onended;this._onended=u!==null&&u===h?l:u}get playbackRate(){return this._playbackRate}start(l=0,h=0,u){if(this._nativeAudioBufferSourceNode.start(l,h,u),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.start=u===void 0?[l,h]:[l,h,u]),this.context.state!=="closed"){$s(this);const d=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",d),di(this)&&to(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",d)}}stop(l=0){this._nativeAudioBufferSourceNode.stop(l),this._audioBufferSourceNodeRenderer!==null&&(this._audioBufferSourceNodeRenderer.stop=l)}},ES=(i,t,e,n,s)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,h)=>{let u=e(l);const d=Ye(u,h);if(!d){const f={buffer:u.buffer,channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,loop:u.loop,loopEnd:u.loopEnd,loopStart:u.loopStart,playbackRate:u.playbackRate.value};u=t(h,f),o!==null&&u.start(...o),a!==null&&u.stop(a)}return r.set(h,u),d?await i(h,l.playbackRate,u.playbackRate):await n(h,l.playbackRate,u.playbackRate),await s(l,h,u),u};return{set start(l){o=l},set stop(l){a=l},render(l,h){const u=r.get(h);return u!==void 0?Promise.resolve(u):c(l,h)}}},AS=i=>"playbackRate"in i,CS=i=>"frequency"in i&&"gain"in i,RS=i=>"offset"in i,PS=i=>!("frequency"in i)&&"gain"in i,DS=i=>"detune"in i&&"frequency"in i&&!("gain"in i),LS=i=>"pan"in i,tn=i=>On(Sf,i),eo=i=>On(Mf,i),_l=(i,t)=>{const{activeInputs:e}=tn(i);e.forEach(s=>s.forEach(([r])=>{t.includes(i)||_l(r,[...t,i])}));const n=AS(i)?[i.playbackRate]:Ef(i)?Array.from(i.parameters.values()):CS(i)?[i.Q,i.detune,i.frequency,i.gain]:RS(i)?[i.offset]:PS(i)?[i.gain]:DS(i)?[i.detune,i.frequency]:LS(i)?[i.pan]:[];for(const s of n){const r=eo(s);r!==void 0&&r.activeInputs.forEach(([o])=>_l(o,t))}di(i)&&to(i)},Cf=i=>{_l(i.destination,[])},NS=i=>i===void 0||typeof i=="number"||typeof i=="string"&&(i==="balanced"||i==="interactive"||i==="playback"),IS=(i,t,e,n,s,r,o,a,c)=>class extends i{constructor(h={}){if(c===null)throw new Error("Missing the native AudioContext constructor.");let u;try{u=new c(h)}catch(g){throw g.code===12&&g.message==="sampleRate is not in range"?e():g}if(u===null)throw n();if(!NS(h.latencyHint))throw new TypeError(`The provided value '${h.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(h.sampleRate!==void 0&&u.sampleRate!==h.sampleRate)throw e();super(u,2);const{latencyHint:d}=h,{sampleRate:f}=u;if(this._baseLatency=typeof u.baseLatency=="number"?u.baseLatency:d==="balanced"?512/f:d==="interactive"||d===void 0?256/f:d==="playback"?1024/f:Math.max(2,Math.min(128,Math.round(d*f/128)))*128/f,this._nativeAudioContext=u,c.name==="webkitAudioContext"?(this._nativeGainNode=u.createGain(),this._nativeOscillatorNode=u.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(u.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,u.state==="running"){this._state="suspended";const g=()=>{this._state==="suspended"&&(this._state=null),u.removeEventListener("statechange",g)};u.addEventListener("statechange",g)}}get baseLatency(){return this._baseLatency}get state(){return this._state!==null?this._state:this._nativeAudioContext.state}close(){return this.state==="closed"?this._nativeAudioContext.close().then(()=>{throw t()}):(this._state==="suspended"&&(this._state=null),this._nativeAudioContext.close().then(()=>{this._nativeGainNode!==null&&this._nativeOscillatorNode!==null&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),Cf(this)}))}createMediaElementSource(h){return new s(this,{mediaElement:h})}createMediaStreamDestination(){return new r(this)}createMediaStreamSource(h){return new o(this,{mediaStream:h})}createMediaStreamTrackSource(h){return new a(this,{mediaStreamTrack:h})}resume(){return this._state==="suspended"?new Promise((h,u)=>{const d=()=>{this._nativeAudioContext.removeEventListener("statechange",d),this._nativeAudioContext.state==="running"?h():this.resume().then(h,u)};this._nativeAudioContext.addEventListener("statechange",d)}):this._nativeAudioContext.resume().catch(h=>{throw h===void 0||h.code===15?t():h})}suspend(){return this._nativeAudioContext.suspend().catch(h=>{throw h===void 0?t():h})}},OS=(i,t,e,n,s,r,o,a)=>class extends i{constructor(l,h){const u=r(l),d=o(u),f=s(u,h,d),g=d?t(a):null;super(l,!1,f,g),this._isNodeOfNativeOfflineAudioContext=d,this._nativeAudioDestinationNode=f}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(l>this._nativeAudioDestinationNode.maxChannelCount)throw e();this._nativeAudioDestinationNode.channelCount=l}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(l){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=l}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}},US=i=>{const t=new WeakMap,e=async(n,s)=>{const r=s.destination;return t.set(s,r),await i(n,s,r),r};return{render(n,s){const r=t.get(s);return r!==void 0?Promise.resolve(r):e(n,s)}}},FS=(i,t,e,n,s,r,o,a)=>(c,l)=>{const h=l.listener,u=()=>{const T=new Float32Array(1),b=t(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),E=o(l);let C=!1,S=[0,0,-1,0,1,0],M=[0,0,0];const D=()=>{if(C)return;C=!0;const U=n(l,256,9,0);U.onaudioprocess=({inputBuffer:F})=>{const V=[r(F,T,0),r(F,T,1),r(F,T,2),r(F,T,3),r(F,T,4),r(F,T,5)];V.some((W,Y)=>W!==S[Y])&&(h.setOrientation(...V),S=V);const X=[r(F,T,6),r(F,T,7),r(F,T,8)];X.some((W,Y)=>W!==M[Y])&&(h.setPosition(...X),M=X)},b.connect(U)},L=U=>F=>{F!==S[U]&&(S[U]=F,h.setOrientation(...S))},H=U=>F=>{F!==M[U]&&(M[U]=F,h.setPosition(...M))},P=(U,F,V)=>{const X=e(l,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:F});X.connect(b,0,U),X.start(),Object.defineProperty(X.offset,"defaultValue",{get(){return F}});const W=i({context:c},E,X.offset,Qe,rn);return a(W,"value",Y=>()=>Y.call(W),Y=>J=>{try{Y.call(W,J)}catch(tt){if(tt.code!==9)throw tt}D(),E&&V(J)}),W.cancelAndHoldAtTime=(Y=>E?()=>{throw s()}:(...J)=>{const tt=Y.apply(W,J);return D(),tt})(W.cancelAndHoldAtTime),W.cancelScheduledValues=(Y=>E?()=>{throw s()}:(...J)=>{const tt=Y.apply(W,J);return D(),tt})(W.cancelScheduledValues),W.exponentialRampToValueAtTime=(Y=>E?()=>{throw s()}:(...J)=>{const tt=Y.apply(W,J);return D(),tt})(W.exponentialRampToValueAtTime),W.linearRampToValueAtTime=(Y=>E?()=>{throw s()}:(...J)=>{const tt=Y.apply(W,J);return D(),tt})(W.linearRampToValueAtTime),W.setTargetAtTime=(Y=>E?()=>{throw s()}:(...J)=>{const tt=Y.apply(W,J);return D(),tt})(W.setTargetAtTime),W.setValueAtTime=(Y=>E?()=>{throw s()}:(...J)=>{const tt=Y.apply(W,J);return D(),tt})(W.setValueAtTime),W.setValueCurveAtTime=(Y=>E?()=>{throw s()}:(...J)=>{const tt=Y.apply(W,J);return D(),tt})(W.setValueCurveAtTime),W};return{forwardX:P(0,0,L(0)),forwardY:P(1,0,L(1)),forwardZ:P(2,-1,L(2)),positionX:P(6,0,H(0)),positionY:P(7,0,H(1)),positionZ:P(8,0,H(2)),upX:P(3,0,L(3)),upY:P(4,1,L(4)),upZ:P(5,0,L(5))}},{forwardX:d,forwardY:f,forwardZ:g,positionX:_,positionY:m,positionZ:p,upX:x,upY:v,upZ:y}=h.forwardX===void 0?u():h;return{get forwardX(){return d},get forwardY(){return f},get forwardZ(){return g},get positionX(){return _},get positionY(){return m},get positionZ(){return p},get upX(){return x},get upY(){return v},get upZ(){return y}}},ca=i=>"context"in i,no=i=>ca(i[0]),ms=(i,t,e,n)=>{for(const s of i)if(e(s)){if(n)return!1;throw Error("The set contains at least one similar element.")}return i.add(t),!0},od=(i,t,[e,n],s)=>{ms(i,[t,e,n],r=>r[0]===t&&r[1]===e,s)},ad=(i,[t,e,n],s)=>{const r=i.get(t);r===void 0?i.set(t,new Set([[e,n]])):ms(r,[e,n],o=>o[0]===e,s)},cr=i=>"inputs"in i,la=(i,t,e,n)=>{if(cr(t)){const s=t.inputs[n];return i.connect(s,e,0),[s,e,0]}return i.connect(t,e,n),[t,e,n]},Rf=(i,t,e)=>{for(const n of i)if(n[0]===t&&n[1]===e)return i.delete(n),n;return null},kS=(i,t,e)=>Ga(i,n=>n[0]===t&&n[1]===e),Pf=(i,t)=>{if(!Qr(i).delete(t))throw new Error("Missing the expected event listener.")},Df=(i,t,e)=>{const n=On(i,t),s=Ga(n,r=>r[0]===e);return n.size===0&&i.delete(t),s},ha=(i,t,e,n)=>{cr(t)?i.disconnect(t.inputs[n],e,0):i.disconnect(t,e,n)},ue=i=>On(Ul,i),Ur=i=>On(Fl,i),os=i=>fl.has(i),Zo=i=>!Zs.has(i),cd=(i,t)=>new Promise(e=>{if(t!==null)e(!0);else{const n=i.createScriptProcessor(256,1,1),s=i.createGain(),r=i.createBuffer(1,2,44100),o=r.getChannelData(0);o[0]=1,o[1]=1;const a=i.createBufferSource();a.buffer=r,a.loop=!0,a.connect(n).connect(i.destination),a.connect(s),a.disconnect(s),n.onaudioprocess=c=>{const l=c.inputBuffer.getChannelData(0);Array.prototype.some.call(l,h=>h===1)?e(!0):e(!1),a.stop(),n.onaudioprocess=null,a.disconnect(n),n.disconnect(i.destination)},a.start()}}),qc=(i,t)=>{const e=new Map;for(const n of i)for(const s of n){const r=e.get(s);e.set(s,r===void 0?1:r+1)}e.forEach((n,s)=>t(s,n))},ua=i=>"context"in i,BS=i=>{const t=new Map;i.connect=(e=>(n,s=0,r=0)=>{const o=ua(n)?e(n,s,r):e(n,s),a=t.get(n);return a===void 0?t.set(n,[{input:r,output:s}]):a.every(c=>c.input!==r||c.output!==s)&&a.push({input:r,output:s}),o})(i.connect.bind(i)),i.disconnect=(e=>(n,s,r)=>{if(e.apply(i),n===void 0)t.clear();else if(typeof n=="number")for(const[o,a]of t){const c=a.filter(l=>l.output!==n);c.length===0?t.delete(o):t.set(o,c)}else if(t.has(n))if(s===void 0)t.delete(n);else{const o=t.get(n);if(o!==void 0){const a=o.filter(c=>c.output!==s&&(c.input!==r||r===void 0));a.length===0?t.delete(n):t.set(n,a)}}for(const[o,a]of t)a.forEach(c=>{ua(o)?i.connect(o,c.output,c.input):i.connect(o,c.output)})})(i.disconnect)},VS=(i,t,e,n)=>{const{activeInputs:s,passiveInputs:r}=eo(t),{outputs:o}=tn(i),a=Qr(i),c=l=>{const h=ue(i),u=Ur(t);if(l){const d=Df(r,i,e);od(s,i,d,!1),!n&&!os(i)&&h.connect(u,e)}else{const d=kS(s,i,e);ad(r,d,!1),!n&&!os(i)&&h.disconnect(u,e)}};return ms(o,[t,e],l=>l[0]===t&&l[1]===e,!0)?(a.add(c),di(i)?od(s,i,[e,c],!0):ad(r,[i,e,c],!0),!0):!1},zS=(i,t,e,n)=>{const{activeInputs:s,passiveInputs:r}=tn(t),o=Rf(s[n],i,e);return o===null?[wf(r,i,e,n)[2],!1]:[o[2],!0]},GS=(i,t,e)=>{const{activeInputs:n,passiveInputs:s}=eo(t),r=Rf(n,i,e);return r===null?[Df(s,i,e)[1],!1]:[r[2],!0]},Bl=(i,t,e,n,s)=>{const[r,o]=zS(i,e,n,s);if(r!==null&&(Pf(i,r),o&&!t&&!os(i)&&ha(ue(i),ue(e),n,s)),di(e)){const{activeInputs:a}=tn(e);gl(e,a)}},Vl=(i,t,e,n)=>{const[s,r]=GS(i,e,n);s!==null&&(Pf(i,s),r&&!t&&!os(i)&&ue(i).disconnect(Ur(e),n))},HS=(i,t)=>{const e=tn(i),n=[];for(const s of e.outputs)no(s)?Bl(i,t,...s):Vl(i,t,...s),n.push(s[0]);return e.outputs.clear(),n},WS=(i,t,e)=>{const n=tn(i),s=[];for(const r of n.outputs)r[1]===e&&(no(r)?Bl(i,t,...r):Vl(i,t,...r),s.push(r[0]),n.outputs.delete(r));return s},qS=(i,t,e,n,s)=>{const r=tn(i);return Array.from(r.outputs).filter(o=>o[0]===e&&(n===void 0||o[1]===n)&&(s===void 0||o[2]===s)).map(o=>(no(o)?Bl(i,t,...o):Vl(i,t,...o),r.outputs.delete(o),o[0]))},XS=(i,t,e,n,s,r,o,a,c,l,h,u,d,f,g,_)=>class extends l{constructor(p,x,v,y){super(v),this._context=p,this._nativeAudioNode=v;const T=h(p);u(T)&&e(cd,()=>cd(T,_))!==!0&&BS(v),Ul.set(this,v),Tf.set(this,new Set),p.state!=="closed"&&x&&$s(this),i(this,y,v)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(p){this._nativeAudioNode.channelCount=p}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(p){this._nativeAudioNode.channelCountMode=p}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(p){this._nativeAudioNode.channelInterpretation=p}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(p,x=0,v=0){if(x<0||x>=this._nativeAudioNode.numberOfOutputs)throw s();const y=h(this._context),T=g(y);if(d(p)||f(p))throw r();if(ca(p)){const C=ue(p);try{const M=la(this._nativeAudioNode,C,x,v),D=Zo(this);(T||D)&&this._nativeAudioNode.disconnect(...M),this.context.state!=="closed"&&!D&&Zo(p)&&$s(p)}catch(M){throw M.code===12?r():M}if(t(this,p,x,v,T)){const M=c([this],p);qc(M,n(T))}return p}const b=Ur(p);if(b.name==="playbackRate"&&b.maxValue===1024)throw o();try{this._nativeAudioNode.connect(b,x),(T||Zo(this))&&this._nativeAudioNode.disconnect(b,x)}catch(C){throw C.code===12?r():C}if(VS(this,p,x,T)){const C=c([this],p);qc(C,n(T))}}disconnect(p,x,v){let y;const T=h(this._context),b=g(T);if(p===void 0)y=HS(this,b);else if(typeof p=="number"){if(p<0||p>=this.numberOfOutputs)throw s();y=WS(this,b,p)}else{if(x!==void 0&&(x<0||x>=this.numberOfOutputs)||ca(p)&&v!==void 0&&(v<0||v>=p.numberOfInputs))throw s();if(y=qS(this,b,p,x,v),y.length===0)throw r()}for(const E of y){const C=c([this],E);qc(C,a)}}},YS=(i,t,e,n,s,r,o,a,c,l,h,u,d)=>(f,g,_,m=null,p=null)=>{const x=_.value,v=new iS(x),y=g?n(v):null,T={get defaultValue(){return x},get maxValue(){return m===null?_.maxValue:m},get minValue(){return p===null?_.minValue:p},get value(){return _.value},set value(b){_.value=b,T.setValueAtTime(b,f.context.currentTime)},cancelAndHoldAtTime(b){if(typeof _.cancelAndHoldAtTime=="function")y===null&&v.flush(f.context.currentTime),v.add(s(b)),_.cancelAndHoldAtTime(b);else{const E=Array.from(v).pop();y===null&&v.flush(f.context.currentTime),v.add(s(b));const C=Array.from(v).pop();_.cancelScheduledValues(b),E!==C&&C!==void 0&&(C.type==="exponentialRampToValue"?_.exponentialRampToValueAtTime(C.value,C.endTime):C.type==="linearRampToValue"?_.linearRampToValueAtTime(C.value,C.endTime):C.type==="setValue"?_.setValueAtTime(C.value,C.startTime):C.type==="setValueCurve"&&_.setValueCurveAtTime(C.values,C.startTime,C.duration))}return T},cancelScheduledValues(b){return y===null&&v.flush(f.context.currentTime),v.add(r(b)),_.cancelScheduledValues(b),T},exponentialRampToValueAtTime(b,E){if(b===0)throw new RangeError;if(!Number.isFinite(E)||E<0)throw new RangeError;const C=f.context.currentTime;return y===null&&v.flush(C),Array.from(v).length===0&&(v.add(l(x,C)),_.setValueAtTime(x,C)),v.add(o(b,E)),_.exponentialRampToValueAtTime(b,E),T},linearRampToValueAtTime(b,E){const C=f.context.currentTime;return y===null&&v.flush(C),Array.from(v).length===0&&(v.add(l(x,C)),_.setValueAtTime(x,C)),v.add(a(b,E)),_.linearRampToValueAtTime(b,E),T},setTargetAtTime(b,E,C){return y===null&&v.flush(f.context.currentTime),v.add(c(b,E,C)),_.setTargetAtTime(b,E,C),T},setValueAtTime(b,E){return y===null&&v.flush(f.context.currentTime),v.add(l(b,E)),_.setValueAtTime(b,E),T},setValueCurveAtTime(b,E,C){const S=b instanceof Float32Array?b:new Float32Array(b);if(u!==null&&u.name==="webkitAudioContext"){const M=E+C,D=f.context.sampleRate,L=Math.ceil(E*D),H=Math.floor(M*D),P=H-L,U=new Float32Array(P);for(let V=0;V<P;V+=1){const X=(S.length-1)/C*((L+V)/D-E),W=Math.floor(X),Y=Math.ceil(X);U[V]=W===Y?S[W]:(1-(X-W))*S[W]+(1-(Y-X))*S[Y]}y===null&&v.flush(f.context.currentTime),v.add(h(U,E,C)),_.setValueCurveAtTime(U,E,C);const F=H/D;F<M&&d(T,U[U.length-1],F),d(T,S[S.length-1],M)}else y===null&&v.flush(f.context.currentTime),v.add(h(S,E,C)),_.setValueCurveAtTime(S,E,C);return T}};return e.set(T,_),t.set(T,f),i(T,y),T},jS=i=>({replay(t){for(const e of i)if(e.type==="exponentialRampToValue"){const{endTime:n,value:s}=e;t.exponentialRampToValueAtTime(s,n)}else if(e.type==="linearRampToValue"){const{endTime:n,value:s}=e;t.linearRampToValueAtTime(s,n)}else if(e.type==="setTarget"){const{startTime:n,target:s,timeConstant:r}=e;t.setTargetAtTime(s,n,r)}else if(e.type==="setValue"){const{startTime:n,value:s}=e;t.setValueAtTime(s,n)}else if(e.type==="setValueCurve"){const{duration:n,startTime:s,values:r}=e;t.setValueCurveAtTime(r,s,n)}else throw new Error("Can't apply an unknown automation.")}});class Lf{constructor(t){this._map=new Map(t)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(t,e=null){return this._map.forEach((n,s)=>t.call(e,n,s,this))}get(t){return this._map.get(t)}has(t){return this._map.has(t)}keys(){return this._map.keys()}values(){return this._map.values()}}const ZS={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}},$S=(i,t,e,n,s,r,o,a,c,l,h,u,d,f)=>class extends t{constructor(_,m,p){var x;const v=a(_),y=c(v),T=h({...ZS,...p});d(T);const b=pl.get(v),E=b?.get(m),C=y||v.state!=="closed"?v:(x=o(v))!==null&&x!==void 0?x:v,S=s(C,y?null:_.baseLatency,l,m,E,T),M=y?n(m,T,E):null;super(_,!0,S,M);const D=[];S.parameters.forEach((H,P)=>{const U=e(this,y,H);D.push([P,U])}),this._nativeAudioWorkletNode=S,this._onprocessorerror=null,this._parameters=new Lf(D),y&&i(v,this);const{activeInputs:L}=r(this);u(S,L)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(_){const m=typeof _=="function"?f(this,_):null;this._nativeAudioWorkletNode.onprocessorerror=m;const p=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=p!==null&&p===m?_:p}get parameters(){return this._parameters===null?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}};function da(i,t,e,n,s){if(typeof i.copyFromChannel=="function")t[e].byteLength===0&&(t[e]=new Float32Array(128)),i.copyFromChannel(t[e],n,s);else{const r=i.getChannelData(n);if(t[e].byteLength===0)t[e]=r.slice(s,s+128);else{const o=new Float32Array(r.buffer,s*Float32Array.BYTES_PER_ELEMENT,128);t[e].set(o)}}}const Nf=(i,t,e,n,s)=>{typeof i.copyToChannel=="function"?t[e].byteLength!==0&&i.copyToChannel(t[e],n,s):t[e].byteLength!==0&&i.getChannelData(n).set(t[e],s)},fa=(i,t)=>{const e=[];for(let n=0;n<i;n+=1){const s=[],r=typeof t=="number"?t:t[n];for(let o=0;o<r;o+=1)s.push(new Float32Array(128));e.push(s)}return e},JS=(i,t)=>{const e=On(ml,i),n=ue(t);return On(e,n)},KS=async(i,t,e,n,s,r,o)=>{const a=t===null?Math.ceil(i.context.length/128)*128:t.length,c=n.channelCount*n.numberOfInputs,l=s.reduce((m,p)=>m+p,0),h=l===0?null:e.createBuffer(l,a,e.sampleRate);if(r===void 0)throw new Error("Missing the processor constructor.");const u=tn(i),d=await JS(e,i),f=fa(n.numberOfInputs,n.channelCount),g=fa(n.numberOfOutputs,s),_=Array.from(i.parameters.keys()).reduce((m,p)=>({...m,[p]:new Float32Array(128)}),{});for(let m=0;m<a;m+=128){if(n.numberOfInputs>0&&t!==null)for(let p=0;p<n.numberOfInputs;p+=1)for(let x=0;x<n.channelCount;x+=1)da(t,f[p],x,x,m);r.parameterDescriptors!==void 0&&t!==null&&r.parameterDescriptors.forEach(({name:p},x)=>{da(t,_,p,c+x,m)});for(let p=0;p<n.numberOfInputs;p+=1)for(let x=0;x<s[p];x+=1)g[p][x].byteLength===0&&(g[p][x]=new Float32Array(128));try{const p=f.map((v,y)=>u.activeInputs[y].size===0?[]:v),x=o(m/e.sampleRate,e.sampleRate,()=>d.process(p,g,_));if(h!==null)for(let v=0,y=0;v<n.numberOfOutputs;v+=1){for(let T=0;T<s[v];T+=1)Nf(h,g[v],T,y+T,m);y+=s[v]}if(!x)break}catch(p){i.dispatchEvent(new ErrorEvent("processorerror",{colno:p.colno,filename:p.filename,lineno:p.lineno,message:p.message}));break}}return h},QS=(i,t,e,n,s,r,o,a,c,l,h,u,d,f,g,_)=>(m,p,x)=>{const v=new WeakMap;let y=null;const T=async(b,E)=>{let C=h(b),S=null;const M=Ye(C,E),D=Array.isArray(p.outputChannelCount)?p.outputChannelCount:Array.from(p.outputChannelCount);if(u===null){const L=D.reduce((F,V)=>F+V,0),H=s(E,{channelCount:Math.max(1,L),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,L)}),P=[];for(let F=0;F<b.numberOfOutputs;F+=1)P.push(n(E,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:D[F]}));const U=o(E,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1});U.connect=t.bind(null,P),U.disconnect=c.bind(null,P),S=[H,P,U]}else M||(C=new u(E,m));if(v.set(E,S===null?C:S[2]),S!==null){if(y===null){if(x===void 0)throw new Error("Missing the processor constructor.");if(d===null)throw new Error("Missing the native OfflineAudioContext constructor.");const V=b.channelCount*b.numberOfInputs,X=x.parameterDescriptors===void 0?0:x.parameterDescriptors.length,W=V+X;y=KS(b,W===0?null:await(async()=>{const J=new d(W,Math.ceil(b.context.length/128)*128,E.sampleRate),tt=[],Z=[];for(let dt=0;dt<p.numberOfInputs;dt+=1)tt.push(o(J,{channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,gain:1})),Z.push(s(J,{channelCount:p.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:p.channelCount}));const et=await Promise.all(Array.from(b.parameters.values()).map(async dt=>{const ft=r(J,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:dt.value});return await f(J,dt,ft.offset),ft})),nt=n(J,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,V+X)});for(let dt=0;dt<p.numberOfInputs;dt+=1){tt[dt].connect(Z[dt]);for(let ft=0;ft<p.channelCount;ft+=1)Z[dt].connect(nt,ft,dt*p.channelCount+ft)}for(const[dt,ft]of et.entries())ft.connect(nt,0,V+dt),ft.start(0);return nt.connect(J.destination),await Promise.all(tt.map(dt=>g(b,J,dt))),_(J)})(),E,p,D,x,l)}const L=await y,H=e(E,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[P,U,F]=S;L!==null&&(H.buffer=L,H.start(0)),H.connect(P);for(let V=0,X=0;V<b.numberOfOutputs;V+=1){const W=U[V];for(let Y=0;Y<D[V];Y+=1)P.connect(W,X+Y,Y);X+=D[V]}return F}if(M)for(const[L,H]of b.parameters.entries())await i(E,H,C.parameters.get(L));else for(const[L,H]of b.parameters.entries())await f(E,H,C.parameters.get(L));return await g(b,E,C),C};return{render(b,E){a(E,b);const C=v.get(E);return C!==void 0?Promise.resolve(C):T(b,E)}}},tM=(i,t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m,p,x,v)=>class extends g{constructor(T,b){super(T,b),this._nativeContext=T,this._audioWorklet=i===void 0?void 0:{addModule:(E,C)=>i(this,E,C)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new t(this)}createBiquadFilter(){return new s(this)}createBuffer(T,b,E){return new e({length:b,numberOfChannels:T,sampleRate:E})}createBufferSource(){return new n(this)}createChannelMerger(T=6){return new r(this,{numberOfInputs:T})}createChannelSplitter(T=6){return new o(this,{numberOfOutputs:T})}createConstantSource(){return new a(this)}createConvolver(){return new c(this)}createDelay(T=1){return new h(this,{maxDelayTime:T})}createDynamicsCompressor(){return new u(this)}createGain(){return new d(this)}createIIRFilter(T,b){return new f(this,{feedback:b,feedforward:T})}createOscillator(){return new _(this)}createPanner(){return new m(this)}createPeriodicWave(T,b,E={disableNormalization:!1}){return new p(this,{...E,imag:b,real:T})}createStereoPanner(){return new x(this)}createWaveShaper(){return new v(this)}decodeAudioData(T,b,E){return l(this._nativeContext,T).then(C=>(typeof b=="function"&&b(C),C),C=>{throw typeof E=="function"&&E(C),C})}},eM={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},nM=(i,t,e,n,s,r,o,a)=>class extends i{constructor(l,h){const u=r(l),d={...eM,...h},f=s(u,d),g=o(u),_=g?e():null;super(l,!1,f,_),this._Q=t(this,g,f.Q,Qe,rn),this._detune=t(this,g,f.detune,1200*Math.log2(Qe),-1200*Math.log2(Qe)),this._frequency=t(this,g,f.frequency,l.sampleRate/2,0),this._gain=t(this,g,f.gain,40*Math.log10(Qe),rn),this._nativeBiquadFilterNode=f,a(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(l){this._nativeBiquadFilterNode.type=l}getFrequencyResponse(l,h,u){try{this._nativeBiquadFilterNode.getFrequencyResponse(l,h,u)}catch(d){throw d.code===11?n():d}if(l.length!==h.length||h.length!==u.length)throw n()}},iM=(i,t,e,n,s)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=e(a);const h=Ye(l,c);if(!h){const u={Q:l.Q.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,detune:l.detune.value,frequency:l.frequency.value,gain:l.gain.value,type:l.type};l=t(c,u)}return r.set(c,l),h?(await i(c,a.Q,l.Q),await i(c,a.detune,l.detune),await i(c,a.frequency,l.frequency),await i(c,a.gain,l.gain)):(await n(c,a.Q,l.Q),await n(c,a.detune,l.detune),await n(c,a.frequency,l.frequency),await n(c,a.gain,l.gain)),await s(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},sM=(i,t)=>(e,n)=>{const s=t.get(e);if(s!==void 0)return s;const r=i.get(e);if(r!==void 0)return r;try{const o=n();return o instanceof Promise?(i.set(e,o),o.catch(()=>!1).then(a=>(i.delete(e),t.set(e,a),a))):(t.set(e,o),o)}catch{return t.set(e,!1),!1}},rM={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},oM=(i,t,e,n,s)=>class extends i{constructor(o,a){const c=n(o),l={...rM,...a},h=e(c,l),u=s(c)?t():null;super(o,!1,h,u)}},aM=(i,t,e)=>()=>{const n=new WeakMap,s=async(r,o)=>{let a=t(r);if(!Ye(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfInputs:a.numberOfInputs};a=i(o,l)}return n.set(o,a),await e(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}},cM={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},lM=(i,t,e,n,s,r)=>class extends i{constructor(a,c){const l=n(a),h=r({...cM,...c}),u=e(l,h),d=s(l)?t():null;super(a,!1,u,d)}},hM=(i,t,e)=>()=>{const n=new WeakMap,s=async(r,o)=>{let a=t(r);if(!Ye(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfOutputs:a.numberOfOutputs};a=i(o,l)}return n.set(o,a),await e(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}},uM=i=>(t,e,n)=>i(e,t,n),dM=i=>(t,e,n=0,s=0)=>{const r=t[n];if(r===void 0)throw i();return ua(e)?r.connect(e,0,s):r.connect(e,0)},fM=i=>(t,e)=>{const n=i(t,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),s=t.createBuffer(1,2,44100);return n.buffer=s,n.loop=!0,n.connect(e),n.start(),()=>{n.stop(),n.disconnect(e)}},pM={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},mM=(i,t,e,n,s,r,o)=>class extends i{constructor(c,l){const h=s(c),u={...pM,...l},d=n(h,u),f=r(h),g=f?e():null;super(c,!1,d,g),this._constantSourceNodeRenderer=g,this._nativeConstantSourceNode=d,this._offset=t(this,f,d.offset,Qe,rn),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeConstantSourceNode.onended=l;const h=this._nativeConstantSourceNode.onended;this._onended=h!==null&&h===l?c:h}start(c=0){if(this._nativeConstantSourceNode.start(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.start=c),this.context.state!=="closed"){$s(this);const l=()=>{this._nativeConstantSourceNode.removeEventListener("ended",l),di(this)&&to(this)};this._nativeConstantSourceNode.addEventListener("ended",l)}}stop(c=0){this._nativeConstantSourceNode.stop(c),this._constantSourceNodeRenderer!==null&&(this._constantSourceNodeRenderer.stop=c)}},gM=(i,t,e,n,s)=>()=>{const r=new WeakMap;let o=null,a=null;const c=async(l,h)=>{let u=e(l);const d=Ye(u,h);if(!d){const f={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,offset:u.offset.value};u=t(h,f),o!==null&&u.start(o),a!==null&&u.stop(a)}return r.set(h,u),d?await i(h,l.offset,u.offset):await n(h,l.offset,u.offset),await s(l,h,u),u};return{set start(l){o=l},set stop(l){a=l},render(l,h){const u=r.get(h);return u!==void 0?Promise.resolve(u):c(l,h)}}},_M=i=>t=>(i[0]=t,i[0]),vM={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},xM=(i,t,e,n,s,r)=>class extends i{constructor(a,c){const l=n(a),h={...vM,...c},u=e(l,h),f=s(l)?t():null;super(a,!1,u,f),this._isBufferNullified=!1,this._nativeConvolverNode=u,h.buffer!==null&&r(this,h.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(a){if(this._nativeConvolverNode.buffer=a,a===null&&this._nativeConvolverNode.buffer!==null){const c=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=c.createBuffer(1,1,c.sampleRate),this._isBufferNullified=!0,r(this,0)}else this._isBufferNullified=!1,r(this,this._nativeConvolverNode.buffer===null?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(a){this._nativeConvolverNode.normalize=a}},yM=(i,t,e)=>()=>{const n=new WeakMap,s=async(r,o)=>{let a=t(r);if(!Ye(a,o)){const l={buffer:a.buffer,channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,disableNormalization:!a.normalize};a=i(o,l)}return n.set(o,a),cr(a)?await e(r,o,a.inputs[0]):await e(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}},SM=(i,t)=>(e,n,s)=>{if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new t(e,n,s)}catch(r){throw r.name==="SyntaxError"?i():r}},MM=()=>new DOMException("","DataCloneError"),ld=i=>{const{port1:t,port2:e}=new MessageChannel;return new Promise(n=>{const s=()=>{e.onmessage=null,t.close(),e.close(),n()};e.onmessage=()=>s();try{t.postMessage(i,[i])}catch{}finally{s()}})},TM=(i,t,e,n,s,r,o,a,c,l,h)=>(u,d)=>{const f=o(u)?u:r(u);if(s.has(d)){const g=e();return Promise.reject(g)}try{s.add(d)}catch{}return t(c,()=>c(f))?f.decodeAudioData(d).then(g=>(ld(d).catch(()=>{}),t(a,()=>a(g))||h(g),i.add(g),g)):new Promise((g,_)=>{const m=async()=>{try{await ld(d)}catch{}},p=x=>{_(x),m()};try{f.decodeAudioData(d,x=>{typeof x.copyFromChannel!="function"&&(l(x),kl(x)),i.add(x),m().then(()=>g(x))},x=>{p(x===null?n():x)})}catch(x){p(x)}})},bM=(i,t,e,n,s,r,o,a)=>(c,l)=>{const h=t.get(c);if(h===void 0)throw new Error("Missing the expected cycle count.");const u=r(c.context),d=a(u);if(h===l){if(t.delete(c),!d&&o(c)){const f=n(c),{outputs:g}=e(c);for(const _ of g)if(no(_)){const m=n(_[0]);i(f,m,_[1],_[2])}else{const m=s(_[0]);f.connect(m,_[1])}}}else t.set(c,h-l)},wM={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},EM=(i,t,e,n,s,r,o)=>class extends i{constructor(c,l){const h=s(c),u={...wM,...l},d=n(h,u),f=r(h),g=f?e(u.maxDelayTime):null;super(c,!1,d,g),this._delayTime=t(this,f,d.delayTime),o(this,u.maxDelayTime)}get delayTime(){return this._delayTime}},AM=(i,t,e,n,s)=>r=>{const o=new WeakMap,a=async(c,l)=>{let h=e(c);const u=Ye(h,l);if(!u){const d={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,delayTime:h.delayTime.value,maxDelayTime:r};h=t(l,d)}return o.set(l,h),u?await i(l,c.delayTime,h.delayTime):await n(l,c.delayTime,h.delayTime),await s(c,l,h),h};return{render(c,l){const h=o.get(l);return h!==void 0?Promise.resolve(h):a(c,l)}}},CM=i=>(t,e,n,s)=>i(t[s],r=>r[0]===e&&r[1]===n),RM=i=>(t,e)=>{i(t).delete(e)},PM=i=>"delayTime"in i,DM=(i,t,e)=>function n(s,r){const o=ca(r)?r:e(i,r);if(PM(o))return[];if(s[0]===o)return[s];if(s.includes(o))return[];const{outputs:a}=t(o);return Array.from(a).map(c=>n([...s,o],c[0])).reduce((c,l)=>c.concat(l),[])},qo=(i,t,e)=>{const n=t[e];if(n===void 0)throw i();return n},LM=i=>(t,e=void 0,n=void 0,s=0)=>e===void 0?t.forEach(r=>r.disconnect()):typeof e=="number"?qo(i,t,e).disconnect():ua(e)?n===void 0?t.forEach(r=>r.disconnect(e)):s===void 0?qo(i,t,n).disconnect(e,0):qo(i,t,n).disconnect(e,0,s):n===void 0?t.forEach(r=>r.disconnect(e)):qo(i,t,n).disconnect(e,0),NM={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},IM=(i,t,e,n,s,r,o,a)=>class extends i{constructor(l,h){const u=r(l),d={...NM,...h},f=n(u,d),g=o(u),_=g?e():null;super(l,!1,f,_),this._attack=t(this,g,f.attack),this._knee=t(this,g,f.knee),this._nativeDynamicsCompressorNode=f,this._ratio=t(this,g,f.ratio),this._release=t(this,g,f.release),this._threshold=t(this,g,f.threshold),a(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(l){const h=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=l,l>2)throw this._nativeDynamicsCompressorNode.channelCount=h,s()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(l){const h=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=l,l==="max")throw this._nativeDynamicsCompressorNode.channelCountMode=h,s()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return typeof this._nativeDynamicsCompressorNode.reduction.value=="number"?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}},OM=(i,t,e,n,s)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=e(a);const h=Ye(l,c);if(!h){const u={attack:l.attack.value,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,knee:l.knee.value,ratio:l.ratio.value,release:l.release.value,threshold:l.threshold.value};l=t(c,u)}return r.set(c,l),h?(await i(c,a.attack,l.attack),await i(c,a.knee,l.knee),await i(c,a.ratio,l.ratio),await i(c,a.release,l.release),await i(c,a.threshold,l.threshold)):(await n(c,a.attack,l.attack),await n(c,a.knee,l.knee),await n(c,a.ratio,l.ratio),await n(c,a.release,l.release),await n(c,a.threshold,l.threshold)),await s(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},UM=()=>new DOMException("","EncodingError"),FM=i=>t=>new Promise((e,n)=>{if(i===null){n(new SyntaxError);return}const s=i.document.head;if(s===null)n(new SyntaxError);else{const r=i.document.createElement("script"),o=new Blob([t],{type:"application/javascript"}),a=URL.createObjectURL(o),c=i.onerror,l=()=>{i.onerror=c,URL.revokeObjectURL(a)};i.onerror=(h,u,d,f,g)=>{if(u===a||u===i.location.href&&d===1&&f===1)return l(),n(g),!1;if(c!==null)return c(h,u,d,f,g)},r.onerror=()=>{l(),n(new SyntaxError)},r.onload=()=>{l(),e()},r.src=a,r.type="module",s.appendChild(r)}}),kM=i=>class{constructor(e){this._nativeEventTarget=e,this._listeners=new WeakMap}addEventListener(e,n,s){if(n!==null){let r=this._listeners.get(n);r===void 0&&(r=i(this,n),typeof n=="function"&&this._listeners.set(n,r)),this._nativeEventTarget.addEventListener(e,r,s)}}dispatchEvent(e){return this._nativeEventTarget.dispatchEvent(e)}removeEventListener(e,n,s){const r=n===null?void 0:this._listeners.get(n);this._nativeEventTarget.removeEventListener(e,r===void 0?null:r,s)}},BM=i=>(t,e,n)=>{Object.defineProperties(i,{currentFrame:{configurable:!0,get(){return Math.round(t*e)}},currentTime:{configurable:!0,get(){return t}}});try{return n()}finally{i!==null&&(delete i.currentFrame,delete i.currentTime)}},VM=i=>async t=>{try{const e=await fetch(t);if(e.ok)return[await e.text(),e.url]}catch{}throw i()},zM={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},GM=(i,t,e,n,s,r)=>class extends i{constructor(a,c){const l=s(a),h={...zM,...c},u=n(l,h),d=r(l),f=d?e():null;super(a,!1,u,f),this._gain=t(this,d,u.gain,Qe,rn)}get gain(){return this._gain}},HM=(i,t,e,n,s)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=e(a);const h=Ye(l,c);if(!h){const u={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,gain:l.gain.value};l=t(c,u)}return r.set(c,l),h?await i(c,a.gain,l.gain):await n(c,a.gain,l.gain),await s(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},WM=(i,t)=>e=>t(i,e),qM=i=>t=>{const e=i(t);if(e.renderer===null)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return e.renderer},XM=i=>t=>{var e;return(e=i.get(t))!==null&&e!==void 0?e:0},YM=i=>t=>{const e=i(t);if(e.renderer===null)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return e.renderer},jM=i=>t=>i.get(t),Ue=()=>new DOMException("","InvalidStateError"),ZM=i=>t=>{const e=i.get(t);if(e===void 0)throw Ue();return e},$M=(i,t)=>e=>{let n=i.get(e);if(n!==void 0)return n;if(t===null)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new t(1,1,44100),i.set(e,n),n},JM=i=>t=>{const e=i.get(t);if(e===void 0)throw new Error("The context has no set of AudioWorkletNodes.");return e},Ha=()=>new DOMException("","InvalidAccessError"),KM=i=>{i.getFrequencyResponse=(t=>(e,n,s)=>{if(e.length!==n.length||n.length!==s.length)throw Ha();return t.call(i,e,n,s)})(i.getFrequencyResponse)},QM={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},tT=(i,t,e,n,s,r)=>class extends i{constructor(a,c){const l=n(a),h=s(l),u={...QM,...c},d=t(l,h?null:a.baseLatency,u),f=h?e(u.feedback,u.feedforward):null;super(a,!1,d,f),KM(d),this._nativeIIRFilterNode=d,r(this,1)}getFrequencyResponse(a,c,l){return this._nativeIIRFilterNode.getFrequencyResponse(a,c,l)}},If=(i,t,e,n,s,r,o,a,c,l,h)=>{const u=l.length;let d=a;for(let f=0;f<u;f+=1){let g=e[0]*l[f];for(let _=1;_<s;_+=1){const m=d-_&c-1;g+=e[_]*r[m],g-=i[_]*o[m]}for(let _=s;_<n;_+=1)g+=e[_]*r[d-_&c-1];for(let _=s;_<t;_+=1)g-=i[_]*o[d-_&c-1];r[d]=l[f],o[d]=g,d=d+1&c-1,h[f]=g}return d},eT=(i,t,e,n)=>{const s=e instanceof Float64Array?e:new Float64Array(e),r=n instanceof Float64Array?n:new Float64Array(n),o=s.length,a=r.length,c=Math.min(o,a);if(s[0]!==1){for(let g=0;g<o;g+=1)r[g]/=s[0];for(let g=1;g<a;g+=1)s[g]/=s[0]}const l=32,h=new Float32Array(l),u=new Float32Array(l),d=t.createBuffer(i.numberOfChannels,i.length,i.sampleRate),f=i.numberOfChannels;for(let g=0;g<f;g+=1){const _=i.getChannelData(g),m=d.getChannelData(g);h.fill(0),u.fill(0),If(s,o,r,a,c,h,u,0,l,_,m)}return d},nT=(i,t,e,n,s)=>(r,o)=>{const a=new WeakMap;let c=null;const l=async(h,u)=>{let d=null,f=t(h);const g=Ye(f,u);if(u.createIIRFilter===void 0?d=i(u,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):g||(f=u.createIIRFilter(o,r)),a.set(u,d===null?f:d),d!==null){if(c===null){if(e===null)throw new Error("Missing the native OfflineAudioContext constructor.");const m=new e(h.context.destination.channelCount,h.context.length,u.sampleRate);c=(async()=>{await n(h,m,m.destination);const p=await s(m);return eT(p,u,r,o)})()}const _=await c;return d.buffer=_,d.start(0),d}return await n(h,u,f),f};return{render(h,u){const d=a.get(u);return d!==void 0?Promise.resolve(d):l(h,u)}}},iT=(i,t,e,n,s,r)=>o=>(a,c)=>{const l=i.get(a);if(l===void 0){if(!o&&r(a)){const h=n(a),{outputs:u}=e(a);for(const d of u)if(no(d)){const f=n(d[0]);t(h,f,d[1],d[2])}else{const f=s(d[0]);h.disconnect(f,d[1])}}i.set(a,c)}else i.set(a,l+c)},sT=(i,t)=>e=>{const n=i.get(e);return t(n)||t(e)},rT=(i,t)=>e=>i.has(e)||t(e),oT=(i,t)=>e=>i.has(e)||t(e),aT=(i,t)=>e=>{const n=i.get(e);return t(n)||t(e)},cT=i=>t=>i!==null&&t instanceof i,lT=i=>t=>i!==null&&typeof i.AudioNode=="function"&&t instanceof i.AudioNode,hT=i=>t=>i!==null&&typeof i.AudioParam=="function"&&t instanceof i.AudioParam,uT=(i,t)=>e=>i(e)||t(e),dT=i=>t=>i!==null&&t instanceof i,fT=i=>i!==null&&i.isSecureContext,pT=(i,t,e,n)=>class extends i{constructor(r,o){const a=e(r),c=t(a,o);if(n(a))throw TypeError();super(r,!0,c,null),this._nativeMediaElementAudioSourceNode=c}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}},mT={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},gT=(i,t,e,n)=>class extends i{constructor(r,o){const a=e(r);if(n(a))throw new TypeError;const c={...mT,...o},l=t(a,c);super(r,!1,l,null),this._nativeMediaStreamAudioDestinationNode=l}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}},_T=(i,t,e,n)=>class extends i{constructor(r,o){const a=e(r),c=t(a,o);if(n(a))throw new TypeError;super(r,!0,c,null),this._nativeMediaStreamAudioSourceNode=c}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}},vT=(i,t,e)=>class extends i{constructor(s,r){const o=e(s),a=t(o,r);super(s,!0,a,null)}},xT=(i,t,e,n,s,r)=>class extends e{constructor(a,c){super(a),this._nativeContext=a,za.set(this,a),n(a)&&s.set(a,new Set),this._destination=new i(this,c),this._listener=t(this,a),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(a){const c=typeof a=="function"?r(this,a):null;this._nativeContext.onstatechange=c;const l=this._nativeContext.onstatechange;this._onstatechange=l!==null&&l===c?a:l}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}},Fr=i=>{const t=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const e=i.decodeAudioData(t.buffer,()=>{});return e===void 0?!1:(e.catch(()=>{}),!0)}catch{}return!1},yT=(i,t)=>(e,n,s)=>{const r=new Set;return e.connect=(o=>(a,c=0,l=0)=>{const h=r.size===0;if(t(a))return o.call(e,a,c,l),i(r,[a,c,l],u=>u[0]===a&&u[1]===c&&u[2]===l,!0),h&&n(),a;o.call(e,a,c),i(r,[a,c],u=>u[0]===a&&u[1]===c,!0),h&&n()})(e.connect),e.disconnect=(o=>(a,c,l)=>{const h=r.size>0;if(a===void 0)o.apply(e),r.clear();else if(typeof a=="number"){o.call(e,a);for(const d of r)d[1]===a&&r.delete(d)}else{t(a)?o.call(e,a,c,l):o.call(e,a,c);for(const d of r)d[0]===a&&(c===void 0||d[1]===c)&&(l===void 0||d[2]===l)&&r.delete(d)}const u=r.size===0;h&&u&&s()})(e.disconnect),e},fe=(i,t,e)=>{const n=t[e];n!==void 0&&n!==i[e]&&(i[e]=n)},De=(i,t)=>{fe(i,t,"channelCount"),fe(i,t,"channelCountMode"),fe(i,t,"channelInterpretation")},hd=i=>typeof i.getFloatTimeDomainData=="function",ST=i=>{i.getFloatTimeDomainData=t=>{const e=new Uint8Array(t.length);i.getByteTimeDomainData(e);const n=Math.max(e.length,i.fftSize);for(let s=0;s<n;s+=1)t[s]=(e[s]-128)*.0078125;return t}},MT=(i,t)=>(e,n)=>{const s=e.createAnalyser();if(De(s,n),!(n.maxDecibels>n.minDecibels))throw t();return fe(s,n,"fftSize"),fe(s,n,"maxDecibels"),fe(s,n,"minDecibels"),fe(s,n,"smoothingTimeConstant"),i(hd,()=>hd(s))||ST(s),s},TT=i=>i===null?null:i.hasOwnProperty("AudioBuffer")?i.AudioBuffer:null,Se=(i,t,e)=>{const n=t[e];n!==void 0&&n!==i[e].value&&(i[e].value=n)},bT=i=>{i.start=(t=>{let e=!1;return(n=0,s=0,r)=>{if(e)throw Ue();t.call(i,n,s,r),e=!0}})(i.start)},zl=i=>{i.start=(t=>(e=0,n=0,s)=>{if(typeof s=="number"&&s<0||n<0||e<0)throw new RangeError("The parameters can't be negative.");t.call(i,e,n,s)})(i.start)},Gl=i=>{i.stop=(t=>(e=0)=>{if(e<0)throw new RangeError("The parameter can't be negative.");t.call(i,e)})(i.stop)},wT=(i,t,e,n,s,r,o,a,c,l,h)=>(u,d)=>{const f=u.createBufferSource();return De(f,d),Se(f,d,"playbackRate"),fe(f,d,"buffer"),fe(f,d,"loop"),fe(f,d,"loopEnd"),fe(f,d,"loopStart"),t(e,()=>e(u))||bT(f),t(n,()=>n(u))||c(f),t(s,()=>s(u))||l(f,u),t(r,()=>r(u))||zl(f),t(o,()=>o(u))||h(f,u),t(a,()=>a(u))||Gl(f),i(u,f),f},ET=i=>i===null?null:i.hasOwnProperty("AudioContext")?i.AudioContext:i.hasOwnProperty("webkitAudioContext")?i.webkitAudioContext:null,AT=(i,t)=>(e,n,s)=>{const r=e.destination;if(r.channelCount!==n)try{r.channelCount=n}catch{}s&&r.channelCountMode!=="explicit"&&(r.channelCountMode="explicit"),r.maxChannelCount===0&&Object.defineProperty(r,"maxChannelCount",{value:n});const o=i(e,{channelCount:n,channelCountMode:r.channelCountMode,channelInterpretation:r.channelInterpretation,gain:1});return t(o,"channelCount",a=>()=>a.call(o),a=>c=>{a.call(o,c);try{r.channelCount=c}catch(l){if(c>r.maxChannelCount)throw l}}),t(o,"channelCountMode",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelCountMode=c}),t(o,"channelInterpretation",a=>()=>a.call(o),a=>c=>{a.call(o,c),r.channelInterpretation=c}),Object.defineProperty(o,"maxChannelCount",{get:()=>r.maxChannelCount}),o.connect(r),o},CT=i=>i===null?null:i.hasOwnProperty("AudioWorkletNode")?i.AudioWorkletNode:null,RT=i=>{const{port1:t}=new MessageChannel;try{t.postMessage(i)}finally{t.close()}},PT=(i,t,e,n,s)=>(r,o,a,c,l,h)=>{if(a!==null)try{const u=new a(r,c,h),d=new Map;let f=null;if(Object.defineProperties(u,{channelCount:{get:()=>h.channelCount,set:()=>{throw i()}},channelCountMode:{get:()=>"explicit",set:()=>{throw i()}},onprocessorerror:{get:()=>f,set:g=>{typeof f=="function"&&u.removeEventListener("processorerror",f),f=typeof g=="function"?g:null,typeof f=="function"&&u.addEventListener("processorerror",f)}}}),u.addEventListener=(g=>(..._)=>{if(_[0]==="processorerror"){const m=typeof _[1]=="function"?_[1]:typeof _[1]=="object"&&_[1]!==null&&typeof _[1].handleEvent=="function"?_[1].handleEvent:null;if(m!==null){const p=d.get(_[1]);p!==void 0?_[1]=p:(_[1]=x=>{x.type==="error"?(Object.defineProperties(x,{type:{value:"processorerror"}}),m(x)):m(new ErrorEvent(_[0],{...x}))},d.set(m,_[1]))}}return g.call(u,"error",_[1],_[2]),g.call(u,..._)})(u.addEventListener),u.removeEventListener=(g=>(..._)=>{if(_[0]==="processorerror"){const m=d.get(_[1]);m!==void 0&&(d.delete(_[1]),_[1]=m)}return g.call(u,"error",_[1],_[2]),g.call(u,_[0],_[1],_[2])})(u.removeEventListener),h.numberOfOutputs!==0){const g=e(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return u.connect(g).connect(r.destination),s(u,()=>g.disconnect(),()=>g.connect(r.destination))}return u}catch(u){throw u.code===11?n():u}if(l===void 0)throw n();return RT(h),t(r,o,l,h)},Of=(i,t)=>i===null?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(i*t))))),DT=i=>new Promise((t,e)=>{const{port1:n,port2:s}=new MessageChannel;n.onmessage=({data:r})=>{n.close(),s.close(),t(r)},n.onmessageerror=({data:r})=>{n.close(),s.close(),e(r)},s.postMessage(i)}),LT=async(i,t)=>{const e=await DT(t);return new i(e)},NT=(i,t,e,n)=>{let s=ml.get(i);s===void 0&&(s=new WeakMap,ml.set(i,s));const r=LT(e,n);return s.set(t,r),r},IT=(i,t,e,n,s,r,o,a,c,l,h,u,d)=>(f,g,_,m)=>{if(m.numberOfInputs===0&&m.numberOfOutputs===0)throw c();const p=Array.isArray(m.outputChannelCount)?m.outputChannelCount:Array.from(m.outputChannelCount);if(p.some(q=>q<1))throw c();if(p.length!==m.numberOfOutputs)throw t();if(m.channelCountMode!=="explicit")throw c();const x=m.channelCount*m.numberOfInputs,v=p.reduce((q,z)=>q+z,0),y=_.parameterDescriptors===void 0?0:_.parameterDescriptors.length;if(x+y>6||v>6)throw c();const T=new MessageChannel,b=[],E=[];for(let q=0;q<m.numberOfInputs;q+=1)b.push(o(f,{channelCount:m.channelCount,channelCountMode:m.channelCountMode,channelInterpretation:m.channelInterpretation,gain:1})),E.push(s(f,{channelCount:m.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:m.channelCount}));const C=[];if(_.parameterDescriptors!==void 0)for(const{defaultValue:q,maxValue:z,minValue:_t,name:lt}of _.parameterDescriptors){const A=r(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:m.parameterData[lt]!==void 0?m.parameterData[lt]:q===void 0?0:q});Object.defineProperties(A.offset,{defaultValue:{get:()=>q===void 0?0:q},maxValue:{get:()=>z===void 0?Qe:z},minValue:{get:()=>_t===void 0?rn:_t}}),C.push(A)}const S=n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,x+y)}),M=Of(g,f.sampleRate),D=a(f,M,x+y,Math.max(1,v)),L=s(f,{channelCount:Math.max(1,v),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,v)}),H=[];for(let q=0;q<m.numberOfOutputs;q+=1)H.push(n(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:p[q]}));for(let q=0;q<m.numberOfInputs;q+=1){b[q].connect(E[q]);for(let z=0;z<m.channelCount;z+=1)E[q].connect(S,z,q*m.channelCount+z)}const P=new Lf(_.parameterDescriptors===void 0?[]:_.parameterDescriptors.map(({name:q},z)=>{const _t=C[z];return _t.connect(S,0,x+z),_t.start(0),[q,_t.offset]}));S.connect(D);let U=m.channelInterpretation,F=null;const V=m.numberOfOutputs===0?[D]:H,X={get bufferSize(){return M},get channelCount(){return m.channelCount},set channelCount(q){throw e()},get channelCountMode(){return m.channelCountMode},set channelCountMode(q){throw e()},get channelInterpretation(){return U},set channelInterpretation(q){for(const z of b)z.channelInterpretation=q;U=q},get context(){return D.context},get inputs(){return b},get numberOfInputs(){return m.numberOfInputs},get numberOfOutputs(){return m.numberOfOutputs},get onprocessorerror(){return F},set onprocessorerror(q){typeof F=="function"&&X.removeEventListener("processorerror",F),F=typeof q=="function"?q:null,typeof F=="function"&&X.addEventListener("processorerror",F)},get parameters(){return P},get port(){return T.port2},addEventListener(...q){return D.addEventListener(q[0],q[1],q[2])},connect:i.bind(null,V),disconnect:l.bind(null,V),dispatchEvent(...q){return D.dispatchEvent(q[0])},removeEventListener(...q){return D.removeEventListener(q[0],q[1],q[2])}},W=new Map;T.port1.addEventListener=(q=>(...z)=>{if(z[0]==="message"){const _t=typeof z[1]=="function"?z[1]:typeof z[1]=="object"&&z[1]!==null&&typeof z[1].handleEvent=="function"?z[1].handleEvent:null;if(_t!==null){const lt=W.get(z[1]);lt!==void 0?z[1]=lt:(z[1]=A=>{h(f.currentTime,f.sampleRate,()=>_t(A))},W.set(_t,z[1]))}}return q.call(T.port1,z[0],z[1],z[2])})(T.port1.addEventListener),T.port1.removeEventListener=(q=>(...z)=>{if(z[0]==="message"){const _t=W.get(z[1]);_t!==void 0&&(W.delete(z[1]),z[1]=_t)}return q.call(T.port1,z[0],z[1],z[2])})(T.port1.removeEventListener);let Y=null;Object.defineProperty(T.port1,"onmessage",{get:()=>Y,set:q=>{typeof Y=="function"&&T.port1.removeEventListener("message",Y),Y=typeof q=="function"?q:null,typeof Y=="function"&&(T.port1.addEventListener("message",Y),T.port1.start())}}),_.prototype.port=T.port1;let J=null;NT(f,X,_,m).then(q=>J=q);const Z=fa(m.numberOfInputs,m.channelCount),et=fa(m.numberOfOutputs,p),nt=_.parameterDescriptors===void 0?[]:_.parameterDescriptors.reduce((q,{name:z})=>({...q,[z]:new Float32Array(128)}),{});let dt=!0;const ft=()=>{m.numberOfOutputs>0&&D.disconnect(L);for(let q=0,z=0;q<m.numberOfOutputs;q+=1){const _t=H[q];for(let lt=0;lt<p[q];lt+=1)L.disconnect(_t,z+lt,lt);z+=p[q]}},ot=new Map;D.onaudioprocess=({inputBuffer:q,outputBuffer:z})=>{if(J!==null){const _t=u(X);for(let lt=0;lt<M;lt+=128){for(let A=0;A<m.numberOfInputs;A+=1)for(let w=0;w<m.channelCount;w+=1)da(q,Z[A],w,w,lt);_.parameterDescriptors!==void 0&&_.parameterDescriptors.forEach(({name:A},w)=>{da(q,nt,A,x+w,lt)});for(let A=0;A<m.numberOfInputs;A+=1)for(let w=0;w<p[A];w+=1)et[A][w].byteLength===0&&(et[A][w]=new Float32Array(128));try{const A=Z.map((k,it)=>{if(_t[it].size>0)return ot.set(it,M/128),k;const rt=ot.get(it);return rt===void 0?[]:(k.every(bt=>bt.every(gt=>gt===0))&&(rt===1?ot.delete(it):ot.set(it,rt-1)),k)});dt=h(f.currentTime+lt/f.sampleRate,f.sampleRate,()=>J.process(A,et,nt));for(let k=0,it=0;k<m.numberOfOutputs;k+=1){for(let st=0;st<p[k];st+=1)Nf(z,et[k],st,it+st,lt);it+=p[k]}}catch(A){dt=!1,X.dispatchEvent(new ErrorEvent("processorerror",{colno:A.colno,filename:A.filename,lineno:A.lineno,message:A.message}))}if(!dt){for(let A=0;A<m.numberOfInputs;A+=1){b[A].disconnect(E[A]);for(let w=0;w<m.channelCount;w+=1)E[lt].disconnect(S,w,A*m.channelCount+w)}if(_.parameterDescriptors!==void 0){const A=_.parameterDescriptors.length;for(let w=0;w<A;w+=1){const k=C[w];k.disconnect(S,0,x+w),k.stop()}}S.disconnect(D),D.onaudioprocess=null,At?ft():N();break}}}};let At=!1;const St=o(f,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),Ct=()=>D.connect(St).connect(f.destination),N=()=>{D.disconnect(St),St.disconnect()},ut=()=>{if(dt){N(),m.numberOfOutputs>0&&D.connect(L);for(let q=0,z=0;q<m.numberOfOutputs;q+=1){const _t=H[q];for(let lt=0;lt<p[q];lt+=1)L.connect(_t,z+lt,lt);z+=p[q]}}At=!0},Q=()=>{dt&&(Ct(),ft()),At=!1};return Ct(),d(X,ut,Q)},Uf=(i,t)=>{const e=i.createBiquadFilter();return De(e,t),Se(e,t,"Q"),Se(e,t,"detune"),Se(e,t,"frequency"),Se(e,t,"gain"),fe(e,t,"type"),e},OT=(i,t)=>(e,n)=>{const s=e.createChannelMerger(n.numberOfInputs);return i!==null&&i.name==="webkitAudioContext"&&t(e,s),De(s,n),s},UT=i=>{const t=i.numberOfOutputs;Object.defineProperty(i,"channelCount",{get:()=>t,set:e=>{if(e!==t)throw Ue()}}),Object.defineProperty(i,"channelCountMode",{get:()=>"explicit",set:e=>{if(e!=="explicit")throw Ue()}}),Object.defineProperty(i,"channelInterpretation",{get:()=>"discrete",set:e=>{if(e!=="discrete")throw Ue()}})},io=(i,t)=>{const e=i.createChannelSplitter(t.numberOfOutputs);return De(e,t),UT(e),e},FT=(i,t,e,n,s)=>(r,o)=>{if(r.createConstantSource===void 0)return e(r,o);const a=r.createConstantSource();return De(a,o),Se(a,o,"offset"),t(n,()=>n(r))||zl(a),t(s,()=>s(r))||Gl(a),i(r,a),a},lr=(i,t)=>(i.connect=t.connect.bind(t),i.disconnect=t.disconnect.bind(t),i),kT=(i,t,e,n)=>(s,{offset:r,...o})=>{const a=s.createBuffer(1,2,44100),c=t(s,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),l=e(s,{...o,gain:r}),h=a.getChannelData(0);h[0]=1,h[1]=1,c.buffer=a,c.loop=!0;const u={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(g){l.channelCount=g},get channelCountMode(){return l.channelCountMode},set channelCountMode(g){l.channelCountMode=g},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(g){l.channelInterpretation=g},get context(){return l.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get offset(){return l.gain},get onended(){return c.onended},set onended(g){c.onended=g},addEventListener(...g){return c.addEventListener(g[0],g[1],g[2])},dispatchEvent(...g){return c.dispatchEvent(g[0])},removeEventListener(...g){return c.removeEventListener(g[0],g[1],g[2])},start(g=0){c.start.call(c,g)},stop(g=0){c.stop.call(c,g)}},d=()=>c.connect(l),f=()=>c.disconnect(l);return i(s,c),n(lr(u,l),d,f)},BT=(i,t)=>(e,n)=>{const s=e.createConvolver();if(De(s,n),n.disableNormalization===s.normalize&&(s.normalize=!n.disableNormalization),fe(s,n,"buffer"),n.channelCount>2||(t(s,"channelCount",r=>()=>r.call(s),r=>o=>{if(o>2)throw i();return r.call(s,o)}),n.channelCountMode==="max"))throw i();return t(s,"channelCountMode",r=>()=>r.call(s),r=>o=>{if(o==="max")throw i();return r.call(s,o)}),s},Ff=(i,t)=>{const e=i.createDelay(t.maxDelayTime);return De(e,t),Se(e,t,"delayTime"),e},VT=i=>(t,e)=>{const n=t.createDynamicsCompressor();if(De(n,e),e.channelCount>2||e.channelCountMode==="max")throw i();return Se(n,e,"attack"),Se(n,e,"knee"),Se(n,e,"ratio"),Se(n,e,"release"),Se(n,e,"threshold"),n},an=(i,t)=>{const e=i.createGain();return De(e,t),Se(e,t,"gain"),e},zT=i=>(t,e,n)=>{if(t.createIIRFilter===void 0)return i(t,e,n);const s=t.createIIRFilter(n.feedforward,n.feedback);return De(s,n),s};function GT(i,t){const e=t[0]*t[0]+t[1]*t[1];return[(i[0]*t[0]+i[1]*t[1])/e,(i[1]*t[0]-i[0]*t[1])/e]}function HT(i,t){return[i[0]*t[0]-i[1]*t[1],i[0]*t[1]+i[1]*t[0]]}function ud(i,t){let e=[0,0];for(let n=i.length-1;n>=0;n-=1)e=HT(e,t),e[0]+=i[n];return e}const WT=(i,t,e,n)=>(s,r,{channelCount:o,channelCountMode:a,channelInterpretation:c,feedback:l,feedforward:h})=>{const u=Of(r,s.sampleRate),d=l instanceof Float64Array?l:new Float64Array(l),f=h instanceof Float64Array?h:new Float64Array(h),g=d.length,_=f.length,m=Math.min(g,_);if(g===0||g>20)throw n();if(d[0]===0)throw t();if(_===0||_>20)throw n();if(f[0]===0)throw t();if(d[0]!==1){for(let C=0;C<_;C+=1)f[C]/=d[0];for(let C=1;C<g;C+=1)d[C]/=d[0]}const p=e(s,u,o,o);p.channelCount=o,p.channelCountMode=a,p.channelInterpretation=c;const x=32,v=[],y=[],T=[];for(let C=0;C<o;C+=1){v.push(0);const S=new Float32Array(x),M=new Float32Array(x);S.fill(0),M.fill(0),y.push(S),T.push(M)}p.onaudioprocess=C=>{const S=C.inputBuffer,M=C.outputBuffer,D=S.numberOfChannels;for(let L=0;L<D;L+=1){const H=S.getChannelData(L),P=M.getChannelData(L);v[L]=If(d,g,f,_,m,y[L],T[L],v[L],x,H,P)}};const b=s.sampleRate/2;return lr({get bufferSize(){return u},get channelCount(){return p.channelCount},set channelCount(C){p.channelCount=C},get channelCountMode(){return p.channelCountMode},set channelCountMode(C){p.channelCountMode=C},get channelInterpretation(){return p.channelInterpretation},set channelInterpretation(C){p.channelInterpretation=C},get context(){return p.context},get inputs(){return[p]},get numberOfInputs(){return p.numberOfInputs},get numberOfOutputs(){return p.numberOfOutputs},addEventListener(...C){return p.addEventListener(C[0],C[1],C[2])},dispatchEvent(...C){return p.dispatchEvent(C[0])},getFrequencyResponse(C,S,M){if(C.length!==S.length||S.length!==M.length)throw i();const D=C.length;for(let L=0;L<D;L+=1){const H=-Math.PI*(C[L]/b),P=[Math.cos(H),Math.sin(H)],U=ud(f,P),F=ud(d,P),V=GT(U,F);S[L]=Math.sqrt(V[0]*V[0]+V[1]*V[1]),M[L]=Math.atan2(V[1],V[0])}},removeEventListener(...C){return p.removeEventListener(C[0],C[1],C[2])}},p)},qT=(i,t)=>i.createMediaElementSource(t.mediaElement),XT=(i,t)=>{const e=i.createMediaStreamDestination();return De(e,t),e.numberOfOutputs===1&&Object.defineProperty(e,"numberOfOutputs",{get:()=>0}),e},YT=(i,{mediaStream:t})=>{const e=t.getAudioTracks();e.sort((r,o)=>r.id<o.id?-1:r.id>o.id?1:0);const n=e.slice(0,1),s=i.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(s,"mediaStream",{value:t}),s},jT=(i,t)=>(e,{mediaStreamTrack:n})=>{if(typeof e.createMediaStreamTrackSource=="function")return e.createMediaStreamTrackSource(n);const s=new MediaStream([n]),r=e.createMediaStreamSource(s);if(n.kind!=="audio")throw i();if(t(e))throw new TypeError;return r},ZT=i=>i===null?null:i.hasOwnProperty("OfflineAudioContext")?i.OfflineAudioContext:i.hasOwnProperty("webkitOfflineAudioContext")?i.webkitOfflineAudioContext:null,$T=(i,t,e,n,s,r)=>(o,a)=>{const c=o.createOscillator();return De(c,a),Se(c,a,"detune"),Se(c,a,"frequency"),a.periodicWave!==void 0?c.setPeriodicWave(a.periodicWave):fe(c,a,"type"),t(e,()=>e(o))||zl(c),t(n,()=>n(o))||r(c,o),t(s,()=>s(o))||Gl(c),i(o,c),c},JT=i=>(t,e)=>{const n=t.createPanner();return n.orientationX===void 0?i(t,e):(De(n,e),Se(n,e,"orientationX"),Se(n,e,"orientationY"),Se(n,e,"orientationZ"),Se(n,e,"positionX"),Se(n,e,"positionY"),Se(n,e,"positionZ"),fe(n,e,"coneInnerAngle"),fe(n,e,"coneOuterAngle"),fe(n,e,"coneOuterGain"),fe(n,e,"distanceModel"),fe(n,e,"maxDistance"),fe(n,e,"panningModel"),fe(n,e,"refDistance"),fe(n,e,"rolloffFactor"),n)},KT=(i,t,e,n,s,r,o,a,c,l)=>(h,{coneInnerAngle:u,coneOuterAngle:d,coneOuterGain:f,distanceModel:g,maxDistance:_,orientationX:m,orientationY:p,orientationZ:x,panningModel:v,positionX:y,positionY:T,positionZ:b,refDistance:E,rolloffFactor:C,...S})=>{const M=h.createPanner();if(S.channelCount>2||S.channelCountMode==="max")throw o();De(M,S);const D={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},L=e(h,{...D,channelInterpretation:"speakers",numberOfInputs:6}),H=n(h,{...S,gain:1}),P=n(h,{...D,gain:1}),U=n(h,{...D,gain:0}),F=n(h,{...D,gain:0}),V=n(h,{...D,gain:0}),X=n(h,{...D,gain:0}),W=n(h,{...D,gain:0}),Y=s(h,256,6,1),J=r(h,{...D,curve:new Float32Array([1,1]),oversample:"none"});let tt=[m,p,x],Z=[y,T,b];const et=new Float32Array(1);Y.onaudioprocess=({inputBuffer:ot})=>{const At=[c(ot,et,0),c(ot,et,1),c(ot,et,2)];At.some((Ct,N)=>Ct!==tt[N])&&(M.setOrientation(...At),tt=At);const St=[c(ot,et,3),c(ot,et,4),c(ot,et,5)];St.some((Ct,N)=>Ct!==Z[N])&&(M.setPosition(...St),Z=St)},Object.defineProperty(U.gain,"defaultValue",{get:()=>0}),Object.defineProperty(F.gain,"defaultValue",{get:()=>0}),Object.defineProperty(V.gain,"defaultValue",{get:()=>0}),Object.defineProperty(X.gain,"defaultValue",{get:()=>0}),Object.defineProperty(W.gain,"defaultValue",{get:()=>0});const nt={get bufferSize(){},get channelCount(){return M.channelCount},set channelCount(ot){if(ot>2)throw o();H.channelCount=ot,M.channelCount=ot},get channelCountMode(){return M.channelCountMode},set channelCountMode(ot){if(ot==="max")throw o();H.channelCountMode=ot,M.channelCountMode=ot},get channelInterpretation(){return M.channelInterpretation},set channelInterpretation(ot){H.channelInterpretation=ot,M.channelInterpretation=ot},get coneInnerAngle(){return M.coneInnerAngle},set coneInnerAngle(ot){M.coneInnerAngle=ot},get coneOuterAngle(){return M.coneOuterAngle},set coneOuterAngle(ot){M.coneOuterAngle=ot},get coneOuterGain(){return M.coneOuterGain},set coneOuterGain(ot){if(ot<0||ot>1)throw t();M.coneOuterGain=ot},get context(){return M.context},get distanceModel(){return M.distanceModel},set distanceModel(ot){M.distanceModel=ot},get inputs(){return[H]},get maxDistance(){return M.maxDistance},set maxDistance(ot){if(ot<0)throw new RangeError;M.maxDistance=ot},get numberOfInputs(){return M.numberOfInputs},get numberOfOutputs(){return M.numberOfOutputs},get orientationX(){return P.gain},get orientationY(){return U.gain},get orientationZ(){return F.gain},get panningModel(){return M.panningModel},set panningModel(ot){M.panningModel=ot},get positionX(){return V.gain},get positionY(){return X.gain},get positionZ(){return W.gain},get refDistance(){return M.refDistance},set refDistance(ot){if(ot<0)throw new RangeError;M.refDistance=ot},get rolloffFactor(){return M.rolloffFactor},set rolloffFactor(ot){if(ot<0)throw new RangeError;M.rolloffFactor=ot},addEventListener(...ot){return H.addEventListener(ot[0],ot[1],ot[2])},dispatchEvent(...ot){return H.dispatchEvent(ot[0])},removeEventListener(...ot){return H.removeEventListener(ot[0],ot[1],ot[2])}};u!==nt.coneInnerAngle&&(nt.coneInnerAngle=u),d!==nt.coneOuterAngle&&(nt.coneOuterAngle=d),f!==nt.coneOuterGain&&(nt.coneOuterGain=f),g!==nt.distanceModel&&(nt.distanceModel=g),_!==nt.maxDistance&&(nt.maxDistance=_),m!==nt.orientationX.value&&(nt.orientationX.value=m),p!==nt.orientationY.value&&(nt.orientationY.value=p),x!==nt.orientationZ.value&&(nt.orientationZ.value=x),v!==nt.panningModel&&(nt.panningModel=v),y!==nt.positionX.value&&(nt.positionX.value=y),T!==nt.positionY.value&&(nt.positionY.value=T),b!==nt.positionZ.value&&(nt.positionZ.value=b),E!==nt.refDistance&&(nt.refDistance=E),C!==nt.rolloffFactor&&(nt.rolloffFactor=C),(tt[0]!==1||tt[1]!==0||tt[2]!==0)&&M.setOrientation(...tt),(Z[0]!==0||Z[1]!==0||Z[2]!==0)&&M.setPosition(...Z);const dt=()=>{H.connect(M),i(H,J,0,0),J.connect(P).connect(L,0,0),J.connect(U).connect(L,0,1),J.connect(F).connect(L,0,2),J.connect(V).connect(L,0,3),J.connect(X).connect(L,0,4),J.connect(W).connect(L,0,5),L.connect(Y).connect(h.destination)},ft=()=>{H.disconnect(M),a(H,J,0,0),J.disconnect(P),P.disconnect(L),J.disconnect(U),U.disconnect(L),J.disconnect(F),F.disconnect(L),J.disconnect(V),V.disconnect(L),J.disconnect(X),X.disconnect(L),J.disconnect(W),W.disconnect(L),L.disconnect(Y),Y.disconnect(h.destination)};return l(lr(nt,M),dt,ft)},QT=i=>(t,{disableNormalization:e,imag:n,real:s})=>{const r=n instanceof Float32Array?n:new Float32Array(n),o=s instanceof Float32Array?s:new Float32Array(s),a=t.createPeriodicWave(o,r,{disableNormalization:e});if(Array.from(n).length<2)throw i();return a},so=(i,t,e,n)=>i.createScriptProcessor(t,e,n),tb=(i,t)=>(e,n)=>{const s=n.channelCountMode;if(s==="clamped-max")throw t();if(e.createStereoPanner===void 0)return i(e,n);const r=e.createStereoPanner();return De(r,n),Se(r,n,"pan"),Object.defineProperty(r,"channelCountMode",{get:()=>s,set:o=>{if(o!==s)throw t()}}),r},eb=(i,t,e,n,s,r)=>{const a=new Float32Array([1,1]),c=Math.PI/2,l={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},h={...l,oversample:"none"},u=(g,_,m,p)=>{const x=new Float32Array(16385),v=new Float32Array(16385);for(let S=0;S<16385;S+=1){const M=S/16384*c;x[S]=Math.cos(M),v[S]=Math.sin(M)}const y=e(g,{...l,gain:0}),T=n(g,{...h,curve:x}),b=n(g,{...h,curve:a}),E=e(g,{...l,gain:0}),C=n(g,{...h,curve:v});return{connectGraph(){_.connect(y),_.connect(b.inputs===void 0?b:b.inputs[0]),_.connect(E),b.connect(m),m.connect(T.inputs===void 0?T:T.inputs[0]),m.connect(C.inputs===void 0?C:C.inputs[0]),T.connect(y.gain),C.connect(E.gain),y.connect(p,0,0),E.connect(p,0,1)},disconnectGraph(){_.disconnect(y),_.disconnect(b.inputs===void 0?b:b.inputs[0]),_.disconnect(E),b.disconnect(m),m.disconnect(T.inputs===void 0?T:T.inputs[0]),m.disconnect(C.inputs===void 0?C:C.inputs[0]),T.disconnect(y.gain),C.disconnect(E.gain),y.disconnect(p,0,0),E.disconnect(p,0,1)}}},d=(g,_,m,p)=>{const x=new Float32Array(16385),v=new Float32Array(16385),y=new Float32Array(16385),T=new Float32Array(16385),b=Math.floor(16385/2);for(let V=0;V<16385;V+=1)if(V>b){const X=(V-b)/(16384-b)*c;x[V]=Math.cos(X),v[V]=Math.sin(X),y[V]=0,T[V]=1}else{const X=V/(16384-b)*c;x[V]=1,v[V]=0,y[V]=Math.cos(X),T[V]=Math.sin(X)}const E=t(g,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),C=e(g,{...l,gain:0}),S=n(g,{...h,curve:x}),M=e(g,{...l,gain:0}),D=n(g,{...h,curve:v}),L=n(g,{...h,curve:a}),H=e(g,{...l,gain:0}),P=n(g,{...h,curve:y}),U=e(g,{...l,gain:0}),F=n(g,{...h,curve:T});return{connectGraph(){_.connect(E),_.connect(L.inputs===void 0?L:L.inputs[0]),E.connect(C,0),E.connect(M,0),E.connect(H,1),E.connect(U,1),L.connect(m),m.connect(S.inputs===void 0?S:S.inputs[0]),m.connect(D.inputs===void 0?D:D.inputs[0]),m.connect(P.inputs===void 0?P:P.inputs[0]),m.connect(F.inputs===void 0?F:F.inputs[0]),S.connect(C.gain),D.connect(M.gain),P.connect(H.gain),F.connect(U.gain),C.connect(p,0,0),H.connect(p,0,0),M.connect(p,0,1),U.connect(p,0,1)},disconnectGraph(){_.disconnect(E),_.disconnect(L.inputs===void 0?L:L.inputs[0]),E.disconnect(C,0),E.disconnect(M,0),E.disconnect(H,1),E.disconnect(U,1),L.disconnect(m),m.disconnect(S.inputs===void 0?S:S.inputs[0]),m.disconnect(D.inputs===void 0?D:D.inputs[0]),m.disconnect(P.inputs===void 0?P:P.inputs[0]),m.disconnect(F.inputs===void 0?F:F.inputs[0]),S.disconnect(C.gain),D.disconnect(M.gain),P.disconnect(H.gain),F.disconnect(U.gain),C.disconnect(p,0,0),H.disconnect(p,0,0),M.disconnect(p,0,1),U.disconnect(p,0,1)}}},f=(g,_,m,p,x)=>{if(_===1)return u(g,m,p,x);if(_===2)return d(g,m,p,x);throw s()};return(g,{channelCount:_,channelCountMode:m,pan:p,...x})=>{if(m==="max")throw s();const v=i(g,{...x,channelCount:1,channelCountMode:m,numberOfInputs:2}),y=e(g,{...x,channelCount:_,channelCountMode:m,gain:1}),T=e(g,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:p});let{connectGraph:b,disconnectGraph:E}=f(g,_,y,T,v);Object.defineProperty(T.gain,"defaultValue",{get:()=>0}),Object.defineProperty(T.gain,"maxValue",{get:()=>1}),Object.defineProperty(T.gain,"minValue",{get:()=>-1});const C={get bufferSize(){},get channelCount(){return y.channelCount},set channelCount(L){y.channelCount!==L&&(S&&E(),{connectGraph:b,disconnectGraph:E}=f(g,L,y,T,v),S&&b()),y.channelCount=L},get channelCountMode(){return y.channelCountMode},set channelCountMode(L){if(L==="clamped-max"||L==="max")throw s();y.channelCountMode=L},get channelInterpretation(){return y.channelInterpretation},set channelInterpretation(L){y.channelInterpretation=L},get context(){return y.context},get inputs(){return[y]},get numberOfInputs(){return y.numberOfInputs},get numberOfOutputs(){return y.numberOfOutputs},get pan(){return T.gain},addEventListener(...L){return y.addEventListener(L[0],L[1],L[2])},dispatchEvent(...L){return y.dispatchEvent(L[0])},removeEventListener(...L){return y.removeEventListener(L[0],L[1],L[2])}};let S=!1;const M=()=>{b(),S=!0},D=()=>{E(),S=!1};return r(lr(C,v),M,D)}},nb=(i,t,e,n,s,r,o)=>(a,c)=>{const l=a.createWaveShaper();if(r!==null&&r.name==="webkitAudioContext"&&a.createGain().gain.automationRate===void 0)return e(a,c);De(l,c);const h=c.curve===null||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(h!==null&&h.length<2)throw t();fe(l,{curve:h},"curve"),fe(l,c,"oversample");let u=null,d=!1;return o(l,"curve",_=>()=>_.call(l),_=>m=>(_.call(l,m),d&&(n(m)&&u===null?u=i(a,l):!n(m)&&u!==null&&(u(),u=null)),m)),s(l,()=>{d=!0,n(l.curve)&&(u=i(a,l))},()=>{d=!1,u!==null&&(u(),u=null)})},ib=(i,t,e,n,s)=>(r,{curve:o,oversample:a,...c})=>{const l=r.createWaveShaper(),h=r.createWaveShaper();De(l,c),De(h,c);const u=e(r,{...c,gain:1}),d=e(r,{...c,gain:-1}),f=e(r,{...c,gain:1}),g=e(r,{...c,gain:-1});let _=null,m=!1,p=null;const x={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(T){u.channelCount=T,d.channelCount=T,l.channelCount=T,f.channelCount=T,h.channelCount=T,g.channelCount=T},get channelCountMode(){return l.channelCountMode},set channelCountMode(T){u.channelCountMode=T,d.channelCountMode=T,l.channelCountMode=T,f.channelCountMode=T,h.channelCountMode=T,g.channelCountMode=T},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(T){u.channelInterpretation=T,d.channelInterpretation=T,l.channelInterpretation=T,f.channelInterpretation=T,h.channelInterpretation=T,g.channelInterpretation=T},get context(){return l.context},get curve(){return p},set curve(T){if(T!==null&&T.length<2)throw t();if(T===null)l.curve=T,h.curve=T;else{const b=T.length,E=new Float32Array(b+2-b%2),C=new Float32Array(b+2-b%2);E[0]=T[0],C[0]=-T[b-1];const S=Math.ceil((b+1)/2),M=(b+1)/2-1;for(let D=1;D<S;D+=1){const L=D/S*M,H=Math.floor(L),P=Math.ceil(L);E[D]=H===P?T[H]:(1-(L-H))*T[H]+(1-(P-L))*T[P],C[D]=H===P?-T[b-1-H]:-((1-(L-H))*T[b-1-H])-(1-(P-L))*T[b-1-P]}E[S]=b%2===1?T[S-1]:(T[S-2]+T[S-1])/2,l.curve=E,h.curve=C}p=T,m&&(n(p)&&_===null?_=i(r,u):_!==null&&(_(),_=null))},get inputs(){return[u]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get oversample(){return l.oversample},set oversample(T){l.oversample=T,h.oversample=T},addEventListener(...T){return u.addEventListener(T[0],T[1],T[2])},dispatchEvent(...T){return u.dispatchEvent(T[0])},removeEventListener(...T){return u.removeEventListener(T[0],T[1],T[2])}};o!==null&&(x.curve=o instanceof Float32Array?o:new Float32Array(o)),a!==x.oversample&&(x.oversample=a);const v=()=>{u.connect(l).connect(f),u.connect(d).connect(h).connect(g).connect(f),m=!0,n(p)&&(_=i(r,u))},y=()=>{u.disconnect(l),l.disconnect(f),u.disconnect(d),d.disconnect(h),h.disconnect(g),g.disconnect(f),m=!1,_!==null&&(_(),_=null)};return s(lr(x,f),v,y)},nn=()=>new DOMException("","NotSupportedError"),sb={numberOfChannels:1},rb=(i,t,e,n,s)=>class extends i{constructor(o,a,c){let l;if(typeof o=="number"&&a!==void 0&&c!==void 0)l={length:a,numberOfChannels:o,sampleRate:c};else if(typeof o=="object")l=o;else throw new Error("The given parameters are not valid.");const{length:h,numberOfChannels:u,sampleRate:d}={...sb,...l},f=n(u,h,d);t(Fr,()=>Fr(f))||f.addEventListener("statechange",(()=>{let g=0;const _=m=>{this._state==="running"&&(g>0?(f.removeEventListener("statechange",_),m.stopImmediatePropagation(),this._waitForThePromiseToSettle(m)):g+=1)};return _})()),super(f,u),this._length=h,this._nativeOfflineAudioContext=f,this._state=null}get length(){return this._nativeOfflineAudioContext.length===void 0?this._length:this._nativeOfflineAudioContext.length}get state(){return this._state===null?this._nativeOfflineAudioContext.state:this._state}startRendering(){return this._state==="running"?Promise.reject(e()):(this._state="running",s(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,Cf(this)}))}_waitForThePromiseToSettle(o){this._state===null?this._nativeOfflineAudioContext.dispatchEvent(o):setTimeout(()=>this._waitForThePromiseToSettle(o))}},ob={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},ab=(i,t,e,n,s,r,o)=>class extends i{constructor(c,l){const h=s(c),u={...ob,...l},d=e(h,u),f=r(h),g=f?n():null,_=c.sampleRate/2;super(c,!1,d,g),this._detune=t(this,f,d.detune,153600,-153600),this._frequency=t(this,f,d.frequency,_,-_),this._nativeOscillatorNode=d,this._onended=null,this._oscillatorNodeRenderer=g,this._oscillatorNodeRenderer!==null&&u.periodicWave!==void 0&&(this._oscillatorNodeRenderer.periodicWave=u.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(c){const l=typeof c=="function"?o(this,c):null;this._nativeOscillatorNode.onended=l;const h=this._nativeOscillatorNode.onended;this._onended=h!==null&&h===l?c:h}get type(){return this._nativeOscillatorNode.type}set type(c){this._nativeOscillatorNode.type=c,this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(c){this._nativeOscillatorNode.setPeriodicWave(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.periodicWave=c)}start(c=0){if(this._nativeOscillatorNode.start(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.start=c),this.context.state!=="closed"){$s(this);const l=()=>{this._nativeOscillatorNode.removeEventListener("ended",l),di(this)&&to(this)};this._nativeOscillatorNode.addEventListener("ended",l)}}stop(c=0){this._nativeOscillatorNode.stop(c),this._oscillatorNodeRenderer!==null&&(this._oscillatorNodeRenderer.stop=c)}},cb=(i,t,e,n,s)=>()=>{const r=new WeakMap;let o=null,a=null,c=null;const l=async(h,u)=>{let d=e(h);const f=Ye(d,u);if(!f){const g={channelCount:d.channelCount,channelCountMode:d.channelCountMode,channelInterpretation:d.channelInterpretation,detune:d.detune.value,frequency:d.frequency.value,periodicWave:o===null?void 0:o,type:d.type};d=t(u,g),a!==null&&d.start(a),c!==null&&d.stop(c)}return r.set(u,d),f?(await i(u,h.detune,d.detune),await i(u,h.frequency,d.frequency)):(await n(u,h.detune,d.detune),await n(u,h.frequency,d.frequency)),await s(h,u,d),d};return{set periodicWave(h){o=h},set start(h){a=h},set stop(h){c=h},render(h,u){const d=r.get(u);return d!==void 0?Promise.resolve(d):l(h,u)}}},lb={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},hb=(i,t,e,n,s,r,o)=>class extends i{constructor(c,l){const h=s(c),u={...lb,...l},d=e(h,u),f=r(h),g=f?n():null;super(c,!1,d,g),this._nativePannerNode=d,this._orientationX=t(this,f,d.orientationX,Qe,rn),this._orientationY=t(this,f,d.orientationY,Qe,rn),this._orientationZ=t(this,f,d.orientationZ,Qe,rn),this._positionX=t(this,f,d.positionX,Qe,rn),this._positionY=t(this,f,d.positionY,Qe,rn),this._positionZ=t(this,f,d.positionZ,Qe,rn),o(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(c){this._nativePannerNode.coneInnerAngle=c}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(c){this._nativePannerNode.coneOuterAngle=c}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(c){this._nativePannerNode.coneOuterGain=c}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(c){this._nativePannerNode.distanceModel=c}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(c){this._nativePannerNode.maxDistance=c}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(c){this._nativePannerNode.panningModel=c}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(c){this._nativePannerNode.refDistance=c}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(c){this._nativePannerNode.rolloffFactor=c}},ub=(i,t,e,n,s,r,o,a,c,l)=>()=>{const h=new WeakMap;let u=null;const d=async(f,g)=>{let _=null,m=r(f);const p={channelCount:m.channelCount,channelCountMode:m.channelCountMode,channelInterpretation:m.channelInterpretation},x={...p,coneInnerAngle:m.coneInnerAngle,coneOuterAngle:m.coneOuterAngle,coneOuterGain:m.coneOuterGain,distanceModel:m.distanceModel,maxDistance:m.maxDistance,panningModel:m.panningModel,refDistance:m.refDistance,rolloffFactor:m.rolloffFactor},v=Ye(m,g);if("bufferSize"in m)_=n(g,{...p,gain:1});else if(!v){const y={...x,orientationX:m.orientationX.value,orientationY:m.orientationY.value,orientationZ:m.orientationZ.value,positionX:m.positionX.value,positionY:m.positionY.value,positionZ:m.positionZ.value};m=s(g,y)}if(h.set(g,_===null?m:_),_!==null){if(u===null){if(o===null)throw new Error("Missing the native OfflineAudioContext constructor.");const D=new o(6,f.context.length,g.sampleRate),L=t(D,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});L.connect(D.destination),u=(async()=>{const H=await Promise.all([f.orientationX,f.orientationY,f.orientationZ,f.positionX,f.positionY,f.positionZ].map(async(P,U)=>{const F=e(D,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:U===0?1:0});return await a(D,P,F.offset),F}));for(let P=0;P<6;P+=1)H[P].connect(L,0,P),H[P].start(0);return l(D)})()}const y=await u,T=n(g,{...p,gain:1});await c(f,g,T);const b=[];for(let D=0;D<y.numberOfChannels;D+=1)b.push(y.getChannelData(D));let E=[b[0][0],b[1][0],b[2][0]],C=[b[3][0],b[4][0],b[5][0]],S=n(g,{...p,gain:1}),M=s(g,{...x,orientationX:E[0],orientationY:E[1],orientationZ:E[2],positionX:C[0],positionY:C[1],positionZ:C[2]});T.connect(S).connect(M.inputs[0]),M.connect(_);for(let D=128;D<y.length;D+=128){const L=[b[0][D],b[1][D],b[2][D]],H=[b[3][D],b[4][D],b[5][D]];if(L.some((P,U)=>P!==E[U])||H.some((P,U)=>P!==C[U])){E=L,C=H;const P=D/g.sampleRate;S.gain.setValueAtTime(0,P),S=n(g,{...p,gain:0}),M=s(g,{...x,orientationX:E[0],orientationY:E[1],orientationZ:E[2],positionX:C[0],positionY:C[1],positionZ:C[2]}),S.gain.setValueAtTime(1,P),T.connect(S).connect(M.inputs[0]),M.connect(_)}}return _}return v?(await i(g,f.orientationX,m.orientationX),await i(g,f.orientationY,m.orientationY),await i(g,f.orientationZ,m.orientationZ),await i(g,f.positionX,m.positionX),await i(g,f.positionY,m.positionY),await i(g,f.positionZ,m.positionZ)):(await a(g,f.orientationX,m.orientationX),await a(g,f.orientationY,m.orientationY),await a(g,f.orientationZ,m.orientationZ),await a(g,f.positionX,m.positionX),await a(g,f.positionY,m.positionY),await a(g,f.positionZ,m.positionZ)),cr(m)?await c(f,g,m.inputs[0]):await c(f,g,m),m};return{render(f,g){const _=h.get(g);return _!==void 0?Promise.resolve(_):d(f,g)}}},db={disableNormalization:!1},fb=(i,t,e,n)=>class kf{constructor(r,o){const a=t(r),c=n({...db,...o}),l=i(a,c);return e.add(l),l}static[Symbol.hasInstance](r){return r!==null&&typeof r=="object"&&Object.getPrototypeOf(r)===kf.prototype||e.has(r)}},pb=(i,t)=>(e,n,s)=>(i(n).replay(s),t(n,e,s)),mb=(i,t,e)=>async(n,s,r)=>{const o=i(n);await Promise.all(o.activeInputs.map((a,c)=>Array.from(a).map(async([l,h])=>{const d=await t(l).render(l,s),f=n.context.destination;!e(l)&&(n!==f||!e(n))&&d.connect(r,h,c)})).reduce((a,c)=>[...a,...c],[]))},gb=(i,t,e)=>async(n,s,r)=>{const o=t(n);await Promise.all(Array.from(o.activeInputs).map(async([a,c])=>{const h=await i(a).render(a,s);e(a)||h.connect(r,c)}))},_b=(i,t,e,n)=>s=>i(Fr,()=>Fr(s))?Promise.resolve(i(n,n)).then(r=>{if(!r){const o=e(s,512,0,1);s.oncomplete=()=>{o.onaudioprocess=null,o.disconnect()},o.onaudioprocess=()=>s.currentTime,o.connect(s.destination)}return s.startRendering()}):new Promise(r=>{const o=t(s,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});s.oncomplete=a=>{o.disconnect(),r(a.renderedBuffer)},o.connect(s.destination),s.startRendering()}),vb=i=>(t,e)=>{i.set(t,e)},xb=i=>(t,e)=>i.set(t,e),yb=(i,t,e,n,s,r,o,a)=>(c,l)=>e(c).render(c,l).then(()=>Promise.all(Array.from(n(l)).map(h=>e(h).render(h,l)))).then(()=>s(l)).then(h=>(typeof h.copyFromChannel!="function"?(o(h),kl(h)):t(r,()=>r(h))||a(h),i.add(h),h)),Sb={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},Mb=(i,t,e,n,s,r)=>class extends i{constructor(a,c){const l=s(a),h={...Sb,...c},u=e(l,h),d=r(l),f=d?n():null;super(a,!1,u,f),this._pan=t(this,d,u.pan)}get pan(){return this._pan}},Tb=(i,t,e,n,s)=>()=>{const r=new WeakMap,o=async(a,c)=>{let l=e(a);const h=Ye(l,c);if(!h){const u={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,pan:l.pan.value};l=t(c,u)}return r.set(c,l),h?await i(c,a.pan,l.pan):await n(c,a.pan,l.pan),cr(l)?await s(a,c,l.inputs[0]):await s(a,c,l),l};return{render(a,c){const l=r.get(c);return l!==void 0?Promise.resolve(l):o(a,c)}}},bb=i=>()=>{if(i===null)return!1;try{new i({length:1,sampleRate:44100})}catch{return!1}return!0},wb=(i,t)=>async()=>{if(i===null)return!0;if(t===null)return!1;const e=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new t(1,128,44100),s=URL.createObjectURL(e);let r=!1,o=!1;try{await n.audioWorklet.addModule(s);const a=new i(n,"a",{numberOfOutputs:0}),c=n.createOscillator();a.port.onmessage=()=>r=!0,a.onprocessorerror=()=>o=!0,c.connect(a),c.start(0),await n.startRendering(),await new Promise(l=>setTimeout(l))}catch{}finally{URL.revokeObjectURL(s)}return r&&!o},Eb=(i,t)=>()=>{if(t===null)return Promise.resolve(!1);const e=new t(1,1,44100),n=i(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(s=>{e.oncomplete=()=>{n.disconnect(),s(e.currentTime!==0)},e.startRendering()})},Ab=()=>new DOMException("","UnknownError"),Cb={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},Rb=(i,t,e,n,s,r,o)=>class extends i{constructor(c,l){const h=s(c),u={...Cb,...l},d=e(h,u),g=r(h)?n():null;super(c,!0,d,g),this._isCurveNullified=!1,this._nativeWaveShaperNode=d,o(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(c){if(c===null)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(c.length<2)throw t();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=c}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(c){this._nativeWaveShaperNode.oversample=c}},Pb=(i,t,e)=>()=>{const n=new WeakMap,s=async(r,o)=>{let a=t(r);if(!Ye(a,o)){const l={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,curve:a.curve,oversample:a.oversample};a=i(o,l)}return n.set(o,a),cr(a)?await e(r,o,a.inputs[0]):await e(r,o,a),a};return{render(r,o){const a=n.get(o);return a!==void 0?Promise.resolve(a):s(r,o)}}},Db=()=>typeof window>"u"?null:window,Lb=(i,t)=>e=>{e.copyFromChannel=(n,s,r=0)=>{const o=i(r),a=i(s);if(a>=e.numberOfChannels)throw t();const c=e.length,l=e.getChannelData(a),h=n.length;for(let u=o<0?-o:0;u+o<c&&u<h;u+=1)n[u]=l[u+o]},e.copyToChannel=(n,s,r=0)=>{const o=i(r),a=i(s);if(a>=e.numberOfChannels)throw t();const c=e.length,l=e.getChannelData(a),h=n.length;for(let u=o<0?-o:0;u+o<c&&u<h;u+=1)l[u+o]=n[u]}},Nb=i=>t=>{t.copyFromChannel=(e=>(n,s,r=0)=>{const o=i(r),a=i(s);if(o<t.length)return e.call(t,n,a,o)})(t.copyFromChannel),t.copyToChannel=(e=>(n,s,r=0)=>{const o=i(r),a=i(s);if(o<t.length)return e.call(t,n,a,o)})(t.copyToChannel)},Ib=i=>(t,e)=>{const n=e.createBuffer(1,1,44100);t.buffer===null&&(t.buffer=n),i(t,"buffer",s=>()=>{const r=s.call(t);return r===n?null:r},s=>r=>s.call(t,r===null?n:r))},Ob=(i,t)=>(e,n)=>{n.channelCount=1,n.channelCountMode="explicit",Object.defineProperty(n,"channelCount",{get:()=>1,set:()=>{throw i()}}),Object.defineProperty(n,"channelCountMode",{get:()=>"explicit",set:()=>{throw i()}});const s=e.createBufferSource();t(n,()=>{const a=n.numberOfInputs;for(let c=0;c<a;c+=1)s.connect(n,0,c)},()=>s.disconnect(n))},Bf=(i,t,e)=>i.copyFromChannel===void 0?i.getChannelData(e)[0]:(i.copyFromChannel(t,e),t[0]),Vf=i=>{if(i===null)return!1;const t=i.length;return t%2!==0?i[Math.floor(t/2)]!==0:i[t/2-1]+i[t/2]!==0},ro=(i,t,e,n)=>{let s=i;for(;!s.hasOwnProperty(t);)s=Object.getPrototypeOf(s);const{get:r,set:o}=Object.getOwnPropertyDescriptor(s,t);Object.defineProperty(i,t,{get:e(r),set:n(o)})},Ub=i=>({...i,outputChannelCount:i.outputChannelCount!==void 0?i.outputChannelCount:i.numberOfInputs===1&&i.numberOfOutputs===1?[i.channelCount]:Array.from({length:i.numberOfOutputs},()=>1)}),Fb=i=>({...i,channelCount:i.numberOfOutputs}),kb=i=>{const{imag:t,real:e}=i;return t===void 0?e===void 0?{...i,imag:[0,0],real:[0,0]}:{...i,imag:Array.from(e,()=>0),real:e}:e===void 0?{...i,imag:t,real:Array.from(t,()=>0)}:{...i,imag:t,real:e}},zf=(i,t,e)=>{try{i.setValueAtTime(t,e)}catch(n){if(n.code!==9)throw n;zf(i,t,e+1e-7)}},Bb=i=>{const t=i.createBufferSource();t.start();try{t.start()}catch{return!0}return!1},Vb=i=>{const t=i.createBufferSource(),e=i.createBuffer(1,1,44100);t.buffer=e;try{t.start(0,1)}catch{return!1}return!0},zb=i=>{const t=i.createBufferSource();t.start();try{t.stop()}catch{return!1}return!0},Hl=i=>{const t=i.createOscillator();try{t.start(-1)}catch(e){return e instanceof RangeError}return!1},Gf=i=>{const t=i.createBuffer(1,1,44100),e=i.createBufferSource();e.buffer=t,e.start(),e.stop();try{return e.stop(),!0}catch{return!1}},Wl=i=>{const t=i.createOscillator();try{t.stop(-1)}catch(e){return e instanceof RangeError}return!1},Gb=i=>{const{port1:t,port2:e}=new MessageChannel;try{t.postMessage(i)}finally{t.close(),e.close()}},Hb=i=>{i.start=(t=>(e=0,n=0,s)=>{const r=i.buffer,o=r===null?n:Math.min(r.duration,n);r!==null&&o>r.duration-.5/i.context.sampleRate?t.call(i,e,0,0):t.call(i,e,o,s)})(i.start)},Hf=(i,t)=>{const e=t.createGain();i.connect(e);const n=(s=>()=>{s.call(i,e),i.removeEventListener("ended",n)})(i.disconnect);i.addEventListener("ended",n),lr(i,e),i.stop=(s=>{let r=!1;return(o=0)=>{if(r)try{s.call(i,o)}catch{e.gain.setValueAtTime(0,o)}else s.call(i,o),r=!0}})(i.stop)},hr=(i,t)=>e=>{const n={value:i};return Object.defineProperties(e,{currentTarget:n,target:n}),typeof t=="function"?t.call(i,e):t.handleEvent.call(i,e)},Wb=hS(ms),qb=gS(ms),Xb=CM(Ga),Wf=new WeakMap,Yb=XM(Wf),kn=sM(new Map,new WeakMap),qn=Db(),qf=MT(kn,Zn),ql=qM(tn),Be=mb(tn,ql,os),jb=SS(qf,ue,Be),ce=ZM(za),mi=ZT(qn),ne=dT(mi),Xf=new WeakMap,Yf=kM(hr),oo=ET(qn),Xl=cT(oo),Yl=lT(qn),jf=hT(qn),kr=CT(qn),we=XS(uS(Sf),mS(Wb,qb,la,Xb,ha,tn,Yb,Qr,ue,ms,di,os,Zo),kn,iT(fl,ha,tn,ue,Ur,di),Zn,Ha,nn,bM(la,fl,tn,ue,Ur,ce,di,ne),DM(Xf,tn,On),Yf,ce,Xl,Yl,jf,ne,kr),Zb=yS(we,jb,Zn,qf,ce,ne),jl=new WeakSet,dd=TT(qn),Zf=_M(new Uint32Array(1)),Zl=Lb(Zf,Zn),$l=Nb(Zf),$f=TS(jl,kn,nn,dd,mi,bb(dd),Zl,$l),Wa=_S(an),Jf=gb(ql,eo,os),$n=uM(Jf),ur=wT(Wa,kn,Bb,Vb,zb,Hl,Gf,Wl,Hb,Ib(ro),Hf),Jn=pb(YM(eo),Jf),$b=ES($n,ur,ue,Jn,Be),Bn=YS(dS(Mf),Xf,Fl,jS,sS,rS,oS,aS,cS,hl,vf,oo,zf),Jb=wS(we,$b,Bn,Ue,ur,ce,ne,hr),Kb=OS(we,US,Zn,Ue,AT(an,ro),ce,ne,Be),Qb=iM($n,Uf,ue,Jn,Be),gs=xb(Wf),tw=nM(we,Bn,Qb,Ha,Uf,ce,ne,gs),Ui=yT(ms,Yl),ew=Ob(Ue,Ui),Fi=OT(oo,ew),nw=aM(Fi,ue,Be),iw=oM(we,nw,Fi,ce,ne),sw=hM(io,ue,Be),rw=lM(we,sw,io,ce,ne,Fb),ow=kT(Wa,ur,an,Ui),dr=FT(Wa,kn,ow,Hl,Wl),aw=gM($n,dr,ue,Jn,Be),cw=mM(we,Bn,aw,dr,ce,ne,hr),Kf=BT(nn,ro),lw=yM(Kf,ue,Be),hw=xM(we,lw,Kf,ce,ne,gs),uw=AM($n,Ff,ue,Jn,Be),dw=EM(we,Bn,uw,Ff,ce,ne,gs),Qf=VT(nn),fw=OM($n,Qf,ue,Jn,Be),pw=IM(we,Bn,fw,Qf,nn,ce,ne,gs),mw=HM($n,an,ue,Jn,Be),gw=GM(we,Bn,mw,an,ce,ne),_w=WT(Ha,Ue,so,nn),qa=_b(kn,an,so,Eb(an,mi)),vw=nT(ur,ue,mi,Be,qa),xw=zT(_w),yw=tT(we,xw,vw,ce,ne,gs),Sw=FS(Bn,Fi,dr,so,nn,Bf,ne,ro),tp=new WeakMap,Mw=xT(Kb,Sw,Yf,ne,tp,hr),ep=$T(Wa,kn,Hl,Gf,Wl,Hf),Tw=cb($n,ep,ue,Jn,Be),bw=ab(we,Bn,ep,Tw,ce,ne,hr),np=fM(ur),ww=ib(np,Ue,an,Vf,Ui),Xa=nb(np,Ue,ww,Vf,Ui,oo,ro),Ew=KT(la,Ue,Fi,an,so,Xa,nn,ha,Bf,Ui),ip=JT(Ew),Aw=ub($n,Fi,dr,an,ip,ue,mi,Jn,Be,qa),Cw=hb(we,Bn,ip,Aw,ce,ne,gs),Rw=QT(Zn),Pw=fb(Rw,ce,new WeakSet,kb),Dw=eb(Fi,io,an,Xa,nn,Ui),sp=tb(Dw,nn),Lw=Tb($n,sp,ue,Jn,Be),Nw=Mb(we,Bn,sp,Lw,ce,ne),Iw=Pb(Xa,ue,Be),Ow=Rb(we,Ue,Xa,Iw,ce,ne,gs),rp=fT(qn),Jl=BM(qn),op=new WeakMap,Uw=$M(op,mi),Fw=rp?pS(kn,nn,FM(qn),Jl,VM(lS),ce,Uw,ne,kr,new WeakMap,new WeakMap,wb(kr,mi),qn):void 0,kw=uT(Xl,ne),Bw=TM(jl,kn,MM,UM,new WeakSet,ce,kw,aa,Fr,Zl,$l),ap=tM(Fw,Zb,$f,Jb,tw,iw,rw,cw,hw,Bw,dw,pw,gw,yw,Mw,bw,Cw,Pw,Nw,Ow),Vw=pT(we,qT,ce,ne),zw=gT(we,XT,ce,ne),Gw=_T(we,YT,ce,ne),Hw=jT(Ue,ne),Ww=vT(we,Hw,ce),qw=IS(ap,Ue,nn,Ab,Vw,zw,Gw,Ww,oo),Kl=JM(tp),Xw=vS(Kl),cp=dM(Zn),Yw=RM(Kl),lp=LM(Zn),hp=new WeakMap,jw=WM(hp,On),Zw=IT(cp,Zn,Ue,Fi,io,dr,an,so,nn,lp,Jl,jw,Ui),$w=PT(Ue,Zw,an,nn,Ui),Jw=QS($n,cp,ur,Fi,io,dr,an,Yw,lp,Jl,ue,kr,mi,Jn,Be,qa),Kw=jM(op),Qw=vb(hp),fd=rp?$S(Xw,we,Bn,Jw,$w,tn,Kw,ce,ne,kr,Ub,Qw,Gb,hr):void 0,tE=SM(nn,mi),eE=yb(jl,kn,ql,Kl,qa,aa,Zl,$l),nE=rb(ap,kn,Ue,tE,eE),iE=sT(za,Xl),sE=rT(Ul,Yl),rE=oT(Fl,jf),oE=aT(za,ne);function Tn(i){return i===void 0}function jt(i){return i!==void 0}function aE(i){return typeof i=="function"}function Un(i){return typeof i=="number"}function es(i){return Object.prototype.toString.call(i)==="[object Object]"&&i.constructor===Object}function up(i){return typeof i=="boolean"}function mn(i){return Array.isArray(i)}function pi(i){return typeof i=="string"}function Xo(i){return pi(i)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(i)}function Rt(i,t){if(!i)throw new Error(t)}function Xn(i,t,e=1/0){if(!(t<=i&&i<=e))throw new RangeError(`Value must be within [${t}, ${e}], got: ${i}`)}function dp(i){!i.isOffline&&i.state!=="running"&&Ya('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let fp=!1,pd=!1;function md(i){fp=i}function cE(i){Tn(i)&&fp&&!pd&&(pd=!0,Ya("Events scheduled inside of scheduled callbacks should use the passed in scheduling time. See https://github.com/Tonejs/Tone.js/wiki/Accurate-Timing"))}let pp=console;function lE(...i){pp.log(...i)}function Ya(...i){pp.warn(...i)}function hE(i){return new qw(i)}function uE(i,t,e){return new nE(i,t,e)}const ns=typeof self=="object"?self:null,dE=ns&&(ns.hasOwnProperty("AudioContext")||ns.hasOwnProperty("webkitAudioContext"));function fE(i,t,e){return Rt(jt(fd),"This node only works in a secure context (https or localhost)"),new fd(i,t,e)}function Vn(i,t,e,n){var s=arguments.length,r=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,e):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,t,e,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(t,e,r):o(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r}function be(i,t,e,n){function s(r){return r instanceof e?r:new e(function(o){o(r)})}return new(e||(e=Promise))(function(r,o){function a(h){try{l(n.next(h))}catch(u){o(u)}}function c(h){try{l(n.throw(h))}catch(u){o(u)}}function l(h){h.done?r(h.value):s(h.value).then(a,c)}l((n=n.apply(i,t||[])).next())})}class pE{constructor(t,e,n,s){this._callback=t,this._type=e,this._minimumUpdateInterval=Math.max(128/(s||44100),.001),this.updateInterval=n,this._createClock()}_createWorker(){const t=new Blob([`
			// the initial timeout time
			let timeoutTime =  ${(this._updateInterval*1e3).toFixed(1)};
			// onmessage callback
			self.onmessage = function(msg){
				timeoutTime = parseInt(msg.data);
			};
			// the tick function which posts a message
			// and schedules a new tick
			function tick(){
				setTimeout(tick, timeoutTime);
				self.postMessage('tick');
			}
			// call tick initially
			tick();
			`],{type:"text/javascript"}),e=URL.createObjectURL(t),n=new Worker(e);n.onmessage=this._callback.bind(this),this._worker=n}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},this._updateInterval*1e3)}_createClock(){if(this._type==="worker")try{this._createWorker()}catch{this._type="timeout",this._createClock()}else this._type==="timeout"&&this._createTimeout()}_disposeClock(){this._timeout&&clearTimeout(this._timeout),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(t){var e;this._updateInterval=Math.max(t,this._minimumUpdateInterval),this._type==="worker"&&((e=this._worker)===null||e===void 0||e.postMessage(this._updateInterval*1e3))}get type(){return this._type}set type(t){this._disposeClock(),this._type=t,this._createClock()}dispose(){this._disposeClock()}}function as(i){return rE(i)}function Di(i){return sE(i)}function $o(i){return oE(i)}function Fs(i){return iE(i)}function mE(i){return i instanceof $f}function gE(i,t){return i==="value"||as(t)||Di(t)||mE(t)}function is(i,...t){if(!t.length)return i;const e=t.shift();if(es(i)&&es(e))for(const n in e)gE(n,e[n])?i[n]=e[n]:es(e[n])?(i[n]||Object.assign(i,{[n]:{}}),is(i[n],e[n])):Object.assign(i,{[n]:e[n]});return is(i,...t)}function _E(i,t){return i.length===t.length&&i.every((e,n)=>t[n]===e)}function ct(i,t,e=[],n){const s={},r=Array.from(t);if(es(r[0])&&n&&!Reflect.has(r[0],n)&&(Object.keys(r[0]).some(a=>Reflect.has(i,a))||(is(s,{[n]:r[0]}),e.splice(e.indexOf(n),1),r.shift())),r.length===1&&es(r[0]))is(s,r[0]);else for(let o=0;o<e.length;o++)jt(r[o])&&(s[e[o]]=r[o]);return is(i,s)}function vE(i){return i.constructor.getDefaults()}function ss(i,t){return Tn(i)?t:i}function Br(i,t){return t.forEach(e=>{Reflect.has(i,e)&&delete i[e]}),i}/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2019 Yotam Mann
 */class gi{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...t){(this.debug||ns&&this.toString()===ns.TONE_DEBUG_CLASS)&&lE(this,...t)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}gi.version=_f;const Ql=1e-6;function Js(i,t){return i>t+Ql}function vl(i,t){return Js(i,t)||Rn(i,t)}function pa(i,t){return i+Ql<t}function Rn(i,t){return Math.abs(i-t)<Ql}function xE(i,t,e){return Math.max(Math.min(i,e),t)}class bn extends gi{constructor(){super(),this.name="Timeline",this._timeline=[];const t=ct(bn.getDefaults(),arguments,["memory"]);this.memory=t.memory,this.increasing=t.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(t){if(Rt(Reflect.has(t,"time"),"Timeline: events must have a time attribute"),t.time=t.time.valueOf(),this.increasing&&this.length){const e=this._timeline[this.length-1];Rt(vl(t.time,e.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(t)}else{const e=this._search(t.time);this._timeline.splice(e+1,0,t)}if(this.length>this.memory){const e=this.length-this.memory;this._timeline.splice(0,e)}return this}remove(t){const e=this._timeline.indexOf(t);return e!==-1&&this._timeline.splice(e,1),this}get(t,e="time"){const n=this._search(t,e);return n!==-1?this._timeline[n]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(t,e="time"){const n=this._search(t,e);return n+1<this._timeline.length?this._timeline[n+1]:null}getBefore(t){const e=this._timeline.length;if(e>0&&this._timeline[e-1].time<t)return this._timeline[e-1];const n=this._search(t);return n-1>=0?this._timeline[n-1]:null}cancel(t){if(this._timeline.length>1){let e=this._search(t);if(e>=0)if(Rn(this._timeline[e].time,t)){for(let n=e;n>=0&&Rn(this._timeline[n].time,t);n--)e=n;this._timeline=this._timeline.slice(0,e)}else this._timeline=this._timeline.slice(0,e+1);else this._timeline=[]}else this._timeline.length===1&&vl(this._timeline[0].time,t)&&(this._timeline=[]);return this}cancelBefore(t){const e=this._search(t);return e>=0&&(this._timeline=this._timeline.slice(e+1)),this}previousEvent(t){const e=this._timeline.indexOf(t);return e>0?this._timeline[e-1]:null}_search(t,e="time"){if(this._timeline.length===0)return-1;let n=0;const s=this._timeline.length;let r=s;if(s>0&&this._timeline[s-1][e]<=t)return s-1;for(;n<r;){let o=Math.floor(n+(r-n)/2);const a=this._timeline[o],c=this._timeline[o+1];if(Rn(a[e],t)){for(let l=o;l<this._timeline.length;l++){const h=this._timeline[l];if(Rn(h[e],t))o=l;else break}return o}else{if(pa(a[e],t)&&Js(c[e],t))return o;Js(a[e],t)?r=o:n=o+1}}return-1}_iterate(t,e=0,n=this._timeline.length-1){this._timeline.slice(e,n+1).forEach(t)}forEach(t){return this._iterate(t),this}forEachBefore(t,e){const n=this._search(t);return n!==-1&&this._iterate(e,0,n),this}forEachAfter(t,e){const n=this._search(t);return this._iterate(e,n+1),this}forEachBetween(t,e,n){let s=this._search(t),r=this._search(e);return s!==-1&&r!==-1?(this._timeline[s].time!==t&&(s+=1),this._timeline[r].time===e&&(r-=1),this._iterate(n,s,r)):s===-1&&this._iterate(n,0,r),this}forEachFrom(t,e){let n=this._search(t);for(;n>=0&&this._timeline[n].time>=t;)n--;return this._iterate(e,n+1),this}forEachAtTime(t,e){const n=this._search(t);if(n!==-1&&Rn(this._timeline[n].time,t)){let s=n;for(let r=n;r>=0&&Rn(this._timeline[r].time,t);r--)s=r;this._iterate(r=>{e(r)},s,n)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const mp=[];function ja(i){mp.push(i)}function yE(i){mp.forEach(t=>t(i))}const gp=[];function Za(i){gp.push(i)}function SE(i){gp.forEach(t=>t(i))}class ao extends gi{constructor(){super(...arguments),this.name="Emitter"}on(t,e){return t.split(/\W+/).forEach(s=>{Tn(this._events)&&(this._events={}),this._events.hasOwnProperty(s)||(this._events[s]=[]),this._events[s].push(e)}),this}once(t,e){const n=(...s)=>{e(...s),this.off(t,n)};return this.on(t,n),this}off(t,e){return t.split(/\W+/).forEach(s=>{if(Tn(this._events)&&(this._events={}),this._events.hasOwnProperty(s))if(Tn(e))this._events[s]=[];else{const r=this._events[s];for(let o=r.length-1;o>=0;o--)r[o]===e&&r.splice(o,1)}}),this}emit(t,...e){if(this._events&&this._events.hasOwnProperty(t)){const n=this._events[t].slice(0);for(let s=0,r=n.length;s<r;s++)n[s].apply(this,e)}return this}static mixin(t){["on","once","off","emit"].forEach(e=>{const n=Object.getOwnPropertyDescriptor(ao.prototype,e);Object.defineProperty(t.prototype,e,n)})}dispose(){return super.dispose(),this._events=void 0,this}}class _p extends ao{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class co extends _p{constructor(){var t,e;super(),this.name="Context",this._constants=new Map,this._timeouts=new bn,this._timeoutIds=0,this._initialized=!1,this._closeStarted=!1,this.isOffline=!1,this._workletPromise=null;const n=ct(co.getDefaults(),arguments,["context"]);n.context?(this._context=n.context,this._latencyHint=((t=arguments[0])===null||t===void 0?void 0:t.latencyHint)||""):(this._context=hE({latencyHint:n.latencyHint}),this._latencyHint=n.latencyHint),this._ticker=new pE(this.emit.bind(this,"tick"),n.clockSource,n.updateInterval,this._context.sampleRate),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this[!((e=arguments[0])===null||e===void 0)&&e.hasOwnProperty("updateInterval")?"_lookAhead":"lookAhead"]=n.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){return this._initialized||(yE(this),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(t,e,n){return this._context.createBuffer(t,e,n)}createChannelMerger(t){return this._context.createChannelMerger(t)}createChannelSplitter(t){return this._context.createChannelSplitter(t)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(t){return this._context.createDelay(t)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(t,e){return this._context.createIIRFilter(t,e)}createPanner(){return this._context.createPanner()}createPeriodicWave(t,e,n){return this._context.createPeriodicWave(t,e,n)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(t){return Rt(Fs(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamSource(t)}createMediaElementSource(t){return Rt(Fs(this._context),"Not available if OfflineAudioContext"),this._context.createMediaElementSource(t)}createMediaStreamDestination(){return Rt(Fs(this._context),"Not available if OfflineAudioContext"),this._context.createMediaStreamDestination()}decodeAudioData(t){return this._context.decodeAudioData(t)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(t){Rt(!this._initialized,"The listener cannot be set after initialization."),this._listener=t}get transport(){return this.initialize(),this._transport}set transport(t){Rt(!this._initialized,"The transport cannot be set after initialization."),this._transport=t}get draw(){return this.initialize(),this._draw}set draw(t){Rt(!this._initialized,"Draw cannot be set after initialization."),this._draw=t}get destination(){return this.initialize(),this._destination}set destination(t){Rt(!this._initialized,"The destination cannot be set after initialization."),this._destination=t}createAudioWorkletNode(t,e){return fE(this.rawContext,t,e)}addAudioWorkletModule(t){return be(this,void 0,void 0,function*(){Rt(jt(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletPromise||(this._workletPromise=this.rawContext.audioWorklet.addModule(t)),yield this._workletPromise})}workletsAreReady(){return be(this,void 0,void 0,function*(){(yield this._workletPromise)?this._workletPromise:Promise.resolve()})}get updateInterval(){return this._ticker.updateInterval}set updateInterval(t){this._ticker.updateInterval=t}get clockSource(){return this._ticker.type}set clockSource(t){this._ticker.type=t}get lookAhead(){return this._lookAhead}set lookAhead(t){this._lookAhead=t,this.updateInterval=t?t/2:.01}get latencyHint(){return this._latencyHint}get rawContext(){return this._context}now(){return this._context.currentTime+this._lookAhead}immediate(){return this._context.currentTime}resume(){return Fs(this._context)?this._context.resume():Promise.resolve()}close(){return be(this,void 0,void 0,function*(){Fs(this._context)&&this.state!=="closed"&&!this._closeStarted&&(this._closeStarted=!0,yield this._context.close()),this._initialized&&SE(this)})}getConstant(t){if(this._constants.has(t))return this._constants.get(t);{const e=this._context.createBuffer(1,128,this._context.sampleRate),n=e.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=t;const s=this._context.createBufferSource();return s.channelCount=1,s.channelCountMode="explicit",s.buffer=e,s.loop=!0,s.start(0),this._constants.set(t,s),s}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(t=>this._constants[t].disconnect()),this.close(),this}_timeoutLoop(){const t=this.now();let e=this._timeouts.peek();for(;this._timeouts.length&&e&&e.time<=t;)e.callback(),this._timeouts.shift(),e=this._timeouts.peek()}setTimeout(t,e){this._timeoutIds++;const n=this.now();return this._timeouts.add({callback:t,id:this._timeoutIds,time:n+e}),this._timeoutIds}clearTimeout(t){return this._timeouts.forEach(e=>{e.id===t&&this._timeouts.remove(e)}),this}clearInterval(t){return this.clearTimeout(t)}setInterval(t,e){const n=++this._timeoutIds,s=()=>{const r=this.now();this._timeouts.add({callback:()=>{t(),s()},id:n,time:r+e})};return s(),n}}class ME extends _p{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(t,e,n){return{}}createChannelMerger(t){return{}}createChannelSplitter(t){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(t){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(t,e){return{}}createPanner(){return{}}createPeriodicWave(t,e,n){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(t){return{}}createMediaElementSource(t){return{}}createMediaStreamDestination(){return{}}decodeAudioData(t){return Promise.resolve({})}createAudioWorkletNode(t,e){return{}}get rawContext(){return{}}addAudioWorkletModule(t){return be(this,void 0,void 0,function*(){return Promise.resolve()})}resume(){return Promise.resolve()}setTimeout(t,e){return 0}clearTimeout(t){return this}setInterval(t,e){return 0}clearInterval(t){return this}getConstant(t){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(t){}get destination(){return{}}set destination(t){}now(){return 0}immediate(){return 0}}function de(i,t){mn(t)?t.forEach(e=>de(i,e)):Object.defineProperty(i,t,{enumerable:!0,writable:!1})}function th(i,t){mn(t)?t.forEach(e=>th(i,e)):Object.defineProperty(i,t,{writable:!0})}const $t=()=>{};class Kt extends gi{constructor(){super(),this.name="ToneAudioBuffer",this.onload=$t;const t=ct(Kt.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=t.reverse,this.onload=t.onload,pi(t.url)?this.load(t.url).catch(t.onerror):t.url&&this.set(t.url)}static getDefaults(){return{onerror:$t,onload:$t,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:Sn().sampleRate}set(t){return t instanceof Kt?t.loaded?this._buffer=t.get():t.onload=()=>{this.set(t),this.onload(this)}:this._buffer=t,this._reversed&&this._reverse(),this}get(){return this._buffer}load(t){return be(this,void 0,void 0,function*(){const e=Kt.load(t).then(n=>{this.set(n),this.onload(this)});Kt.downloads.push(e);try{yield e}finally{const n=Kt.downloads.indexOf(e);Kt.downloads.splice(n,1)}return this})}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(t){const e=mn(t)&&t[0].length>0,n=e?t.length:1,s=e?t[0].length:t.length,r=Sn(),o=r.createBuffer(n,s,r.sampleRate),a=!e&&n===1?[t]:t;for(let c=0;c<n;c++)o.copyToChannel(a[c],c);return this._buffer=o,this}toMono(t){if(Un(t))this.fromArray(this.toArray(t));else{let e=new Float32Array(this.length);const n=this.numberOfChannels;for(let s=0;s<n;s++){const r=this.toArray(s);for(let o=0;o<r.length;o++)e[o]+=r[o]}e=e.map(s=>s/n),this.fromArray(e)}return this}toArray(t){if(Un(t))return this.getChannelData(t);if(this.numberOfChannels===1)return this.toArray(0);{const e=[];for(let n=0;n<this.numberOfChannels;n++)e[n]=this.getChannelData(n);return e}}getChannelData(t){return this._buffer?this._buffer.getChannelData(t):new Float32Array(0)}slice(t,e=this.duration){Rt(this.loaded,"Buffer is not loaded");const n=Math.floor(t*this.sampleRate),s=Math.floor(e*this.sampleRate);Rt(n<s,"The start time must be less than the end time");const r=s-n,o=Sn().createBuffer(this.numberOfChannels,r,this.sampleRate);for(let a=0;a<this.numberOfChannels;a++)o.copyToChannel(this.getChannelData(a).subarray(n,s),a);return new Kt(o)}_reverse(){if(this.loaded)for(let t=0;t<this.numberOfChannels;t++)this.getChannelData(t).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(t){this._reversed!==t&&(this._reversed=t,this._reverse())}static fromArray(t){return new Kt().fromArray(t)}static fromUrl(t){return be(this,void 0,void 0,function*(){return yield new Kt().load(t)})}static load(t){return be(this,void 0,void 0,function*(){const e=t.match(/\[([^\]\[]+\|.+)\]$/);if(e){const c=e[1].split("|");let l=c[0];for(const h of c)if(Kt.supportsType(h)){l=h;break}t=t.replace(e[0],l)}const n=Kt.baseUrl===""||Kt.baseUrl.endsWith("/")?Kt.baseUrl:Kt.baseUrl+"/",s=document.createElement("a");s.href=n+t,s.pathname=(s.pathname+s.hash).split("/").map(encodeURIComponent).join("/");const r=yield fetch(s.href);if(!r.ok)throw new Error(`could not load url: ${t}`);const o=yield r.arrayBuffer();return yield Sn().decodeAudioData(o)})}static supportsType(t){const e=t.split("."),n=e[e.length-1];return document.createElement("audio").canPlayType("audio/"+n)!==""}static loaded(){return be(this,void 0,void 0,function*(){for(yield Promise.resolve();Kt.downloads.length;)yield Kt.downloads[0]})}}Kt.baseUrl="";Kt.downloads=[];class $a extends co{constructor(){super({clockSource:"offline",context:$o(arguments[0])?arguments[0]:uE(arguments[0],arguments[1]*arguments[2],arguments[2]),lookAhead:0,updateInterval:$o(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=$o(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(t){return be(this,void 0,void 0,function*(){let e=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,e++;const n=Math.floor(this.sampleRate/128);t&&e%n===0&&(yield new Promise(s=>setTimeout(s,1)))}})}render(t=!0){return be(this,void 0,void 0,function*(){yield this.workletsAreReady(),yield this._renderClock(t);const e=yield this._context.startRendering();return new Kt(e)})}close(){return Promise.resolve()}}const vp=new ME;let Zi=vp;function Sn(){return Zi===vp&&dE&&TE(new co),Zi}function TE(i,t=!1){t&&Zi.dispose(),Fs(i)?Zi=new co(i):$o(i)?Zi=new $a(i):Zi=i}function bE(){return Zi.resume()}if(ns&&!ns.TONE_SILENCE_LOGGING){const t=` * Tone.js v${_f} * `;console.log(`%c${t}`,"background: #000; color: #fff")}function wE(i){return Math.pow(10,i/20)}function EE(i){return 20*(Math.log(i)/Math.LN10)}function xp(i){return Math.pow(2,i/12)}let Ja=440;function AE(){return Ja}function CE(i){Ja=i}function $i(i){return Math.round(yp(i))}function yp(i){return 69+12*Math.log2(i/Ja)}function Sp(i){return Ja*Math.pow(2,(i-69)/12)}class eh extends gi{constructor(t,e,n){super(),this.defaultUnits="s",this._val=e,this._units=n,this.context=t,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:t=>this._frequencyToUnits(parseFloat(t)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:t=>this._ticksToUnits(parseInt(t,10)),regexp:/^(\d+)i$/i},m:{method:t=>this._beatsToUnits(parseInt(t,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(t,e)=>{const n=parseInt(t,10),s=e==="."?1.5:1;return n===1?this._beatsToUnits(this._getTimeSignature())*s:this._beatsToUnits(4/n)*s},regexp:/^(\d+)n(\.?)$/i},number:{method:t=>this._expressions[this.defaultUnits].method.call(this,t),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:t=>this._secondsToUnits(parseFloat(t)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:t=>parseInt(t,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:t=>{const e=parseInt(t,10);return this._beatsToUnits(8/(Math.floor(e)*3))},regexp:/^(\d+)t$/i},tr:{method:(t,e,n)=>{let s=0;return t&&t!=="0"&&(s+=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&e!=="0"&&(s+=this._beatsToUnits(parseFloat(e))),n&&n!=="0"&&(s+=this._beatsToUnits(parseFloat(n)/4)),s},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof eh&&this.fromType(this._val),Tn(this._val))return this._noArg();if(pi(this._val)&&Tn(this._units)){for(const t in this._expressions)if(this._expressions[t].regexp.test(this._val.trim())){this._units=t;break}}else if(es(this._val)){let t=0;for(const e in this._val)if(jt(this._val[e])){const n=this._val[e],s=new this.constructor(this.context,e).valueOf()*n;t+=s}return t}if(jt(this._units)){const t=this._expressions[this._units],e=this._val.toString().trim().match(t.regexp);return e?t.method.apply(this,e.slice(1)):t.method.call(this,this._val)}else return pi(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(t){return 1/t}_beatsToUnits(t){return 60/this._getBpm()*t}_secondsToUnits(t){return t}_ticksToUnits(t){return t*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(t){switch(this._units=void 0,this.defaultUnits){case"s":this._val=t.toSeconds();break;case"i":this._val=t.toTicks();break;case"hz":this._val=t.toFrequency();break;case"midi":this._val=t.toMidi();break}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return this.toSeconds()*1e3}}class Nn extends eh{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:t=>this._now()+new this.constructor(this.context,t).valueOf(),regexp:/^\+(.+)/},quantize:{method:t=>{const e=new Nn(this.context,t).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(e))},regexp:/^@(.+)/}})}quantize(t,e=1){const n=new this.constructor(this.context,t).valueOf(),s=this.valueOf(),a=Math.round(s/n)*n-s;return s+a*e}toNotation(){const t=this.toSeconds(),e=["1m"];for(let r=1;r<9;r++){const o=Math.pow(2,r);e.push(o+"n."),e.push(o+"n"),e.push(o+"t")}e.push("0");let n=e[0],s=new Nn(this.context,e[0]).toSeconds();return e.forEach(r=>{const o=new Nn(this.context,r).toSeconds();Math.abs(o-t)<Math.abs(s-t)&&(n=r,s=o)}),n}toBarsBeatsSixteenths(){const t=this._beatsToUnits(1);let e=this.valueOf()/t;e=parseFloat(e.toFixed(4));const n=Math.floor(e/this._getTimeSignature());let s=e%1*4;e=Math.floor(e)%this._getTimeSignature();const r=s.toString();return r.length>3&&(s=parseFloat(parseFloat(r).toFixed(3))),[n,e,s].join(":")}toTicks(){const t=this._beatsToUnits(1);return this.valueOf()/t*this._getPPQ()}toSeconds(){return this.valueOf()}toMidi(){return $i(this.toFrequency())}_now(){return this.context.now()}}class fn extends Nn{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return AE()}static set A4(t){CE(t)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(t){return this.defaultUnits==="midi"?t:fn.mtof(t)}},note:{regexp:/^([a-g]{1}(?:b|#|##|x|bb|###|#x|x#|bbb)?)(-?[0-9]+)/i,method(t,e){const s=RE[t.toLowerCase()]+(parseInt(e,10)+1)*12;return this.defaultUnits==="midi"?s:fn.mtof(s)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(t,e,n){let s=1;return t&&t!=="0"&&(s*=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&e!=="0"&&(s*=this._beatsToUnits(parseFloat(e))),n&&n!=="0"&&(s*=this._beatsToUnits(parseFloat(n)/4)),s}}})}transpose(t){return new fn(this.context,this.valueOf()*xp(t))}harmonize(t){return t.map(e=>this.transpose(e))}toMidi(){return $i(this.valueOf())}toNote(){const t=this.toFrequency(),e=Math.log2(t/fn.A4);let n=Math.round(12*e)+57;const s=Math.floor(n/12);return s<0&&(n+=-12*s),PE[n%12]+s.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.floor(e*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(t){return t}_ticksToUnits(t){return 1/(t*60/(this._getBpm()*this._getPPQ()))}_beatsToUnits(t){return 1/super._beatsToUnits(t)}_secondsToUnits(t){return 1/t}static mtof(t){return Sp(t)}static ftom(t){return $i(t)}}const RE={cbbb:-3,cbb:-2,cb:-1,c:0,"c#":1,cx:2,"c##":2,"c###":3,"cx#":3,"c#x":3,dbbb:-1,dbb:0,db:1,d:2,"d#":3,dx:4,"d##":4,"d###":5,"dx#":5,"d#x":5,ebbb:1,ebb:2,eb:3,e:4,"e#":5,ex:6,"e##":6,"e###":7,"ex#":7,"e#x":7,fbbb:2,fbb:3,fb:4,f:5,"f#":6,fx:7,"f##":7,"f###":8,"fx#":8,"f#x":8,gbbb:4,gbb:5,gb:6,g:7,"g#":8,gx:9,"g##":9,"g###":10,"gx#":10,"g#x":10,abbb:6,abb:7,ab:8,a:9,"a#":10,ax:11,"a##":11,"a###":12,"ax#":12,"a#x":12,bbbb:8,bbb:9,bb:10,b:11,"b#":12,bx:13,"b##":13,"b###":14,"bx#":14,"b#x":14},PE=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];class Pr extends Nn{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}class Fe extends gi{constructor(){super();const t=ct(Fe.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=t.context}static getDefaults(){return{context:Sn()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(t){return cE(t),new Nn(this.context,t).toSeconds()}toFrequency(t){return new fn(this.context,t).toFrequency()}toTicks(t){return new Pr(this.context,t).toTicks()}_getPartialProperties(t){const e=this.get();return Object.keys(e).forEach(n=>{Tn(t[n])&&delete e[n]}),e}get(){const t=vE(this);return Object.keys(t).forEach(e=>{if(Reflect.has(this,e)){const n=this[e];jt(n)&&jt(n.value)&&jt(n.setValueAtTime)?t[e]=n.value:n instanceof Fe?t[e]=n._getPartialProperties(t[e]):mn(n)||Un(n)||pi(n)||up(n)?t[e]=n:delete t[e]}}),t}set(t){return Object.keys(t).forEach(e=>{Reflect.has(this,e)&&jt(this[e])&&(this[e]&&jt(this[e].value)&&jt(this[e].setValueAtTime)?this[e].value!==t[e]&&(this[e].value=t[e]):this[e]instanceof Fe?this[e].set(t[e]):this[e]=t[e])}),this}}class Ka extends bn{constructor(t="stopped"){super(),this.name="StateTimeline",this._initial=t,this.setStateAtTime(this._initial,0)}getValueAtTime(t){const e=this.get(t);return e!==null?e.state:this._initial}setStateAtTime(t,e,n){return Xn(e,0),this.add(Object.assign({},n,{state:t,time:e})),this}getLastState(t,e){const n=this._search(e);for(let s=n;s>=0;s--){const r=this._timeline[s];if(r.state===t)return r}}getNextState(t,e){const n=this._search(e);if(n!==-1)for(let s=n;s<this._timeline.length;s++){const r=this._timeline[s];if(r.state===t)return r}}}class te extends Fe{constructor(){super(ct(te.getDefaults(),arguments,["param","units","convert"])),this.name="Param",this.overridden=!1,this._minOutput=1e-7;const t=ct(te.getDefaults(),arguments,["param","units","convert"]);for(Rt(jt(t.param)&&(as(t.param)||t.param instanceof te),"param must be an AudioParam");!as(t.param);)t.param=t.param._param;this._swappable=jt(t.swappable)?t.swappable:!1,this._swappable?(this.input=this.context.createGain(),this._param=t.param,this.input.connect(this._param)):this._param=this.input=t.param,this._events=new bn(1e3),this._initialValue=this._param.defaultValue,this.units=t.units,this.convert=t.convert,this._minValue=t.minValue,this._maxValue=t.maxValue,jt(t.value)&&t.value!==this._toType(this._initialValue)&&this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(Fe.getDefaults(),{convert:!0,units:"number"})}get value(){const t=this.now();return this.getValueAtTime(t)}set value(t){this.cancelScheduledValues(this.now()),this.setValueAtTime(t,this.now())}get minValue(){return jt(this._minValue)?this._minValue:this.units==="time"||this.units==="frequency"||this.units==="normalRange"||this.units==="positive"||this.units==="transportTime"||this.units==="ticks"||this.units==="bpm"||this.units==="hertz"||this.units==="samples"?0:this.units==="audioRange"?-1:this.units==="decibels"?-1/0:this._param.minValue}get maxValue(){return jt(this._maxValue)?this._maxValue:this.units==="normalRange"||this.units==="audioRange"?1:this._param.maxValue}_is(t,e){return this.units===e}_assertRange(t){return jt(this.maxValue)&&jt(this.minValue)&&Xn(t,this._fromType(this.minValue),this._fromType(this.maxValue)),t}_fromType(t){return this.convert&&!this.overridden?this._is(t,"time")?this.toSeconds(t):this._is(t,"decibels")?wE(t):this._is(t,"frequency")?this.toFrequency(t):t:this.overridden?0:t}_toType(t){return this.convert&&this.units==="decibels"?EE(t):t}setValueAtTime(t,e){const n=this.toSeconds(e),s=this._fromType(t);return Rt(isFinite(s)&&isFinite(n),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._assertRange(s),this.log(this.units,"setValueAtTime",t,n),this._events.add({time:n,type:"setValueAtTime",value:s}),this._param.setValueAtTime(s,n),this}getValueAtTime(t){const e=Math.max(this.toSeconds(t),0),n=this._events.getAfter(e),s=this._events.get(e);let r=this._initialValue;if(s===null)r=this._initialValue;else if(s.type==="setTargetAtTime"&&(n===null||n.type==="setValueAtTime")){const o=this._events.getBefore(s.time);let a;o===null?a=this._initialValue:a=o.value,s.type==="setTargetAtTime"&&(r=this._exponentialApproach(s.time,a,s.value,s.constant,e))}else if(n===null)r=s.value;else if(n.type==="linearRampToValueAtTime"||n.type==="exponentialRampToValueAtTime"){let o=s.value;if(s.type==="setTargetAtTime"){const a=this._events.getBefore(s.time);a===null?o=this._initialValue:o=a.value}n.type==="linearRampToValueAtTime"?r=this._linearInterpolate(s.time,o,n.time,n.value,e):r=this._exponentialInterpolate(s.time,o,n.time,n.value,e)}else r=s.value;return this._toType(r)}setRampPoint(t){t=this.toSeconds(t);let e=this.getValueAtTime(t);return this.cancelAndHoldAtTime(t),this._fromType(e)===0&&(e=this._toType(this._minOutput)),this.setValueAtTime(e,t),this}linearRampToValueAtTime(t,e){const n=this._fromType(t),s=this.toSeconds(e);return Rt(isFinite(n)&&isFinite(s),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._assertRange(n),this._events.add({time:s,type:"linearRampToValueAtTime",value:n}),this.log(this.units,"linearRampToValueAtTime",t,s),this._param.linearRampToValueAtTime(n,s),this}exponentialRampToValueAtTime(t,e){let n=this._fromType(t);n=Rn(n,0)?this._minOutput:n,this._assertRange(n);const s=this.toSeconds(e);return Rt(isFinite(n)&&isFinite(s),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._events.add({time:s,type:"exponentialRampToValueAtTime",value:n}),this.log(this.units,"exponentialRampToValueAtTime",t,s),this._param.exponentialRampToValueAtTime(n,s),this}exponentialRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialRampToValueAtTime(t,n+this.toSeconds(e)),this}linearRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.linearRampToValueAtTime(t,n+this.toSeconds(e)),this}targetRampTo(t,e,n){return n=this.toSeconds(n),this.setRampPoint(n),this.exponentialApproachValueAtTime(t,n,e),this}exponentialApproachValueAtTime(t,e,n){e=this.toSeconds(e),n=this.toSeconds(n);const s=Math.log(n+1)/Math.log(200);return this.setTargetAtTime(t,e,s),this.cancelAndHoldAtTime(e+n*.9),this.linearRampToValueAtTime(t,e+n),this}setTargetAtTime(t,e,n){const s=this._fromType(t);Rt(isFinite(n)&&n>0,"timeConstant must be a number greater than 0");const r=this.toSeconds(e);return this._assertRange(s),Rt(isFinite(s)&&isFinite(r),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._events.add({constant:n,time:r,type:"setTargetAtTime",value:s}),this.log(this.units,"setTargetAtTime",t,r,n),this._param.setTargetAtTime(s,r,n),this}setValueCurveAtTime(t,e,n,s=1){n=this.toSeconds(n),e=this.toSeconds(e);const r=this._fromType(t[0])*s;this.setValueAtTime(this._toType(r),e);const o=n/(t.length-1);for(let a=1;a<t.length;a++){const c=this._fromType(t[a])*s;this.linearRampToValueAtTime(this._toType(c),e+a*o)}return this}cancelScheduledValues(t){const e=this.toSeconds(t);return Rt(isFinite(e),`Invalid argument to cancelScheduledValues: ${JSON.stringify(t)}`),this._events.cancel(e),this._param.cancelScheduledValues(e),this.log(this.units,"cancelScheduledValues",e),this}cancelAndHoldAtTime(t){const e=this.toSeconds(t),n=this._fromType(this.getValueAtTime(e));Rt(isFinite(e),`Invalid argument to cancelAndHoldAtTime: ${JSON.stringify(t)}`),this.log(this.units,"cancelAndHoldAtTime",e,"value="+n);const s=this._events.get(e),r=this._events.getAfter(e);return s&&Rn(s.time,e)?r?(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time)):(this._param.cancelAndHoldAtTime(e),this._events.cancel(e+this.sampleTime)):r&&(this._param.cancelScheduledValues(r.time),this._events.cancel(r.time),r.type==="linearRampToValueAtTime"?this.linearRampToValueAtTime(this._toType(n),e):r.type==="exponentialRampToValueAtTime"&&this.exponentialRampToValueAtTime(this._toType(n),e)),this._events.add({time:e,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,e),this}rampTo(t,e=.1,n){return this.units==="frequency"||this.units==="bpm"||this.units==="decibels"?this.exponentialRampTo(t,e,n):this.linearRampTo(t,e,n),this}apply(t){const e=this.context.currentTime;t.setValueAtTime(this.getValueAtTime(e),e);const n=this._events.get(e);if(n&&n.type==="setTargetAtTime"){const s=this._events.getAfter(n.time),r=s?s.time:e+2,o=(r-e)/10;for(let a=e;a<r;a+=o)t.linearRampToValueAtTime(this.getValueAtTime(a),a)}return this._events.forEachAfter(this.context.currentTime,s=>{s.type==="cancelScheduledValues"?t.cancelScheduledValues(s.time):s.type==="setTargetAtTime"?t.setTargetAtTime(s.value,s.time,s.constant):t[s.type](s.value,s.time)}),this}setParam(t){Rt(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const e=this.input;return e.disconnect(this._param),this.apply(t),this._param=t,e.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(t,e,n,s,r){return n+(e-n)*Math.exp(-(r-t)/s)}_linearInterpolate(t,e,n,s,r){return e+(s-e)*((r-t)/(n-t))}_exponentialInterpolate(t,e,n,s,r){return e*Math.pow(s/e,(r-t)/(n-t))}}class Nt extends Fe{constructor(){super(...arguments),this._internalChannels=[]}get numberOfInputs(){return jt(this.input)?as(this.input)||this.input instanceof te?1:this.input.numberOfInputs:0}get numberOfOutputs(){return jt(this.output)?this.output.numberOfOutputs:0}_isAudioNode(t){return jt(t)&&(t instanceof Nt||Di(t))}_getInternalNodes(){const t=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&t.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&t.push(this.output),t}_setChannelProperties(t){this._getInternalNodes().forEach(n=>{n.channelCount=t.channelCount,n.channelCountMode=t.channelCountMode,n.channelInterpretation=t.channelInterpretation})}_getChannelProperties(){const t=this._getInternalNodes();Rt(t.length>0,"ToneAudioNode does not have any internal nodes");const e=t[0];return{channelCount:e.channelCount,channelCountMode:e.channelCountMode,channelInterpretation:e.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelCount:t}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelCountMode:t}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelInterpretation:t}))}connect(t,e=0,n=0){return Ni(this,t,e,n),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return Ya("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(t,e=0,n=0){return DE(this,t,e,n),this}chain(...t){return ma(this,...t),this}fan(...t){return t.forEach(e=>this.connect(e)),this}dispose(){return super.dispose(),jt(this.input)&&(this.input instanceof Nt?this.input.dispose():Di(this.input)&&this.input.disconnect()),jt(this.output)&&(this.output instanceof Nt?this.output.dispose():Di(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function ma(...i){const t=i.shift();i.reduce((e,n)=>(e instanceof Nt?e.connect(n):Di(e)&&Ni(e,n),n),t)}function Ni(i,t,e=0,n=0){for(Rt(jt(i),"Cannot connect from undefined node"),Rt(jt(t),"Cannot connect to undefined node"),(t instanceof Nt||Di(t))&&Rt(t.numberOfInputs>0,"Cannot connect to node with no inputs"),Rt(i.numberOfOutputs>0,"Cannot connect from node with no outputs");t instanceof Nt||t instanceof te;)jt(t.input)&&(t=t.input);for(;i instanceof Nt;)jt(i.output)&&(i=i.output);as(t)?i.connect(t,e):i.connect(t,e,n)}function DE(i,t,e=0,n=0){if(jt(t))for(;t instanceof Nt;)t=t.input;for(;!Di(i);)jt(i.output)&&(i=i.output);as(t)?i.disconnect(t,e):Di(t)?i.disconnect(t,e,n):i.disconnect()}class ee extends Nt{constructor(){super(ct(ee.getDefaults(),arguments,["gain","units"])),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode;const t=ct(ee.getDefaults(),arguments,["gain","units"]);this.gain=new te({context:this.context,convert:t.convert,param:this._gainNode.gain,units:t.units,value:t.gain,minValue:t.minValue,maxValue:t.maxValue}),de(this,"gain")}static getDefaults(){return Object.assign(Nt.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class Ks extends Nt{constructor(t){super(t),this.onended=$t,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new ee({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(e){const n=this.toSeconds(e);return this._startTime!==-1&&n>=this._startTime&&(this._stopTime===-1||n<=this._stopTime)?"started":"stopped"},this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut,this._curve=t.curve,this.onended=t.onended}static getDefaults(){return Object.assign(Nt.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:$t})}_startGain(t,e=1){Rt(this._startTime===-1,"Source cannot be started more than once");const n=this.toSeconds(this._fadeIn);return this._startTime=t+n,this._startTime=Math.max(this._startTime,this.context.currentTime),n>0?(this._gainNode.gain.setValueAtTime(0,t),this._curve==="linear"?this._gainNode.gain.linearRampToValueAtTime(e,t+n):this._gainNode.gain.exponentialApproachValueAtTime(e,t,n)):this._gainNode.gain.setValueAtTime(e,t),this}stop(t){return this.log("stop",t),this._stopGain(this.toSeconds(t)),this}_stopGain(t){Rt(this._startTime!==-1,"'start' must be called before 'stop'"),this.cancelStop();const e=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(t)+e,this._stopTime=Math.max(this._stopTime,this.now()),e>0?this._curve==="linear"?this._gainNode.gain.linearRampTo(0,e,t):this._gainNode.gain.targetRampTo(0,e,t):(this._gainNode.gain.cancelAndHoldAtTime(t),this._gainNode.gain.setValueAtTime(0,t)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const n=this._curve==="exponential"?e*2:0;this._stopSource(this.now()+n),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==$t&&(this.onended(this),this.onended=$t,!this.context.isOffline)){const t=()=>this.dispose();typeof window.requestIdleCallback<"u"?window.requestIdleCallback(t):setTimeout(t,1e3)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),Rt(this._startTime!==-1,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.dispose(),this.onended=$t,this}}class ga extends Ks{constructor(){super(ct(ga.getDefaults(),arguments,["offset"])),this.name="ToneConstantSource",this._source=this.context.createConstantSource();const t=ct(ga.getDefaults(),arguments,["offset"]);Ni(this._source,this._gainNode),this.offset=new te({context:this.context,convert:t.convert,param:this._source.offset,units:t.units,value:t.offset,minValue:t.minValue,maxValue:t.maxValue})}static getDefaults(){return Object.assign(Ks.getDefaults(),{convert:!0,offset:1,units:"number"})}start(t){const e=this.toSeconds(t);return this.log("start",e),this._startGain(e),this._source.start(e),this}_stopSource(t){this._source.stop(t)}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class me extends Nt{constructor(){super(ct(me.getDefaults(),arguments,["value","units"])),this.name="Signal",this.override=!0;const t=ct(me.getDefaults(),arguments,["value","units"]);this.output=this._constantSource=new ga({context:this.context,convert:t.convert,offset:t.value,units:t.units,minValue:t.minValue,maxValue:t.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(Nt.getDefaults(),{convert:!0,units:"number",value:0})}connect(t,e=0,n=0){return nh(this,t,e,n),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(t,e){return this._param.setValueAtTime(t,e),this}getValueAtTime(t){return this._param.getValueAtTime(t)}setRampPoint(t){return this._param.setRampPoint(t),this}linearRampToValueAtTime(t,e){return this._param.linearRampToValueAtTime(t,e),this}exponentialRampToValueAtTime(t,e){return this._param.exponentialRampToValueAtTime(t,e),this}exponentialRampTo(t,e,n){return this._param.exponentialRampTo(t,e,n),this}linearRampTo(t,e,n){return this._param.linearRampTo(t,e,n),this}targetRampTo(t,e,n){return this._param.targetRampTo(t,e,n),this}exponentialApproachValueAtTime(t,e,n){return this._param.exponentialApproachValueAtTime(t,e,n),this}setTargetAtTime(t,e,n){return this._param.setTargetAtTime(t,e,n),this}setValueCurveAtTime(t,e,n,s){return this._param.setValueCurveAtTime(t,e,n,s),this}cancelScheduledValues(t){return this._param.cancelScheduledValues(t),this}cancelAndHoldAtTime(t){return this._param.cancelAndHoldAtTime(t),this}rampTo(t,e,n){return this._param.rampTo(t,e,n),this}get value(){return this._param.value}set value(t){this._param.value=t}get convert(){return this._param.convert}set convert(t){this._param.convert=t}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(t){this._param.overridden=t}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(t){return this._param.apply(t),this}}function nh(i,t,e,n){(t instanceof te||as(t)||t instanceof me&&t.override)&&(t.cancelScheduledValues(0),t.setValueAtTime(0,0),t instanceof me&&(t.overridden=!0)),Ni(i,t,e,n)}class _a extends te{constructor(){super(ct(_a.getDefaults(),arguments,["value"])),this.name="TickParam",this._events=new bn(1/0),this._multiplier=1;const t=ct(_a.getDefaults(),arguments,["value"]);this._multiplier=t.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(t.value)}),this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(te.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(t,e,n){e=this.toSeconds(e),this.setRampPoint(e);const s=this._fromType(t),r=this._events.get(e),o=Math.round(Math.max(1/n,1));for(let a=0;a<=o;a++){const c=n*a+e,l=this._exponentialApproach(r.time,r.value,s,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}setValueAtTime(t,e){const n=this.toSeconds(e);super.setValueAtTime(t,e);const s=this._events.get(n),r=this._events.previousEvent(s),o=this._getTicksUntilEvent(r,n);return s.ticks=Math.max(o,0),this}linearRampToValueAtTime(t,e){const n=this.toSeconds(e);super.linearRampToValueAtTime(t,e);const s=this._events.get(n),r=this._events.previousEvent(s),o=this._getTicksUntilEvent(r,n);return s.ticks=Math.max(o,0),this}exponentialRampToValueAtTime(t,e){e=this.toSeconds(e);const n=this._fromType(t),s=this._events.get(e),r=Math.round(Math.max((e-s.time)*10,1)),o=(e-s.time)/r;for(let a=0;a<=r;a++){const c=o*a+s.time,l=this._exponentialInterpolate(s.time,s.value,e,n,c);this.linearRampToValueAtTime(this._toType(l),c)}return this}_getTicksUntilEvent(t,e){if(t===null)t={ticks:0,time:0,type:"setValueAtTime",value:0};else if(Tn(t.ticks)){const o=this._events.previousEvent(t);t.ticks=this._getTicksUntilEvent(o,t.time)}const n=this._fromType(this.getValueAtTime(t.time));let s=this._fromType(this.getValueAtTime(e));const r=this._events.get(e);return r&&r.time===e&&r.type==="setValueAtTime"&&(s=this._fromType(this.getValueAtTime(e-this.sampleTime))),.5*(e-t.time)*(n+s)+t.ticks}getTicksAtTime(t){const e=this.toSeconds(t),n=this._events.get(e);return Math.max(this._getTicksUntilEvent(n,e),0)}getDurationOfTicks(t,e){const n=this.toSeconds(e),s=this.getTicksAtTime(e);return this.getTimeOfTick(s+t)-n}getTimeOfTick(t){const e=this._events.get(t,"ticks"),n=this._events.getAfter(t,"ticks");if(e&&e.ticks===t)return e.time;if(e&&n&&n.type==="linearRampToValueAtTime"&&e.value!==n.value){const s=this._fromType(this.getValueAtTime(e.time)),o=(this._fromType(this.getValueAtTime(n.time))-s)/(n.time-e.time),a=Math.sqrt(Math.pow(s,2)-2*o*(e.ticks-t)),c=(-s+a)/o,l=(-s-a)/o;return(c>0?c:l)+e.time}else return e?e.value===0?1/0:e.time+(t-e.ticks)/e.value:t/this._initialValue}ticksToTime(t,e){return this.getDurationOfTicks(t,e)}timeToTicks(t,e){const n=this.toSeconds(e),s=this.toSeconds(t),r=this.getTicksAtTime(n);return this.getTicksAtTime(n+s)-r}_fromType(t){return this.units==="bpm"&&this.multiplier?1/(60/t/this.multiplier):super._fromType(t)}_toType(t){return this.units==="bpm"&&this.multiplier?t/this.multiplier*60:super._toType(t)}get multiplier(){return this._multiplier}set multiplier(t){const e=this.value;this._multiplier=t,this.cancelScheduledValues(0),this.setValueAtTime(e,0)}}class va extends me{constructor(){super(ct(va.getDefaults(),arguments,["value"])),this.name="TickSignal";const t=ct(va.getDefaults(),arguments,["value"]);this.input=this._param=new _a({context:this.context,convert:t.convert,multiplier:t.multiplier,param:this._constantSource.offset,units:t.units,value:t.value})}static getDefaults(){return Object.assign(me.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(t,e){return this._param.ticksToTime(t,e)}timeToTicks(t,e){return this._param.timeToTicks(t,e)}getTimeOfTick(t){return this._param.getTimeOfTick(t)}getDurationOfTicks(t,e){return this._param.getDurationOfTicks(t,e)}getTicksAtTime(t){return this._param.getTicksAtTime(t)}get multiplier(){return this._param.multiplier}set multiplier(t){this._param.multiplier=t}dispose(){return super.dispose(),this._param.dispose(),this}}class xa extends Fe{constructor(){super(ct(xa.getDefaults(),arguments,["frequency"])),this.name="TickSource",this._state=new Ka,this._tickOffset=new bn,this._ticksAtTime=new bn,this._secondsAtTime=new bn;const t=ct(xa.getDefaults(),arguments,["frequency"]);this.frequency=new va({context:this.context,units:t.units,value:t.frequency}),de(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},Fe.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(t,e){const n=this.toSeconds(t);return this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),jt(e)&&this.setTicksAtTime(e,n),this._ticksAtTime.cancel(n),this._secondsAtTime.cancel(n)),this}stop(t){const e=this.toSeconds(t);if(this._state.getValueAtTime(e)==="stopped"){const n=this._state.get(e);n&&n.time>0&&(this._tickOffset.cancel(n.time),this._state.cancel(n.time))}return this._state.cancel(e),this._state.setStateAtTime("stopped",e),this.setTicksAtTime(0,e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}pause(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)==="started"&&(this._state.setStateAtTime("paused",e),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e)),this}cancel(t){return t=this.toSeconds(t),this._state.cancel(t),this._tickOffset.cancel(t),this._ticksAtTime.cancel(t),this._secondsAtTime.cancel(t),this}getTicksAtTime(t){const e=this.toSeconds(t),n=this._state.getLastState("stopped",e),s=this._ticksAtTime.get(e),r={state:"paused",time:e};this._state.add(r);let o=s||n,a=s?s.ticks:0,c=null;return this._state.forEachBetween(o.time,e+this.sampleTime,l=>{let h=o.time;const u=this._tickOffset.get(l.time);u&&u.time>=o.time&&(a=u.ticks,h=u.time),o.state==="started"&&l.state!=="started"&&(a+=this.frequency.getTicksAtTime(l.time)-this.frequency.getTicksAtTime(h),l.time!==r.time&&(c={state:l.state,time:l.time,ticks:a})),o=l}),this._state.remove(r),c&&this._ticksAtTime.add(c),a}get ticks(){return this.getTicksAtTime(this.now())}set ticks(t){this.setTicksAtTime(t,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(t){const e=this.now(),n=this.frequency.timeToTicks(t,e);this.setTicksAtTime(n,e)}getSecondsAtTime(t){t=this.toSeconds(t);const e=this._state.getLastState("stopped",t),n={state:"paused",time:t};this._state.add(n);const s=this._secondsAtTime.get(t);let r=s||e,o=s?s.seconds:0,a=null;return this._state.forEachBetween(r.time,t+this.sampleTime,c=>{let l=r.time;const h=this._tickOffset.get(c.time);h&&h.time>=r.time&&(o=h.seconds,l=h.time),r.state==="started"&&c.state!=="started"&&(o+=c.time-l,c.time!==n.time&&(a={state:c.state,time:c.time,seconds:o})),r=c}),this._state.remove(n),a&&this._secondsAtTime.add(a),o}setTicksAtTime(t,e){return e=this.toSeconds(e),this._tickOffset.cancel(e),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(t,e),ticks:t,time:e}),this._ticksAtTime.cancel(e),this._secondsAtTime.cancel(e),this}getStateAtTime(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)}getTimeOfTick(t,e=this.now()){const n=this._tickOffset.get(e),s=this._state.get(e),r=Math.max(n.time,s.time),o=this.frequency.getTicksAtTime(r)+t-n.ticks;return this.frequency.getTimeOfTick(o)}forEachTickBetween(t,e,n){let s=this._state.get(t);this._state.forEachBetween(t,e,o=>{s&&s.state==="started"&&o.state!=="started"&&this.forEachTickBetween(Math.max(s.time,t),o.time-this.sampleTime,n),s=o});let r=null;if(s&&s.state==="started"){const o=Math.max(s.time,t),a=this.frequency.getTicksAtTime(o),c=this.frequency.getTicksAtTime(s.time),l=a-c;let h=Math.ceil(l)-l;h=Rn(h,1)?0:h;let u=this.frequency.getTimeOfTick(a+h);for(;u<e;){try{n(u,Math.round(this.getTicksAtTime(u)))}catch(d){r=d;break}u+=this.frequency.getDurationOfTicks(1,u)}}if(r)throw r;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this._ticksAtTime.dispose(),this._secondsAtTime.dispose(),this.frequency.dispose(),this}}class Vr extends Fe{constructor(){super(ct(Vr.getDefaults(),arguments,["callback","frequency"])),this.name="Clock",this.callback=$t,this._lastUpdate=0,this._state=new Ka("stopped"),this._boundLoop=this._loop.bind(this);const t=ct(Vr.getDefaults(),arguments,["callback","frequency"]);this.callback=t.callback,this._tickSource=new xa({context:this.context,frequency:t.frequency,units:t.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,de(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(Fe.getDefaults(),{callback:$t,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(t,e){dp(this.context);const n=this.toSeconds(t);return this.log("start",n),this._state.getValueAtTime(n)!=="started"&&(this._state.setStateAtTime("started",n),this._tickSource.start(n,e),n<this._lastUpdate&&this.emit("start",n,e)),this}stop(t){const e=this.toSeconds(t);return this.log("stop",e),this._state.cancel(e),this._state.setStateAtTime("stopped",e),this._tickSource.stop(e),e<this._lastUpdate&&this.emit("stop",e),this}pause(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)==="started"&&(this._state.setStateAtTime("paused",e),this._tickSource.pause(e),e<this._lastUpdate&&this.emit("pause",e)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(t){this._tickSource.ticks=t}get seconds(){return this._tickSource.seconds}set seconds(t){this._tickSource.seconds=t}getSecondsAtTime(t){return this._tickSource.getSecondsAtTime(t)}setTicksAtTime(t,e){return this._tickSource.setTicksAtTime(t,e),this}getTimeOfTick(t,e=this.now()){return this._tickSource.getTimeOfTick(t,e)}getTicksAtTime(t){return this._tickSource.getTicksAtTime(t)}nextTickTime(t,e){const n=this.toSeconds(e),s=this.getTicksAtTime(n);return this._tickSource.getTimeOfTick(s+t,n)}_loop(){const t=this._lastUpdate,e=this.now();this._lastUpdate=e,this.log("loop",t,e),t!==e&&(this._state.forEachBetween(t,e,n=>{switch(n.state){case"started":const s=this._tickSource.getTicksAtTime(n.time);this.emit("start",n.time,s);break;case"stopped":n.time!==0&&this.emit("stop",n.time);break;case"paused":this.emit("pause",n.time);break}}),this._tickSource.forEachTickBetween(t,e,(n,s)=>{this.callback(n,s)}))}getStateAtTime(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}ao.mixin(Vr);class ih extends gi{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const t=ct(ih.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=t.baseUrl,Object.keys(t.urls).forEach(e=>{this._loadingCount++;const n=t.urls[e];this.add(e,n,this._bufferLoaded.bind(this,t.onload),t.onerror)})}static getDefaults(){return{baseUrl:"",onerror:$t,onload:$t,urls:{}}}has(t){return this._buffers.has(t.toString())}get(t){return Rt(this.has(t),`ToneAudioBuffers has no buffer named: ${t}`),this._buffers.get(t.toString())}_bufferLoaded(t){this._loadingCount--,this._loadingCount===0&&t&&t()}get loaded(){return Array.from(this._buffers).every(([t,e])=>e.loaded)}add(t,e,n=$t,s=$t){return pi(e)?(this.baseUrl&&e.trim().substring(0,11).toLowerCase()==="data:audio/"&&(this.baseUrl=""),this._buffers.set(t.toString(),new Kt(this.baseUrl+e,n,s))):this._buffers.set(t.toString(),new Kt(e,n,s)),this}dispose(){return super.dispose(),this._buffers.forEach(t=>t.dispose()),this._buffers.clear(),this}}class ya extends fn{constructor(){super(...arguments),this.name="MidiClass",this.defaultUnits="midi"}_frequencyToUnits(t){return $i(super._frequencyToUnits(t))}_ticksToUnits(t){return $i(super._ticksToUnits(t))}_beatsToUnits(t){return $i(super._beatsToUnits(t))}_secondsToUnits(t){return $i(super._secondsToUnits(t))}toMidi(){return this.valueOf()}toFrequency(){return Sp(this.toMidi())}transpose(t){return new ya(this.context,this.toMidi()+t)}}class xn extends Pr{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(t){return this._getPPQ()*t}_secondsToUnits(t){return Math.floor(t/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(t){return t}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}class LE extends Fe{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new bn,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(t,e){return this._events.add({callback:t,time:this.toSeconds(e)}),this._events.length===1&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(t){return this._events.cancel(this.toSeconds(t)),this}_drawLoop(){const t=this.context.currentTime;for(;this._events.length&&this._events.peek().time-this.anticipation<=t;){const e=this._events.shift();e&&t-e.time<=this.expiration&&e.callback()}this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}ja(i=>{i.draw=new LE({context:i})});Za(i=>{i.draw.dispose()});class NE extends gi{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(t){Rt(jt(t.time),"Events must have a time property"),Rt(jt(t.duration),"Events must have a duration parameter"),t.time=t.time.valueOf();let e=new IE(t.time,t.time+t.duration,t);for(this._root===null?this._root=e:this._root.insert(e),this._length++;e!==null;)e.updateHeight(),e.updateMax(),this._rebalance(e),e=e.parent;return this}remove(t){if(this._root!==null){const e=[];this._root.search(t.time,e);for(const n of e)if(n.event===t){this._removeNode(n),this._length--;break}}return this}get length(){return this._length}cancel(t){return this.forEachFrom(t,e=>this.remove(e)),this}_setRoot(t){this._root=t,this._root!==null&&(this._root.parent=null)}_replaceNodeInParent(t,e){t.parent!==null?(t.isLeftChild()?t.parent.left=e:t.parent.right=e,this._rebalance(t.parent)):this._setRoot(e)}_removeNode(t){if(t.left===null&&t.right===null)this._replaceNodeInParent(t,null);else if(t.right===null)this._replaceNodeInParent(t,t.left);else if(t.left===null)this._replaceNodeInParent(t,t.right);else{const e=t.getBalance();let n,s=null;if(e>0)if(t.left.right===null)n=t.left,n.right=t.right,s=n;else{for(n=t.left.right;n.right!==null;)n=n.right;n.parent&&(n.parent.right=n.left,s=n.parent,n.left=t.left,n.right=t.right)}else if(t.right.left===null)n=t.right,n.left=t.left,s=n;else{for(n=t.right.left;n.left!==null;)n=n.left;n.parent&&(n.parent.left=n.right,s=n.parent,n.left=t.left,n.right=t.right)}t.parent!==null?t.isLeftChild()?t.parent.left=n:t.parent.right=n:this._setRoot(n),s&&this._rebalance(s)}t.dispose()}_rotateLeft(t){const e=t.parent,n=t.isLeftChild(),s=t.right;s&&(t.right=s.left,s.left=t),e!==null?n?e.left=s:e.right=s:this._setRoot(s)}_rotateRight(t){const e=t.parent,n=t.isLeftChild(),s=t.left;s&&(t.left=s.right,s.right=t),e!==null?n?e.left=s:e.right=s:this._setRoot(s)}_rebalance(t){const e=t.getBalance();e>1&&t.left?t.left.getBalance()<0?this._rotateLeft(t.left):this._rotateRight(t):e<-1&&t.right&&(t.right.getBalance()>0?this._rotateRight(t.right):this._rotateLeft(t))}get(t){if(this._root!==null){const e=[];if(this._root.search(t,e),e.length>0){let n=e[0];for(let s=1;s<e.length;s++)e[s].low>n.low&&(n=e[s]);return n.event}}return null}forEach(t){if(this._root!==null){const e=[];this._root.traverse(n=>e.push(n)),e.forEach(n=>{n.event&&t(n.event)})}return this}forEachAtTime(t,e){if(this._root!==null){const n=[];this._root.search(t,n),n.forEach(s=>{s.event&&e(s.event)})}return this}forEachFrom(t,e){if(this._root!==null){const n=[];this._root.searchAfter(t,n),n.forEach(s=>{s.event&&e(s.event)})}return this}dispose(){return super.dispose(),this._root!==null&&this._root.traverse(t=>t.dispose()),this._root=null,this}}class IE{constructor(t,e,n){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=n,this.low=t,this.high=e,this.max=this.high}insert(t){t.low<=this.low?this.left===null?this.left=t:this.left.insert(t):this.right===null?this.right=t:this.right.insert(t)}search(t,e){t>this.max||(this.left!==null&&this.left.search(t,e),this.low<=t&&this.high>t&&e.push(this),!(this.low>t)&&this.right!==null&&this.right.search(t,e))}searchAfter(t,e){this.low>=t&&(e.push(this),this.left!==null&&this.left.searchAfter(t,e)),this.right!==null&&this.right.searchAfter(t,e)}traverse(t){t(this),this.left!==null&&this.left.traverse(t),this.right!==null&&this.right.traverse(t)}updateHeight(){this.left!==null&&this.right!==null?this.height=Math.max(this.left.height,this.right.height)+1:this.right!==null?this.height=this.right.height+1:this.left!==null?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,this.left!==null&&(this.max=Math.max(this.max,this.left.max)),this.right!==null&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let t=0;return this.left!==null&&this.right!==null?t=this.left.height-this.right.height:this.left!==null?t=this.left.height+1:this.right!==null&&(t=-(this.right.height+1)),t}isLeftChild(){return this.parent!==null&&this.parent.left===this}get left(){return this._left}set left(t){this._left=t,t!==null&&(t.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(t){this._right=t,t!==null&&(t.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class cs extends Nt{constructor(){super(ct(cs.getDefaults(),arguments,["volume"])),this.name="Volume";const t=ct(cs.getDefaults(),arguments,["volume"]);this.input=this.output=new ee({context:this.context,gain:t.volume,units:"decibels"}),this.volume=this.output.gain,de(this,"volume"),this._unmutedVolume=t.volume,this.mute=t.mute}static getDefaults(){return Object.assign(Nt.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(t){!this.mute&&t?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!t&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class Sa extends Nt{constructor(){super(ct(Sa.getDefaults(),arguments)),this.name="Destination",this.input=new cs({context:this.context}),this.output=new ee({context:this.context}),this.volume=this.input.volume;const t=ct(Sa.getDefaults(),arguments);ma(this.input,this.output,this.context.rawContext.destination),this.mute=t.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(Nt.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(t){this.input.mute=t}chain(...t){return this.input.disconnect(),t.unshift(this.input),t.push(this.output),ma(...t),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}ja(i=>{i.destination=new Sa({context:i})});Za(i=>{i.destination.dispose()});class OE extends gi{constructor(t){super(),this.name="TimelineValue",this._timeline=new bn({memory:10}),this._initialValue=t}set(t,e){return this._timeline.add({value:t,time:e}),this}get(t){const e=this._timeline.get(t);return e?e.value:this._initialValue}}class ls extends Nt{constructor(){super(Object.assign(ct(ls.getDefaults(),arguments,["context"])))}connect(t,e=0,n=0){return nh(this,t,e,n),this}}class hs extends ls{constructor(){super(Object.assign(ct(hs.getDefaults(),arguments,["mapping","length"]))),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper;const t=ct(hs.getDefaults(),arguments,["mapping","length"]);mn(t.mapping)||t.mapping instanceof Float32Array?this.curve=Float32Array.from(t.mapping):aE(t.mapping)&&this.setMap(t.mapping,t.length)}static getDefaults(){return Object.assign(me.getDefaults(),{length:1024})}setMap(t,e=1024){const n=new Float32Array(e);for(let s=0,r=e;s<r;s++){const o=s/(r-1)*2-1;n[s]=t(o,s)}return this.curve=n,this}get curve(){return this._shaper.curve}set curve(t){this._shaper.curve=t}get oversample(){return this._shaper.oversample}set oversample(t){const e=["none","2x","4x"].some(n=>n.includes(t));Rt(e,"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=t}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class Ma extends ls{constructor(){super(Object.assign(ct(Ma.getDefaults(),arguments,["value"]))),this.name="Pow";const t=ct(Ma.getDefaults(),arguments,["value"]);this._exponentScaler=this.input=this.output=new hs({context:this.context,mapping:this._expFunc(t.value),length:8192}),this._exponent=t.value}static getDefaults(){return Object.assign(ls.getDefaults(),{value:1})}_expFunc(t){return e=>Math.pow(Math.abs(e),t)}get value(){return this._exponent}set value(t){this._exponent=t,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}}class Ii{constructor(t,e){this.id=Ii._eventId++,this._remainderTime=0;const n=Object.assign(Ii.getDefaults(),e);this.transport=t,this.callback=n.callback,this._once=n.once,this.time=Math.floor(n.time),this._remainderTime=n.time-this.time}static getDefaults(){return{callback:$t,once:!1,time:0}}get floatTime(){return this.time+this._remainderTime}invoke(t){if(this.callback){const e=this.transport.bpm.getDurationOfTicks(1,t);this.callback(t+this._remainderTime*e),this._once&&this.transport.clear(this.id)}}dispose(){return this.callback=void 0,this}}Ii._eventId=0;class sh extends Ii{constructor(t,e){super(t,e),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const n=Object.assign(sh.getDefaults(),e);this.duration=n.duration,this._interval=n.interval,this._nextTick=n.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.transport.on("ticks",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},Ii.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(t){this._createEvents(t),super.invoke(t)}_createEvent(){return pa(this._nextTick,this.floatTime+this.duration)?this.transport.scheduleOnce(this.invoke.bind(this),new xn(this.context,this._nextTick).toSeconds()):-1}_createEvents(t){pa(this._nextTick+this._interval,this.floatTime+this.duration)&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new xn(this.context,this._nextTick).toSeconds()))}_restart(t){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.floatTime;const e=this.transport.getTicksAtTime(t);Js(e,this.time)&&(this._nextTick=this.floatTime+Math.ceil((e-this.floatTime)/this._interval)*this._interval),this._currentId=this._createEvent(),this._nextTick+=this._interval,this._nextId=this._createEvent()}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this.transport.off("ticks",this._boundRestart),this}}class zr extends Fe{constructor(){super(ct(zr.getDefaults(),arguments)),this.name="Transport",this._loop=new OE(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new bn,this._repeatedEvents=new NE,this._syncedSignals=[],this._swingAmount=0;const t=ct(zr.getDefaults(),arguments);this._ppq=t.ppq,this._clock=new Vr({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=t.ppq,this.bpm.setValueAtTime(t.bpm,0),de(this,"bpm"),this._timeSignature=t.timeSignature,this._swingTicks=t.ppq/2}static getDefaults(){return Object.assign(Fe.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(t,e){if(this._loop.get(t)&&e>=this._loopEnd&&(this.emit("loopEnd",t),this._clock.setTicksAtTime(this._loopStart,t),e=this._loopStart,this.emit("loopStart",t,this._clock.getSecondsAtTime(t)),this.emit("loop",t)),this._swingAmount>0&&e%this._ppq!==0&&e%(this._swingTicks*2)!==0){const n=e%(this._swingTicks*2)/(this._swingTicks*2),s=Math.sin(n*Math.PI)*this._swingAmount;t+=new xn(this.context,this._swingTicks*2/3).toSeconds()*s}md(!0),this._timeline.forEachAtTime(e,n=>n.invoke(t)),md(!1)}schedule(t,e){const n=new Ii(this,{callback:t,time:new Pr(this.context,e).toTicks()});return this._addEvent(n,this._timeline)}scheduleRepeat(t,e,n,s=1/0){const r=new sh(this,{callback:t,duration:new Nn(this.context,s).toTicks(),interval:new Nn(this.context,e).toTicks(),time:new Pr(this.context,n).toTicks()});return this._addEvent(r,this._repeatedEvents)}scheduleOnce(t,e){const n=new Ii(this,{callback:t,once:!0,time:new Pr(this.context,e).toTicks()});return this._addEvent(n,this._timeline)}clear(t){if(this._scheduledEvents.hasOwnProperty(t)){const e=this._scheduledEvents[t.toString()];e.timeline.remove(e.event),e.event.dispose(),delete this._scheduledEvents[t.toString()]}return this}_addEvent(t,e){return this._scheduledEvents[t.id.toString()]={event:t,timeline:e},e.add(t),t.id}cancel(t=0){const e=this.toTicks(t);return this._timeline.forEachFrom(e,n=>this.clear(n.id)),this._repeatedEvents.forEachFrom(e,n=>this.clear(n.id)),this}_bindClockEvents(){this._clock.on("start",(t,e)=>{e=new xn(this.context,e).toSeconds(),this.emit("start",t,e)}),this._clock.on("stop",t=>{this.emit("stop",t)}),this._clock.on("pause",t=>{this.emit("pause",t)})}get state(){return this._clock.getStateAtTime(this.now())}start(t,e){this.context.resume();let n;return jt(e)&&(n=this.toTicks(e)),this._clock.start(t,n),this}stop(t){return this._clock.stop(t),this}pause(t){return this._clock.pause(t),this}toggle(t){return t=this.toSeconds(t),this._clock.getStateAtTime(t)!=="started"?this.start(t):this.stop(t),this}get timeSignature(){return this._timeSignature}set timeSignature(t){mn(t)&&(t=t[0]/t[1]*4),this._timeSignature=t}get loopStart(){return new Nn(this.context,this._loopStart,"i").toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t)}get loopEnd(){return new Nn(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t)}get loop(){return this._loop.get(this.now())}set loop(t){this._loop.set(t,this.now())}setLoopPoints(t,e){return this.loopStart=t,this.loopEnd=e,this}get swing(){return this._swingAmount}set swing(t){this._swingAmount=t}get swingSubdivision(){return new xn(this.context,this._swingTicks).toNotation()}set swingSubdivision(t){this._swingTicks=this.toTicks(t)}get position(){const t=this.now(),e=this._clock.getTicksAtTime(t);return new xn(this.context,e).toBarsBeatsSixteenths()}set position(t){const e=this.toTicks(t);this.ticks=e}get seconds(){return this._clock.seconds}set seconds(t){const e=this.now(),n=this._clock.frequency.timeToTicks(t,e);this.ticks=n}get progress(){if(this.loop){const t=this.now();return(this._clock.getTicksAtTime(t)-this._loopStart)/(this._loopEnd-this._loopStart)}else return 0}get ticks(){return this._clock.ticks}set ticks(t){if(this._clock.ticks!==t){const e=this.now();if(this.state==="started"){const n=this._clock.getTicksAtTime(e),s=this._clock.frequency.getDurationOfTicks(Math.ceil(n)-n,e),r=e+s;this.emit("stop",r),this._clock.setTicksAtTime(t,r),this.emit("start",r,this._clock.getSecondsAtTime(r))}else this.emit("ticks",e),this._clock.setTicksAtTime(t,e)}}getTicksAtTime(t){return this._clock.getTicksAtTime(t)}getSecondsAtTime(t){return this._clock.getSecondsAtTime(t)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(t){this._clock.frequency.multiplier=t}nextSubdivision(t){if(t=this.toTicks(t),this.state!=="started")return 0;{const e=this.now(),n=this.getTicksAtTime(e),s=t-n%t;return this._clock.nextTickTime(s,e)}}syncSignal(t,e){const n=this.now();let s=this.bpm,r=1/(60/s.getValueAtTime(n)/this.PPQ),o=[];if(t.units==="time"){const c=.015625/r,l=new ee(c),h=new Ma(-1),u=new ee(c);s.chain(l,h,u),s=u,r=1/r,o=[l,h,u]}e||(t.getValueAtTime(n)!==0?e=t.getValueAtTime(n)/r:e=0);const a=new ee(e);return s.connect(a),a.connect(t._param),o.push(a),this._syncedSignals.push({initial:t.value,nodes:o,signal:t}),t.value=0,this}unsyncSignal(t){for(let e=this._syncedSignals.length-1;e>=0;e--){const n=this._syncedSignals[e];n.signal===t&&(n.nodes.forEach(s=>s.dispose()),n.signal.value=n.initial,this._syncedSignals.splice(e,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),th(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}ao.mixin(zr);ja(i=>{i.transport=new zr({context:i})});Za(i=>{i.transport.dispose()});class qe extends Nt{constructor(t){super(t),this.input=void 0,this._state=new Ka("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=$t,this._syncedStop=$t,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new cs({context:this.context,mute:t.mute,volume:t.volume}),this.volume=this._volume.volume,de(this,"volume"),this.onstop=t.onstop}static getDefaults(){return Object.assign(Nt.getDefaults(),{mute:!1,onstop:$t,volume:0})}get state(){return this._synced?this.context.transport.state==="started"?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}_clampToCurrentTime(t){return this._synced?t:Math.max(t,this.context.currentTime)}start(t,e,n){let s=Tn(t)&&this._synced?this.context.transport.seconds:this.toSeconds(t);if(s=this._clampToCurrentTime(s),!this._synced&&this._state.getValueAtTime(s)==="started")Rt(Js(s,this._state.get(s).time),"Start time must be strictly greater than previous start time"),this._state.cancel(s),this._state.setStateAtTime("started",s),this.log("restart",s),this.restart(s,e,n);else if(this.log("start",s),this._state.setStateAtTime("started",s),this._synced){const r=this._state.get(s);r&&(r.offset=this.toSeconds(ss(e,0)),r.duration=n?this.toSeconds(n):void 0);const o=this.context.transport.schedule(a=>{this._start(a,e,n)},s);this._scheduled.push(o),this.context.transport.state==="started"&&this.context.transport.getSecondsAtTime(this.immediate())>s&&this._syncedStart(this.now(),this.context.transport.seconds)}else dp(this.context),this._start(s,e,n);return this}stop(t){let e=Tn(t)&&this._synced?this.context.transport.seconds:this.toSeconds(t);if(e=this._clampToCurrentTime(e),this._state.getValueAtTime(e)==="started"||jt(this._state.getNextState("started",e))){if(this.log("stop",e),!this._synced)this._stop(e);else{const n=this.context.transport.schedule(this._stop.bind(this),e);this._scheduled.push(n)}this._state.cancel(e),this._state.setStateAtTime("stopped",e)}return this}restart(t,e,n){return t=this.toSeconds(t),this._state.getValueAtTime(t)==="started"&&(this._state.cancel(t),this._restart(t,e,n)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(t,e)=>{if(Js(e,0)){const n=this._state.get(e);if(n&&n.state==="started"&&n.time!==e){const s=e-this.toSeconds(n.time);let r;n.duration&&(r=this.toSeconds(n.duration)-s),this._start(t,this.toSeconds(n.offset)+s,r)}}},this._syncedStop=t=>{const e=this.context.transport.getSecondsAtTime(Math.max(t-this.sampleTime,0));this._state.getValueAtTime(e)==="started"&&this._stop(t)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(t=>this.context.transport.clear(t)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=$t,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class Qs extends Ks{constructor(){super(ct(Qs.getDefaults(),arguments,["url","onload"])),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1;const t=ct(Qs.getDefaults(),arguments,["url","onload"]);Ni(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new te({context:this.context,param:this._source.playbackRate,units:"positive",value:t.playbackRate}),this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this._buffer=new Kt(t.url,t.onload,t.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(Ks.getDefaults(),{url:new Kt,loop:!1,loopEnd:0,loopStart:0,onload:$t,onerror:$t,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(t){this._fadeIn=t}get fadeOut(){return this._fadeOut}set fadeOut(t){this._fadeOut=t}get curve(){return this._curve}set curve(t){this._curve=t}start(t,e,n,s=1){Rt(this.buffer.loaded,"buffer is either not set or not loaded");const r=this.toSeconds(t);this._startGain(r,s),this.loop?e=ss(e,this.loopStart):e=ss(e,0);let o=Math.max(this.toSeconds(e),0);if(this.loop){const a=this.toSeconds(this.loopEnd)||this.buffer.duration,c=this.toSeconds(this.loopStart),l=a-c;vl(o,a)&&(o=(o-c)%l+c),Rn(o,this.buffer.duration)&&(o=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,pa(o,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(r,o)),jt(n)){let a=this.toSeconds(n);a=Math.max(a,0),this.stop(r+a)}return this}_stopSource(t){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(t)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(t){this._source.loopStart=this.toSeconds(t)}get loopEnd(){return this._source.loopEnd}set loopEnd(t){this._source.loopEnd=this.toSeconds(t)}get buffer(){return this._buffer}set buffer(t){this._buffer.set(t)}get loop(){return this._source.loop}set loop(t){this._source.loop=t,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}class us extends qe{constructor(){super(ct(us.getDefaults(),arguments,["type"])),this.name="Noise",this._source=null;const t=ct(us.getDefaults(),arguments,["type"]);this._playbackRate=t.playbackRate,this.type=t.type,this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut}static getDefaults(){return Object.assign(qe.getDefaults(),{fadeIn:0,fadeOut:0,playbackRate:1,type:"white"})}get type(){return this._type}set type(t){if(Rt(t in gd,"Noise: invalid type: "+t),this._type!==t&&(this._type=t,this.state==="started")){const e=this.now();this._stop(e),this._start(e)}}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this._source&&(this._source.playbackRate.value=t)}_start(t){const e=gd[this._type];this._source=new Qs({url:e,context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,loop:!0,onended:()=>this.onstop(this),playbackRate:this._playbackRate}).connect(this.output),this._source.start(this.toSeconds(t),Math.random()*(e.duration-.001))}_stop(t){this._source&&(this._source.stop(this.toSeconds(t)),this._source=null)}get fadeIn(){return this._fadeIn}set fadeIn(t){this._fadeIn=t,this._source&&(this._source.fadeIn=this._fadeIn)}get fadeOut(){return this._fadeOut}set fadeOut(t){this._fadeOut=t,this._source&&(this._source.fadeOut=this._fadeOut)}_restart(t){this._stop(t),this._start(t)}dispose(){return super.dispose(),this._source&&this._source.disconnect(),this}}const Os=44100*5,Xc=2,ri={brown:null,pink:null,white:null},gd={get brown(){if(!ri.brown){const i=[];for(let t=0;t<Xc;t++){const e=new Float32Array(Os);i[t]=e;let n=0;for(let s=0;s<Os;s++){const r=Math.random()*2-1;e[s]=(n+.02*r)/1.02,n=e[s],e[s]*=3.5}}ri.brown=new Kt().fromArray(i)}return ri.brown},get pink(){if(!ri.pink){const i=[];for(let t=0;t<Xc;t++){const e=new Float32Array(Os);i[t]=e;let n,s,r,o,a,c,l;n=s=r=o=a=c=l=0;for(let h=0;h<Os;h++){const u=Math.random()*2-1;n=.99886*n+u*.0555179,s=.99332*s+u*.0750759,r=.969*r+u*.153852,o=.8665*o+u*.3104856,a=.55*a+u*.5329522,c=-.7616*c-u*.016898,e[h]=n+s+r+o+a+c+l+u*.5362,e[h]*=.11,l=u*.115926}}ri.pink=new Kt().fromArray(i)}return ri.pink},get white(){if(!ri.white){const i=[];for(let t=0;t<Xc;t++){const e=new Float32Array(Os);i[t]=e;for(let n=0;n<Os;n++)e[n]=Math.random()*2-1}ri.white=new Kt().fromArray(i)}return ri.white}};function _s(i,t){return be(this,void 0,void 0,function*(){const e=t/i.context.sampleRate,n=new $a(1,e,i.context.sampleRate);return new i.constructor(Object.assign(i.get(),{frequency:2/e,detune:0,context:n})).toDestination().start(0),(yield n.render()).getChannelData(0)})}class Ta extends Ks{constructor(){super(ct(Ta.getDefaults(),arguments,["frequency","type"])),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator];const t=ct(Ta.getDefaults(),arguments,["frequency","type"]);Ni(this._oscillator,this._gainNode),this.type=t.type,this.frequency=new te({context:this.context,param:this._oscillator.frequency,units:"frequency",value:t.frequency}),this.detune=new te({context:this.context,param:this._oscillator.detune,units:"cents",value:t.detune}),de(this,["frequency","detune"])}static getDefaults(){return Object.assign(Ks.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(t){const e=this.toSeconds(t);return this.log("start",e),this._startGain(e),this._oscillator.start(e),this}_stopSource(t){this._oscillator.stop(t)}setPeriodicWave(t){return this._oscillator.setPeriodicWave(t),this}get type(){return this._oscillator.type}set type(t){this._oscillator.type=t}dispose(){return super.dispose(),this.state==="started"&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class _e extends qe{constructor(){super(ct(_e.getDefaults(),arguments,["frequency","type"])),this.name="Oscillator",this._oscillator=null;const t=ct(_e.getDefaults(),arguments,["frequency","type"]);this.frequency=new me({context:this.context,units:"frequency",value:t.frequency}),de(this,"frequency"),this.detune=new me({context:this.context,units:"cents",value:t.detune}),de(this,"detune"),this._partials=t.partials,this._partialCount=t.partialCount,this._type=t.type,t.partialCount&&t.type!=="custom"&&(this._type=this.baseType+t.partialCount.toString()),this.phase=t.phase}static getDefaults(){return Object.assign(qe.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(t){const e=this.toSeconds(t),n=new Ta({context:this.context,onended:()=>this.onstop(this)});this._oscillator=n,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(e)}_stop(t){const e=this.toSeconds(t);this._oscillator&&this._oscillator.stop(e)}_restart(t){const e=this.toSeconds(t);return this.log("restart",e),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(e),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if(this._type==="custom")return _e._periodicWaveCache.find(e=>e.phase===this._phase&&_E(e.partials,this._partials));{const t=_e._periodicWaveCache.find(e=>e.type===this._type&&e.phase===this._phase);return this._partialCount=t?t.partialCount:this._partialCount,t}}get type(){return this._type}set type(t){this._type=t;const e=["sine","square","sawtooth","triangle"].indexOf(t)!==-1;if(this._phase===0&&e)this._wave=void 0,this._partialCount=0,this._oscillator!==null&&(this._oscillator.type=t);else{const n=this._getCachedPeriodicWave();if(jt(n)){const{partials:s,wave:r}=n;this._wave=r,this._partials=s,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave)}else{const[s,r]=this._getRealImaginary(t,this._phase),o=this.context.createPeriodicWave(s,r);this._wave=o,this._oscillator!==null&&this._oscillator.setPeriodicWave(this._wave),_e._periodicWaveCache.push({imag:r,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:s,type:this._type,wave:this._wave}),_e._periodicWaveCache.length>100&&_e._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(t){this.partialCount&&this._type!=="custom"&&t!=="custom"?this.type=t+this.partialCount:this.type=t}get partialCount(){return this._partialCount}set partialCount(t){Xn(t,0);let e=this._type;const n=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(n&&(e=n[1]),this._type!=="custom")t===0?this.type=e:this.type=e+t.toString();else{const s=new Float32Array(t);this._partials.forEach((r,o)=>s[o]=r),this._partials=Array.from(s),this.type=this._type}}_getRealImaginary(t,e){let s=2048;const r=new Float32Array(s),o=new Float32Array(s);let a=1;if(t==="custom"){if(a=this._partials.length+1,this._partialCount=this._partials.length,s=a,this._partials.length===0)return[r,o]}else{const c=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);c?(a=parseInt(c[2],10)+1,this._partialCount=parseInt(c[2],10),t=c[1],a=Math.max(a,2),s=a):this._partialCount=0,this._partials=[]}for(let c=1;c<s;++c){const l=2/(c*Math.PI);let h;switch(t){case"sine":h=c<=a?1:0,this._partials[c-1]=h;break;case"square":h=c&1?2*l:0,this._partials[c-1]=h;break;case"sawtooth":h=l*(c&1?1:-1),this._partials[c-1]=h;break;case"triangle":c&1?h=2*(l*l)*(c-1>>1&1?-1:1):h=0,this._partials[c-1]=h;break;case"custom":h=this._partials[c-1];break;default:throw new TypeError("Oscillator: invalid type: "+t)}h!==0?(r[c]=-h*Math.sin(e*c),o[c]=h*Math.cos(e*c)):(r[c]=0,o[c]=0)}return[r,o]}_inverseFFT(t,e,n){let s=0;const r=t.length;for(let o=0;o<r;o++)s+=t[o]*Math.cos(o*n)+e[o]*Math.sin(o*n);return s}getInitialValue(){const[t,e]=this._getRealImaginary(this._type,0);let n=0;const s=Math.PI*2,r=32;for(let o=0;o<r;o++)n=Math.max(this._inverseFFT(t,e,o/r*s),n);return xE(-this._inverseFFT(t,e,this._phase)/n,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(t){this._partials=t,this._partialCount=this._partials.length,t.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(t){this._phase=t*Math.PI/180,this.type=this._type}asArray(t=1024){return be(this,void 0,void 0,function*(){return _s(this,t)})}dispose(){return super.dispose(),this._oscillator!==null&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}_e._periodicWaveCache=[];class UE extends ls{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new hs({context:this.context,mapping:t=>(t+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class ds extends me{constructor(){super(Object.assign(ct(ds.getDefaults(),arguments,["value"]))),this.name="Multiply",this.override=!1;const t=ct(ds.getDefaults(),arguments,["value"]);this._mult=this.input=this.output=new ee({context:this.context,minValue:t.minValue,maxValue:t.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(me.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class Gr extends qe{constructor(){super(ct(Gr.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="AMOscillator",this._modulationScale=new UE({context:this.context}),this._modulationNode=new ee({context:this.context});const t=ct(Gr.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new _e({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new _e({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new ds({context:this.context,units:"positive",value:t.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),de(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(_e.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(t){this._modulator.start(t),this._carrier.start(t)}_stop(t){this._modulator.stop(t),this._carrier.stop(t)}_restart(t){this._modulator.restart(t),this._carrier.restart(t)}get type(){return this._carrier.type}set type(t){this._carrier.type=t}get baseType(){return this._carrier.baseType}set baseType(t){this._carrier.baseType=t}get partialCount(){return this._carrier.partialCount}set partialCount(t){this._carrier.partialCount=t}get modulationType(){return this._modulator.type}set modulationType(t){this._modulator.type=t}get phase(){return this._carrier.phase}set phase(t){this._carrier.phase=t,this._modulator.phase=t}get partials(){return this._carrier.partials}set partials(t){this._carrier.partials=t}asArray(t=1024){return be(this,void 0,void 0,function*(){return _s(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class Hr extends qe{constructor(){super(ct(Hr.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="FMOscillator",this._modulationNode=new ee({context:this.context,gain:0});const t=ct(Hr.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new _e({context:this.context,detune:t.detune,frequency:0,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.detune=this._carrier.detune,this.frequency=new me({context:this.context,units:"frequency",value:t.frequency}),this._modulator=new _e({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new ds({context:this.context,units:"positive",value:t.harmonicity}),this.modulationIndex=new ds({context:this.context,units:"positive",value:t.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),de(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(_e.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(t){this._modulator.start(t),this._carrier.start(t)}_stop(t){this._modulator.stop(t),this._carrier.stop(t)}_restart(t){return this._modulator.restart(t),this._carrier.restart(t),this}get type(){return this._carrier.type}set type(t){this._carrier.type=t}get baseType(){return this._carrier.baseType}set baseType(t){this._carrier.baseType=t}get partialCount(){return this._carrier.partialCount}set partialCount(t){this._carrier.partialCount=t}get modulationType(){return this._modulator.type}set modulationType(t){this._modulator.type=t}get phase(){return this._carrier.phase}set phase(t){this._carrier.phase=t,this._modulator.phase=t}get partials(){return this._carrier.partials}set partials(t){this._carrier.partials=t}asArray(t=1024){return be(this,void 0,void 0,function*(){return _s(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class tr extends qe{constructor(){super(ct(tr.getDefaults(),arguments,["frequency","width"])),this.name="PulseOscillator",this._widthGate=new ee({context:this.context,gain:0}),this._thresh=new hs({context:this.context,mapping:e=>e<=0?-1:1});const t=ct(tr.getDefaults(),arguments,["frequency","width"]);this.width=new me({context:this.context,units:"audioRange",value:t.width}),this._triangle=new _e({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),de(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(qe.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(t){t=this.toSeconds(t),this._triangle.start(t),this._widthGate.gain.setValueAtTime(1,t)}_stop(t){t=this.toSeconds(t),this._triangle.stop(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(0,t)}_restart(t){this._triangle.restart(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(1,t)}get phase(){return this._triangle.phase}set phase(t){this._triangle.phase=t}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(t){this._triangle.type=t}asArray(t=1024){return be(this,void 0,void 0,function*(){return _s(this,t)})}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class Wr extends qe{constructor(){super(ct(Wr.getDefaults(),arguments,["frequency","type","spread"])),this.name="FatOscillator",this._oscillators=[];const t=ct(Wr.getDefaults(),arguments,["frequency","type","spread"]);this.frequency=new me({context:this.context,units:"frequency",value:t.frequency}),this.detune=new me({context:this.context,units:"cents",value:t.detune}),this._spread=t.spread,this._type=t.type,this._phase=t.phase,this._partials=t.partials,this._partialCount=t.partialCount,this.count=t.count,de(this,["frequency","detune"])}static getDefaults(){return Object.assign(_e.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(t){t=this.toSeconds(t),this._forEach(e=>e.start(t))}_stop(t){t=this.toSeconds(t),this._forEach(e=>e.stop(t))}_restart(t){this._forEach(e=>e.restart(t))}_forEach(t){for(let e=0;e<this._oscillators.length;e++)t(this._oscillators[e],e)}get type(){return this._type}set type(t){this._type=t,this._forEach(e=>e.type=t)}get spread(){return this._spread}set spread(t){if(this._spread=t,this._oscillators.length>1){const e=-t/2,n=t/(this._oscillators.length-1);this._forEach((s,r)=>s.detune.value=e+n*r)}}get count(){return this._oscillators.length}set count(t){if(Xn(t,1),this._oscillators.length!==t){this._forEach(e=>e.dispose()),this._oscillators=[];for(let e=0;e<t;e++){const n=new _e({context:this.context,volume:-6-t*1.1,type:this._type,phase:this._phase+e/t*360,partialCount:this._partialCount,onstop:e===0?()=>this.onstop(this):$t});this.type==="custom"&&(n.partials=this._partials),this.frequency.connect(n.frequency),this.detune.connect(n.detune),n.detune.overridden=!1,n.connect(this.output),this._oscillators[e]=n}this.spread=this._spread,this.state==="started"&&this._forEach(e=>e.start())}}get phase(){return this._phase}set phase(t){this._phase=t,this._forEach((e,n)=>e.phase=this._phase+n/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(t){this._forEach(e=>e.baseType=t),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(t){this._partials=t,this._partialCount=this._partials.length,t.length&&(this._type="custom",this._forEach(e=>e.partials=t))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(t){this._partialCount=t,this._forEach(e=>e.partialCount=t),this._type=this._oscillators[0].type}asArray(t=1024){return be(this,void 0,void 0,function*(){return _s(this,t)})}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(t=>t.dispose()),this}}class qr extends qe{constructor(){super(ct(qr.getDefaults(),arguments,["frequency","modulationFrequency"])),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new ds({context:this.context,value:2});const t=ct(qr.getDefaults(),arguments,["frequency","modulationFrequency"]);this._pulse=new tr({context:this.context,frequency:t.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new _e({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),de(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(qe.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(t){t=this.toSeconds(t),this._modulator.start(t),this._pulse.start(t)}_stop(t){t=this.toSeconds(t),this._modulator.stop(t),this._pulse.stop(t)}_restart(t){this._modulator.restart(t),this._pulse.restart(t)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(t){this._modulator.phase=t}asArray(t=1024){return be(this,void 0,void 0,function*(){return _s(this,t)})}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const _d={am:Gr,fat:Wr,fm:Hr,oscillator:_e,pulse:tr,pwm:qr};class Xr extends qe{constructor(){super(ct(Xr.getDefaults(),arguments,["frequency","type"])),this.name="OmniOscillator";const t=ct(Xr.getDefaults(),arguments,["frequency","type"]);this.frequency=new me({context:this.context,units:"frequency",value:t.frequency}),this.detune=new me({context:this.context,units:"cents",value:t.detune}),de(this,["frequency","detune"]),this.set(t)}static getDefaults(){return Object.assign(_e.getDefaults(),Hr.getDefaults(),Gr.getDefaults(),Wr.getDefaults(),tr.getDefaults(),qr.getDefaults())}_start(t){this._oscillator.start(t)}_stop(t){this._oscillator.stop(t)}_restart(t){return this._oscillator.restart(t),this}get type(){let t="";return["am","fm","fat"].some(e=>this._sourceType===e)&&(t=this._sourceType),t+this._oscillator.type}set type(t){t.substr(0,2)==="fm"?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(2)):t.substr(0,2)==="am"?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(2)):t.substr(0,3)==="fat"?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(3)):t==="pwm"?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):t==="pulse"?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=t)}get partials(){return this._oscillator.partials}set partials(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partials=t)}get partialCount(){return this._oscillator.partialCount}set partialCount(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&(this._oscillator.partialCount=t)}set(t){return Reflect.has(t,"type")&&t.type&&(this.type=t.type),super.set(t),this}_createNewOscillator(t){if(t!==this._sourceType){this._sourceType=t;const e=_d[t],n=this.now();if(this._oscillator){const s=this._oscillator;s.stop(n),this.context.setTimeout(()=>s.dispose(),this.blockTime)}this._oscillator=new e({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),this.state==="started"&&this._oscillator.start(n)}}get phase(){return this._oscillator.phase}set phase(t){this._oscillator.phase=t}get sourceType(){return this._sourceType}set sourceType(t){let e="sine";this._oscillator.type!=="pwm"&&this._oscillator.type!=="pulse"&&(e=this._oscillator.type),t==="fm"?this.type="fm"+e:t==="am"?this.type="am"+e:t==="fat"?this.type="fat"+e:t==="oscillator"?this.type=e:t==="pulse"?this.type="pulse":t==="pwm"&&(this.type="pwm")}_getOscType(t,e){return t instanceof _d[e]}get baseType(){return this._oscillator.baseType}set baseType(t){!this._getOscType(this._oscillator,"pulse")&&!this._getOscType(this._oscillator,"pwm")&&t!=="pulse"&&t!=="pwm"&&(this._oscillator.baseType=t)}get width(){if(this._getOscType(this._oscillator,"pulse"))return this._oscillator.width}get count(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.count}set count(t){this._getOscType(this._oscillator,"fat")&&Un(t)&&(this._oscillator.count=t)}get spread(){if(this._getOscType(this._oscillator,"fat"))return this._oscillator.spread}set spread(t){this._getOscType(this._oscillator,"fat")&&Un(t)&&(this._oscillator.spread=t)}get modulationType(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.modulationType}set modulationType(t){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&pi(t)&&(this._oscillator.modulationType=t)}get modulationIndex(){if(this._getOscType(this._oscillator,"fm"))return this._oscillator.modulationIndex}get harmonicity(){if(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))return this._oscillator.harmonicity}get modulationFrequency(){if(this._getOscType(this._oscillator,"pwm"))return this._oscillator.modulationFrequency}asArray(t=1024){return be(this,void 0,void 0,function*(){return _s(this,t)})}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}function Mp(i,t=1/0){const e=new WeakMap;return function(n,s){Reflect.defineProperty(n,s,{configurable:!0,enumerable:!0,get:function(){return e.get(this)},set:function(r){Xn(r,i,t),e.set(this,r)}})}}function _i(i,t=1/0){const e=new WeakMap;return function(n,s){Reflect.defineProperty(n,s,{configurable:!0,enumerable:!0,get:function(){return e.get(this)},set:function(r){Xn(this.toSeconds(r),i,t),e.set(this,r)}})}}class Yr extends qe{constructor(){super(ct(Yr.getDefaults(),arguments,["url","onload"])),this.name="Player",this._activeSources=new Set;const t=ct(Yr.getDefaults(),arguments,["url","onload"]);this._buffer=new Kt({onload:this._onload.bind(this,t.onload),onerror:t.onerror,reverse:t.reverse,url:t.url}),this.autostart=t.autostart,this._loop=t.loop,this._loopStart=t.loopStart,this._loopEnd=t.loopEnd,this._playbackRate=t.playbackRate,this.fadeIn=t.fadeIn,this.fadeOut=t.fadeOut}static getDefaults(){return Object.assign(qe.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:$t,onerror:$t,playbackRate:1,reverse:!1})}load(t){return be(this,void 0,void 0,function*(){return yield this._buffer.load(t),this._onload(),this})}_onload(t=$t){t(),this.autostart&&this.start()}_onSourceEnd(t){this.onstop(this),this._activeSources.delete(t),this._activeSources.size===0&&!this._synced&&this._state.getValueAtTime(this.now())==="started"&&(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(t,e,n){return super.start(t,e,n),this}_start(t,e,n){this._loop?e=ss(e,this._loopStart):e=ss(e,0);const s=this.toSeconds(e),r=n;n=ss(n,Math.max(this._buffer.duration-s,0));let o=this.toSeconds(n);o=o/this._playbackRate,t=this.toSeconds(t);const a=new Qs({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);!this._loop&&!this._synced&&(this._state.cancel(t+o),this._state.setStateAtTime("stopped",t+o,{implicitEnd:!0})),this._activeSources.add(a),this._loop&&Tn(r)?a.start(t,s):a.start(t,s,o-this.toSeconds(this.fadeOut))}_stop(t){const e=this.toSeconds(t);this._activeSources.forEach(n=>n.stop(e))}restart(t,e,n){return super.restart(t,e,n),this}_restart(t,e,n){var s;(s=[...this._activeSources].pop())===null||s===void 0||s.stop(t),this._start(t,e,n)}seek(t,e){const n=this.toSeconds(e);if(this._state.getValueAtTime(n)==="started"){const s=this.toSeconds(t);this._stop(n),this._start(n,s)}return this}setLoopPoints(t,e){return this.loopStart=t,this.loopEnd=e,this}get loopStart(){return this._loopStart}set loopStart(t){this._loopStart=t,this.buffer.loaded&&Xn(this.toSeconds(t),0,this.buffer.duration),this._activeSources.forEach(e=>{e.loopStart=t})}get loopEnd(){return this._loopEnd}set loopEnd(t){this._loopEnd=t,this.buffer.loaded&&Xn(this.toSeconds(t),0,this.buffer.duration),this._activeSources.forEach(e=>{e.loopEnd=t})}get buffer(){return this._buffer}set buffer(t){this._buffer.set(t)}get loop(){return this._loop}set loop(t){if(this._loop!==t&&(this._loop=t,this._activeSources.forEach(e=>{e.loop=t}),t)){const e=this._state.getNextState("stopped",this.now());e&&this._state.cancel(e.time)}}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t;const e=this.now(),n=this._state.getNextState("stopped",e);n&&n.implicitEnd&&(this._state.cancel(n.time),this._activeSources.forEach(s=>s.cancelStop())),this._activeSources.forEach(s=>{s.playbackRate.setValueAtTime(t,e)})}get reverse(){return this._buffer.reverse}set reverse(t){this._buffer.reverse=t}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(t=>t.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}Vn([_i(0)],Yr.prototype,"fadeIn",void 0);Vn([_i(0)],Yr.prototype,"fadeOut",void 0);class FE extends ls{constructor(){super(...arguments),this.name="GainToAudio",this._norm=new hs({context:this.context,mapping:t=>Math.abs(t)*2-1}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class Yn extends Nt{constructor(){super(ct(Yn.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="Envelope",this._sig=new me({context:this.context,value:0}),this.output=this._sig,this.input=void 0;const t=ct(Yn.getDefaults(),arguments,["attack","decay","sustain","release"]);this.attack=t.attack,this.decay=t.decay,this.sustain=t.sustain,this.release=t.release,this.attackCurve=t.attackCurve,this.releaseCurve=t.releaseCurve,this.decayCurve=t.decayCurve}static getDefaults(){return Object.assign(Nt.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(t,e){if(pi(t))return t;{let n;for(n in Yo)if(Yo[n][e]===t)return n;return t}}_setCurve(t,e,n){if(pi(n)&&Reflect.has(Yo,n)){const s=Yo[n];es(s)?t!=="_decayCurve"&&(this[t]=s[e]):this[t]=s}else if(mn(n)&&t!=="_decayCurve")this[t]=n;else throw new Error("Envelope: invalid curve: "+n)}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(t){this._setCurve("_attackCurve","In",t)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(t){this._setCurve("_releaseCurve","Out",t)}get decayCurve(){return this._getCurve(this._decayCurve,"Out")}set decayCurve(t){this._setCurve("_decayCurve","Out",t)}triggerAttack(t,e=1){this.log("triggerAttack",t,e),t=this.toSeconds(t);let s=this.toSeconds(this.attack);const r=this.toSeconds(this.decay),o=this.getValueAtTime(t);if(o>0){const a=1/s;s=(1-o)/a}if(s<this.sampleTime)this._sig.cancelScheduledValues(t),this._sig.setValueAtTime(e,t);else if(this._attackCurve==="linear")this._sig.linearRampTo(e,s,t);else if(this._attackCurve==="exponential")this._sig.targetRampTo(e,s,t);else{this._sig.cancelAndHoldAtTime(t);let a=this._attackCurve;for(let c=1;c<a.length;c++)if(a[c-1]<=o&&o<=a[c]){a=this._attackCurve.slice(c),a[0]=o;break}this._sig.setValueCurveAtTime(a,t,s,e)}if(r&&this.sustain<1){const a=e*this.sustain,c=t+s;this.log("decay",c),this._decayCurve==="linear"?this._sig.linearRampToValueAtTime(a,r+c):this._sig.exponentialApproachValueAtTime(a,c,r)}return this}triggerRelease(t){this.log("triggerRelease",t),t=this.toSeconds(t);const e=this.getValueAtTime(t);if(e>0){const n=this.toSeconds(this.release);n<this.sampleTime?this._sig.setValueAtTime(0,t):this._releaseCurve==="linear"?this._sig.linearRampTo(0,n,t):this._releaseCurve==="exponential"?this._sig.targetRampTo(0,n,t):(Rt(mn(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(t),this._sig.setValueCurveAtTime(this._releaseCurve,t,n,e))}return this}getValueAtTime(t){return this._sig.getValueAtTime(t)}triggerAttackRelease(t,e,n=1){return e=this.toSeconds(e),this.triggerAttack(e,n),this.triggerRelease(e+this.toSeconds(t)),this}cancel(t){return this._sig.cancelScheduledValues(this.toSeconds(t)),this}connect(t,e=0,n=0){return nh(this,t,e,n),this}asArray(t=1024){return be(this,void 0,void 0,function*(){const e=t/this.context.sampleRate,n=new $a(1,e,this.context.sampleRate),s=this.toSeconds(this.attack)+this.toSeconds(this.decay),r=s+this.toSeconds(this.release),o=r*.1,a=r+o,c=new this.constructor(Object.assign(this.get(),{attack:e*this.toSeconds(this.attack)/a,decay:e*this.toSeconds(this.decay)/a,release:e*this.toSeconds(this.release)/a,context:n}));return c._sig.toDestination(),c.triggerAttackRelease(e*(s+o)/a,0),(yield n.render()).getChannelData(0)})}dispose(){return super.dispose(),this._sig.dispose(),this}}Vn([_i(0)],Yn.prototype,"attack",void 0);Vn([_i(0)],Yn.prototype,"decay",void 0);Vn([Mp(0,1)],Yn.prototype,"sustain",void 0);Vn([_i(0)],Yn.prototype,"release",void 0);const Yo=(()=>{let t,e;const n=[];for(t=0;t<128;t++)n[t]=Math.sin(t/127*(Math.PI/2));const s=[],r=6.4;for(t=0;t<127;t++){e=t/127;const d=Math.sin(e*(Math.PI*2)*r-Math.PI/2)+1;s[t]=d/10+e*.83}s[127]=1;const o=[],a=5;for(t=0;t<128;t++)o[t]=Math.ceil(t/127*a)/a;const c=[];for(t=0;t<128;t++)e=t/127,c[t]=.5*(1-Math.cos(Math.PI*e));const l=[];for(t=0;t<128;t++){e=t/127;const d=Math.pow(e,3)*4+.2,f=Math.cos(d*Math.PI*2*e);l[t]=Math.abs(f*(1-e))}function h(d){const f=new Array(d.length);for(let g=0;g<d.length;g++)f[g]=1-d[g];return f}function u(d){return d.slice(0).reverse()}return{bounce:{In:h(l),Out:l},cosine:{In:n,Out:u(n)},exponential:"exponential",linear:"linear",ripple:{In:s,Out:h(s)},sine:{In:c,Out:h(c)},step:{In:o,Out:h(o)}}})();class Fn extends Nt{constructor(){super(ct(Fn.getDefaults(),arguments)),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease,this._syncedRelease=e=>this._original_triggerRelease(e);const t=ct(Fn.getDefaults(),arguments);this._volume=this.output=new cs({context:this.context,volume:t.volume}),this.volume=this._volume.volume,de(this,"volume")}static getDefaults(){return Object.assign(Nt.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}_syncState(){let t=!1;return this._synced||(this._synced=!0,t=!0),t}_syncMethod(t,e){const n=this["_original_"+t]=this[t];this[t]=(...s)=>{const r=s[e],o=this.context.transport.schedule(a=>{s[e]=a,n.apply(this,s)},r);this._scheduledEvents.push(o)}}unsync(){return this._scheduledEvents.forEach(t=>this.context.transport.clear(t)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease,this.context.transport.off("stop",this._syncedRelease),this.context.transport.off("pause",this._syncedRelease),this.context.transport.off("loopEnd",this._syncedRelease)),this}triggerAttackRelease(t,e,n,s){const r=this.toSeconds(n),o=this.toSeconds(e);return this.triggerAttack(t,r,s),this.triggerRelease(r+o),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class Oi extends Fn{constructor(){super(ct(Oi.getDefaults(),arguments));const t=ct(Oi.getDefaults(),arguments);this.portamento=t.portamento,this.onsilence=t.onsilence}static getDefaults(){return Object.assign(Fn.getDefaults(),{detune:0,onsilence:$t,portamento:0})}triggerAttack(t,e,n=1){this.log("triggerAttack",t,e,n);const s=this.toSeconds(e);return this._triggerEnvelopeAttack(s,n),this.setNote(t,s),this}triggerRelease(t){this.log("triggerRelease",t);const e=this.toSeconds(t);return this._triggerEnvelopeRelease(e),this}setNote(t,e){const n=this.toSeconds(e),s=t instanceof fn?t.toFrequency():t;if(this.portamento>0&&this.getLevelAtTime(n)>.05){const r=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(s,r,n)}else this.frequency.setValueAtTime(s,n);return this}}Vn([_i(0)],Oi.prototype,"portamento",void 0);class Qa extends Yn{constructor(){super(ct(Qa.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new ee({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class Ln extends Oi{constructor(){super(ct(Ln.getDefaults(),arguments)),this.name="Synth";const t=ct(Ln.getDefaults(),arguments);this.oscillator=new Xr(Object.assign({context:this.context,detune:t.detune,onstop:()=>this.onsilence(this)},t.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new Qa(Object.assign({context:this.context},t.envelope)),this.oscillator.chain(this.envelope,this.output),de(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(Oi.getDefaults(),{envelope:Object.assign(Br(Yn.getDefaults(),Object.keys(Nt.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(Br(Xr.getDefaults(),[...Object.keys(qe.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(t,e){if(this.envelope.triggerAttack(t,e),this.oscillator.start(t),this.envelope.sustain===0){const n=this.toSeconds(this.envelope.attack),s=this.toSeconds(this.envelope.decay);this.oscillator.stop(t+n+s)}}_triggerEnvelopeRelease(t){this.envelope.triggerRelease(t),this.oscillator.stop(t+this.toSeconds(this.envelope.release))}getLevelAtTime(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class jr extends Nt{constructor(){super(ct(jr.getDefaults(),arguments,["frequency","type"])),this.name="BiquadFilter";const t=ct(jr.getDefaults(),arguments,["frequency","type"]);this._filter=this.context.createBiquadFilter(),this.input=this.output=this._filter,this.Q=new te({context:this.context,units:"number",value:t.Q,param:this._filter.Q}),this.frequency=new te({context:this.context,units:"frequency",value:t.frequency,param:this._filter.frequency}),this.detune=new te({context:this.context,units:"cents",value:t.detune,param:this._filter.detune}),this.gain=new te({context:this.context,units:"decibels",convert:!1,value:t.gain,param:this._filter.gain}),this.type=t.type}static getDefaults(){return Object.assign(Nt.getDefaults(),{Q:1,type:"lowpass",frequency:350,detune:0,gain:0})}get type(){return this._filter.type}set type(t){Rt(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(t)!==-1,`Invalid filter type: ${t}`),this._filter.type=t}getFrequencyResponse(t=128){const e=new Float32Array(t);for(let o=0;o<t;o++){const c=Math.pow(o/t,2)*19980+20;e[o]=c}const n=new Float32Array(t),s=new Float32Array(t),r=this.context.createBiquadFilter();return r.type=this.type,r.Q.value=this.Q.value,r.frequency.value=this.frequency.value,r.gain.value=this.gain.value,r.getFrequencyResponse(e,n,s),n}dispose(){return super.dispose(),this._filter.disconnect(),this.Q.dispose(),this.frequency.dispose(),this.gain.dispose(),this.detune.dispose(),this}}class Zr extends Nt{constructor(){super(ct(Zr.getDefaults(),arguments,["frequency","type","rolloff"])),this.name="Filter",this.input=new ee({context:this.context}),this.output=new ee({context:this.context}),this._filters=[];const t=ct(Zr.getDefaults(),arguments,["frequency","type","rolloff"]);this._filters=[],this.Q=new me({context:this.context,units:"positive",value:t.Q}),this.frequency=new me({context:this.context,units:"frequency",value:t.frequency}),this.detune=new me({context:this.context,units:"cents",value:t.detune}),this.gain=new me({context:this.context,units:"decibels",convert:!1,value:t.gain}),this._type=t.type,this.rolloff=t.rolloff,de(this,["detune","frequency","gain","Q"])}static getDefaults(){return Object.assign(Nt.getDefaults(),{Q:1,detune:0,frequency:350,gain:0,rolloff:-12,type:"lowpass"})}get type(){return this._type}set type(t){Rt(["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(t)!==-1,`Invalid filter type: ${t}`),this._type=t,this._filters.forEach(n=>n.type=t)}get rolloff(){return this._rolloff}set rolloff(t){const e=Un(t)?t:parseInt(t,10),n=[-12,-24,-48,-96];let s=n.indexOf(e);Rt(s!==-1,`rolloff can only be ${n.join(", ")}`),s+=1,this._rolloff=e,this.input.disconnect(),this._filters.forEach(r=>r.disconnect()),this._filters=new Array(s);for(let r=0;r<s;r++){const o=new jr({context:this.context});o.type=this._type,this.frequency.connect(o.frequency),this.detune.connect(o.detune),this.Q.connect(o.Q),this.gain.connect(o.gain),this._filters[r]=o}this._internalChannels=this._filters,ma(this.input,...this._internalChannels,this.output)}getFrequencyResponse(t=128){const e=new jr({frequency:this.frequency.value,gain:this.gain.value,Q:this.Q.value,type:this._type,detune:this.detune.value}),n=new Float32Array(t).map(()=>1);return this._filters.forEach(()=>{e.getFrequencyResponse(t).forEach((r,o)=>n[o]*=r)}),e.dispose(),n}dispose(){return super.dispose(),this._filters.forEach(t=>{t.dispose()}),th(this,["detune","frequency","gain","Q"]),this.frequency.dispose(),this.Q.dispose(),this.detune.dispose(),this.gain.dispose(),this}}class er extends Ln{constructor(){super(ct(er.getDefaults(),arguments)),this.name="MembraneSynth",this.portamento=0;const t=ct(er.getDefaults(),arguments);this.pitchDecay=t.pitchDecay,this.octaves=t.octaves,de(this,["oscillator","envelope"])}static getDefaults(){return is(Oi.getDefaults(),Ln.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(t,e){const n=this.toSeconds(e),s=this.toFrequency(t instanceof fn?t.toFrequency():t),r=s*this.octaves;return this.oscillator.frequency.setValueAtTime(r,n),this.oscillator.frequency.exponentialRampToValueAtTime(s,n+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}Vn([Mp(0)],er.prototype,"octaves",void 0);Vn([_i(0)],er.prototype,"pitchDecay",void 0);class ba extends Fn{constructor(){super(ct(ba.getDefaults(),arguments)),this.name="NoiseSynth";const t=ct(ba.getDefaults(),arguments);this.noise=new us(Object.assign({context:this.context},t.noise)),this.envelope=new Qa(Object.assign({context:this.context},t.envelope)),this.noise.chain(this.envelope,this.output)}static getDefaults(){return Object.assign(Fn.getDefaults(),{envelope:Object.assign(Br(Yn.getDefaults(),Object.keys(Nt.getDefaults())),{decay:.1,sustain:0}),noise:Object.assign(Br(us.getDefaults(),Object.keys(qe.getDefaults())),{type:"white"})})}triggerAttack(t,e=1){return t=this.toSeconds(t),this.envelope.triggerAttack(t,e),this.noise.start(t),this.envelope.sustain===0&&this.noise.stop(t+this.toSeconds(this.envelope.attack)+this.toSeconds(this.envelope.decay)),this}triggerRelease(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.noise.stop(t+this.toSeconds(this.envelope.release)),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",0),this._syncMethod("triggerRelease",0)),this}triggerAttackRelease(t,e,n=1){return e=this.toSeconds(e),t=this.toSeconds(t),this.triggerAttack(e,n),this.triggerRelease(e+t),this}dispose(){return super.dispose(),this.noise.dispose(),this.envelope.dispose(),this}}const Tp=new Set;function rh(i){Tp.add(i)}function bp(i,t){const e=`registerProcessor("${i}", ${t})`;Tp.add(e)}const kE=`
	/**
	 * The base AudioWorkletProcessor for use in Tone.js. Works with the {@link ToneAudioWorklet}. 
	 */
	class ToneAudioWorkletProcessor extends AudioWorkletProcessor {

		constructor(options) {
			
			super(options);
			/**
			 * If the processor was disposed or not. Keep alive until it's disposed.
			 */
			this.disposed = false;
		   	/** 
			 * The number of samples in the processing block
			 */
			this.blockSize = 128;
			/**
			 * the sample rate
			 */
			this.sampleRate = sampleRate;

			this.port.onmessage = (event) => {
				// when it receives a dispose 
				if (event.data === "dispose") {
					this.disposed = true;
				}
			};
		}
	}
`;rh(kE);const BE=`
	/**
	 * Abstract class for a single input/output processor. 
	 * has a 'generate' function which processes one sample at a time
	 */
	class SingleIOProcessor extends ToneAudioWorkletProcessor {

		constructor(options) {
			super(Object.assign(options, {
				numberOfInputs: 1,
				numberOfOutputs: 1
			}));
			/**
			 * Holds the name of the parameter and a single value of that
			 * parameter at the current sample
			 * @type { [name: string]: number }
			 */
			this.params = {}
		}

		/**
		 * Generate an output sample from the input sample and parameters
		 * @abstract
		 * @param input number
		 * @param channel number
		 * @param parameters { [name: string]: number }
		 * @returns number
		 */
		generate(){}

		/**
		 * Update the private params object with the 
		 * values of the parameters at the given index
		 * @param parameters { [name: string]: Float32Array },
		 * @param index number
		 */
		updateParams(parameters, index) {
			for (const paramName in parameters) {
				const param = parameters[paramName];
				if (param.length > 1) {
					this.params[paramName] = parameters[paramName][index];
				} else {
					this.params[paramName] = parameters[paramName][0];
				}
			}
		}

		/**
		 * Process a single frame of the audio
		 * @param inputs Float32Array[][]
		 * @param outputs Float32Array[][]
		 */
		process(inputs, outputs, parameters) {
			const input = inputs[0];
			const output = outputs[0];
			// get the parameter values
			const channelCount = Math.max(input && input.length || 0, output.length);
			for (let sample = 0; sample < this.blockSize; sample++) {
				this.updateParams(parameters, sample);
				for (let channel = 0; channel < channelCount; channel++) {
					const inputSample = input && input.length ? input[channel][sample] : 0;
					output[channel][sample] = this.generate(inputSample, channel, this.params);
				}
			}
			return !this.disposed;
		}
	};
`;rh(BE);const VE=`
	/**
	 * A multichannel buffer for use within an AudioWorkletProcessor as a delay line
	 */
	class DelayLine {
		
		constructor(size, channels) {
			this.buffer = [];
			this.writeHead = []
			this.size = size;

			// create the empty channels
			for (let i = 0; i < channels; i++) {
				this.buffer[i] = new Float32Array(this.size);
				this.writeHead[i] = 0;
			}
		}

		/**
		 * Push a value onto the end
		 * @param channel number
		 * @param value number
		 */
		push(channel, value) {
			this.writeHead[channel] += 1;
			if (this.writeHead[channel] > this.size) {
				this.writeHead[channel] = 0;
			}
			this.buffer[channel][this.writeHead[channel]] = value;
		}

		/**
		 * Get the recorded value of the channel given the delay
		 * @param channel number
		 * @param delay number delay samples
		 */
		get(channel, delay) {
			let readHead = this.writeHead[channel] - Math.floor(delay);
			if (readHead < 0) {
				readHead += this.size;
			}
			return this.buffer[channel][readHead];
		}
	}
`;rh(VE);const zE="feedback-comb-filter",GE=`
	class FeedbackCombFilterWorklet extends SingleIOProcessor {

		constructor(options) {
			super(options);
			this.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);
		}

		static get parameterDescriptors() {
			return [{
				name: "delayTime",
				defaultValue: 0.1,
				minValue: 0,
				maxValue: 1,
				automationRate: "k-rate"
			}, {
				name: "feedback",
				defaultValue: 0.5,
				minValue: 0,
				maxValue: 0.9999,
				automationRate: "k-rate"
			}];
		}

		generate(input, channel, parameters) {
			const delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);
			this.delayLine.push(channel, input + delayedSample * parameters.feedback);
			return delayedSample;
		}
	}
`;bp(zE,GE);class wa extends Fn{constructor(){super(ct(wa.getDefaults(),arguments,["voice","options"])),this.name="PolySynth",this._availableVoices=[],this._activeVoices=[],this._voices=[],this._gcTimeout=-1,this._averageActiveVoices=0,this._syncedRelease=s=>this.releaseAll(s);const t=ct(wa.getDefaults(),arguments,["voice","options"]);Rt(!Un(t.voice),"DEPRECATED: The polyphony count is no longer the first argument.");const e=t.voice.getDefaults();this.options=Object.assign(e,t.options),this.voice=t.voice,this.maxPolyphony=t.maxPolyphony,this._dummyVoice=this._getNextAvailableVoice();const n=this._voices.indexOf(this._dummyVoice);this._voices.splice(n,1),this._gcTimeout=this.context.setInterval(this._collectGarbage.bind(this),1)}static getDefaults(){return Object.assign(Fn.getDefaults(),{maxPolyphony:32,options:{},voice:Ln})}get activeVoices(){return this._activeVoices.length}_makeVoiceAvailable(t){this._availableVoices.push(t);const e=this._activeVoices.findIndex(n=>n.voice===t);this._activeVoices.splice(e,1)}_getNextAvailableVoice(){if(this._availableVoices.length)return this._availableVoices.shift();if(this._voices.length<this.maxPolyphony){const t=new this.voice(Object.assign(this.options,{context:this.context,onsilence:this._makeVoiceAvailable.bind(this)}));return Rt(t instanceof Oi,"Voice must extend Monophonic class"),t.connect(this.output),this._voices.push(t),t}else Ya("Max polyphony exceeded. Note dropped.")}_collectGarbage(){if(this._averageActiveVoices=Math.max(this._averageActiveVoices*.95,this.activeVoices),this._availableVoices.length&&this._voices.length>Math.ceil(this._averageActiveVoices+1)){const t=this._availableVoices.shift(),e=this._voices.indexOf(t);this._voices.splice(e,1),this.context.isOffline||t.dispose()}}_triggerAttack(t,e,n){t.forEach(s=>{const r=new ya(this.context,s).toMidi(),o=this._getNextAvailableVoice();o&&(o.triggerAttack(s,e,n),this._activeVoices.push({midi:r,voice:o,released:!1}),this.log("triggerAttack",s,e))})}_triggerRelease(t,e){t.forEach(n=>{const s=new ya(this.context,n).toMidi(),r=this._activeVoices.find(({midi:o,released:a})=>o===s&&!a);r&&(r.voice.triggerRelease(e),r.released=!0,this.log("triggerRelease",n,e))})}_scheduleEvent(t,e,n,s){Rt(!this.disposed,"Synth was already disposed"),n<=this.now()?t==="attack"?this._triggerAttack(e,n,s):this._triggerRelease(e,n):this.context.setTimeout(()=>{this.disposed||this._scheduleEvent(t,e,n,s)},n-this.now())}triggerAttack(t,e,n){Array.isArray(t)||(t=[t]);const s=this.toSeconds(e);return this._scheduleEvent("attack",t,s,n),this}triggerRelease(t,e){Array.isArray(t)||(t=[t]);const n=this.toSeconds(e);return this._scheduleEvent("release",t,n),this}triggerAttackRelease(t,e,n,s){const r=this.toSeconds(n);if(this.triggerAttack(t,r,s),mn(e)){Rt(mn(t),"If the duration is an array, the notes must also be an array"),t=t;for(let o=0;o<t.length;o++){const a=e[Math.min(o,e.length-1)],c=this.toSeconds(a);Rt(c>0,"The duration must be greater than 0"),this.triggerRelease(t[o],r+c)}}else{const o=this.toSeconds(e);Rt(o>0,"The duration must be greater than 0"),this.triggerRelease(t,r+o)}return this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1),this.context.transport.on("stop",this._syncedRelease),this.context.transport.on("pause",this._syncedRelease),this.context.transport.on("loopEnd",this._syncedRelease)),this}set(t){const e=Br(t,["onsilence","context"]);return this.options=is(this.options,e),this._voices.forEach(n=>n.set(e)),this._dummyVoice.set(e),this}get(){return this._dummyVoice.get()}releaseAll(t){const e=this.toSeconds(t);return this._activeVoices.forEach(({voice:n})=>{n.triggerRelease(e)}),this}dispose(){return super.dispose(),this._dummyVoice.dispose(),this._voices.forEach(t=>t.dispose()),this._activeVoices=[],this._availableVoices=[],this.context.clearInterval(this._gcTimeout),this}}class $r extends Fn{constructor(){super(ct($r.getDefaults(),arguments,["urls","onload","baseUrl"],"urls")),this.name="Sampler",this._activeSources=new Map;const t=ct($r.getDefaults(),arguments,["urls","onload","baseUrl"],"urls"),e={};Object.keys(t.urls).forEach(n=>{const s=parseInt(n,10);if(Rt(Xo(n)||Un(s)&&isFinite(s),`url key is neither a note or midi pitch: ${n}`),Xo(n)){const r=new fn(this.context,n).toMidi();e[r]=t.urls[n]}else Un(s)&&isFinite(s)&&(e[s]=t.urls[s])}),this._buffers=new ih({urls:e,onload:t.onload,baseUrl:t.baseUrl,onerror:t.onerror}),this.attack=t.attack,this.release=t.release,this.curve=t.curve,this._buffers.loaded&&Promise.resolve().then(t.onload)}static getDefaults(){return Object.assign(Fn.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:$t,onerror:$t,release:.1,urls:{}})}_findClosest(t){let n=0;for(;n<96;){if(this._buffers.has(t+n))return-n;if(this._buffers.has(t-n))return n;n++}throw new Error(`No available buffers for note: ${t}`)}triggerAttack(t,e,n=1){return this.log("triggerAttack",t,e,n),Array.isArray(t)||(t=[t]),t.forEach(s=>{const r=yp(new fn(this.context,s).toFrequency()),o=Math.round(r),a=r-o,c=this._findClosest(o),l=o-c,h=this._buffers.get(l),u=xp(c+a),d=new Qs({url:h,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:u}).connect(this.output);d.start(e,0,h.duration/u,n),mn(this._activeSources.get(o))||this._activeSources.set(o,[]),this._activeSources.get(o).push(d),d.onended=()=>{if(this._activeSources&&this._activeSources.has(o)){const f=this._activeSources.get(o),g=f.indexOf(d);g!==-1&&f.splice(g,1)}}}),this}triggerRelease(t,e){return this.log("triggerRelease",t,e),Array.isArray(t)||(t=[t]),t.forEach(n=>{const s=new fn(this.context,n).toMidi();if(this._activeSources.has(s)&&this._activeSources.get(s).length){const r=this._activeSources.get(s);e=this.toSeconds(e),r.forEach(o=>{o.stop(e)}),this._activeSources.set(s,[])}}),this}releaseAll(t){const e=this.toSeconds(t);return this._activeSources.forEach(n=>{for(;n.length;)n.shift().stop(e)}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(t,e,n,s=1){const r=this.toSeconds(n);return this.triggerAttack(t,r,s),mn(e)?(Rt(mn(t),"notes must be an array when duration is array"),t.forEach((o,a)=>{const c=e[Math.min(a,e.length-1)];this.triggerRelease(o,r+this.toSeconds(c))})):this.triggerRelease(t,r+this.toSeconds(e)),this}add(t,e,n){if(Rt(Xo(t)||isFinite(t),`note must be a pitch or midi: ${t}`),Xo(t)){const s=new fn(this.context,t).toMidi();this._buffers.add(s,e,n)}else this._buffers.add(t,e,n);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(t=>{t.forEach(e=>e.dispose())}),this._activeSources.clear(),this}}Vn([_i(0)],$r.prototype,"attack",void 0);Vn([_i(0)],$r.prototype,"release",void 0);class Ea extends Fe{constructor(){super(ct(Ea.getDefaults(),arguments,["callback","value"])),this.name="ToneEvent",this._state=new Ka("stopped"),this._startOffset=0;const t=ct(Ea.getDefaults(),arguments,["callback","value"]);this._loop=t.loop,this.callback=t.callback,this.value=t.value,this._loopStart=this.toTicks(t.loopStart),this._loopEnd=this.toTicks(t.loopEnd),this._playbackRate=t.playbackRate,this._probability=t.probability,this._humanize=t.humanize,this.mute=t.mute,this._playbackRate=t.playbackRate,this._state.increasing=!0,this._rescheduleEvents()}static getDefaults(){return Object.assign(Fe.getDefaults(),{callback:$t,humanize:!1,loop:!1,loopEnd:"1m",loopStart:0,mute:!1,playbackRate:1,probability:1,value:null})}_rescheduleEvents(t=-1){this._state.forEachFrom(t,e=>{let n;if(e.state==="started"){e.id!==-1&&this.context.transport.clear(e.id);const s=e.time+Math.round(this.startOffset/this._playbackRate);if(this._loop===!0||Un(this._loop)&&this._loop>1){n=1/0,Un(this._loop)&&(n=this._loop*this._getLoopDuration());const r=this._state.getAfter(s);r!==null&&(n=Math.min(n,r.time-s)),n!==1/0&&(n=new xn(this.context,n));const o=new xn(this.context,this._getLoopDuration());e.id=this.context.transport.scheduleRepeat(this._tick.bind(this),o,new xn(this.context,s),n)}else e.id=this.context.transport.schedule(this._tick.bind(this),new xn(this.context,s))}})}get state(){return this._state.getValueAtTime(this.context.transport.ticks)}get startOffset(){return this._startOffset}set startOffset(t){this._startOffset=t}get probability(){return this._probability}set probability(t){this._probability=t}get humanize(){return this._humanize}set humanize(t){this._humanize=t}start(t){const e=this.toTicks(t);return this._state.getValueAtTime(e)==="stopped"&&(this._state.add({id:-1,state:"started",time:e}),this._rescheduleEvents(e)),this}stop(t){this.cancel(t);const e=this.toTicks(t);if(this._state.getValueAtTime(e)==="started"){this._state.setStateAtTime("stopped",e,{id:-1});const n=this._state.getBefore(e);let s=e;n!==null&&(s=n.time),this._rescheduleEvents(s)}return this}cancel(t){t=ss(t,-1/0);const e=this.toTicks(t);return this._state.forEachFrom(e,n=>{this.context.transport.clear(n.id)}),this._state.cancel(e),this}_tick(t){const e=this.context.transport.getTicksAtTime(t);if(!this.mute&&this._state.getValueAtTime(e)==="started"){if(this.probability<1&&Math.random()>this.probability)return;if(this.humanize){let n=.02;up(this.humanize)||(n=this.toSeconds(this.humanize)),t+=(Math.random()*2-1)*n}this.callback(t,this.value)}}_getLoopDuration(){return(this._loopEnd-this._loopStart)/this._playbackRate}get loop(){return this._loop}set loop(t){this._loop=t,this._rescheduleEvents()}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this._rescheduleEvents()}get loopEnd(){return new xn(this.context,this._loopEnd).toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t),this._loop&&this._rescheduleEvents()}get loopStart(){return new xn(this.context,this._loopStart).toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t),this._loop&&this._rescheduleEvents()}get progress(){if(this._loop){const t=this.context.transport.ticks,e=this._state.get(t);if(e!==null&&e.state==="started"){const n=this._getLoopDuration();return(t-e.time)%n/n}else return 0}else return 0}dispose(){return super.dispose(),this.cancel(),this._state.dispose(),this}}class Aa extends Fe{constructor(){super(ct(Aa.getDefaults(),arguments,["callback","interval"])),this.name="Loop";const t=ct(Aa.getDefaults(),arguments,["callback","interval"]);this._event=new Ea({context:this.context,callback:this._tick.bind(this),loop:!0,loopEnd:t.interval,playbackRate:t.playbackRate,probability:t.probability,humanize:t.humanize}),this.callback=t.callback,this.iterations=t.iterations}static getDefaults(){return Object.assign(Fe.getDefaults(),{interval:"4n",callback:$t,playbackRate:1,iterations:1/0,probability:1,mute:!1,humanize:!1})}start(t){return this._event.start(t),this}stop(t){return this._event.stop(t),this}cancel(t){return this._event.cancel(t),this}_tick(t){this.callback(t)}get state(){return this._event.state}get progress(){return this._event.progress}get interval(){return this._event.loopEnd}set interval(t){this._event.loopEnd=t}get playbackRate(){return this._event.playbackRate}set playbackRate(t){this._event.playbackRate=t}get humanize(){return this._event.humanize}set humanize(t){this._event.humanize=t}get probability(){return this._event.probability}set probability(t){this._event.probability=t}get mute(){return this._event.mute}set mute(t){this._event.mute=t}get iterations(){return this._event.loop===!0?1/0:this._event.loop}set iterations(t){t===1/0?this._event.loop=!0:this._event.loop=t}dispose(){return super.dispose(),this._event.dispose(),this}}class Ca extends Nt{constructor(){super(Object.assign(ct(Ca.getDefaults(),arguments,["fade"]))),this.name="CrossFade",this._panner=this.context.createStereoPanner(),this._split=this.context.createChannelSplitter(2),this._g2a=new FE({context:this.context}),this.a=new ee({context:this.context,gain:0}),this.b=new ee({context:this.context,gain:0}),this.output=new ee({context:this.context}),this._internalChannels=[this.a,this.b];const t=ct(Ca.getDefaults(),arguments,["fade"]);this.fade=new me({context:this.context,units:"normalRange",value:t.fade}),de(this,"fade"),this.context.getConstant(1).connect(this._panner),this._panner.connect(this._split),this._panner.channelCount=1,this._panner.channelCountMode="explicit",Ni(this._split,this.a.gain,0),Ni(this._split,this.b.gain,1),this.fade.chain(this._g2a,this._panner.pan),this.a.connect(this.output),this.b.connect(this.output)}static getDefaults(){return Object.assign(Nt.getDefaults(),{fade:.5})}dispose(){return super.dispose(),this.a.dispose(),this.b.dispose(),this.output.dispose(),this.fade.dispose(),this._g2a.dispose(),this._panner.disconnect(),this._split.disconnect(),this}}class vd extends Nt{constructor(t){super(t),this.name="Effect",this._dryWet=new Ca({context:this.context}),this.wet=this._dryWet.fade,this.effectSend=new ee({context:this.context}),this.effectReturn=new ee({context:this.context}),this.input=new ee({context:this.context}),this.output=this._dryWet,this.input.fan(this._dryWet.a,this.effectSend),this.effectReturn.connect(this._dryWet.b),this.wet.setValueAtTime(t.wet,0),this._internalChannels=[this.effectReturn,this.effectSend],de(this,"wet")}static getDefaults(){return Object.assign(Nt.getDefaults(),{wet:1})}connectEffect(t){return this._internalChannels.push(t),this.effectSend.chain(t,this.effectReturn),this}dispose(){return super.dispose(),this._dryWet.dispose(),this.effectSend.dispose(),this.effectReturn.dispose(),this.wet.dispose(),this}}class Ra extends Nt{constructor(){super(Object.assign(ct(Ra.getDefaults(),arguments,["pan"]))),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner;const t=ct(Ra.getDefaults(),arguments,["pan"]);this.pan=new te({context:this.context,param:this._panner.pan,value:t.pan,minValue:-1,maxValue:1}),this._panner.channelCount=t.channelCount,this._panner.channelCountMode="explicit",de(this,"pan")}static getDefaults(){return Object.assign(Nt.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}const HE="bit-crusher",WE=`
	class BitCrusherWorklet extends SingleIOProcessor {

		static get parameterDescriptors() {
			return [{
				name: "bits",
				defaultValue: 12,
				minValue: 1,
				maxValue: 16,
				automationRate: 'k-rate'
			}];
		}

		generate(input, _channel, parameters) {
			const step = Math.pow(0.5, parameters.bits - 1);
			const val = step * Math.floor(input / step + 0.5);
			return val;
		}
	}
`;bp(HE,WE);class Pa extends Nt{constructor(){super(ct(Pa.getDefaults(),arguments,["channels"])),this.name="Merge";const t=ct(Pa.getDefaults(),arguments,["channels"]);this._merger=this.output=this.input=this.context.createChannelMerger(t.channels)}static getDefaults(){return Object.assign(Nt.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._merger.disconnect(),this}}class Da extends vd{constructor(){super(ct(Da.getDefaults(),arguments,["decay"])),this.name="Reverb",this._convolver=this.context.createConvolver(),this.ready=Promise.resolve();const t=ct(Da.getDefaults(),arguments,["decay"]);this._decay=t.decay,this._preDelay=t.preDelay,this.generate(),this.connectEffect(this._convolver)}static getDefaults(){return Object.assign(vd.getDefaults(),{decay:1.5,preDelay:.01})}get decay(){return this._decay}set decay(t){t=this.toSeconds(t),Xn(t,.001),this._decay=t,this.generate()}get preDelay(){return this._preDelay}set preDelay(t){t=this.toSeconds(t),Xn(t,0),this._preDelay=t,this.generate()}generate(){return be(this,void 0,void 0,function*(){const t=this.ready,e=new $a(2,this._decay+this._preDelay,this.context.sampleRate),n=new us({context:e}),s=new us({context:e}),r=new Pa({context:e});n.connect(r,0,0),s.connect(r,0,1);const o=new ee({context:e}).toDestination();r.connect(o),n.start(0),s.start(0),o.gain.setValueAtTime(0,0),o.gain.setValueAtTime(1,this._preDelay),o.gain.exponentialApproachValueAtTime(0,this._preDelay,this.decay);const a=e.render();return this.ready=a.then($t),yield t,this._convolver.buffer=(yield a).get(),this})}dispose(){return super.dispose(),this._convolver.disconnect(),this}}class Te extends Nt{constructor(){super(ct(Te.getDefaults(),arguments,["solo"])),this.name="Solo";const t=ct(Te.getDefaults(),arguments,["solo"]);this.input=this.output=new ee({context:this.context}),Te._allSolos.has(this.context)||Te._allSolos.set(this.context,new Set),Te._allSolos.get(this.context).add(this),this.solo=t.solo}static getDefaults(){return Object.assign(Nt.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(t){t?this._addSolo():this._removeSolo(),Te._allSolos.get(this.context).forEach(e=>e._updateSolo())}get muted(){return this.input.gain.value===0}_addSolo(){Te._soloed.has(this.context)||Te._soloed.set(this.context,new Set),Te._soloed.get(this.context).add(this)}_removeSolo(){Te._soloed.has(this.context)&&Te._soloed.get(this.context).delete(this)}_isSoloed(){return Te._soloed.has(this.context)&&Te._soloed.get(this.context).has(this)}_noSolos(){return!Te._soloed.has(this.context)||Te._soloed.has(this.context)&&Te._soloed.get(this.context).size===0}_updateSolo(){this._isSoloed()?this.input.gain.value=1:this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),Te._allSolos.get(this.context).delete(this),this._removeSolo(),this}}Te._allSolos=new Map;Te._soloed=new Map;class La extends Nt{constructor(){super(ct(La.getDefaults(),arguments,["pan","volume"])),this.name="PanVol";const t=ct(La.getDefaults(),arguments,["pan","volume"]);this._panner=this.input=new Ra({context:this.context,pan:t.pan,channelCount:t.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new cs({context:this.context,volume:t.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=t.mute,de(this,["pan","volume"])}static getDefaults(){return Object.assign(Nt.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class ji extends Nt{constructor(){super(ct(ji.getDefaults(),arguments,["volume","pan"])),this.name="Channel";const t=ct(ji.getDefaults(),arguments,["volume","pan"]);this._solo=this.input=new Te({solo:t.solo,context:this.context}),this._panVol=this.output=new La({context:this.context,pan:t.pan,volume:t.volume,mute:t.mute,channelCount:t.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),de(this,["pan","volume"])}static getDefaults(){return Object.assign(Nt.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(t){this._solo.solo=t}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(t){this._panVol.mute=t}_getBus(t){return ji.buses.has(t)||ji.buses.set(t,new ee({context:this.context})),ji.buses.get(t)}send(t,e=0){const n=this._getBus(t),s=new ee({context:this.context,units:"decibels",gain:e});return this.connect(s),s.connect(n),s}receive(t){return this._getBus(t).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}ji.buses=new Map;class qE extends Nt{constructor(){super(...arguments),this.name="Listener",this.positionX=new te({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new te({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new te({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new te({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new te({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new te({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new te({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new te({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new te({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(Nt.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}ja(i=>{i.listener=new qE({context:i})});Za(i=>{i.listener.dispose()});function Yc(){return Sn().now()}const xd=Sn().transport;Sn().destination;Sn().destination;Sn().listener;Sn().draw;Sn();class XE{constructor(){B(this,"started",!1);B(this,"musicOn",!0);B(this,"sfxOn",!0);B(this,"musicGain");B(this,"sfxGain");B(this,"droneA");B(this,"droneB");B(this,"droneFilter");B(this,"pad");B(this,"padLoop");B(this,"bounceSynth");B(this,"tickSynth");B(this,"noise");B(this,"sub");B(this,"bell");B(this,"click")}async start(){if(!this.started)try{await bE(),this.build(),this.started=!0,this.applyMusic()}catch{}}build(){this.musicGain=new ee(0).toDestination(),this.sfxGain=new ee(.9).toDestination();const t=new Da({decay:8,wet:.5}).connect(this.musicGain);this.droneFilter=new Zr(280,"lowpass").connect(t),this.droneA=new _e(55,"sine").connect(this.droneFilter),this.droneB=new _e(55*1.5,"sine").connect(this.droneFilter),this.droneA.volume.value=-10,this.droneB.volume.value=-18,this.droneA.start(),this.droneB.start(),this.pad=new wa(Ln,{oscillator:{type:"sine"},envelope:{attack:4,decay:2,sustain:.3,release:6},volume:-26}).connect(t);const e=[["A2","E3"],["F2","C3"],["G2","D3"]];let n=0;this.padLoop=new Aa(s=>{this.pad.triggerAttackRelease(e[n%e.length],"8n",s),n++},"8m"),this.padLoop.start(0),xd.bpm.value=60,xd.start(),this.bounceSynth=new er({pitchDecay:.02,octaves:2,envelope:{attack:.001,decay:.18,sustain:0},volume:-8}).connect(this.sfxGain),this.tickSynth=new Ln({oscillator:{type:"triangle"},envelope:{attack:.001,decay:.06,sustain:0,release:.02},volume:-16}).connect(this.sfxGain),this.noise=new ba({noise:{type:"white"},envelope:{attack:.002,decay:.25,sustain:0},volume:-14}).connect(new Zr(1200,"bandpass").connect(this.sfxGain)),this.sub=new Ln({oscillator:{type:"sine"},envelope:{attack:.005,decay:.4,sustain:0,release:.2},volume:-4}).connect(this.sfxGain),this.bell=new Ln({oscillator:{type:"triangle"},envelope:{attack:.005,decay:.4,sustain:.1,release:.4},volume:-14}).connect(this.sfxGain),this.click=new Ln({oscillator:{type:"square"},envelope:{attack:.001,decay:.03,sustain:0},volume:-22}).connect(this.sfxGain)}setMusic(t){this.musicOn=t,this.applyMusic()}setSfx(t){this.sfxOn=t,this.started&&this.sfxGain.gain.rampTo(t?.9:0,.1)}applyMusic(){this.started&&this.musicGain.gain.rampTo(this.musicOn?.5:0,.6)}setTension(t){this.started&&this.droneFilter.frequency.rampTo(260+t*420,.5)}guard(){return this.started&&this.sfxOn}bounce(){if(this.guard())try{this.bounceSynth.triggerAttackRelease("C2","16n")}catch{}}pass(){if(this.guard())try{this.tickSynth.triggerAttackRelease("C6","64n")}catch{}}shatterEnter(){if(this.guard())try{this.noise.triggerAttackRelease("8n"),this.sub.triggerAttackRelease("A1","4n")}catch{}}smash(){if(this.guard())try{this.noise.triggerAttackRelease("16n"),this.sub.triggerAttackRelease("D1","8n")}catch{}}bonus(){if(this.guard())try{const t=Yc();this.bell.triggerAttackRelease("C5","16n",t),this.bell.triggerAttackRelease("E5","16n",t+.07),this.bell.triggerAttackRelease("G5","16n",t+.14)}catch{}}diamond(){if(this.guard())try{const t=Yc();this.bell.triggerAttackRelease("E6","32n",t),this.bell.triggerAttackRelease("B6","32n",t+.05)}catch{}}death(){if(this.guard())try{const t=Yc();this.sub.triggerAttackRelease("A1","2n",t),this.bell.triggerAttackRelease("A3","8n",t),this.bell.frequency.rampTo("A2",.6,t)}catch{}}button(){if(this.guard())try{this.click.triggerAttackRelease("C7","64n")}catch{}}}class YE{constructor(){B(this,"enabled",!0);B(this,"supported",typeof navigator<"u"&&"vibrate"in navigator)}buzz(t){if(!(!this.enabled||!this.supported))try{navigator.vibrate(t)}catch{}}bounce(){this.buzz(8)}pass(){this.buzz(4)}smash(){this.buzz(22)}death(){this.buzz([40,30,60])}}const yd="descent.settings.v1",jE={music:!0,sfx:!0,haptics:!0,highScore:0,diamonds:0,ownedSkins:["default"],equippedSkin:"default",tutorialSeen:!1};class ZE{constructor(){B(this,"state");this.state={...jE,...this.load()},Array.isArray(this.state.ownedSkins)||(this.state.ownedSkins=["default"]),this.state.ownedSkins.includes("default")||this.state.ownedSkins.unshift("default"),(typeof this.state.diamonds!="number"||this.state.diamonds<0)&&(this.state.diamonds=0)}load(){try{const t=localStorage.getItem(yd);if(!t)return{};const e=JSON.parse(t);return typeof e=="object"&&e?e:{}}catch{return{}}}save(){try{localStorage.setItem(yd,JSON.stringify(this.state))}catch{}}get music(){return this.state.music}get sfx(){return this.state.sfx}get haptics(){return this.state.haptics}get highScore(){return this.state.highScore}setMusic(t){this.state.music=t,this.save()}setSfx(t){this.state.sfx=t,this.save()}setHaptics(t){this.state.haptics=t,this.save()}submitScore(t){return t>this.state.highScore?(this.state.highScore=t,this.save(),!0):!1}resetHighScore(){this.state.highScore=0,this.save()}get diamonds(){return this.state.diamonds}addDiamonds(t){this.state.diamonds=Math.max(0,this.state.diamonds+t),this.save()}spendDiamonds(t){return this.state.diamonds<t?!1:(this.state.diamonds-=t,this.save(),!0)}get ownedSkins(){return this.state.ownedSkins}ownsSkin(t){return this.state.ownedSkins.includes(t)}purchaseSkin(t,e){return this.ownsSkin(t)?!0:this.spendDiamonds(e)?(this.state.ownedSkins.push(t),this.save(),!0):!1}get equippedSkin(){return this.state.equippedSkin}equipSkin(t){this.ownsSkin(t)&&(this.state.equippedSkin=t,this.save())}get tutorialSeen(){return this.state.tutorialSeen}markTutorialSeen(){this.state.tutorialSeen=!0,this.save()}}class $E{constructor(t,e){B(this,"enabled",!1);B(this,"dragging",!1);B(this,"lastX",0);B(this,"angularVel",0);B(this,"keyDir",0);B(this,"onDown",t=>{this.enabled&&(t.target?.closest?.("button, .ui-interactive")||(this.dragging=!0,this.lastX=t.clientX))});B(this,"onMove",t=>{if(!this.enabled||!this.dragging)return;const e=t.clientX-this.lastX;this.lastX=t.clientX;const n=e*ff.dragSensitivity;this.onRotate(n),this.angularVel=this.angularVel*.6+n*.4});B(this,"onUp",()=>{this.dragging=!1});B(this,"onKey",t=>{this.enabled&&(t.key==="ArrowLeft"?this.keyDir=-1:t.key==="ArrowRight"&&(this.keyDir=1))});B(this,"onKeyUp",t=>{t.key==="ArrowLeft"&&this.keyDir===-1&&(this.keyDir=0),t.key==="ArrowRight"&&this.keyDir===1&&(this.keyDir=0)});this.onRotate=e,t.addEventListener("pointerdown",this.onDown,{passive:!0}),window.addEventListener("pointermove",this.onMove,{passive:!0}),window.addEventListener("pointerup",this.onUp,{passive:!0}),window.addEventListener("pointercancel",this.onUp,{passive:!0}),window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onKeyUp)}update(t){if(this.enabled&&this.keyDir!==0){const e=this.keyDir*2.6*t;this.onRotate(e),this.angularVel=this.angularVel*.6+e*.4}else this.angularVel*=1-Math.min(1,t*8)}getAngularVelocity(){return this.angularVel}}var wr=(i=>(i[i.None=0]="None",i[i.Pass=1]="Pass",i[i.Bounce=2]="Bounce",i[i.Smash=3]="Smash",i[i.Death=4]="Death",i))(wr||{});function JE(i,t,e){const n=i.sectorIndexAt(t);switch(i.kindAt(n)){case Ae.Gap:return{landing:1,sectorIndex:n};case Ae.Lethal:return{landing:4,sectorIndex:n};case Ae.Safe:return{landing:e?3:2,sectorIndex:n};case Ae.Brittle:return{landing:3,sectorIndex:n};default:return{landing:0,sectorIndex:n}}}const KE=14,QE=(oe.radiusInner+oe.radiusOuter)/2,Us=0;class tA{constructor(t,e){B(this,"scene");B(this,"post");B(this,"cam");B(this,"tower");B(this,"player");B(this,"diamonds");B(this,"particles");B(this,"screenFX");B(this,"hud");B(this,"screens");B(this,"tutorialOverlay");B(this,"audio");B(this,"haptics");B(this,"settings");B(this,"input");B(this,"state",0);B(this,"acc",0);B(this,"time",0);B(this,"score",0);B(this,"combo",0);B(this,"multiplier",1);B(this,"currentDepth",0);B(this,"shattering",!1);B(this,"shatterBudget",0);B(this,"prevBottom",0);B(this,"deathTimer",0);B(this,"reviveUsed",!1);B(this,"reducedMotion",!1);B(this,"tutorial",!1);B(this,"tutShownCombo",!1);B(this,"tutShownShatter",!1);B(this,"tutShownDiamond",!1);B(this,"ballPos",new I);B(this,"_ringPos",new I);this.reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.scene=new Ey(t),this.post=new Oy(this.scene.renderer,this.scene.scene,this.scene.camera),this.cam=new Uy(this.scene.camera),this.cam.reducedMotion=this.reducedMotion,this.tower=new zy(this.scene.scene),this.player=new Hy,this.scene.scene.add(this.player.group),this.diamonds=new Yy(this.scene.scene),this.particles=new $y(this.scene.scene),this.settings=new ZE,this.audio=new XE,this.haptics=new YE,this.haptics.enabled=this.settings.haptics,this.diamonds.onCollect=n=>this.onDiamond(n),this.player.applySkin(Mr(this.settings.equippedSkin)),this.screenFX=new Jy(e),this.tutorialOverlay=new tS(e),this.hud=new Ky(e,()=>this.pause()),this.screens=new Qy(e,this.settings,{onStart:()=>this.beginRun(),onResume:()=>this.resume(),onRestart:()=>this.beginRun(),onReviveAd:()=>this.revive(),onSettingChange:(n,s)=>this.changeSetting(n,s),onResetHighScore:()=>this.settings.resetHighScore(),onButtonSound:()=>this.audio.button(),onHome:()=>this.goHome(),onTutorial:()=>this.beginRun({tutorial:!0}),onBuySkin:n=>this.buySkin(n),onEquipSkin:n=>this.equipSkin(n)}),this.input=new $E(t,n=>{this.tower.targetRotation+=n}),this.reducedMotion&&this.post.setGrain(0),this.scene.onResize=(n,s)=>this.post.setSize(n,s),window.addEventListener("resize",()=>this.scene.resize()),this.enterStart()}enterStart(){this.state=0,this.player.group.visible=!1,this.tower.reset(),this.diamonds.reset(Us,!1),this.tutorialOverlay.hide(),this.input.enabled=!1,this.hud.show(!1),this.screens.showStart(),this.cam.snapTo(Us)}beginRun(t){const e=!!t?.tutorial;this.tutorial=e,this.tutShownCombo=this.tutShownShatter=this.tutShownDiamond=!1,this.audio.start(),this.score=0,this.combo=0,this.multiplier=1,this.currentDepth=0,this.shattering=!1,this.shatterBudget=0,this.reviveUsed=!1,this.tower.reset(e?48879:void 0,e),this.diamonds.reset(Us,!e),this.player.applySkin(Mr(this.settings.equippedSkin)),this.player.reset(Us),this.player.group.visible=!0,this.player.setShatter(!1),this.prevBottom=this.player.bottom,this.cam.beginIntro(Us),this.input.enabled=!0,this.screens.hideAll(),this.hud.show(!0),this.hud.setScore(0),this.hud.setMultiplier(1,!1),this.hud.setDiamonds(this.settings.diamonds),e?this.tutorialOverlay.show("拖动屏幕旋转塔，对准缺口让球落下"):this.tutorialOverlay.hide(),this.state=1}pause(){this.state===1&&(this.audio.button(),this.state=2,this.input.enabled=!1,this.screens.open("pause"))}resume(){this.state===2&&(this.state=1,this.input.enabled=!0,this.screens.hideAll())}goHome(){this.tutorial=!1,this.tutorialOverlay.hide(),this.enterStart()}revive(){this.reviveUsed||(this.reviveUsed=!0,this.audio.button(),this.player.reset(this.tower.ringWorldPos(this.currentDepth,this.ballPos).y+oe.ringGap*1.5),this.player.group.visible=!0,this.prevBottom=this.player.bottom,this.shattering=!1,this.shatterBudget=0,this.player.setShatter(!1),this.combo=0,this.multiplier=1,this.screens.hideAll(),this.hud.show(!0),this.cam.snapTo(this.player.y),this.state=1)}die(){this.state=3,this.deathTimer=0,this.player.getWorldPos(this.ballPos),this.player.group.visible=!1,this.particles.burstShards(this.ballPos,We.maple,26),this.particles.burstSparks(this.ballPos,30),this.screenFX.flash(.7),this.post.desatFlash(.85),this.post.chromaticPunch(.012),this.post.vignettePunch(1.4),this.cam.deathDrop(),this.audio.death(),this.haptics.death(),this.input.enabled=!1,this.hud.show(!1)}finishGameOver(){this.state=4;const t=Math.round(this.score),e=this.settings.submitScore(t);e&&(this.particles.recordBurst(this.ballPos),this.screenFX.edgePulse()),this.screens.showGameOver(t,e)}changeSetting(t,e){t==="music"?(this.settings.setMusic(e),this.audio.setMusic(e)):t==="sfx"?(this.settings.setSfx(e),this.audio.setSfx(e)):(this.settings.setHaptics(e),this.haptics.enabled=e)}frame(t){const e=Math.min(t,.05);switch(this.time+=e,this.state){case 0:this.updateStart(e);break;case 1:this.updatePlaying(e);break;case 2:this.post.update(e);break;case 3:this.updateDeath(e);break;case 4:this.updateGameOver(e);break}this.scene.syncBackdrop(),this.post.render()}updateStart(t){this.tower.group.rotation.y+=.12*t,this.tower.update(t,this.time),this.cam.update(t,Us+1.5),this.particles.update(t,this.scene.camera.position.y),this.post.update(t)}updatePlaying(t){this.input.update(t),this.tower.updateRotation(t),this.acc+=t;let e=0;for(;this.acc>=Vo.dt&&e<Vo.maxSubSteps&&(this.physicsStep(Vo.dt),this.acc-=Vo.dt,e++,this.state===1););this.tower.recycle(this.player.y),this.tower.update(t,this.time),this.diamonds.update(t,this.time,this.player.y),this.cam.setRollTarget(-this.input.getAngularVelocity()*6*Hn.rollAmount*20),this.cam.update(t,this.player.y),this.shattering&&(this.player.getWorldPos(this.ballPos),this.particles.emitEmber(this.ballPos)),this.player.render(t,this.time),this.particles.update(t,this.scene.camera.position.y);const n=Math.min(1,this.combo/12)*(this.shattering?1:.5);this.post.setBloomIntensity(n),this.post.update(t),this.audio.setTension(Math.min(1,this.currentDepth/80)),this.hud.setScore(this.score),this.hud.setMultiplier(this.multiplier,this.shattering)}physicsStep(t){this.prevBottom=this.player.bottom;const e=this.tower.fallScale(this.currentDepth);this.player.integrate(t,e);const n=this.tower.getRingByDepth(this.currentDepth);if(!n)return;const s=n.worldYTop();if(this.player.vy<0&&this.prevBottom>s&&this.player.bottom<=s){this.player.getWorldPos(this.ballPos);const r=JE(n,this.ballPos,this.shattering);switch(r.landing){case wr.Pass:this.onPass(n.bonus);break;case wr.Bounce:this.onBounce();break;case wr.Smash:this.onSmash(n,r.sectorIndex,n.kindAt(r.sectorIndex)===Ae.Brittle);break;case wr.Death:this.die();break}}}onPass(t){this.combo++,this.advanceCombo();let e=Math.round(si.baseScorePerRing*this.multiplier);t&&(e+=si.bonusRingScore),this.score+=e,this.player.getWorldPos(this.ballPos),this.screenFX.scorePopup(this.ballPos,`+${e}`,t||this.shattering,this.scene.camera,this.scene.renderer),t?(this.audio.bonus(),this.post.vignettePunch(.3)):this.audio.pass(),this.haptics.pass(),this.reducedMotion||this.crumbleRing(this.tower.getRingByDepth(this.currentDepth)),this.currentDepth++,this.tutorial&&(!this.tutShownCombo&&this.combo>=2&&(this.tutShownCombo=!0,this.tutorialOverlay.show("连续穿过缺口可以攒连击",2600)),this.currentDepth>=KE&&this.finishTutorial())}onBounce(){this.combo=0,this.multiplier=1,this.shattering&&(this.shattering=!1,this.player.setShatter(!1)),this.player.bounce(),this.audio.bounce(),this.haptics.bounce()}onSmash(t,e,n){this.combo++,this.advanceCombo();const s=Math.round(si.baseScorePerRing*this.multiplier)+(n?si.brittleScore:si.smashBonus);this.score+=s,t.smashSector(e,this.ballPos),this.particles.burstSparks(this.ballPos,n?6:12),this.player.smashImpact(),this.screenFX.scorePopup(this.ballPos,`+${s}`,!0,this.scene.camera,this.scene.renderer),n?(this.audio.pass(),this.haptics.pass()):(this.cam.punchFOV(6),this.cam.addShake(.5),this.post.chromaticPunch(.006),this.post.vignettePunch(.6),this.reducedMotion||this.particles.shockwave(this.ballPos),this.audio.smash(),this.haptics.smash(),this.shattering&&--this.shatterBudget<=0&&(this.shattering=!1,this.player.setShatter(!1),this.combo=0,this.multiplier=1)),this.reducedMotion||this.crumbleRing(t),this.currentDepth++}advanceCombo(){this.multiplier=Math.min(si.multiplierMax,1+this.combo*si.multiplierStep),this.hud.pulseMultiplier(),this.combo>=si.shatterThreshold&&!this.shattering&&(this.shattering=!0,this.shatterBudget=si.shatterSmashBudget,this.player.setShatter(!0),this.player.getWorldPos(this.ballPos),this.audio.shatterEnter(),this.post.vignettePunch(.4),this.tutorial&&!this.tutShownShatter&&(this.tutShownShatter=!0,this.tutorialOverlay.show("碎裂态！可砸穿平台，冲刺额度用完会自动停下",3e3))),this.combo>0&&this.combo%5===0&&this.screenFX.edgePulse()}onDiamond(t){this.settings.addDiamonds(1),this.particles.burstSparks(t,12),this.audio.diamond(),this.haptics.pass(),this.hud.setDiamonds(this.settings.diamonds),this.hud.pulseDiamonds(),this.tutShownDiamond||(this.tutShownDiamond=!0,this.tutorialOverlay.show("◆ 钻石可在商店兑换球皮肤",2200))}buySkin(t){const e=Mr(t);this.settings.purchaseSkin(t,e.cost)&&(this.settings.equipSkin(t),this.player.applySkin(Mr(this.settings.equippedSkin))),this.screens.refreshShop()}equipSkin(t){this.settings.equipSkin(t),this.player.applySkin(Mr(this.settings.equippedSkin)),this.screens.refreshShop()}finishTutorial(){this.settings.markTutorialSeen(),this.tutorial=!1,this.enterStart(),this.tutorialOverlay.complete()}crumbleRing(t){!t||t.bonus||(this._ringPos.set(0,t.centerY(),0),this.particles.burstRing(this._ringPos,QE,t.mainColor(),46),t.break())}updateDeath(t){if(this.deathTimer+=t,this.deathTimer<.08)return;const e=.4;this.tower.update(t*e,this.time),this.cam.update(t*e,this.player.y),this.particles.update(t,this.scene.camera.position.y),this.post.update(t),this.deathTimer>1.1&&this.finishGameOver()}updateGameOver(t){this.tower.group.rotation.y+=.06*t,this.tower.update(t,this.time),this.cam.update(t,this.player.y),this.particles.update(t,this.scene.camera.position.y),this.post.update(t)}}const eA=document.getElementById("scene"),nA=document.getElementById("ui"),iA=new tA(eA,nA);let Sd=performance.now();function wp(i){const t=(i-Sd)/1e3;Sd=i,iA.frame(t)}function Ep(i){wp(i),requestAnimationFrame(Ep)}requestAnimationFrame(Ep);setInterval(()=>{document.hidden&&wp(performance.now())},33);
