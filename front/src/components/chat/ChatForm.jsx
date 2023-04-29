import React from "react";

const ChatForm = () => {
  return (
    <section class="msger w-full mx-auto flex flex-col gap-8 mt-8">
      <main class="msger-chat">
        <div class="chat chat-start ml-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="kimdamae.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-bubble">나는 개입니다. 월월</div>
        </div>
        <div class="chat chat-end mr-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="dog.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-bubble">저는 조붕딱입미다.</div>
        </div>
        <div class="chat chat-start ml-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="kimdamae.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-bubble">나는 개입니다. 월월</div>
        </div>
        <div class="chat chat-end mr-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="dog.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-bubble">저는 조붕딱입미다.</div>
        </div>
        <div class="chat chat-start ml-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="kimdamae.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-bubble">나는 개입니다. 월월</div>
        </div>
        <div class="chat chat-end mr-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="dog.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-bubble">저는 조붕딱입미다.</div>
        </div>
        <div class="chat chat-start ml-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="kimdamae.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-bubble">나는 개입니다. 월월</div>
        </div>
        <div class="chat chat-end mr-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="dog.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-bubble">저는 조붕딱입미다.</div>
        </div>
        <div class="chat chat-start ml-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="kimdamae.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-bubble">나는 개입니다. 월월</div>
        </div>
        <div class="chat chat-end mr-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="dog.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-bubble">저는 조붕딱입미다.</div>
        </div>
        <div class="chat chat-start ml-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="kimdamae.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-bubble">나는 개입니다. 월월</div>
        </div>
        <div class="chat chat-end mr-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="dog.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-bubble">저는 조붕딱입미다.</div>
        </div>
        <div class="chat chat-start ml-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="kimdamae.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-bubble">나는 개입니다. 월월</div>
        </div>
        <div class="chat chat-end mr-2">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img src="dog.jpg" alt="face" />
            </div>
          </div>
          <div class="chat-bubble">저는 조붕딱입미다.</div>
        </div>
      </main>
      <form class="flex-0 msger-inputarea">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <button className="btn btn-outline btn-info">Send</button>
          </div>
        </div>
      </form>
    </section>
  );
};
export default ChatForm;
