(function(){(this||window).webpackJsonp.registerAbsMids({"esri/layers/support/rasterFormats/LercCodec":1586})})(),(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1586:function(e,t,i){var n,a;n=[i(33)],void 0===(a=function(r){var o={};o.defaultNoDataValue=r.clampFloat32(-1/0),o.decode=function(e,t){var i=(t=t||{}).encodedMaskData||null===t.encodedMaskData,n=d(e,t.inputOffset||0,i),a=null!=t.noDataValue?r.clampFloat32(t.noDataValue):o.defaultNoDataValue,l=f(n,t.pixelType||Float32Array,t.encodedMaskData,a,t.returnMask),s={width:n.width,height:n.height,pixelData:l.resultPixels,minValue:n.pixels.minValue,maxValue:n.pixels.maxValue,noDataValue:a};return l.resultMask&&(s.maskData=l.resultMask),t.returnEncodedMask&&n.mask&&(s.encodedMaskData=n.mask.bitset?n.mask.bitset:null),t.returnFileInfo&&(s.fileInfo=u(n),t.computeUsedBitDepths&&(s.fileInfo.bitDepths=m(n))),s};var f=function(e,t,i,n,a){var l,s,r=0,o=e.pixels.numBlocksX,f=e.pixels.numBlocksY,u=Math.floor(e.width/o),m=Math.floor(e.height/f),d=2*e.maxZError;i=i||(e.mask?e.mask.bitset:null),l=new t(e.width*e.height),a&&i&&(s=new Uint8Array(e.width*e.height));for(var c,g,h=new Float32Array(u*m),k=0;k<=f;k++){var p=k!==f?m:e.height%f;if(0!==p)for(var x=0;x<=o;x++){var w=x!==o?u:e.width%o;if(0!==w){var y,V,B,v,U=k*e.width*m+x*u,D=e.width-w,M=e.pixels.blocks[r];if(M.encoding<2?(y=0===M.encoding?M.rawData:(b(M.stuffedData,M.bitsPerPixel,M.numValidPixels,M.offset,d,h,e.pixels.maxValue),h),V=0):B=2===M.encoding?0:M.offset,i)for(g=0;g<p;g++){for(7&U&&(v=i[U>>3],v<<=7&U),c=0;c<w;c++)7&U||(v=i[U>>3]),128&v?(s&&(s[U]=1),l[U++]=M.encoding<2?y[V++]:B):(s&&(s[U]=0),l[U++]=n),v<<=1;U+=D}else if(M.encoding<2)for(g=0;g<p;g++){for(c=0;c<w;c++)l[U++]=y[V++];U+=D}else for(g=0;g<p;g++)if(l.fill)l.fill(B,U,U+w),U+=w+D;else{for(c=0;c<w;c++)l[U++]=B;U+=D}if(1===M.encoding&&V!==M.numValidPixels)throw"Block and Mask do not match";r++}}}return{resultPixels:l,resultMask:s}},u=function(e){return{fileIdentifierString:e.fileIdentifierString,fileVersion:e.fileVersion,imageType:e.imageType,height:e.height,width:e.width,maxZError:e.maxZError,eofOffset:e.eofOffset,mask:e.mask?{numBlocksX:e.mask.numBlocksX,numBlocksY:e.mask.numBlocksY,numBytes:e.mask.numBytes,maxValue:e.mask.maxValue}:null,pixels:{numBlocksX:e.pixels.numBlocksX,numBlocksY:e.pixels.numBlocksY,numBytes:e.pixels.numBytes,maxValue:e.pixels.maxValue,minValue:e.pixels.minValue,noDataValue:this.noDataValue}}},m=function(e){for(var t=e.pixels.numBlocksX*e.pixels.numBlocksY,i={},n=0;n<t;n++){var a=e.pixels.blocks[n];0===a.encoding?i.float32=!0:1===a.encoding?i[a.bitsPerPixel]=!0:i[0]=!0}return Object.keys(i)},d=function(e,t,i){var n={},a=new Uint8Array(e,t,10);if(n.fileIdentifierString=String.fromCharCode.apply(null,a),"CntZImage"!=n.fileIdentifierString.trim())throw"Unexpected file identifier string: "+n.fileIdentifierString;t+=10;var l=new DataView(e,t,24);if(n.fileVersion=l.getInt32(0,!0),n.imageType=l.getInt32(4,!0),n.height=l.getUint32(8,!0),n.width=l.getUint32(12,!0),n.maxZError=l.getFloat64(16,!0),t+=24,!i)if(l=new DataView(e,t,16),n.mask={},n.mask.numBlocksY=l.getUint32(0,!0),n.mask.numBlocksX=l.getUint32(4,!0),n.mask.numBytes=l.getUint32(8,!0),n.mask.maxValue=l.getFloat32(12,!0),t+=16,0<n.mask.numBytes){var s=new Uint8Array(Math.ceil(n.width*n.height/8)),r=(l=new DataView(e,t,n.mask.numBytes)).getInt16(0,!0),o=2,f=0;do{if(0<r)for(;r--;)s[f++]=l.getUint8(o++);else{var u=l.getUint8(o++);for(r=-r;r--;)s[f++]=u}r=l.getInt16(o,!0),o+=2}while(o<n.mask.numBytes);if(-32768!==r||f<s.length)throw"Unexpected end of mask RLE encoding";n.mask.bitset=s,t+=n.mask.numBytes}else if(0==(n.mask.numBytes|n.mask.numBlocksY|n.mask.maxValue)){s=new Uint8Array(Math.ceil(n.width*n.height/8));n.mask.bitset=s}l=new DataView(e,t,16),n.pixels={},n.pixels.numBlocksY=l.getUint32(0,!0),n.pixels.numBlocksX=l.getUint32(4,!0),n.pixels.numBytes=l.getUint32(8,!0),n.pixels.maxValue=l.getFloat32(12,!0),t+=16;var m=n.pixels.numBlocksX,d=n.pixels.numBlocksY,c=m+(0<n.width%m?1:0),g=d+(0<n.height%d?1:0);n.pixels.blocks=new Array(c*g);for(var h=1e9,k=0,p=0;p<g;p++)for(var x=0;x<c;x++){var w=0,y=e.byteLength-t;l=new DataView(e,t,Math.min(10,y));var V={};n.pixels.blocks[k++]=V;var B=l.getUint8(0);if(w++,V.encoding=63&B,3<V.encoding)throw"Invalid block encoding ("+V.encoding+")";if(2!==V.encoding){if(0!==B&&2!==B){if(B>>=6,2===(V.offsetType=B))V.offset=l.getInt8(1),w++;else if(1===B)V.offset=l.getInt16(1,!0),w+=2;else{if(0!==B)throw"Invalid block offset type";V.offset=l.getFloat32(1,!0),w+=4}if(h=Math.min(V.offset,h),1===V.encoding)if(B=l.getUint8(w),w++,V.bitsPerPixel=63&B,B>>=6,2===(V.numValidPixelsType=B))V.numValidPixels=l.getUint8(w),w++;else if(1===B)V.numValidPixels=l.getUint16(w,!0),w+=2;else{if(0!==B)throw"Invalid valid pixel count type";V.numValidPixels=l.getUint32(w,!0),w+=4}}var v;if(t+=w,3!=V.encoding)if(0===V.encoding){var U=(n.pixels.numBytes-1)/4;if(U!==Math.floor(U))throw"uncompressed block has invalid length";v=new ArrayBuffer(4*U),new Uint8Array(v).set(new Uint8Array(e,t,4*U));for(var D=new Float32Array(v),M=0;M<D.length;M++)h=Math.min(h,D[M]);V.rawData=D,t+=4*U}else if(1===V.encoding){var b=Math.ceil(V.numValidPixels*V.bitsPerPixel/8),I=Math.ceil(b/4);v=new ArrayBuffer(4*I),new Uint8Array(v).set(new Uint8Array(e,t,b)),V.stuffedData=new Uint32Array(v),t+=b}}else t++,h=Math.min(h,0)}return n.pixels.minValue=h,n.eofOffset=t,n},b=function(e,t,i,n,a,l,s){var r,o,f,u=(1<<t)-1,m=0,d=0,c=Math.ceil((s-n)/a),g=4*e.length-Math.ceil(t*i/8);for(e[e.length-1]<<=8*g,r=0;r<i;r++){if(0===d&&(f=e[m++],d=32),t<=d)o=f>>>d-t&u,d-=t;else{var h=t-d;o=(f&u)<<h&u,o+=(f=e[m++])>>>(d=32-h)}l[r]=o<c?n+o*a:s}return l};return o}.apply(null,n))||(e.exports=a)}}]);