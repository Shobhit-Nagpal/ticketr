import { V4Options as UUID } from "uuid";

export interface Ticket {
  id?: UUID;
  created_at?: string;
  title?: string;
  description?: string;
  closed?: boolean;
}
