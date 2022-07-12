import { City } from "./city.model";
import { User } from "./user.model";

export interface Store {
    id:number
    name:string;
    s_name:string
    image:string;
    bg:string;
    no_views:number;
    no_adds:number;
    rate:number;
    user:User;
    city:City;
    is_follow:number;
    no_followings:number,
    followers_count:number
    no_follows:number
    

}
