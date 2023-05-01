package com.capstonedesign.backend.domain.member.service.dto.request;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UpdateMemberRequestDTO {

  private String name;
  private int age;

}
