package com.capstonedesign.backend.domain.member;

import com.capstonedesign.backend.domain.post.Post;
import javax.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "members")
@Getter @Setter
public class Member {

  @Id @GeneratedValue
  @Column(name = "member_id")
  private Long id;

  private String loginId;

  private String password;

  private String name;

  private int age;

  @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
  private List<Post> posts;

//  @OneToMany(mappedBy = "member")
//  private List<Item> items = new ArrayList<>();
}