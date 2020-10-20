const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const clock = document.querySelector('.clock');
const toggleButton = document.querySelector('.toggle');

const generateTemplate = todo => {

    const html = `
      <li class="list-group-item d-flex justify-content-between align-items-center">
      <span class="strikeable">${todo}</span>
      <div class="actions">
                <i class="far fa-trash-alt delete"></i>
      </div>
      </li>`;

      list.innerHTML += html;
};


addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length)
    {
        generateTemplate(todo);
        addForm.reset();
    }
   


})



//strike through 


list.addEventListener('click', e =>{
    if (e.target.classList.contains('strikeable'))
    {
        e.target.classList.toggle('strike');
    }
})



//delete todos

list.addEventListener('click', e =>{
    if (e.target.classList.contains('delete'))
    {
        e.target.parentElement.parentElement.remove();
    }
})

//search todos 

const filterTodos = (term) =>
{
    Array.from(list.children)
     .filter((todo) => !todo.textContent.toLowerCase().includes(term))
     .forEach( todo=> {
         todo.classList.add('filter');
        todo.classList.remove('d-flex');            
    });

     Array.from(list.children)
     .filter( todo  => todo.textContent.toLowerCase().includes(term))
     .forEach( todo => {
         todo.classList.remove('filter');
         todo.classList.add('d-flex');
    });
};



search.addEventListener('keyup', ()=>{
    const term = search.value.trim().toLowerCase();
    filterTodos(term);

})


//mini-digital clock feature 

const tick = () =>
{
 const now = new Date();
 const h = dateFns.format(now, 'HH');
 const m = dateFns.format(now, 'mm');
 const s = dateFns.format(now, 'ss');
 const M = dateFns.format(now, 'MMM');
 const D = now.getDate();

 const html = `
 <div>
 <span class="period">${h}</span> :
 <span class="period">${m}</span> :
 <span class="period">${s}</span> 
  </div>
  <div> 
  <span class="period">${D} ${M}</span> 
  </div>
 
 `;
 clock.innerHTML = html;
};

setInterval(tick, 1000);


//theme 

toggleButton.addEventListener('click',()    =>
{   
    document.getElementById('heading').classList.toggle('light-text');
    document.getElementById('add-label').classList.toggle('light-text');
    document.body.classList.toggle('light-bg');
    toggleButton.classList.toggle('light-button');
    clock.classList.toggle('light-text');
})