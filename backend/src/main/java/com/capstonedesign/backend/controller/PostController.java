package com.capstonedesign.backend.controller;


import com.capstonedesign.backend.domain.member.Member;
import com.capstonedesign.backend.domain.member.service.MemberService;
import com.capstonedesign.backend.domain.post.Post;
import com.capstonedesign.backend.domain.post.service.PostService;
import com.capstonedesign.backend.domain.post.service.dto.request.CreatePostRequestDTO;
import com.capstonedesign.backend.domain.post.service.dto.request.UpdatePostRequestDTO;
import com.capstonedesign.backend.domain.post.service.dto.response.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@Api(tags = "게시글 관련 API")
public class PostController {

  private final PostService postService;
  private final MemberService memberService;

  /**
   * 게시글 작성
   */
  @PostMapping("/post/create")
  @ApiOperation(value = "게시글 작성 API", notes = "제목 및 내용을 요청 파라미터로 하여 게시글 작성")
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
  @ApiOperation(value = "게시글 목록 조회 API", notes = "전체 게시글 목록 조회")
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
  @ApiOperation(value = "특정 게시글 상세 조회 API", notes = "특정 게시물 상세 조회")
  public DetailPostResponseDTO listPostDetail(@PathVariable Long postId) {

    Post findPost = postService.findById(postId);

    return new DetailPostResponseDTO(findPost.getId(), findPost.getMember().getName(), findPost.getTitle(),
        findPost.getContent(), findPost.getCreatedAt(), findPost.getUpdatedAt());
  }

  /**
   * 게시글 수정
   */
  @PatchMapping("/post/update/{postId}")
  @ApiOperation(value = "게시글 수정 API", notes = "요청받은 게시글 정보 수정값에 따라 작성")
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
  @ApiOperation(value = "게시글 삭제 API", notes = "특정 게시글 삭제")
  public DeletePostResponseDTO deletePost(@PathVariable Long postId) {

    postService.deleteById(postId);

    return new DeletePostResponseDTO(postId);
  }
}
