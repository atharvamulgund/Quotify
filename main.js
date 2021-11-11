const quotes = [
    "A man's pride can be his downfall, and he needs to learn when to turn to others for support and guidance. - Bear Grylls",
    "When your outgo exceeds your income, the upshot may be your downfall.- Paul Harvey",
    "The straight line leads to the downfall of humanity. - Friedensreich Hundertwasser",
    "I like food too much to go on some crazy diet. French fries are my favorite downfall. - Holly Madison",
    "I'm not sure whether it's going to be the downfall of Rome - social media. There are too many secrets. - Judy Sheindlin",
    "Women are what completely inspire me, and they have also been my downfall. - Cara Delevingne",
    "I know there are people who are praying for my downfall, but they're going to be like, 'Wow, Xan's actually an artist. - Lil Xan",
    "“No one can make you feel inferior without your consent.” – Eleanor Roosevelt",
    "“I can be changed by what happens to me. But I refuse to be reduced by it.” ­­-­ Maya Angelou",
    " “With realization of one’s own potential and self-confidence in one’s ability, one can build a better world.” – The Dalai Lama",
    "“If you have no confidence in self, you are twice defeated in the race of life. With confidence, you have won even before you have started.” – Cicero",
    "“Do not let what you cannot do interfere with what you can do.” – John Wooden",
    "“You’re never as good as everyone tells you when you win, and you’re never as bad as they say when you lose.” – Lou Holtz",
    "“Act as if what you do makes a difference. It does.” —William James",
    "“Work like there is someone working 24 hours a day to take it away from you.” —Mark Cuban",
    "“It is when we are most lost that we sometimes find our truest friends.” —Brothers Grimm",
    "“When you have a dream, you’ve got to grab it and never let go.” —Carol Burnett",
    "“There is no such thing as a hopeless situation. Every single circumstances of your life can change! ” ― Rhonda Byrne",
    "“You become what you think about most.. But you also attract what you think about most. (John Assaraf) ” ― Rhonda Byrne, The Secret",
    "“Your power is in your thoughts, so stay awake. In other words, remember to remember.”  ― Rhonda Byrne,",
    "“Who you are is defined by what you’re willing to struggle for.”  ― Mark Manson",
    "“Life is essentially an endless series of problems. The solution to one problem is merely the creation of another.” ― Mark Manson"

];
const generation = document.querySelector('button')
const quote = document.querySelector('.quote')
generation.addEventListener('click', ()=>{
    const random =Math.floor( Math.random() * quotes.length)
    console.log(random);
    quote.textContent = quotes[random]
})