name_of_the_kid_array=[];
function submit(){
    var display_kid_array=[];
    for(var j=1;j=4;j++)
{
    var name_of_the_kid=document.getElementById("name_of_the_kid_"+j).value;
    console.log(name_of_the_kid);
    name_of_the_kid_array.push(name_of_the_kid);
}
console.log(name_of_the_kid_array);

var length_of_name_of_the_kid_array=name_of_the_kid_array.length;
console.log(length_of_name_of_the_kid_array)
for(var k=0;k<length_of_name_of_the_kid_array;k++ )
{
    console.log(name_of_the_kid_array);
    display_kid_array.push("<h4>NAME-   "+ name_of_the_kid_array[k]+"<h4>");

}
console.log(display_kid_array)

document.getElementById("display_name_with_commas").innerHTML=display_kid_array;
var remove_commas=display_kid_array.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
    name_of_the_kid_array.sort();
    console.log (name_of_the_kid_array)
 var display_kid_array_sorting=[];
 var length_of_name_of_the_kid_array=name_of_the_kid_array.length;
console.log(length_of_name_of_the_kid_array)
for(var k=0;k<length_of_name_of_the_kid_array;k++ )
{
    console.log(name_of_the_kid_array_sorting);
    display_kid_array_sorting.push("<h4>NAME-   "+ name_of_the_kid_array[k]+"<h4>");

}
var remove_commas=display_kid_array_sorting.join(" ");
console.log(remove_commas);
document.getElementById("display_name_without_commas").innerHTML=remove_commas;

}