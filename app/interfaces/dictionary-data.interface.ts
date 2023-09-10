export interface IDictionaryData {
    train: {
        museumMainTitle: string;
        navigation: {
          popperDynasty: string;
          theOldestNarrowGaugeRailway: string;
          touristRoute: string;
          theBaronsResidence: string;
        },
        links: {
          popperDynasty: string;
          theOldestNarrowGaugeRailway: string;
          touristRoute: string;
          theBaronsResidence: string;
        };
      };
      book: {
        pages: {
          popperDynasty: {
            [key: string]: string;
          };
          theOldestNarrowGaugeRailway: {
            [key: string]: string;
          };
          touristRoute: {
            [key: string]: string;
          };
          theBaronsResidence: {
            [key: string]: string;
          };
        };
    };
}