package com.capstonedesign.backend;

import com.capstonedesign.backend.domain.comment.Comment;
import com.capstonedesign.backend.domain.post.Post;
import com.capstonedesign.backend.domain.user.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;

@Component
@RequiredArgsConstructor
public class InitDb {

  private final InitService initService;

  /**
   * 애플리케이션 실행 전에 미리 init() 실행
   */
  @PostConstruct
  public void init() {
    initService.dbInit();
  }

  @Component
  @Transactional
  @RequiredArgsConstructor
  @Slf4j
  static class InitService {

    private final EntityManager em;

    public void dbInit() {

      User user1 = createUser("admin", "0000", "user1_name", "조병찬", "korea");
      User user2 = createUser("admin2", "1111", "user2_name", "이토 히로부미", "japan");
      em.persist(user1);
      em.persist(user2);

      log.info("user1.getNickname() -> " + user1.getNickname());
      log.info("user2.getNickname() -> " + user2.getNickname());

      Post post1 = createPost(user1, "게시글1", "아~ 챗봇 답변 좆같이 하네ㅋㅋ");
//      log.info("post1.getContent() -> " + post1.getContent());
      Post post2 = createPost(user2, "게시글2", "롤할 사람");
      em.persist(post1);
      em.persist(post2);
//      em.flush();
    }

    private User createUser(String loginId, String password, String name, String nickname, String country) {

      return User.createUser(loginId, password, name, nickname, country);
    }

    private Post createPost(User user, String title, String content) {

      return Post.createPost(user, title, content);
    }

//    private Comment createComment(User user, Post post, String content) {
//
//      return Comment.createComment(user, post, content);
//    }

  }
}
