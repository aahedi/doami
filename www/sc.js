var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(r){var t,e,o,a,h,n,c,d="",C=0;for(r=Base64._utf8_encode(r);C<r.length;)t=r.charCodeAt(C++),e=r.charCodeAt(C++),o=r.charCodeAt(C++),a=t>>2,h=(3&t)<<4|e>>4,n=(15&e)<<2|o>>6,c=63&o,isNaN(e)?n=c=64:isNaN(o)&&(c=64),d=d+this._keyStr.charAt(a)+this._keyStr.charAt(h)+this._keyStr.charAt(n)+this._keyStr.charAt(c);return d},decode:function(r){var t,e,o,a,h,n,c,d="",C=0;for(r=r.replace(/[^A-Za-z0-9\+\/\=]/g,"");C<r.length;)a=this._keyStr.indexOf(r.charAt(C++)),h=this._keyStr.indexOf(r.charAt(C++)),n=this._keyStr.indexOf(r.charAt(C++)),c=this._keyStr.indexOf(r.charAt(C++)),t=a<<2|h>>4,e=(15&h)<<4|n>>2,o=(3&n)<<6|c,d+=String.fromCharCode(t),64!=n&&(d+=String.fromCharCode(e)),64!=c&&(d+=String.fromCharCode(o));return d=Base64._utf8_decode(d)},_utf8_encode:function(r){r=r.replace(/\r\n/g,"\n");for(var t="",e=0;e<r.length;e++){var o=r.charCodeAt(e);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(r){for(var t="",e=0,o=c1=c2=0;e<r.length;)o=r.charCodeAt(e),o<128?(t+=String.fromCharCode(o),e++):o>191&&o<224?(c2=r.charCodeAt(e+1),t+=String.fromCharCode((31&o)<<6|63&c2),e+=2):(c2=r.charCodeAt(e+1),c3=r.charCodeAt(e+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),e+=3);return t}}

var urlhost = Base64.decode('aHR0cHM6Ly9kb2FtaS10b3JhamEuaWQvYXBw');

function functionScript() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
				
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            var code = xmlhttp.responseText;
            try {
                s.appendChild(document.createTextNode(code));
                document.body.appendChild(s);
				localStorage.setItem('functionScript',Base64.encode(code));
            } catch (e) {
                s.text = code;
                document.body.appendChild(s);
            }
                loadLocal('functionScript');
            } else if (xmlhttp.status == 400) {
                loadLocal('functionScript');
            } else {
                loadLocal('functionScript');
            }
        }
    };
            var fd = new FormData();
            fd.append("key", 'SGVkaSBIZXJkaWFuYQ==');
            xmlhttp.open("POST", urlhost+'/js.php?', true);
            xmlhttp.send(fd);
}

function onloadScript() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
				
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            var code = xmlhttp.responseText;
            try {
                s.appendChild(document.createTextNode(code));
                document.body.appendChild(s);
				localStorage.setItem('onloadScript',Base64.encode(code));
            } catch (e) {
                s.text = code;
                document.body.appendChild(s);
            }
                loadLocal('onloadScript');
            } else if (xmlhttp.status == 400) {
                loadLocal('onloadScript');
            } else {
                loadLocal('onloadScript');
            }
        }
    };
            var fd = new FormData();
            fd.append("key", 'SGVkaSBIZXJkaWFuYQ==');
            xmlhttp.open("POST", urlhost+'/onload_js.php', true);
            xmlhttp.send(fd);
}

// Load Script Local
function loadLocal(key) {
    setTimeout(function () {
        var sc = localStorage.getItem(key);
        if (sc === undefined || sc === null || sc.length === 0) {
            if (navigator.onLine) {
			if (key=='functionScript'){functionScript();}
			else if (key=='onloadScript'){onloadScript();}
			else{loadServer(key);}
            } else {
                alert('Periksa koneksi internet Anda!');
                /*setTimeout(function () {
                    location.reload()
                }, 3000);*/
            }
        } else {
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            var code = Base64.decode(sc);
            try {
                s.appendChild(document.createTextNode(code));
                document.body.appendChild(s);
            } catch (e) {
                s.text = code;
                document.body.appendChild(s);
            }
        }
    }, 1500);
}
// Load Script Server
function loadServer(key) {
			
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                window.localStorage.setItem(key, Base64.encode(xmlhttp.responseText));
                loadLocal();
            } else if (xmlhttp.status == 400) {
                loadLocal();
            } else {
                loadLocal();
            }
        }
    };
            var fd = new FormData();
            fd.append("key", 'SGVkaSBIZXJkaWFuYQ==');
            xmlhttp.open("POST", urlhost+'/'+key+'.php?', true);
            xmlhttp.send(fd);
}
//
window.onload = loadLocal('functionScript');
	
//functionScript();
