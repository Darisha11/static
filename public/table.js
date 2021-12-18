/*let array = [
    {
        name: "Матюшанова Дарина",
        group: "ЦПИ-11",
        data: "2004-01-10",
        phone: "89535117969",
    },
    {
        name: "Сальникова Екатерина",
        group: "ЦПИ-11",
        data: "2003-05-24",
        phone: "89953838393",
    },
    {
        name: "Сорокина Анна",
        group: "ЦИС-17",
        data: "2004-03-17",
        phone: "89159939894",
    }];

function template(student) {
    return '<tr>\n' +
        '<td class = "name">' + student.name + '</td>\n' +
        '<td>' + student.group + '</td>\n' +
        '<td>' + student.data + '</td>\n' +
        '<td>' + student.phone + '</td>\n' +
        '<td><button type="button" class="buttonEdit">Изменить</button></td>\n' +
        '<td><button type="button" class="buttonDel">Удалить</button></td>\n' +
        '</tr>\n';
}

printAllStudents();

const util = new function (){
    this.ajax = (params, callback) => {
        fetch(params).then
    }
}

//кнопки удаления
//открытие

document.querySelectorAll(".buttonDel").forEach(btn => { //на все кнопки "удалить" назначаем действие по клику
    deleteHandler(btn);
})
let nameDel = null;
function deleteHandler(btn){
    btn.addEventListener("click", (evt)=>{
        nameDel = evt.target.parentElement.parentElement.querySelector(".name").innerHTML; // определяем имя студента из данной строки
        document.getElementById("windowDel").style.display = "block";
    })
}

//для кнопки "удалить" в окне удаления делаем событие по клику
document.getElementById("subDel").addEventListener("click", delStudent);

function delStudent() {
    array = array.filter(student => student.name !== nameDel); //удаляем из массива студента с данным именем
    printAllStudents();
    document.getElementById("windowDel").style.display = "none";
}

//закрытие
function noDel() {
    document.getElementById("windowDel").style.display = "none";
}
for (let bnoDel of document.getElementsByClassName("close1")) {
    bnoDel.addEventListener("click", noDel);
}



//кнопка добавления
//открытие
function showAdd() {
    document.getElementById("windowAdd").style.display = "block";
}
for (let buttonAdd of document.getElementsByClassName("buttonAdd1")) {
    buttonAdd.addEventListener("click", showAdd);
}

//закрытие
function noAdd() {
    document.getElementById("windowAdd").style.display = "none";
}
for (let bnoAdd of document.getElementsByClassName("close")) {
    bnoAdd.addEventListener("click", noAdd);
}

//для кнопки "добавить" в форме делаем событие по клику
document.getElementById("subAdd").addEventListener("click", addStudent);

function addStudent() {
    const student = getData(document.getElementById("addForm")); //получаем данные из формы
    array.push(student);
    document.getElementById("windowAdd").style.display = "none";
    document.getElementById("addForm").reset();
    printStudent(student); //добавляем студента в таблицу
}

function printStudent(student) {
    document.getElementById("tableName").innerHTML += template(student); //добавляем студента в конец таблицы
    document.querySelectorAll(".buttonEdit").forEach(btn => { //снова на все кнопки "изменить" назначаем действие по клику
        changeHandler(btn);
    });
    document.querySelectorAll(".buttonDel").forEach(btn => { //снова на все кнопки "удалить" назначаем действие по клику
        deleteHandler(btn);
    });
}

function printAllStudents() {
    document.getElementById("tableName").innerHTML = '<tr class="tr1">\n' +
        '        <th class="th11">Студент</th>\n' +
        '        <th class="th11">Группа</th>\n' +
        '        <th class="th11">Дата рождения</th>\n' +
        '        <th class="th11">Номер телефона</th>\n' +
        '        <th class="th11">Изменить</th>\n' +
        '        <th class="th11">Удалить</th>\n' +
        '    </tr>';
    for (let student of array) {
        document.getElementById("tableName").innerHTML += template(student); //выводим список студентов
    }
    document.querySelectorAll(".buttonEdit").forEach(btn => { //на все кнопки "изменить" назначаем действие по клику
        changeHandler(btn);
    });
    document.querySelectorAll(".buttonDel").forEach(btn => { //на все кнопки "удалить" назначаем действие по клику
        deleteHandler(btn);
    });
}

function getData(form) {
    const name = form.querySelector(".name").value;
    const group = form.querySelector(".group").value;
    const data = form.querySelector(".data").value;
    const phone = form.querySelector(".phone").value;

    return {name, group, data, phone}; //возвращаем объект
}


//кнопка изменения
//открыть
document.querySelectorAll(".buttonEdit").forEach(btn => { //на все кнопки "изменить" назначаем действие по клику
    changeHandler(btn);
})

let currentRow = null;
let nameChange = null;
function changeHandler(btn){
    btn.addEventListener("click", (evt)=>{
        document.getElementById("windowChange").style.display = "block";
        currentRow = evt.target.parentElement.parentElement; //получаем текущую строку
        nameChange = currentRow.querySelector(".name").innerHTML; // определяем имя студента из данной строки
        let formInput = document.querySelector(".windowChange").querySelectorAll("input");
        for(let i = 0; i < currentRow.children.length - 2; i++) { //проходимся по всем ячейкам строки и данные из них помещаем в форму
            formInput[i].value = currentRow.children[i].textContent; // в каждое поле формы вносим соответствующее значение ячейки из строки
        }
    })
}

//для кнопки "изменить" в форме делаем событие по клику
document.getElementById("subChange").addEventListener("click", changeStudent);

function changeStudent() {
    const student = getData(document.getElementById("changeForm")); //получаем данные из формы
    for (let i = 0; i < array.length; i++) {
        if(array[i].name === nameChange) { //меняем данные студента на измененные
            array[i] = student;
        }
    }
    document.getElementById("windowChange").style.display = "none";
    document.getElementById("changeForm").reset(); //сбрасываем форму
    printAllStudents(); //выводим список всех студентов
}


//закрытие
function noEdit() {
    document.getElementById("windowChange").style.display = "none";
}

for (let bnoEdit of document.getElementsByClassName("close")) {
    bnoEdit.addEventListener("click", noEdit);
}
*/

