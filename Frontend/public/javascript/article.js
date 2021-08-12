// Declare the class used to construct articles in index.html
class Article{
    constructor(jsonArticle){
        jsonArticle && Object.assign(this, jsonArticle);
        }
}