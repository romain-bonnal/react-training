export default class Post {
    public id!: number;
    public title!: string;
    public excerpt!: string;
    public content!: string;
    public imageURI!: string;
    
    constructor(data?: Partial<Post>) {
        if (data?.id) {
          this.id = data.id;
        }
        if (data?.title) {
          this.title = data.title;
        }
        if (data?.excerpt) {
          this.excerpt = data.excerpt;
        }
        if (data?.content) {
          this.content = data.content;
        }
        if (data?.imageURI) {
          this.imageURI = data.imageURI;
        }
      }
    
    public fromApi(data: any) {
        if (data.id){
            this.id = data.id;
        }

        return this;
    }

    public toApi() {
        return JSON.stringify(this);
    }
}
