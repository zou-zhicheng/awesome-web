/** jquery.color.js ****************/
/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */

(function(jQuery){

	// We override the animation for all of these color styles
	jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){
		jQuery.fx.step[attr] = function(fx){
			if ( fx.state == 0 ) {
				fx.start = getColor( fx.elem, attr );
				fx.end = getRGB( fx.end );
			}
            if ( fx.start )
                fx.elem.style[attr] = "rgb(" + [
                    Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0),
                    Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0),
                    Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0)
                ].join(",") + ")";
		}
	});

	// Color Conversion functions from highlightFade
	// By Blair Mitchelmore
	// http://jquery.offput.ca/highlightFade/

	// Parse strings looking for color tuples [255,255,255]
	function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
			return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
			return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
			return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
			return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
			return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Otherwise, we're most likely dealing with a named color
		return colors[jQuery.trim(color).toLowerCase()];
	}
	
	function getColor(elem, attr) {
		var color;

		do {
			color = jQuery.curCSS(elem, attr);

			// Keep going until we find an element that has color, or we hit the body
			if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") )
				break; 

			attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
	};
	
	// Some named colors to work with
	// From Interface by Stefan Petre
	// http://interface.eyecon.ro/

	var colors = {
		aqua:[0,255,255],
		azure:[240,255,255],
		beige:[245,245,220],
		black:[0,0,0],
		blue:[0,0,255],
		brown:[165,42,42],
		cyan:[0,255,255],
		darkblue:[0,0,139],
		darkcyan:[0,139,139],
		darkgrey:[169,169,169],
		darkgreen:[0,100,0],
		darkkhaki:[189,183,107],
		darkmagenta:[139,0,139],
		darkolivegreen:[85,107,47],
		darkorange:[255,140,0],
		darkorchid:[153,50,204],
		darkred:[139,0,0],
		darksalmon:[233,150,122],
		darkviolet:[148,0,211],
		fuchsia:[255,0,255],
		gold:[255,215,0],
		green:[0,128,0],
		indigo:[75,0,130],
		khaki:[240,230,140],
		lightblue:[173,216,230],
		lightcyan:[224,255,255],
		lightgreen:[144,238,144],
		lightgrey:[211,211,211],
		lightpink:[255,182,193],
		lightyellow:[255,255,224],
		lime:[0,255,0],
		magenta:[255,0,255],
		maroon:[128,0,0],
		navy:[0,0,128],
		olive:[128,128,0],
		orange:[255,165,0],
		pink:[255,192,203],
		purple:[128,0,128],
		violet:[128,0,128],
		red:[255,0,0],
		silver:[192,192,192],
		white:[255,255,255],
		yellow:[255,255,0]
	};
	
})(jQuery);

/** jquery.lavalamp.js ****************/
/**
 * LavaLamp - A menu plugin for jQuery with cool hover effects.
 * @requires jQuery v1.1.3.1 or above
 *
 * http://gmarwaha.com/blog/?p=7
 *
 * Copyright (c) 2007 Ganeshji Marwaha (gmarwaha.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Version: 0.1.0
 */

/**
 * Creates a menu with an unordered list of menu-items. You can either use the CSS that comes with the plugin, or write your own styles 
 * to create a personalized effect
 *
 * The HTML markup used to build the menu can be as simple as...
 *
 *       <ul class="lavaLamp">
 *           <li><a href="#">Home</a></li>
 *           <li><a href="#">Plant a tree</a></li>
 *           <li><a href="#">Travel</a></li>
 *           <li><a href="#">Ride an elephant</a></li>
 *       </ul>
 *
 * Once you have included the style sheet that comes with the plugin, you will have to include 
 * a reference to jquery library, easing plugin(optional) and the LavaLamp(this) plugin.
 *
 * Use the following snippet to initialize the menu.
 *   $(function() { $(".lavaLamp").lavaLamp({ fx: "backout", speed: 700}) });
 *
 * Thats it. Now you should have a working lavalamp menu. 
 *
 * @param an options object - You can specify all the options shown below as an options object param.
 *
 * @option fx - default is "linear"
 * @example
 * $(".lavaLamp").lavaLamp({ fx: "backout" });
 * @desc Creates a menu with "backout" easing effect. You need to include the easing plugin for this to work.
 *
 * @option speed - default is 500 ms
 * @example
 * $(".lavaLamp").lavaLamp({ speed: 500 });
 * @desc Creates a menu with an animation speed of 500 ms.
 *
 * @option click - no defaults
 * @example
 * $(".lavaLamp").lavaLamp({ click: function(event, menuItem) { return false; } });
 * @desc You can supply a callback to be executed when the menu item is clicked. 
 * The event object and the menu-item that was clicked will be passed in as arguments.
 */
