var srcTxt = document.querySelector("#src");
var csTxt = document.querySelector("#cs");
var jsTxt = document.querySelector("#js");

srcTxt.onkeyup = function () {
    var srcValue = new String();
    if (srcTxt.value.trim() === "") {
        csTxt.value = "";
        jsTxt.value = "";
    }
    srcTxt.value.trim().replace(/"/g, "'").split('\n').forEach(function (line) {
        if (line.length > 0 && line.trim().length > 0) {
            if (line[0] == '+')
            { }
            else {
                if (line[0] == '-') {
                    srcValue += line.substring(1, line.length) + "\n";
                } else
                    srcValue += line + "\n";
                format(srcValue);
            }
        }
    });
};

var format = function (srcValue) {
    csTxt.value = ('@"' + srcValue.substring(0, srcValue.length - 1) + '"');
    var jstxt = new String();
    srcValue.split('\n').forEach(function (line) {
        jstxt += '"' + line + '"+\n';
    });
    jsTxt.value = jstxt.substring(0, jstxt.length - 6);
};