

// variable to hold number of items to display per page
const itemPerPage = 9;

/*
   showPage function
   This function will create and insert the elements needed to display a "page" of nine students
*/
function showPage(arrayStudentsObject, page) {

   const startIndex = (page * itemPerPage) - itemPerPage;
   const endIndex = page * itemPerPage;


   const studentList = document.querySelector(".student-list")
   studentList.innerHTML = ""

   for (let i = 0; i < arrayStudentsObject.length; i++) {

      if (i >= startIndex && i < endIndex) {

         let item = arrayStudentsObject[i];
         let html = `<li class="student-item cf">
                        <div class="student-details">
                        <img class="avatar" src="${item.picture.thumbnail}" alt="Profile Picture">
                        <h3>${item.name.first} ${item.name.last}</h3>
                        <span class="email">${item.email}</span>
                        </div>
                        <div class="joined-details">
                        <span class="date">${item.registered.date}</span>
                        </div>
                     </li>`

         studentList.insertAdjacentHTML("beforeend", html)

      }

   }
}

/*
   addPagination function
   This function will create and insert the pagination buttons
   will accept one parameter of array of student data
*/
function addPagination(arrayStudentsObject) {

   const numOfPages = Math.ceil(arrayStudentsObject.length / itemPerPage)
   const linkList = document.querySelector(".link-list")

   linkList.innerHTML = "";

   for (let i = 1; i <= numOfPages; i++) {


      let button = `<li>
                     <button type="button">${i}</button>
                  </li>`
      linkList.insertAdjacentHTML("beforeend", button)

      linkList.querySelector('BUTTON').className = "active"
   }


   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
         linkList.querySelector('.active').className = ""
         e.target.className = "active"
         let pageNum = e.target.textContent
         
         /* function call to show the needed students data on the page
         */
         showPage(data, pageNum)
      }

   })

}

/* function call to show the firts page of students data 
*/
showPage(data, 1)

/* function call to add pagination button to the page
*/
addPagination(data)


