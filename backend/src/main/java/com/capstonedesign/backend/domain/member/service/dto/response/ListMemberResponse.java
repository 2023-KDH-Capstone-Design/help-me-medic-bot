package com.capstonedesign.backend.domain.member.service.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ListMemberResponse<T> {

  private int count;
  private T data;
}
