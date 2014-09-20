chrome.extension.onRequest.addListener(function(request){
	if(request.command == 'setCode'){
		localStorage.setItem('user_tfts_code', 'this-code');
		startCode();
	}else if(request.command == 'hello'){
		alert('SSUPPPPP');
	}else if(request.command == 'getCurrentThread'){
		getCurrentThread();
		loadDom();
	}
});