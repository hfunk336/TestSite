var article = document.getElementById("information");
var info = ["My name is Hunter Funk and this digital portfolio will walk you " +
            "through who I am, what I am capable off, and show off some of my " +
            "previous works. Hopefully, by the end, you will be convinced that " +
            "I am up to par for the project you need done. Currently, I am a " +
            "senior at Millennium High School as well as a second-year coding " +
            "student at West-MEC central campus.", 
            // about
            "Ever since I was a kid, video games have been a passion of mine " +
            "since my older brother put a controller in my hand when he had to " +
            "leave the room for a second. It has been a goal of to eventually work " +
            "work on my own game and finish it; however, there is more that I can " +
            "do with code than just video games. I also try to keep up with new games " +
            "and anime coming out. Currently, I plan to attend college and get a " +
            "degree, but not quite sure where.",
            // interests
            "I've learned how to code HTML5, CSS3, and Javascript so far while " +
            "attending West-MEC. I have coded very basic things in C# and made a " +
            "small project in the Unity engine. Throughout the year, I have worked " +
            "with other students in the West-MEC program to finish websites using " +
            "we know; however, none of these sites are currently being hosted. During " +
            "these projects, I have acted as both a Web Developer and Project Manager.",
            // experience
            "I have become comfortable with formatting websites using floats, grids " +
            "and flexbox. Personally, I am more comfortable with grids; however, " +
            "flexboxes are required for most designs. HTML is pretty simple, not much " +
            "more to say.",
            // HTML5
            "We have finished studying CSS3 at the end of our 1st year at West-MEC. " +
            "We learned all about the simple things such as how to transform images " +
            "using perspective with shadows and how to modify pictures with filters. " +
            "I can also apply linear and radial gradients to backgrounds vary the color" +
            "on the page. One thing I need to improve on is the styling of websites and " +
            "make them more appealing.",
            // CSS3
            "We studied the basics of Javascript toward the end of our 1st year; however " +
            "the pandemic cut our 2nd semester rather short which made retaining new " +
            "information rather difficult. However, I did pass my MTA (Microsoft Technicians " +
            "Associates) that we were tested for at the end of our 2nd semester. I feel " +
            "rather confident handling events and creating functions in Javascript and will " +
            "continue to learn more during our 2nd year.",
            // JS
            "Most of my hands on work has been from my teacher, where we were given content " +
            "required for the site we made; however, how it ended up was left in my control. " +
            "Another project we have worked on was creating something similar to a wikipedia " +
            "for a few Pokemon that was completed with a group of fellow classmates. One of " +
            "the more recent websites we created as a group was a site meant to be a blog " +
            "for users to submit stories where they had experiences with unpleasant people " +
            "and wanted to share what happened.",
            // History
            "Personal email: hunter.d.funk@gmail.com <br/> Phone # : (602)697-9729" +
            "<br/> Discord: @DumbasFunk#6832 <br/> West-MEC email: hfunk336@west-mec.org"
            // Contact; most of the stuff here is just to fill the article space
        ];
// each item in the array correlates to the link you would click on the site

function change(x){
    article.innerHTML = info[x];
// this will change the article information based on which nav item you clicked on the site.
}

// in the future, I would like to add animations to the article for when you change the information
// as well as the picture will change with the information, the one there now is just a placeholder
// do not take it seriously