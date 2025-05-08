const BASE_URL = 'http://localhost:7788';

const getData = (url) => {
    return fetch(BASE_URL + url).then(response => response.json())
}

const addWorkIntoTableRows = (jobs) => {
    let tableBody = document.querySelector('#table-rows');

    tableBody.innerHTML = jobs.map((jobs)  => {
   return `
          <tr>
               <td>${jobs.date}</td>
               <td>${jobs.company}</td>
               <td>${jobs.title}</td>
               <td>${jobs.description}</td>
               <td>${jobs.location}</td>
          </tr>
        `
    }).join('');
}


    


window.addEventListener('DOMContentLoaded', async () => {
    let workExp = await getData('/work-experience');
    addWorkIntoTableRows(workExp);
});

