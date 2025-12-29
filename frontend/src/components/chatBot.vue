<template>
  <div class="chatbot-container">
    <div class="chatbot-header">
      <div class="header-left">
        <div class="bot-icon">🤖</div>
        <div class="bot-info">
          <div class="bot-name">Hari’s Bot</div>
          <div class="bot-status">● We’re online</div>
        </div>
      </div>
      <div class="header-right">
        <!-- <el-icon :size="16"><Refresh /></el-icon> -->
        <el-icon :size="16" @click="close">
          <CircleCloseFilled />
        </el-icon>
      </div>
    </div>

    <div class="chat-body">
      <div v-for="msg in messages" :key="msg.id" :class="['message', msg.type]">
        {{ msg.text }}
      </div>
    </div>
    <div class="chat-input">
      <el-input v-model="message" placeholder="Enter message" clearable />
      <el-button type="primary" @click="TriggerAPI">Send</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: "",
      messages: [
        { id: 1, type: "bot", text: "Hi there!" },
        { id: 2, type: "user", text: "Hi there!" },
      ],
      nextId: 3,
    };
  },
  methods: {
    close() {
      this.$emit("close-bot");
    },
    TriggerAPI() {
      let { nextId, messages, message } = this;
      this.messages = [
        ...messages,
        { id: nextId, type: "user", text: message },
      ];
      nextId += 1;
      this.nextId = nextId;
      this.message = "";
    },
  },
};
</script>
<style>
.chatbot-container {
  position: fixed;
  bottom: 100px;
  right: 24px;
  width: 380px;
  height: 600px;
  background: white;
  z-index: 1000;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  opacity: 1 !important;
}

.chatbot-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bot-icon {
  font-size: 24px;
}

.bot-info {
  display: flex;
  flex-direction: column;
}

.bot-name {
  font-weight: 600;
}

.bot-status {
  font-size: 12px;
  color: green;
}

.header-right {
  display: flex;
  gap: 8px;
}

.chat-body {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message {
  padding: 12px;
  border-radius: 12px;
  max-width: 80%;
}

.message.bot {
  background: #f3f4f6;
  align-self: flex-start;
  text-transform: none;
}

.message.user {
  background: #7c3aed;
  color: #fff;
  align-self: flex-end;
  text-transform: none;
}

.chat-input {
  display: flex;
  gap: 8px;
  padding: 12px;
  border-top: 1px solid #eee;
}

.chatbot-icon {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  background-color: #7c3aed;
  color: white;
  font-size: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
  z-index: 1000;
}

.chatbot-container {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translateY(20px);
  opacity: 0;
}

.chatbot-container-enter-active,
.chatbot-container-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.chatbot-container-enter-from,
.chatbot-container-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

.chatbot-container-enter-to,
.chatbot-container-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
