package com.capstonedesign.backend.domain.translate.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class TranslateRequest {

  private String source;

  private String target;

  private String text;
}
