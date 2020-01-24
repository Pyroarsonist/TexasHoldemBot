import debugHandler from 'debug';
import { User, Chat } from 'data/models';
import _ from 'lodash';

const debug = debugHandler('texas-holdem-bot:commands:middleware');

const formatUser = user => ({
  id: user.id,
  isBot: user.is_bot,
  firstName: user.first_name,
  lastName: user.last_name,
  userName: user.username,
  languageCode: user.language_code,
});

const formatChat = chat => ({
  ..._.pick(chat, ['id', 'title', 'type']),
  id: chat.id,
  title: chat.title,
  type: chat.type,
  firstName: chat.first_name,
  lastName: chat.last_name,
  userName: chat.username,
});

export default async (ctx, next) => {
  const _user = formatUser(ctx.from);
  const [user, userWasCreated] = await User.findOrCreate({
    where: { id: _user.id },
    defaults: _user,
  });
  ctx.state.user = user;
  if (userWasCreated) {
    debug('Created new user %s', user.id);
  } else {
    _.forEach(_.omit(_user, 'id'), (val, key) => {
      user[key] = val;
    });
    await user.save();
  }
  const _chat = formatChat(ctx.chat);
  const [chat, chatWasCreated] = await Chat.findOrCreate({
    where: { id: _chat.id },
    defaults: _chat,
  });
  ctx.state.chat = chat;
  if (chatWasCreated) {
    debug('Created new chat %s', chat.id);
  } else {
    _.forEach(_.omit(_chat, 'id'), (val, key) => {
      chat[key] = val;
    });
    await chat.save();
  }
  return next(ctx);
};
