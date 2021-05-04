let issues = [
    {
        "issue" : "SOCIAL ISSUES",
        
        "image" : "./images/social.jpg",

        "screenLink" : "https://www.newswise.com/articles/it-s-not-if-but-how-people-use-social-media-that-impacts-their-well-being",

        "cornerImage" : "images/SocialIssues.png",
        "screenTxt" : "... viewing other people's posts and images while not interacting with them lends itself to comparison without the mood-boosting benefits that ordinarily follow social contact, undermining well-being and reducing self-esteem. \"Passive use, scrolling through others posts and updates, involves little person-to-person reciprocal interaction while providing ample opportunity for upward comparison.\"",

        "contentLink" : "https://www.buckscountycouriertimes.com/story/lifestyle/2020/12/23/reality-teen-activism-more-than-social-media/6511673002/",

        "contentTextp1" : "Although face-to-face interactions may be difficult given the ongoing COVID-19 pandemic, there are other methods to participate in meaningful discourse.Talking to your family at the dinner table about family values could be a start. Ask yourself, “What privileges does my family have? What kind of platform do I utilize on a daily basis? How do my family’s beliefs shape my own?Understandably, asking yourself these types of questions is uncomfortable.",

        "contentTextp2" :"However, in order to truly be a productive member of any social movement, you must be invested in finding your own faults before you can identify the faults of society as a whole... Many people assume that activism involves going out in public and speaking about certain societal problems. I find that being an activist within your own sphere can be just as powerful."
    },

    {
        "issue" : "POLITICAL ISSUES",

        "image" : "./images/political.jpg",

        "cornerImage" : "images/PoliticalCorner.png",

        "screenLink" : "https://www.thedenverchannel.com/news/360/social-media-helps-bring-people-together-but-in-this-political-climate-its-tearing-us-apart",

        "screenTxt" : "Social media is increasingly playing a role in politics as well. Candidates, political groups, lawmakers and more are now using the platforms as a way to connect with voters and spread their message.",

        "contentLink" : "https://harvardpolitics.com/youth-political-engagement-era-social-media/",

        "contentTextp1" : "Engagement in social media is correlated with higher levels of political engagement and a stronger partisan identity.  Social media, in other words, does not seem to act as a be-all, end-all for political engagement. Rather, results suggest that those who are more connected with social media are more likely to be politically engaged in ways that extend beyond social networking platforms.",

        "contentTextp2" :" ..use of social media corresponds to higher rates of registration and turnout. According to survey results, 73 percent of individuals with three or more social media accounts were registered to vote, while only 50 percent of individuals with no social media accounts were registered to vote. "
    },

    {
        "issue" : "ENVIRONMENTAL ISSUES",

        "image" : "./images/environmental.jpg",

        "cornerImage": "images/EnvironmentalCorner.png",

        "screenLink" : "https://www.huffpost.com/entry/social-media-and-saving-t_b_9100362",

        "contentLink" : "https://www.wwf.org.uk/thingsyoucando",

        "screenTxt" : "Social media has become an important tool for providing a space and means for the public to participate in influencing or disallowing environmental decisions historically made by governments and corporations that affect us all. It has created a way for people to connect local environmental challenges and solutions to larger-scale narratives that will affect us as a global community.",

        "contentTextp1" : "We are the first generation to know we’re destroying the world, and we could be the last that can do anything about it. Speaking up is one of the most powerful things you can do especially if it’s to the right people. Talk to your MP. Tell them to commit to action to protect our natural world.",

        "contentTextp2" :"Contact the brands you buy from and get them to tell you how their products are sourced. Use social media – this is one of the most effective ways to get brands to listen to you, so tell them that you want a change. It’s not just about speaking to the people in charge. Talk to your friends, neighbours and colleagues and get them to make positive changes too. Speak up, speak to everyone, and make your voice heard"
    },
    {
        "issue" : "MENTAL ISSUES",

        "image" : "./images/mental.jpg",

        "cornerImage" : "images/mentalHealthCorner.png",

        "screenLink" : "https://www.helpguide.org/articles/mental-health/social-media-and-mental-health.htm", 

        "screenTxt" : "Social media platforms are designed to snare your attention, keep you online, and have you repeatedly checking your screen for updates. It’s how the companies make money.  When you receive a like, a share, or a favorable reaction to a post, it can trigger the release of dopamine in the brain... The more you’re rewarded, the more time you want to spend on social media, even if it becomes detrimental to other aspects of your life.",

        "contentLink" : "https://www.helpguide.org/articles/mental-health/social-media-and-mental-health.htm",

        "contentTextp1" : "Human beings are social creatures. Being socially connected to others can ease stress, anxiety, and depression, boost self-worth, provide comfort and joy, prevent loneliness, and even add years to your life. On the flip side, lacking strong social connections can pose a serious risk to your mental and emotional health.",

        "contentTextp2" :"While social media has its benefits, it’s important to remember that social media can never be a replacement for real-world human connection. It requires in-person contact with others to trigger the hormones that alleviate stress and make you feel happier, healthier, and more positive. Ironically for a technology that’s designed to bring people closer together, spending too much time engaging with social media can actually make you feel more lonely and isolated—and exacerbate mental health problems such as anxiety and depression."
    }
];

