export default function renderMenu(){
    const content=document.getElementById('content');
    content.innerHTML='';


    //creating elements
    let title=document.createElement('h1');
    let divForDrinks=document.createElement('div');
    let divforDishes=document.createElement('div');


    //drink 1
    let pepsiCo=document.createElement('div');
    let pepsiH1=document.createElement('h2');
    pepsiH1.textContent='PepsiCo drinks'
    let pepsiDescr=document.createElement('p');
    pepsiDescr.textContent='Any pepsi co drinks. Pepsi,Miranda,7up Etc.'
    let pepsiPrice=document.createElement('p');
    pepsiPrice.textContent='1$'
    pepsiCo.classList.add('drink1');
    pepsiCo.appendChild(pepsiH1)
    pepsiCo.appendChild(pepsiDescr);
    pepsiCo.appendChild(pepsiPrice);

    //drink2
    let milkshakes=document.createElement('div');
    let milkTitle=document.createElement('h2');
    milkTitle.textContent="Milkshakes";
    let milkdescr=document.createElement('p');
    milkdescr.textContent='Chocolate ,Vanilla ,Strawberry'
    let milkPrice=document.createElement('p');
    milkPrice.textContent='3$'
    milkshakes.classList.add('drink2');
    milkshakes.appendChild(milkTitle);
    milkshakes.appendChild(milkdescr);
    milkshakes.appendChild(milkPrice);

    //drink3 

    let coffee=document.createElement('div');
    let coffeeTitle=document.createElement('h2');
    coffeeTitle.textContent="Coffee & Hot beverages";
    let coffeeDescr=document.createElement('p');
    coffeeDescr.textContent='A hot cup of joe or Tea'
    let coffeePrice=document.createElement('p');
    coffeePrice.textContent="2$";
    coffee.classList.add('drink3');
    coffee.appendChild(coffeeTitle);
    coffee.appendChild(coffeeDescr);
    coffee.appendChild(coffeePrice)

   //MEALS

   //meal1
   let meal1=document.createElement('div');
   let meal1Title=document.createElement('h2');
   meal1Title.textContent='Sadza & Beef'
   let meal1Descr=document.createElement('p');
   meal1Descr.textContent="hot sadza and 3 pieces of beef"
   let meal1Price=document.createElement('p');
   meal1Price.textContent='5$'
   meal1.classList.add('meal1');
   meal1.appendChild(meal1Title);
   meal1.appendChild(meal1Descr);
   meal1.appendChild(meal1Price)

   //meal2
   let meal2=document.createElement('div');
   let meal2Title=document.createElement('h2');
   meal2Title.textContent='Sadza & chicken'
   let meal2Descr=document.createElement('p');
   meal2Descr.textContent="hot sadza and 2 pieces of chicken"
   let meal2Price=document.createElement('p');
   meal2Price.textContent='6$'
   meal2.classList.add('meal2');
   meal2.appendChild(meal2Title);
   meal2.appendChild(meal2Descr);
   meal2.appendChild(meal2Price)

   //meal2
   let meal3=document.createElement('div');
   let meal3Title=document.createElement('h2');
   meal3Title.textContent='Sadza & Pork'
   let meal3Descr=document.createElement('p');
   meal3Descr.textContent="hot sadza and 3 pieces of pork"
   let meal3Price=document.createElement('p');
   meal3Price.textContent='7$'
   meal3.classList.add('meal3');
   meal3.appendChild(meal3Title);
   meal3.appendChild(meal3Descr);
   meal3.appendChild(meal3Price);


   //appending items
   divForDrinks.classList.add('drinking');
   divForDrinks.appendChild(pepsiCo);
   divForDrinks.appendChild(milkshakes);
   divForDrinks.appendChild(coffee);
   
   divforDishes.classList.add('dishes');
   divforDishes.appendChild(meal1);
   divforDishes.appendChild(meal2);
   divforDishes.appendChild(meal3);


   content.appendChild(title);
   content.appendChild(divForDrinks);
   content.appendChild(divforDishes);


}