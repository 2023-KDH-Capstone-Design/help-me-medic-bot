package com.capstonedesign.backend.domain.post.repository;

import com.capstonedesign.backend.domain.post.Post;

import java.util.List;

public interface PostRepository {

  void save(Post post);

  Post findById(Long id);

  List<Post> findByMemberId(Long memberId);

  List<Post> findAll();

  void deleteById(Long id);
}
