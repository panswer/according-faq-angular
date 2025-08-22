import { QaItem } from "./qa-item";

export interface QaItemComponent extends QaItem {
    id: string;
    isShow: boolean;
}
