 var rIndex;
var form=document.getElementById('addForm');
var table=document.getElementById("table");
var filter=document.getElementById('filter');
var edit=document.getElementById('edit');
//insert text
form.addEventListener('submit', addItem);
//update text
edit.addEventListener('click', addEdit);

//delete text
table.addEventListener('click', removeItem);
//srache
filter.addEventListener('keyup', filterItems);
function addItem(e){

	e.preventDefault();
		var newItem=document.getElementById('item').value;
		for(var i=0;i<1;i++){
			var li=document.createElement('tr');
			table.appendChild(li);
			for(var j=0;j<3;j++){
				if(j==0){
				var td=document.createElement('td');
				
	td.appendChild(document.createTextNode(newItem));

	li.appendChild(td);
		
}else if(j==1){
	var td1=document.createElement('td');
	var button1=document.createElement('button');
	button1.className='btn btn-danger btn-sm float-right ubdate';
	button1.appendChild(document.createTextNode('add'));
	td1.appendChild(button1);
	li.appendChild(td1);
	

}else{
	var td1=document.createElement('td');
	var button1=document.createElement('button');
	button1.className='btn btn-danger btn-sm float-right delete';
	button1.appendChild(document.createTextNode('x'));
	td1.appendChild(button1);
	li.appendChild(td1);

}
				
	
			}
	
		}
	selectedRowToInput();
}
function removeItem(e) {
	if (e.target.classList.contains('delete')) {
		if (confirm('are you sure')) {
	document.getElementById("table").deleteRow(rIndex);
	
	}}

}
function filterItems(e){

	var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("filter");
  filter = input.value.toUpperCase();
  
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
	
	
}

            
           
            function selectedRowToInput()
            {
                 for(var i = 0; i < table.rows.length; i++){
                 
                 table.rows[i].onclick = function(){
                 	rIndex = this.rowIndex;
                 
                      document.getElementById("user").value = this.cells[0].innerHTML;
                 };
                 
             }}
             selectedRowToInput();

table.addEventListener('click', function (e) {

	if (e.target.classList.contains('update')) {
	document.querySelector(".popup").style.display="flex";
	
}
});

document.getElementById("close").addEventListener('click', function () {
	document.querySelector(".popup").style.display="none";
});


function addEdit () {
	
var username = document.getElementById("user").value;   

 table.rows[rIndex].cells[0].innerHTML = username;
                

                
      
}