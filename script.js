
const navSlide = () => {
    const expand = document.querySelector('.expand');
    const nav = document.querySelector(".mobileDropdown");
    const navLinks = document.querySelectorAll('.unorderedNav li');
    //toggle Nav

 
    expand.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        //link anims
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + .4}s`;
            }
        });
        expand.classList.toggle('toggle')
    });
    
}
/*
$('.form').css('background', 'white');
$('.form').contents().find('body').css('backgroundColor', 'linear-gradient(180deg, red, yellow);');


var frame = document.querySelector('.form');
if (frame != null) {
    frame.style.background = 'linear-gradient(180deg, red, yellow);';
    frame.contentWindow.document.body.style.backgroundColor = 'linear-gradient(180deg, red, yellow);';
}*/

function monthDays(month) {
    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return 31;
    } else if (month == 3 || month == 5 || month == 8 || month == 10) {
        return 30
    } else {
        // No i'm not coding in leap years, fuck you
        return 28
    }
}

function processDay (day){
    if (day == 0) {
        return "Sunday";
    } else if (day == 1) {
        return "Monday";
    } else if (day == 2) {
        return "Tuesday";
    } else if (day == 3) {
        return "Wednesday";
    } else if (day == 4) {
        return "Thursday";
    } else if (day == 5) {
        return "Friday";
    } else if (day == 6) {
        return "Saturday";
    }
}

function processDate (date) {
    if (date == 1) {
        return "1st";
    } else if (date == 2) {
        return "2nd";
    } else if (date == 3) {
        return "3rd";
    } else {
        return `${date}th`;
    }
}

function processMonth (month) {
    if (month == 0) {
        return "January";
    } else if (month == 1) {
        return "Febuary";
    } else if (month == 2) {
        return "March";
    } else if (month == 3) {
        return "April";
    } else if (month == 4) {
        return "May";
    } else if (month == 5) {
        return "June";
    } else if (month == 6) {
        return "July";
    } else if (month == 7) {
        return "August";
    } else if (month == 8) {
        return "September";
    } else if (month == 9) {
        return "October";
    } else if (month == 10) {
        return "November";
    } else if (month == 11) {
        return "December";
    }
}

function processYear (year) {
    return `${year} `
}

function getDateTime() {
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();
    var day = d.getDay();

    var date2 = d.getDate();
    var day2 = d.getDay();
    var month2 = d.getMonth();
    var year2 = d.getFullYear();
    var randBool = false;
    var i = 0;

    p = document.getElementById('jsTest');
    
    //TODO if statment for if today is friday
    while (randBool == false) {
        if (day != 5) {
            if (day2 != 5) {
                //console.log(date2);
                //console.log(day2);
                date2++;
                if (day2 == 6){
                    day2 = 0;
                } else {
                    day2++;
                }
                
                i++;
                if (date2 > monthDays(month2)) {
                    month2++;
                    date2 = 1;
                } else if (month2 > 11) {
                    month2 = 1;
                    year2++;
                }
            } else {
                //console.log(date2);
                //console.log(day2);
                randBool = true;
            }
        } else {
            if (day2 != 5) {
                //console.log(date2);
                //console.log(day2);
                date2++;
                if (day2 == 6){
                    day2 = 0;
                } else {
                    day2++;
                }
                i++;
                if (date2 > monthDays(month2)) {
                    month2++;
                    date2 = 1;
                } else if (month2 > 11) {
                    month2 = 1;
                    year2++;
                }
            } else if (i == 0){
                //console.log("did it")
                //console.log(date2);
                //console.log(day2);
                date2++;
                if (day2 == 6){
                    day2 = 0;
                } else {
                    day2++;
                }
                i++;
                if (date2 > monthDays(month2)) {
                        
                    month2++;
                    date2 = 1;
                } else if (month2 > 11) {
                    month2 = 1;
                    year2++;
                }
            } else {
                console.log(date2);
                console.log(day2);
                randBool = true;
            }
        }
        
        
    }

    p.innerHTML = `The next club meeting will occur on <strong>${processDay(day2)}, ${processMonth(month2)} the ${processDate(date2)}, ${processYear(year2)}</strong>(Lunch in F8, Mr Lippincott's room). <i>Please note that this announcement will automatically update every week.</i>`;

    //p.innerHTML = day <= 4 || new Date().getDay() == 6 ? `Next Meeting: Friday  ` : `Friday`;
}

getDateTime();

navSlide();

