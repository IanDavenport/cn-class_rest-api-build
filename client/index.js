

const getBtn = document.getElementById('getData');
const deleteBtn = document.getElementById('deleteData');


getBtn.addEventListener('click', async() => {
    let data = await fetch('http://localhost:3000/user/1');

    console.log(await data.json());
});



deleteBtn.addEventListener('click', async() => {
    let data = await fetch('http://localhost:3000/user/2', {
        method: 'delete'
    });
    console.log(await data.json());
});







