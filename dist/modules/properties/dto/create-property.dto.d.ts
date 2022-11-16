export declare class ListFeatures {
    surface: string;
    bathrooms: number;
}
export declare class CreatePropertyDto {
    readonly title: string;
    readonly price: number;
    readonly description: string;
    readonly features: ListFeatures;
}
