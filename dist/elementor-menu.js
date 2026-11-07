(()=>{'use strict';
function init(){document.querySelectorAll('.chi-site-header').forEach(header=>{
 if(header.dataset.menuReady)return;
 const nav=header.querySelector('.chi-nav'),toggle=header.querySelector('.chi-mobile-toggle a');if(!nav||!toggle)return;
 header.dataset.menuReady='true';header.classList.add('chi-mobile-ready');
 nav.id='chi-nav-'+(header.dataset.id||'main');nav.setAttribute('role','navigation');
 const vi=document.documentElement.lang.startsWith('vi');nav.setAttribute('aria-label',vi?'Điều hướng chính':'Main navigation');
 toggle.setAttribute('role','button');toggle.setAttribute('aria-controls',nav.id);toggle.setAttribute('aria-expanded','false');
 const icon=toggle.querySelector('.elementor-button-text'),closedIcon=icon?.textContent||'☰';
 function setOpen(open,focus=false){header.classList.toggle('chi-menu-open',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?(vi?'Đóng menu':'Close menu'):(vi?'Mở menu':'Open menu'));if(icon)icon.textContent=open?'×':closedIcon;if(focus)toggle.focus();}
 setOpen(false);
 toggle.addEventListener('click',e=>{e.preventDefault();setOpen(!header.classList.contains('chi-menu-open'));});
 toggle.addEventListener('keydown',e=>{if(e.key===' '){e.preventDefault();setOpen(!header.classList.contains('chi-menu-open'));}});
 nav.addEventListener('click',e=>{if(e.target.closest('a'))setOpen(false);});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&header.classList.contains('chi-menu-open'))setOpen(false,true);});
 document.addEventListener('click',e=>{if(!header.contains(e.target))setOpen(false);});
 matchMedia('(max-width:767px)').addEventListener('change',()=>setOpen(false));
 });}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
// Elementor may redraw its preview after a control changes.
if(window.jQuery)window.jQuery(window).on('elementor/frontend/init',()=>{if(window.elementorFrontend)window.elementorFrontend.hooks.addAction('frontend/element_ready/global',init);});
})();
