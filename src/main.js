const patterns = [
    ["f", "o", "r", "{", "}"],
    ["(", "^", "-", "^", ")"],
    ["(", "^", "o", "^", ")"],
    ["<span class='block aspect-square leading-[2.3rem]'>=<span/>", "<span class='block aspect-square leading-[2.3rem]'>=<span/>", "<span class='block aspect-square leading-[2.3rem]'>=<span/>", "<span class='block aspect-square leading-[2.3rem]'>=<span/>", "<span class='aspect-square block leading-[2.3rem]'>><span/>"],
    ['<div class="w-14 h-14 bg-black rotate-45 border border-4 border-black"></div>', '<div class="w-14 h-14 bg-transparent border border-4 border-black rotate-45"></div>', '<div class="w-14 h-14 bg-black rotate-45 border border-4 border-black"></div>', '<div class="w-14 h-14 bg-transparent border border-4 border-black rotate-45"></div>', '<div class="w-14 h-14 bg-black rotate-45 border border-4 border-black"></div>'],
    ['<div class="w-14 h-14 border border-4 border-black rounded-full"><div/>', '<div class="aspect-square leading-[3.3rem]">&#64;<div/>', '<div class="w-14 h-14 border border-4 border-black rounded-full"><div/>', '<div class="w-14 h-14 border border-4 border-black rounded-full"><div/>', '<div class="w-14 h-14 border border-4 border-black rounded-full"><div/>'],
    ['<div class="w-14 h-14 bg-black border border-4 border-black rounded-full"><div/>', '<div class="w-14 h-14 bg-transparent border border-4 border-black rounded-full"><div/>', '<div class="w-14 h-14 bg-transparent border border-4 border-black rounded-full flex justify-center items-center"><div class="w-8 h-8 bg-transparent border border-4 border-black rounded-full"><div/><div/>', '<div class="w-14 h-14 bg-transparent border border-4 border-black rounded-full"><div/>', '<div class="w-14 h-14 bg-black border border-4 border-black rounded-full"><div/>'],
    ['4', "+", "4", "=", "8"],
    ['<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="100px" width="100px" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>', '<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="80px" width="80px" xmlns="http://www.w3.org/2000/svg"><path d="M2.293 3.707l8.293 8.293h-3.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h6c0.404 0 0.769-0.244 0.924-0.617 0.051-0.124 0.076-0.254 0.076-0.383h0.001v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v3.586l-8.293-8.293c-0.195-0.195-0.451-0.293-0.707-0.293s-0.512 0.098-0.707 0.293c-0.391 0.39-0.391 1.024 0 1.414z"></path></svg>', '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="110px" width="110px" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>', '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="80px" width="80px" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>', '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="80px" width="80px" xmlns="http://www.w3.org/2000/svg"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"></path></svg>']
];

function getRandomPattern() {
    return patterns[Math.floor(Math.random() * patterns.length)];
}

function displayPattern() {
    const holder1 = document.querySelector('#char1');
    const holder2 = document.querySelector('#char2');
    const holder3 = document.querySelector('#char3');
    const holder4 = document.querySelector('#char4');
    const holder5 = document.querySelector('#char5');
    const originals = document.querySelectorAll('.original');
    const reveals = document.querySelectorAll('.reveal');

    const pattern = getRandomPattern();

    holder1.innerHTML = pattern[0];
    holder2.innerHTML = pattern[1];
    holder3.innerHTML = pattern[2];
    holder4.innerHTML = pattern[3];
    holder5.innerHTML = pattern[4];

    originals.forEach(original => {
        original.style.animationName = "animate";
    })

    reveals.forEach(reveal => {
        reveal.style.animationName = "animate_reveal";
    })
}

displayPattern();
