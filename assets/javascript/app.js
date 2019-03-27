//create variables named Question
//create function and i
//create divs for questions, answers and results. 

//alongside Mark she is more than just a Face at this corporation as she runs the operations for this social media jauggernaut
//She may be married to a major tech guru but with a degree in computer science, and an MBA you know she can make her own bills.  Melinda Gates
//She moved from google to yahoo and was ranked sixth on Fortune magazine's 40 under 40 list. Who is Marissa Mayer?
//alongside Mark she is more than just a Face at this corporation as she runs the operations for this social media jauggernaut-Sheryl Sandberg
//she is the chief financial officer of this major corporation. One of the wealthiest men in the world would not be able to count his Bills without her- Who is Amy Woods?
//with a net worth of over 2.6billion dollars, she is described as the most successful technology founder in the world. It is even more admirable that she is self made. Epic, right? Judy Faulkner
//As the first black woman to become the CEO of a Fortune 500 company, you know a lot of young black girls look up to her. Copy that? Ursula Burns – Chair-CEO, Xerox
//As the CEO of one of the most powerful search engine in the world, she has amassed a networth of over 400 milion dollar and with how often You use her platform, there seems to be no stopping her. -Who is Susan Wojcicki?


const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");


const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");

const counter = document.getElementById("counter");


const progress = document.getElementById("progress");


let questions=[
    {
        question : "She moved from google to yahoo and was ranked sixth on Fortune magazine's 40 under 40 list.",
        choiceA : "Linda Hamilton",
        choiceB : "Amy Cohen",
        choiceC : "Lisa Woo",
        choiceD : "Marrisa Mayer",
        correct : "Marrisa Mayer-President-CEO, Yahoo,",
    },
    
        {
            question : "She may be married to a major tech guru but with a degree in computer science, and an MBA you know she can make her own bills.",
            choiceA : "Melinda Gates",
            choiceB : "Ava Durney",
            choiceC : "Merrisa Yates",
            choiceD : "Naomi Unagi",
            correct : "Melinda Gates-MBA-Philantropist",
        },
    
        {
            question : "As the CEO of one of the most powerful search engine in the world, she has amassed a networth of over 400 milion dollar and with how often you use her platform, there seems to be no stopping her.",
            choiceA : "Susan Wojcicki",
            choiceB : "Anna Pierce",
            choiceC : "Cinday Malcolm-Hornesbey",
            choiceD : "Xhu Joung",
            correct : "Susan Wojcicki-CEO, Youtube",
        },

        {
            question : "Alongside Mark she is more than just a face at this corporation as she runs the operations for this social media jauggernaut.",
            choiceA : "Eva Mendez",
            choiceB : "Chloe Green",
            choiceC : "Sheryl Sandberg",
            choiceD : "Stacey Sandler",
            correct : "Sheryl Sandberg-COO, Facebook",
        },

        {
            question : "As the first black woman to become the CEO of a Fortune 500 company, you know a lot of young black girls look up to her.",
            choiceA : "Yana Dukov",
            choiceB : "Ursula Burns",
            choiceC : "Stella Jean-Baptiste",
            choiceD : "Sandra Burnside-Pimlico",
            correct : "Ursula Burns–Chair-CEO, Xerox",
        },

        {
            question : "This self-made billionaire has a net worth of over 2.6 billion dollars. Her EHR/EMR software is used by hospitals all over the world ",
            choiceA : "Tori Oliver",
            choiceB : "Milly Xi-Harris",
            choiceC : "Amy Winters",
            choiceD : "Judy Faulkner",
            correct : "Judy Faulkner-CEO, Epic",
        },

        {
            question : "As the CFO of this major corporations, one of the wealthiest men in the world would not be able to count his bills without her.",
            choiceA : "Megan Harrison",
            choiceB : "Angelica Cortez",
            choiceC : "Amy Woods",
            choiceD : "Vivienne Westwood",
            correct : "Amy Woods-CFO, Microsoft",
        },

        {
            question : "As of 2014, she was ranked as the highest paid female CEO in the world. With a background in law, there is no stopping this woman",
            choiceA : "Safra Catz",
            choiceB : "Meghan Markle",
            choiceC : "Lisa Bllomberg",
            choiceD : "Irena Korzel",
            correct : "Safra Catz-Co-CEO, Oracle",
        },

        {
            question : "With a sibling who is also a CEO, it is no wonder that this powerful woman is a the helm of a genomics and biotechnology company.",
            choiceA : "Anne Catz-Wosniack",
            choiceB : "Anne Wojcicki",
            choiceC : "Anne Whitman ",
            choiceD : "Anne Burns",
            correct : "Anne Wojcicki-Cofounder and CEO, 23andMe",
        },

        {
            question : "She worked her way up as a Systems Engineer at the same IT company she now heads. She negotiated a major deal with PricewaterhouseCoopers and is highly respected for her leadership. ",
            choiceA : "Gigi Hadid",
            choiceB : "Marishka St John",
            choiceC : "Poppy Monte",
            choiceD : "Ginni Rommetty",
            correct : "Ginni Rommetty-Chair, President, and CEO, IBM",
        },

        {
            question : "She served as President and CEO for a multinational IT company and then ran for governor of California in 2016. She is currently the CEO of Quibi.",
            choiceA : "Tish Noble",
            choiceB : "Nikki Sladden",
            choiceC : "Meg Whitman",
            choiceD : "Brenda Mcneel",
            correct : "Meg Whitman-CEO,QUIBI",
        },
]


