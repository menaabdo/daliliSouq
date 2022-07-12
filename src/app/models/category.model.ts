export interface Category {
    id:number
    name:string;
    image:string;
    icon:string
    has_category:boolean;
    ads:number
    category:Category
    banner:string
    is_color:number
    is_size:number
    properties:[]
    is_online:number
}
