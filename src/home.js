export default function renderHome(){
    const content=document.getElementById('content');
    content.innerHTML='';

    // CREATING ELEMENTS
    let title=document.createElement('h1');
    let introduction=document.createElement('p');
    let divHours=document.createElement('div');
    let timeslot1=document.createElement('p');
    let timeslot2=document.createElement('p');
    let timeslot3=document.createElement('p');
    let timeslot4=document.createElement('p');
    let timeslot5=document.createElement('p');
    let timeslot6=document.createElement('p');
    let timeslot7=document.createElement('p');

    //adding content into each element

    title.textContent="Nashe's Sadza Spot";
    introduction.textContent="Sadza spot is everyone's go to for the best sadza based meals,\nwith our excellent cooks and customer service, we will have you feeling like this is your Home away from home.\n What are you waiting? for come eat with us.";
    timeslot1.textContent="Monday: 8:00am-20:00pm";
    timeslot2.textContent="Tuesday: 8:00am-20:00pm";
    timeslot3.textContent="Wednesday: 8:00am-20:00pm";
    timeslot4.textContent="Thursday: 8:00am-20:00pm";
    timeslot5.textContent="Friday: 8:00am-20:00pm";
    timeslot6.textContent="Saturday: 8:00am-15:00pm";
    timeslot7.textContent="Closed on sundays";


    //adding classes
    
    title.classList.add('title')
    introduction.classList.add('introduction');
    divHours.classList.add('hoursContainer')
    timeslot1.classList.add('hours');
    timeslot2.classList.add('hours');
    timeslot3.classList.add('hours');
    timeslot4.classList.add('hours');
    timeslot5.classList.add('hours');
    timeslot6.classList.add('hours');
    timeslot7.classList.add('hours');


    //apending to content div
    content.appendChild(title)
    content.appendChild(introduction);
    divHours.appendChild(timeslot1);
    divHours.appendChild(timeslot2);
    divHours.appendChild(timeslot3);
    divHours.appendChild(timeslot4);
    divHours.appendChild(timeslot5);
    divHours.appendChild(timeslot6);
    divHours.appendChild(timeslot7);
    content.appendChild(divHours)
}