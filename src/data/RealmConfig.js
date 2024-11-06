import Realm from "realm";
import { ChecklistSchema } from "./listTypeSchema";

const realmConfig = {
    schema: [ChecklistSchema],
    schemaVersion: 1, // Mantenha o controle da versão do seu esquema
};

export const realm = new Realm(realmConfig);
