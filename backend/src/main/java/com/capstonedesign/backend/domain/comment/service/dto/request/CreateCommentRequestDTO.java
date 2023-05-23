package com.capstonedesign.backend.domain.comment.service.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CreateCommentRequestDTO {

  private Long userId;

  private String content;
}