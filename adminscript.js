let ip="http://127.0.0.1:3000";
function main(){
    fetch("http://127.0.0.1:3000/admindata").then((res)=>{
        return res.json();
    })
    .then((data)=>{
        data.forEach((chunk) => {
            console.log(`${chunk.name}, ${chunk.contact}`)

            addrow(chunk.name,chunk.contact,chunk.email,chunk.service,chunk.address,chunk.status)
        });
    })
}   

function addrow(name,contact,email,service,address,status){
    let tbody=document.querySelector("#tbody");
    let tr=document.createElement("tr");
    let td1=document.createElement("td")
    td1.innerText=name;
    tr.append(td1);
    let td2=document.createElement("td")
    td2.innerText=contact;
    tr.append(td2);
    let td3=document.createElement("td")
    td3.innerText=email;
    tr.append(td3);
    let td4=document.createElement("td")
    td4.innerText=service;
    tr.append(td4);
    let td5=document.createElement("td")
    td5.innerText=address;
    tr.append(td5);
    let td6=document.createElement("td")
    td6.innerText=status;
    tr.append(td6);
    tbody.append(tr);
}