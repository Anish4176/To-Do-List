
let all_task = document.getElementById('all-task');
let save = document.getElementById('save')
let title = document.getElementById('title');
let task = document.getElementById('task');


//adding event listener
save.addEventListener('click', (e) => {
   e.preventDefault();
   let savedata = () => {

      localStorage.setItem(titledocs, each_task.placeholder);
   }

   let titledocs = title.value;
   let taskdocs = task.value;
   if (!taskdocs || !titledocs) {
      alert('Please Write title and task')
      return;
   }
   let each_content = document.createElement('div');
   each_content.classList.add("input-group", "my-3")
   all_task.appendChild(each_content);

   let each_task = document.createElement('input');
   each_task.classList.add("form-control");
   each_task.setAttribute('readonly', 'true');
   each_content.prepend(each_task);

   let each_edit = document.createElement('button')
   each_edit.classList.add("btn", "btn-edit", "btn-outline-secondary")
   each_edit.innerHTML = 'Edit'
   each_content.appendChild(each_edit);

   let each_delete = document.createElement('button')
   each_delete.classList.add("btn", "btn-delete", "btn-outline-secondary")
   each_delete.innerHTML = 'Delete'
   each_content.appendChild(each_delete);

   each_task.placeholder = taskdocs
   savedata();


   each_content.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.classList.contains("btn-delete")) {
         e.target.parentElement.remove();
         localStorage.removeItem(titledocs)
      }
      else if (e.target.classList.contains("btn-edit")) {
         if (each_edit.innerHTML == 'Edit') {
            each_task.removeAttribute("readonly", 'true');
            each_edit.innerHTML = 'Save'

         }
         else if (each_edit.innerHTML == 'Save') {
            each_task.setAttribute('readonly', 'true');
            each_edit.innerHTML = 'Edit'
            console.log(titledocs)
            each_task.placeholder = each_task.value
            localStorage.setItem(titledocs, each_task.placeholder);
         }
      }

   })

   title.value = ''
   task.value = ''
})

// console.log(localStorage.key)
let showlist = () => {
   for (let i = 0; i < localStorage.length; i++) {

      let each_content = document.createElement('div');
      each_content.classList.add("input-group", "my-3")
      all_task.appendChild(each_content);

      let each_task = document.createElement('input');
      each_task.classList.add("form-control");
      each_task.setAttribute('readonly', 'true');
      each_content.prepend(each_task);

      each_task.placeholder = localStorage.getItem(localStorage.key(i))

      let each_edit = document.createElement('button')
      each_edit.classList.add("btn", "btn-edit", "btn-outline-secondary")
      each_edit.innerHTML = 'Edit'
      each_content.appendChild(each_edit);

      let each_delete = document.createElement('button')
      each_delete.classList.add("btn", "btn-delete", "btn-outline-secondary")
      each_delete.innerHTML = 'Delete'
      each_content.appendChild(each_delete);

      // each_task.placeholder = taskdocs
      // savedata();
      console.log(each_task.placeholder)

      each_content.addEventListener('click', (e) => {
         e.preventDefault();
         if (e.target.classList.contains("btn-delete")) {
            let a = e.target.parentElement
            let value = a.firstElementChild.placeholder
            for (let j = 0; j < localStorage.length; j++) {
               if ((localStorage[localStorage.key(j)]) == value) {
                  localStorage.removeItem((localStorage.key(j)))
               }
            }
            e.target.parentElement.remove();

         }
         else if (e.target.classList.contains("btn-edit")) {
            if (each_edit.innerHTML == 'Edit') {
               each_task.removeAttribute("readonly", 'true');
               each_edit.innerHTML = 'Save'

            }
            else if (each_edit.innerHTML == 'Save') {
               each_task.setAttribute('readonly', 'true');
               each_edit.innerHTML = 'Edit'
               let a = e.target.parentElement
               let value = a.firstElementChild.placeholder

               // console.log(each_task.value)
               for (let j = 0; j < localStorage.length; j++) {
                  if ((localStorage[localStorage.key(j)]) == value) {
                     value = each_task.value
                     localStorage.setItem((localStorage.key(j)), value)
                  }

               }

            }
         }

      })

      title.value = ''
      task.value = ''

   }
}
showlist();


