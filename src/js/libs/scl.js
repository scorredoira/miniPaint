


var SCL = {
    save(blob, fname) {
        var mode = getURLValue("saveMode")
        switch (mode) {
            case "inPlace":
                window.parent.opener.imageEditCallback(blob, fname)
                return true
        }
    }
}

function getURLValue(paramName) {
    if (!paramName) {
        return null;
    }
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0, l = vars.length; i < l; i++) {
        var t = vars[i].indexOf('=');
        if (vars[i].substring(0, t) === paramName) {
            return decodeURIComponent(vars[i].substring(t + 1));
        }
    }
    return null;
}


export default SCL;