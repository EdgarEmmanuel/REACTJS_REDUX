export default class Post{
    
    constructor(id,title,body){
        this.id=id;
        this.title=title;
        this.body = body;
    }

    getId(){
        return this.id;
    }

    getTitle(){
        return this.title;
    }

    getBody(){
        return this.body;
    }

    getClassInJSON(){
        return {
            id:this.getId(),
            title:this.getTitle(),
            body:this.getBody()
        }
    }
}