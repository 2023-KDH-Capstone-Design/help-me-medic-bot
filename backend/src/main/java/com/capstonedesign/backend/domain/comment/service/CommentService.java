package com.capstonedesign.backend.domain.comment.service;

import com.capstonedesign.backend.domain.comment.Comment;
import com.capstonedesign.backend.domain.comment.repository.CommentRepository;
import com.capstonedesign.backend.domain.comment.service.dto.request.UpdateCommentRequestDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class CommentService {

  private final CommentRepository commentRepository;

  public Long save(Comment comment) {

    commentRepository.save(comment);

    return comment.getId();
  }

  public Comment findById(Long id) {

    return commentRepository.findById(id);
  }

  public List<Comment> findAll() {

    return commentRepository.findAll();
  }

  public void updateComment(Long id, UpdateCommentRequestDTO request) {

    Comment comment = findById(id);

    comment.setContent(request.getContent());
    comment.setUpdatedAt(LocalDateTime.now());
  }

  public void delete(Long id) {

    commentRepository.deleteComment(id);
  }
}
