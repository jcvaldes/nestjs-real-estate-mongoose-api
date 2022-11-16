export class ListFeatures {
  surface: string;
  bathrooms: number;
}

export class CreatePropertyDto {
  readonly title: string;
  readonly price: number;
  readonly description: string;
  readonly features: ListFeatures;
}
