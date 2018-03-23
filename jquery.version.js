/*
 * jQuery version fragment learning @ Ming
 *
 *

@Date @版本 @Code @标记注释
-------------------------------------------------------------------------------------------
2006

jquery 1.0.0 & jquery1.0.1  

window.undefined = window.undefined;
    																		
														
1.0.0		if ($)                      																		                   							
1.0.1		if (typeof $ != "undefined")	// $符判断

1.0.1+		if ( r[i].nodeType != 8 )     	// text                																		                      							 
			"nth-child": "jQuery.sibling(a,m[3]).cur",	// expr                       																		
			if ( foundToken ) continue;		// find                    																		
			value: "value",		// attr 
			disabled: "disabled"

1.0.0		children: "a.childNodes"
1.0.1		children: "jQuery.sibling(a.firstChild)"	// jQuery.macros axis

1.0.0		if ( !a || jQuery.filter( [this], a ).r )   														
1.0.1		if ( !a || jQuery.filter( a, [this] ).r )   // remove

1.0.0		if ( this.readyState == "complete" )        														
1.0.1		if ( this.readyState != "complete" ) return;	// new
	
1.0.1+		this.parentNode.removeChild( this );

1.0.0		if (z.now == 1) z.now = 0.9999;             														
1.0.1		if (jQuery.browser.mozilla && z.now == 1) z.now = 0.9999;	// fix

1.0.0 		if ( jQuery.browser.msie )                  														
1.0.1		if ( jQuery.browser.msie && typeof XMLHttpRequest == "undefined" )		// If IE is used, create a wrapper for the XMLHttpRequest object
  
1.0.1+		if ( type == "json" ) eval( "data = " + data );							// Get the JavaScript object, if JSON is used.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

jquery 1.0.1 & jquery1.0.2

if(typeof window.jQuery == "undefined") {
	// ...
}

1.0.1		function jQuery(a,c) {
1.0.2		jQuery = function(a,c) {

1.0.1		if ( a && a.constructor == Function && jQuery.fn.ready )
1.0.2		if ( a && typeof a == "function" && jQuery.fn.ready )

1.0.1		return $( jQuery.merge( a, [] ) );
1.0.2		return jQuery( jQuery.merge( a, [] ) );

1.0.1		return $( c ).find(a);
1.0.2		return jQuery( c ).find(a);

1.0.1		if ( fn && fn.constructor == Function )
1.0.2		if ( fn && typeof fn == "function" )

1.0.1		jquery: "$Rev: 509 $",
1.0.2		jquery: "1.0.2",

1.0.1		jQuery.map( this, function(a){ return a } ) :
1.0.2		jQuery.merge( this, [] ) :

1.0.1		t.constructor == Function &&
1.0.2		typeof t == "function" &&

1.0.1		return expr ? jQuery.filter(expr,this).r.length > 0 : this.length > 0;
1.0.2		return expr ? jQuery.filter(expr,this).r.length > 0 : false;

1.0.1		if ( table && this.nodeName == "TABLE" && a[0].nodeName != "THEAD" ) {
1.0.2		if ( table && this.nodeName.toUpperCase() == "TABLE" && a[0].nodeName.toUpperCase() != "THEAD" ) {

1.0.1
pushStack: function(a,args) {
	var fn = args && args[args.length-1];
	if ( !fn || fn.constructor != Function ) {
		if ( !this.stack ) this.stack = [];
		this.stack.push( this.get() );
		this.get( a );
	} else {
		var old = this.get();
		this.get( a );
		if ( fn.constructor == Function )
			return this.each( fn );
		this.get( old );
	}
	return this;
}

1.0.2
pushStack: function(a,args) {
	var fn = args && args[args.length-1];
	var fn2 = args && args[args.length-2];
	
	if ( fn && fn.constructor != Function ) fn = null;
	if ( fn2 && fn2.constructor != Function ) fn2 = null;

	if ( !fn ) {
		if ( !this.stack ) this.stack = [];
		this.stack.push( this.get() );
		this.get( a );
	} else {
		var old = this.get();
		this.get( a );

		if ( fn2 && a.length || !fn2 )
			this.each( fn2 || fn ).get( old );
		else
			this.get( old ).each( fn );
	}
	return this;
}

1.0.1		$(a[j])[n]( this );
1.0.2		jQuery(a[j])[n]( this );

1.0.1
remove: function(o,c){
	o.className = !c ? "" :
		o.className.replace(
			new RegExp("(^|\\s*\\b[^-])"+c+"($|\\b(?=[^-]))", "g"), "");
},
1.0.2
remove: function(o,c){
	if( !c ) {
		o.className = "";
	} else {
		var classes = o.className.split(" ");
		for(var i=0; i<classes.length; i++) {
			if(classes[i] == c) {
				classes.splice(i, 1);
				break;
			}
		}
		o.className = classes.join(' ');
	}
},




