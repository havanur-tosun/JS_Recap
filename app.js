// let numArray = [11,22,33];
// console.log(numArray);
// console.log(numArray[2]);


// let stringArray = ["aaa","bbb","ccc","ddd"];
// console.log(stringArray);
// console.log(stringArray[0]);
// console.log(stringArray[4]);

// let objectPerson = {
//     "firstName" : "Havanur",
//     "lastName" : "Tosun",
//     "age" : 23
// }

// console.log(objectPerson);

// const varlastName = "lastName";

// console.log(objectPerson.firstName);
// console.log(objectPerson.lastName);
// console.log(objectPerson.age);



// console.log(objectPerson[varlastName]);
// console.log(objectPerson.varlastName);


// let complexArray = [
//     11,
//     22,
//     "qqq",
//     "eee",
//     true,
//     {"firstName" : "Havanur","lastName" : "Tosun","age" : 23},
//     33,
//     "hhh"
// ]

// console.log(complexArray);
// console.log(complexArray[0]);
// console.log(complexArray[2]);
// console.log(complexArray[5]);
// console.log(complexArray[5].firstName);
// console.log(complexArray[5].lastName);
// console.log(complexArray[5].age);

// let personArray = [
//     {
//         "firstName" : "Havanur",
//         "lastName" : "Tosun",
//         "age" : 23
//     },
//     {
//         "firstName" : "Javid",
//         "lastName" : "Misrikhanov",
//         "age" : 24
//     },
//     {
//         "firstName" : "Amir",
//         "lastName" : "Alekperov",
//         "age" : 32
//     },
// ]

// console.log(personArray);
// console.log(personArray[2]);
// console.log(personArray[2].firstName);
// console.log(personArray[2].lastName);
// console.log(personArray[2].age);

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => {

//         // console.log(response);
        
//         let ourRes = response.json();
//         console.log(ourRes)

//         // return response.json()
//         return ourRes
//     })
    
//     .then( (json) => {
        
//         console.log(json);
        
//         console.log(json[7].name);
//     })


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then( (json) => {
//     console.log(json);
//     // console.log(json[7]);
//     // console.log(json[7].name);
//     // console.log(json[7].username);
//     // console.log(json[7].address);

//     let randomNum = Math.floor(Math.random() * 10);
//     console.log("random number: ", randomNum);

//     console.log(json[randomNum].username);
// })

// fetch('https://jsonplaceholder.typicode.com/users/7')
// .then(response => response.json())
// .then( (json) => {
//     console.log(json);
//     console.log(json.name);
//     console.log(json.username);
//     console.log(json.company.name);
//     console.log(json.address);
// })

//<-------------------- PROJECT-------------------------->

const menu = [
    {
        id: 1,
        title: "Hunkar Begendi",
        category: "dinner",
        price: 21.99,
        img: "./img/image-1.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus nostrum cupiditate reiciendis perspiciatis quaerat illo fuga porro quae! Blanditiis, laboriosam labore! Illum voluptas blanditiis quasi veritatis aliquam quisquam. Laboriosam!"
    },
    {
        id: 2,
        title: "Doner",
        category: "lunch",
        price: 15.99,
        img: "./img/image-2.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus nostrum cupiditate reiciendis perspiciatis quaerat illo fuga porro quae! Blanditiis, laboriosam labore! Illum voluptas blanditiis quasi veritatis aliquam quisquam. Laboriosam!"
    },
    {
        id: 3,
        title: "Imam Bayildi",
        category: "dinner",
        price: 22.99,
        img: "./img/image-3.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus nostrum cupiditate reiciendis perspiciatis quaerat illo fuga porro quae! Blanditiis, laboriosam labore! Illum voluptas blanditiis quasi veritatis aliquam quisquam. Laboriosam!"
    },
    {
        id: 4,
        title: "Omlet",
        category: "breakfast",
        price: 10.99,
        img: "./img/image-4.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus nostrum cupiditate reiciendis perspiciatis quaerat illo fuga porro quae! Blanditiis, laboriosam labore! Illum voluptas blanditiis quasi veritatis aliquam quisquam. Laboriosam!"
    },
    {
        id: 5,
        title: "Iskender",
        category: "dinner",
        price: 13.99,
        img: "./img/image-5.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus nostrum cupiditate reiciendis perspiciatis quaerat illo fuga porro quae! Blanditiis, laboriosam labore! Illum voluptas blanditiis quasi veritatis aliquam quisquam. Laboriosam!"
    },
    {
        id: 6,
        title: "Pan Cake",
        category: "lunch",
        price: 8.99,
        img: "./img/image-6.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus nostrum cupiditate reiciendis perspiciatis quaerat illo fuga porro quae! Blanditiis, laboriosam labore! Illum voluptas blanditiis quasi veritatis aliquam quisquam. Laboriosam!"
    },
    {
        id: 7,
        title: "Boiled Eggs",
        category: "breakfast",
        price: 11.99,
        img: "./img/image-7.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus nostrum cupiditate reiciendis perspiciatis quaerat illo fuga porro quae! Blanditiis, laboriosam labore! Illum voluptas blanditiis quasi veritatis aliquam quisquam. Laboriosam!"
    },
    {
        id: 8,
        title: "Adana Kebap",
        category: "aperatif",
        price: 3.99,
        img: "./img/image-8.jpg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos minus nostrum cupiditate reiciendis perspiciatis quaerat illo fuga porro quae! Blanditiis, laboriosam labore! Illum voluptas blanditiis quasi veritatis aliquam quisquam. Laboriosam!"
    },
]
function displayMenuItems(menuList) {
    let sectionContent = "";
    menuList.forEach((item) => {
        // console.log(item);
        sectionContent += `<article class="menu-item">
        <img src=${item.img} alt="menu item" class="photo">
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4>$ ${item.price}</h4>
            </header>
            <p class="item-text"> ${item.desc}</p>
         </div>
         </article>
         <br>
         <hr>
         <br>`;
    });
    document.querySelector(".section-center").innerHTML = sectionContent;
}
displayMenuItems(menu);
function displayCategories() {
    let categoryContent = `<button type="button" class="filter-button" data-id="all">all</button>`;
    // let categories = [];
    // menu.forEach( (item) => {
    //     const foodIndex = categories.indexOf(item.category);
    //     if (foodIndex == -1) categories.push(item.category);
    // });
    // console.log(categories);
    const categorySet = new Set();
    menu.forEach((item) => categorySet.add(item.category));
    categorySet.forEach((item) => {
        categoryContent += `<button type="button" class="filter-button" data-id=${item}>${item}</button>`
    })
    document.querySelector(".btn-container").innerHTML = categoryContent;
    const filterButtons = document.querySelectorAll(".filter-button");
    // console.log(filterButtons);
    filterButtons.forEach((button) => {
        // console.log(button);
        button.addEventListener("click", function(event){
            // console.log(event.target);
            console.log(event.target.getAttribute("data-id"));
            const selectedCategoryName = event.target.getAttribute("data-id");
            const filteredMenu = menu.filter( item => item.category == selectedCategoryName);
            // console.log(filteredMenu);
            if (selectedCategoryName == "all") displayMenuItems(menu);
            else displayMenuItems(filteredMenu);
        })
    });
}
displayCategories();