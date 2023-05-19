package com.capstonedesign.backend.domain.user.service.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ListUserResponse<T> {

  private int count;
  private T data;
}