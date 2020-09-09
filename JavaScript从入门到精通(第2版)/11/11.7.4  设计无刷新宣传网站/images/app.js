 (function(){
    "use strict";
	
    var container = document.querySelector('.gallery'),
        imgs = document.querySelectorAll('img'),
        textWrapper = document.querySelector('.highlight'),
        content = document.querySelector('.content'),
        defaultTitle = "选择一种发明。",
        hanhua = {
		    "yinshuashu" : "印刷术",
		    "huoyao" : "火药",
		    "zhinanzhen" : "指南针",
		    "zhaozhishu" : "印刷术"
        };
    function updateText(content){
        textWrapper.innerHTML = content;
    }

    function requestContent(file){
        $('.content').load(file + ' .content');
    }

    function removeCurrentClass(){
        for(var i = 0; i < imgs.length; i++){
            imgs[i].classList.remove('current');
        }
    }

    function addCurrentClass(elem){
        removeCurrentClass();
        var element = document.querySelector("." + elem);
        element.classList.add('current');
    }

    container.addEventListener('click', function(e){
        if(e.target != e.currentTarget){
            e.preventDefault();
            var data = e.target.getAttribute('data-name'),
                url = data + ".php";
            addCurrentClass(data);
            history.pushState(data, null, url);
            updateText( hanhua[ data] );
            requestContent(url);
            document.title = "中国四大发明 | " + hanhua[ data];
        }
        e.stopPropagation();
    }, false);


    window.addEventListener('popstate', function(e){
        var character = e.state;

        if (character == null) {
            removeCurrentClass();
            textWrapper.innerHTML = " ";
            content.innerHTML = " ";
            document.title = defaultTitle;
        } else {
            updateText(character);
            requestContent(character + ".php");
            addCurrentClass(character);
            document.title = "Ghostbuster | " + character;
        }
    })
})();
