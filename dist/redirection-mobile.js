window.SA||(window.SA={}),SA.redirection_mobile=function(e){var t=function(e){var t=new Date;return t.setTime(t.getTime()+e),t},n=function(e){if(!e)return;var t=document.location.search,n=t&&t.substring(1).split("&"),r=0,i=n.length;for(;r<i;r++){var s=n[r],o=s&&s.substring(0,s.indexOf("="));if(o===e)return s.substring(s.indexOf("=")+1,s.length)}},r=navigator.userAgent.toLowerCase(),i="false",s="true",o=e||{},u=o.redirection_param||"mobile_redirect",a=o.mobile_prefix||"m",f=o.mobile_url,l=o.mobile_scheme?o.mobile_scheme+":":document.location.protocol,c=document.location.host,h=n(u),p=f||a+"."+(c.match(/^www\./i)?c.substring(4):c),d=o.cookie_hours||1,v=o.keep_path||!1,m=o.keep_query||!1,g=o.append_referrer||!1,y=o.append_referrer_key||"original_referrer",b=o.tablet_host||p,w=!1,E=!1;if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4)))w=!0;if(document.referrer.indexOf(p)>=0||h===s)window.sessionStorage?window.sessionStorage.setItem(u,s):document.cookie=u+"="+s+";expires="+t(36e5*d).toUTCString();var S=window.sessionStorage?window.sessionStorage.getItem(u)===s:!1,x=document.cookie?document.cookie.indexOf(u)>=0:!1;!r.match(/(iPad|SCH-I|xoom|NOOK|silk|kindle|GT-P|touchpad|kindle|sch-t|viewpad|bolt|playbook|Nexus 7)/i)||(E=o.tablet_redirection!==s&&!o.tablet_host?!1:!0,w=!1);if((E||w)&&!x&&!S){if(o.beforeredirection_callback&&!o.beforeredirection_callback.call(this))return;var T="";v&&(T+=document.location.pathname),m&&(T+=document.location.search),g&&document.referrer&&(T.indexOf("?")===-1?T+="?":T+="&",T+=y+"="+encodeURIComponent(document.referrer)),E?document.location.href=l+"//"+b+T:w&&(document.location.href=l+"//"+p+T)}};