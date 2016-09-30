/**
 * Created by baidu on 2016/9/30.
 */
$(document).ready(docready);

var teamId;

function docready() {

}

function setTeamId(id) {
    alert("old id: " + teamId + "*** new id: " + id);
    if (teamId != id) {
        teamId = id;
        clickNotstart();
    }
}

function clickNotstart() {
    $("ul#nav").children("li").removeClass("active");
    $("li#notstart").addClass("active");
    // 拉数据
}

function clickDone() {
    $("ul#nav").children("li").removeClass("active");
    $("li#done").addClass("active");
}

function clickEvalue() {
    $("ul#nav").children("li").removeClass("active");
    $("li#evalue").addClass("active");
}

function clickAll() {
    $("ul#nav").children("li").removeClass("active");
    $("li#all").addClass("active");
}