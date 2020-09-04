

$milesRiddenBox = document.getElementById('YTD');
$milesRidden = document.getElementById('milesRidden');
$milesRiddenButton = document.getElementById('milesRiddenButton');
$weeksLeft = document.getElementById('weeks-left');
$averageNeeded = document.getElementById('average-needed');
$targetMilesButton = document.getElementById('targetMilesButton');
$targetMiles = document.getElementById('targetMiles');
$targetMileOutput = document.getElementById('targetMileOutput');
$miles = document.getElementById('miles');
$milesLeft = document.getElementById('milesLeft');



Date.prototype.getWeek = function() {
    var date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    var week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week1.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
  }

  console.log((new Date()).getWeek());  // 52
    $weeksLeft.value = (53 - (new Date()).getWeek())
    $weeksLeft.innerHTML = "Weeks of year remaining - " + `<p class='number'>` + $weeksLeft.value + '</p>';


  $targetMilesButton.addEventListener("click", function(event){
    event.preventDefault();
    $weeksLeft.style.visibility = "visible";
    $miles.innerHTML = "Distance to date - " + `<p class='number'>` + $milesRidden.value + '</p>';
    $averageNeeded.innerHTML = ($miles.innerHTML / $weeksLeft.innerHTML);
    $targetMileOutput.innerHTML = 'Target distance - ' + `<p class='number'>` + $targetMiles.value + '</p>';
    event.preventDefault();
    $milesLeft.innerHTML = "Distance remaining - " + `<p class='number'>` + ($targetMiles.value - $milesRidden.value) + '</p>';
    averagePerWeek = ($targetMiles.value - $milesRidden.value) / $weeksLeft.value;
    averagePerWeek = Math.round(averagePerWeek * 100) / 100;
    $averageNeeded.innerHTML = "Average weekly distance to meet goal by end of year - " + `<p class='number'>` + averagePerWeek + '</p>' + ' per week';
  });





