package com.capstonedesign.backend.domain.user;

import com.capstonedesign.backend.domain.post.Post;
import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "users")
@Getter @Setter
public class User {

  @Id @GeneratedValue
  @Column(name = "user_id")
  private Long id;

  private String loginId;

  private String password;

  private String name;

  private String nickname;

  private String country;

  @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
  private List<Post> posts;
}
