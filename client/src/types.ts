export interface ServerResultUser {
    user: {
        username: string;
    }
}

export interface Group {
    name: string;
}

export interface User {
    username: string;
    groups: Group[];
}
