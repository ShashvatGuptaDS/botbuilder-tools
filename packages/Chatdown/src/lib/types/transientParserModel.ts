import { ChannelAccount, ConversationAccount } from '../serializable';

export interface TransientParserModel {
  accounts?: { [account: string]: ChannelAccount };
  bot?: string;
  conversation?: ConversationAccount;
  from?: ChannelAccount;
  newMessageRegEx?: RegExp;
  recipient?: ChannelAccount;
  user?: string;
  users?: string[];
}