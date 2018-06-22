
function select_hospital()
{
    document.getElementById('select_hospitals').disabled = false; document.getElementById('input_hospitals').disabled = true;
}

function type_hospital()
{
	document.getElementById('input_hospitals').disabled = false; document.getElementById('select_hospitals').disabled = true;
}


 function select_specialitys()
{
    document.getElementById('select_doctors').disabled = false; document.getElementById('input_doctors').disabled = true;
}

function type_specialitys()
{
    document.getElementById('input_doctors').disabled = false; document.getElementById('select_doctors').disabled = true;
}
