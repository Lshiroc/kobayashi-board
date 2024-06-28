const patterns = [
    ["f", "o", "r", "{", "}"],
    ["(", "^", "-", "^", ")"],
    ["(", "^", "o", "^", ")"],
    ["<span class='block aspect-square leading-[1.3rem] sm:leading-[2.3rem]'>=<span/>", "<span class='block aspect-square leading-[1.3rem] sm:leading-[2.3rem]'>=<span/>", "<span class='block aspect-square leading-[1.3rem] sm:leading-[2.3rem]'>=<span/>", "<span class='block aspect-square leading-[1.3rem] sm:leading-[2.3rem]'>=<span/>", "<span class='aspect-square block leading-[1.3rem] sm:leading-[2.3rem]'>><span/>"],
    ['<div class="w-8 h-8 sm:w-14 sm:h-14 bg-black rotate-45 border border-4 border-black"></div>', '<div class="w-8 h-8 sm:w-14 sm:h-14 bg-transparent border border-4 border-black rotate-45"></div>', '<div class="w-8 h-8 sm:w-14 sm:h-14 bg-black rotate-45 border border-4 border-black"></div>', '<div class="w-8 h-8 sm:w-14 sm:h-14 bg-transparent border border-4 border-black rotate-45"></div>', '<div class="w-8 h-8 sm:w-14 sm:h-14 bg-black rotate-45 border border-4 border-black"></div>'],
    ['<div class="w-10 h-10 sm:w-14 sm:h-14 border border-4 border-black rounded-full"><div/>', '<div class="aspect-square leading-[1.7rem] sm:leading-[3.3rem]">&#64;<div/>', '<div class="w-10 h-10 sm:w-14 sm:h-14 border border-4 border-black rounded-full"><div/>', '<div class="w-10 h-10 sm:w-14 sm:h-14 border border-4 border-black rounded-full"><div/>', '<div class="w-10 h-10 sm:w-14 sm:h-14 border border-4 border-black rounded-full"><div/>'],
    ['<div class="w-10 h-10 sm:w-14 sm:h-14 bg-black border border-4 border-black rounded-full"><div/>', '<div class="w-10 h-10 sm:w-14 sm:h-14 bg-transparent border border-4 border-black rounded-full"><div/>', '<div class="w-10 h-10 sm:w-14 sm:h-14 bg-transparent border border-4 border-black rounded-full flex justify-center items-center"><div class="w-6 h-6 bg-transparent border border-4 border-black rounded-full"><div/><div/>', '<div class="w-10 h-10 sm:w-14 sm:h-14 bg-transparent border border-4 border-black rounded-full"><div/>', '<div class="w-10 h-10 sm:w-14 sm:h-14 bg-black border border-4 border-black rounded-full"><div/>'],
    ['4', "<span class='block aspect-square leading-[1.1rem] sm:leading-[2.3rem]'>+<span/>", "4", "<span class='block aspect-square leading-[1.1rem] sm:leading-[2.3rem]'>=<span/>", "8"],
    ['<div class="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px]"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" aria-hidden="true" height="100%" width="auto" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg></div>', '<div class="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="100%" width="auto" xmlns="http://www.w3.org/2000/svg"><path d="M2.293 3.707l8.293 8.293h-3.586c-0.552 0-1 0.448-1 1s0.448 1 1 1h6c0.404 0 0.769-0.244 0.924-0.617 0.051-0.124 0.076-0.254 0.076-0.383h0.001v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1v3.586l-8.293-8.293c-0.195-0.195-0.451-0.293-0.707-0.293s-0.512 0.098-0.707 0.293c-0.391 0.39-0.391 1.024 0 1.414z"></path></svg></div>', '<div class="w-[70px] h-[70px] sm:w-[110px] sm:h-[110px]"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="100%" width="auto" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></div>', '<div class="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="100%" width="auto" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg></div>', '<div class="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px]"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="100%" width="auto" xmlns="http://www.w3.org/2000/svg"><path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"></path></svg></div>'],
    ['<div class="w-[50px] h-[50px] sm:w-[90px] sm:h-[90px]"><a target="_blank" href="https://linkedin.com/in/zeynalmardanli" class="block rounded-full"><svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 17 17" height="100%" width="auto" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M0.698 5.823h3.438v10.323h-3.438v-10.323zM2.438 0.854c-1.167 0-1.938 0.771-1.938 1.782 0 0.989 0.74 1.781 1.896 1.781h0.021c1.198 0 1.948-0.792 1.938-1.781-0.011-1.011-0.74-1.782-1.917-1.782zM12.552 5.583c-1.829 0-2.643 1.002-3.094 1.709v-1.469h-3.427c0 0 0.042 0.969 0 10.323h3.427v-5.761c0-0.312 0.032-0.615 0.114-0.843 0.251-0.615 0.812-1.25 1.762-1.25 1.238 0 1.738 0.948 1.738 2.333v5.521h3.428v-5.917c0-3.167-1.688-4.646-3.948-4.646z"></path></svg><a/></div>', '<div class="w-[50px] h-[50px] sm:w-[90px] sm:h-[90px]"><a target="_blank" href="https://github.com/Lshiroc" class="block rounded-full"><svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="100%" width="auto" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg><a/></div>', '<a href="https://lshiroc.com" target="_blank" class="w-12 h-12 sm:w-20 sm:h-20 border border-8 border-black bg-black rounded-md flex justify-center items-center"><div class="w-8 h-8 sm:w-14 sm:h-14 bg-[#fde93e] rounded-lg"></div></a>', '<div class="w-[50px] h-[50px] sm:w-[90px] sm:h-[90px]"><a target="_blank" href="mailto:zeynalmerdanli4321@gmail.com" class="block rounded-full"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="100%" width="auto" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path></svg></a></div>', '<div class="w-[45px] h-[45px] sm:w-[75px] sm:h-[75px]"><a target="_blank" href="https://x.com/lshiroc" class="block rounded-full"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="100%" width="auto" xmlns="http://www.w3.org/2000/svg"><path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"></path></svg></a>']
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

    document.querySelector('#myID').style.animationName = "showID";
}

displayPattern();
