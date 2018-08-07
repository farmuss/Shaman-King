var yoh = {
    name: "Yoh Asakura",
    picture: '<img src="images/yoh.jpg">',
    hp: 100 
}

var rio = {
    name: "Rio",
    picture: "Blank for now",
    hp: 100 
}

var jun = {
    name: "Len Tao",
    picture: "Blank for now",
    hp: 100 
}

var zeke = {
    name: "Zeke",
    picture: '<img src="images/zeke.jpg">',
    hp: 300 
}

$(document).ready(function() {
    $("#test").on("click", function() {
        $("#attackerName").html(yoh.name);
        $("#attackerImg").html(yoh.picture);
        $("#attackerHp").html(yoh.hp);
        $("#defenderName").html(zeke.name);
        $("#defenderImg").html(zeke.picture);
        $("#defenderHp").html(zeke.hp);
    });
});

