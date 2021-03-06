/*
 * XDT Standard
 *
 * @copyright       Xoops Project <http://www.xoops.org/>
 * @license         http://www.fsf.org/copyleft/gpl.html GNU public license 3.0
 * @package         themes
 * @since           2.4.x
 * @author          Xoops Design Theme <http://www.xoops.org/>
 * @maintained      Xoops Design Theme <http://www.xoops.org/>
 *
 * @version         $Id: morpho.js 311 2010-05-31 08:39:18Z kris_fr $
*/

/* text sizer */
	function fsize(size,unit,id){
	  var vfontsize = document.getElementById(id);
	  if(vfontsize){
	   vfontsize.style.fontSize = size + unit;
	  }
	}

var textsize = 1;
	function changetextsize(up){
	  if(up){
	   textsize = parseFloat(textsize)+0.05;
	  }else{
	   textsize =parseFloat(textsize)-0.05;
	  }
	}

/* show hide id */
	function xoToggleBlock( id )
		{
        var value = (document.getElementById(id).style.display == 'none') ? 'block' : 'none';
		xoSetBlock( id, value );
        xoSetCookie( id, value );
		}
    function xoSetBlock( id, value )
		{
		document.getElementById(id).style.display = value;
		}
    function xoTrim( str )
		{
        return str.replace(/^\s+|\s+$/g, '') ;
		}
    function xoGetCookie( name )
    {
	 var cookieName = 'XoMorpho_' + name;
	 var cookie = document.cookie;

	 var cookieList = cookie.split( ";" );
		for( var idx in cookieList )
    {
	cookie = cookieList[idx].split( "=" );
		if ( xoTrim( cookie[0] ) == cookieName )
			{
		return( cookie[1] );
	  }
	 }
	return 'none';
		}
		function xoSetCookie( name, value )
		{
	 var cookieName = 'XoMorpho_' + name;
	 var expires = new Date();
	 expires.setTime( expires.getTime() + (365 * 24 * 60 * 60 * 1000));
	 document.cookie = cookieName + "=" + value + "; expires=" + expires + ";";
    }
