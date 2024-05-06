export default function renderAbout(){
    const content=document.getElementById('content');
    content.innerHTML='';
    


    //CREATING ELEMENTS

    let contactUs=document.createElement('div');
    let contactTitle=document.createElement('h1');
    let Phone=document.createElement('p');
    let email=document.createElement('p');
    let address=document.createElement('p');

    Phone.classList.add('number');
    email.classList.add('email');
    address.classList.add('address');

    Phone.textContent="Phone number : 1234567890";
    email.textContent="Email :someone@somemail.com";
    address.textContent='Adsress: 100 some place ave';
    contactTitle.textContent="Contact us";

    contactUs.appendChild(contactTitle);
    contactUs.appendChild(Phone);
    contactUs.appendChild(email);
    contactUs.appendChild(address);
    content.appendChild(contactUs);

}