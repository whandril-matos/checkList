import Realm from "realm";

export const ChecklistSchema = {
    name: "Checklist",
    properties: {
        inNetWork: "bool",
        id: "string",  // ID único
        type: "string",
        amount_of_milk_produced: "int",
        number_of_cows_head: "int",
        had_supervision: "bool",
        farmName: "string",
        farmCity: "string",
        from: "string",
        to: "string",
        locationLatitude: "double",
        locationlongitude: "double",
        created_at: "string",
        updated_at: "string",
    },
};

