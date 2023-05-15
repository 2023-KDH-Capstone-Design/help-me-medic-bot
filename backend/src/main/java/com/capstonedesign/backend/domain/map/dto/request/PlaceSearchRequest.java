package com.capstonedesign.backend.domain.map.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class PlaceSearchRequest {

  private String keyword; // 병원 / 약국
  private String type; //  병원: hospital, 약국: pharmacy
  private int radius;
  private String latitude;
  private String longitude;

}