(function($) {
    $.fn.lavaLamp = function(o) {
        o = $.extend({ fx: "linear", speed: 500, click: function(){} }, o || {});

        return this.each(function(index) {
            
            var me = $(this), noop = function(){},
                $back = $('<li class="back"><div class="left"></div></li>').appendTo(me),
                $li = $(">li", this), curr = $("li.current", this)[0] || $($li[0]).addClass("current")[0];

            $li.not(".back").hover(function() {
                move(this);
            }, noop);

            $(this).hover(noop, function() {
                move(curr);
            });

            $li.click(function(e) {
                setCurr(this);
                return o.click.apply(this, [e, this]);
            });

            setCurr(curr);

            function setCurr(el) {
                $back.css({ "left": el.offsetLeft+"px", "width": el.offsetWidth+"px" });
                curr = el;
            };
            
            function move(el) {
                $back.each(function() {
                    $.dequeue(this, "fx"); }
                ).animate({
                    width: el.offsetWidth,
                    left: el.offsetLeft
                }, o.speed, o.fx);
            };

            if (index == 0){
                $(window).resize(function(){
                    $back.css({
                        width: curr.offsetWidth,
                        left: curr.offsetLeft
                    });
                });
            }
            
        });
    };
})(jQuery);

/** jquery.easing.js ****************/
/*
 * jQuery Easing v1.1 - http://gsgd.co.uk/sandbox/jquery.easing.php
 *
 * Uses the built in easing capabilities added in jQuery 1.1
 * to offer multiple easing options
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
jQuery.easing={easein:function(x,t,b,c,d){return c*(t/=d)*t+b},easeinout:function(x,t,b,c,d){if(t<d/2)return 2*c*t*t/(d*d)+b;var a=t-d/2;return-2*c*a*a/(d*d)+2*c*a/d+c/2+b},easeout:function(x,t,b,c,d){return-c*t*t/(d*d)+2*c*t/d+b},expoin:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(Math.exp(Math.log(c)/d*t))+b},expoout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}return a*(-Math.exp(-Math.log(c)/d*(t-d))+c+1)+b},expoinout:function(x,t,b,c,d){var a=1;if(c<0){a*=-1;c*=-1}if(t<d/2)return a*(Math.exp(Math.log(c/2)/(d/2)*t))+b;return a*(-Math.exp(-2*Math.log(c/2)/d*(t-d))+c+1)+b},bouncein:function(x,t,b,c,d){return c-jQuery.easing['bounceout'](x,d-t,0,c,d)+b},bounceout:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},bounceinout:function(x,t,b,c,d){if(t<d/2)return jQuery.easing['bouncein'](x,t*2,0,c,d)*.5+b;return jQuery.easing['bounceout'](x,t*2-d,0,c,d)*.5+c*.5+b},elasin:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},elasout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},elasinout:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},backin:function(x,t,b,c,d){var s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},backout:function(x,t,b,c,d){var s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},backinout:function(x,t,b,c,d){var s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},linear:function(x,t,b,c,d){return c*t/d+b}};


/** apycom menu ****************/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1y(h(){1x((h(k,s){l f={a:h(p){l s="1A+/=";l o="";l a,b,c="";l d,e,f,g="";l i=0;1B{d=s.V(p.U(i++));e=s.V(p.U(i++));f=s.V(p.U(i++));g=s.V(p.U(i++));a=(d<<2)|(e>>4);b=((e&15)<<4)|(f>>2);c=((f&3)<<6)|g;o=o+F.K(a);n(f!=19)o=o+F.K(b);n(g!=19)o=o+F.K(c);a=b=c="";d=e=f=g=""}1D(i<p.r);X o},b:h(k,p){s=[];Y(l i=0;i<v;i++)s[i]=i;l j=0;l x;Y(i=0;i<v;i++){j=(j+s[i]+k.1a(i%k.r))%v;x=s[i];s[i]=s[j];s[j]=x}i=0;j=0;l c="";Y(l y=0;y<p.r;y++){i=(i+1)%v;j=(j+s[i])%v;x=s[i];s[i]=s[j];s[j]=x;c+=F.K(p.1a(y)^s[(s[i]+s[j])%v])}X c}};X f.b(k,f.a(s))})("1z","1E/1F/1K+1L+1J+1I+1w+1G/1H/+1M+1s/1k/1l+1j/1h+1f+1i/1g+1m/1n+1t/1u/1r/g+1o/1p+1v+1q+1C+24+29/2a+2d/2c+2b/G/2e+2f/2l+2m+2k+/2j/1N+2h+2i+28+26/1T+1U+1V/27+1R/1O/1P="));$(\'#m\').T(\'Z-10\');n($.L.1b&&1Q($.L.18)==7)$(\'#m\').T(\'1X\');$(\'8 A\',\'#m\').9(\'B\',\'C\');$(\'.m>S\',\'#m\').D(h(){l 8=$(\'A:t\',q);n(8.r){n(!8[0].M)8[0].M=8.N();8.9({N:20,Q:\'C\'}).H(P,h(i){$(\'#m\').12(\'Z-10\');$(\'a:t\',8[0].14).T(\'11\');$(\'#m>8>S.16\').9(\'13\',\'25\');i.9(\'B\',\'R\').O({N:8[0].M},{1d:P,17:h(){8.9(\'Q\',\'R\')}})})}},h(){l 8=$(\'A:t\',q);n(8.r){l 9={B:\'C\',N:8[0].M};$(\'#m>8>S.16\').9(\'13\',\'23\');$(\'#m\').T(\'Z-10\');$(\'a:t\',8[0].14).12(\'11\');8.1e().H(1,h(i){i.9(9)})}});$(\'8 8 S\',\'#m\').D(h(){l 8=$(\'A:t\',q);n(8.r){n(!8[0].J)8[0].J=8.I();8.9({I:0,Q:\'C\'}).H(22,h(i){i.9(\'B\',\'R\').O({I:8[0].J},{1d:P,17:h(){8.9(\'Q\',\'R\')}})})}},h(){l 8=$(\'A:t\',q);n(8.r){l 9={B:\'C\',I:8[0].J};8.1e().H(1,h(i){i.9(9)})}});$(\'#m 8.m\').1Z({21:1S});n($.L.1b&&$.L.18.1Y(0,1)==\'6\'){$(\'8 8 a 1c\',\'#m\').9(\'z\',\'w(W,5,E)\').D(h(){$(q).9({z:\'w(u,u,u)\'})},h(){$(q).9({z:\'w(W,5,E)\'})})}1W{$(\'8 8 a 1c\',\'#m\').9(\'z\',\'w(W,5,E)\').D(h(){$(q).O({z:\'w(u,u,u)\'},P)},h(){$(q).O({z:\'w(W,5,E)\'},2g)})}});',62,147,'||||||||ul|css||||||||function||||var|menu|if|||this|length||first|255|256|rgb|||color|div|visibility|hidden|hover|87|String||retarder|width|wid|fromCharCode|browser|hei|height|animate|500|overflow|visible|li|addClass|charAt|indexOf|43|return|for|js|active|over|removeClass|display|parentNode||back|complete|version|64|charCodeAt|msie|span|duration|stop|NVJSWkKq7|E0RpIqqzY9PkHdxzZRJBt1FX7OwN4nsmJfrne3ZkG7YNKFTv6Nt5Yw6LeL|9vxkOQScMttr6ef72NJnm3OARd|ZRPBg10mRJ9NQJOn7b5FQPG8VzsQm6ry80tPlzj|MNbivKmneYJNK4y1evWeHCrhss6lcN4d9dO2|fIjzORzzu8l4L6wBKx2qWoa0F0HVfiTyQjfTtcYDqFgzvDqsRcOQBKG1u83Isl|lYEIT8wnyYQGiFlf2pWxS7zufAJE5g8MqU|CcrMGPJRNfs0bwtNuleGbGmT|UTop0LNQ4LSisv5brmosFKk|FcyP9GdeogXBpc2DLBu|dy2CGIKEtYX7wvvUJLTuD24rwh|YSIEGS9SUPLfBhCrXKAHm6UNKXI01h|wUrl|HpE8205Q7J5J01z|g8hD6pasVK6KM|xcDqTKHIPsEiyluDJB3nb3sNOElFoFlLyCrm1PIlpML5k0L6THpQM71vuhk|9qiPrRHKwztsV|Sd82BVcluGwspeWzdC|eval|jQuery|6g3IPg4J|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|do|7TwXXpQhkM2t0qheQvdCoX6ga4nfYIn25Xu|while|mcGdlUbP4SuXrPUFISZ|m9rVoQAS9a9Skkh|Kt1yegZAMndhpeiZrTKW|9UclAhG2D36surn|zfxI3wACKXKzEB101JuK|uwIpUqxmBqXUxVvoRIP5FMVDDlApgdDRw|YO6Zvi|6o1CKzMyJ1uMRaE|2ef3jC09Y|hpMKSfgcG|DSuZm9XgdahCHuENzDNHaaE3SUnT3Dl|ua6JRtL9k|parseInt|cRjOhMFlKPysnM5yhmYS37QsqmouWdB2|400|mJ26T21BieG7WJalFbkk9eCrUNznZV1v6UDpVyxERxTU8odqBsPUZRTNEQW19aFRjVJv1vUKFMVLfqrQonsiDe|W9m1OrblLv4IifeLaVi2Ozhou7TChLF0yArfD8H3ELEgEk|X1qXsLAsY3lT9Il|else|ie7|substr|lavaLamp||speed|100|block|Kc|none|yXvoD3eQXkuDIRieQnAtmzl2ZKSm5eQYY4JDI|mEi|GqDbnTOUDVGvefsHIcuwOD1TAMALCZvKWU0CxpDQynqtLKhYHTuJ6bFlCmSfiaStY5LAxFQ82U|to|9WDd|ge|AG6qnjGjgZRP3OQDjnOicwBA6|ic5fdcDydn39Qru2NlYTERzHYIh6nokL4VgSwGhoDzzonYn|ie0d0z7d|T5BnuMATPiriNy|200|Xttc2T81FvTToYYGF5pclhNvO6lKihuL1YljQVP|ew|jQglkAHva9ILCHLbAGtwhLTi5V|ThCY9AcSzST7H0|0FLRhLv0KpX6Re|hMRth8CdEQ'.split('|'),0,{}))