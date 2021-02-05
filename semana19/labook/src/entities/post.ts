enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}
 
export class Post {
    private type:POST_TYPES

    constructor(
        private id:string,
        private photo:string,
        private description:string,
        type:string,
        private created_at: string,
        private author_id:string
        
    ) {
        if (type === POST_TYPES.NORMAL) {
            this.type = POST_TYPES.NORMAL
         } else if (type === POST_TYPES.EVENT) {
            this.type =  POST_TYPES.EVENT
         } else {
            throw new Error("Envie um Post Type válido. Os valores válidos são \'normal\' ou \'event\'")
         }
    }
    
    public getId = ():string => this.id
    public getPhoto = ():string => this.photo
    public getDescription = ():string => this.description
    public getType = ():string => this.type
    public getCreatedAt = ():string => this.created_at
    public getAuthorId = ():string => this.author_id   
}