import React from "react";
import $ from "jquery";
import * as SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";

const Chat = () => {
  let stompClient = null;

  const setConnected = (connected) => {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    $("#send").prop("disabled", !connected);
    if (connected) {
      $("#conversation").show();
    } else {
      $("#conversation").hide();
    }
    $("#msg").html("");
  };

  const connect = () => {
    const socket = new SockJS("/api/ws");
    stompClient = StompJs.Stomp.over(socket);
    stompClient.connect({}, (frame) => {
      setConnected(true);
      console.log("Connected: " + frame);
      stompClient.subscribe("/topic/public", (message) => {
        showMessage("받은 메시지: " + message.body);
      });
    });
  };

  const disconnect = () => {
    if (stompClient !== null) {
      stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
  };

  const sendMessage = () => {
    const message = $("#msg").val();
    showMessage("보낸 메시지: " + message);

    stompClient.send("/app/sendMessage", {}, JSON.stringify(message));
  };

  const showMessage = (message) => {
    $("#communicate").append("<tr><td>" + message + "</td></tr>");
  };

  $(() => {
    $("form").on("submit", (e) => {
      e.preventDefault();
    });
    $("#connect").click(() => {
      connect();
    });
    $("#disconnect").click(() => {
      disconnect();
    });
    $("#send").click(() => {
      sendMessage();
    });
  });

  return (
    <div id="main-content" className="container">
      <div className="row">
        <div className="col-md-6">
          <form className="form-inline">
            <div className="form-group">
              <label htmlFor="connect">웹소켓 연결:</label>
              <button id="connect" className="btn btn-default" type="submit">
                연결
              </button>
              <button
                id="disconnect"
                className="btn btn-default"
                type="submit"
                disabled="disabled"
              >
                해제
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <form className="form-inline">
            <div className="form-group">
              <label htmlFor="msg">문의사항</label>
              <input
                type="text"
                id="msg"
                className="form-control"
                placeholder="내용을 입력하세요...."
              />
            </div>
            <button
              id="send"
              className="btn btn-default"
              disabled
              type="submit"
            >
              보내기
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table id="conversation" className="table table-striped">
            <thead>
              <tr>
                <th>메세지</th>
              </tr>
            </thead>
            <tbody id="communicate"></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Chat;

// import ChatLog from "../components/chat/ChatLog";
// import ChatForm from "../components/chat/ChatForm";
// return (
//   <section classNameName="msger w-full mx-auto flex flex-col gap-8">
//     <ChatLog />
//     <ChatForm />
//   </section>
// );
