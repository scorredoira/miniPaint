
import File_open_class from './../modules/file/open.js';
import File_save_class from './../modules/file/save.js';

var SCL = {
    init() {
        var img = getURLValue("img")
        if (img) {
            let fopen = new File_open_class();
            fopen.file_open_url_handler({ url: img })
            if (img.indexOf("blob:") == 0) {
                setTimeout(function () { URL.revokeObjectURL(img) }, 300)
            }
        }

        window.miniPaint_save = function () {
            new File_save_class().save()
        }
    },
    save(blob, fname) {
        var callback = getURLValue("callback")
        if (callback) {
            try {
                exec("window.parent.opener." + callback, blob, fname)
                window.close()
            } catch (error) {
                alert(error)
            }
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

function exec(name, ...args) {
    var parts = name.split('.');
    var fn = window[parts[0]];
    if (!fn) {
        throw "Function does not exist: " + name
    }
    for (var i = 1; i < parts.length; i++) {
        fn = fn[parts[i]];
        if (!fn) {
            throw "Function does not exist: " + name
        }
    }
    return fn.apply(window, args);
}


export default SCL;