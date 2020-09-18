var friend=[{
    name:"Raja",
    age:"25",
    city:"mumbai",
    salary:"15000",
    company:"TCS",


},
{
    name:"Pappu",
    age:"22",
    city:"delhi",
    salary:"17000",
    company:"Infosys,"
},
{
    name:"Pankaj",
    age:"21",
    city:"patna",
    salary:"20000",
    company:"Amazon",

},
]
function display(supe)
{
    var cou="";
    //var sno=1;

    supe.forEach(function(friend,index){
        var fire=`<tr>
    <td>${index+1}</td>
    <td>${friend.name}</td>
    <td>${friend.age}</td>
    <td>${friend.city}</td>
    <td>${friend.salary}</td>
    <td>${friend.company}</td>
    <td><button onclick="del(${index})">Delete</button></td>
    </tr>`;
    cou+=fire;
    //sno++;

    });
    
     //   console.log("working");
    
    document.getElementById("surya").innerHTML=cou;
    

}
display(friend);
function add(event)
{
    
    var frnd={};
    event.preventDefault();
    var a=document.getElementById("name").value;
    var b=document.getElementById("age").value;
    var c=document.getElementById("city").value;
    var d=document.getElementById("sal").value;
    var e=document.getElementById("com").value;
    //console.log(a,b,c);
    frnd.name=a;
    frnd.age=Number(b);
    frnd.city=c;
    frnd.salary=Number(d);
    frnd.company=e;
    friend.push(frnd);
    display(friend);
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("city").value="";
    document.getElementById("sal").value="";   
    document.getElementById("com").value="";
}

function search()
{
    var s=document.getElementById("dhoni").value;
    //console.log(s);
    var data=friend.filter(function(frnd){
        if(frnd.name.toUpperCase().indexOf(s.toUpperCase())!=-1)
        {
            return frnd.name.toUpperCase().indexOf(s.toUpperCase())!=-1;
        }
        else if(frnd.city.toUpperCase().indexOf(s.toUpperCase())!=-1)
        {
            return frnd.city.toUpperCase().indexOf(s.toUpperCase())!=-1;
        }
    })
    
    display(data);
}

function del(index){
    friend.splice(index,1);
    display(friend);
}