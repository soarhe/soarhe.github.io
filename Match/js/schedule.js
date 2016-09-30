/**
 * Created by baidu on 16/9/23.
 */

var officeID = '372ccd0399674ba5aabd5b984a25cf40';
var ScheduleData;

$(document).ready(docready);

function docready() {
    setOfficeId(officeID)
}

function clickItem(homeid, awayid, flag) {
    localStorage.setItem("flag", flag);
    localStorage.setItem("homeid", homeid);
    localStorage.setItem("awayid", awayid);
    window.location.href = "./MatchInfo.html";
}


function setOfficeId(id) {
    officeID = id;
    var url = window.location.href;
    var index = url.indexOf("Schedule.html");
    if (index == -1) {
        return;
    }
    // 再拉数据
    var url = "http://120.76.206.174:8080/efaleague-web/appPath/appData/getSchedule?officeId=" + officeID;
    var div = $("#content");
    var div_panel = "<div class=\"panel panel-default\">"
        + "<div class=\"panel-heading\">"
        + "<h4 class=\"panel-title\">"
        + "<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\">"
        + "第1轮"
        + "</a></h4></div>"
        + "<div id=\"collapse1\" class=\"panel-collapse collapse in\">";
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data);
                var rows = obj.rows;
                ScheduleData = rows;
                var turn = 1;
                for (var i = 0; i < rows.length; i++) {
                    var sch = rows[i];
                    var currentturn = sch.turn;
                    if (Number(currentturn) == Number(turn) + 1) {
                        div_panel += "</div>";
                        div.append(div_panel);
                        div_panel = "<div class=\"panel panel-default\">"
                            + "<div class=\"panel-heading\">"
                            + "<h4 class=\"panel-title\">"
                            + "<a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse" + currentturn + "\">"
                            + "第" + currentturn + "轮"
                            + "</a></h4></div>"
                            + "<div id=\"collapse" + currentturn + "\" class=\"panel-collapse collapse in\">";
                    }
                    turn = currentturn;
                    var flag = sch.flag;
                    var homeid = sch.homeTeamId;
                    var awayid = sch.awayTeamId;
                    var onclick = "clickItem(\"" + homeid + "\",\"" + awayid + "\",\"" + flag + "\")";
                    div_panel = div_panel
                        + "<div class=\"panel-body\" onclick=" + onclick + ">"
                        + "<div style=\"float: left\">";
                    var homephoto = sch.homeTeamPhoto;
                    div_panel += "<img src=\""+ homephoto + "\" onerror='javascript:this.src=\"images/lunbo1.png\"'/>";
                    var homename = sch.homeTeamName;
                    div_panel += "<span>" + homename +"</span>";
                    div_panel += "</div>";
                    if (flag == 1) {
                        var result = sch.homescore + ":" + sch.awayscore;
                        div_panel += "<span style=\"position: absolute;left:50%\">" + result + "</span>";
                    } else {
                        div_panel += "<span style=\"position: absolute;left:50%\">未开赛</span>";
                    }
                    div_panel += "<div style=\"float: right\">";
                    div_panel += "<span>" + sch.awayTeamName + "</span>";
                    div_panel += "<img src=\"" + sch.awayTeamPhoto + "\" onerror='javascript:this.src=\"images/lunbo1.png\"'/></div>";
                    div_panel += "</div>";
                }
            }
        }
    )
}