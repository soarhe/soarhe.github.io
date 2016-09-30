/**
 * Created by baidu on 16/9/23.
 */

var officeID = '372ccd0399674ba5aabd5b984a25cf40';

$(document).ready(docready)

function docready() {
    // setOfficeId(officeID);
    // clickScore()
}

function setOfficeId(id) {
    officeID = id;
    console.log("officeID: " + officeID);
    // alert("officeID:" + officeID);
    // 再拉数据
    clickScore();
}

function clickScore() {
    $("ul#nav").children("li").removeClass("active");
    $("li#score").addClass("active");
    var table = $("table#content");
    // 清除内容
    table.empty();
    // 增加首行
    var title =
        "<tr>" +
            "<td>排名</td>" +
            "<td>球队</td>" +
            "<td>积分</td>" +
            "<td>战绩</td>" +
            "<td>进球</td>" +
            "<td>红牌</td>" +
            "<td>黄牌</td>" +
            "<td>净胜球</td>" +
        "</tr>>"
    table.append(title);
    // 拉数据
    var url = "http://120.76.206.174:8080/efaleague-web/appPath/appData/leagueIntegral?officeId=" + officeID;
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data);
                var rows = obj.rows;
                for (var i = 0; i < rows.length; i++) {
                    var score = rows[i];
                    var rank = i + 1;
                    var name = score.team.name;
                    var point = score.point;
                    var match = score.won + "/" + score.even + "/" + score.beaten;
                    var goal = score.goal;
                    var red = score.red;
                    var yellow = score.yellow;
                    var plus = score.goal - score.lost;
                    var newroll =
                        "<tr>" +
                        "<td>" + rank + "</td>" +
                        "<td>" + name + "</td>" +
                        "<td>" + point + "</td>" +
                        "<td>" + match + "</td>" +
                        "<td>" + goal + "</td>" +
                        "<td>" + red + "</td>" +
                        "<td>" + yellow + "</td>" +
                        "<td>" + plus + "</td>" +
                        "</tr>>"
                    table.append(newroll);
                }
            }
        }
    )
}

function clickAssist() {
    $("ul#nav").children("li").removeClass("active");
    $("li#assist").addClass("active");
    // alert('助攻')
    var table = $("table#content");
    // 清除内容
    table.empty();
    // 增加首行
    var title =
        "<tr>" +
        "<td>排名</td>" +
        "<td>姓名</td>" +
        "<td>球队</td>" +
        "<td>助攻</td>" +
        "</tr>>"
    table.append(title);
    // 读本地缓存
    for (var i = 0; i < 10; i++) {
        table.append(title);
    }
}
function clickGoal() {
    $("ul#nav").children("li").removeClass("active");
    $("li#goal").addClass("active");
    var table = $("table#content");
    // 清除内容
    table.empty();
    // 增加首行
    var title =
        "<tr>" +
        "<td>排名</td>" +
        "<td>姓名</td>" +
        "<td>球队</td>" +
        "<td>进球</td>" +
        "<td>点球</td>" +
        "</tr>"
    table.html(title);
    // 拉数据
    var url = "http://120.76.206.174:8080/efaleague-web/appPath/appData/getAllGoal?officeId=" + officeID;
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data);
                var rows = obj.rows;
                for (var i = 0; i < rows.length; i++) {
                    var goalrow = rows[i];
                    var rank = i + 1;
                    var name = goalrow.name;
                    var teamname = goalrow.teamName;
                    var goalnum = goalrow.num;
                    var penalty = 0;
                    var newroll =
                        "<tr>" +
                        "<td>" + rank + "</td>" +
                        "<td>" + name + "</td>" +
                        "<td>" + teamname + "</td>" +
                        "<td>" + goalnum + "</td>" +
                        "<td>" + penalty + "</td>" +
                        "</tr>>"
                    table.append(newroll);
                }
            }
        }
    )
}
function clickCards() {
    $("ul#nav").children("li").removeClass("active");
    $("li#cards").addClass("active");
    // alert('战神卡')
    var table = $("table#content");
    // 清除内容
    table.empty();
    // 增加首行
    var title =
        "<tr>" +
        "<td>排名</td>" +
        "<td>姓名</td>" +
        "<td>球队</td>" +
        "<td>红牌</td>" +
        "<td>黄牌</td>" +
        "</tr>>"
    table.html(title);
    var url = "http://120.76.206.174:8080/efaleague-web/appPath/appData/getAllCard?officeId=" + officeID;
    $.ajax(
        {
            url: url,
            success: function (data) {
                // 解析json
                var obj = eval(data);
                var rows = obj.rows;
                for (var i = 0; i < rows.length; i++) {
                    var goalrow = rows[i];
                    var rank = i + 1;
                    var name = goalrow.memberName;
                    var teamname = goalrow.teamName;
                    var red = goalrow.red;
                    var yellow = goalrow.yellow;
                    var newroll =
                        "<tr>" +
                        "<td>" + rank + "</td>" +
                        "<td>" + name + "</td>" +
                        "<td>" + teamname + "</td>" +
                        "<td>" + red + "</td>" +
                        "<td>" + yellow + "</td>" +
                        "</tr>>"
                    table.append(newroll);
                }
            }
        }
    )
}


