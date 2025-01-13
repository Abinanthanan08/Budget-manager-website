let totalbudget=0;
let totalexpense=0;

function myfun(){
    const a=parseInt(document.getElementById("budget").value, 10);

    if(!isNaN(a) && a>0){
        totalbudget=a;
        summary();
    }

    else{
        document.getElementById("demo").textContent="please enter a valid amount";
    }
}


function expen(){

    const b=document.getElementById("expense").value.trim()
    const c=parseInt(document.getElementById("amount").value, 10);
    if(!isNaN(c) && c>0 && b!==""){
        totalexpense+=c;
        summary();
    }

    else{
        document.getElementById("demo1").textContent="please enter a valid amount";
    }
}


function summary(){

    const balance=totalbudget-totalexpense;

    document.getElementById("demo").textContent=`₹ ${totalbudget}`;
    document.getElementById("demo1").textContent=`₹ ${totalexpense}`;
    document.getElementById("demo2").textContent=`₹ ${balance}`;

}


function addexpenseToTable(){
    const expensename=document.getElementById("expense").value.trim()
    const expenseamount=parseInt(document.getElementById("amount").value, 10);

    if(!isNaN(expenseamount) && expenseamount>0 && expensename!==""){

        const tablebody=document.getElementById("table_body");

        const row=document.createElement("tr");

        row.innerHTML=`
        <td>${expensename}</td>
        <td>${expenseamount}</td>
        
        <td>   
        <button onclick="editRow(this)">✏️</button>
        <button onclick="deleteRow(this)">🗑️</button>
        </td>`;

        tablebody.appendChild(row);

        document.getElementById("expense").value=""
        document.getElementById("amount").value=""

    }
    else{
        alert("please enter the valid expense details.")
    }

}

function editRow(button){
    const row=button.parentElement.parentElement;
    const expensename=row.cells[0].innerText;
    const expenseamount=row.cells[1].innerText.replace("₹ ","");
    
    const newexpensename=prompt(expensename);
    const newexpenseamount=prompt(expenseamount);

    if(!isNaN(newexpenseamount) && newexpenseamount >0 && newexpensename ){
        row.cells[0].innerText=newexpensename.trim();
        row.cells[1].innerText=`₹ ${parseInt(newexpenseamount,10)}`;
    }
    else{
        alert("Invalid input.please Try again later.")
    }
}


function deleteRow(button){
    const row=button.parentElement.parentElement;
    row.remove();
}





