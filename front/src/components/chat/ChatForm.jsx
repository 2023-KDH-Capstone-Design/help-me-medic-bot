import React from "react";

const ChatForm = () => {
  return (
    <section class="msger max-w-3xl mx-auto bg-gray-100">
      <main class="msger-chat">
        <div class="chat chat-start ml-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="kimdamae.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-header">
            kim da mae
            <time class="text-xs opacity-50">12:45</time>
          </div>
          <div class="chat-bubble">나는 개입니다. 월월</div>
          <div class="chat-footer opacity-50">Delivered</div>
        </div>
        <div class="chat chat-end mr-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="dog.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-header">
            jo boong sin
            <time class="text-xs opacity-50">12:46</time>
          </div>
          <div class="chat-bubble">저는 조붕딱입미다.</div>
          <div class="chat-footer opacity-50">Seen at 12:46</div>
        </div>
      </main>
      <form class="msger-inputarea">
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-[84%]"
        />
        <button type="submit" class="btn btn-outline btn-info">
          Send
        </button>
      </form>
    </section>
  );
};
export default ChatForm;