const data = new function () {
    this.create = (obj, callback) => util.ajax({method: "POST", body: JSON.stringify(obj)}, callback);

    this.get = (id, callback) => util.ajax({method: "GET", path: "/" + id}, callback);
    this.getAll = (callback) => util.ajax({method: "GET"}, callback);

    this.update = (obj, callback) => util.ajax({method: "PUT", body: JSON.stringify(obj)}, callback);

    this.delete = (id, callback) => util.ajax({method: "DELETE", path: "/" + id}, callback);
};

function changeDataFormat(data) {
    if (data.indexOf('.') === -1) {
        return data.split("-").reverse().join(".");
    } else {
        return data.split(".").reverse().join("-");
    }
}

const util = new function () {
    this.ajax = (params, callback) => {
        let url = "";
        if (params.path !== undefined) {
            url = params.path;
            delete params.path;
        }
        fetch("/student" + url, params).then(data => data.json()).then(callback);
    }
    this.q = selector => document.querySelectorAll(selector);
    this.id = id => document.getElementById(id);
    this.listen = function (elem, type, callback) {
        elem.addEventListener(type, callback);
    };
};

const student = new function () {
    this.submit = (event) => {
        event.preventDefault()
        let st = {
            name: util.q('.name')[0].value,
            group: util.q('.group')[0].value,
            data: changeDataFormat(util.q('.data')[0].value),
            phone: util.q('.phone')[0].value,
        };
        if (activeAdd) {
            data.create(st, () => {this.render()});
        } else {
            st.Id = activeStudent;
            data.update(st, () => {this.render()});
        }
        util.q('.windowAdd1')[0].style.display = 'none';
        this.render()
    };

    let activeAdd = null;
    let activeStudent = null;

    const remove = function () {
        activeStudent = this.dataset.id;
        data.get(activeStudent, () => {
            util.q('.windowDel')[0].style.display = 'block';
        });
    };

    const edit = function () {
        if (this.dataset) {
            activeStudent = this.dataset.id;
            activeAdd = false;
        }
        if (activeAdd) {
            util.q('.subAdd')[0].innerHTML = 'Добавить';
            util.q('.addForm')[0].reset();
        } else {
            util.q('.subAdd')[0].innerHTML = 'Изменить';

            data.get(activeStudent, (obj) => {
                util.q('.name')[0].value = obj.name;
                util.q('.group')[0].value = obj.group;
                util.q('.data')[0].value = changeDataFormat(obj.data);
                util.q('.phone')[0].value = obj.phone;
            });
        }
        util.q('.windowAdd1')[0].style.display = 'block';
    }
    this.render = () => {
        let str = '';
        data.getAll((resp)=> {
            resp.forEach(obj => {
                let tmp = tpl;
                for (let k in obj) {
                    tmp = tmp.replaceAll(`{` + k + '}', obj[k]);
                }
                str += tmp;
            });
            util.q('.table')[0].innerHTML = str;
            util.q('.buttonDel').forEach(btn => {
                btn.addEventListener('click', remove);
            });
            util.q('.buttonEdit').forEach(btn => {
                btn.addEventListener('click', edit);
            });
            util.q('.closeWindow').forEach(elem => {
                elem.addEventListener('click', () => {
                    elem.parentElement.style.display = 'none';
                });
            });
        });
    };

    let tpl = `<tr>
                    <td>{name}</td>
                    <td>{group}</td>
                    <td>{data}</td>
                    <td>{phone}</td>
                    <td><button class="buttonEdit" data-id={Id}>Изменить</button></td>
                    <td><button class="buttonDel" data-id={Id}>Удалить</button></td>
                </tr>`;

    const init = () => {
        this.render();
        util.q('.buttonAdd')[0].addEventListener('click', () => {
            activeAdd = true;
            edit();
        })
        util.q('.buttond')[0].addEventListener('click', (event) => {
            event.preventDefault();
            data.delete(activeStudent, () => {this.render()});
            util.q('.windowDel')[0].style.display = 'none';
        })
    }

    util.listen(util.q('.addForm')[0], 'submit', (event) => {
        this.submit(event);
    })

    window.addEventListener('load', init);
}