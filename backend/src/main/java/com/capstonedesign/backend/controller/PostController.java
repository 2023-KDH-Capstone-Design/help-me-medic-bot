package com.capstonedesign.backend.controller;


import com.capstonedesign.backend.domain.member.Member;
import com.capstonedesign.backend.domain.member.service.MemberService;
import com.capstonedesign.backend.domain.post.Post;
import com.capstonedesign.backend.domain.post.service.PostService;
import com.capstonedesign.backend.domain.post.service.dto.request.CreatePostRequestDTO;
import com.capstonedesign.backend.domain.post.service.dto.request.UpdatePostRequestDTO;
import com.capstonedesign.backend.domain.post.service.dto.response.*;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class PostController {

  private final PostService postService;
  private final MemberService memberService;

  /**
   * 게시글 작성
   */
  @PostMapping("/post/create")
  public CreatePostResponseDTO registerPost(@RequestBody CreatePostRequestDTO createPostRequestDTO) {

    Member findMember = memberService.findByName(createPostRequestDTO.getAuthor());
    Post post = Post.createPost(findMember, createPostRequestDTO.getTitle(), createPostRequestDTO.getContent());
    Long postId = postService.save(post);

    return new CreatePostResponseDTO(postId);

  }

  /**
   * 게시글 조회
   */
  @GetMapping("/post/list")
  public ListPostResponse<List<DetailPostResponseDTO>> listPost() {

    List<Post> posts = postService.findAll();
    List<DetailPostResponseDTO> collect = posts.stream().map(p ->
        new DetailPostResponseDTO(p.getId(), p.getMember().getName(), p.getTitle(), p.getContent(),
            p.getCreatedAt(), p.getUpdatedAt())).collect(Collectors.toList());

    return new ListPostResponse<>(collect.size(), collect);

  }

  /**
   * 게시글 상세 조회
   */
  @GetMapping("/post/list/{postId}")
  public DetailPostResponseDTO listPostDetail(@PathVariable Long postId) {

    Post findPost = postService.findById(postId);

    return new DetailPostResponseDTO(findPost.getId(), findPost.getMember().getName(), findPost.getTitle(),
        findPost.getContent(), findPost.getCreatedAt(), findPost.getUpdatedAt());
  }

  /**
   * 게시글 수정
   */
  @PostMapping("/post/update/{postId}")
  public UpdatePostResponseDTO updatePost(@PathVariable Long postId, @RequestBody UpdatePostRequestDTO updatePostRequestDTO) {

    postService.updatePost(postId, updatePostRequestDTO);
    Post findPost = postService.findById(postId);

    return new UpdatePostResponseDTO(findPost.getId(), findPost.getMember().getName(),
        findPost.getTitle(), findPost.getContent(), findPost.getCreatedAt(), findPost.getUpdatedAt());
  }

  /**
   * 게시글 삭제
   */
  @DeleteMapping("/post/delete/{postId}")
  public DeletePostResponseDTO deletePost(@PathVariable Long postId) {

    postService.deleteById(postId);

    return new DeletePostResponseDTO(postId);
  }
}