var pageLinks, arrows, screenPic, screenTxt, contentTitle, contentTxt;

if (document.readyState === 'loading') {  // Loading hasn't finished yet
    document.addEventListener('DOMContentLoaded', variableSetup);
  } else {  // `DOMContentLoaded` has already fired
    variableSetup();
  }

function variableSetup(){
    pageLinks = document.getElementsByClassName("link");
    arrows = document.getElementsByClassName("angle");
    screenPic = document.getElementById("image"); 
    screenTxt = document.getElementById("sText");
    screenLink = document.getElementById("sbutton");
    contentTitle = document.getElementById("issue");
    contentBox = document.getElementsByTagName("p");
    cornerImage = document.getElementById("cornerImage");
    contentLink = document.getElementById("button");
    linkArrowSetup();
    transistionInfo(0);
}

// tells you the count of the current "slide" we are on
var currentSlideIdx = 0;

// // gets all the links to each of the pages
// var pageLinks = document.getElementsByClassName("link");

function linkArrowSetup(){

        // transition to the topic of the clicked link 
        pageLinks[0].addEventListener("click", function(event){
            console.log(event);
            transistionInfo(0);
            currentSlideIdx = 0;
        });
        pageLinks[1].addEventListener("click", function(event){
            console.log(event);
            transistionInfo(1); 
            currentSlideIdx = 1;     
        });
        pageLinks[2].addEventListener("click", function(event){
            console.log(event);
            transistionInfo(2); 
            currentSlideIdx = 2;     
        });
        pageLinks[3].addEventListener("click", function(event){
            console.log(event);
            transistionInfo(3);
            currentSlideIdx = 3;      
        });
        
        arrows[0].addEventListener("click", function(){
            if (currentSlideIdx == 0){
                currentSlideIdx = 3;
            }
            else{
                currentSlideIdx--;
            }
            transistionInfo(currentSlideIdx);
        });
        arrows[1].addEventListener("click", function(){
            if (currentSlideIdx == 3){
                currentSlideIdx = 0;
            }
            else{
                currentSlideIdx++;
            }
            transistionInfo(currentSlideIdx);
        });
    }
    
    
    // for (var i = 0; i < arrows.length; i++){
    //     // updates to the next "slide"
    //     if (currentSlideIdx == pageLinks.length - 1){
    //         currentSlideIdx = 0;
    //     }
    //     else{
    //         currentSlideIdx++;
    //     }
    //     // transisitions to the next "slide" when the arrow is clicked
    //     arrows[i].addEventListener("on-click", transistionInfo(currentSlideIdx));
    // }

// for (var i = 0; i < pageLinks.length; i++ ){
//     // transition to the topic of the clicked link 
//     pageLinks[i].addEventListener("clicked", transistionInfo(i));
//     // updates the current "slide" counter
//     currentSlideIdx = i;
// }


// for (angle  in arrows ){
//     // updates to the next "slide"
//     if (currentSlideIdx == pageLinks.length - 1){
//         currentSlideIdx = 0;
//     }
//     else{
//         currentSlideIdx++;
//     }
//     // transisitions to the next "slide" when the arrow is clicked
//     angle.addEventListener("clicked", transistionInfo(currentSlideIdx));
// }

// // grabs the space for each of the needed spaces
// var screenPic = document.getElementById("image"); 
// var screenTxt = document.getElementById("sText");
// var contentTitle = document.getElementById("title");
// var contentTxt = document.getElementById("cTxt");

function transistionInfo(issueIdx) {
    console.log("THIS IS ISSUE INDEX:", issueIdx);
    // adds a bottom border to the current page selected
    pageLinks[issueIdx].style.bottomBorder = "0.5rem bold solid black";

    // adds the photo to the scrren image
    screenPic.setAttribute("src", issues[issueIdx]["image"]);

    // adds caption text to the screen
    screenTxt.innerText = issues[issueIdx]["screenTxt"];

    // creates & adds the title div for the content side
    // let newDiv = document.createElement("div");
    contentTitle.innerText = issues[issueIdx]["issue"];
    // contentTitle.appendChild(newDiv);

    // creates & adds the paragraph text to the content side
    // let paragraph1 = document.createElement("p");
    let paragraph1 = contentBox[0];
    paragraph1.innerText = issues[issueIdx]["contentTextp1"];
   
    let paragraph2= contentBox[1];
    paragraph2.innerText = issues[issueIdx]["contentTextp2"];
    // contentTxt.appendChild(paragraph2);

    //adding the cornerImage
    cornerImage.setAttribute("src", issues[issueIdx]["cornerImage"]);

    // adding the correct link to the screen
    screenLink.setAttribute("href", issues[issueIdx]["screenLink"]);

    //adding the correct link to the content
    contentLink.setAttribute("href", issues[issueIdx]["contentLink"]);
}