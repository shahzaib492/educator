export interface Car {
    id: any;
    name: String;
    country: {
        name: String,
        code: String
    },
    company: String,
    date: Date,
    status: String,
    activity: String,
    representative: {
        name: String,
        image: String
    }
}