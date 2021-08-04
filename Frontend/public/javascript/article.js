

class Article{
    constructor(jsonArticle){
        // jsonArticle = article au format json. C'est au format de ce que renvoie le backend.
        jsonArticle && Object.assign(this, jsonArticle);
        }

    
}