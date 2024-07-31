// الحصول على العناصر من الـ DOM
let addform = document.querySelector("#add-book");
let input = document.querySelector(".hola");
let addbtn = document.querySelector("button");
let unorder = document.querySelector("#book-list-ul");
let cheko = document.querySelector("#hide");

// إضافة كتاب جديد
addbtn.addEventListener("click", function(e) {
    e.preventDefault();
    let uservalue = input.value;
    if (uservalue != "") {
        let lst = document.createElement("li");
        let spn = document.createElement("span");
        let del = document.createElement("span");

        lst.appendChild(spn);
        lst.appendChild(del);

        spn.classList.add("name");
        del.classList.add("delete");

        spn.textContent = uservalue;
        del.textContent = "delete";

        unorder.appendChild(lst);
    }
    input.value = "";
});

// حذف كتاب
unorder.addEventListener("click", function(e) {
    if (e.target.className == "delete") {
        let listparent = e.target.parentElement;
        unorder.removeChild(listparent);
    }
});

// إخفاء/إظهار الكتب
cheko.addEventListener("change", function(e) {
    if (cheko.checked) {
        unorder.style.display = "none";
    } else {
        unorder.style.display = "block";
    }
});

// البحث عن الكتب
function searchBooks() {
    let searchQuery = document.getElementById("searchInput").value.toLowerCase();
    let bookItems = document.querySelectorAll("#book-list-ul li");
    let searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "";

    bookItems.forEach(function(bookItem) {
        let bookName = bookItem.querySelector(".name").textContent.toLowerCase();
        if (bookName.includes(searchQuery)) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(bookItem.querySelector(".name").textContent));
            searchResults.appendChild(li);
        }
    });
}

