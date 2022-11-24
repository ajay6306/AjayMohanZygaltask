var date = document.getElementById('date');

date.addEventListener('blur', getValue);



function getValue()

{

  dateValue = date.value;

  var ths = document.getElementsByTagName('th');

  for(var i =0; i<ths.length; i++)

  {

    ths.style.backgroundColor = 'none';

  }

  var newDate = document.getElementById('dateValue');

  newDate.style.backgroundColor = 'green';

}
