// https://api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey


//Hec5h0CYuZkjNOjZC11M86APSSeLVJQd

//https://api.nytimes.com/svc/topstories/v2/world.json?api-key=Hec5h0CYuZkjNOjZC11M86APSSeLVJQd

let headlines = document.getElementById("headlines");

let url = "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=Hec5h0CYuZkjNOjZC11M86APSSeLVJQd";


fetch(url).then(response => response.json()).then(data => {
    console.log(data);
    data.results.map(article => {
        console.log(article.title)
        let a = document.createElement("a");
        a.setAttribute("href", article.url)
        a.innerHTML = article.title;


        let p = document.createElement("p");
        p.innerHTML = article.abstract;

        let img = document.createElement("img");
        img.setAttribute("src", article.multimedia[0].url)

        let cap = document.createElement("cap");
        cap.innerHTML = article.multimedia[0].caption

        let copyright = document.createElement("copyright");
        copyright.innerHTML = article.multimedia[0].copyright


        headlines.appendChild(img)
        headlines.appendChild(cap);
        headlines.appendChild(copyright);
        headlines.appendChild(a);
        headlines.appendChild(p);






    })
})