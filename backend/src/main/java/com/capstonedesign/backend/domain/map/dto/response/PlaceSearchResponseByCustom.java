package com.capstonedesign.backend.domain.map.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PlaceSearchResponseByCustom<T> {

  private int count;
  private T results;
}
