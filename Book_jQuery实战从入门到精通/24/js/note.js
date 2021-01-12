
//Web存储对象
var myNode = {
    author: 'node',
    version: '2.1',
    website: 'http://www.node.cn/'
}
myNode.utils = {
    setParam: function(name, value) {
        localStorage.setItem(name, value)
    },
    getParam: function(name) {
        return localStorage.getItem(name)
    }
}
//首页页面创建事件
$("#index").live("pagecreate", function() {
    var $listview = $(this).find('ul[data-role="listview"]');
    var $strKey = "";
    var $m = 0, $n = 0;
    var $strHTML = "";
    for (var intI = 0; intI < localStorage.length; intI++) {
        $strKey = localStorage.key(intI);
        if ($strKey.substring(0, 4) == "note") {
            var getData = JSON.parse(myNode.utils.getParam($strKey));
            if (getData.type == "a") {
                $m++;
            }
            if (getData.type == "b") {
                $n++;
            } 
        }
    }
    var $sum = parseInt($m) + parseInt($n);
    $strHTML += '<li data-role="list-divider">目录<span class="ui-li-count">' + $sum + '</span></li>';
    $strHTML += '<li><a href="list.html" data-ajax="false" data-id="a" data-name="流水账">流水账<span class="ui-li-count">' + $m + '</span></li>';
    $strHTML += '<li><a href="list.html" data-ajax="false" data-id="b" data-name="心情日记">心情日记<span class="ui-li-count">' + $n + '</span></li>';
    $listview.html($strHTML);
    $listview.delegate('li a', 'click', function(e) {
        myNode.utils.setParam('link_type', $(this).data('id'))
        myNode.utils.setParam('type_name', $(this).data('name'))
    })
})

//列表页面创建事件
$("#list").live("pagecreate", function() {
    var $listview = $(this).find('ul[data-role="listview"]');
    var $strKey = "", $strHTML = "", $intSum = 0;
    var $strType = myNode.utils.getParam('link_type');
    var $strName = myNode.utils.getParam('type_name');
    for (var intI = 0; intI < localStorage.length; intI++) {
        $strKey = localStorage.key(intI);
        if ($strKey.substring(0, 4) == "note") {
            var getData = JSON.parse(myNode.utils.getParam($strKey));
            if (getData.type == $strType) {
				if(getData.date)
					var date = new Date(getData.date);
				if(date)
					var _date = date.getFullYear() +  "-" +  date.getMonth() +  "-" +  date.getDate();
				else 
					var _date = "";
                $strHTML += '<li data-icon="false" data-ajax="false"><a href="notedetail.html" data-id="' + getData.nid + '">' + getData.title + '<p class="ui-li-aside">' + _date + '</p></a></li>';
                $intSum++;
            } 
        }
    }
    var strTitle = '<li data-role="list-divider">' + $strName + '<span class="ui-li-count">' + $intSum + '</span></li>';
    $listview.html(strTitle + $strHTML);
    $listview.delegate('li a', 'click', function(e) {
        myNode.utils.setParam('list_link_id', $(this).data('id'))
    })
})

//详细页面创建事件
$("#notedetail").live("pagecreate", function() {
    var $type = $(this).find('div[data-role="header"] h4');
    var $strId = myNode.utils.getParam('list_link_id');
    var $titile = $("#title");
    var $content = $("#content");
    var listData = JSON.parse(myNode.utils.getParam($strId));
    var strType = listData.type == "a" ? "流水账" : "心情日记";
    $type.html('<img src="images/node5.png" class="h_icon" alt=""/> ' + strType);
    $titile.html(listData.title);
    $content.html(listData.content);
    $(this).delegate('#alink_delete', 'click', function(e) {
        var yn = confirm("确定要删除吗？");
        if (yn) {
            localStorage.removeItem($strId);
            window.location.href = "list.html";
        }
    })
})

//修改页面创建事件
$("#editnote").live("pageshow", function() {
    var $strId = myNode.utils.getParam('list_link_id');
    var $header = $(this).find('div[data-role="header"]');
    var $rdotype = $("input[type='radio']");
    var $hidtype = $("#hidtype");
    var $txttitle = $("#txt-title");
    var $txtacontent = $("#txta-content");
    var editData = JSON.parse(myNode.utils.getParam($strId));
    $hidtype.val(editData.type);
    $txttitle.val(editData.title);
    $txtacontent.val(editData.content);
    if (editData.type == "a") {
        $("#lbl-type-0").removeClass("ui-radio-off").addClass("ui-radio-on ui-btn-active");
    } else {
        $("#lbl-type-1").removeClass("ui-radio-off").addClass("ui-radio-on ui-btn-active");
    }
    $rdotype.bind("change", function() {
        $hidtype.val(this.value);
    });
    $header.delegate('a', 'click', function(e) {
        if ($txttitle.val().length > 0 && $txtacontent.val().length > 0) {
            var strnid = $strId;
            var notedata = new Object;
            notedata.nid = strnid;
            notedata.type = $hidtype.val();
            notedata.title = $txttitle.val();
            notedata.content = $txtacontent.val();
            var jsonotedata = JSON.stringify(notedata);
            myNode.utils.setParam(strnid, jsonotedata);
            window.location.href = "list.html";
        }
    })
})

//增加页面创建事件
$("#addnote").live("pagecreate", function() {
    var $header = $(this).find('div[data-role="header"]');
    var $rdotype = $("input[type='radio']");
    var $hidtype = $("#hidtype");
    var $txttitle = $("#txt-title");
    var $txtacontent = $("#txta-content");
    $rdotype.bind("change", function() {
        $hidtype.val(this.value);
    });
    $header.delegate('a', 'click', function(e) {
        if ($txttitle.val().length > 0 && $txtacontent.val().length > 0) {
            var strnid = "note_" + RetRndNum(3);
            var notedata = new Object;
            notedata.nid = strnid;
            notedata.type = $hidtype.val();
            notedata.title = $txttitle.val();
            notedata.content = $txtacontent.val();
			notedata.date = new Date().valueOf();
            var jsonotedata = JSON.stringify(notedata);
            myNode.utils.setParam(strnid, jsonotedata);
            window.location.href = "list.html";
        }
    });
    function RetRndNum(n) {
        var strRnd = "";
        for (var intI = 0; intI < n; intI++) {
            strRnd += Math.floor(Math.random() * 10);
        }
        return strRnd;
    }
})









