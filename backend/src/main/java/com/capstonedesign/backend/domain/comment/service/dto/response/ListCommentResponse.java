package com.capstonedesign.backend.domain.comment.service.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ListCommentResponse<T> {

  private int count;
  private T data;
}
