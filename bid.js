var bid_data = [
    {
        "title": "General",
        "content": 
            "Hello, \n" +
            "i can start work on it immediately.\n" +
            "i'm very much confident to reach your expectation and give you 100% satisfaction and quality work.\n" +
            "hope you will give me this opportunity to serve you best\n" +
            
            "Thanks & regards\n" 
    },
    {
        "title": "C++, C#",
        "content": 
                    "Hi, \n"+
                    "I have 12++ years experience in C++, C# Programming. I understood your requirements completely and i can help you perfectly. \n"+
                    "When do you need this finished by? \n"+
                    "I can help you quickly! Please believe in me. \n"+
                    "I look forward to working on this project with you. \n\n"+
                    "Thanks and regards! \n" 
    },
    {
        "title": "Web App General",
        "content": 
            "Hi, \n" + 
            "I have many years experience in web programming including Laravel, NodeJS, React, Vue, Angular, Wordpress, magento. I completely understood your requirements and I can do it perfectly.\n" +
            "I have worked on many famous web projects. Those are as followings:\n\n" +

                "\thttps://cosmeticsonline.ie/\n" +
                "\thttps://www.momuse.ie/\n" +
                "\thttp://www.vapeworld.com/\n" +
                "\thttp://store.penny-arcade.com/\n" +
                "\thttp://www.touchzerogravity.com/\n\n" +

            "I can satisfy your requirements. When do you need finished by? I can do it very quickly.\n" +
            "Please see my workings on web programming. I look forward to working you project with you.\n" +

            "Thanks and Regards!\n"
    },
    {
        "title": "Web App with Laravel",
        "content": "Hi, \n"+
        "I have 6+ years experience in Laravel, I can understand your requirements and help you.\n"+
        "I 've already worked on many Laravel projects for many other employers. \nexapmle :\n"+
            "\thttps://cachethq.io/\n"+
            "\thttps://asgardcms.com\n"+
        "When do you need this finished by? I can do it very quickly! Please see the sample I worked and I look\n"+
        "forward to working on this project with you."
    },
    {
        "title": "Web App with React",
        "content": 
                "Hi, \n" +
                "I have 3 years experience in React, I understood your requirements and I can help you perfectly.\n" +
                "I have worked on many React projects. The samples as followings:\n\n" +

                "When do you need this project finished  by? I can do it as quickly as you want. Please see my samples.\n" +
                "I appreciate if I could work on this project with you.\n\n" +
                "Thanks and regards!"
    },
    {
        "title": "Web App with WordPress",
        "content": 
                    "Hi, \n"+
                    "I have 5+ years experience in Wordpress, I can help reach your requirements.\n"+
                    "I 've previously worked on many Wordpress projects (example: \n"+
                        "\thttp://www.csgrilledcheese.com/\n"+
                        "\thttps://hawthornlogistics.ie/\n"+
                        "\thttps://www.colonialbowlingnj.com/\n"+
                        "\thttps://www.sntravel.co.uk/ )\n"+
                    "When do you need this finished by? I can do it very quickly! Please see the sample I worked and I look\n"+
                    "forward to working on this project with you."
    },
    {
        "title": "Mobile App General",
        "content": 
                "Hi, \n"+
                "I have 5+ years experience in Moblile App developments and I can help reach your requirements.\n"+
                "I 've previously worked on many Mobile projects (example: \n\n"+
                "\tAndroid: https://play.google.com/store/apps/details?id=com.taxionspot\n"+
                "\tiOS: https://apps.apple.com/pk/app/taxionspot-driver-app/id1484805525\n"+
                "\tiOS: https://apps.apple.com/pk/app/schnellein-taxi-driver/id1481638462\n"+
                "https://play.google.com/store/apps/details?id=com.beoshop\n" +
                "https://apps.apple.com/us/app/havana-app/id1479943424?ls=1\n" +
                "https://play.google.com/store/apps/details?id=com.okema\n" +
                "https://apps.apple.com/us/app/okema/id1489280783?ls=1\n" +
                "https://play.google.com/store/apps/details?id=com.az.az\n" +
                "https://apps.apple.com/au/app/azshop/id1499604728\n" +
                "\tSolaristek.com\n\n"+
                "When do you need this finished by? I can do it very quickly! Please see the sample I worked and I look\n"+
                "forward to working on this project with you.\n\n"+
                "Thanks and Regards!"
    },
    {
        "title": "Mobile App RN & Flutter",
        "content": 
            "Hi, \n"+
            "I have rich experience in Flutter, I understood your requirements and I can help you perfectly.\n"+
            "\tI have worked on many Flutter projects. My workings are \n"+
            "\t1.) https://play.google.com/store/apps/details?id=com.deligence.bestindianrestaurant\n"+
            "\t2.) https://itunes.apple.com/us/app/best-indian-restaurants/id1435602964?ls=1&mt=8T\n"+
            "\t3.) https://play.google.com/store/apps/details?hl=en&id=com.prayuta.dailyfinance\n"+
            "When do you need this finished by? I can do it as your wishes. Please see my samples I worked and I\n"+
            "look forward to working on this project with you.\n"+
            "Thanks and regards!"
    },
    {
        "title": "Mobile Social Media App",
        "content": "Mobile Social Media App"
    },
];

function copyTextToClipboard(str) {
    console.log(str);
    var el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}