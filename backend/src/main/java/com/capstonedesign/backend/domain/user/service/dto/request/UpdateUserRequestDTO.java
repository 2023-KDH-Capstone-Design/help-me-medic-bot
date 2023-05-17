package com.capstonedesign.backend.domain.user.service.dto.request;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class UpdateUserRequestDTO {

  private String name;
  private int age;

}
