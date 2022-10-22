import { Movie } from "./movie";

export class User {
    id!: number;
    username!: string;
    email!: string;
    password!: string;
    phone!: string;
    role: string = "ROLE_USER"
    favourites!: Movie[];
    constructor() {
        this.favourites = []
    }
}
