/*
Just COPY/PASTE in console
*/
function build_headers_template(session_cookie, userAgent) {
    var o = {
        stack:"",
        write:function(line, level) { 
            this.stack+=this._indent(line,level)+"\n";
            return this; // approche DSL
        },
        _indent:function(line, level) {
        	if (level <=0) return line;
        	else return "  "+this._indent(line, level-1);
        }
    };
	o.write("templates:", 0)
	    .write("global:",1)
	        .write("plugin_priority:",2)
	            .write("headers: 250",3)
	        .write("headers:",2)
    	            .write('User-Agent: "'+userAgent+'"', 3)
    	            .write('Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"', 3)
    	            .write('Accept-Charset: "ISO-8859-1,utf-8;q=0.7,*;q=0.3"', 3)
    	            .write('Accept-Language: "fr-FR,fr;q=0.8,en-US;q=0.6,en;q=0.4"', 3)
    	            .write('Cache-Control: "max-age=0"', 3)
    	            .write('Connection: "keep-alive"', 3)
    	            .write('Cookie: "'+session_cookie+'"', 3);
 
	return o.stack;
}
 
return build_headers_template(get_session_cookie(), navigator.userAgent);
})();