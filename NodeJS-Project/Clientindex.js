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

onload=()=>{
    getAll()
}