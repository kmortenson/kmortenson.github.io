var article = document.querySelector('article');
var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    var townData = request.response;
    showData(townData);
}

function showData(jsonObj) {
    var data = jsonObj['towns'];


    for (var i = 0; i < data.length; i++) {
        if ((data[i].name == "Preston" || data[i].name == "Soda Springs" || data[i].name == "Fish Haven") == false) {
            continue;
        }
        var myArticle = document.createElement('div');
        var myH5 = document.createElement('h5');
        var myPara1 = document.createElement('h6');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        var myPara4 = document.createElement('p');
        var myPhoto = document.createElement('img');

        myH5.textContent = data[i].name;
        myPara1.textContent = data[i].motto;
        myPara2.textContent = 'Year Founded: ' + data[i].yearfounded;
        myPara2.textContent = 'Current Population: ' + data[i].currentPopulation;
        myPara2.textContent = 'Average Rain Fall: ' + data[i].averageRainfall;

        myArticle.appendChild(myH5);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPhoto);
        if (data[i].name == "Fish Haven") {
            myPhoto.scr = "images/home2.jpg"
            myPhoto.setAttribute('class', 'homePhoto');
            myPhoto.setAttribute('alt', 'Fish Haven Photo'); 
            myArticle.style.order = "3";
        }
        if (data[i].name == "Preston") {
            myPhoto.scr = "images/home1.jpg"
            myPhoto.setAttribute('class', 'homePhoto');
            myPhoto.setAttribute('alt', 'Preston Photo');
            myArticle.style.order = "1";
        }
        if (data[i].name == "Soda Springs") {
            myPhoto.scr = "images/home3.jpg"
            myPhoto.setAttribute('class', 'homePhoto');
            myPhoto.setAttribute('alt', 'Soda Springs Photo');
            myArticle.style.order = "2";
        }
        article.appendChild(myArticle);


    }

}