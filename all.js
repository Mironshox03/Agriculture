document.addEventListener('DOMContentLoaded', () => {
        const dropdownContainer = document.querySelector('.dropdown-container');
        const dropdownMenu = dropdownContainer.querySelector('.dropdown');
        dropdownContainer.addEventListener('mouseover', () => {
            dropdownMenu.style.display = 'block';
        });
        dropdownContainer.addEventListener('mouseout', () => {
            dropdownMenu.style.display = 'none';
        });
    });
let aaElements = document.querySelectorAll('.aa');
document.addEventListener('scroll', () => {
    aaElements.forEach(aa => {
        let rect = aa.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            aa.style.opacity = '1';
            aa.style.transform = 'translateY(-5%)';
            aa.style.transition = '2s';
        }
    });
});
const moreBtn = document.querySelector('.view');
const blogPostsContainer = document.querySelector('.content');
const Container = document.querySelector('.offer-contain');
const container = document.querySelector('.offer');
let showingAll = false;

moreBtn.addEventListener('click', () => {
    showingAll = !showingAll;

    if (showingAll) {
        Container.style.height = '1500px'
        container.style.marginTop = '-500px';
        blogPostsContainer.innerHTML += `
        <img src="../img/1x1 (1).png" alt="">
        <img src="../img/2x2 (1).png" alt="">
        <img src="../img/3x3 (1).png" alt="">
        <img src="../img/4x4 (1).png" alt="">
        `;
        moreBtn.textContent = 'Show Less';
    } else {
        Container.style.height = '1050px'
        container.style.marginTop = '10px';
        blogPostsContainer.innerHTML = `
        <img src="../img/1x1 (1).png" alt="">
        <img src="../img/2x2 (1).png" alt="">
        <img src="../img/3x3 (1).png" alt="">
        <img src="../img/4x4 (1).png" alt="">
        `;
        moreBtn.textContent = 'More Blog';
    }
});
let bcg = document.querySelector('.bcg');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let a1 = document.querySelector('.card .a1').addEventListener('click' , () => {
    box1.style.display = 'block'
    bcg.style.display = 'block'
    box1.style.display = 'flex'
})
let a2 = document.querySelector('.card .a2').addEventListener('click' , () => {
    bcg.style.display = 'block'
    box2.style.display = 'block'
    box2.style.display = 'flex'
})
let a3 = document.querySelector('.card .a3').addEventListener('click' , () => {
    bcg.style.display = 'block'
    box3.style.display = 'block'
    box3.style.display = 'flex'
})
let modal1 = document.querySelector('.box .modal1').addEventListener('click' , () => {
    bcg.style.display = 'none'
    box1.style.display = 'none'
})
let modal2 = document.querySelector('.box .modal2').addEventListener('click' , () => {
    bcg.style.display = 'none'
    box2.style.display = 'none'
})
let modal3 = document.querySelector('.box .modal3').addEventListener('click' , () => {
    bcg.style.display = 'none'
    box3.style.display = 'none'
})
// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://yourwebsite.com/some-page', true);

// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4) { // So'rov yakunlandi
//         if (xhr.status === 404) {
//             console.log('404 Not Found');
//             // 404 bo'lganda bajariladigan kod
//         } else {
//             console.log(xhr.responseText);
//             // Agar muvaffaqiyatli bo'lsa, ma'lumotlarni ko'rsatish
//         }
//     }
// };

// xhr.send();