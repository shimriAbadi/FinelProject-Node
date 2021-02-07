async function getAll(){
    let body=await (await(fetch("/api/universities"))).json();
    let strOption=``;
    let strTable=`
    <tr>
        <th>domain</th>
        <th>web_page</th>
        <th>name</th>
        <th>counter</th>
    </tr>
    `;

    for(let Uni of body){
        strOption+=`<option>${Uni.name}</option>`;
        strTable+=`
        <tr>
            <td>${Uni.domain}</td>
            <td>${Uni.web_page}</td>
            <td>${Uni.name}</td>
            <td>${Uni.counter}</td>

        </tr>
        `;
    }

    document.getElementById("res").innerHTML=strTable;  

    document.getElementById("productList").innerHTML=strOption; 
       
}

async function addUniversity(){

    let Domain=document.getElementById("newDomain").value;
    let WebPage=document.getElementById("newWeb_page").value;
    let Name=document.getElementById("newName").value;

    let initParam= { 
        "method":"POST",
         headers: {"Content-Type": "application/json"},
         body: `{"domain":"${Domain}","web_page":${WebPage},"name":${Name}}`
    };

    let res=await (fetch(`/api/add`,initParam));
    console.log(res.status);

    getAll();

}