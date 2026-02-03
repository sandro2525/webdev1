let age=prompt("Please enter your age:");
let parent=prompt("do you have a parent with you(yes/no):");
let ticket=prompt("do you have a ticket(yes/no):");
let late=prompt("are you late(yes/no):");
if (age >= 18&& late === "no" && ticket === "yes" ) {
    alert("you can watch the movie");
} else if (age >= 13 && parent === "yes"  && ticket === "yes") {
    alert("you can watch the movie");
} else if (late === "yes" && parent === "no" ) {
    alert("you cannot watch the movie");
} else {
    alert(" adress the issue with the staff");
}