class Article{
    constructor(jsonArticle)
    // jsonArticle && Object.assign(this, jsonArticle);

// getFormatedDate(article){
//     let timestamp = Date.parse(this.publicationDate);
//     let date = new Date(timestamp);
//     return date.toLocaleDateString();
// }
}



class ArticlaManager{
    constructor(listArticle){
        this.listArticle = listArticle;
    }

    sort(){
        return this.listArticle.sort((a, b) => {
            return (Date.parse(a.publicationDate) < Date.parse(b.publicationDate))?1:-1;
        })
    }
}



fetch ("http://trutruc")
    .then(data => data.json())
    .then(jsonListArticle => {
        console.log(jsonListArticle); 
        for (let jsonArticle of jsonListArticle){
            let article = new Article(jsonArticle);
            // document.querySelector(".container").innerHTML += 
        }
    });


function addFavorites(articlesId){
    let listFavorites = getFavorites();
    listFavorites.push(articlesId);
    saveFavorites(listFavorites);
}




    function getFavorites(){
        let listFavorites = localStorage.getItem("listFavorites");
        if(listFavorites == null){
            return [];
        }else{
            return JSON.parse(listFavorites);
        }
    }

    function saveFavorites(listFavorites){
        localStorage.setItem("listFavorites", JSON.stringify(listFavorites));
    }