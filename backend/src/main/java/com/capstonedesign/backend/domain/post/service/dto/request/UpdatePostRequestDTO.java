package com.capstonedesign.backend.domain.post.service.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UpdatePostRequestDTO {

  private String title;
  private String content;
}