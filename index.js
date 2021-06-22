//step 2 :- Accessing the parent (i.e row) element that holds all cards inside it.
//          const taskContainer = document.getElementByClassName(".task__container");
//          -> by this we get array of cards elements but we want to get element 
//             directly , so we can do that using loops but there is sort method
//             is, instead of <__.getElementByClassName__> use <__.querySelector__>.

// Note:- 'dot' in querySelector 's ("class")
const taskContainer = document.querySelector(".task__container");


//step 1 :- storing user input in a variable directly using -> .value
//          and geting user input using getElementById("<__id__>")
const saveChanges  = () => {
    const taskData = {   // js object
        id: `${Date.now()}`,
        imageUrl : document.getElementById("imageurl").value,
        taskTitle: document.getElementById("tasktitle").value,
        taskType: document.getElementById("taskType").value,
        taskDescription: document.getElementById("taskDescription").value,
    };

    //step 3 :- create a constant that stores the HTML code along with getting 
    //          replaced by input (using template literals) given by user that are stored in Step 1.
    const newCard = `
    <div class="col-md-6 col-lg-4" id=${taskData.id}>
    <div class="card">
      <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-primary"><i class="fas fa-edit"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
      </div>
      <img 
      src=${taskData.imageUrl} 
      class="card-img-top"
       alt="...">
      <div class="card-body">
        <h5 class="card-title">${taskData.taskTitle}</h5>
        <p class="card-text">
        ${taskData.taskDescription}
        </p>
        <a href="#" class="btn btn-primary">${taskData.taskType}</a>
      </div>
      <div class="card-footer ">
        <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
      </div>
    </div>
  </div>
  `;

  //step 4:- inserting data to parent element using 
  //         insertAdjacentHTML( <__where to insert__>, <__what to insert__> )
  taskContainer.insertAdjacentHTML("beforeend",newCard);

};