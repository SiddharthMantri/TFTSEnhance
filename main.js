var server_url = 'some-url';
var port = chrome.extension.connect({
	name : "hello"
});
function startCode(){
	var posts_obj;
	$.ajax({
		url: 'https://www.reddit.com/r/talesfromtechsupport/search.json?restrict_sr=on&t=all'
	}).done(function(data){
		posts_obj = data;
		console.log(posts_obj);
	});

	port.postMessage({command: 'setBackgroundCode'});
}
function getCurrentThread(){
	var current_url = document.URL;
	var thread_name = current_url.split('/');
	var thread_id = thread_name[6];
	getPreviousNext(thread_id);
}
function getPreviousNext(current){
	
}
function setPreviousNext(prev, next){

}
function loadDom(){
	var domElem = '<div class="prev-next"><a href="" class="prev-anchor">Previous</a> <a href="" class="next-anchor">Next</a></div>';
	$('.expando').find('.usertext-body').append(domElem);
}