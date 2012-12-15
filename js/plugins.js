// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
(function()){
    var data, template, html;
        data = {
            title: "Bienvenidos al sistema de plantillas",
            mytoken: "01012",
            user : "amorales",
            password: "mypass",
            list: ["valor1", "valor2", "valor3"],
            tabled: "class='table table-striped'"
        };
        template = "<h2>{{title}}</h2>\
        <p>Bienvenido <strong>{{user}}</strong><br>\
        tu password es <strong>{{password}}</strong><br>\
        Tu token de acceso es <strong>{{mytoken}}</strong><br>\
        a continuacion muestro una lista de valores para prueba<br>\
        <table {{{tabled}}}>\
        <tr>\
        <th>Titulo 1</th>\
        <th>Titulo 2</th>\
        <th>Titulo 3</th>\
        </tr>\
        <tr>\
        {{#list}}\
        <td>{{.}}</td>\
        {{/list}}\
        </tr>\
        </table>\
        </p>\
        ";
        html = Mustache.to_html(template, data);
        document.write(html);
}());