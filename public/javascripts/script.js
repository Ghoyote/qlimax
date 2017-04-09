window.onload = function () {
	document.getElementById('loading-mask').style.display = 'none';
};
// Closes the sidebar menu
$("#menu-close").click(function(e) {
	e.preventDefault();
	$("#sidebar-wrapper").toggleClass("active");
});
// Enable Tooltips
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});
// Opens the sidebar menu
$("#menu-toggle").click(function(e) {
	e.preventDefault();
	$("#sidebar-wrapper").toggleClass("active");
});
// Scrolls to the selected menu item on the page
$(function() {
	$('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});
//#to-top button appears after scrolling
var fixed = false;
$(document).scroll(function() {
	if ($(this).scrollTop() > 250) {
		if (!fixed) {
			fixed = true;
			// $('#to-top').css({position:'fixed', display:'block'});
			$('#to-top').show("slow", function() {
				$('#to-top').css({
					position: 'fixed',
					display: 'block'
				});
			});
		}
	} else {
		if (fixed) {
			fixed = false;
			$('#to-top').hide("slow", function() {
				$('#to-top').css({
					display: 'none'
				});
			});
		}
	}
});


var appCache = window.applicationCache;

appCache.update();



window.addEventListener('load', function(e) {
	
	window.applicationCache.addEventListener('updateready', function(e) {
		if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
			// Browser downloaded a new app cache.
				window.location.reload();
		} else {
			// Manifest didn't changed. Nothing new to server.
		}
	}, false);
	
}, false);

function handleCacheEvent(e) {
	//...
}

function handleCacheError(e) {
	alert('Error: Cache failed to update!');
};

// Fired after the first cache of the manifest.
appCache.addEventListener('cached', handleCacheEvent, false);

// Checking for an update. Always the first event fired in the sequence.
appCache.addEventListener('checking', handleCacheEvent, false);

// An update was found. The browser is fetching resources.
appCache.addEventListener('downloading', handleCacheEvent, false);

// The manifest returns 404 or 410, the download failed,
// or the manifest changed while the download was in progress.
appCache.addEventListener('error', handleCacheError, false);

// Fired after the first download of the manifest.
appCache.addEventListener('noupdate', handleCacheEvent, false);

// Fired if the manifest file returns a 404 or 410.
// This results in the application cache being deleted.
appCache.addEventListener('obsolete', handleCacheEvent, false);

// Fired for each resource listed in the manifest as it is being fetched.
appCache.addEventListener('progress', handleCacheEvent, false);

// Fired when the manifest resources have been newly redownloaded.
appCache.addEventListener('updateready', handleCacheEvent, false);
