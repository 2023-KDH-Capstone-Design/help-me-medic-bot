package com.capstonedesign.backend.domain.member.service.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DetailMemberResponseDTO {
  private Long id;
  private String name;
  private int age;
}
