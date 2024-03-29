import chatsSchema from '../models/chats.js';

export async function createChat(req, res) {
  const { firstId, secondId } = req?.body;

  try {
    const chat = await chatsSchema.findOne({
      members: { $all: [firstId, secondId] },
    });

    if (chat) return res.status(200).json(chat);

    const newChat = new chatsSchema({ members: [firstId, secondId] });
    const response = await newChat.save();

    res.status(200).json(response);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function findUserChats(req, res) {
  const userId = req?.params?.userId;

  try {
    const chats = await chatsSchema.find({ members: { $in: [userId] } });

    return res.status(200).json(chats);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function findChat(req, res) {
  const { firstId, secondId } = req?.params;

  try {
    const chats = await chatsSchema.findOne({
      members: { $all: [firstId, secondId] },
    });

    return res.status(200).json(chats);
  } catch (error) {
    return res.status(500).json(error);
  }
}
