let emps=[
    {'eid':'abcd01','fname':'Vasu','lname':'Sam','email':'vasupavi@gmail.com','contact':9753108642,'Gender':'Female','Active':'Yes'},
    {'eid':'abcd01','fname':'Supra','lname':'Sam','email':'suprasam@gmail.com','contact':9753108642,'Gender':'Female','Active':'No'},
    {'eid':'abcd01','fname':'Chandu','lname':'Sam','email':'chadusam@gmail.com','contact':9753108642,'Gender':'Female','Active':'Yes'},
    {'eid':'abcd01','fname':'Lucky','lname':'Sam','email':'luckysam@gmail.com','contact':9753108642,'Gender':'Female','Active':'No'},
    {'eid':'abcd01','fname':'Ram','lname':'Sam','email':'ramsam@gmail.com','contact':9753108642,'Gender':'Male','Active':'Yes'},
    {'eid':'abcd01','fname':'Sam','lname':'Sam','email':'sampavi@gmail.com','contact':9753108642,'Gender':'Female','Active':'Yes'},
    {'eid':'abcd01','fname':'Pavi','lname':'Sam','email':'pavisam@gmail.com','contact':9753108642,'Gender':'Female','Active':'No'},
    {'eid':'abcd01','fname':'King','lname':'Sam','email':'kingsam@gmail.com','contact':9753108642,'Gender':'Male','Active':'Yes'},
    {'eid':'abcd01','fname':'Chitti','lname':'Sam','email':'chittigadu@gmail.com','contact':9753108642,'Gender':'Female','Active':'Yes'},
    {'eid':'abcd01','fname':'Hem','lname':'Reddy','email':'hemreddy@gmail.com','contact':9753108642,'Gender':'Male','Active':'Yes'},
];


let allemps=document.getElementById('allemp');
let maleemps=document.getElementById('maleemp');
let femaleemps=document.getElementById('femaleemp');
let remove=document.getElementById('clear')
let tbodytag=document.getElementById('tbody');


function addemp(alll){
    var rows=``;
    for (let emp of alll){
        rows+=
             `<tr>
              <td>${emp.eid}</td>
              <td>${emp.fname}</td>
              <td>${emp.lname}</td>
              <td>${emp.email}</td>
              <td>${emp.contact}</td>
              <td>${emp.Gender}</td>
              <td>${emp.Active}</td>
              </tr>`;
        }
        tbodytag.innerHTML=rows; 
}


function addfemaleemp(){
    var fmrows=``;
    for(let emp of emps){
        if(emp.Gender=='Female'){
            fmrows+= `<tr>
            <td>${emp.eid}</td>
            <td>${emp.fname}</td>
            <td>${emp.lname}</td>
            <td>${emp.email}</td>
            <td>${emp.contact}</td>
            <td>${emp.Gender}</td>
            <td>${emp.Active}</td>
            </tr>`;
        }
    }
    tbodytag.innerHTML=fmrows;
}



function addmaleemp(){
    var mrows=``;
    for(let emp of emps){
        if(emp.Gender=='Male'){
            mrows+=`<tr>
            <td>${emp.eid}</td>
            <td>${emp.fname}</td>
            <td>${emp.lname}</td>
            <td>${emp.email}</td>
            <td>${emp.contact}</td>
            <td>${emp.Gender}</td>
            <td>${emp.Active}</td>
            </tr>`;
        }
    }
    tbodytag.innerHTML=mrows;
}



allemps.addEventListener('click',function(){
    addemp(emps);
})

femaleemps.addEventListener('click',function(){
    addfemaleemp();
})

maleemps.addEventListener('click',function(){
    addmaleemp();
})

remove.addEventListener('click',function(){
        if (tbodytag){
            tbodytag.innerText=``;
        }
        else{
            tbodytag.innerHTML='<tr><td>Already Cleared</td></tr>'
        }
})


// Search-Box Code

let emname=document.getElementById('search');
console.log(emname.innerText);
emname.addEventListener('keyup',()=>{
    var eval=emname.value;
    console.log(eval);
    let employeenames=searchemp(eval,emps);
    addemp(employeenames);
    
});

function searchemp(eval,emps){
    eval=eval
    let filteredEmps=[];
    for(let e of emps){
        oldname=e.fname
        if(oldname.includes(eval)){
            filteredEmps.push(e)
        }
    }
    console.log(filteredEmps);
    return filteredEmps;
}


