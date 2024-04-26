let name = document.getElementById("name");
let id = document.getElementById("id");
let year = document.getElementById("year");
let email = document.getElementById("email");
let submit = document.getElementById("submit");
let mod = "CREATE";
let temp;
let datapro;

if (localStorage.students != null) {
  datapro = JSON.parse(localStorage.students);
} else {
  datapro = [];
}

function clearData() {
  name.value = "";
  id.value = "";
  year.value = "";
  email.value = "";
}

function showData() {
  let table = "";
  for (let i = 0; i < datapro.length; i++) {
    table += ` 
          <br>
                <tr>
                <td>${i + 1}</td>
                <td>${datapro[i].name}</td>
                <td>${datapro[i].id}</td>
                <td>${datapro[i].year}</td>
                <td>${datapro[i].email}</td>
                <td><button class="btn3" onclick="updateData(${i})" style="margin-left:1%;">UPDATE</button></td>
                <td><button class="btn3" onclick="deleteData(${i})">DELETE</button></td>
                </tr>
                `;
  }
  document.getElementById("tbody").innerHTML = table;
  let btndeleteAll = document.getElementById("deleteAll");
  if (datapro.length > 0) {
    btndeleteAll.innerHTML = `<button onclick="deleteAll()"class="btn2">DELETE ALL (${datapro.length})</button>`;
  } else {
    btndeleteAll.innerHTML = "";
  }
}

function deleteData(i) {
  datapro.splice(i, 1);
  localStorage.students = JSON.stringify(datapro);
  showData();
}

function deleteAll() {
  localStorage.clear();
  datapro.splice(0);
  showData();
}

function updateData(i) {
  name.value = datapro[i].name;
  id.value = datapro[i].id;
  year.value = datapro[i].year;
  email.value = datapro[i].email;
  submit.innerHTML = "UPDATE";
  mod = "UPDATE";
  temp = i;
  scroll({ top: 0, behavior: "smooth" });
}

let searchMood = "name";
function getsearchMood(id) {
  let search = document.getElementById("search");
  if (id == "seaname") {
    searchMood = "name";
    search.placeholder = "    SEARCH BY NAME";
  } else {
    searchMood = "id";
    search.placeholder = "    SEARCH BY ID";
  }
  search.focus();
}

function searchData(value) {
  let table = "";
  if (searchMood == "name") {
    for (let i = 0; i < datapro.length; i++) {
      if (datapro[i].name.includes(value.toLowerCase())) {
        table += ` 
              <br>
                <tr>
                <td>${i + 1}</td>
                <td>${datapro[i].name}</td>
                <td>${datapro[i].id}</td>
                <td>${datapro[i].year}</td>
                <td>${datapro[i].email}</td>
                <td><button class="btn3" onclick="updateData(${i})">UPDATE</button></td>
                <td><button class="btn3" onclick="deleteData(${i})">DELETE</button></td>
                </tr>
                `;
      }
    }
  } else {
    for (let i = 0; i < datapro.length; i++) {
      if (datapro[i].id.includes(value)) {
        table += ` 
              <br>
                <tr>
                <td>${i + 1}</td>
                <td>${datapro[i].name}</td>
                <td>${datapro[i].id}</td>
                <td>${datapro[i].year}</td>
                <td>${datapro[i].email}</td>
                <td><button class="btn3" onclick="updateData(${i})">UPDATE</button></td>
                <td><button class="btn3" onclick="deleteData(${i})">DELETE</button></td>
                </tr>
                `;
      }
    }
  }
  document.getElementById("tbody").innerHTML = table;
}

submit.onclick = function () {
  let newpro = {
    name: name.value.toLowerCase(),
    id: id.value,
    year: year.value,
    email: email.value,
  };

  if (mod == "CREATE") {
    datapro.push(newpro);
  } else {
    datapro[temp] = newpro;
    mod = "CREATE";
    submit.innerHTML = "CREATE";
  }

  localStorage.setItem("students", JSON.stringify(datapro));
  clearData();
  showData();
};

showData();
