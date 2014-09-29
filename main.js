var base_url = 'https://www.reddit.com/r/talesfromtechsupport'
var port = chrome.extension.connect({
	name : "hello"
});
var arrs = [];
function startCode(){

	port.postMessage({command: 'setBackgroundCode'});
}
function getCurrentThread(){
	var current_url = document.URL;
	var thread_name = current_url.split('/');
	var thread_id = thread_name[6];
	getPreviousNext(thread_id);
	return thread_id;
}
function checkThreads(after){
	var ids=[];
	var das = [];
	var sort_var='hot';
	var x;
	if(after == undefined){
		x='';
	}else{
		x = '?after'+after;
	}
	$.ajax({
		url: 'https://www.reddit.com/r/talesfromtechsupport/'+sort_var+'.json'+x
	}).done(function(data){
		var a = data.data.children;
		$.each(a, function(){
			ids.push(this.data.id)
		});
		setP(ids);
	});
}
function getPreviousNext(current){
	var a=checkThreads(undefined);
}
function setP(ids){
	var current = getCurrentThread();
	if(ids.indexOf(current)>-1){
			var ind = ids.indexOf(current);
			var prev = ids[ind-1];
			var next = ids[ind+1];	
			setPreviousNext(prev, next);
		}else{

		}
}
function setPreviousNext(prev, next){
	var p ='', n='';
	if(prev!=undefined && next!=undefined){
		var p = '/r/talesfromtechsupport/comments/'+prev+'/';
		var n = '/r/talesfromtechsupport/comments/'+next+'/';
	}else if(prev==undefined){
		$('.expando').find('.usertext-body').find('.prev-anchor').hide();
		var n = '/r/talesfromtechsupport/comments/'+next+'/';
	}
	$('.expando').find('.usertext-body').find('.prev-anchor').attr('href', p);
	$('.expando').find('.usertext-body').find('.next-anchor').attr('href', n);
}
function loadDom(){
	var w = $('.expando').find('.usertext-body').find('.md').width();
	var domElem = '<div class="prev-next"><a href="" class="prev-anchor">Previous</a> <a href="" class="next-anchor">Next</a></div>';
	$('.expando').find('.usertext-body').append(domElem);
}
