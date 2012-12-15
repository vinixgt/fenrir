function mte(data){
    var template, html;
        template = "<h2>{{title}}</h2>\
        <p>Bienvenido <strong>{{user}}</strong><br>\
        tu password es <strong>{{password}}</strong><br>\
        Tu token de acceso es <strong>{{mytoken}}</strong><br>\
        a continuacion muestro una lista de valores para prueba<br>\
        <table class=\"table table-striped\">\
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
        <table>\
            <tr>\
            {{#fields}}\
                {{#label}}\
                {{label}}\
                {{/label}}\
                {{#texto}}\
                <input type=\"text\">\
                {{/texto}}\
                {{#pwd}}\
                <input type=\"password\">\
                {{/pwd}}\
                {{#checkbox}}\
                <input type=\"checkbox\">\
                {{/checkbox}}\
            {{/fields}}\
            </tr>\
        </table>\
        </p>\
        ";
        html = Mustache.to_html(template, data);
        document.write(html);
};


mte( {
            title: "Bienvenidos al sistema de plantillas",
            mytoken: "010asdfasdfasdfasdfasdf",
            user : "amorales",
            password: "mypass",
            list: ["valor1", "valor2", "valor3"],
            fields: [
                {
                    campo: "usuario",
                    label: "Usuario de estafa",
                    texto: true,
                    size: "10"
                },
                {
                    campo: "checkbox",
                    checkbox: true,
                    size: "10"
                },
                {
                    campo: "estado",
                    texto: true,
                    size: "10"
                },
                {
                    campo: "password",
                    label: "Contrasenia",
                    pwd: true ,
                    size: "10"
                }
            ],            
        } );