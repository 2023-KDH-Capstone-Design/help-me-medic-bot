package com.capstonedesign.backend.domain.comment;

import com.capstonedesign.backend.domain.user.User;
import com.capstonedesign.backend.domain.post.Post;
import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter @Setter
public class Comment {

  @Id @GeneratedValue
  private Long id;

  private String content;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "member_id")
  private User user;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "post_id")
  private Post post;

}
