console.log("Welcome to node project!");
const url="http://localhost:3000/fruits";
// Get Method Example
fetch(url)
    .then(data=>{
        return data.json();
    })
    .then(result=>{
        console.log(result);
        result.forEach(element => {
           console.log( element.name );
        });
    });

   // Collect All Form Data

   let clearFrom=()=>{
    document.querySelector("#addForm").reset();
};

var data_header={};
   let collectData=()=>{
    var data= {"id":document.querySelector("#id").value,
    "name":document.querySelector("#name").value,
    "price":document.querySelector("#price").value,
    "qty":document.querySelector("#qty").value};

// POST Method Header Example
   data_header={
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
     };
     clearFrom();
   };


   
   

    let createFruit=()=>{
        collectData();
      fetch(url,data_header)
      .then(response=>{
          if(!response.ok){
              throw Error(response.status)
          }
          return response.json();
      }).then((data)=>{
          console.log(data);
      })
    }


    let btn=document.querySelector("#btn-test");

    btn.addEventListener("click", createFruit);
