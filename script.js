const formEle = document.querySelector('form');

formEle.addEventListener('submit',(e)=>{
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const marks = document.querySelector('#marks').value;
    const Sno = document.querySelectorAll('tbody tr').length + 1;

    let newTr = document.createElement('tr');

    newTr.innerHTML = `
        <td>${Sno}</td>
        <td>${name}</td>
        <td>${marks}</td>
    `;

    if(name == '' || marks == ''){
        alert('Please fill the Name and Marks properly 🚫');

    }else{
        const tBody = document.querySelector('tbody');
        tBody.appendChild(newTr);
    }
    formEle.reset();
})