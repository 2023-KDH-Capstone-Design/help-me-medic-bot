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
      User user3 = createUser("admin3", "2222", "user2_name", "오빠나주겅", "korea");
      em.persist(user1);
      em.persist(user2);
      em.persist(user3);

      Post post1 = createPost(user1, "아~ 챗봇 답변 좆같이 하네ㅋㅋ");
      Post post2 = createPost(user2, "롤할 사람");
      em.persist(post1);
      em.persist(post2);

      Comment comment1 = createComment(user2, post1, "그거 원래 그럼");
      Comment comment2 = createComment(user3, post1, "난 안 그런데?ㅋㅋ");
      em.persist(comment1);
      em.persist(comment2);

//      em.flush();
    }

    private User createUser(String loginId, String password, String name, String nickname, String country) {

      return User.createUser(loginId, password, name, nickname, country);
    }

    private Post createPost(User user, String content) {

      return Post.createPost(user, content);
    }

    private Comment createComment(User user, Post post, String content) {

      return Comment.createComment(user, post, content);
    }

  }
}
